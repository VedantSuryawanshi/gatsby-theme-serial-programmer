import * as React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import * as blogStyles from "../blog.module.css"

const BlogLayout = ({ headerTitle, children }) => {
  return (
    <main>
      <header>
        <Link className={blogStyles.siteTitle} to="/">
          {headerTitle}
        </Link>
      </header>
      <Bio />
      <section className={blogStyles.articles}>{children}</section>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default BlogLayout
