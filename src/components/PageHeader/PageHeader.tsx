import React from 'react';
import './PageHeader.css';
import {AiOutlinePlusCircle, BiSearch} from 'react-icons/all';

interface Props {
  title: string,
  onAddButtonPress?: () => void;
  userImage: string;
  userName: string;
}

export const PageHeader = (props: Props) => {
  const {title, onAddButtonPress, userImage, userName} = props;
  return (
    <div className="header-container">
      <div className="page-title-container">
        <h1 className="header-title-text">{title}</h1>
        <button className="add-button">
          <AiOutlinePlusCircle onClick={onAddButtonPress}
                               className="add-icon"/>
        </button>
      </div>
      <div className="header-wrapper">
        <form id="search"
              className="input-container">
          <BiSearch className="search-icon"/>
          <input placeholder="Search"
                 className="input"/>
        </form>
        <div className="header-user-data-container">
          <div className="header-avatar-container">
            <img
              src={userImage}
              alt="avatar"
              className="header-avatar"
            />
          </div>
          <h4>{userName}</h4>
        </div>
      </div>
    </div>
  );
};
