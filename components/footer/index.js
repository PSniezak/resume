import styles from "./footer.module.scss"

export default function Footer({ data }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        {data.contact.map((el, i) => (
          <div key={i}><span dangerouslySetInnerHTML={{ __html: el.content }}></span></div>
        ))}
      </div>

      <span className={styles.print}>
        <a onClick={() => window.print()}>{data.print}</a>
      </span>
    </footer>
  )
}
