import React, { useEffect } from "react";
import Paper from "paper";
import Draw from "./Draw";

const Canvas = (props: any) => {
  useEffect(() => {
    Paper.setup("canvas");
    Draw();
  }, []);

  return <canvas {...props} id="canvas" resize="true" />;
};

export default Canvas;
