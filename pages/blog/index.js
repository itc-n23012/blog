import Meta from 'components/meta'
import Hero from 'components/hero'
import Container from 'components/container'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const Blog = ({ posts }) => {
  const props3 = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事' />
      <Hero {...props3} />
      <Posts posts={posts} />
    </Container>
  )
}

export default Blog

export async function getStaticProps () {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts
    }
  }
}
