
import { About } from "../../components/about";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Modality from "../../components/modality";
import { Newsletter } from "../../components/newsletter";
import Partners from "../../components/partners";
import { Promotion } from "../../components/promotion";
import Resource from "../../components/resource";
import Midia from "../../components/Midia";
import Launch from "../../components/Launch";
import Header from "@/components/Header";



const HomePage = () => {

    return <>
        <div className="bg-[#0D0035]">
            <Header />
            <Hero />
            <About />
            <Launch />
            <Resource />
            <Promotion />
            <Modality />
            <Midia />
            <Newsletter />
            <Partners />
            <Footer />
        </div>

    </>
}

export default HomePage;
