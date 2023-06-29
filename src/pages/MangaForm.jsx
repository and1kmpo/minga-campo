import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';
import apiUrl from '../apiUrl';
import { useRef } from 'react';

export default function MangaForm() {
  const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      axios(apiUrl + '/categories')
        .then(res => {
          console.log(res.data.response);
          setCategories(res.data.response);
        }).catch(err => console.error(err))
    }, []
  );

  const inputTitle = useRef()
  const inputCategories = useRef()
  const inputDescription = useRef()
  const inputCoverPhoto = useRef()

  function getFormData() {
    let data = {
      title: inputTitle.current.value,
      category_id: inputCategories.current.value,
      description: inputDescription.current.value,
      cover_photo: inputCoverPhoto.current.value,
    }
    alert(`
      Sending Data 
      title: ${data.title}
      description: ${data.description}
      cover_photo: ${data.cover_photo}
      category_id: ${data.category_id}
    `)
  }

  return (
    <>
      <div className="flex justify-center ">
        <div className="grid gap-5 my-32 grid-cols-1 mb-6 w-72">
          <div className=''>
            <input type="text" name='title' ref={inputTitle} className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert title" required></input>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <select name='category_id' ref={inputCategories} className="border-b-indigo-500text-sm rounded-lg  block w-full p-2.5 text-[#9D9D9D]" placeholder='trxt'>
              <option value={0}>Insert category</option>
              {categories.map(category => {
                return <option key={category.name} value={category._id}>
                  {category.name}
                </option>
              })}
            </select>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <input name='description' ref={inputDescription} type="text" className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert description" required></input>
            <hr className='bg-[#424242]' />
          </div>
          <div>
            <input name='cover_photo' ref={inputCoverPhoto} type="text" className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5" placeholder="Insert cover photo" required></input>
            <hr className='bg-[#424242]' />
          </div>

          <div>
            <button onClick={getFormData} className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
              Send
            </button>
          </div>
        </div>
      </div >
    </>
  )
}
