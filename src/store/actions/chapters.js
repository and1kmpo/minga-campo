import { createAction } from "@reduxjs/toolkit";

const save_data = createAction(
    "save_data", 
    (obj )=> {
        return {
            payload: {
                order: obj.order,
                title: obj.title,
                id:obj._id
            }
        }
    }
)

const chapter_actions = {
    save_data
}

export default chapter_actions