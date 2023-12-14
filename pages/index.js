import Hero from 'components/hero'
const Home = () => {
  const props1 = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <>
      <Hero {...props1} imageOn />
    </>
  )
}

export default Home
