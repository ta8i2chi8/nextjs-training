import { NextPage } from "next";
import { Article } from "src/types";

interface Props {
  article: Article
}

const ArticleListItem: NextPage<Props> = ({ article }) => {
  return (
    <div className="mb-3 py-2 px-8 bg-blue-100 rounded-lg shadow">
      <p className="text-center font-bold  text-blue-800 mb-4 border-b-2 border-blue-800">
        {article.title}
      </p>
      <p className="text-blue-700">LGTM 👍：{article.likes_count}</p>
      <p className="text-blue-700">ユーザー：{article.user.name}</p>
    </div>
  )
}

export default ArticleListItem