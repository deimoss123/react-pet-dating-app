import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles["footerContainer"]}>
        <ul>
          <li>FAQ</li>
          <li>Safety Tips</li>
          <li>Terms</li>
          <li>Cookie Policy</li>
          <li>Privacy Settings</li>
        </ul>
        <span>© 2022 Pawtners Group, LLC, All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
