import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/Login';
import InicioPage from '@/pages/Inicio';
import CardapioPage from '@/pages/Cardapio';
import PedidosPage from '@/pages/Pedidos';
import MesasPage from '@/pages/Mesas';
import ModuleProtectedRoute from './ModuleProtectedRoute';
import { MODULO_RAIZ } from '@/constants/moduleCodes';

const router = createBrowserRouter(
    [
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '/login', element: <LoginPage /> },
    {
        path: '/inicio',
        element: (
            <ModuleProtectedRoute moduloCodigo={MODULO_RAIZ}>
                <InicioPage />
            </ModuleProtectedRoute>
        ),
    },
    {
        path: '/cardapio',
        element: (
            <ModuleProtectedRoute moduloCodigo="ORI0000001">
                <CardapioPage />
            </ModuleProtectedRoute>
        ),
    },
    {
        path: '/pedidos',
        element: (
            <ModuleProtectedRoute moduloCodigo="ORI0000002">
                <PedidosPage />
            </ModuleProtectedRoute>
        ),
    },
    {
        path: '/mesas',
        element: (
            <ModuleProtectedRoute moduloCodigo="ORI0000003">
                <MesasPage />
            </ModuleProtectedRoute>
        ),
    },
    ],
    { basename: (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/' },
);

export default router;
