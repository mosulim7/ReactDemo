import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function SidebarComponents() {
  return (
    <div className="nav__List">
      {SidebarData.map((item, index) => {
        return(
          <Link key={index} to={item.path} className={item.cName}>
            {item.icon}
            <span className="nav__name">{item.title}</span>  
          </Link>
        )  
      })}          
    </div>
  )
}

export default SidebarComponents;
