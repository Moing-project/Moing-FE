import { ProjectBannerSection } from "../../styledComponents/Projects";
import { PrimaryBtn } from "../../components/Buttons";
import { WorkAllowEnum, WorkStackEnum } from "../../types/WorkEnums";

export default function ProjectsBannerCard({ card }: any) {
  const { name, stacks, allowType, imageSrc } = card;

  return (
    <ProjectBannerSection>
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
