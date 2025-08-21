import { Outlet } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"
import WhatsAppButton from "../common/WhatsAppButton"



export default function MainLayout() {


    return (


        <div className="flex flex-col min-h-screen bg-gradient-warm">


            {/* Header */}
            <Header />


            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>


            {/* Footer */}
            <Footer />


            {/* WhatsApp Button */}
            <WhatsAppButton />


        </div>

    )


}
