
import Header from "@/components/Header";
import Footer from "../components/footer";
import MenuAside from "../components/menu-aside";
import Container from "../components/container";


const DashboardClientPage = () => {

    return <>
        <div className="bg-[#0D0035]">
            <Header />
            <MenuAside />
            <Container />
            <Footer />
        </div>

    </>
}

export default DashboardClientPage;