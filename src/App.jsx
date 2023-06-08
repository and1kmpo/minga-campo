import backgroundImg from './assets/background.png';
import NavBar from "./components/NavBar";
import Welcome from './components/Welcome';
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  
  
  return (
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between min-h-screen overflow-hidden text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <NavBar/>   
      <Welcome/>
      <Carousel/>
      <Footer/>
    </div>
    
  );
}

export default App;
