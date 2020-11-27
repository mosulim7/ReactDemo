import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SidebarComponents from './SidebarComponents';

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? "sidebar expander" : "sidebar" } id="sidebar">
      <nav className="nav">
        <div>
        <div className="nav__brand">
          <FaIcons.FaBars className="nav__toggle" onClick={showSidebar}/>
          <Link to="#" className="nav__logo"> 
            SideBarTest
          </Link>
        </div>

        <SidebarComponents/>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;