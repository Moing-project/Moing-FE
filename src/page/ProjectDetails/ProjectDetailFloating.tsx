import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../../components/Buttons';
import { ProjectDetailDevider } from '../../styledComponents/ProjectDetail';

export default function ProjectDetailFloating() {
  return (
    <div className="card">
      <div className="card-container">
        <h1 className="card-title">리더정보</h1>
        <div className="kk">
          <img
            src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
            className="card-mg-top"
            alt="..."
          />
          <div className="one-container">
            <p className="card-text">정원나라우주</p>
            <Link to="/login">
              <PrimaryBtn
                $shape="solid"
                $status="active"
                $width="xshort"
                $height="xlow"
              >
                문의하기
              </PrimaryBtn>
            </Link>
          </div>
        </div>
        <ProjectDetailDevider />
        <h5 className="t-card-title">참여중인 멤버 6명</h5>
        <div className="container">
          <div className="row">
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              />
            </div>
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              />
            </div>
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              ></img>
            </div>
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              ></img>
            </div>
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="col-2.4">
              <img
                src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                alt="..."
                className="two-card-mg-top"
              />
            </div>
          </div>
        </div>
        <div className="btn">
          <Link to="/login">
            <PrimaryBtn
              $shape="filled"
              $status="active"
              $width="medium"
              $height="medium"
            >
              프로젝트 참여하기
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
