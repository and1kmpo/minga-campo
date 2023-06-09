import Main from './layouts/Main'
import backgroundImg from './assets/background.png';
import Index from './pages/Index';


function App() {
  let data = [
  {
    title: 'Shonen',
    character_photo: 'src/assets/imgCarousel.png',
    cover_photo: 'src/assets/coverCarousel.png' ,
    description: 'Random description'
  }
]
  return (
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between min-h-screen overflow-hidden text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
       <Main>
        <Index data={data}/>
      </Main>
    </div>

  );
}

export default App;
