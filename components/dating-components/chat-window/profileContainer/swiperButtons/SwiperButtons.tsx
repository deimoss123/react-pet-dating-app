import React, { useEffect } from "react";
import { ManageCurrentPetFunctions } from "../ProfileContainer";

const SwiperButtons = ({ nextPet, previousPet }: ManageCurrentPetFunctions) => {
  return (
    <>
      <button onClick={() => nextPet()}>Like</button>
      <button onClick={() => nextPet()}>Dislike</button>
      <button onClick={() => previousPet()}>Last</button>
    </>
  );
};

export default SwiperButtons;
