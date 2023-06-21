import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import React from 'react'
import Index from './Index';
import MangaForm from './MangaForm';
import ChapterForm from './ChapterForm';
import SignIn from './Signin';
import Register from './Register';

const router = createBrowserRouter([{
    path: '/', // con una ruta renderizo un componente de tipo layout
    element: <Main />,
    children: [ // rutas hijas
        {
            path: '/', element: <Index />
        },
        {
            path: '/manga-form', element: <MangaForm />
        },
        {path: 'manga/:manga_id/chapter-form', element: <ChapterForm/>},
        {path: '/signin',element: <SignIn/>},
        {path: '/register',element: <Register/>}
    

    ]
}])



export default router;