import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Main({children}) {
  return (
    <>
    <NavBar/>
        {/*  Vistas dinámicas */}
        {children}
    <Footer/>
    </>
  )
}
