import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./ProfileInfo.module.scss"


export interface InfoButtonProperties {
  isDescriptionOpen: Boolean;
  setIsDescriptionOpen: Function;
}

const ProfileInfo = ({
  isDescriptionOpen,
  setIsDescriptionOpen,
}: InfoButtonProperties) => {
  if (isDescriptionOpen) {
    return (
      <ToggleInfoButton
        isDescriptionOpen={isDescriptionOpen}
        setIsDescriptionOpen={setIsDescriptionOpen}
      />
    );
  }
  return (
    <ToggleInfoButton
      isDescriptionOpen={isDescriptionOpen}
      setIsDescriptionOpen={setIsDescriptionOpen}
    />
  );
};

export default ProfileInfo;

const ToggleInfoButton = ({
  isDescriptionOpen,
  setIsDescriptionOpen,
}: InfoButtonProperties) => {
  return (
    <button className={styles.iconButton} onClick={() => {
      setIsDescriptionOpen(!isDescriptionOpen)
    }}>
        <FaInfoCircle color={"#fff"} size={"30px"}/>
    </button>
  );
};
