import Head from 'next/head'
import { Flex, Stack, Heading, Divider } from "@chakra-ui/react"
import Hero from '../components/Hero'
import Card from '../components/Card'
import Article from '../components/Article'
import { blogposts } from '../lib/articleData'
import { projects } from '../lib/projectData'


export default function Home() {
  return (
    <Flex direction='column' w='100%' alignItems='center'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      {/* Projects */}
      <Stack direction='column' spacing={4} mt={10}>
        <Heading>Projects</Heading>
        <Divider />
        {projects.slice(0, 2).map((item) => (
          <Card
            key={item.slug}
            source={item.source}
            heading={item.title}
            description={item.description}
            link={item.src}
            badge1={item.badge1}
            badge2={item.badge2}
          />
        )
        )}
      </Stack>

      {/* Articles */}
      <Stack direction='column' spacing={4} mt={10}>
        <Heading>Articles</Heading>
        <Divider />
        <Stack direction='column' spacing={8}>
          {blogposts.slice(0, 2).map((item) => (
            <Article
              key={item.slug}
              heading={item.title}
              description={item.description}
              link={item.src}
            />
          )
          )}
        </Stack>
      </Stack>

    </Flex >
  )
}