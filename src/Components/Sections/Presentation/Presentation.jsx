import styles from "./Presentation.module.css";
import ArrowCircle from "../../ArrowCircle/ArrowCircle";

const Presentation = () => {
  return (
    <section className={styles.contain}>
      <section className={styles.nameContain}>
        <div className={styles.boxName}>
          <h1>
            <span style={{ animationDelay: "0s" }}>A</span>
            <span style={{ animationDelay: "0.08s" }}>G</span>
            <span style={{ animationDelay: "0.16s" }}>U</span>
            <span style={{ animationDelay: "0.24s" }}>S</span>
            <span style={{ animationDelay: "0.32s" }}>T</span>
            <span style={{ animationDelay: "0.40s" }}>I</span>
            <span style={{ animationDelay: "0.48s" }}>N</span>
          </h1>
          <h1>
            <span style={{ animationDelay: "0.56s" }}>G</span>
            <span style={{ animationDelay: "0.64s" }}>O</span>
            <span style={{ animationDelay: "0.72s" }}>N</span>
            <span style={{ animationDelay: "0.80s" }}>Z</span>
            <span style={{ animationDelay: "0.88s" }}>A</span>
            <span style={{ animationDelay: "0.96s" }}>L</span>
            <span style={{ animationDelay: "1.04s" }}>O</span>
            <span style={{ animationDelay: "1.08s" }}>R</span>
            <span style={{ animationDelay: "1.16s" }}>E</span>
            <span style={{ animationDelay: "1.24s" }}>N</span>
            <span style={{ animationDelay: "1.32s" }}>A</span>
          </h1>
        </div>
        <div className={styles.decor1}></div>
      </section>
      <section className={styles.infoContain}>
        <div className={styles.lineD}></div>
        <div className={styles.square}></div>
        <section className={styles.boxInfo}>
          <div className={styles.boxTitle}>
            <h2>Web</h2>
            <h2>
              Developer <span className={styles.point}>.</span>
            </h2>
          </div>
          <div className={styles.boxText}>
            <div className={styles.boxArrowCircle}>
              <ArrowCircle />
            </div>
            <p className={styles.text}>
              I am passionate about building complete and versatile products,
              developing both <strong>front-end</strong> and back-end to deliver
              robust solutions with exceptional user experiences.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Presentation;
