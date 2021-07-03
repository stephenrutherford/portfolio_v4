import NextLink from 'next/link'
import {
    Heading,
    Flex,
    Spacer,
    useColorMode,
    IconButton,
    Tooltip,
    Link,
    HStack,
    Icon,
    useToast,
    Text
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    const toast = useToast()
    const emailAddress = ['stephen', '@', 'rutherford.dev']

    const router = useRouter();

    return (
        <Flex p={0} alignItems='center'>
            <Flex display={router.pathname === '/' ? 'none' : 'inherit'}>
                <Heading
                    fontSize='xl'
                    color={colorMode === "light" ? "gray.600" : "gray.200"}
                >
                    <NextLink href={'/'} passHref>
                        <Link
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                                // letterSpacing: "0.1rem",
                            }}>Stephen Rutherford</Link>
                    </NextLink>
                </Heading>
            </Flex>
            <Spacer />
            <HStack spacing='4'>
                <NextLink href={'/projects'} passHref>
                    <Link _hover={{ color: 'gray.500', textDecoration: 'underline' }}>Projects</Link>
                </NextLink>
                <NextLink href={'/articles'} passHref>
                    <Link _hover={{ color: 'gray.500', textDecoration: 'underline' }}>Articles</Link>
                </NextLink>
                <Link href="https://github.com/stephenrutherford" isExternal>
                    <Icon as={FaGithub} w={5} h={5} _hover={{ color: 'gray.500' }} />
                </Link>
                <Link href="https://www.linkedin.com/in/stephen-rutherford-b420951a3/" isExternal>
                    <Icon as={FaLinkedinIn} w={5} h={5} _hover={{ color: 'gray.500' }} />
                </Link>
                <NextLink href={'/contact'} passHref>
                    <Link>
                        <Icon as={FaEnvelope} w={5} h={5} _hover={{ color: 'gray.500' }} />
                    </Link>
                </NextLink>
                <Tooltip hasArrow label='Night/Day Mode!' /*defaultIsOpen*/>
                    <IconButton
                        aria-label='Color Mode Button'
                        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                        variant='outline'
                    />
                </Tooltip>
            </HStack>
        </Flex >
    )
}

export default Header