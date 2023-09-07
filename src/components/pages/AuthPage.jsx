import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { styles } from "../../styles";
import AuthSVG from '../images/auth.svg';

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
        confirmation: "",
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

    return <section className="h-screen w-full relative mx-auto flex justify-center items-center">
        <div className="p-10 flex">
            <div className="flex items-center">
                <img src={AuthSVG} alt="Document Image" className="w-5/6" />
            </div>
            <div className="p-10 rounded-2xl w-1/2 bg-accent">
                {registerState ? 
                    <h1 className="font-bold text-[2rem] text-white mb-4 text-center">Sign Up</h1> : <h1 className="font-bold text-[2rem] text-white text-center mb-4" >Login</h1>
                }
                <form className="flex flex-col mt-1 gap-8 " ref={formRef}>
                    {registerState && (
                        <label className="flex flex-col text-white">
                            <span className={`${styles.labelText}`}>
                                Name
                            </span>
                            <input
                                type="text"
                                placeholder="First and Last Name"
                                name="name"
                                onChange={onChangeHandler}
                                className={`${styles.inputText}`}
                            />
                        </label>
                    )}
                    <label className="flex flex-col text-white">
                        <span className={`${styles.labelText}`}>
                            Email
                        </span>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={onChangeHandler}
                            className={`${styles.inputText}`}
                        />
                    </label>
                    <label className="flex flex-col text-white">
                        <span className={`${styles.labelText}`}>
                            Password
                        </span>
                        <input
                            type="password"
                            onChange={onChangeHandler}
                            name="password"
                            placeholder="Password"
                            className={`${styles.inputText}`}
                        />
                    </label>
                    {registerState && (
                        <label className="flex flex-col text-white">
                            <span className={`${styles.labelText}`}>
                                Confirmation Code
                            </span>
                            <input
                                type="text"
                                placeholder="Confirmation Code"
                                name="confirmation"
                                onChange={onChangeHandler}
                                className={`${styles.inputText}`}
                            />
                        </label>
                    )}
                    <div className="flex flex-col items-center" >
                        <button className="px-20 py-3 border-black bg-secondary rounded-2xl text-white font-bold text-[20px] hover:underline" onClick={onSubmithandler}>
                            {registerState ? (
                                <>
                                Sign Up
                                </>
                            ) : (
                                <>
                                Login
                                </>
                            )}
                        </button>
                        <div className="px-4 py-3 rounded-2xl w-[290px] text-[18px] text text-white">
                            {registerState ? (
                                <>
                                <span>Already have an account?</span> <button className="text-secondary hover:underline font-bold" onClick={onClickRegister}>Login</button>
                                </>
                            ) : (
                                <>
                                <span>Don't have an account?</span> <button className="text-secondary hover:underline font-bold" onClick={onClickRegister}>Sign Up</button>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="ml-4 flex items-center">
                    </div>
                </form>
            </div>
        </div>
    </section>



}

export default AuthPage