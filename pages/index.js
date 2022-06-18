import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>E-Library</title>
      </Head>
      <Navbar />
      <Main /> 
    </div>
  );
};

export default Home;
