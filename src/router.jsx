import { createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/Index';
import MangaForm from './pages/MangaForm';
import ChapterForm from './pages/ChapterForm';
import SignIn from './pages/Signin';
import Register from './pages/Register';
import CiaForm from './pages/CiaForm';

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
        {path: '/register',element: <Register/>},
        {path: '/cia-form',element: <CiaForm/>}
    

    ]
}])



export default router;