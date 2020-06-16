import Head from "next/head"
import { getAllLangIds, getLangData } from "lib/lang"

import Header from "components/header"
import Footer from "components/footer"

import styles from "./lang.module.scss"

export default function Index({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.title}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header data={data} />

      <main>
        <section className={styles.section}>
          <h2>{data.sections.education}</h2>
          <ul>
            {data.education.map((el, i) => (
              <li key={i}>
                <h3>{el.university}</h3>
                <span>
                  {el.duration} | {el.location}
                </span>
                <p>{el.major}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{data.sections.skills}</h2>
          <ul>
            {data.skills.map((el, i) => (
              <li key={i}>
                <h3>{el.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: el.items }}></p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{data.sections.experience}</h2>
          <ul>
            {data.experience.map((el, i) => (
              <li key={i}>
                <h3>{el.title}</h3>
                <span>
                  {el.duration} {el.company ? `| ${el.company}` : ""}
                </span>
                <p>{el.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id={styles.projects}>
          <h2>{data.sections.projects}</h2>
          <ul>
            {data.projects.map((el, i) => (
              <li key={i}>
                <h3 dangerouslySetInnerHTML={{ __html: el.name }}></h3>
                <span>{el.contribution}</span>
                <p>{el.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <section className={styles.section}>
        <h2>{data.sections.languages}</h2>
        <ul className={styles.sectionFlex}>
          {data.languages.map((el, i) => (
            <li key={i}>
              <h3>{el.name}</h3>
              <p>{el.proficiency}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer data={data} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllLangIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = getLangData(params.lang)
  return {
    props: {
      data,
    },
  }
}
