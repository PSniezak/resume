import styles from "./footer.module.scss"

export default function Footer({ data }) {
  return (
    <footer className={styles.footer}>
      <span className={styles.print}>
        <a onClick={() => window.print()}>{data.print}</a>
      </span>
    </footer>
  )
}
