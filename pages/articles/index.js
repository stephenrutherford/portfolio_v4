import { NextSeo } from 'next-seo'
import { blogposts } from '../../lib/articleData'
import Article from '../../components/Article'
import { Flex, Stack, Heading } from "@chakra-ui/react"

function index() {

    const SEO = {
        title: 'Articles - Stephen Rutherford',
        description: 'Development articles written by Stephen Rutherford.',
        openGraph: {
            title: 'Articles - Stephen Rutherford',
            description: 'Development articles written by Stephen Rutherford.',
        },
    }

    return (
        <Flex flexDirection='column' mt={10}>
            <NextSeo {...SEO} />
            <Heading color='#00abe9'>Articles</Heading>
            <Stack direction='column' spacing={8} mt={10}>
                {blogposts.map((item) => (
                    <Article
                        key={item.slug}
                        heading={item.title}
                        description={item.description}
                        link={item.src}
                    />
                )
                )}
            </Stack>
        </Flex>
    )
}

export default index
