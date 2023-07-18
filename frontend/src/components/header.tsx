import Image from "next/image"

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-orange-500 mr-6">
          <a href="/">
            <Image src="/logo.svg" alt="Logo" width={300} height={200} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
