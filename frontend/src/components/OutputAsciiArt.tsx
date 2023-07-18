import CopyButton from "components/CopyButton"

interface OutputAsciiArtProps {
  aaTexts: string[]
}

const OutputAsciiArt = ({ aaTexts }: OutputAsciiArtProps) => {
  return (
    <div>
      {aaTexts.length != 0 && (
        <h1 className="text-xl font-bold text-gray-800 pt-10">
          アスキーアート
        </h1>
      )}
      {aaTexts.map((aaText, index) => (
        <span key={index} className="m-2">
          <div className="relative flex justify-between w-auto p-4 bg-gray-600 rounded-lg">
            <pre className="overflow-x-auto text-white py-2">{aaText}</pre>
            <CopyButton copyText={aaText} id="button${index}" />
          </div>
        </span>
      ))}
    </div>
  )
}

export default OutputAsciiArt
