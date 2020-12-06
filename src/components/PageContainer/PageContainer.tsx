import React, {ReactNode, useCallback} from 'react';
import {PageHeader} from '..';
import './PageContianer.css';

interface Props {
  title: string,
  children: ReactNode,
  onAddIconPress?: () => void,
  userImage: string
}

export const PageContainer = (props: Props) => {
  const {title, children, onAddIconPress, userImage} = props;

  const handleOnAddProjectPress = useCallback(() => {
    if (onAddIconPress) {
      onAddIconPress();
    }
  }, [onAddIconPress]);

  return (
    <div className="container">
      <PageHeader
        title={title}
        onAddButtonPress={handleOnAddProjectPress}
        userImage={userImage}
        userName="Admin"
      />
      <div className="container-wrapper">
        {children}
      </div>
    </div>
  );
};
