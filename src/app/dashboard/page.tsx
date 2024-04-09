import { Hero, Infoboxes, HomepageProperties, Footer } from "../api/route/route";
const page = () => {
  return (
    <>
     <Hero />
     <Infoboxes />
     <HomepageProperties />
     <Footer />
    </>
  )
}

export default page