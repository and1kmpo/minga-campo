import { createReducer } from "@reduxjs/toolkit"
import chapter_actions from "../actions/chapters"

const { save_data } = chapter_actions
const initialState = {
    title: "",
    order: 0,
    id:""
}
const chapter_reducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        save_data,
        (state, action) => {
            const newState = {
                ...state,
                title: action.payload.title,
                order: action.payload.order
            }
            return newState
        }
    )
)
export default chapter_reducer

