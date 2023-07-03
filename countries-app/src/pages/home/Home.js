import Search from "../../components/input/search/Search";
import Filter from "../../components/input/filter/Filter";
import Country from "../../components/country/Country";
import "./home.css";


const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;
