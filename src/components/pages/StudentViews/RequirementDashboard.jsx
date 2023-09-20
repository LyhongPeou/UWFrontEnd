import React, { useState, useRef } from "react";

import { styles } from "../../../styles";
import { documentList } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faXmark, faEye } from "@fortawesome/free-solid-svg-icons";

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
            <h1 className={`${styles.dashHeadText} mb-4`}>Required Documents</h1>
            <div className="h-[70vh] w-full md:w-1/2 lg:w-full overflow-y-auto rounded-md shadow-md p-4 bg-gray-50 mt-5">
                <div className="flex flex-col gap-4">
                    {documentList.map((documents, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-300 flex flex-row items-center justify-between"
                        >
                            <div className="flex items-center">
                                <button
                                    className="btn bg-white text-accent text-[18px] hover:bg-white border border-white hover:border-white hover:text-secondary w-[60px] tooltip tooltip-bottom mr-3"
                                    data-tip="View"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <div>
                                    <h3 className="mb-2 text-gray-700 text-xl">
                                        <strong>Document:</strong> {documents.requirement}
                                    </h3>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Deadline:</strong> {documents.deadline}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    className="btn bg-secondary text-white text-[20px] hover:bg-secondary border border-secondary hover:border-secondary mx-2 w-[60px] tooltip tooltip-bottom"
                                    data-tip="Upload"
                                    onClick={handleUploadButtonClick}
                                >
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </button>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                    ref={fileInputRef}
                                />
                                <button
                                    className="btn bg-base-200 text-white text-[20px] hover:bg-base-200 border border-base-200 hover:border-base-200 w-[60px] tooltip tooltip-bottom"
                                    data-tip="Remove"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainStudentDashboard;
