import React from "react";

interface GalleryButtonActions {
  next:Function,
  previous:Function
}

export const GalleryButtons = ({ next, previous }: GalleryButtonActions) => {
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

