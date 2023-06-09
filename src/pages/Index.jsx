import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";

export default function Index({data}) {
      return (
        <main>
            <Welcome/>
            <Carousel name={data[0].title} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} description={data[0].description}/>
      </main>
  )
}
