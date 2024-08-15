import { Button, Heading, InputBox, Subheading } from "../Components";
import { BottomWarning } from "../Components/BottomWarning";

export default function Signup() {
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
                  //? onChange={}
                />
                <InputBox
                  label={"Last Name"}
                  placeholder={"Enter Your Last Name"}
                  //? onChange={}
                />
                <InputBox
                  label={"Email"}
                  placeholder={"Enter Your Email"}
                  //? onChange={}
                />

                <InputBox
                  label={"Password"}
                  placeholder={"Enter Your Password"}
                  //? onChange={}
                />
              </div>
              <Button lable={"Sign Up"} />
              <BottomWarning
                label={"Already have an Account"}
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
