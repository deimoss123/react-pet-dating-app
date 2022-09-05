import { useUnmountEffect } from "framer-motion";
import React, { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "../../../../../public/icons/svg-icons";
import styles from "./GalleryButtons.module.scss";

interface GalleryButtonActions {
  next: Function;
  previous: Function;
  isGalleryButtonsDisabled:boolean
}

export const GalleryButtons = ({ next, previous, isGalleryButtonsDisabled }: GalleryButtonActions) => {

  return (
    <>
      <div className={styles.GalleryButtons}>
        <button disabled={isGalleryButtonsDisabled} className={styles.left} onClick={() => previous()}>
          <LeftArrow
            width="60px"
            height="60px"
            color={"#fff"}
          />
        </button>
        <button disabled={isGalleryButtonsDisabled} className={styles.right} onClick={() => next()}>
          <RightArrow
            width="60px"
            height="60px"
            color={"#fff"}
          />
        </button>
      </div>
    </>
  );
};
