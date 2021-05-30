import React from 'react';
import styled from '@emotion/styled';

const DivStyle = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <DivStyle>
      <div className=''>Daily Diary</div>
      <div className=''>설정</div>
    </DivStyle>
  );
};

export default Header;
