import Layout from "../../components/Layout";

//statically render these pages

const about = () => {
  return (
    <Layout title="About Us">
      <div
        id="about_content"
        className="flex flex-col w-screen h-screen bg-[#ffffff] overflow-auto"
      >
        <div className="text-center bg-mint w-9/12 h-64 ml-44 mr-44 mt-10">
          <h1 className="text-[48px] font-serif font-semibold text-grape">
            {" "}
            About Us{" "}
          </h1>
          <p className="text-grape mt-6">
            {" "}
            Gardenly is a web application developed by Neeval Kumar, a Computer
            Science graduate from San Jose State University. Gardenly allows
            users to store data about their garden, as a portfolio, similar to
            how one might do with their stocks. The application will allow users
            to look at their gardens, and the application will give users data
            back about their garden, to produce the best possible methods for
            mantaining the garden.
          </p>
        </div>

        <div className="flex flex-row w-9/12 h-64 ml-44 mr-44 mt-20">
        <div className="flex flex-col">
          <h1 className="font-semibold text-grape text-[30px]"> Projects by Neeval Kumar: </h1>
          <ul className="list-disc ml-10">
              <li className="text-grape font-thin font-mono"> Chess Game in Java </li>
              <li className="text-grape font-thin font-mono"> Steamy IOS Dating App </li>
          </ul>
        </div>

        <div className="flex flex-col text-grape ml-44">
            <h1 className="font-semibold text-grape text-[30px]"> Contact Information: </h1>
            <ul className="list-disc ml-10">
              <li className="text-grape font-thin font-mono"> Github: https://github.com/Neev1108 </li>
              <li className="text-grape font-thin font-mono"> Email: kumar.neeval@gmail.com </li>
              <li className="text-grape font-thin font-mono"> LinkedIn: https://www.linkedin.com/in/neeval-kumar/ </li>

          </ul>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
