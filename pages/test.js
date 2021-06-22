import { Flex, Button, useColorMode, Stack, Spacer, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import { FaFile } from 'react-icons/fa';

function test() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex flexDirection='column' maxW='1000px' border='1px solid black'>
            <Heading>This is the test page</Heading>
            <br />
        </Flex >
    )
}

export default test
