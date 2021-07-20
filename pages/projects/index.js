import { NextSeo } from 'next-seo'
import { projects } from '../../lib/projectData'
import Card from '../../components/Card'
import { Flex, Stack, Heading } from "@chakra-ui/react"

function index() {

    const SEO = {
        title: 'Projects - Stephen Rutherford',
        description: 'Development projects developed by Stephen Rutherford.',
        openGraph: {
            title: 'Projects - Stephen Rutherford',
            description: 'Development projects developed by Stephen Rutherford.',
        },
    }

    return (
        <Flex flexDirection='column' mt={10}>
            <NextSeo {...SEO} />
            <Heading color='#00abe9'>Projects</Heading>
            <Stack direction='column' spacing={8} mt={10}>
                {projects.slice(0, 2).map((item) => (
                    <Card
                        key={item.slug}
                        source={item.source}
                        heading={item.title}
                        description={item.description}
                        link={item.src}
                        badge1={item.badge1}
                        badge2={item.badge2}
                    />
                )
                )}
            </Stack>
        </Flex>
    )
}

export default index
