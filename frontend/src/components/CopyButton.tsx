import copy from "clipboard-copy"
import { useState } from "react"

const CopyButton = ({ copyText, id }: { copyText: string; id: string }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = () => {
    copy(copyText).then(() => {
      setCopiedId(id)
      setTimeout(() => {
        setCopiedId(null)
      }, 2000)
    })
  }

  return (
    <button
      className="absolute top-2 right-2 p-2 bg-gray-800 text-white border-0 cursor-pointer opacity-100 rounded-md"
      onClick={() => handleCopy()}
    >
      {copiedId === id ? "Copied" : "Copy"}
    </button>
  )
}

export default CopyButton
