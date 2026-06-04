import React from 'react';
import MyProfile from './MyProfile';

function Footer() {
  const profile = {
    id: "123456",
    name: "TheLong",
    email: "longdz010116@gmail.com",
    githubLink: "https://github.com/traltb-byte/FER202_TraLTB_SU26",
    avatarSrc: "/images/avatar1.webp"
  };

  return (
    <footer
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        marginTop: '40px', /* Tạo khoảng cách với danh sách pizza phía trên */
        backgroundColor: '#f8f9fa' /* Thêm màu nền nhẹ nếu thích */
      }}
    >
      <MyProfile profile={profile} />
    </footer>
  );
}

export default Footer;