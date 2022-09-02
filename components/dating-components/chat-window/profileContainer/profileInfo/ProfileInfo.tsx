import React, { useState } from "react";
import { PetInfo } from "../profileSwiper";

interface InfoButtonProperties {
  isDescriptionOpen: Boolean,
  setIsDescriptionOpen: Function
}

const ProfileInfo = ({info}: PetInfo) => {
  const[isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  if (isDescriptionOpen) {
    return(<div> <div>{info}</div>
    <ToggleInfoButton isDescriptionOpen={isDescriptionOpen} setIsDescriptionOpen={setIsDescriptionOpen}/>
    </div>)
  }
    return <ToggleInfoButton isDescriptionOpen={isDescriptionOpen} setIsDescriptionOpen={setIsDescriptionOpen}/>;
};

export default ProfileInfo;


const ToggleInfoButton = ({isDescriptionOpen, setIsDescriptionOpen} : InfoButtonProperties) => {
      return <button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>{"(i)"}</button>;
} 