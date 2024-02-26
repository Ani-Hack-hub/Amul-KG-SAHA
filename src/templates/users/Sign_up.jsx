import { useState } from "react";
import "../../assets/static/sign-up.css";
import Insert_Data from "../../server";
// import database from "../../server";
import axios from "axios";

function Sign_up() {
  let [fname, setfname] = useState("");
  let [sname, setsname] = useState("");
  let [email_, setemail] = useState("");
  let [num, setnum] = useState(0);
  let [add, setadd] = useState("");

  const user = {
    first_name: fname,
    second_name: sname,
    email: email_,
    number: num,
    address: add,
  };
  const first_name_func = (event) => setfname(event.target.value);
  const second_name_func = (event) => setsname(event.target.value);
  const email_in = (event) => setemail(event.target.value);
  const number_func = (event) => setnum(event.target.value);
  const address_func = (event) => setadd(event.target.value);
  const click = () => {
    axios.post("/", user).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="sign-up">
      <label>
        First Name:
        <input type="text" onChange={first_name_func} name="fname" />{" "}
      </label>{" "}
      <br />
      <label>
        Second Name:
        <input type="text" onChange={second_name_func} name="sname" />{" "}
      </label>{" "}
      <br />
      <label>
        Email:
        <input type="email" onChange={email_in} name="email" />{" "}
      </label>{" "}
      <br />
      <label>
        Number:
        <input type="number" onChange={number_func} name="num" />{" "}
      </label>{" "}
      <br />
      <label>
        Address:
        {/* <input type="text" onChange={address} name="add" />{" "} */}
        <textarea
          name="add"
          onChange={address_func}
          cols="30"
          rows="10"
        ></textarea>
      </label>{" "}
      <br />
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default Sign_up;
