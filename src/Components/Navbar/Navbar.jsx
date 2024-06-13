import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState(true);


  const toggleMenu = ()=>{
    menu ? setMenu(false) : setMenu(true);
  }



  return (
    <nav className='navbar flex lg:gap-5 md:gap-4 sm:gap-2 justify-between mt-6 mx-10'>
        <div className="logo">
           <Link to={'/'}> <h2 className='text-3xl font-[600]'>Dhanush.</h2></Link>
        </div>
       <div className={menu ? "nav-detail mx-6" : "nav-right lg:flex md:flex lg:justify-evenly md:justify-evenly sm:justify-between shadow-lg"}>
        <ul className='mt-2 uppercase'>
              <a href="#home"><li className='active'>Home</li> </a>
               <a href="#about"> <li>About</li> </a>
               <a href="#project"> <li>Projects</li> </a>
               <a href="#skills"> <li>Skills</li> </a>
               <a href="#contact"> <li>contact</li> </a>
            </ul>
            <div className='flex flex-nowrap  '>
                <a href="#contact"><button className='btn min-w-fit lg:px-4 lg:py-2 mx-10  text-sm rounded-[50px]'>Hit me!</button></a>
            </div>
       </div>
       <div onClick={toggleMenu}  className="menu-icon" >
          <i  className={menu ? "bx bx-menu text-4xl ":"bx bx-x text-4xl"}></i> 
       </div>
    </nav>
  )
}

export default Navbar