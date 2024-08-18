import { useState } from "react";
import { Button, Heading, InputBox, Subheading } from "../Components";
import { BottomWarning } from "../Components/BottomWarning";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
      firstName,
      lastName,
      username,
      password,
    });
    console.log(res);
  };
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center">
          <div className=" bg-slate-300 pt-16 pb-16 pl-16 pr-16">
            <div className="rounded-lg bg-white text-center p-2 h-max px-4">
              <Heading label={"Sign Up"} className="text-red-500" />
              <Subheading
                subheading={"Enter Your informations to create an Account"}
              />
              <div className="">
                <InputBox
                  label={"First Name"}
                  placeholder={"Enter Your First Name"}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <InputBox
                  label={"Last Name"}
                  placeholder={"Enter Your Last Name"}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <InputBox
                  label={"Email"}
                  placeholder={"Enter Your Email"}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <InputBox
                  label={"Password"}
                  placeholder={"Enter Your Password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <Button lable={"Sign Up"} onClick={handleClick} />
              <BottomWarning
                label={"Already have an Account ?"}
                buttonText={"Sign in"}
                to={"/signin"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
