import { Flex, Button, Stack, Spacer, Heading, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'
import PillPity from 'pill-pity';
import { FaFile } from 'react-icons/fa';

function Hero() {
    const { colorMode, toggleColorMode } = useColorMode()

    const variant = useBreakpointValue({
        base: "column",
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
    })

    return (
        <PillPity bgColor='transparent'
            pattern="glamorous" as={Flex}
            patternFill={colorMode === "light" ? "black" : "white"}
            patternOpacity={0.08} mt={10}
            backgroundPosition='center'>

            <Stack direction='column' spacing={4}>
                <Stack direction='row'>
                    <Heading>Hi, I'm</Heading>
                    <Heading color='#00abe9'>Stephen</Heading>
                </Stack>
                < Stack direction={variant} spacing={10} alignItems='top' >
                    {/* Description */}
                    < Flex maxW='490px' w='100%' flexDirection='column' >
                        <Text fontSize="lg" lineHeight='2rem'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper dictum libero, a semper ex. Vivamus nulla orci, consectetur aliquet pretium a, congue id nisl. Nullam iaculis malesuada quam, sed fermentum ligula. Suspendisse potenti. Integer efficitur ipsum vel magna accumsan finibus.
                        </Text>
                        <br />
                        {/* <Spacer /> */}
                        {/* <Button type='primary' maxW='150px'>See My Resume</Button> */}
                        <Stack direction={"row"} spacing={4}>
                            <NextLink href={'/test'} passHref>
                                <Button leftIcon={<FaFile />} colorScheme="blue" variant="solid" pt={6} pb={6} pl={4} pr={4} iconSpacing={4}>
                                    SEE MY RESUME
                                </Button>
                            </NextLink>
                        </Stack>
                    </Flex >
                    <Spacer />
                    {/* Illustration */}
                    <Flex maxH='350px'>
                        <NextImage
                            src='/images/hero.svg'
                            width={500}
                            height={500}
                            priority
                        />
                    </Flex>
                </Stack >
            </Stack >

            {/* </Flex > */}
        </PillPity >
    )
}

export default Hero
