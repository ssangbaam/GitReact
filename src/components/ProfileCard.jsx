import React from "react";
import profileImage from "../assets/good.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="프로필" />
      <div className="profile-info">
        <h3>박상범</h3>
        <p>안녕하세요! 저는 React를 좋아하는 개발자입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 