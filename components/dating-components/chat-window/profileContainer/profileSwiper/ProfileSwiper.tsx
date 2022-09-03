import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  swipeConfidenceThreshold,
  swipePower,
  variants,
} from "../../../../reusable-components/animationUtil";
import { GalleryButtons } from "../galleryButtons";
import { ManageCurrentView, RecommendedPet } from "../ProfileContainer";
import ProfileInfo from "../profileInfo/ProfileInfo";
import { SwiperBio } from "../swiperBio";
import { SwiperButtons } from "../swiperButtons";

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
  image,
  gallery,
  description,
  next,
  previous,
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
    console.log("next");
    const nextIndex = currentIndex + 1;
    const nextPhoto = gallery[Math.abs(nextIndex % gallery.length)];
    setCurrentPhoto(nextPhoto);
    setCurrentIndex(nextIndex);
    console.log(nextIndex);
    setSwipeDirection(1);
  };

  const previousPhoto = () => {
    console.log("prev");
    const previousIndex = currentIndex - 1;
    const previousPhoto = gallery[Math.abs(previousIndex % gallery.length)];
    setCurrentPhoto(previousPhoto);
    setCurrentIndex(previousIndex);
    console.log(previousIndex);
    setSwipeDirection(-1);
  };

  return (
    <>
      <div style={{height: 800, display: "flex", flexDirection:"column" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:400
          }}
        >
          <AnimatePresence initial={false} custom={swipeDirection}>
            <motion.div
              key={id+"id"+currentIndex}
              style={{
                position:"absolute",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "400px",
                width: "320px",
                maxWidth:"320px",
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
                  nextPhoto();
                } else if (swipe > swipeConfidenceThreshold) {
                  previousPhoto();
                }
              }}
            >
              <GalleryButtons next={nextPhoto} previous={previousPhoto} />
              <SwiperBio name={name} age={age} type={type} />
              <ProfileInfo
                isDescriptionOpen={isDescriptionOpen}
                setIsDescriptionOpen={setIsDescriptionOpen}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {isDescriptionOpen && (
          <div style={{ userSelect: "none" }}>{description}</div>
        )}
        <SwiperButtons next={next} previous={previous} />
      </div>
    </>
  );
};
