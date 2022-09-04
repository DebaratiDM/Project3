import { areaOfCircle } from "../Utility/general";
function AreaOfCircle() {
  const Pie = Math.PI;
  const radius = 8;
  const areaCircle = areaOfCircle(radius, Pie);
  return (
    <div className="App">
      Area of corcle for radius <b>{radius}</b> is <b>{areaCircle}</b>
    </div>
  );
}
export default AreaOfCircle;
