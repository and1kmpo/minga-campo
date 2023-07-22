export default function CardMangaChapter({ title, cover_photo, pages }) {
  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-2 lg:gap-4">
            <img className="w-[83px] h-[74px] object-cover rounded-xl" src={ cover_photo } alt="cover photo" />
            <div className="flex flex-col justify-center">
                <h2 className="text-[20px]">{ title }</h2>
                <div className="text-[20px] flex gap-4"><span>...</span> { pages }</div>
            </div>
        </div>
        <button className="w-[150px] h-[74px] px-6 rounded-full font-bold text-[24px] text-white bg-gradient-to-r from-indigo-700 to-indigo-500" type="submit">
            Read
        </button>
    </div>
  )
}
