import { Link as Anchor } from "react-router-dom";

export default function CardManga({
  title,
  category,
  imageSrc,
  color,
  manga_id,
}) {
  return (
    <Anchor to={"/manga/" + manga_id + "/1"}>
      <div
        className="min-w-[400px] h-[200px] bg-white flex items-center mt-6 rounded-xl border-l-8 font-poppins shadow-xl hover:scale-105 cursor-pointer hover:shadow-2xl "
        style={{ borderColor: color }}
      >
        <div className="flex flex-col p-4 justify-between">
          <div>
            <h1 className="text-black text-xl font-medium">{title}</h1>
            <p
              className="text-lg mb-4 capitalize font-medium"
              style={{ color: color }}
            >
              {category}
            </p>
          </div>
          <div>
            <Anchor to={"/manga/" + manga_id + "/1"}>
              <button className="bg-[#D1FBF0] text-[#00BA88] hover:bg-[#00BA88] hover:text-[#D1FBF0] font-semibold w-16 h-8 flex items-center justify-center rounded-full">
                Read
              </button>
            </Anchor>
          </div>
        </div>
        <div className="flex-grow"></div>
        <img
          src={imageSrc}
          alt={title}
          className="min-w-[150px] max-w-[125px] h-[200px] object-cover rounded-r-xl rounded-[50%_0px_0px_50%]"
        />
      </div>
    </Anchor>
  );
}
