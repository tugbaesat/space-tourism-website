import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DestinationList from "./components/DestinationList";

export default function App() {
  return (
    <main>
      <section>
        <Navbar />
        <Home />
        <DestinationList/>
      </section>
    </main>
  );
}
