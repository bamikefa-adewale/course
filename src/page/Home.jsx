import Javascript from "../component/Javascript";
import ReactComponent from "../component/ReactComponent";
import Header from "../headerComponent/Header";
import NextComponent from "../component/NextComponent";
import LearnCss from "../component/LearnCss";
import ReactHook from "../component/ReactHook";
import Typecript from "../component/Typecript";

const Home = () => {
  return (
    <div>
      <Header />
      <Javascript />
      <ReactComponent />
      <NextComponent />
      <Typecript />
      <LearnCss />
      <ReactHook />
    </div>
  );
};

export default Home;
