import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { useRef } from "react";
import Swal from "sweetalert2";
import headers from "../utils/headers";
import imgForm from "../assets/form_Ch.png";

export default function MangaForm() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios(apiUrl + "/categories")
      .then((res) => {
        console.log(res.data.response);
        setCategories(res.data.response);
      })
      .catch((err) => console.error(err));
  }, []);

  const inputTitle = useRef();
  const inputCategories = useRef();
  const inputDescription = useRef();
  const inputCoverPhoto = useRef();

  function getFormData() {
    let dataForm = {
      title: inputTitle.current.value,
      category_id: inputCategories.current.value,
      description: inputDescription.current.value,
      cover_photo: inputCoverPhoto.current.value,
    };

    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .post(apiUrl + "/mangas", dataForm, headers)
      .then((res) =>
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "New Manga added!",
          timer: 5000,
        })
      )
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          icon: "error",
          html: err.response.data?.messages
            ?.map((each) => `<p>${each}</p>`)
            .join(""),
        });
      });

    inputTitle.current.value = "";
    inputCategories.current.value = "";
    inputDescription.current.value = "";
    inputCoverPhoto.current.value = "";
  }

  return (
    <>
      <div className="flex w-full h-screen items-center justify-between overflow-x-hidden mb-6   ">
        <div className="grid gap-5 my-32 mb-6 flex-col mt-[10%]  lg:mt-[5%] justify-center items-center  w-screen lg:w-[50%] lg:left-[50%] ">
        <h1 className=' text-3xl text-center font-semibold'> New Manga</h1>
          <div className="">
            <input
              type="text"
              name="title"
              ref={inputTitle}
              className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Insert title"
              required
            ></input>
            <hr className="bg-[#424242]" />
          </div>
          <div>
            <select
              name="category_id"
              ref={inputCategories}
              className="border-b-indigo-500text-sm rounded-lg  block w-full p-2.5 text-[#9D9D9D]"
              placeholder="trxt"
            >
              <option value={0}>Insert category</option>
              {categories.map((category) => {
                return (
                  <option key={category.name} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <hr className="bg-[#424242]" />
          </div>
          <div>
            <input
              name="description"
              ref={inputDescription}
              type="text"
              className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Insert description"
              required
            ></input>
            <hr className="bg-[#424242]" />
          </div>
          <div>
            <input
              name="cover_photo"
              ref={inputCoverPhoto}
              type="text"
              className="border-b-indigo-500 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Insert cover photo"
              required
            ></input>
            <hr className="bg-[#424242]" />
          </div>

          <div>
            <button
              onClick={getFormData}
              className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Send
            </button>
          </div>
        </div>
        <img
          className="h-screen w-[50%] object-fit hidden md:block "
          src={imgForm}
          alt="chapterForm"
        />
      </div>
    </>
  );
}
