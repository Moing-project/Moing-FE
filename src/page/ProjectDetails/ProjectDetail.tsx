import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetailFloating.css';
import * as S from '../../styledComponents/ProjectDetail';
import ProjectDetailFloating from './ProjectDetailFloating';
import { ProjectDetailDevider } from '../../styledComponents/ProjectDetail';
import { PrimaryBtn } from '../../components/Buttons';

export default function ProjectDetail() {
  const stacks = [
    { value: 'REACT', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Vue', label: 'Vue' },
    { value: 'Nextjs', label: 'Nextjs' },
    { value: 'Nodejs', label: 'Nodejs' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Nestjs', label: 'Nestjs' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Flutter', label: 'Flutter' },
    { value: 'Figma', label: 'Figma' },
  ];

  return (
    <S.ProjectDetailLayout>
      <div>
        <S.ProjectDetailMain>
          <S.Layout>
            <figure>
              <img
                src="blob:https://www.figma.com/0c0d0532-3e3d-4165-97ed-75f46a2392fd"
                className="card-mg-top"
                alt="..."
              />
            </figure>
            <div>
              <h1>[게임] 지상 최고 야무지고 즐거운 음악게임 '비트잼'</h1>
              <Link to="">링크복사</Link>
              {/* Link -> a 태그 */}
            </div>
          </S.Layout>
          <ProjectDetailDevider />
          <S.Box1>
            <h2>프로젝트 정보</h2>
            <p>모집인원 | 10명 모집</p>
            <p>멤버 참여 방식 |누구나 참여</p>
            <p>모집 마감 기간 | 모집까지 D-12</p>
          </S.Box1>
          <S.Box2>
            <h2>사용 기술 스택</h2>

            {/* <Link to="/login"> */}

            <div>
              {stacks.map((stack) => (
                <PrimaryBtn
                  $shape="solid"
                  $status="active"
                  $width="xshort"
                  $height="xlow"
                >
                  {stack.value}
                </PrimaryBtn>
              ))}
            </div>

            {/* </Link> */}
          </S.Box2>
          <ProjectDetailDevider />
          <S.Box3>
            <h2>프로젝트 소개</h2>
            <figure>
              <img
                src="blob:https://www.figma.com/0c0d0532-3e3d-4165-97ed-75f46a2392fd"
                className="card-mg-top"
                alt="..."
              />
            </figure>
            <h3>비트잼 - 음악으로 펼쳐지는 모험과 리듬의 세계 </h3>
            <p>
              비트잼은 음악과 게임이 만나 환상적인 모험을 선사하는 혁신적인
              음악게임 프로젝트입니다. 플레이어들은 즐거운 음악을 배경으로
              다양한 퍼즐과 도전을 경험하며, 독특한 시각적 효과와 몰입감 있는
              게임플레이로 새로운 세계를 탐험할 수 있습니다.
            </p>
            <p>더 자세한 게임 사항 알고싶다면 링크 접속해서 보시면 됩니다.</p>
            <p>백엔드 아키텍처는 다음과 같습니다.</p>
            <p>
              1. 서버 인프라 구성: 클라우드 기반의 서버 인프라를 구성하여
              안정적인 서비스 제공을 위한 환경을 마련합니다. Amazon Web
              Services(AWS) 또는 Microsoft Azure와 같은 클라우드 플랫폼을
              활용하여 서버 배포 및 관리를 수행합니다.
            </p>
            <p>
              2. 데이터베이스 설계: 게임 내 플레이어, 음악 트랙, 게임 진행 상태
              등의 데이터를 관리하기 위한 데이터베이스를 설계합니다. NoSQL
              데이터베이스 (예: MongoDB)를 활용하여 유연한 데이터 구조를
              구현하고, 데이터의 일관성과 성능을 보장합니다.
            </p>
            <p>
              3. 사용자 관리 및 인증: 사용자 등록, 로그인, 인증, 비밀번호 관리
              등을 처리하는 모듈을 구현합니다. OAuth 또는 JWT(JSON Web Token)을
              활용하여 안전한 사용자 인증 및 권한 관리를 구현합니다.{' '}
            </p>
            <p>
              4.게임 진행 관리: 플레이어들의 게임 진행 상태를 추적하고 관리하는
              기능을 구현합니다. 레벨 클리어 여부, 점수, 업적 등의 정보를
              저장하고 관리하여 게임 경험을 제공합니다. 실시간 기능 및 다중
              플레이: 게임 내 실시간 리더보드, 다중 플레이 기능을 위한 웹 소켓
              통신을 구현합니다. 플레이어들 간의 경쟁과 협력 요소를 도입하여
              게임의 재미와 사회적 상호작용을 증진시킵니다.
            </p>
            <p>
              5.외부 서비스 연동: 음악 스트리밍 서비스 (예: Spotify)와의 연동을
              통해 풍부한 음악 컨텐츠를 게임에 제공합니다. 또한, 사용자의 소셜
              미디어 계정과의 연동을 통해 친구들과의 공유 기능을 구현합니다.
              백업 및 복구: 정기적인 데이터 백업 및 시스템 복구 메커니즘을
              구현하여 데이터 손실을 최소화하고 서비스의 안정성을 유지합니다.
              보안 강화: 데이터 보안을 위해 암호화, 웹 방화벽, 취약점 검사 등
              다양한 보안 대책을 도입하여 사용자 정보와 시스템의 안전을
              보장합니다.
            </p>
          </S.Box3>
        </S.ProjectDetailMain>
        <div>
          <ProjectDetailFloating />
        </div>
      </div>
    </S.ProjectDetailLayout>
  );
}
