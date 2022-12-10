import { NextPage } from "next"
import ArticleListView from "src/components/article_list_view"
import SearchForm from "src/components/search_form"
import { useGetArticles } from "src/hooks/useGetArticles"

const Home: NextPage = () => {
  const { articles, searchWord, errorMessage, isLoading, getArticles } = useGetArticles()

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      <SearchForm getArticles={getArticles} />
      <ArticleListView 
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Home