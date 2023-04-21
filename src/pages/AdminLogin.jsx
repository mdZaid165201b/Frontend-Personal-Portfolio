import {useState, useEffect, React} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../redux/features/auth/auth";
import {Navigate} from "react-router-dom";
import {RotateLoader} from "react-spinners";


const ErrorMessage = ({message}) => {
    return (
        <div
            className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Danger alert!</span> {message}
            </div>
        </div>
    );
}


const AdminLogin = () => {
    const [data, setData] = useState({
        email: "", password: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, loading, error, token} = useSelector((state) => state.auth);
    const allUserData = useSelector((state) => state.auth);
    // console.log(allUserData);
    const [userState, setUser] = useState(user ? user : null);
    const handleLogin = () => {
        // if (event.key === "Enter" || event.code === 13) {
        //     dispatch(loginUser({email: data.email, password: data.password}));
        //     if (error && loading) {
        //         navigate("/admin/dashboard/home");
        //     }
        // }
        // console.log(event)
        dispatch(loginUser({email: data.email, password: data.password}));
        if (error && loading) {
            navigate("/admin/dashboard/home");
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/admin/dashboard/home");
        }
    }, [navigate, user])


    return (<div className=" min-h-screen flex flex-col">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            {
                loading ? <RotateLoader
                        color="#16A34A"
                        margin={3}
                        size={18}
                        speedMultiplier={1}
                    />
                    : (

                        <div className="bg-black/20 px-6 py-8 rounded shadow-md shadow-black/70 text-black w-full">
                            {error && <ErrorMessage message={error.message}/>}
                            <h1 className="mb-8 text-3xl text-gray-200 text-center tracking-wider">
                                Login
                            </h1>

                            <input
                                type="email"
                                className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded mb-4 bg-black/25"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setData({
                                    ...data, email: e.target.value
                                })}
                            />
                            <input
                                type="password"
                                className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded mb-4 bg-black/25"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setData({
                                    ...data, password: e.target.value
                                })}
                                onKeyUp={(e) => {
                                    if(e.key === "Enter" || e.code === 13) {
                                        handleLogin()
                                    }
                                }}
                            />


                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 active:bg-green-800 duration-100 focus:outline-none my-1 tracking-wider text-lg"
                                onClick={handleLogin}
                            >
                                Login
                            </button>


                            <div className=" mt-6 flex justify-center text-gray-200">
                                Already have an account?
                                <Link
                                    to="/admin/register"
                                    className="underline  text-blue ml-4 hover:text-green-500"
                                    //   href="/admin/register"
                                >
                                    Register
                                </Link>
                                .
                            </div>
                        </div>)
            }
        </div>
    </div>);
};

export default AdminLogin;
