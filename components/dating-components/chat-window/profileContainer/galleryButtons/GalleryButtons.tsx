import React, { useEffect } from "react";
import { ManageCurrentView } from "../ProfileContainer";

const GalleryButtons = ({ next, previous }: ManageCurrentView) => {
  return (
    <>
      <button onClick={() => next()}>Next</button>
      <button onClick={() => previous()}>Previous</button>
    </>
  );
};

export default GalleryButtons;
