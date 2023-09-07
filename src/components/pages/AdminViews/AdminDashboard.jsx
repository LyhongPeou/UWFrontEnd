import { Outlet } from "react-router-dom";

import { Navbar } from "../../index"

const AdminDashboard = () => {
    return <>

        <Navbar />

        <div className="bg-background min-h-full ">
            <section className="relative pt-5">
                <div className="w-full max-w-screen-2xl mx-auto">
                    <Outlet />
                </div>
            </section>
        </div>

    </>
}

export default AdminDashboard