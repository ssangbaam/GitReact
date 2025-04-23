import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = ({ setCurrentPage }) => {
  const features = [
    {
      title: "소개",
      description: "제 소개입니다.",
      page: "about",
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
      page: "projects",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
      page: "contact",
    },
    {
      title: "여러분이 원하는",
      description: "항목을 새로 만들어 보세요.",
      page: null, // 기능 없음
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            onClick={() => {
              if (feature.page) {
                setCurrentPage(feature.page);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
