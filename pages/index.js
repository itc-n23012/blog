import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
const Home = () => {
  const props1 = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <Container>
      <Meta />
      <Hero {...props1} imageOn />
    </Container>
  )
}

export default Home
