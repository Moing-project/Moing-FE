import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import './ProjectDetail.css';
// import { projectDetails } from 'styledComponents/projectDetails.css';

const ProjectDetail: React.FC = () => {
  return (
    <div className="card">
      <h1>리더정보</h1>
      <img
        src="https://ca.slack-edge.com/T03GJEFQ63V-U0547RM4MSL-e28c4e9d10d3-512"
        className="card-mg-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">ㅎ</p>
        <a href="#" className="btn btn-primary">
          프로젝트 참여하기
        </a>
      </div>
    </div>
  );
};
export default ProjectDetail;
