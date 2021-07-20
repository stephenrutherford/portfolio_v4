import { Heading, Icon, Spacer, Stack, Text, Link } from "@chakra-ui/react"
import { FaCat } from 'react-icons/fa';
import NextLink from 'next/link'

function Footer() {
    return (
        <Stack direction='column' m={6} w='100%' spacing={6}>
            <Stack direction='row' justifyContent='center'>
                <Stack>
                    <NextLink href='/' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Home</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Projects</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/articles' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Articles</Text>
                        </Link>
                    </NextLink>
                </Stack>

                <Spacer />

                <Stack>
                    <NextLink href='/contact' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Contact</Text>
                        </Link>
                    </NextLink>
                    <NextLink href='/resume' passHref>
                        <Link>
                            <Text fontSize='lg' color='gray.500'>Resume</Text>
                        </Link>
                    </NextLink>
                </Stack>

                <Spacer />

                <Stack>
                    <Link href="https://github.com/stephenrutherford" color='gray.500' fontSize='lg' isExternal>
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/stephen-rutherford-b420951a3/" color='gray.500' fontSize='lg' isExternal>
                        LinkedIn
                    </Link>
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