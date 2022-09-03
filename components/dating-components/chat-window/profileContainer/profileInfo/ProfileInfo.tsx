import React, { useEffect, useState } from "react";
import { PetInfo } from "../profileSwiper";

interface InfoButtonProperties {
  isDescriptionOpen: Boolean,
  setIsDescriptionOpen: Function
}

const ProfileInfo = ({isDescriptionOpen, setIsDescriptionOpen}: InfoButtonProperties) => {


  if (isDescriptionOpen) {
    return(
    <ToggleInfoButton isDescriptionOpen={isDescriptionOpen} setIsDescriptionOpen={setIsDescriptionOpen}/>)
    
  }
    return <ToggleInfoButton isDescriptionOpen={isDescriptionOpen} setIsDescriptionOpen={setIsDescriptionOpen}/>;
};

export default ProfileInfo;


const ToggleInfoButton = ({isDescriptionOpen, setIsDescriptionOpen} : InfoButtonProperties) => {
      return <button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>{"(i)"}</button>;
} 