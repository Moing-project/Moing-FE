import { ProjectBannerSection } from "../../styledComponents/Projects";
import { PrimaryBtn } from "../../components/Buttons";
import { WorkAllowEnum, WorkStackEnum } from "../../types/WorkEnums";
import { useNavigate } from "react-router-dom";

export default function ProjectsBannerCard({ card }: any) {
  const { id, name, stacks, allowType, imageSrc } = card;

  const navigate = useNavigate();

  const handleBannerClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <ProjectBannerSection onClick={handleBannerClick}>
      <figure>
        <img src={imageSrc} alt="" />
      </figure>
      <figcaption>
        <h1>{name}</h1>
        <ul>
          {stacks.map((stack: any, index: any) => (
            <PrimaryBtn
              $shape="solid"
              $status="active"
              $width="xshort"
              $height="xlow"
              key={index}
            >
              {WorkStackEnum[stack as keyof typeof WorkStackEnum]}
            </PrimaryBtn>
          ))}
        </ul>
      </figcaption>
      <p>{WorkAllowEnum[allowType as keyof typeof WorkAllowEnum]}</p>
    </ProjectBannerSection>
  );
}
