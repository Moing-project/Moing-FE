import ProjectsBannerCard from "./ProjectsBannerCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsBanner({ data }: any) {
  if (!data) {
    return null;
  }

  const bannerCards = [
    {
      id: 0,
      type: "스터디",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "플라스크"],
      state: "모집 시 마감",
    },
    {
      id: 1,
      type: "스터디",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "플라스크"],
      state: "모집 시 마감",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {data.map((card: any) => (
        <ProjectsBannerCard key={card.id} card={card} />
      ))}
    </Slider>
  );
}
