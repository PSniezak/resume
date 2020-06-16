import { useEffect } from "react"
import Router from "next/router"

const debug = process.env.NODE_ENV !== "production"

const redirectTo = !debug ? "/resume/en" : "/en"

const RootPage = () => {
  useEffect(() => Router.push(redirectTo))
  return null
}

export default RootPage
