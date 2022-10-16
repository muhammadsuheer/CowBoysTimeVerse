import React, { useState } from "react";
import styles from "./allDone.module.css";
const AllDone = ({ score, handleHighScore, handleState, handleReset }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.allDone}>
            All Done!
          </h1>
          <p className={styles.para1}>
            Your Final Score is: {score}
          </p>
          <p className={styles.para2}>
            <span>Enter Your </span><span className={styles.span1}>Name</span>:
            <input
              className={styles.btn1}
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
              id="submit"
            />
            {name ? (
            <button
            className={styles.btn2}
            onClick={() => {
                handleHighScore({name:name ,score:score});
                handleState("highscore");
                handleReset();
              }}
            >
              Submit
            </button>
            ) : (
              <button
              className={styles.btn3}
              type="submit" id="submit"
              onClick={(e) => {
              }}
            >
              Submit
            </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllDone;