import styles from "./HeaderListItem.module.scss";

interface Props {
  text: string;
  onClick?: (e: React.MouseEvent) => any;
}

const HeaderListItem: React.FC<Props> = ({ text, onClick }) => {
  return <li onClick={onClick} className={styles.HeaderListItem}>{text}</li>;
};

export default HeaderListItem;
