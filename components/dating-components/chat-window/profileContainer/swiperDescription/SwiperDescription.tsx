import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { InfoButtonProperties } from "../profileInfo";
import styles from "./SwiperDescription.module.scss";

export interface DescriptionInfo {
  name: string;
  description: string;
}

export const SwiperDescription = ({
  isDescriptionOpen,
  setIsDescriptionOpen,
  name,
  description,
}: InfoButtonProperties & DescriptionInfo) => {
  return (
    <>
      <div className={styles.topGradient} />
      <div className={styles.descriptionWrapper}>
        <div className={styles.nameDescriptionWrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <ToggleInfoButton
          isDescriptionOpen={isDescriptionOpen}
          setIsDescriptionOpen={setIsDescriptionOpen}
        />
      </div>
    </>
  );
};

const ToggleInfoButton = ({
  isDescriptionOpen,
  setIsDescriptionOpen,
}: InfoButtonProperties) => {
  return (
    <button
      className={styles.toggleButton}
      onClick={() => {
        setIsDescriptionOpen(!isDescriptionOpen);
      }}
    >
      <FaWindowClose color={"#8BC6FC"} size={"30px"} />
    </button>
  );
};
