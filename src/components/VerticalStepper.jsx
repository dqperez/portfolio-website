// src/VerticalStepper.jsx
import React from 'react';

const experiences = [
  {
    company: "RBox International Solutions Inc.",
    role: "Junior Full Stack Developer",
    duration: "Jul 2024 - Present",
    description: "Worked on developing scalable web applications using React and Node.js."
  },
  {
    company: "AIP Inc.",
    role: "Software Developer",
    duration: "Nov 2021 - Jun 2024",
    description: "Designed and collaborated to the development of over six proof-of-concept websites using Git, React.JS, Python-Django, and Figma. Created moodboards and mockups to enhance user experience and align with project goals for gaming, learning, asset management, and AI content platforms. Translated design mock-ups into code, implemented new features, and ensured seamless user interfaces, adhering to coding standards."
  },
  {
    company: "Trends and Technologies Inc.",
    role: "Data Science Intern",
    duration: "Jun 2018 - July 2018",
    description: "Collaborated by integrating the interface for an intelligent web application using Bootstrap, Python-Django, and PostgreSQL for sentiment analysis to track customer satisfaction. Attended workshops on machine learning, UX design, whitepaper discussions, and soft skills. Trained in industry tools and practices, including version control, virtual environments, and scrum methodology."
  }
];

const VerticalStepper = () => {
  return (
    <div className="relative flex flex-col items-start">
      {experiences.map((exp, index) => (
        <div key={index} className="flex items-start mb-6 relative pl-8">
          {/* Circle indicator */}
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-header rounded-full"></div>
          
          {/* Vertical line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-2 top-6 w-px h-full bg-header"></div>
          )}

          {/* Experience details */}
          <div className="ml-6">
            <span className="text-xs font-bold text-header uppercase">{exp.duration}</span>
            <h4 className="text-lg text-subtitles font-bold">{exp.role}</h4>
            <h3 className="text-subtitles">{exp.company}</h3>
            <p className="mt-2 text-sm text-body text-justify">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
