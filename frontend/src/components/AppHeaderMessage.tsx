const AppHeaderMessage = () => {
  return (
    <div>
      <div className="flex justify-center p-3">
        <h1 className="text-gray-800 text-3xl font-bold">
          好きな文字でアスキーアートを作ろう！
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="list-disc">
          <li>作れる文字の対象は英数半角文字と記号です。</li>
          <li>文字数に制限はありません。</li>
          <li>アスキーアートはランダムで生成されます。（指定不可）</li>
        </ul>
      </div>
    </div>
  )
}

export default AppHeaderMessage
