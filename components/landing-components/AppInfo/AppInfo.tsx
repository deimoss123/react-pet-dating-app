import styles from "./AppInfo.module.css";
import Image from "next/image";

const AppInfo: React.FC = () => {
  return (
    <div className={styles["appInfoWrapper"]}>
      <div className={styles["bannerContainer"]}>
        <h3>GET THE APP!</h3>
        <button>
          <Image width="100px" height="40px" src="/icons/appstore.png" />
        </button>
        <button>
          <Image width="110px" height="60px" src="/icons/googleplay.png" />
        </button>
      </div>
      <div>
        <p>
          All you singles, listen up: if you’re looking to fall in love, want to
          start dating, ready to start a relationship, or want to keep it
          casual, you need to be on Tinder. With over 55 billion matches made,
          it’s the best free dating site to find your next best match. You’ve
          probably noticed; the dating landscape looks very different today,
          with most of us choosing to meet people online. With Tinder, the
          world’s most popular free dating app, you have millions of other
          singles at your fingertips, and they’re all ready to meet someone like
          you. Whether you’re straight or part of the LGBTQIA community,
          Tinder’s here to get the sparks flying.
        </p>
        <p>
          There really is something for everyone on Tinder. Looking for a
          relationship? You’ve got it. Want to make friends online? Say no more.
          Just started uni and want to make the most of your experience? Tinder
          U’s got you covered. Tinder isn’t your average dating site; it’s the
          most diverse dating app, where adults of all backgrounds and
          experiences are invited to make connections, memories and everything
          in between.
        </p>
      </div>
    </div>
  );
};

export default AppInfo;
