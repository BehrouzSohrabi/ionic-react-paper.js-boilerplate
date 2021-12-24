import Paper from "paper";

const Draw = () => {
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event: any) => {
    myPath.strokeColor = new Paper.Color("black");
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event: any) => {
    myPath.add(event.point);
  };

  Paper.install(window);
};

export default Draw;
