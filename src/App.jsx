import Main from './layouts/Main'
import backgroundImg from './assets/background.png';
import Index from './pages/Index';


function App() {
  return (
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between min-h-screen overflow-hidden text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
       <Main>
        <Index/>
      </Main>
    </div>

  );
}

export default App;
