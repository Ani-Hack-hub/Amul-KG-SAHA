import Menu from "./templates/menu";
import Bulk from "./templates/amul_pdt/Bulk";
import Tub from "./templates/amul_pdt/Tub";
import Combo from "./templates/amul_pdt/Combo";
import Cone from "./templates/amul_pdt/Cone";
import Cup from "./templates/amul_pdt/Cup";
import Jumbo from "./templates/amul_pdt/Jumbo";
import Kulfi from "./templates/amul_pdt/Kulfi";
import Stick from "./templates/amul_pdt/Stick";
import { Button_1, Button_2, Button_3 } from "../src/templates/Buttons";

function App(elt_name) {
  console.log(elt_name.elt);
  var element;
  switch (elt_name.elt) {
    case "Bulk -1":
      element = (
        <>
          <Bulk MyProp={1}></Bulk>
          <Button_1></Button_1>
        </>
      );
      break;
    case "Bulk -2":
      element = (
        <>
          <Bulk MyProp={2}></Bulk>
          <Button_2></Button_2>
        </>
      );
      break;
    case "Bulk -3":
      element = (
        <>
          <Bulk MyProp={3}></Bulk>
          <Button_3></Button_3>
        </>
      );
      break;
    case "Combo":
      element = <Combo></Combo>;
      break;
    case "Tub":
      element = <Tub></Tub>;
      break;
    case "Jumbo":
      element = <Jumbo></Jumbo>;
      break;
    case "Stick":
      element = <Stick></Stick>;
      break;
    case "Cone":
      element = <Cone></Cone>;
      break;
    case "Kulfi":
      element = <Kulfi></Kulfi>;
      break;
    case "Cup":
      element = <Cup></Cup>;
      break;
    case "Menu":
      element = <Menu></Menu>;
      break;
    default:
      break;
  }
  return element;
}

export default App;
