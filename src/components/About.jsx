import React from 'react'

function About() {
    return (
        <div name="about" className='flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <div>
                    <p className='text-xl mt-10 lg:mt-20'>
                        Passionate about Software development and currently a graduate student at Northeastern University. After the completion of my Bachelor from GTU Gujarat, India, I worked for TechNeos Solutions, Ahmedabad, India for 6 months as a Software Developer Intern. I have a track record of developing code and digital solutions using cutting-edge technologies for startups. Other than that, I was also responsible for support where it needed to resolve defects in real-time.
                    </p>
                    <br/>
                    <p className='text-xl w-120'>
                        My expertise lies in the following:
                        <br/>

                        <b className='text-blue-500'>Programming Languages:</b> <span>Java, JavaScript, Typescript, Python, Object-Oriented Design</span>
                        <br/>
                        <b className='text-blue-500'>Databases:</b> <span>MySQL, MongoDB, PostgreSQL</span>
                        <br/>
                        <b className='text-blue-500'>Technologies:</b> <span>HTML5, CSS3, Bootstrap5, Hibernate, Spring, Spring-boot, Express, NodeJS, ReactJS, Redux, JSON, RESTful APIs, Swing, XML</span>
                        <br/>
                        <b className='text-blue-500'>Software/Tools:</b> <span>Postman, IntelliJ, Tomcat, VS Code, Jira, DevOps, Github Actions, CI/CD, Docker, ETL, TDD, Maven, Git, Junit</span><br/>
                        <b className='text-blue-500'>Cloud Technology:</b> <span>EC2, S3, CloudFront, RDS, Cloudwatch, AWS Lambda, CloudFront, IAM, Metrics, AMI, User Data, Terraform, Packer</span><br/>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;
