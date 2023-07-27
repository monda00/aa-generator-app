"use client"
import type { NextPage } from "next"
import { useState } from "react"
import AppHeaderMessage from "components/AppHeaderMessage"
import InputText from "components/InputText"
import OutputAsciiArt from "components/OutputAsciiArt"
import TopCarousel from "components/TopCarousel"
import { MAX_LENGTH } from "constants/maxLength"
import generateAa from "features/api/generateAa"
import type { ApiContext } from "types/data"

const HomeTemplate: NextPage = () => {
  const [inputText, setInputText] = useState<string>("")
  const [aaTexts, setAaTexts] = useState<string[]>([])

  const context: ApiContext = {
    apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length <= MAX_LENGTH) {
      setInputText(e.target.value)
    }
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

  return (
    <div className="flex-grow">
      <TopCarousel />
      <div className="p-2 mx-6">
        <div>
          <AppHeaderMessage />
          <InputText
            inputText={inputText}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
        <OutputAsciiArt aaTexts={aaTexts} />
      </div>
    </div>
  )
}

export default HomeTemplate
