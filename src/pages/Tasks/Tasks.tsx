import React, {useCallback} from 'react';
import {PageContainer} from '../../components';
import avatar from '../../assets/images/logo192.png'

export const Tasks = () => {
  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  return (
    <PageContainer title="Tasks"
                   onAddIconPress={handleOnAddProjectPress} userImage={avatar}>
      <div>
        123123
      </div>
    </PageContainer>
  );
};
