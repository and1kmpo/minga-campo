import ButtonGral from "../components/ButtonGral"


export default function EditChapter() {
  return (
    <div className="w-full min-h-screen flex justify-center font-roboto mb-[30px] bg-[#EBEBEB]">
      <img className="hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover" src="/assets/temp_chapters.png" alt="imagen" />
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-normal leading-[42.19px] mb-14">Edit Chapter</h1>
        <div className="flex flex-col items-center w-[280px] md:w-[350px] lg:w-[420px] mb-16 text-[16px] gap-[12px]">
          <input
              className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2'
              placeholder='Title' type="text"
              id="title" />
          <input
              className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2'
              placeholder='select order' type="url"
              id="order" />
          <input
              className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2'
              placeholder='select data' type="url"
              id="data" />
          <input
              className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2'
              placeholder='data to edit' type="text"
              id="dataedit" />
        </div>
        <div className="flex flex-col w-[280px] md:w-[350px] lg:w-[420px] gap-8">
          <ButtonGral text={"Edit"} bg_color={"#34D399"} color={"#fff"} />
          <ButtonGral text={"Delete"} bg_color={"#FBDDDC"} color={"#EE8380"} />
        </div>
      </div>
    </div>
  )
}
