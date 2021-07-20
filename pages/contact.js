import { NextSeo } from 'next-seo'
import { Flex, Stack, Heading, Divider } from "@chakra-ui/react"
import Contact from '../components/Contact'

function contact() {

    const SEO = {
        title: 'Contact Form - Stephen Rutherford',
        description: 'How to get in touch with me.',
        openGraph: {
            title: 'Contact Form - Stephen Rutherford',
            description: 'How to get in touch with me.',
        },
    }

    return (
        <Flex flexDirection='column'>
            <NextSeo {...SEO} />
            <Contact />
        </Flex>
    )
}

export default contact
