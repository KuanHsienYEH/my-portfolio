import React, { useState, useRef } from 'react';
import './exp.css';

const sections = [{
  id: '1',
  title: 'Advantech',
  link: 'https://www.advantech.com/en',
  date: 'Nov 2019 - Aug 2023',
  post: 'Software Engineer',
  desc: [
    'Actively providing solutions for designing and building scalable web architecture for enterprise products using technologies including ReactJS, Redux, VueJS, Vuex, RESTful API, ASP.NET framework,  Redis Cache, Azure etc.',
    'Revamped performance by transitioning from jQuery to ReactJS components, managed with Redux. The result was a remarkable 84% enhancement in page loading speed, as validated by Lighthouse metrics.',
    'Led and implemented End-to-End testing on projects, reducing work hours from half day to 7 minutes.',
    'Integrated test automation into Azure pipeline to ensure software quality.',
    'Mentored junior front-end developers to expand their skillsets and conducted internal tech talks to share knowledge and insights.',
    'Followed agile methodology and attended daily SCRUM meetings to gather technical requirements and enhance the application functionality.'
  ]
}, {
  id: '2',
  title: 'Starbit',
  link: 'https://star-bit.io/',
  date: 'Feb 2019 - Nov 2019 ',
  post: 'Frontend Developer',
  desc: [
    'Actively providing solutions for designing and building scalable web UI architecture for cryptocurrency exchange platform using technologies including VueJS, Vuex, NuxtJS, SCSS.',
    'Collaborated with designers to transform static graphics into web pages.',
    'Implemented routing and multilingual support using NuxtJS framework for Single Page Applications (SPA), incorporating technologies such as Vue Router and i18n.',
    'Managed CSS structure with SCSS and developed responsive websites.',
    'Worked in collaboration with backend developers to integrate data through RESTful API.'
  ]
}, {
  id: '3',
  title: '104 corp',
  link: 'https://www.104.com.tw/jobs/main/',
  date: 'Feb 2019 - Aug 2019',
  post: 'ITPM',
  desc: [
    // 'Implemented Root Cause Analysis flow to clarify the root causes which lead to web service downtime.',
    // 'Implemented Change Management which efficiently reduced service downtime caused by human error by 90%.',
    // 'Generated reports by parsing XML using PHP to organize APs that run on company web service, which was maintained manually, reducing working hours from 3 days to 2 hours.',
    // 'Designed the UI/UX of the internal infrastructure management online service page for the SLA reports.',
    // 'Organized the step approach to the infrastructure updated plan.',
    // 'Responsible for handling interdepartmental issues.'
    'Implemented Root Cause Analysis flow to clarify the service downtime root causes.',
    'Implemented a Change Management, contributed to a 90% reduction in service downtime caused by human error.',
    'Automated AP inventory report by parsing XML, reducing working hours from 3 days to 2 hours.',
    'Organized Step-by-Step Approach for Infrastructure Update Planning.',
    'Accountable for facilitating effective cross-functional communication.'
  ]
}]

function Exp() {
  const [currentSection, setCurrentSection] = useState('1');
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);



  const handleScroll = () => {
    const scrollPosition = contentRef.current.scrollTop + contentRef.current.offsetHeight / 2;
    const visibleSection = sections.find(
      (section) => scrollPosition >= section.top && scrollPosition < section.bottom
    );
    if (visibleSection) {
      setCurrentSection(visibleSection.id);
    }
  };

  const handleClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <section id="Expenience">
      <h2 className='title'>Expenience</h2>
      <div className="exp">
        <div className="exp__sidebar" ref={sidebarRef}>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={currentSection === section.id ? 'active' : ''}
                onClick={() => handleClick(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="exp__content"
          ref={contentRef}
          onScroll={handleScroll}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className={`section ${currentSection === section.id ? 'visible' : ''}`}
              data-title={section.title}
              data-desc={section.desc}
            >
              <h2>{section.post}<a href={section.link}> @ {section.title}</a></h2>
              <p>{section.date}</p>
              <ul>
                {section.desc.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exp;
