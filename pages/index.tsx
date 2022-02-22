import Layout from "../components/Layout";
import HomeCard from "../components/HomeCard";
export default function Home() {
  return (
    <>
      <Layout>
        <div id="home_content" className="flex flex-col w-screen h-screen bg-[#ffffff] ">
          <div id="garden_text" className="mt-10 w-screen h-30 flex flex-col">
            <div className="text-grape font-serif font-semibold text-4xl justify-center m-auto">
              {" "}
              Learn Gardening{" "}
            </div>
            <div className="text-grape bold font-sans pb-10 text-base p-auto justify-center m-auto">
              {" "}
              Need help producing the perfect garden?{" "}
            </div>
          </div>

          <div className=" mt-10 w-11/12 h-96 flex ml-20 mr-20 flex-wrap justify-evenly">
            <HomeCard
              image="images/garden.jpeg"
              height="50"
              alt="Garden-picture"
              header="Enter your Gardening Portfolio"
              body="Keep track of your gardening needs"
            />
            <HomeCard
              image="images/gardening_action.jpg"
              height="140"
              alt="while_gardening"
              header="Receive best gardening practices"
              body="Grow your Garden to it's fullest"
              body_two="Learn when to water your plants 
                time of day, seasons etc.)
                Track your fruits and vegetables"
            />

            <HomeCard
              image="images/pest.jpg"
              height="50"
              alt="pest-picture"
              header="Protect your garden"
              body="Keep away troublesome pests"
              body_two="Learn about tools to keep garden safe and grow efficiently"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
