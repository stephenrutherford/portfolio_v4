import { useState } from 'react'
import {
    Flex, Button, Stack, Spacer, Heading, Text, useBreakpointValue, useColorMode, FormControl, FormLabel, Input, Textarea, Alert, AlertIcon, AlertTitle, AlertDescription
} from "@chakra-ui/react"
import NextImage from 'next/image'
import { FaFile } from 'react-icons/fa';

function Contact() {
    const { colorMode, toggleColorMode } = useColorMode()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')

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
            if (res.status === 200) {
                setSubmitted(false)
                setName('')
                setEmail('')
                setMessage('')
                setStatus('success')
            }
            else {
                setStatus('error')
            }
        })

    }

    return (
        <Flex mt={10} flexDirection='column'>
            <Heading color='#00abe9'>Contact Form</Heading>
            <Stack direction={variant} spacing={10} alignItems='top' mt={10}>
                {/* Description */}
                <Flex maxW='490px' w='100%' flexDirection='column'>
                    <form action='submit' method='POST' onSubmit={handleOnSubmit}>
                        <Stack spacing={6}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name:</FormLabel>
                                <Input type="text" variant="filled" value={name} onChange={(e) => { setName(e.target.value) }} />
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
                                loadingText="Submitting"
                            >
                                SUBMIT
                            </Button>
                            {/* Mail API Alert */}
                            <Flex>
                                {status === "success" ?
                                    <Alert status="success">
                                        <AlertIcon />
                                        <AlertTitle mr={2}>Success!</AlertTitle>
                                        <AlertDescription>Your email has been sent.</AlertDescription>
                                    </Alert>
                                    : status === "error" ?
                                        <Alert status="error">
                                            <AlertIcon />
                                            <AlertTitle mr={2}>Error!</AlertTitle>
                                            <AlertDescription>Your email was unable to be sent.</AlertDescription>
                                        </Alert>
                                        : null
                                }
                            </Flex>
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

        </Flex >
    )
}

export default Contact
