import PageError from "../images/404.svg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MoveBack = () => {
    return (
        <section className="h-screen w-full relative mx-auto flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center mr-20">
                <div>
                    <h3 className="text-white font-bold text-[80px]">OOPS!</h3>
                    <h3 className="text-white text-[40px]">Looks like this</h3>
                    <h3 className="text-white  text-[40px]">page does not exist!</h3>
                </div>
                <div className="px-7 py-5 rounded-full text-[18px] text text-white mt-10 mb-4 bg-secondary">
                    <FontAwesomeIcon icon={faArrowLeft}  className="mr-3"/>
                    <Link to="/">
                        <button className="text-white font-bold">Return To Login</button>
                    </Link>
                </div>
            </div>
            <img src={PageError} alt="Document Image" className="w-1/3"/>
        </section>
    );
};

export default MoveBack;
