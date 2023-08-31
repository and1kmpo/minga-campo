import { createReducer } from "@reduxjs/toolkit"
import comments_actions from "../actions/comments"

const {create_comment, read_comments, destroy_comment, update_comment } = comments_actions
const initial_state = {
    comments: [],
    prev: null,
    next: null,
    total: null,
    pages:null
    }
const comments_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        create_comment.fulfilled,
        (state, action)=>{
            let new_state={
                ...state,
                comments: [action.payload, ...state.comments]
            }
            return new_state 
        }       
    ).addCase(
        read_comments.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                comments: action.payload.comments,
                prev: action.payload.prev,
                next: action.payload.next,
                total: action.payload.total,
                pages: action.payload.pages
                   
            }
            return new_state
        }
    ).addCase(
        destroy_comment.fulfilled,
        (state, action) =>{
            let new_state= {
                ...state ,
                comments: state.comments.filter(each=> each._id !== action.payload.delete_id)
            }
            return new_state
        }
    )
    .addCase(
        update_comment.fulfilled,
        (state, action) =>{
            let new_state= {
                ...state,
                comments: state.comments.map(each=> {
                    if(each._id ===  action.payload._id){
                        return action.payload
                    }else{
                        return {...each}
                    }
                })
            }
            return new_state
        }
    )

)
export default comments_reducer