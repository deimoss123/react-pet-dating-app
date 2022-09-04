import React from "react";
import { ManageCurrentView } from "../ProfileContainer";
import { RiCloseFill } from "react-icons/ri";
import { FaUndo, FaHeart, FaTimes } from "react-icons/fa";
import styles from "./SwiperButtons.module.scss"

export const SwiperButtons = ({
  next,
  previous,
  likePet,
}: ManageCurrentView) => {
  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.undoButton} onClick={() => previous()}>
          <FaUndo size={35} color={"#CFCFC4"}/>
        </button>
        <button className={styles.dislikeButton} onClick={() => next()}>
          <FaTimes size={40} color={"#E3242B"} />
        </button>
        <button className={styles.likeButton} onClick={() => likePet()}>
            <FaHeart size={35} color={"#5DBB63"}/>
          </button>
      </div>
    </>
  );
};
