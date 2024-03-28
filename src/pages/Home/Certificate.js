
// import React, { useEffect, useRef, useState } from 'react';
// import frontnedcer from '../../Asset//frontendcer.png';
// import jscer from  "../../Asset/jscer.png"; // Import the image of your JavaScript certificate
// import './Skills.css'; // Import CSS file for animation

// const Certificate = () => {
//   const [isCertificateVisible, setIsCertificateVisible] = useState(false);
//   const certificateRef = useRef(null);

//   useEffect(() => {
//     const certificateObserver = new IntersectionObserver((entries) => {
//       const [entry] = entries;
//       if (entry.isIntersecting) {
//         setIsCertificateVisible(true);
//         certificateObserver.unobserve(certificateRef.current);
//       }
//     }, { threshold: 0 });

//     if (certificateRef.current) {
//       certificateObserver.observe(certificateRef.current);
//     }

//     return () => {
//       if (certificateRef.current) {
//         certificateObserver.unobserve(certificateRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={certificateRef} className={`certificate-page bg-semihead py-8  px-2 md:px-36 ${isCertificateVisible ? 'fade-in' : 'invisible'}`}>
//       <h2 className="text-3xl text-white name font-bold mb-8">Certificates</h2>
//       <div className="certificate bg-white rounded-lg shadow-md p-6 mb-4">
//         <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
//         <p className="text-gray-600 mb-2">Issued by: Pro5.ai</p>
//         <p className="text-gray-600 mb-4">Certificate awarded for being in the top 5% of professionals in frontend development.</p>
//         <img src={frontnedcer} alt="Frontend Developer Certificate" className="mx-auto w-3/4" />
//       </div>
//       <div className="certificate bg-white rounded-lg shadow-md p-6 mb-4">
//         <h3 className="text-xl font-semibold mb-2">Javascript Course Completion</h3>
//         <p className="text-gray-600 mb-2">Issued by: Simplilearn</p>
//         <p className="text-gray-600 mb-4">Certificate awarded for completing the JavaScript course.</p>
//         <img src={jscer} alt="JavaScript Course Completion Certificate" className="mx-auto   object-fill w-3/4" />
//       </div>
//     </div>
//   );
// }

// export default Certificate;



import React, { useEffect, useRef, useState } from 'react';
import frontnedcer from '../../Asset//frontendcer.png';
import jscer from  "../../Asset/jscer.png"; // Import the image of your JavaScript certificate
import './Skills.css'; // Import CSS file for animation

const Certificate = () => {
  const [isCertificateVisible, setIsCertificateVisible] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    const certificateObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsCertificateVisible(true);
        certificateObserver.unobserve(certificateRef.current);
      }
    }, { threshold: 0 });

    const currentRef = certificateRef.current; // Store current value of ref
    if (currentRef) {
      certificateObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        certificateObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={certificateRef} className={`certificate-page bg-semihead py-8  px-2 md:px-36 ${isCertificateVisible ? 'fade-in' : 'invisible'}`}>
      <h2 className="text-3xl text-white name font-bold mb-8">Certificates</h2>
      <div className="certificate bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
        <p className="text-gray-600 mb-2">Issued by: Pro5.ai</p>
        <p className="text-gray-600 mb-4">Certificate awarded for being in the top 5% of professionals in frontend development.</p>
        <img src={frontnedcer} alt="Frontend Developer Certificate" className="mx-auto w-3/4" />
      </div>
      <div className="certificate bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Javascript Course Completion</h3>
        <p className="text-gray-600 mb-2">Issued by: Simplilearn</p>
        <p className="text-gray-600 mb-4">Certificate awarded for completing the JavaScript course.</p>
        <img src={jscer} alt="JavaScript Course Completion Certificate" className="mx-auto   object-fill w-3/4" />
      </div>
    </div>
  );
}

export default Certificate;


