import React, { useEffect } from "react";
import { ManageCurrentView } from "../ProfileContainer";

export const GalleryButtons = ({ next, previous }: ManageCurrentView) => {
  return (
    <>
      <div className={"GalleryButtons"}>
        <div className="next" onClick={() => next()}>
          {">"}
        </div>
        <div className="previous" onClick={() => previous()}>
          {"<"}
        </div>
      </div>
    </>
  );
};

