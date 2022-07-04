import React,{useState} from 'react';
import Detail from './Detail/Detail';
import img from './person.svg';
import './Aboutme.css';

export default function Aboutme() {


  const[classdetail,setclassdetail]=useState('Education');

  const [backedu,setbackedu]=useState('rgb(27,28,58)');
  const [textedu,settextedu]=useState('white');

  const [backintern,setbackintern]=useState('white');
  const [textintern,settextintern]=useState(' rgb(32, 42, 68);');

  const [backproj,setbackproj]=useState('white');
  const [textproj,settextproj]=useState(' rgb(32, 42, 68);');

  const [backachiv,setbackachiv]=useState('white');
  const [textachiv,settextachiv]=useState(' rgb(32, 42, 68);');

  const [backintere,setbackintere]=useState('white');
  const [textintere,settextintere]=useState(' rgb(32, 42, 68);');


  const c0 = () =>{
    setbackachiv('white');
    setbackintere('white');
    setbackintern('white');
    setbackproj('white');
    settextintern('rgb(27,28,58)');
    settextachiv('rgb(27,28,58)');
    settextintere('rgb(27,28,58)');
    settextproj('rgb(27,28,58)');
  }

  const c1 = () =>{
    setbackachiv('white');
    setbackintere('white');
    setbackedu('white');
    setbackproj('white');
    settextedu('rgb(27,28,58)');
    settextachiv('rgb(27,28,58)');
    settextintere('rgb(27,28,58)');
    settextproj('rgb(27,28,58)');
  }
  const c2 = () =>{
    setbackachiv('white');
    setbackintere('white');
    setbackedu('white');
    setbackintern('white');
    settextedu('rgb(27,28,58)');
    settextachiv('rgb(27,28,58)');
    settextintere('rgb(27,28,58)');
    settextintern('rgb(27,28,58)');
  }
  const c3 = () =>{
    setbackintern('white');
    setbackintere('white');
    setbackedu('white');
    setbackproj('white');
    settextedu('rgb(27,28,58)');
    settextintern('rgb(27,28,58)');
    settextintere('rgb(27,28,58)');
    settextproj('rgb(27,28,58)');
  }
  const c4 = () =>{
    setbackachiv('white');
    setbackintern('white');
    setbackedu('white');
    setbackproj('white');
    settextedu('rgb(27,28,58)');
    settextachiv('rgb(27,28,58)');
    settextintern('rgb(27,28,58)');
    settextproj('rgb(27,28,58)');
  }

  const changeedu = () =>{
    setbackedu('rgb(27,28,58)');
    settextedu('white');
    c0();
    setclassdetail('Education');
  }
  const changeintern = () =>{
    setbackintern('rgb(27,28,58)');
    settextintern('white');
    c1();
    setclassdetail('Internship');
  }
  const changeproj = () =>{
    setbackproj('rgb(27,28,58)');
    settextproj('white');
    c2();
    setclassdetail('Projects');
  }
  const changeachiv = () =>{
    setbackachiv('rgb(27,28,58)');
    settextachiv('white');
    c3();
    setclassdetail('Achivement');
  }
  const changeintere = () =>{
    setbackintere('rgb(27,28,58)');
    settextintere('white');
    c4();
    setclassdetail('Interest');
  }

  return (
    <div className='Aboutme-container'>
      <div className='Profile'>
        <div className='p1'>
          <h1>Profile</h1>
          <div className='LinkedIn' >
            <h4>LinkedIn <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/> <a href='https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/'>aastha-chaudhary</a> </h4>
          </div>
          <div className='Github'>
            <h4>Github <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png"/> <a href='https://github.com/Aastha-1008'>https://github.com/Aastha-1008</a></h4>
          </div>
          <div className='leetcode'>
            <h4><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"/>    <a href='https://leetcode.com/AasthaChaudhary/'>LeetCode </a></h4>
          </div>
          <div className='codingninjas'>
            <h4><img src="https://img.icons8.com/color/48/000000/ninja-head.png"/>    <a href='https://www.codingninjas.com/codestudio/profile/4af5c365-f12e-4bdc-b5a1-8853d92b3880'>Coding Ninjas </a> </h4>
          </div>
          <div className='GeeksforGeeks'>
            <h4><img src="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"/>    <a href='https://auth.geeksforgeeks.org/user/aasthachaudhary237/practice'>GeeksforGeeks </a></h4>
          </div>
          <div className='hackerrank'>
            <h4><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png"/>    <a href='https://www.hackerrank.com/Aastha_chaudhary?hr_r=1'>HackerRank </a></h4>  
          </div>
          <div className='codechef'>
            <h4><img src="https://img.icons8.com/ios/50/000000/codechef.png"/>    <a href='https://www.codechef.com/users/aastha9634'>CodeChef</a></h4>
          </div>
          <div className='codeforces'>
            <h4><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo.png"/>     <a href='https://codeforces.com/profile/chaudhary_Aastha'>CodeForces</a></h4>
          </div>
        </div>
        <div className='p2'>
          <img src = {img} alt='person'/>
        </div>
      </div>

      <div className='Aboutme-heading'>
        <h1>Resume</h1>
        <p>My Formal Bio Details</p>
      </div>
      <div className='Aboutme-detail'>
       <div className='Education-border'>
         <li><i className="fa-solid fa-book-open"></i></li>
         <li><i className="fa-solid fa-clipboard"></i></li>
         <li><i className="fa-solid fa-chart-simple"></i></li>
         <li><i className="fa-solid fa-arrow-trend-up"></i></li>
         <li><i className="fa-solid fa-bookmark"></i></li>
       </div>
       <div className='Education-heading'>
          <li><button onClick={changeedu} style={{backgroundColor:backedu,color:textedu}}>Education</button></li>
          <li><button onClick={changeintern} style={{backgroundColor:backintern,color:textintern}}>Internship</button></li>
          <li><button onClick={changeproj} style={{backgroundColor:backproj,color:textproj}}>Projects</button></li>
          <li><button onClick={changeachiv} style={{backgroundColor:backachiv,color:textachiv}}>Achivements</button></li>
          <li><button onClick={changeintere} style={{backgroundColor:backintere,color:textintere}}>Courses</button></li>
        </div>
        <div className='Education-line'>
        </div>
        <div className='Education-information'>
          <Detail/>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <div className='langskills'>
          <div className='Proglan'>
            <h6><img src="https://img.icons8.com/external-outline-lafs/64/000000/external-ic_code_window-menu-outline-lafs-2.png"/>   Programming Language</h6>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </div>
          <div className='webd'>
            <h6><img src="https://img.icons8.com/glyph-neue/64/000000/computer.png"/>  Web Development</h6>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>BootStrap</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
          </div>
          <div className='database'>
            <h6><img src="https://img.icons8.com/ios-filled/64/000000/database.png"/>    DataBase</h6>
            <li>SQL</li>
          </div>
          <div className='tools'>
            <h6><img src="https://img.icons8.com/ios-glyphs/64/000000/maintenance.png"/>    Tools</h6>
             <li>VS Code</li>
             <li>MS Word</li>
             <li>MS Excel</li>
             <li>MS Powerpoint</li>
             <li>Git</li>
          </div>
        </div>

      </div>
    </div>
    
  )
}
