import React from "react";
import { VerifiedBadge } from "../../../../../public/icons/svg-icons";
import { InfoButtonProperties } from "../profileInfo";
import ProfileInfo from "../profileInfo/ProfileInfo";
import { PetBio } from "../profileSwiper/ProfileSwiper";
import styles from "./SwiperBio.module.scss";

export const SwiperBio = ({
  name,
  age,
  type,
  isDescriptionOpen,
  setIsDescriptionOpen,
}: PetBio & InfoButtonProperties) => {
  return (
    <>
      <div className={styles.topGradient} />


      <div className={styles.bioWrapper}>
        <div className={styles.column}>
          <div className={styles.name}>
            {name} <VerifiedBadge />
          </div>
          <div className={styles.age}>
            {age}, {type}
          </div>
        </div>
        <div className={styles.row}>
          <ProfileInfo
            isDescriptionOpen={isDescriptionOpen}
            setIsDescriptionOpen={setIsDescriptionOpen}
          />
        </div>
      </div>



      <div className={styles.bottomGradient} />
    </>
  );
};
