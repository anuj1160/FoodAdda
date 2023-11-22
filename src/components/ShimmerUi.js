import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  const postStyle = "STYLE_FOUR";
  const col = 3;
  const row = 2;
  const gap = 30;

  return (
    <ShimmerPostList postStyle={postStyle} col={col} row={row} gap={gap} />
  );
};

export default Shimmer;
