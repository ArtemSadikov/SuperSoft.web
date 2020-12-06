import projectsIcon from "./projectsIcon.svg"
import {AiOutlineQuestionCircle, MdInbox} from 'react-icons/all';
import {BsListTask} from 'react-icons/bs';
import React from 'react';
interface SidebarDataInterface {
  title: string,
  path: string,
  icon: any,
  cName: string,
}

export const SideBarData: SidebarDataInterface[] = [
  {
    title: 'Projects',
    path: '/',
    icon: <img src={projectsIcon}  alt={"proj"}/>,
    cName: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <BsListTask />,
    cName: 'nav-text',
  },
  {
    title: 'Inbox',
    path: '/inbox',
    icon: <MdInbox />,
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <AiOutlineQuestionCircle />,
    cName: 'nav-text'
  },
]
