import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = ({ setCurrentPage }) => {
  const features = [
    {
      title: "소개",
      description: "저에 대해서 궁금하신가요!?",
      page: "about",
    },
    {
      title: "프로젝트",
      description: "직접 개발한 프로젝트들!",
      page: "projects",
    },
    {
      title: "연락처",
      description: "제게 연락하는 방법!",
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
