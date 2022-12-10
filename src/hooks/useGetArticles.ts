import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { getArticlesService } from "src/services/articles"
import { Article } from "src/types"

export const useGetArticles = () => {
  const [articles, setArticles] = useState<Array<Article>>([])
  const [searchWord, setSearchWord] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getArticles = async (
    e: FormEvent<HTMLFormElement>,
    formInput: string,
    setFormInput: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      const response = await getArticlesService({
        query: formInput,
      })
      setArticles(response.map<Article>((data) => {
        return {
          id: data.id,
          title: data.title,
          likes_count: data.likes_count,
          user: data.user,
        }
      }))
      setSearchWord(formInput)
    }
    catch(e: unknown) {
      if (e instanceof Error) {
        setErrorMessage(e.message)
      }
    }

    setIsLoading(false)
    setFormInput('')
  }

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    getArticles,
  }
}