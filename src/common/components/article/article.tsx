import { ReactNode } from 'react'

type ArticleProps = {
  title: string,
  children: ReactNode
}

const Article = ({
  title,
  children
}: ArticleProps) => (
  <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue mt-8">
    <header className="mb-4 lg:mb-6 not-format">
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
        {title}
      </h1>
    </header>
    {children}
  </article>
)

export default Article
