import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  swipeConfidenceThreshold,
  swipePower,
  variants,
} from "../../../../reusable-components/animationUtil";
import { GalleryButtons } from "../galleryButtons";
import { ManageCurrentView, RecommendedPet } from "../ProfileContainer";
import { SwiperBio } from "../swiperBio";
import { SwiperButtons } from "../swiperButtons";
import { SwiperDescription } from "../swiperDescription";
import styles from "./ProfileSwiper.module.scss";

export interface PetBio {
  name: string;
  age: string;
  type: string;
}

export interface PetInfo {
  info: string;
}

export type Foo = {
  height: number | undefined;
  width: number | undefined;
};

export const ProfileSwiper = ({
  id,
  name,
  age,
  type,
  image,
  gallery,
  description,
  likePet,
  previous,
  next,
}: RecommendedPet & ManageCurrentView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(gallery[currentIndex]);
  const [swipeDirection, setSwipeDirection] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPhoto(gallery[0]);
  }, [gallery]);

  const nextPhoto = () => {
    const nextIndex = currentIndex + 1;
    const nextPhoto = gallery[Math.abs(nextIndex % gallery.length)];
    setCurrentPhoto(nextPhoto);
    setCurrentIndex(nextIndex);
    setSwipeDirection(1);
  };
  
  const likePetAndCloseDescription=()=>{
    likePet()
    setIsDescriptionOpen(false)
  }

  const nextPetAndCloseDescription =()=>{
    next();
    setIsDescriptionOpen(false)
  }

  const previousPetAndCloseDescription=()=>{
    previous()
    setIsDescriptionOpen(false)
  }

  const previousPhoto = () => {
    const previousIndex = currentIndex - 1;
    const previousPhoto = gallery[Math.abs(previousIndex % gallery.length)];
    setCurrentPhoto(previousPhoto);
    setCurrentIndex(previousIndex);
    setSwipeDirection(-1);
  };

  return (
    <>
      <div className={styles.pictureContainer}>
        <AnimatePresence initial={false} custom={swipeDirection}>
          <motion.div
            className={styles.backgroundPicture}
            key={id + "id" + currentIndex}
            style={{
              backgroundImage: `url(${currentPhoto})`,
            }}
            custom={swipeDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextPetAndCloseDescription();
              } else if (swipe > swipeConfidenceThreshold) {
                previousPetAndCloseDescription();
              }
            }}
          >
            <div className={styles.contentWrapper}>
              <GalleryButtons next={nextPhoto} previous={previousPhoto} />
              {isDescriptionOpen ? (
                <SwiperDescription
                  name={name}
                  isDescriptionOpen={isDescriptionOpen}
                  setIsDescriptionOpen={setIsDescriptionOpen}
                  description={description}
                />
              ) : (
                <div>
                  <SwiperBio
                    name={name}
                    age={age}
                    type={type}
                    isDescriptionOpen={isDescriptionOpen}
                    setIsDescriptionOpen={setIsDescriptionOpen}
                  />
                  <SwiperButtons
                    next={nextPetAndCloseDescription}
                    previous={previousPetAndCloseDescription}
                    likePet={likePetAndCloseDescription}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};
