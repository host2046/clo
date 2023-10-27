import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const Home = ({ articleResults, randomUserResult }) => {
  return (
    <div>
      <Head>
        <title>Twitter Second</title>
        <meta name="description" content="genrerated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen  mx-auto ">
        <Sidebar />
        <Feed />
        <Widgets
          articleResults={articleResults.articles}
          randomUserResult={randomUserResult.results}
        />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const articleResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());
  const randomUserResult = await fetch(
    "https://randomuser.me/api/?results=50&inc=name,login,picture"
  ).then((res) => res.json());
  return {
    props: {
      articleResults,
      randomUserResult,
    },
  };
}

export default Home;
