import styles from "./startCard.module.css";

const StartCard = ({handleState, handleTimerStart}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Let&apos;s How Much you know about CowBoys
        </h1>
        <p className={styles.head2}>
          Try to answer to following CowBoy-related questions within time limit.
        </p>
        <p className={styles.head3}>
          Keep in ind that incorrect answers will penalize your score/time bey
          ten seconds!
        </p>
        <button className={styles.btn} onClick={() => {handleState("quiz"); handleTimerStart();}}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartCard;