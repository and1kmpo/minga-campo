import { RouterProvider } from "react-router-dom"
import router from "./router"
import axios from "axios"
import { useEffect } from "react"
import apiURL from "./apiUrl"

function header() {
  let token = localStorage.getItem('token')
  let headers = { headers:{ 'Authorization':`Bearer ${token}` } }
  return headers
}

function App() {

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
    let headers = header()
      axios.post(apiURL+'/auth/token',null,headers)
    }
  },[])

  return (
    <RouterProvider router={router}/>
  );
}

export default App