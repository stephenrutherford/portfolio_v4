import {
    Heading,
    Text,
    Stack,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react"
import NextLink from 'next/link'

function Article({ link, heading, description }) {
    return (
        <LinkBox as="article">
            <Stack w='100%' direction='column' spacing={6}>
                <Heading size='md' _hover={{ color: 'gray.500' }} >
                    <NextLink href={link} passHref>
                        <LinkOverlay>{heading}</LinkOverlay>
                    </NextLink>
                </Heading>
                <Text>{description}</Text>
            </Stack>
        </LinkBox>
    )
}

export default Article
