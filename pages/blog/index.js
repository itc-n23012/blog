import Hero from 'components/hero'
import Container from 'components/container'
const Blog = () => {
  const props3 = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Hero {...props3} />
    </Container>
  )
}

export default Blog
