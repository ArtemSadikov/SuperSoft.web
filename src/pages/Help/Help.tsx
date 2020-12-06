import React, {useCallback} from 'react';
import avatar from '../../assets/images/logo192.png'
import {PageContainer} from '../../components';

export const Help = () => {
  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  return (
    <PageContainer title="Help"
                   onAddIconPress={handleOnAddProjectPress} userImage={avatar}>
      <div>
        123123
      </div>
    </PageContainer>
  );
};
