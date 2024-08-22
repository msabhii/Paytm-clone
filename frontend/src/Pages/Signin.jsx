import { Button, Heading, InputBox, Subheading } from "../Components";
import { BottomWarning } from "../Components/BottomWarning";

const Signin = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center">
          <div className=" bg-slate-300 pt-16 pb-16 pl-16 pr-16">
            <div className="rounded-lg bg-white text-center p-2 h-max px-4">
              <Heading label={"Sign In"} className="text-red-500" />
              <Subheading
                subheading={"Enter Your informations to Login an Account"}
              />
              <div className="">
                <InputBox
                  label={"Username"}
                  placeholder={"Enter your username"}
                  //? onChange={}
                />
                <InputBox
                  label={"Password"}
                  placeholder={"Enter Your Password"}
                  //! onChange={}
                />
              </div>
              <Button lable={"Sign In"} />
              <BottomWarning
                label={"Don't have an Account ?"}
                buttonText={"Signup"}
                to={"/signup"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
