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

        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header data={data} />

      <main>
        <section className={styles.section}>
          <h2>{data.sections.experience}</h2>

          {data.experience.map((exp, i) => (
            <div key={i}>
              <h3>{exp.title}</h3>
              <p className={styles.alignRight}>{exp.duration}</p>
              {exp.company && <h4>{exp.company}</h4>}
              <p className={styles.alignRight}>{exp.location}</p>
              {exp.tags && exp.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
              <ul>
                {exp.description && exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>{data.sections.education}</h2>

          {data.education.map((ed, i) => (
            <div key={i}>
              <h3>{ed.university}</h3>
              <p className={styles.alignRight}>{ed.duration}</p>
              <p><strong>{ed.major}</strong>, {ed.location}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>{data.sections.skills}</h2>

          {data.skills.map((skill, i) => (
            <div key={i}>
              <h3>{skill.title}</h3>
              {skill.items && skill.items.map((skill, i) => (
                <span className={styles.tag} key={i}>{skill}</span>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.section} id={styles.projects}>
          <h2>{data.sections.projects}</h2>

          {data.projects.map((el, i) => (
            <div key={i}>
              <h3 dangerouslySetInnerHTML={{ __html: el.name }}></h3>
              <p className={styles.alignRight}>{el.contribution}</p>
              <p>{el.description}</p>
            </div>
          ))}
        </section>
      </main>

      <section className={styles.section}>
        <h2>{data.sections.languages}</h2>
        {data.languages.map((el, i) => (
          <div key={i}>
            <h3>{el.name}</h3>
            <p className={styles.alignRight}>{el.proficiency}</p>
          </div>
        ))}
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
