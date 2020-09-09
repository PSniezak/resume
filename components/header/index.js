import styles from "./header.module.scss"

export default function Header({ data }) {
  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <h1>{data.name}</h1>
        <span>{data.jobtitle}</span>
      </div>
    </header>
  )
}
