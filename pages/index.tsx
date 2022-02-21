import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-screen h-screen">
          <div className="text-white font-serif font-semibold text-4xl p-auto justify-center"> Learn Gardening </div>
          <div className="text-white bold font-sans pb-10 text-base p-auto justify-center">
            {" "}
            Need help producing the perfect garden? {" "}
          </div>
        </div>
      </Layout>
    </>
  );
}
