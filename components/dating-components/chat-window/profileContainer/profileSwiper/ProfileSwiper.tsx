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

export const ProfileSwiper = ({
  id,
  name,
  age,
  type,
  gallery,
  description,
  likePet,
  previous,
  dislikePet
}: RecommendedPet & ManageCurrentView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(gallery[currentIndex]);
  const [swipeDirection, setSwipeDirection] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isGalleryButtonsDisabled, setIsGalleryButtonsDisabled] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPhoto(gallery[0]);
  }, [gallery]);

  const nextPhoto = () => {
    const nextIndex = currentIndex + 1; //key needs to be unique for swiper animation
    const nextPhoto = gallery[Math.abs(nextIndex % gallery.length)]; // actual index of picture, MathAbs is needed because key (nextIndex) can be negative.
    setCurrentPhoto(nextPhoto);
    setCurrentIndex(nextIndex);
    setSwipeDirection(1);
  };
  
  const likePetAndCloseDescription=()=>{
    likePet()
    setIsDescriptionOpen(false)
  }

  const dislikePetAndCloseDescription =()=>{
    dislikePet();
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
                dislikePetAndCloseDescription();
              } else if (swipe > swipeConfidenceThreshold) {
                likePetAndCloseDescription();
              }
              setIsGalleryButtonsDisabled(false)
            }}
            onDrag={(e, { offset, velocity }) => {
              setIsGalleryButtonsDisabled(true)
            }}
          >
            <div className={styles.contentWrapper}>
              <GalleryButtons next={nextPhoto} previous={previousPhoto} isGalleryButtonsDisabled={isGalleryButtonsDisabled}/>
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
                    dislikePet={dislikePetAndCloseDescription}
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
