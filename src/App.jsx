import Main from './layouts/Main'
<<<<<<< HEAD

=======
>>>>>>> 232362a0a28839fa4e2165fa344602d997fcfe20
import Index from './pages/Index';
import backgroundImg from './assets/background.png';



function App() {
  return (
<<<<<<< HEAD
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between text-white h-96" >
       <Main>
        <Index/>
=======
    <div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between min-h-screen overflow-hidden text-white" style={{ backgroundImage: `url(${backgroundImg})` }} >
      <Main>
        <Index />
>>>>>>> 232362a0a28839fa4e2165fa344602d997fcfe20
      </Main>
    </div>


  );
}

export default App;
