import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { styles } from "../../styles";
import AuthSVG from '../images/auth.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const AuthPage = () => {

    const [registerState, setRegisterState] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


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
            <div className="pt-10 pr-10 pl-10 rounded-2xl w-1/2 bg-accent">
                {registerState ? 
                    <h1 className="font-bold text-[34px] text-white text-center">Registration</h1> : <h1 className="font-bold text-[34px] text-white text-center" >Welcome </h1>
                }
                {registerState ? 
                    <p className="text-center text-white mt-2">Create your account</p> : <p className="text-center text-white mt-2" >Login to your account</p>
                }
                <form className="flex flex-col mt-1" ref={formRef}>
                    {registerState && (
                        <label className="flex flex-col text-white my-3">
                            <span className={`${styles.labelText}`}>
                                Name
                            </span>    
                            <input 
                                name="name"
                                onChange={onChangeHandler}
                                type="text" 
                                placeholder="First and Last Name"
                                className="input input-bordered w-full bg-white text-accent" 
                            />
                        </label>
                    )}
                    <label className="flex flex-col text-white my-3">
                        <span className={`${styles.labelText}`}>
                            Email
                        </span>    
                        <input 
                            name="email"
                            onChange={onChangeHandler}
                            type="text" 
                            placeholder="Email"
                            className="input input-bordered w-full bg-white text-accent" 
                        />
                    </label>
                    <div>
                        {registerState ? (
                            <>
                            <label className="flex flex-col text-white my-3 relative">
                                <span className={`${styles.labelText}`}>Password</span>
                                <div className="input-container relative">
                                    <input
                                        name="password"
                                        onChange={onChangeHandler}
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full bg-white text-accent pr-10"
                                    />
                                </div>
                            </label>
                            </>
                        ) : (
                            <>
                            <label className="flex flex-col text-white my-3 relative">
                                <span className={`${styles.labelText}`}>Password</span>
                                <div className="input-container relative">
                                    <input
                                        name="password"
                                        onChange={onChangeHandler}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="input input-bordered w-full bg-white text-accent pr-10"
                                    />
                                    <span
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className="toggle-password-icon text-primary opacity-60"
                                        />
                                    </span>
                                </div>
                            </label>
                            </>
                        )}
                    </div>
                    <div className="flex flex-row justify-between">
                        {registerState ? (
                            <>
                            </>
                        ) : (
                            <>
                            <div className="flex flex-row items-center">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="checkbox checkbox-success bg-white border border-accent w-4 h-4 rounded hover:border-accent" />
                                </label>
                                <span className="label-text ml-[2px] text-[16px]">Remember me</span>
                            </div>
                            <button className="text-secondary hover:underline">Forgot Password?</button>
                            </>
                        )}
                    </div>
                    {registerState && (
                    <label className="flex flex-col text-white my-3">
                        <span className={`${styles.labelText}`}>
                            Confirmation Code
                        </span>    
                        <input 
                            name="text"
                            onChange={onChangeHandler}
                            type="text" 
                            placeholder="Confirmation Code"
                            className="input input-bordered w-full bg-white text-accent border" 
                        />
                    </label>
                    )}
                    <div className="flex flex-col items-center" >
                        <button className="w-full py-3 border-black bg-secondary rounded-full text-white font-bold text-[18px] hover:underline mt-5" onClick={onSubmithandler}>
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
                        <div className="px-4 py-3 rounded-2xl text-[16px] text text-white mt-6 mb-4">
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