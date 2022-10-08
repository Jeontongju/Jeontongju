import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SectionImg(props){
    
}
function Home(){
    const navList = ['img/navImg1.jpeg', 'img/navImg2.jpeg', 'img/navImg3.jpeg']
    const [index, setIndex] = useState(0);
    return(
        <div>
            <header className="header">
                <h1>조물주 위에 막걸리</h1>
            </header>
            <nav className="nav">
                <img src={navList[index]}/>
            </nav>
            <article className="menu">
                <section className="recommendation">
                    <div>
                        <Link to={`/drinks/recommendation`}/>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Home;
