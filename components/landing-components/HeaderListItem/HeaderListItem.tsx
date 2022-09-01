import styles from "./HeaderListItem.module.scss";

interface Props {
  text: string;
}

const HeaderListItem: React.FC<Props> = ({ text }) => {
  return <li className={styles.HeaderListItem}>{text}</li>;
};

export default HeaderListItem;
