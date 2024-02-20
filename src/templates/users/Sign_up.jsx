import { useState } from "react";
import "../../assets/static/sign-up.css";

function Sign_up() {
  var [fname, setfname] = useState("");
  var [sname, setsname] = useState("");
  var [email, setemail] = useState("");
  var [num, setnum] = useState(0);
  var [add, setadd] = useState("");

  const first_name = (event) => setfname(event.target.value);
  const second_name = (event) => setsname(event.target.value);
  const email_in = (event) => setemail(event.target.value);
  const number = (event) => setnum(event.target.value);
  const address = (event) => setadd(event.target.value);
  const click = () => {
    console.log(fname, sname, email, num, add);
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
        {/* <input type="text" onChange={address} name="add" />{" "} */}
        <textarea name="add" onChange={address} cols="30" rows="10"></textarea>
      </label>{" "}
      <br />
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default Sign_up;
