import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import travelAdvisor from '../../common/images/travel-advisor.PNG';
import hmk from '../../common/images/hmk.PNG';
import qyd from '../../common/images/qyd.PNG';
import './work.css';


function Work() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 1) {
        setIsVisible1(true);
      } else {
        setIsVisible1(false);
      }

      if (scrollPosition > windowHeight * 1.7) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }

      if (scrollPosition > windowHeight * 2) {
        setIsVisible3(true);
      } else {
        setIsVisible3(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="SideProject" className="work">
      <h3 className='title'>Side Project</h3>
      <div className={`box ${isVisible1 ? 'visible' : ''}`}>
        <div className='box__inner'>
          <a className='img-wapper box__wrapper-right' href="https://kuanhsienyeh.github.io/travel-advisor/">
            <img src={travelAdvisor} alt="travel advisor" />
          </a>
          <div className='box__wrapper box__wrapper-right'>
            <span>Featured Project</span>
            <a className='project' href="https://kuanhsienyeh.github.io/travel-advisor/">Travel Advisor</a>
            <div className='desc'>
              <p>Travel advisor web application provides users with essential information and recommendations for popular travel destinations. With an intuitive interface and real-time data, users can explore attractions, find accommodations, and make informed travel decisions.</p>
            </div>
            <ul className='techstack'>
              <li>React</li>
              <li>mateiral-ui</li>
              <li>Google Api</li>
            </ul>
            <div className='link'>
              <a href="https://github.com/KuanHsienYEH/travel-advisor"><FaGithub size="1em" color="cornflowerblue" /></a>
              <a href="https://kuanhsienyeh.github.io/travel-advisor/"><FaExternalLinkAlt size="1em" color="cornflowerblue" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`box ${isVisible2 ? 'visible' : ''}`}>
        <div className='box__inner '>
          <a className='img-wapper-right' href="https://www.homemark.com.tw/">
            <img src={hmk} alt="hmk" />
          </a>
          <div className='box__wrapper box__wrapper-left '>
            <span>Featured Project</span>
            <a className='project' href="https://www.homemark.com.tw/">HMK e-commerce</a>
            <div className='desc'>
              <p>HomeMark.com.tw is a leading e-commerce website in Taiwan, offering a wide range of home improvement and household products. As a front-end developer on this project, I contributed to creating a user-friendly interface, optimizing performance, and ensuring a seamless shopping experience for customers.</p>
            </div>
            <ul className='techstack'>
              <li>Nuxt.js</li>
              <li>Vue.js</li>
            </ul>
            <div className='link'>
              <a href="https://www.homemark.com.tw/"><FaExternalLinkAlt size="1em" color="cornflowerblue" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`box ${isVisible3 ? 'visible' : ''}`}>
        <div className='box__inner'>
          <a className='img-wapper' href="https://cytmath.xyz/QiuYudengMathematics/">
            <img src={qyd} alt="QiuYudengMathematics" />
          </a>
          <div className='box__wrapper box__wrapper-right'>
            <span>Featured Project</span>
            <a className='project' href="https://cytmath.xyz/QiuYudengMathematics/">Qiu-Yudeng instructional videos</a>
            <div className='desc'>
              <p>An educational website powered by Google Cloud, designed by Qiu Yudeng, specifically focused on mathematics. Students can access a wide range of instructional videos on various mathematical topics. With the integration of Google Cloud, the website provides a seamless and reliable platform for students to enhance their mathematical knowledge and skills.</p>
            </div>
            <ul className='techstack'>
              <li>Vue.js</li>
              <li>.net MVC</li>
            </ul>
            <div className='link'>
              <a href='https://github.com/ChenChihChieh/QiuYudengMathematics'><FaGithub size="1em" color="cornflowerblue" /></a>
              <a href='https://cytmath.xyz/QiuYudengMathematics/'><FaExternalLinkAlt size="1em" color="cornflowerblue" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;