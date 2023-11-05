import Navbar from "./components/Navbar";
import Home from "./components/Home"

export default function App() {
  return (
    <main>
      <section className="bg-sm-image sm:bg-md-image md:bg-lg-image bg-cover bg-no-repeat h-screen">
      <Navbar />
      <Home/>
      </section>
      
    </main>
  );
}
