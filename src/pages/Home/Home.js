


// // Home.js
// import React from 'react';
// import Skills from './Skills';
// import "./Skills.css"
// import linkdinprofile from "../../Asset/linkdinprofile.jpg"

// function Home() {
//     return (
//         <div className="bg-wall min-h-screen">
//             <div className='flex items-center justify-center'>
//                 <header className="bg-semihead justify-center  content-center pl-5  name slider w-full  text-white py-10">
//                     <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold">Ayesha Tazeen</h1>
//                     <p className="text-lg md:text-xl lg:text-2xl">Passionate Frontend Web Developer</p>
//                 </header>
//             </div>
//             <div className="container mx-auto py-10">
//                 <div className="flex justify-center items-center h-auto md:h-80 overflow-hidden">
//                     <div className="slider p-5">
//                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-head">Welcome to My Portfolio</h2>
//                         <p className="text-lg md:text-xl lg:text-2xl text-semihead">I specialize in creating beautiful and responsive web applications.</p>
//                     </div>
//                     <div className=' fade-pic h-full w-[50%] md:w-[25%] mr-3 md:mr-0'><img className='rounded-full overflow-hidden' src={linkdinprofile} alt="My-Pic" /></div>
//                 </div>
//             </div>

//             <Skills />
//         </div>
//     );
// }

// export default Home;








// Home.js
import React from 'react';
import Skills from './Skills';
import "./Skills.css";
import profile from "../../Asset/profile.png";
// import Education from './Education';
import Certificate from './Certificate';
import FeaturedProjects from './FeaturedProjects';
import Footer from '../../components/Footer';
import ContactMeButton from "../Contacts/ContactMeButton"

import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from "@mui/icons-material/GitHub"
import MailIcon from '@mui/icons-material/Mail';



function Home() {
    return (
        <div className="bg-wall min-h-screen">
            <div className='flex items-center justify-center'>
                <header className="bg-semihead justify-center  content-center pl-5  name slider w-full  text-white py-10">
                    <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold">Ayesha Tazeen</h1>
                    <p className="text-lg md:text-xl lg:text-2xl">Passionate Frontend Web Developer</p>


                    <div className="mt-8 flex items-center justify-between border-t border-white pt-6">
                        <div className="flex items-center">
                            <a href="https://www.linkedin.com/in/ayesha-tazeen-a097152a3/" target="_blank" rel="noopener noreferrer" className=" hover:text-head mr-4 transition duration-300">
                                <i><LinkedIn /></i>
                            </a>
                            <a href="https://github.com/Ayesha-tazeen" target="_blank" rel="noopener noreferrer" className=" hover:text-head mr-4 transition duration-300">
                                <i><GitHub /></i>
                            </a>
                            <a href="mailto:ayesha.khann9864@gmail.com" target="_blank" rel="noopener noreferrer" className=" hover:text-head transition duration-300">
                                <i><MailIcon /></i>
                            </a>
                            <div className='ml-3'><ContactMeButton /></div>
                        </div>

                    </div>
                </header>
            </div>
            <div className="container mx-auto py-10">
                <div className="flex justify-center items-center h-auto md:h-80 overflow-hidden">
                    <div className="slider p-5">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-head">Welcome to My Portfolio</h2>
                        <p className="text-xs md:text-xl lg:text-2xl text-semihead">I specialize in creating beautiful and responsive web applications.</p>
                    </div>
                    <div className=' fade-pic h-full w-[50%] md:w-[25%] mr-3 md:mr-0'><img className='rounded-full overflow-hidden' src={profile} alt="My-Pic" />
                    </div>

                </div>
            </div>

            <Skills />



            <div>
                <FeaturedProjects />
            </div>

            <div>
                <Certificate />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
