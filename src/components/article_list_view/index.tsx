import { NextPage } from "next"
import { Article } from "src/types"
import ArticleListItem from "./article_list_item"


interface Props {
  articles: Array<Article>
  searchWord: string
  errorMessage: string
  isLoading: boolean
}

const ArticleListView: NextPage<Props> = (props) => {
  if (props.isLoading) {
    return (
      <p className="mb-2 p-8 bg-yallow-100 rounded-lg">loading</p>
    )
  }
  if (props.errorMessage) {
    return (
      <p className="mb-2 p-8 bg-red-100 rounded-lg">{props.errorMessage}</p>
    )
  }

  if (props.searchWord && props.articles?.length === 0) {
    return (
      <p className="mb-2 p-8 bg-green-100 rounded-lg">
        検索ワード
        <span className="font-bold border-b-2 border-black">
          {props.searchWord}
        </span>
        に該当なし
      </p>
    )
  }

  return (
    <>
      {props.searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード
          <span className="ml-2 font-bold text-blue-700 border-b-2 border-blue-700">
            {props.searchWord}
          </span>
        </p>
      )}
      {props.articles?.map((article) => {
        return <ArticleListItem key={article.id} article={article} />;
      })}
    </>
  )
}

export default ArticleListView