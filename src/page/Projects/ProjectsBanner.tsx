import ProjectsBannerCard from "./ProjectsBannerCard";

export default function ProjectsBanner() {
  const bannerCards = [
    {
      id: 0,
      type: "스터디",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "플라스크"],
      state: "모집 시 마감",
    },
  ];

  return (
    <section>
      {bannerCards.map((card) => (
        <ProjectsBannerCard key={card.id} card={card} />
      ))}
    </section>
  );
}
