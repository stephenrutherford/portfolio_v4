import {
    Heading,
    Text,
    Flex,
    Spacer,
    Stack,
    Badge,
    useBreakpointValue,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react"
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
                    <video width="500" autoPlay='autoplay' muted preload='true' loop playsInline='true'>
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
                            {badge2 ?
                                <Badge fontSize="1.0em" p={2} rounded='md'
                                    colorScheme={
                                        badge2 === "PYTHON"
                                            ? "green"
                                            : badge2 === "PANDAS"
                                                ? "blue"
                                                : badge2 === "JSX"
                                                    ? "red"
                                                    : "yellow"
                                    }
                                >{badge2}</Badge>
                                : null}
                            {badge3 ?
                                <Badge fontSize="1.0em" p={2} rounded='md'
                                    colorScheme={
                                        badge3 === "PYTHON"
                                            ? "green"
                                            : badge3 === "PANDAS"
                                                ? "blue"
                                                : badge3 === "JSX"
                                                    ? "red"
                                                    : "yellow"
                                    }
                                >{badge3}</Badge>
                                : null}
                        </Stack>
                    </Stack>
                </Flex>

            </Stack>
        </LinkBox>
    )
}

export default Card