import { Outlet } from "react-router-dom";

import { Navbar } from "../../index"

const AdminDashboard = () => {
    return <>

        <Navbar />

        <div className="bg-background min-h-screen ">
            <section className="relative pt-20">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <Outlet />
                </div>
            </section>
        </div>

    </>
}

export default AdminDashboard