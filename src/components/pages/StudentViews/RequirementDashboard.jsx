import React, { useState, useRef } from "react";
import { styles } from "../../../styles";
import { documentList } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faArrowUp, 
    faXmark, 
    faEye, 
    faCircleCheck, 
    faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import downloadIcon from "../../images/download.svg"

const MainStudentDashboard = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <h1  className={`${styles.dashHeadText} mb-4`}>Required Documents</h1>
            <div className="h-[70vh] w-full md:w-1/2 lg:w-full overflow-y-auto rounded-md shadow-md p-4 bg-gray-50 mt-5">
                <div className="flex flex-col gap-4">
                    {documentList.map((documents, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-300 flex flex-row items-center justify-between"
                        >
                            <div className="flex items-center"> 
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-gray-700 text-xl">
                                        <strong>Document:</strong> {documents.requirement}
                                    </h3>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Deadline:</strong> {documents.deadline}
                                    </p>
                                    <div className="flex flex-row items-center mt-2">
                                        {documents.uploaded ? (
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-base-200 text-green-500" />
                                            ) : (
                                                <FontAwesomeIcon icon={faCircleExclamation} className="text-base-200 text-orange-500" />
                                            )}
                                            <p className={`mx-1 ${documents.uploaded ? 'text-green-500' : 'text-orange-500'}`}>
                                                {documents.uploaded ? 'Uploaded' : 'Pending'}
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                {!documents.uploaded && (
                                    <button 
                                        className="btn bg-secondary text-white text-[20px] hover:bg-secondary border border-secondary hover:border-secondary mx-2 w-[60px] tooltip tooltip-bottom" 
                                        data-tip="Upload"
                                        onClick={()=>document.getElementById('my_modal_3').showModal()}
                                    >
                                        <FontAwesomeIcon icon={faArrowUp} />
                                    </button>
                                )}
                                {documents.uploaded ? (
                                    <>
                                        <button 
                                            className="tooltip tooltip-bottom" 
                                            data-tip="View"
                                        >
                                            <p className="text-accent hover:text-secondary text-md mx-2 font-semibold">View Upload</p>
                                        </button>
                                        <button 
                                            className="btn bg-base-200 text-white text-[20px] hover:bg-base-200 border border-base-200 hover:border-base-200 mx-2 w-[60px] tooltip tooltip-bottom" 
                                            data-tip="Remove"
                                        >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </>
                                ) : null}
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box bg-white">
                                    <h3 className="font-bold text-[25px] text-accent mb-6">Upload Document</h3>
                                        <div className="flex justify-center mt-4 border-[2px] border-dashed border-base-300 p-[20px] rounded-lg h-[300px]">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-accent">✕</button>
                                            </form>
                                            <div className="flex flex-col items-center h-[100px] mt-8">
                                                <img src={downloadIcon} className="mt-2 mb-3 h-[50px]"/>
                                                <p className="text-base-300">Upload Files Here</p>
                                                <p className="text-base-300">or</p>
                                                <div className="px-3 py-2 rounded-lg text-[16px] text text-white mt-2 bg-secondary">
                                                    <button className="text-white font-semibold" onClick={handleUploadButtonClick}>Browse Files</button>
                                                </div>
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    ref={fileInputRef}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </>
    );
};

export default MainStudentDashboard;
