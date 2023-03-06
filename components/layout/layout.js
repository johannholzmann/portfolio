import Navbar from "../navbar/navbar";

import Footer from '../footer/footer.js';

const Layout = ({ children }) => {
    return (
        <div className="max-w-2xl mx-4 sm:mx-auto flex flex-col min-h-screen text-black dark:text-white">
            <Navbar />
            <div className="flex-1 my-2 text-center">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;