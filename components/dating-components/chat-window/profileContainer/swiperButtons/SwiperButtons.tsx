import React from "react";
import { ManageCurrentView } from "../ProfileContainer";

export const SwiperButtons = ({ next, previous, likePet }: ManageCurrentView) => {
  return (
    <>
    <div>
      <button onClick={() => likePet()}>Like</button>
      <button onClick={() => next()}>Dislike</button>
      <button onClick={() => previous()}>Last</button>
      </div>
    </>
  );
};


