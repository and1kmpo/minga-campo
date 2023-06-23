import Main from './layouts/Main'

import Index from './pages/Index';


function App() {
  return (
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between text-white h-96" >
       <Main>
        <Index/>
      </Main>
    </div>

  );
}

export default App;
