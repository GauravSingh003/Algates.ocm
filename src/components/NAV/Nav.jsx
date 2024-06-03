import React, { useState } from 'react'
import {HashLink as Link } from "react-router-hash-link";
import '../../css/nav.css';
import algates from '../../../public/algates.webp'
import { FaHome } from "react-icons/fa";
import { MdEventRepeat } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdOutlineMenuOpen } from "react-icons/md";
import { SiKnowledgebase } from "react-icons/si";



const Nav = () => {
  const[show,setShow] = useState(false)

  return (
    <nav className="p-5 text-orange-500 bg-white flex justify-evenly items-center"
    id="nav">

        <header className='w-32'>
            <img src={algates} alt=""/>
        </header>


        <ul className={show? "nav-link-mobile nav-li"  : "nav-link-mobile"}    >

            <Link className='gap-2 flex items-center' to="#home" smooth><FaHome/> Home </Link>
            <Link className='gap-2 flex items-center' to="#products" smooth><MdProductionQuantityLimits/> products </Link>
            <Link className='gap-2 flex items-center' to="#middle1" smooth> <MdEventRepeat/> Events</Link>
            <Link className='gap-2 flex items-center' to="#about" smooth><SiKnowledgebase/> About Us </Link>
            <Link className='gap-2 flex items-center' to="#faq" smooth><RiContactsBook2Line/> contact us </Link>
        </ul>

        <menu id='menu' onClick={() => setShow(!show)}>
        <MdOutlineMenuOpen className='w-20 h-12' />
        </menu>
        <button className='bg-orange-500 text-white rounded-lg px-1 py-3 font-semibold text-sm'>OPEN A DEMAT ACCOUNT</button>
    </nav>
  )
}

export default Nav