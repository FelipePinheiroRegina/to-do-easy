import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Create } from "../pages/Create"
import { Update } from "../pages/Update"

export function RoutesApp() {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="update/:id" element={<Update/>}/>
            
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}
