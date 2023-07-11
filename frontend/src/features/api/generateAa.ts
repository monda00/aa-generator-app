import { fetcher } from "features/common/fetcher"
import { ApiContext } from "types/data"

export type GenerateAaParams = {
  text: string
  mode: string
}

const generateAa = async (
  context: ApiContext,
  { text, mode }: GenerateAaParams,
): Promise<string[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, "")}/generate-aa`
  const params = new URLSearchParams()

  text && params.append("text", text)
  mode && params.append("mode", mode)
  const query = params.toString()

  const res = await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  return res["aa"]
}

export default generateAa
