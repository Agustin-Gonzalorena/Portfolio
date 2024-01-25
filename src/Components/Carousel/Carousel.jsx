import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { myProjects } from "../../utils/myProjects";

export default function Carousel() {
  const [countView, setCountView] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCountView(1);
    } else {
      setCountView(3);
    }
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={countView}
        spaceBetween={50}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {myProjects.map((project) => (
          <SwiperSlide className={styles.card} key={project.id}>
            <h3>{project.title}</h3>
            <div className={styles.boxImg}>
              <img src={project.img} alt="" />
            </div>
            <p>{project.description}</p>
            <div className={styles.boxBtn}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrDeploy />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
