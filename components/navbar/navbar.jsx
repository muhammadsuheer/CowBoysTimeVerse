import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <a>
            <div className={styles.logoWrapper}>
              <Image
                src="/static/cowboy.png"
                alt="Cowboy logo"
                width="948px"
                height="324px"
              />
            </div>
          </a>
        </Link>

        <nav className={styles.navContainer}>
          <div>
            <ul className={styles.navItems}>
              <Link href={"/"}>
                <a className={styles.navItem}>HOME</a>
              </Link>

              <Link href={"/stories"}>
                <a className={styles.navItem}>STORIES</a>
              </Link>

              <Link  href={"/quiz"}>
                <a className="btn btn-primary">BECOME A COWBOY</a>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
