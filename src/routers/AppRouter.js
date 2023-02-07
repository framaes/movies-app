import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pagesComponents/HomePage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="home" element={<HomePage />} />
        </Routes>
    );
};

export default AppRouter;