import '../styles/globals.css'
import { ChakraProvider, Text, Heading, UnorderedList, ListItem, Link } from "@chakra-ui/react"
import customTheme from "../styles/theme"
import Layout from "../components/Layout"
import { MDXProvider } from '@mdx-js/react';
import Promo from '../components/Promo'

const components = {
  h1: (props) => (
    <Heading fontSize="3xl" mt={10} color='#00abe9'>
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading fontSize="xl" mt={10}>
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading fontSize="md" mt={5}>
      {props.children}
    </Heading>
  ),
  ul: (props) => <UnorderedList pl={8}>{props.children}</UnorderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>,
  p: (props) => <Text lineHeight='2rem'>{props.children}</Text>,
  Promo
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp