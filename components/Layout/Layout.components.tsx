import NavBar from "../NavBar/NavBar.components";
import Footer from "../Footer/Footer.components";
import { ReactNode } from "react";

interface IProps {
    children?: ReactNode
}

const Layout = ({children}: IProps) => {
    return (
        <>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
    );
};

export default Layout;