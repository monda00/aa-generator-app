import type { NextPage } from "next"
import Footer from "components/Footer"
import Header from "components/Header"
import HomeTemplate from "components/HomeTemplate"

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
