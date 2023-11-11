import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DestinationList from "./components/DestinationList";
import CrewsList from "./components/CrewsList";
import TechnologyList from "./components/TechnologyList"

export default function App() {
  return (
    <main>
      <section>
        <Navbar />
        <Home />
        <DestinationList />
        <CrewsList />
        <TechnologyList/>
      </section>
    </main>
  );
}
