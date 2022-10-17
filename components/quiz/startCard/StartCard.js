import styles from "./startCard.module.css";
import Image from "next/image";
const StartCard = ({handleState, handleTimerStart}) => {
  return (
    <div className={styles.container}>
            <div  className={styles.image}>
      <Image  src={"/static/cowboy.gif"}
        width={500}
        height={600}
      />
      </div>
      <div className={styles.wrapper}>
  
        <h3 className={styles.heading}>
        <span className={styles.firstLetter}> Let&apos;s See </span> How Much You Know About <span className={styles.firstLetter}>COWBOYS</span> ?
        </h3>
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