import { useUnmountEffect } from "framer-motion";
import React, { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "../../../../../public/icons/svg-icons";
import styles from "./GalleryButtons.module.scss";

interface GalleryButtonActions {
  next: Function;
  previous: Function;
}

export const GalleryButtons = ({ next, previous }: GalleryButtonActions) => {

  return (
    <>
      <div className={styles.GalleryButtons}>
        <button className={styles.left} onClick={() => previous()}>
          <LeftArrow
            width="60px"
            height="60px"
            color={"#fff"}
          />
        </button>
        <div className={styles.right} onClick={() => next()}>
          <RightArrow
            width="60px"
            height="60px"
            color={"#fff"}
          />
        </div>
      </div>
    </>
  );
};
