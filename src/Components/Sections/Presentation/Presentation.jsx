import styles from "./Presentation.module.css";
import ArrowCircle from "../../ArrowCircle/ArrowCircle";

const Presentation = () => {
  return (
    <section className={styles.contain}>
      <section className={styles.nameContain}>
        <div className={styles.boxName}>
          <h1>AGUSTIN</h1>
          <h1>GONZALORENA</h1>
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
