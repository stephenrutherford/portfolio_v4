import { blogposts } from '../../lib/articleData'
import Article from '../../components/Article'
import { Flex, Stack, Heading, Divider } from "@chakra-ui/react"

function index() {
    return (
        <Flex flexDirection='column' mt={10}>
            <Heading color='#00abe9'>Articles</Heading>
            <Stack direction='column' spacing={8} mt={10}>
                {blogposts.map((item) => (
                    <Article
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
