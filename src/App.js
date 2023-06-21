// import './App.css';
import {useEffect, useState} from "react";
import AllProjects from "./components/AllProjects";
// import Navbar from "./components/Navbar";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import Layout from "./pages/Layout";
import AdminHome from "./pages/AdminHome";
import AdminProjects from "./pages/AdminProjects";
import AdminProfile from "./pages/AdminProfile";
import AdminTodos from "./pages/AdminTodos";
import ProjectDetailPage from "./components/ProjectDetailPage";
import {useSelector} from "react-redux"
import {fetchProjects} from "./redux/features/project/project";
import {findUser} from "./redux/features/profile/profile";
import {useDispatch} from "react-redux";
import axios from "axios";
import {API} from "./constants";
import {setUser} from "./redux/features/profile/profile";


const SecureRoute = ({children}) => {
    const {user} = useSelector((state) => state.auth);
    console.log(user)
    if (user) {
        return children;
    } else {
        <Navigate to="admin/login"/>
    }
}

function App() {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth);
    const userInfo = useSelector((state) => state.profile);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        dispatch(fetchProjects());
        // dispatch(findUser());

    }, [dispatch])
    const handleNavigation = () => {
        // navigate("admin/login");
        <Navigate to="admin/login"/>
    }
    console.log(userInfo.user);
    useEffect(() => {
        handleNavigation()
    }, [Navigate])





    return (<>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="AllProjects" element={<AllProjects/>}/>

            {/*{*/}
            // !user && (
            // <>
            <Route path="admin/register" element={<AdminRegister/>}/>
            <Route path="admin/login" element={<AdminLogin/>}/>
            // </>
            // )
            // 


            <Route path="projects/detail" element={<ProjectDetailPage/>}/>
            {

                user ? (
                    <Route path="admin/dashboard" element={<Layout/>}>
                        <Route index path="home" element={<AdminHome/>}/>
                        <Route path="projects" element={<AdminProjects/>}/>
                        <Route path="profile" element={<AdminProfile/>}/>
                        <Route path="todos" element={<AdminTodos/>}/>
                        {/* <Route path="services" element={<AdminServices />} /> */}
                    </Route>
                ) : handleNavigation()


            }
        </Routes>
    </>);
}

export default App;
