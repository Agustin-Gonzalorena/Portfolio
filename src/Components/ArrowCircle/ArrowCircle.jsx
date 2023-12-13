import styles from "./ArrowCircle.module.css";

const ArrowCircle = ({ secondary }) => {
  return (
    <div
      className={
        secondary
          ? `${styles.circle} ${styles.circleSecondary}`
          : `${styles.circle}`
      }
    >
      <div className={styles.arrow}></div>
    </div>
  );
};

export default ArrowCircle;
