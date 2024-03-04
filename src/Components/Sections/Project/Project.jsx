import React from "react";
import styles from "./Project.module.css";
import ArrowCircle from "../../ArrowCircle/ArrowCircle";
import Carousel from "../../Carousel/Carousel";

const Project = () => {
  return (
    <section className={styles.project}>
      <div className={styles.contain}>
        <section className={styles.boxTitle}>
          <h2>Projects</h2>
          <div className={styles.boxArrow}>
            <ArrowCircle />
          </div>
          <div className={styles.decor}></div>
        </section>
        <section className={styles.boxInfo}>
          <Carousel />
        </section>
        <div className={styles.boxBtnMore}>
          <a
            href="https://github.com/Agustin-Gonzalorena?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnMore}
            title="More projects"
          >
            MORE
          </a>
        </div>
      </div>
    </section>
  );
};
export default Project;
