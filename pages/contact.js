import Head from 'next/head'
import { Flex, Stack, Heading, Divider } from "@chakra-ui/react"
import Contact from '../components/Contact'

function contact() {
    return (
        <Flex flexDirection='column'>
            <Contact />
        </Flex>
    )
}

export default contact
