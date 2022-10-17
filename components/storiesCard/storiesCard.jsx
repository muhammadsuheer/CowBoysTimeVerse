import styles from "./storiesCard.module.css";
import Link from "next/link"
import Image from 'next/image'

const StoriesCard = () => {
 
  return (
    <div>

<div className={styles.left}>
          <div className={styles.nseriesWrapper}>
          <p className={styles.series}>THE Untold</p>
          <p className={styles.firstLetter}>Stories</p>
          <p className={styles.series}>of</p>
            <p className={styles.firstLetter}>COWBOYS</p>
          </div>      
      </div>
      <ul className="cards">
  <li>
  <Link passHref href="https://www.cowboyshowcase.com/stories.html">
    <a  target="_blank"  className="card">
    <Image layout='fill' src="/static/story1.jpg" className="card__image" alt="horse-story" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">
Tom Sheehan - Cowboy Stories</h3>            
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>     
    </Link>
 
  </li>
  <li>
  <Link passHref  href="https://www.cowboyshowcase.com/stories.html">
    <a target="_blank"  className="card">
    <Image passHref layout='fill' src="/static/story2.jpg" className="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Last DK Cowboy Stories</h3>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
    </Link>

  </li>
  <li>
  <Link passHref href="https://www.cowboyshowcase.com/stories.html">
    <a target="_blank" className="card">
      <Image layout='fill' src="/static/story3.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Bill Mooney&rsquo;s Stories</h3>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
    </Link>

  </li>
  <li>
    <Link passHref href="https://www.cowboyshowcase.com/stories.html">
    <a target="_blank"  className="card">
      
    <Image layout='fill' src="/static/story4.jpeg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Wild Horse Casey by George Parman</h3>
          </div>          
        </div>
         
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
    </Link>

  </li>    
</ul>
    </div>
  );
};

export default StoriesCard;
