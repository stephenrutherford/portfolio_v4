import { Heading, Icon, Spacer, Stack, Text, Link, useToast } from "@chakra-ui/react"
import { FaCat } from 'react-icons/fa';
import NextLink from 'next/link'

function Footer() {

    const toast = useToast()
    const emailAddress = ['stephen', '@', 'rutherford.dev']

    return (
        <Stack direction='column' m={6} w='100%' spacing={6}>
            <Stack direction='row' justifyContent='center'>

                <NextLink href='/' passHref>
                    <Link
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                            // letterSpacing: "0.1rem",
                        }}>
                        <Text fontSize='lg' color='gray.500'>Home</Text>
                    </Link>
                </NextLink>

                <Spacer />

                <Link
                    onClick={() => {
                        toast({
                            title: "Email copied to clipboard.",
                            description: emailAddress.join(''),
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        })
                            ; navigator.clipboard.writeText(emailAddress.join(''))
                    }
                    }
                    style={{
                        color: "inherit",
                        textDecoration: "inherit",
                        // letterSpacing: "0.1rem",
                    }}
                >
                    <Text fontSize='lg' color='gray.500'>Email</Text>
                </Link>

                <Spacer />
                <NextLink href='/resume' passHref>
                    <Link
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                            // letterSpacing: "0.1rem",
                        }}>
                        <Text fontSize='lg' color='gray.500'>Resume</Text>
                    </Link>
                </NextLink>
            </Stack>
            <Stack direction='row' justifyContent='center'>
                <Heading size='md'>Powered by Catpuccinos</Heading>
                <Icon as={FaCat} w={6} h={6} color='#00abe9' />
            </Stack>
        </Stack>
    )
}

export default Footer