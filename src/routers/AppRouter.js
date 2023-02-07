import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pagesComponents/HomePage';
import LoginPage from '../pagesComponents/LoginPage';

const AppRouter = () => {

    var login = true; //implementar login
    return (
        <Routes>
            <Route path="/" element={login ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;