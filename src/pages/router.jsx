import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index';
import MangaForm from '../components/MangaForm';
const router = createBrowserRouter([{
    path: '/', // con una ruta renderizo un componente de tipo layout
    element: <Main />,
    children: [ // rutas hijas
        {
            path: '/index', element: <Index />
        },
        {
            path: '/manga-form', element: <MangaForm />
        }
    ]
}])



export default router;