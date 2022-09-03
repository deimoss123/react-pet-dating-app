import React, { useEffect } from "react";
import { ManageCurrentView } from "../ProfileContainer";

export const SwiperButtons = ({ next, previous }: ManageCurrentView) => {
  return (
    <>
    <div>
      <button onClick={() => next()}>Like</button>
      <button onClick={() => next()}>Dislike</button>
      <button onClick={() => previous()}>Last</button>
      </div>
    </>
  );
};


