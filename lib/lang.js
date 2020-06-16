import fs from 'fs'
import path from 'path'

const langsDirectory = path.join(process.cwd(), 'lang')

export function getAllLangIds() {
  const fileNames = fs.readdirSync(langsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        lang: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getLangData(lang) {
  const fullPath = path.join(langsDirectory, `${lang}.json`)
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  return {
    lang,
    ...fileContents
  }
}