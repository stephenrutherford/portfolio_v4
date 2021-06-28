import { Heading, Icon, Spacer, Stack, Text, Link, useToast } from "@chakra-ui/react"
import { FaCat } from 'react-icons/fa';
import NextLink from 'next/link'

function Footer() {

    const toast = useToast()
    const emailAddress = ['stephen', '@', 'rutherford.dev']

    return (
        <Stack direction='column' m={6} w='100%' spacing={6}>
            <Stack direction='row' justifyContent='center'>
                <Stack>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Home</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Projects</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Articles</Text>
                        </Link>
                    </NextLink>
                </Stack>

                <Spacer />

                <Stack>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Contact</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Resume</Text>
                        </Link>
                    </NextLink>
                </Stack>

                <Spacer />

                <Stack>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>GitHub</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>LinkedIn</Text>
                        </Link>
                    </NextLink>
                </Stack>

            </Stack>
            <Stack direction='row' justifyContent='center'>
                <Heading size='sm'>Powered by Catpuccinos</Heading>
                <Icon as={FaCat} w={6} h={6} color='#00abe9' />
            </Stack>
        </Stack>
    )
}

export default Footer