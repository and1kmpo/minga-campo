import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import apiUrl from "../../apiUrl"
import headers from "../../utils/headers"


const create_comment = createAsyncThunk(
    "create_comment",
    async (obj) => {
        try {
            let one = await axios.post(apiUrl + "/comments", obj, headers())
            return one.data.response
        } catch (error) {
            return null
        }
    }
)

const read_comments = createAsyncThunk(
    "read_comments",
    async (id) => {
        try {
            let comments = await axios(apiUrl + "/comments?chapter_id" + id, headers())
            console.log(comments.data.response) //tres propiedades a enviar en el reductos: comments, next, prev
            return {
                comments: comments.data.response.comments,
                prev: comments.data.response.prev,
                next: comments.data.response.next,
                total:comments.data.response.total,
                pages:comments.data.response.pages
            }
        } catch (error) {
            console.log(error)
            return {
                comments: [],
                prev: null,
                next: null,
                total: null
                
            }
        }
    }
)
const destroy_comment = createAsyncThunk(
    "destroy_comment",
    async (obj) => {
        try {
            let one = await axios.delete(apiUrl + "/comments/" + obj.comment_id, headers())
            return {
                delete_id: one.data.response
            }
        } catch (error) {
            return null
        }

    }
)

const update_comment = createAsyncThunk(
    "update_comment",
    async (obj) => {
        try {
            let one = await axios.put(apiUrl + "comments/" + obj.comment_id, { comment: obj.comment }, headers())
            return one.data.response
        } catch (error) {
            return null
        }
    }
)


const comments_actions = {
    create_comment,
    read_comments,
    destroy_comment,
    update_comment


}
export default comments_actions