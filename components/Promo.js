import NextLink from 'next/link'
import NextImage from 'next/image'
import {
    Heading,
    Flex,
    Spacer,
    useColorMode,
    IconButton,
    Tooltip,
    Button,
    Stack,
    Icon,
    useToast
} from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


function Promo({ source }) {
    return (
        <Flex flexDirection='column' mt={10}>
            {/* <NextImage
                src='/images/projects/content_ph.png'
                width={980}
                height={551}
                priority
            /> */}
            <Flex>
                <video width="980" height="551" autoPlay="autoplay" muted preload='true' loop>
                    <source src={source} type="video/mp4" />
                </video>
            </Flex>
            <Stack flexDirection='column' spacing={4} maxW='200px' mt={5}>
                <Button leftIcon={<FaGithub size={20} />} variant="link" justifyContent='left' _hover={{ color: 'gray.500' }}>
                    GitHub
                </Button>
                <Button leftIcon={<FaExternalLinkAlt size={18} />} variant="link" justifyContent='left' _hover={{ color: 'gray.500' }}>
                    Live Demo
                </Button>
            </Stack>
        </Flex>
    )
}

export default Promo