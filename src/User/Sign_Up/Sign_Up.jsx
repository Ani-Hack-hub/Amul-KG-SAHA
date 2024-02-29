import { useState } from "react";
import "../Sign_Up/style.css";
import axios from "axios";

function Sign_up() {
  let [fname, setfname] = useState("");
  let [sname, setsname] = useState("");
  let [email, setemail] = useState("");
  let [num, setnum] = useState(0);
  let [add, setadd] = useState("");
  let user = {
    fname:fname,
    sname:sname,
    email:email,
    num:num,
    add:add
  }

  const first_name = (event) => setfname(event.target.value);
  const second_name = (event) => setsname(event.target.value);
  const email_in = (event) => setemail(event.target.value);
  const number = (event) => setnum(event.target.value);
  const address = (event) => setadd(event.target.value);
  const click = () => {
    console.log(fname, sname, email, num, add);
    axios
      .post("http://localhost:5173/users/sign-up", user)
      .catch((err) => console.log(err));
  };
  return (
    <div className="sign-up">
      <label>
        First Name:
        <input type="text" onChange={first_name} name="fname" />{" "}
      </label>{" "}
      <br />
      <label>
        Second Name:
        <input type="text" onChange={second_name} name="sname" />{" "}
      </label>{" "}
      <br />
      <label>
        Email:
        <input type="email" onChange={email_in} name="email" />{" "}
      </label>{" "}
      <br />
      <label>
        Number:
        <input type="number" onChange={number} name="num" />{" "}
      </label>{" "}
      <br />
      <label>
        Address:
        <textarea name="add" onChange={address} cols="30" rows="10"></textarea>
      </label>{" "}
      <br />
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default Sign_up;
