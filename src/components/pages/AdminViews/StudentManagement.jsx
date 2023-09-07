import { useState, useRef } from "react";
import { styles } from "../../../styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { notificationList } from "../../constants";

const StudentManagement = () => {

    const [infoModal, setinfoModal] = useState({
        name: "",
        email: "",
        studentID: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setinfoModal({ ...infoModal, [name]: value })
    };

    return <>
    
        <h1 className={`${styles.dashHeadText} mb-5 `}> Student Management </h1>
        <div className="flex flex-row justify-between">
            <div className="indicator">
                <button className="btn border border-secondary join-item bg-secondary text-white hover:underline hover:bg-secondary" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <FontAwesomeIcon icon={faPlus} className="text-white"/>
                    <FontAwesomeIcon icon={faUser} className="text-white"/>
                </button>
                <select className="select select-bordered border w-full max-w-md ml-4 bg-white text-accent">
                    <option selected>Sort by...</option>
                    <option>Name</option>
                    <option>Due Date</option>
                </select>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-accent">✕</button>
                        </form>
                        <h3 className="font-bold text-[25px] text-accent mb-4">Add a Student</h3>
                        <label className="flex flex-col text-white border-accent">
                                <span className="font-meduim mb-2 text-[20px] text-accent font-bold">
                                    Name
                                </span>
                                <input
                                    type="text"
                                    placeholder="First and Last Name"
                                    name="name"
                                    onChange={onChangeHandler}
                                    className={`${styles.inputText} border border-accent mb-5`}
                                />
                        </label>
                        <label className="flex flex-col text-white">
                            <span className="font-meduim mb-2 text-[20px] text-accent font-bold">
                                Email
                            </span>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={onChangeHandler}
                                className={`${styles.inputText} border border-accent`}
                            />
                        </label>
                        <div className="flex justify-center">
                            <button className="btn bg-secondary text-white text-[20px] border border-secondary mt-6 hover:bg-secondary hover:border-secondary w-full">
                                Submit
                            </button>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="join flex items-center">
                <div>
                    <div>
                    <input className="input input-bordered join-item bg-white text-accent " placeholder="Search"/>
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn border border-secondary join-item bg-secondary text-white hover:underline hover:bg-secondary">                    
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white"/>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="h-[70vh] md:h-[60vh] w-full md:w-1/2 lg:w-full overflow-y-auto border border-gray-300 rounded-md shadow-md p-4 bg-gray-50 mt-5">
                {notificationList.map((notification, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 mb-4 rounded-md shadow-sm flex flex-col border border-gray-200"
                        >
                            <p className="mb-2 text-gray-800 font-semibold">
                                <strong>Student ID:</strong> {notification.studentID}
                            </p>
                            <p className="mb-2 text-gray-700">
                                <strong>Submission:</strong> {notification.submission.join(', ')}
                            </p>
                            <p className="text-gray-600">
                                <strong>Date:</strong> {notification.date}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </>
}

export default StudentManagement