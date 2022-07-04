import React from 'react';
import './Detail.css';


export default function Detail(props) {
  return (
    <>
    <div>
      <div className='Education' id='Education1'>
        <h4 style ={{marginLeft:'15%'}}><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/000000/external-glyph-shapes-tanah-basah-glyph-tanah-basah-68.png"/>    EDUCATION </h4>
        <h1>Dr. A.P.J. Abdul Kalam Technical University</h1>
        <h6>KIET Group of Institutions<span>B.Tech - Computer Science</span></h6>
        <p>[ 2019 - present ] <span>- 85.25% </span></p>
        <h1>C.B.S.E Board </h1>
        <h6>C.S.H.P Memorial Public School<span> - 12th Standard</span></h6>
        <p>[ 2018 - 2019 ] <span> - 89.8%</span></p>
        <h1>C.B.S.E Board</h1>
        <h6>C.S.H.P Memorial Public School<span> - 10th Standard</span></h6>
        <p>[ 2016 - 2017 ] <span> - 10 CGPA </span></p>
      </div>

      <div className='Internship'  id="Internship1">
      <h4 style ={{marginLeft:'15%'}}><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/000000/external-glyph-shapes-tanah-basah-glyph-tanah-basah-68.png"/>    INTERNSHIP </h4>
        <div className='intern'>
          <h1>Oasis Infobyte</h1>
          <p><span>[May'2022 - June'2022]</span></p>
        </div>
        <div className='intern'>
          <h1>Coding Ninjas</h1>
          <p>Campus Ambasdar - Coding Ninjas <span>[July'2021 - January'2022]</span> </p>
        </div>
        <div className='intern'>
          <h1>IBM Skill Build</h1>
          <h6>2nd Year Internship - <span>[July'2021 - August'2021]</span> </h6>
          <p><li>Learned about HTML Essentials and Communication Skills.</li></p>
        </div>
        <div className='intern'>
          <h1>IIPC KIET</h1>
          <h6>1st Year Internship - <span>[May'2020 - July'2020] </span></h6>
          <p><li>Designed a website- TECHEDU which connects you to different online learning platform.</li></p>
          <p><span>Key Skills - </span>HTML,CSS and JavaScript</p>
        </div>
      </div>

      <div className='Project'id="project1">
      <h4 style ={{marginLeft:'15%'}}><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/000000/external-glyph-shapes-tanah-basah-glyph-tanah-basah-68.png"/>    PROJECT </h4>
        <div className='proj'>
          <h1>Music Clone </h1>
          <p><span>Key Skills - </span> HTML, CSS, JavaSript</p>
          <p>CODE : <a href = 'https://github.com/Aastha-1008/Music-Clone'>https://github.com/Aastha-1008/Music-Clone</a></p>
        </div>
        <div className='proj'>
          <h1>Expenses Tracker </h1>
          <p>It Keep tracks of all expenses and filter them by year. </p>
          <p><span>Key Skills - </span> HTML, CSS , JavaScript , BootStrap , ReactJs </p>
          <p>CODE : <a href = 'https://github.com/Aastha-1008/TrackerApp'>https://github.com/Aastha-1008/TrackerApp</a></p>
        </div>
        <div className='proj'>
          <h1> Hospital Management System  <br/></h1>
          <p><li><b>Patient</b>  can book appointment and get report.</li>
              <li><b>Manager</b> can manage patient, doctor,report and salary of staff. </li>
              <li><b>Doctor</b> can see meeting timing with patient and generate report. </li>
          </p>
          <p><span>Key Skills - </span> HTML, CSS , JavaScript , BootStrap </p>
        </div>
        <div className='proj'>
          <h1>TECHEDU - website</h1>
          <p><li>It connects you to different online learning platform. </li></p>
          <p><span>Key Skills - </span>HTML,CSS and JavaScript</p>
          <p>CODE : <a href = 'https://github.com/Aastha-1008/Internship-Project'>https://github.com/Aastha-1008/Internship-Project</a></p>
        </div>
      </div>
      <div className='achive'  id="achievement1"  >
      <h4 style ={{marginLeft:'15%'}}><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/000000/external-glyph-shapes-tanah-basah-glyph-tanah-basah-68.png"/>    ACHIEVEMENT </h4>
        <li>Achieved 5 star in C++ on HackerRank.</li>
        <li>3rd RunnerUp in Debate Competition " Yuva Saptah Diwas".</li>
        <li>1st RunnerUp in Coding Competition organized by Knowledge Catalyst.</li>
        <li>Gold Medal for being school topper in 12th Standard.</li>
       </div>
      
      <div className='courses' id="course1">
      <h4 style ={{marginLeft:'15%'}}><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/000000/external-glyph-shapes-tanah-basah-glyph-tanah-basah-68.png"/>    COURSES </h4>
        <li>Technical Support Fundamentals</li>
        <li>Introduction to HTML</li>
        <li>Crash Course On Python</li>
        <li>HTML , CSS and JavaScript for Web Developers </li>
        <li>Bussiness English for Cross - Cultural Communication </li>
        <li>Introduction to C - <b>NPTEL</b></li>
        <li>Develop Soft Skills - <b>NPTEL</b></li>
        <li>Enhancing Soft skills ans Personality - <b>NPTEL </b></li>
      </div>



    </div>
    </>
  )
}
