import React from "react";
import { ManageCurrentView } from "../ProfileContainer";
import { FaUndo, FaHeart, FaTimes } from "react-icons/fa";
import styles from "./SwiperButtons.module.scss";

export const SwiperButtons = ({
  previous,
  likePet,
  dislikePet
}: ManageCurrentView) => {
  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.undoButton} onClick={() => previous()}>
          <FaUndo className={styles.return} size={35} color={"#CFCFC4"} />
        </button>
        <button className={styles.dislikeButton} onClick={() => dislikePet()}>
          <FaTimes className={styles.dislike} size={40} color={"#E3242B"} />
        </button>
        <button className={styles.likeButton} onClick={() => likePet()}>
          <FaHeart className={styles.heart} size={35} color={"#5DBB63"} />
        </button>
      </div>
    </>
  );
};
