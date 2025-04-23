import React from "react";
import ProjectCard from "../components/ProjectCard";
import calculator from "../assets/calculator.png";
import Dtc from "../assets/Dtc.png"
import Dadam from "../assets/Dadam.png"


/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "계산기 프로젝트!",
      description: "React를 사용하여 만든 계산기입니다!",
      image: calculator,
    },
    {
      title: "다문화를 담다: 다담",
      description: "다문화 가정에게 문화체험을 추천해주는 서비스입니다!",
      image: Dadam
    },
    {
      title: "사용자 맞춤형 챗봇 플랫폼 (My GPTs)",
      description: "챗봇을 통해 사용자 맞춤형으로 여행 기록을 짜주는 서비스입니다!",
      image: Dtc,
      link: "https://www.youtube.com/watch?v=dBJPevtGO-k"
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
