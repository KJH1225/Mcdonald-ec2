import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

export function Success() {

  return (
    <div style={{
      marginTop: '5vw',
      backgroundSize: 'contain',
      height: '40vw',
      maxWidth: '80vw',
      margin: '0 auto',
      padding: '20px',
      border: '2px solid #fff',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center', color: '#000' }}>
        <FaCheck style={{
          fontSize: '40px',
          color: 'rgb(53, 206, 141)',
          marginBottom: '30px'
        }} />
        <h1 style={headerStyle}>결제 성공!</h1>
        <p style={paragraphStyle}>결제가 성공적으로 처리되었습니다.</p>
        <NavLink
          to='/'
          style={navLinkStyle}
        >
          메인으로 돌아가기
        </NavLink>
      </div>
    </div>
  );
}

const headerStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  marginBottom: '1em',
};

const paragraphStyle = {
  fontSize: '1.2em',
  marginBottom: '2em',
};

const navLinkStyle = () => ({
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 20px',
  fontSize: '1em',
  color: 'black',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  backgroundColor: '#FFD700',
  transition: 'background-color 0.3s ease',
});

export default Success;