import chat from "../assets/chat.png";
import comment from "../assets/comment.png";
import edit from "../assets/editar.png";
import borrar from "../assets/papelera.png";
import Swal from "sweetalert2";
// import user from "../assets/perfil.png";
// import Send_comment from "./send_comment";
import { useSelector, useDispatch } from "react-redux";
import comments_actions from "../store/actions/comments";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
const { create_comment, read_comments, destroy_comment, update_comment } = comments_actions

export default function Comments_ch(each) {
  const comments = useSelector(store => store.comments.comments)
  const [currentPage, setCurrentPage] = useState(1);
  const prev_page = useSelector(store => store.prev_page)
  const next_page = useSelector(store => store.comments.next_page)
  const [create, setCreate] = useState('')
  const save_comment = useRef('')
  const total = useSelector(store => store.comments.total)
  // const [edit_comment, setEdit] = useState()
  const [user, setUser] = useState()
   



  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(
    () => {
      const local_user = JSON.parse(localStorage.getItem('user'))
      setUser(local_user)
      dispatch(read_comments(id, currentPage))
    }, [dispatch, id, currentPage]
  )

  const update_comment = (comment_data) => {

  }

  return (
    <>
      <div className="  flex flex-col justify-around items-center gap-4 w-full min-h-screen bg-gray-200 pb-10 pt-10">

          {comments.map(each =>
          <div key={each._id} className=" flex flex-col bg-white w-[90%] md:w-[70%]  mt-2 rounded-lg ">
            {user._id === each.user_id._id ? (
              <>
                <div className="flex  ml-4 mt-4 ">
                  <button className=" px-3 py-2  rounded ">
                    <img src={edit} className=" h-10 w-18" alt="" />{" "}
                  </button>
                  <button onClick={() =>{
              Swal.fire({
                title: 'Eliminar comentario',
                text: '¿Estás seguro de que deseas eliminar este comentario?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(destroy_comment({ comment_id: each._id }));
                  Swal.fire(
                    'Eliminado',
                    'El comentario ha sido eliminado',
                    'success'
                  );
                }
              });
            }}
 className=" px-3 py-2  rounded ">
                    <img src={borrar} className=" h-10 w-10" alt="" />{" "}
                  </button>
                  <img className=" ml-auto mr-20   rounded-full  w-[60px] h-[60px]" src={each.user_id.photo} alt="user" />
                </div>
                <p className="flex px-10 py-2 "> {each.user_id.email}</p>
              </>
            ) : (
              <>
                <div className="flex ml-4 mt-4 ">
                  <img
                    className="rounded-full  mr-4 w-[60px] h-[60px]" src={each.user_id.photo} alt="photo_user" />
                  <p className="flex ">{each.user_id.email} </p>
                </div>
              </>
            )}

            <p className="px-6 text-gray-500 flex justify-center mt-4 mb-4 ml-4">
              {each.comment}
            </p>

            <div className="flex justify-start w-[90%] items-center mt-2 ml-8  ">
              <img src={chat} className=" h-8 w-8" alt="" />
              <div className="flex justify-center items-center h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4 rounded">
                <h3>{total}</h3>
              </div>
              <button className="flex justify-center px-3 py-2  rounded ">
                <img src={comment} className=" h-10 w-18" alt="" />
              </button>
              <p className=" ml-auto text-xs text-gray-600 px-2 py-2 ">
                {" "}
                8 minutos ago{" "}
              </p>
            </div>
          </div>)}
      </div>
   
      <div className="flex justify-center bg-gray-200 w-[100%] rounded-lg py-4 px-4  pb-10 ">
        <div className=" w-full md:w-[84%] mx-auto border-2 rounded-lg hover:border-gray-400">
          <label htmlFor="chat" className=""></label>
          <div className="flex items-center py-2 bg-gray-50   rounded-lg dark:bg-gray-100">
            
            <input
              // ref={create_comment}
              type="text"
              className="flex   md:mx-4 md:p-2.5 ml-2 w-full text-sm text-gray-800 font-roboto  rounded-lg   dark:bg-gray-100 focus:outline-none   "
              placeholder="Say something here..."
              value={create}
              onChange={(e) => setCreate(e.target.value)}></input>
            <button
              onClick={() => {
                const new_comment = create.trim();
                if (new_comment) {
                  dispatch(create_comment({ comment: new_comment, chapter_id: id }))
                  setCreate('');
                }
              }}
              type="submit"
              className="inline-flex justify-center md:p-2 md:mr-4  text-blue-400 rounded-full cursor-pointer  dark:text-gray-500 dark:hover:bg-gray-400" >

              <svg
                className=" w-6 md:w-10 h-6 md:h-10  transform rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
              </div>
      </div>
      <div className="flex justify-between bg-gray-200 px-[20%] pb-10 ">
      <button onClick={prev_page} className="mt-2 w-[10%] lg:w-[20%]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple">
        Prev</button>  
        <button onClick={next_page} className="mt-2 w-[10%] lg:w-[20%]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple" >
        Next</button>  
        </div>
      {/* {prev_page && <button className="flex bg-purple" > Prev</button>}
      {next_page && <button className="flex bg-purple text-gray-100" > Next</button>} */}




    </>
  );
}
