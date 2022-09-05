import styles from "./HeaderListItem.module.scss";
import { useEffect, useState } from "react"

interface Props {
  text?: string;
  dropdown?: string[];
  onClick?: (e: React.MouseEvent) => any;
}

const HeaderListItem: React.FC<Props> = ({ dropdown, text, onClick }) => {


  if (dropdown) {
    return (
      <li onClick={onClick} className={styles.HeaderListItem}>
        {text}
        <ul className={styles.dropdown}>
          {dropdown.map((item, index) => (
            <li className={styles.dropdownLI} key={index}>{item}</li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li onClick={onClick} className={styles.HeaderListItem}>
      {text}
    </li>
  );
};

export default HeaderListItem;
