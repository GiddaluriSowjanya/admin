import React from 'react';
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill
} from 'react-icons/bs';
import { RiSidebarFoldFill } from "react-icons/ri";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <RiSidebarFoldFill className='icon' /> MNNLR
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Dashboard Overview
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill className='icon' /> User Management
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon' /> Content Management
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsPeopleFill className='icon' /> Settings
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsListCheck className='icon' /> Analytics and Reporting
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsMenuButtonWideFill className='icon' /> Help/Support
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
