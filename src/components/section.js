import React from 'react';

const Section = () => {
    return (
        <section>
            <div className="section-grid">
                <div className="section-one">
                    <h1>About</h1>
                    <div className="text-wrapper">
                        <div className="about">
                            I am a recent graduate with a Bachelors of Science in Computer Information Systems. During school, I learned about implementing technology for businesses.
                            <br />
                            <br />
                            From a young age I have been fascinated by the internet's ability to convey messages and connect people from all around the world.
                            <br />
                            <br />
                            On my freetime I enjoy gardening, reading, cooking, playing video games, excersizing, traveling, and playing musical instruments. I hope to soon create a blog where I can talk about all these things in my day to day life.
                        </div>
                    </div>
                </div>
                <div className="section-two">
                    <h1>Projects</h1>
                    <div className="text-wrapper">
                        <div className="project-one">

                        </div>
                    </div>
                </div>
                <div className="section-three">
                    <h1>Skills</h1>
                    <div className="text-wrapper">
                        <ul className="languages">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li>React</li>
                            <li>FireBase</li>
                            <li>SASS</li>
                            <li>Git</li>
                        </ul>
                        <ul>
                            <li>Pandas</li>
                            <li>PySpark</li>
                            <li>AWS</li>
                            <li>ASP.net</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Section
