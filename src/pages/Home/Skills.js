





import React, { useEffect, useRef, useState } from 'react';
import './Skills.css'; // Import CSS file for animation

function Skills() {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [areCardsVisible, setAreCardsVisible] = useState(false);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const titleObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsTitleVisible(true);
                titleObserver.unobserve(titleRef.current);
            }
        }, { threshold: 0.5 });

        const cardsObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setAreCardsVisible(true);
                cardsObserver.unobserve(cardsRef.current);
            }
        }, { threshold: 0.5 });

        const titleRefCurrent = titleRef.current; 
        const cardsRefCurrent = cardsRef.current;

        if (titleRefCurrent) {
            titleObserver.observe(titleRefCurrent);
        }

        if (cardsRefCurrent) {
            cardsObserver.observe(cardsRefCurrent);
        }

        return () => {
            if (titleRefCurrent) {
                titleObserver.unobserve(titleRefCurrent);
            }
            if (cardsRefCurrent) {
                cardsObserver.unobserve(cardsRefCurrent);
            }
        };
    }, []);

    return (
        <section className='flex bg-semihead items-center flex-col md:flex-row justify-center'>
            <div ref={titleRef} className={`w-full pt-3 md:w-auto md:py-0 ${isTitleVisible ? 'fade-in' : 'invisible'}`}>
                <div className="container  mx-auto">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl text-center font-bold name px-1 text-white md:mb-2">Frontend Development Skills</h2>
                </div>
            </div>
            <div ref={cardsRef} className={`bg-semihead py-10 ${areCardsVisible ? 'fade-in' : 'invisible'}`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                        <SkillCard title="HTML5" description="Proficient in writing semantic and accessible HTML markup." />
                        <SkillCard title="CSS3" description="Skilled in using CSS for styling and layout design, including CSS Flexbox and Grid." />
                        <SkillCard title="JavaScript" description="Strong proficiency in JavaScript, including ES6+ features and modern frameworks/libraries like React." />
                        <SkillCard title="React.js" description="Experienced in building interactive and dynamic user interfaces using React.js." />
                        <SkillCard title="Responsive Design" description="Knowledgeable in creating responsive layouts that adapt to various screen sizes and devices." />
                        <SkillCard title="Version Control (Git)" description="Familiar with using Git for version control and collaboration on projects." />
                    </div>
                </div>
            </div>
        </section>
    );
}


function SkillCard({ title, description }) {
    return (
        <div className="p-5 shadow-md bg-white mx-3  md:mx-0 shadow-head md:mr-2 text-head rounded-md">
            <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
            <p className="text-lg text-semihead">{description}</p>
        </div>
    );
}

export default Skills;
