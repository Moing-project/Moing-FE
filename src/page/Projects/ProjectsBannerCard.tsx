import React from "react";

type ProjectsBannerCardProps = {
  card: {
    id: number;
    type: string;
    name: string;
    stacks: string[];
    state: string;
  };
};

const ProjectsBannerCard: React.FC<ProjectsBannerCardProps> = ({ card }) => {
  const { type, name, stacks, state } = card;

  return (
    <article className="project-banner-card">
      <h3>{type}</h3>
      <h2>{name}</h2>
      <ul>
        {stacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
      <p>{state}</p>
    </article>
  );
};

export default ProjectsBannerCard;
