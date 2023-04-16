// import './App.css';
import {useEffect} from "react";
import AllProjects from "./components/AllProjects";
// import Navbar from "./components/Navbar";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import Layout from "./pages/Layout";
import AdminHome from "./pages/AdminHome";
import AdminProjects from "./pages/AdminProjects";
import AdminProfile from "./pages/AdminProfile";
import AdminTodos from "./pages/AdminTodos";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { useSelector } from "react-redux"

function App() {

    const {user} = useSelector((state) => state.auth);

    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="projects" element={<AllProjects/>}/>

                {/*{*/}
                    // !user && (
                    //     <>
                            <Route path="admin/register" element={<AdminRegister/>}/>
                            <Route path="admin/login" element={<AdminLogin/>}/>
                    //     </>
                    // )
                // }


                <Route path="projects/detail" element={<ProjectDetailPage/>}/>
                {
                    // user && (
                    //     <>
                    <Route path="admin/dashboard" element={<Layout/>}>
                        <Route path="home" element={<AdminHome/>}/>
                        <Route path="projects" element={<AdminProjects/>}/>
                        <Route path="profile" element={<AdminProfile/>}/>
                        <Route path="todos" element={<AdminTodos/>}/>
                        {/* <Route path="services" element={<AdminServices />} /> */}
                    </Route>
                    // </>
                    // )
                }
            </Routes>
        </>
    );
}

export default App;
