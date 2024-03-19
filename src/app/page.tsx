import { Hero, Infoboxes, HomepageProperties, Footer } from "./api/route/route";
export default function Home() {
  return (
    <>
     <Hero />
     <Infoboxes />
     <HomepageProperties /> 
     <Footer />
    </>
  );
}
