export default function CardMangaChapter({ title, cover_photo, pages }) {
  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
            <img className="w-[83px] lg:w-[166px] h-[74px] lg:h-[148px] object-cover rounded-xl" src={ cover_photo } alt="cover photo" />
            <div className="flex flex-col justify-center">
                <h2 className="text-[20px] font-normal">{ title }</h2>
                <div className="text-[20px] font-normal flex gap-4"><span>...</span> { pages }</div>
            </div>
        </div>
        <button className="w-[140px] h-[74px] rounded-full font-bold text-[24px] text-white bg-gradient-to-r from-indigo-700 to-indigo-500" type="submit">
            Read
        </button>
    </div>
  )
}
