import type { NextPage } from "next"
import Footer from "components/footer"
import Header from "components/header"
import HomeTemplate from "components/homeTemplate"

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomeTemplate />
      <Footer />
    </>
  )
}

export default HomePage
