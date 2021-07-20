import { Flex, useBreakpointValue, Divider } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({ children }) {
    const maxWidthVariant = useBreakpointValue({
        base: "980px",
        "3xl": "1280px",
        xl: "980px",
        lg: "980px",
        md: "980px",
        sm: "980px",
    })

    return (
        <Flex
            minH='100vh'
            padding='4 0.5rem'
            ml={4}
            mr={4}
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            overflowX='hidden'
            overflowY='hidden'
        >
            <Flex
                padding='5rem 0'
                flex='1'
                flexDirection='column'
                maxW={maxWidthVariant}
                w='100%'
            >
                <Header />
                {children}
            </Flex>
            <Flex
                flexDirection='column'
                alignItems='center'
                maxW={maxWidthVariant}
                w='100%'
            >
                <Divider />
                <Footer />
            </Flex>
        </Flex >
    )
}

export default Layout