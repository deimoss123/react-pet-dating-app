import React, { useEffect, useState } from "react";
import { RecommendedPet } from "../../../../../pages/recommendations";
import GalleryButtons from "../galleryButtons/GalleryButtons";
import { ManageCurrentView } from "../ProfileContainer";
import { useSwipeable } from "react-swipeable";
import ProfileInfo from "../profileInfo/ProfileInfo";
import SwiperBio from "../swiperBio/SwiperBio";
import SwiperButtons from "../swiperButtons/SwiperButtons";

export interface PetBio {
  name: string;
  age: string;
  type: string;
}

export interface PetInfo {
  info: string;
}

const ProfileSwiper = ({
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
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedLeft: () => previousPhoto(),
    onSwipedRight: () => nextPhoto(),
    trackMouse: true,
  });

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPhoto(gallery[0]);
  }, [gallery]);

  const nextPhoto = () => {
    console.log("next");
    const nextIndex =
      currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    const nextPhoto = gallery[nextIndex];
    setCurrentPhoto(nextPhoto);
    setCurrentIndex(nextIndex);
  };

  const previousPhoto = () => {
    console.log("prev");
    const previousIndex =
      currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    const previousPhoto = gallery[previousIndex];
    setCurrentPhoto(previousPhoto);
    setCurrentIndex(previousIndex);
  };

  return (
    <>
      <div
        {...handlers}
        className={isDescriptionOpen ? "description-open" : "description-closed"}
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "320px",
          backgroundImage: `url(${currentPhoto})`,
        }}
      >
        <GalleryButtons next={nextPhoto} previous={previousPhoto} />
        <SwiperBio name={name} age={age} type={type} />
        <ProfileInfo
          isDescriptionOpen={isDescriptionOpen}
          setIsDescriptionOpen={setIsDescriptionOpen}
        />
      </div>
      {isDescriptionOpen && (
        <div style={{ userSelect: "none" }}>{description}</div>
      )}
      <SwiperButtons next={next} previous={previous} />
    </>
  );
};

export default ProfileSwiper;
