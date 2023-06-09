import { createBrowserRouter, redirect } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/Index';
import MangaForm from './pages/MangaForm';
import ChapterForm from './pages/ChapterForm';
import SignIn from './pages/Signin';
import Register from './pages/Register';
import CiaForm from './pages/CiaForm';
import AuthorForm from './pages/AuthorForm';

const router = createBrowserRouter([{
    path: '/', // con una ruta renderizo un componente de tipo layout
    element: <Main />,
    children: [ // rutas hijas
        { path: '/', element: <Index /> },
        { path: '/register', element: <Register />, loader: () => localStorage.getItem('user') && redirect('/') },
        { path: '/signin', element: <SignIn />, loader: () => localStorage.getItem('user') && redirect('/') },
        { path: '/manga-form', element: <MangaForm />, loader: () => (JSON.parse(localStorage.getItem('user')).role === 0 || JSON.parse(localStorage.getItem('user')).role === 3) && redirect('/') },
        { path: 'manga/:manga_id/chapter-form', element: <ChapterForm />, loader: () => (JSON.parse(localStorage.getItem('user')).role === 0 || JSON.parse(localStorage.getItem('user')).role === 3) && redirect('/') },
        { path: '/cia-form', element: <CiaForm />, loader: () => (JSON.parse(localStorage.getItem('user')).role === 1 || JSON.parse(localStorage.getItem('user')).role === 2 || JSON.parse(localStorage.getItem('user')).role === 3) && redirect('/') },
        //Falta crear NotAllowed
        { path: '/author-form', element: <AuthorForm />, loader: () => (JSON.parse(localStorage.getItem('user')).role === 1 || JSON.parse(localStorage.getItem('user')).role === 2 || JSON.parse(localStorage.getItem('user')).role === 3) && redirect('/') }
    ]
}])

export default router;