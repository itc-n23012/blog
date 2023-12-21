import Logo from 'components/logo'
import Container from 'components/container'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
