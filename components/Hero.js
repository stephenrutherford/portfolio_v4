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

            <Stack direction='column' spacing={4} w='100%'>
                <Stack direction='row'>
                    <Heading>Hi, I'm</Heading>
                    <Heading color='#00abe9'>Stephen</Heading>
                </Stack>
                < Stack direction={variant} spacing={10} alignItems='top'>
                    {/* Description */}
                    < Flex maxW='490px' w='100%' flexDirection='column' >
                        <Text fontSize="lg" lineHeight='2rem'>
                            I'm a fraud analyst based in Ireland, working in the video game industry. My focus area for the past few years has been fraud detection and player security, but I also enjoy exploring front-end development with React.
                        </Text>
                        <br />
                        <Stack direction={"row"} spacing={4}>
                            <NextLink href={'/resume'} passHref>
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
                            alt='Hero Illustration'
                        />
                    </Flex>
                </Stack >
            </Stack >
        </PillPity >
    )
}

export default Hero
