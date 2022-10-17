import styles from "./startCard.module.css";
import Image from "next/image";
const StartCard = ({handleState, handleTimerStart}) => {
  return (
    <div className={styles.container}>
    
      <div className={styles.wrapper}>
      <Image src={"/static/cowboy.gif"}
        width={400}
        height={500}
      />
        <h1 className={styles.heading}>
           Let&apos;s see <span className={styles.firstLetter}>How Much</span> You Know About <span className={styles.firstLetter}>COWBOYS</span> ?
        </h1>
        <p className={styles.subTitle}>
          Try to answer the following CowBoy-related questions within time limit.
        </p>
        <p className={styles.subTitle}>
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds!
        </p>
        <button className={styles.btnWithIcon} onClick={() => {handleState("quiz"); handleTimerStart();}}>
        Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartCard;