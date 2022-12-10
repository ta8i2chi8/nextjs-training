import { NextPage } from "next";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
  getArticles: (
    e: FormEvent<HTMLFormElement>,
    formInput: string,
    serFormInput: Dispatch<SetStateAction<string>>,
  ) => void
}

const SearchForm: NextPage<Props> = (props) => {
  const [formInput, setFormInput] = useState<string>('')
  const buttonColor = formInput
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-30"
  
    return (
      <form
        className="mt-12 mb-6"
        onSubmit={(e) => props.getArticles(e, formInput, setFormInput)}
      >
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Qiita 記事 キーワードを入力
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="例：React"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <button
          className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit"
          disabled={!formInput}
        >
          検索
        </button>
      </form>
    )
}

export default SearchForm