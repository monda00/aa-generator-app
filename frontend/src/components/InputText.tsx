interface InputTextProps {
  inputText: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
  inputText,
  handleSubmit,
  handleInputChange,
}: InputTextProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 my-3">文字入力欄</h1>
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
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="shadow-lg rounded-md text-white font-bold bg-orange-600 shadow-orange-600/50 py-3 px-10 transform focus:outline-none active:scale-95"
            >
              アスキーアートを生成
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputText
