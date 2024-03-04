import React from "react";
import styles from "./Stack.module.css";
import { myStack } from "../../../utils/myStack";
const Stack = () => {
  return (
    <section className={styles.stack}>
      <div className={styles.contain}>
        <section className={styles.boxTitle}>
          <h2>STACK</h2>
        </section>
        <section className={styles.boxInfo}>
          <div className={styles.box}>
            {myStack.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    title={item.name}
                    style={item.id == 3 ? { filter: "invert()" } : null}
                  />
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
