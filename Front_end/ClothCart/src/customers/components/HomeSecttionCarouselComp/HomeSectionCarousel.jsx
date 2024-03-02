import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };
  const items = [1, 2, 3, 4, 5, 6].map((item) => (
    <HomeSectionCard key={item} />
  ));
  return (
    <div className='relative px-4 lg:px-8'>
    <div className='relative p-5'>
    <AliceCarousel
    items={items}
    disableButtonsControls
    infinite
    responsive={responsive}
  />
  </div>
  </div>
  );
};

export default HomeSectionCarousel;
