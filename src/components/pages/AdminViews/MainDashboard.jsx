import { styles } from "../../../styles"
import { notificationList } from "../../constants"

const MainDashboard = () => {
    return (
        <>
            <h1  className={`${styles.dashHeadText} mb-5 `}>Your Dashboard</h1>
            <div className="h-[70vh] md:h-[80vh] w-full md:w-1/2 lg:w-1/3 overflow-y-auto border border-gray-300 rounded-md shadow-md p-4 bg-gray-50 mx-auto">
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
        </>
    );
};

export default MainDashboard;
