import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { styles } from "../../styles"

const AuthPage = () => {

    const [registerState, setRegisterState] = useState(false);
    const dispatch = useDispatch()


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


    return <section className="h-screen w-full relative mx-auto">
        <div className=" flex justify-center p-10">
            <div className="p-8 rounded-2xl w-[500px] bg-accent">
                {registerState ? <h1 className="font-bold text-[2rem]">Register</h1> : <h1 className="font-bold text-[2rem] text-white" >Login</h1>}
                <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <form className="flex flex-col mt-1 gap-8 " ref={formRef}>
                    {registerState && (
                        <label className={`${styles.labelText}`}>
                            <span className=" font-meduim mb-4 text-[20px] font-bold">
                                Name
                            </span>
                            <input
                                type="text"
                                placeholder="Please Enter Your Name"
                                name="name"
                                onChange={onChangeHandler}
                                className={`${styles.inputText}`}
                            />
                        </label>
                    )}
                    <label className={`${styles.labelText}`}>
                        <span className="font-meduim mb-4 text-[20px] font-bold">
                            Email
                        </span>
                        <input
                            type="text"
                            placeholder="Please Enter Your Email"
                            name="email"
                            onChange={onChangeHandler}
                            className={`${styles.inputText}`}
                        />
                    </label>
                    <label className={`${styles.labelText}`}>
                        <span className=" font-meduim mb-4 text-[20px] font-bold">
                            Password
                        </span>
                        <input
                            type="password"
                            onChange={onChangeHandler}
                            name="password"
                            placeholder="Please Enter Your Password"
                            className={`${styles.inputText}`}
                        />
                    </label>
                    {registerState && (
                        <label className={`${styles.labelText}`}>
                            <span className=" font-meduim mb-4 text-[20px] font-bold">
                                Confirmation Code
                            </span>
                            <input
                                type="text"
                                placeholder="Please Enter the Confirmation"
                                name="name"
                                onChange={onChangeHandler}
                                className={`${styles.inputText}`}
                            />
                        </label>
                    )}

                    <div className="flex flex-row justify-between" >
                        <button className="px-4 py-3 border-black bg-secondary rounded-2xl w-[120px] text-white font-bold text-[20px] hover:underline" onClick={onSubmithandler}>
                            {registerState ? "Register" : "Login"}
                        </button>

                        <button
                            className="px-4 py-3 rounded-2xl w-[120px] font-bold text-[20px] hover:underline text-white"
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