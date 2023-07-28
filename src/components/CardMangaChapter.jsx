export default function CardMangaChapter({ title, cover_photo, pages }) {
  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
            <img className="w-[83px] lg:w-[166px] h-[74px] lg:h-[148px] object-cover rounded-xl" src={ cover_photo } alt="cover photo" />
            <div className="flex flex-col justify-center">
                <h2 className="text-[20px] font-normal">{ title }</h2>
                <div className="text-[20px] font-normal flex items-center gap-4">
                  <div className="h-4 flex items-center justify-center rounded bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                  <span>{ pages }</span>
                </div>
            </div>
        </div>
        <button className="w-[140px] h-[74px] rounded-full font-bold text-[24px] text-white bg-gradient-to-r from-indigo-700 to-indigo-500" type="submit">
            Read
        </button>
    </div>
  )
}
