import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s from "./HighLights.module.css";

const HighLights = ({ userHighLights }) => {
  //CAROUSEL RESPONSIVE OPTIONS !
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div
      className={
        userHighLights.length > 5
          ? `${s.grab} ${s.highLightHead}`
          : s.highLightHead
      }
    >
      <Carousel
        draggable={userHighLights.length > 5 ? true : false}
        swipeable={true}
        centerMode={true}
        arrows={false}
        showDots={false}
        infinite={false}
        responsive={responsive}
      >
        {userHighLights.map((item, id) => {
          // eslint-disable-next-line no-lone-blocks
          return (
            <span className={s.highLIghtsStories} key={id}>
              <img className={s.highLightImg} src={item.img} alt={item.desc} />
              <p className={s.highLightDesc}> {item.desc} </p>
            </span>
          );
        })}
        <div className={s.btnItem}>
          <p className={s.addStoryBtn}>
            <span>
              <svg
                aria-label="Plus icon"
                className="_ab6-"
                color="#c7c7c7"
                fill="#c7c7c7"
                height="30"
                role="img"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
              </svg>
            </span>
          </p>
          <p className={s.newTxt}> New</p>
        </div>
      </Carousel> 
    </div>
  );
};

export default HighLights;
