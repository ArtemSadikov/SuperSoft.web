import React, {useCallback} from 'react';
import {PageContainer} from '../../components';
import avatar from '../../assets/images/logo192.png'

export const Inbox = () => {
  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  return (
    <PageContainer title="Inbox"
                   onAddIconPress={handleOnAddProjectPress} userImage={avatar}>
      <div>
        123123
      </div>
    </PageContainer>
  );
};
