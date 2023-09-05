import { useState, useRef } from "react";


const AuthPage = () => {

    const [registerState, setRegisterState] = useState(false);

    

    const [infoLogin, setinfoLogin] = useState({
        email: "",
        password: "",
    });

    const [infoRegister, setinfoRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const formRef = useRef();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        if (registerState) {
            setinfoRegister({ ...infoRegister, [name]: value });

        } else {
            setinfoLogin({ ...infoLogin, [name]: value })

        }
    };

    const onSubmithandler = (e) => {
        e.preventDefault()
        console.log("Clicked")

    }



    const onClickRegister = (e) => {
        e.preventDefault();
        setRegisterState((prev) => {
            setRegisterState(!prev);
        });
    };


    return <section className="h-screen w-full relative mx-auto bg-background">
        <div className=" flex justify-center p-10">
            <div className="p-8 rounded-2xl bg-primary w-[500px] ">
                {registerState? <h1 className="font-bold text-[2rem] mb-4">Register</h1> : <h1  className="font-bold text-[2rem] mb-4" >Login</h1>}
                <form className="flex flex-col mt-1 gap-8 " ref={formRef}>
                    {registerState && (
                        <label className="flex flex-col">
                            <span className="text-black font-meduim mb-4 text-[20px] font-bold">
                                Name
                            </span>
                            <input
                                type="text"
                                placeholder="Please Enter Your Name"
                                name="name"
                                onChange={onChangeHandler}
                                className="py-4 px-6 rounded-lg outline-none border-none font-meduim bg-secondary"
                            />
                        </label>
                    )}

                    <label className="flex flex-col">
                        <span className="text-black font-meduim mb-4 text-[20px] font-bold">
                            Email
                        </span>
                        <input
                            type="text"
                            placeholder="Please Enter Your Email"
                            name="email"
                            onChange={onChangeHandler}
                            className="py-4 px-6 rounded-lg outline-none border-none font-meduim bg-secondary"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-black font-meduim mb-4 text-[20px] font-bold">
                            Password
                        </span>
                        <input
                            type="password"
                            onChange={onChangeHandler}
                            name="password"
                            placeholder="Please Enter Your Password"
                            className="py-4 px-6 rounded-lg outline-none border-none font-meduim bg-secondary"
                        />
                    </label>

                    <div className="flex flex-row justify-between" >
                        <button className="px-4 py-3 border-black bg-accent rounded-2xl w-[120px] text-white font-bold text-[20px] hover:underline" onClick={onSubmithandler}>
                            {registerState ? "Register" : "Login"}
                        </button>

                        <button
                            className="px-4 py-3 rounded-2xl w-[120px] font-bold text-[20px] hover:underline"
                            onClick={onClickRegister}
                        >
                            {registerState ? "Login" : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>



}

export default AuthPage