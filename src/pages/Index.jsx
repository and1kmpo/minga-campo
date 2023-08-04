import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <div className="flex flex-col h-screen font-roboto mb-10">
      <Welcome />
      <Carousel />
    </div>

  )
}
