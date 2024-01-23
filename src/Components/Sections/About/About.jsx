import ArrowCircle from "../../ArrowCircle/ArrowCircle";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.contain}>
        <section className={styles.title}>
          <div className={styles.boxTitle}>
            <h2>About me</h2>
          </div>
          <div className={styles.boxSocial}>
            <a
              href="https://www.linkedin.com/in/agustin-gonzalorena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iIn}></div>
            </a>
            <a
              href="https://github.com/Agustin-Gonzalorena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iGh}></div>
            </a>
            <a
              href="https://drive.google.com/file/d/1dygBT-IzAobX8KWKQOYPrW_5O5P9Atgq/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iCv}></div>
            </a>
          </div>
        </section>
        <section className={styles.info}>
          <div className={styles.boxImg}>
            <div className={styles.boxArrow}>
              <ArrowCircle />
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.boxText}>
            <div className={styles.shadow}></div>
            <div className={styles.shadow2}></div>

            <div className={styles.containText}>
              <p>
                I am a passionate web developer with experience in both
                front-end and back-end development. Currently, my primary focus
                is on <strong>front-end</strong> development using{" "}
                <strong>React Js</strong>. My constant desire for learning
                drives me to explore and master new tools and technologies
                continuously, enabling me to stay updated on the latest trends
                and provide innovative solutions in my projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
