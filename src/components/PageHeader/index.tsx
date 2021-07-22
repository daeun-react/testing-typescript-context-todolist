import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const PageHeader = () => {
  const { pathname } = useLocation();
  let title = '에러';

  if (pathname === '/') {
    title = '할 일 목록';
  } else if (pathname === '/add') {
    title = '할 일 추가';
  } else if (pathname.startsWith('/detail')) {
    title = '할 일 상세';
  }

  return (
    <Container>
      <Title>{title}</Title>
      {pathname !== '/' && <GoBack to="/">돌아가기</GoBack>}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aacd6e;
`;

const Title = styled.div`
  padding: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
const GoBack = styled(Link)`
  padding: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  left: 20px;
  border: 1px solid #fff;
  border-radius: 8px;
`;
