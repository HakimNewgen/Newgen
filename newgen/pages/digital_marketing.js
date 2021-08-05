import Banner from "../components/Banner";
import Image from "next/image"
import DigitalService from "../components/DigitalService";
import Latest from "../components/Latest";
import Footer from "../components/Footer";
 

function digital_marketing() {
    return (
        <div  >
            <Banner source="https://i.ibb.co/hY0zJyR/Png-Item-5400435.png" navbar="blue-900" text="Solutions numériques avec une approche de développement centrée sur l'utilisateur" font={"text-3xl"} size="cover"  color={"text-blue-900"}/>

            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Comment pouvons-nous vous aider </h3>

            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/4PWG3bk/Capture.png" title="Paid Media" text="Découvrez la force de la publicité sociale sur vos produits et vos services à votre audience défini afin d'accroître la notoriété de la marque et de générer des revenus." />
                <DigitalService title="SEO" icon="https://i.ibb.co/mh3ydW8/Capture.png" text="Obtenez plus de trafic sur votre site, plus de clients et plus de visibilité en ligne grâce à des services de référencement puissants et précis." />
                <DigitalService title="Social Media Management" icon="https://i.ibb.co/FstQ1mJ/Capture.png" text="Créez et gérez des campagnes  performantes et commencez à développer
une base de fans dédiés à travers un Marketing organique" />
               
             
            </div>



           
            <Latest />
            <Footer/>
        </div>
    )
}

export default digital_marketing
