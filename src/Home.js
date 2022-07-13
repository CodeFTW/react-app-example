import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Code FTW</h1>
      <Link to="github-api-example">Github API Example</Link>
    </div>
  );
};

export default Home;
