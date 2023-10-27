import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          As a software engineer, I have a passion for building scalable and user-friendly web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). 
          With a strong foundation in HTML, CSS, JavaScript, React, Node and
          MongoDB, I craft dynamic and user-friendly web applications that meet
          the high standards for functionality and performance. With a focus
          on delivering exceptional results, I bring a creative and
          solutions-focused approach to every project.
        </p>
        <br />
        <p className="text-xl">
          I leveraged my skills and knowledge to contribute to the development of Urjanet Energy Solutions, a platform that provides data-driven insights for energy management and sustainability. During my 2.8 years at Urjanet, I worked with a cross-functional team to design, implement, and test utility data. I also helped to improve the code quality, performance, and security of the platform, using best practices such as code reviews, unit testing, and debugging. I am passionate about creating solutions that make a positive impact on the environment and society.
        </p>
      </div>
    </div>
  );
};

export default About;
