import React from 'react'

export default function MangaForm() {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="grid gap-6 mb-6 grid-cols-1 my-20">
          <div className='w-full'>
            <input type="text" className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert title" required></input>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <select className="border-b-indigo-500text-sm rounded-lg  block w-full p-2.5 text-[#9D9D9D]" placeholder='trxt'>
              <option >Insert category</option>
              <option >Category 1</option>
              <option >Category 2</option>
              <option >Category 3</option>
              <option >Category 4</option>
            </select>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <input type="text" className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert description" required></input>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <input type="text" className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert cover photo" required></input>
            <hr className='bg-[#424242]' />
          </div>

          <div>
            <button className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
