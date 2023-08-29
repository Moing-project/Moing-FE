import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../components/Buttons";
import { ProjectDetailDevider } from "../../styledComponents/ProjectDetail";

export default function ProjectDetailFloating({ members, allowType }: any) {
  const isNotActive = allowType === "NOT_ALLOW" || allowType === "SECRET";
  console.log(isNotActive);

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
            <PrimaryBtn
              $shape="solid"
              $status="active"
              $width="xshort"
              $height="xlow"
            >
              문의하기
            </PrimaryBtn>
          </div>
        </div>
        <ProjectDetailDevider />
        <h5 className="t-card-title">참여중인 멤버 {members.length}명</h5>
        <div className="container">
          <div className="row">
            {members.map((member: any, index: any) => (
              <div className="col-24" key={index}>
                <img
                  src={member.profileImage}
                  alt="..."
                  className="two-card-mg-top"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="btn">
          <PrimaryBtn
            $shape="filled"
            $status={isNotActive ? "notActive" : "active"}
            $width="medium"
            $height="medium"
          >
            프로젝트 참여하기
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
