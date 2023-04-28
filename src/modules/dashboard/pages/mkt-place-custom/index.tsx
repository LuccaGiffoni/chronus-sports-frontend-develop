import Header from "@/components/Header";
import Footer from "../../components/footer";
import MenuAside from "../../components/menu-aside";
import Container from "../../components/container"

const MKTPlaceCustomPage = () => {

    return <>
        <div className="bg-[#0D0035]">
            <Header />
            <div className="flex bg-[#0D102D] p-8">
                <MenuAside />
                <Container>
                    <h1>session MKTPlaceCustom</h1>
                </Container>
            </div>
            <Footer />
        </div>

    </>
}

export default MKTPlaceCustomPage;