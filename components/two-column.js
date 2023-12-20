import styles from 'styles/two-column.module.css'

const TwoColumn = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

const TwoColumnMain = ({ children }) => {
  return <div className={styles.main}>┆ {children}</div>
}

const TwoColumnSidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>
}
export { TwoColumn, TwoColumnMain, TwoColumnSidebar }
