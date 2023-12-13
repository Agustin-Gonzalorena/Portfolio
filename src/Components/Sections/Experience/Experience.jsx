import ArrowCircle from "../../ArrowCircle/ArrowCircle";
import styles from "./Experience.module.css";
import { Chrono } from "react-chrono";

const Experience = () => {
  const items = [
    {
      cardTitle: "Front-end Developer",
      cardSubtitle: "Freelance | November, 2023 - December, 2023",
      cardDetailedText: (
        <>
          During a two-week project, I had the opportunity to design the{" "}
          <strong>website of a hotel</strong> in Chile according to the
          requirements established by the client. I was given sole
          responsibility for front-end development using Next.js. My task was to
          create a modern and natural interface that met the hotel client's
          specifications. The main challenge was to merge functionality and
          design to offer an attractive user experience in line with customer
          expectations.
        </>
      ),
    },
  ];
  return (
    <section className={styles.experience}>
      <div className={styles.form}></div>
      <section className={styles.contain}>
        <div className={styles.boxTitle}>
          <h2>MY EXPERIENCE</h2>
          <div className={styles.lineM}></div>
          <div className={styles.boxStep}>
            <div className={styles.step}>
              <p>Step by Step</p>
            </div>
            <div className={styles.boxArrow}>
              <ArrowCircle secondary={true} />
            </div>
          </div>
        </div>
        <div className={styles.boxInfo}>
          <div className={styles.lineM2}></div>
          <div>
            <Chrono
              items={items}
              mode="VERTICAL"
              hideControls
              contentDetailsHeight={800}
              theme={{
                primary: "#7f00ff",
                secondary: "#7f00ff",
                cardBgColor: "#fff",
                cardTitleColor: "#000",
                cardSubtitleColor: "rgba(0,0,0,0.5)",
                cardForeColor: "#000",
                titleColor: "black",
                titleColorActive: "#fff",
              }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
