import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("me volvi a mostrar :(");
  return <small>{value}</small>;
});
