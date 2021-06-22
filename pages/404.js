import { Heading, Icon, Spacer, Stack, Text, Link, useToast } from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'

function Custom404() {
    return (
        <Stack direction='column' pt={20}>
            <Heading>404 - Page Not Found</Heading>
            <NextImage
                src='/images/404.svg'
                width={537}
                height={292}
                priority
            />
        </Stack >
    )
}

export default Custom404
