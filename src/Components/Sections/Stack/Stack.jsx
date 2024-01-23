import React from "react";
import styles from "./Stack.module.css";
import ArrowCircle from "../../ArrowCircle/ArrowCircle";
import { myStack } from "../../../utils/myStack";
const Stack = () => {
  return (
    <section className={styles.stack}>
      <div className={styles.contain}>
        <section className={styles.boxTitle}>
          <h2>STACK</h2>
          <div className={styles.lineC}></div>
          <p>
            My skill set spans both frontend and backend development. These
            tools allow me to create complete and efficient solutions to deliver
            exceptional user experiences.
          </p>
        </section>
        <section className={styles.boxInfo}>
          <div className={styles.box}>
            <div className={styles.decorP}></div>

            {myStack.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Stack;
