import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      {/* <div className='justify-center items-start text-center flex flex-auto'>
        <Button className="lg:items-center hover:text-n-6" href="#login">
          Unite a nuestro equipo
        </Button>
      </div> */}

      <ButtonGradient />
    </main>
  );
}

export default App;
