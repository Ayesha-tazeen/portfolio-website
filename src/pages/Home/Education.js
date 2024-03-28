// // Education.js
// import React from 'react';

// function Education() {
//     const schoolName = "Studied at St. Xaviers School, Hazaribagh"; // Hardcoded school name

//     return (
//         <div className="text-center   flex items-center justify-center">
//             {/* Logo */}

//             <div>
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-head">Education</h2>
//                 <p className="text-lg md:text-xl lg:text-2xl text-semihead">{schoolName}</p>
//             </div>
//             <img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fybxgqfy13egznklzisy" alt="School Logo" className="h-24 w-24 mr-2 border border-semihead rounded-full " />
//             {/* School Name */}
//         </div>
//     );
// }

// export default Education;











import React from "react";

const Education = () => {
    return (
        <>
            <div className=" w-[50%] text-head border-none  pt-4 justify-between flex flex-row   items-center">
                <div >
                    <div className="flex px-3 shadow-md shadow-head rounded-md bg-white  mb-3 justify-start items-center w-full">
                        <img
                            className="h-14 w-14 rounded-full mt-5 mb-3 mr-4 shadow-md shadow-black"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh2yE_zldF2f4cOrlUCyZ1-KR3T8XZUCFU2PTInkJrvqW6Oap5-IyRgLR-kJ7pOrPe1Y&usqp=CAU"
                            alt="Carmel School Logo"
                        />
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">Class 10 (ICSE board)</h3>
                            <p className="">Carmel School Hazaribagh</p>
                        </div>
                    </div>
                    <div className="flex  px-3  shadow-md shadow-head rounded-md bg-white  mb-3 items-center w-full">
                        <img
                            className="h-14 w-14 rounded-full mb-3 text-center bg-white mr-4 shadow-md shadow-black"
                            src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fybxgqfy13egznklzisy"
                            alt="St. Xavier's School Logo"
                        />
                        <div>
                            <h3 className="text-lg font-bold">Class 12 (Science - PCB with IP optional)</h3>
                            <p className="">St. Xavier's School Hazaribagh</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="  text-xl font-bold  text-wall name lg:text-3xl md:text-2xl  pt-4  w-full">Education</h2>
                </div>


            </div>
        </>
    )
}

export default Education;
