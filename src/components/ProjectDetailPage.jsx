import {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "tailwindcss/tailwind.css";
import {useLocation} from "react-router-dom";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProjectDetailPage = () => {
    const location = useLocation();
    const {data} = location.state;
    console.log(data)
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log(nav);
    };


    const article = '<article class="prose lg:prose-xl my-11 text-gray-200">\n    <h3 class="text-gray-200">Garlic bread with cheese: What the science tells us</h3>\n    <p>\n      For years parents have espoused the health benefits of eating\n      garlic bread with cheese to their children, with the food earning\n      such an iconic status in our culture that kids will often dress up\n      as warm, cheesy loaf for Halloween.\n    </p>\n    <p> \n      But a recent study shows that the celebrated appetizer may be\n      linked to a series of rabies cases springing up around the\n      country.\n    </p>\n  </article>';
    return (<>
            <Navbar navController={handleNav} nav={nav}/>
            <div className="flex flex-col justify-center  sm:mx-28 mt-28">
                <div className="text-lg sm:text-2xl flex text-gray-200 mx-[2px]">
                    <h1>{data.projectName}</h1>
                    <div className="bg-green-700 mx-5 p-1 sm:p-2 text-sm rounded tracking-wider">
                        {data.status}
                    </div>
                </div>


                <div className="flex flex-col justify-center  sm:flex-row my-7">
                    <div className="w-full sm:w-[1000px] sm:px-auto">
                        <CarouselProvider
                            naturalSlideWidth={300}
                            naturalSlideHeight={300}
                            totalSlides={data.projectImages.length}
                            isPlaying={true}
                        >
                            <Slider className="max-h-[450px] w-full sm:mx-36 object-contain">
                                {data.projectImages.map((current, index) => (
                                    <Slide index={index}><img src={current["url"]}
                                                              className="object-contain h-[500px] w-[700px]"/></Slide>))}

                            </Slider>
                            <div className="my-4 flex justify-center">
                                <ButtonBack
                                    className="text-gray-200 bg-[#2d2b27] mx-4 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit disabled:opacity-30 disabled:hover:cursor-not-allowed">Back</ButtonBack>
                                <ButtonNext
                                    className="text-gray-200 bg-[#2d2b27] mx-4 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit disabled:opacity-30 disabled:hover:cursor-not-allowed">Next</ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>


                    <div
                        className="inline-block sm:h-[480px] sm:min-h-[1em] sm:w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 ml-12"></div>
                    <div className="flex flex-col mx-5 text-gray-200">
                        <h1 className="text-2xl sm:text-3xl font-mono">Tech Stack</h1>
                        <div className="flex flex-col">
                            <ul className="list-disc mx-10 my-5 text-lg font-mono leading-10">
                                <li className="tracking-wider">Reactjs</li>
                                <li className="tracking-wider">MongoDB</li>
                                <li className="tracking-wider">Nodejs</li>
                                <li className="tracking-wider">Expressjs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-gray-200 text-2xl">
                    <hr className="border-2 border-gray-700"/>
                    <div
                        className=" rounded-md p-6 prose lg:prose-xl text-white"
                        dangerouslySetInnerHTML={{__html: data.description}}
                    ></div>
                </div>
            </div>
            <Footer/>
        </>);
};

export default ProjectDetailPage;
