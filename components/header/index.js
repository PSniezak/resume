import styles from "./header.module.scss"

export default function Header({ data }) {
  const contact = data.contact.map((el, i) => {
    return (
      <li key={i} className="contact-el">
        {el.link ? (
          <a href={el.link} target="_blank">
            <i className={`fa ${el.icon}`} aria-hidden="true"></i> {el.text}
          </a>
        ) : (
          <>
            <i className={`fa ${el.icon}`} aria-hidden="true"></i> {el.text}
          </>
        )}
      </li>
    )
  })

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <h1>{data.name}</h1>
        <span>{data.jobtitle}</span>
      </div>
      <ul className={styles.contact}>{contact}</ul>
    </header>
  )
}
