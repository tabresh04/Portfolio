import React from "react";
import style from "./Education.module.css";
import sggs from "../../../public/images/sggs2.png";
import dayanand from "../../../public/images/dayanand.webp";
import saraswati from "../../../public/images/saraswati.jpeg";

function Education() {
    return (
        <>
            <div className={style.education}>
                <section className={`${style.graduation} ${style.common}`}>
                    <img src={sggs} alt="Graduation" />
                    <div>
                        <h2>Bachelor of Technology</h2>
                        <p>Institution: Shri Guru Gobind Singhji Institute of Engineering and Technology</p>
                        <p>Year: 2022 - 2026</p>
                        <p>Computer Science and Engineering</p>
                        <p>CGPA: 8.3</p>
                    </div>
                </section>
                <section className={`${style.college} ${style.common}`}>
                    <img src={dayanand} alt="College" />
                    <div>
                        <h2>Intermediate</h2>
                        <p>Institution: Dayanand Junior College, Latur</p>
                        <p>Year: 2020 - 2022</p>
                        {/* <p>Percentage: 75.76%</p> */}
                    </div>
                </section>
                <section className={`${style.school} ${style.common}`}>
                    <img src={saraswati} alt="School" />
                    <div>
                        <h2>Schooling</h2>
                        <p>Institution: Saraswati Vidyalay, Latur</p>
                        {/* <p>Percentage: 92.4%</p> */}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Education;