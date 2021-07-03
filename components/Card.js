import {
    Heading,
    Text,
    Flex,
    Spacer,
    Stack,
    Image,
    Link,
    Badge,
    useBreakpointValue,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react"
import { transform } from "framer-motion"
import styles from "../styles/Home.module.css"
import NextImage from 'next/image'
import NextLink from 'next/link'



function Card({ link, source, heading, description, badge1, badge2, badge3 }) {
    const variant = useBreakpointValue({
        base: "column",
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
    })

    return (
        <LinkBox as="article">

            <Stack w='100%' direction={variant} spacing={6}>

                <Flex rounded='2xl' overflow='hidden' maxW='500px' w='100%' boxShadow="lg">
                    {/* <NextImage
                        src={source}
                        width={350}
                        height={240}
                        objectFit='cover'
                        priority
                    /> */}
                    <video width="500" height="281" autoPlay='autoplay' muted preload='true' loop>
                        <source src={source} type="video/mp4" />
                    </video>
                </Flex>

                <Flex w='100%'>
                    <Stack>
                        <Heading size='lg' _hover={{ color: 'gray.500' }} >
                            <NextLink href={link} passHref>
                                <LinkOverlay>{heading}</LinkOverlay>
                            </NextLink>
                        </Heading>
                        <Text lineHeight='2rem'>
                            {description}
                        </Text>
                        <Spacer />
                        <Stack direction="row">
                            <Badge fontSize="1.0em" p={2} rounded='md'
                                colorScheme={
                                    badge1 === "PYTHON"
                                        ? "green"
                                        : badge1 === "PANDAS"
                                            ? "blue"
                                            : badge1 === "JSX"
                                                ? "red"
                                                : "yellow"
                                }
                            >{badge1}</Badge>
                        </Stack>
                    </Stack>
                </Flex>

            </Stack>
        </LinkBox>
    )
}

export default Card