import Layout from "../components/Layout";
import HomeCard from "../components/HomeCard"
export default function Home() {
  return (
    <>
      <Layout>
        <div id="home_content"className="flex flex-col w-screen h-screen">
          <div id="garden_text" className="mt-10 w-screen h-30 flex flex-col">
            <div className="text-white font-serif font-semibold text-4xl justify-center m-auto">
              {" "}
              Learn Gardening{" "}
            </div>
            <div className="text-white bold font-sans pb-10 text-base p-auto justify-center m-auto">
              {" "}
              Need help producing the perfect garden?{" "}
            </div>
          </div>

        <div className="w-screen h-80 flex ml-20 mr-20"> 
          <HomeCard>  </HomeCard>
        </div>

        </div>
      </Layout>
    </>
  );
}
