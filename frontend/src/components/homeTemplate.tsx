"use client"
import copy from "clipboard-copy"
import type { NextPage } from "next"
import { useState } from "react"
import generateAa from "features/api/generateAa"
import type { ApiContext, Aa } from "types/data"

const HomeTemplate: NextPage = () => {
  const [inputText, setInputText] = useState<string>("")
  const [aaTexts, setAaTexts] = useState<string[]>([])

  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const convertTextToAa = async () => {
    const convertedAa = await generateAa(context, {
      text: inputText,
      mode: "random",
    })
    setAaTexts(convertedAa)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    convertTextToAa()
  }

  const copyText = (text: string) => {
    copy(text)
    alert("Text is copied.")
  }

  return (
    <div className="bg-teal-100 p-2 mx-6">
      <div>
        <h1 className="text-xl font-bold text-gray-600 my-6">Input Text</h1>
        <div className="md-6">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="rounded-md text-gray-700 font-bold bg-green-500 px-3"
              >
                Convert Text
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-600 my-6">Ascii Art</h1>
        {aaTexts.map((aaText, index) => (
          <span key={index} className="m-2">
            <div className="w-auto p-4 bg-gray-100 rounded-lg">
              <pre className="text-gray-800">{aaText}</pre>
              <button
                className="flex items-center mt-4 p-2 bg-blue-500 text-white rounded-lg focus:outline-none"
                onClick={() => copyText(aaText)}
              >
                Copy
              </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  )
}

export default HomeTemplate
