import { Flex, Button, Stack, Link } from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


function Promo({ source, githubSrc, demoSrc }) {
    return (
        <Flex flexDirection='column' mt={10}>
            <Flex>
                <video width="980" autoPlay="autoplay" muted preload='true' loop playsInline='true'>
                    <source src={source} type="video/mp4" />
                </video>
            </Flex>
            <Stack flexDirection='column' spacing={4} maxW='200px' mt={5}>
                <Link href={githubSrc} isExternal>
                    <Button leftIcon={<FaGithub size={20} />} variant="link" justifyContent='left' _hover={{ color: 'gray.500' }}>
                        GitHub
                    </Button>
                </Link>
                <Link href={demoSrc} isExternal>
                    <Button leftIcon={<FaExternalLinkAlt size={18} />} variant="link" justifyContent='left' _hover={{ color: 'gray.500' }}>
                        Live Demo
                    </Button>
                </Link>
            </Stack>
        </Flex>
    )
}

export default Promo
