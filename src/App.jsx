import { RouterProvider } from "react-router-dom"
import router from "./router"
import axios from "axios"
import { useEffect } from "react"
import apiURL from "./apiUrl"
import store from "./store/store"
import { Provider } from "react-redux"

function header() {
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  return headers
}

function App() {

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      let headers = header()
      axios.post(apiURL + '/auth/token', null, headers)
    }
  }, [])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App