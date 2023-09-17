import PageError from "../images/404.svg"

const NotFound = () => {
    return (
        <section className="h-screen w-full relative mx-auto flex justify-center items-center">
            <h2 className="text-white font-bold">OOPS...</h2>
            <img src={PageError} alt="Document Image" className="w-1/4" />
        </section>
    );
};

export default NotFound;
