import { Fade } from 'react-awesome-reveal';
import img from '../assets/news.png';
import img2 from '../assets/home.png';
import img3 from '../assets/techno.png';


const Projects = () => {
    return (
        <Fade>
            <h2 className='text-center text-white font-bold text-4xl mb-12'>My <span className='text-[#804dee]'>Projects</span></h2>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">World News</h1>
                                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">World News is a MERN-based e-commerce web application with an admin and user dashboard.</p>
                                <a href="https://world-news-30419.web.app/"><button className="rounded-full bg-[#804dee] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Home Fix</h1>
                                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Home Fix is a React single-page application with Firebase authentication. It is about Home Service.</p>
                                <a href="https://home-fix-f067a.web.app/"><button className="rounded-full bg-[#804dee] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img3} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Electro Techno</h1>
                                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Electro Technois a full-stack web application with authentication and database inclusion.
</p>
                                <a href="https://electro-techno.web.app/"><button className="rounded-full bg-[#804dee] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                </Fade>
       
    );
};

export default Projects;