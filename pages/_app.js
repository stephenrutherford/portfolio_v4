import Script from "next/script"
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

import customTheme from "../styles/theme"
import { ChakraProvider, Text, Heading, UnorderedList, ListItem, Link, Divider, OrderedList, Code } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Promo from '../components/Promo'
import SEO from '../next-seo.config'

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
  ol: (props) => <OrderedList pl={8}>{props.children}</OrderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>,
  p: (props) => <Text lineHeight='2rem'>{props.children}</Text>,
  hr: (props) => <Divider mt={5}>{props.children}</Divider>,
  inlineCode: (props) => <Code fontWeight='bold'>{props.children}</Code>,
  a: (props) => <Link fontWeight='bold' color='#00abe9' _hover={{ textDecoration: 'underline' }} href={props.href} isExternal > {props.children}</Link >,
  Promo
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={customTheme}>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp