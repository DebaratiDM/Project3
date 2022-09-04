import { areaOfRectangle } from "../Utility/general";
function AreaOfRectangle() {
  const length = 9;
  const width = 14;
  const currentArea = areaOfRectangle(length, width);

  return (
    <div className="App">
      Area of rectangle for length <b>{length}</b> and width <b>{width}</b> is{" "}
      <b>{currentArea}</b>
    </div>
  );
}
export default AreaOfRectangle;
