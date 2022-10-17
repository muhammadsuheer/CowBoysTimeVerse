import styles from './banner.module.css';
import { useRouter } from "next/router";

const Banner = (props) => {
    const router = useRouter();

    const { title, imgUrl, subTitle } = props;
    const handleOnStarted = (e) => {
        e.preventDefault();
        router.push("/quiz");
      };
    const handleOnStories = (e) => {
        e.preventDefault();
        router.push("/stories");
      };
     


  return (

    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
          <p className={styles.series}>THE</p>
          <p className={styles.firstLetter}>UNTOLD</p>
          <p className={styles.series}>LIFE OF</p>
            <p className={styles.firstLetter}>COWBOYS</p>
          </div>
          <div className={styles.heading}> 
           <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>
</div>
         
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnStories}>
              <span className={styles.playText}>Stories</span>
            </button>
            <button className={styles.btnWithIcon} onClick={handleOnStarted}>
            <span className={styles.playText}>Wanne Be a CowBoy</span>         
            </button>
          </div>
          
        </div>
              <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`
        }}
      ></div>
    </div>
  );
};
export default Banner;
