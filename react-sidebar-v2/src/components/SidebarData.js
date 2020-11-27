import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as ImIcons from 'react-icons/im'



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome className="nav__icon"/>,
    cName: 'nav__link',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <ImIcons.ImCopy className="nav__icon"/>,
    cName: 'nav__link',
  },
  {
    title: 'BI',
    path: '/bi',
    icon: <FiIcons.FiLayout className="nav__icon"/>,
    cName: 'nav__link',
  },
  {
    title: 'WebApp',
    path: '/webapps',
    icon: <FiIcons.FiSliders className="nav__icon"/>,
    cName: 'nav__link',
  },
  {
    title: 'CSR',
    path: '/csr',
    icon: <FiIcons.FiSliders className="nav__icon"/>,
    cName: 'nav__link',
  },
]