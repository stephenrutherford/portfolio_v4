import { useState } from 'react'
import {
    Flex, Button, Stack, Spacer, Heading, Text, useBreakpointValue, useColorMode, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Textarea
} from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'
import PillPity from 'pill-pity';
import { FaFile } from 'react-icons/fa';

function Contact() {
    const { colorMode, toggleColorMode } = useColorMode()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const variant = useBreakpointValue({
        base: "column",
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
    })

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            email,
            message
        }

        setSubmitted(true)

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(false)
                setName('')
                setEmail('')
                setMessage('')
            }
        })

    }

    return (
        <Flex mt={10}>
            <Stack direction='column' spacing={4}>
                <Stack direction='row'>
                    <Heading color='#00abe9'>Contact Form</Heading>
                </Stack>
                <Stack direction={variant} spacing={10} alignItems='top'>
                    {/* Description */}
                    <Flex maxW='490px' w='100%' flexDirection='column'>
                        <form action='submit' method='POST' onSubmit={handleOnSubmit}>
                            <Stack spacing={6}>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Name:</FormLabel>
                                    <Input type="text" variant="filled" value={name} onChange={(e) => { setName(e.target.value) }} />
                                    <FormErrorMessage>Name is Required</FormErrorMessage>
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address:</FormLabel>
                                    <Input type="email" variant="filled" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </FormControl>
                                <FormControl id="text" isRequired>
                                    <FormLabel>Message:</FormLabel>
                                    <Textarea
                                        placeholder="Here is a sample placeholder"
                                        variant="filled"
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value) }}
                                    />
                                </FormControl>
                                <Button leftIcon={<FaFile />} type="submit" colorScheme="blue" variant="solid" pt={6} pb={6} pl={4} pr={4} iconSpacing={4} maxW='200px'
                                    isLoading={submitted}
                                >
                                    SUBMIT
                                </Button>
                            </Stack>

                        </form>
                    </Flex >
                    <Spacer />
                    {/* Illustration */}
                    <Flex maxH='350px'>
                        <NextImage
                            src='/images/contact.svg'
                            width={500}
                            height={500}
                            priority
                        />
                    </Flex>
                </Stack >
            </Stack >

            {/* </Flex > */}
        </Flex >
    )
}

export default Contact
