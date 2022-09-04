import React from "react";
import {LeftArrow, RightArrow} from "../../../../../public/icons/svg-icons";
import styles from "./GalleryButtons.module.scss"

interface GalleryButtonActions {
  next:Function,
  previous:Function
}

export const GalleryButtons = ({ next, previous }: GalleryButtonActions) => {
  return (
    <>
      <div className={styles.GalleryButtons}>
        <div className={styles.left} onClick={() => previous()}>
          <LeftArrow color="#fff"/>
        </div>
        <div className={styles.right} onClick={() => next()}>
          <RightArrow color="#fff"/>
        </div>
      </div>
    </>
  );
};

