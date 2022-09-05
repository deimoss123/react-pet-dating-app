import styles from "./LinkTree.module.css";
import Image from "next/image";

const LinkTree: React.FC = () => {
  return (
    <section className={styles["linkTreeWrapper"]}>
      <div>
        <ul>
          <h3>LEGAL</h3>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Cookie Policy</li>
          <li>Intellectual Property</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3>CAREERS</h3>
          <li>Careers Portal</li>
          <li>Tech Blog</li>
        </ul>
      </div>
      <div>
        <ul className={styles["socials"]}>
          <h3>SOCIALS</h3>
          <li>
            <Image width="30px" height="30px" src="/icons/instagram.png" />
          </li>
          <li>
            <Image width="35px" height="35px" src="/icons/tik-tok.png" />
          </li>
          <li>
            <Image width="35px" height="35px" src="/icons/youtube.png" />
          </li>
          <li>
            <Image width="30px" height="30px" src="/icons/twitter.png" />
          </li>
          <li>
            <Image width="30px" height="30px" src="/icons/facebook.png" />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href=""></a>FAQ
          </li>
          <li>
            <a href=""></a>Destinations
          </li>
          <li>
            <a href=""></a>Press room
          </li>
          <li>
            <a href=""></a>Contact
          </li>
          <li>
            <a href=""></a>Promo
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LinkTree;
