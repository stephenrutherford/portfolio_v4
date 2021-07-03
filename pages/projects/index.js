import { projects } from '../../lib/projectData'
import Card from '../../components/Card'
import { Flex, Stack, Heading } from "@chakra-ui/react"

function index() {
    return (
        <Flex flexDirection='column' mt={10}>
            <Heading color='#00abe9'>Projects</Heading>
            <Stack direction='column' spacing={8} mt={10}>
                {projects.map((item) => (
                    <Card
                        image={item.image}
                        source={item.source}
                        heading={item.title}
                        description={item.description}
                        link={item.src}
                        badge1={item.badge1}
                    />
                )
                )}
            </Stack>
        </Flex>
    )
}

export default index
