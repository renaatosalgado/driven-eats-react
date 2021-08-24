import MainCourse from "./MainCourse";
import Drinks from "./Drinks";
import Desserts from "./Desserts";

export default function Menu() {
  return (
    <>
      <div class="menu">
        <MainCourse />
        <Drinks />
        <Desserts />        
      </div>
    </>
  );
}
