import Banner from "../components/Banner";
import UIUX from "../components/UIUX";

import  styles  from "../styles/Home.module.scss";
import Fade from 'react-reveal/Fade';
import Tools from "../components/Tools";

import DigitalService from "../components/DigitalService";
import Galerie from "../components/Galerie";
import Technolgie from "../components/Technolgie";

import Image  from "next/image";
import Latest from "../components/Latest";
import Footer from "../components/Footer";

function apps_platforms() {
    return (
        <div>
            <Banner source="https://i.ibb.co/Nn2xn0F/Application-Development-Banner-code.png" text="Solutions numériques avec une approche de développement centrée sur lutilisateur" font={"text-3xl"} size="cover"  color={"text-white"} />



            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Notre Approche DInnovation</h3>

            <div className=" w-10/12 mx-auto cursor-pointer ">
                <ul className={styles.process}>
                    <li className={styles.process__item}>
                      <Fade bottom duration={1000} >
                            <span className={styles.process__number}>1</span>
                      </Fade>
                      
                        <span className={styles.process__title}>Search</span>
                        <span className={styles.process__subtitle}>We analyse your problem and develop a strategy</span>
                    </li>

                    <li className={styles.process__item}>
                        <Fade bottom duration={1000} delay={500} >
                            <span className={styles.process__number}>2</span>
                     </Fade>
                      
                        <span className={styles.process__title}>Wireframing</span>
                        <span className={styles.process__subtitle}>We analyse your problem and develop a strategy</span>
                    </li>

                    <li className={styles.process__item}>
                        <Fade bottom duration={1000} delay={700} >
                            <span className={styles.process__number}>3</span>
                       </Fade>
                      
                        <span className={styles.process__title}>Prototyping</span>
                        <span className={styles.process__subtitle}>We analyse your problem and develop a strategy</span>
                    </li>

                    <li className={styles.process__item}>
                        <Fade bottom duration={1000} delay={900} >
                            <span className={styles.process__number}>4</span>
                     </Fade>
                      
                        <span className={styles.process__title}>Optimization</span>
                        <span className={styles.process__subtitle}>We analyse your problem and develop a strategy</span>
                    </li>
                </ul>
            </div>
            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Design UI/UX</h3>



            <Fade right duration={2000}>
                <UIUX Tcolor="from-yellow-400" icon="https://i.ibb.co/3hxYHsb/Capture.png" title="Développement de lexpérience utilisateur (UX)" text="Nos services de développement dapplications UX sont conçus pour améliorer lexpérience globale des utilisateurs et garantir une satisfaction totale des clients lorsquils interagissent avec votre application." Bcolor="to-pink-400" side="right-96" ring="ring-yellow-200" />
            </Fade>

            <Fade left duration={2000}>
                <UIUX Tcolor="from-blue-400" icon="https://i.ibb.co/YN9rJXq/Capture.png" Bcolor="to-purple-500" side="left-96" ring="ring-blue-200" title="Développement de lexpérience utilisateur (UX)" text="Nos services de développement dapplications UX sont conçus pour améliorer lexpérience globale des utilisateurs et garantir une satisfaction totale des clients lorsquils interagissent avec votre application." />
            </Fade>

            <Fade right duration={2000}>
                <UIUX Tcolor="from-indigo-400" icon=""  Bcolor="to-green-400" side="right-96" ring="ring-indigo-200" title="Développement de lexpérience utilisateur (UX)" text="Nos services de développement dapplications UX sont conçus pour améliorer lexpérience globale des utilisateurs et garantir une satisfaction totale des clients lorsquils interagissent avec votre application." />
            </Fade>

            <h3 className="font-bold text-blue-900 text-4xl  mt-52 mb-24 mx-auto w-9/12 " >Outils et technologies UI/UX que nous utilisons</h3>

            <div className="grid place-items-center  mx-auto  w-screen p-10 bg-gradient-to-t from-blue-900 ">

            <Fade left duration={1000} delay={500}>
                    <div className="flex justify-around w-11/12 mb-20">

                        <Tools icon="https://i.ibb.co/Pzvc12n/Capture.png" title="Adobe Xd" />
                        <Tools icon="https://i.ibb.co/9ZFK5cQ/Capture.png" title="Figma" />
                    </div>
            </Fade>
                <Fade right duration={1000} delay={500}>
                    <div className="flex justify-around w-11/12 mb-20">
                        <Tools icon="https://i.ibb.co/Bq34Nhr/Capture.png" title="Axure" />
                        <Tools icon="https://i.ibb.co/9tKC98f/Capture.png" title="Adobe Photoshop" />
                    </div>
              </Fade>
             
                
            </div>


            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Developpement Mobile</h3>

            <div className="flex justify-around mb-28 text-xl">
                <p className="w-4/12 mt-20 text-gray-400 " >
                    Nous fournissons des services de développement dapplications mobiles à cycle complet. Cela comprend une analyse commerciale experte, la conception et le développement de votre application mobile, de lidée au lancement, lintégration du nouveau produit dans votre infrastructure et loptimisation et la mise à léchelle sur demande.


</p>

                <Image src="https://i.ibb.co/n6xtX96/mobile-app-dev.png" height={500} width={600} alt="" />


            </div>
            <h3 className="font-bold text-blue-900 text-4xl  mt-64 mb-52 mx-auto w-9/12 " >Nos services de développement dapplications mobiles</h3>
             
            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/gZ5t9R9/Capture.png" title="Custom Mobile App Development" text="Nous avons  dexpérience dans la création dapplications mobiles personnalisées et riches en fonctionnalités. Notre approche de développement out-of-the-box fait de nous la meilleure société de développement dapplications mobiles." />

                <DigitalService title="App Technology Consulting" icon="https://i.ibb.co/QkzwR2P/Capture.png" text="Notre équipe de consultants en applications mobiles offre des conseils techniques afin que vous puissiez mettre en œuvre la pile technologique la plus appropriée et une architecture système bien pensée pour votre application mobile." />


                <DigitalService title="Hybrid App Development" icon="https://i.ibb.co/N70nYZz/Capture.png" text="Choisissez des solutions de développement dapplications multiplateformes et obtenez des applications hybrides riches en fonctionnalités qui fonctionnent parfaitement sur les plateformes iOS et Android. Economisez également le temps et les coûts de développement de vos applications." />


            </div>


            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/2jKZDLY/Capture.png" title="Native App Development" text="Notre meilleure société de développement dapplications mobiles en Inde propose un cycle complet de développement dapplications mobiles natives sécurisées, évolutives et dotées de nombreuses fonctionnalités, connues pour leurs performances optimales et leurs fonctions avancées." />

                {/*<DigitalService title="Wearable Apps Development" icon="https://i.ibb.co/Lx2Bv0j/Capture.png" text="Obtenez des applications iWatch, des applications Android wear et des applications Google glass qui fonctionnent parfaitement sur nimporte quel appareil. Nous avons créé des milliers dapplications pour appareils à porter selon les besoins spécifiques des entreprises." />*/}


                <DigitalService title="Digital Transformation" icon="https://i.ibb.co/rHPQT7k/Capture.png" text="Nous aidons les entreprises à se transformer numériquement grâce à des technologies avancées telles que lIA, le cloud computing, lIoT, et plus encore. Notre équipe de développement dapplications mobiles a transformé des milliers dentreprises dans le monde entier." />


            </div>
            



            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Web Developpement</h3>
          
           
            <div className="flex justify-around mt-64 ">
                <p className="w-4/12 mt-20 text-gray-400 text-xl" >
                    Votre site web est votre vitrine, alors représentez votre entreprise avec un site web qui montre la vraie qualité. Nos développeurs web sont prêts à travailler avec votre entreprise et à créer des plateformes interactives avec lesquelles les visiteurs de votre site pourront sengager et convertir.


                </p>

                <Image src="https://i.ibb.co/27mhRFN/Web-Design-Services.jpg" height={500} width={600} alt="" />


            </div>
           

            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-52 mx-auto w-9/12 " >Nos services de développement Web</h3>

            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/pPgjCWP/Capture.png" title="Custom Web Applications Development" text="Obtenez des services de développement dapplications Web sécurisés, évolutifs, performants et dotés de nombreuses fonctionnalités, adaptés à différents secteurs verticaux, à des prix conformes à ceux du marché." />

                <DigitalService title="Full Stack Development" icon="https://i.ibb.co/rGn1SDc/Capture.png" text="Il nest pas nécessaire dengager une équipe de développement frontale et dorsale séparément. Nous fournissons un développement complet sur MEAN, MERN, PHP + Vue.js, .Net + JS, pour nen citer que quelques-uns." />


                <DigitalService title="Third Party Integration" icon="https://i.ibb.co/ymz98kj/Capture.png" text="Newgen est une société renommée de développement dapplications web en Inde qui crée des API, des connecteurs de données personnalisés, des services web et des intergiciels pour une intégration sécurisée avec des solutions tierces." />


            </div>


            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/JqhWh9T/Capture.png" title="Software Product Engineering" text="Confiez lingénierie de vos produits logiciels à Newgen et bénéficiez dune multitude davantages. Nous fournissons des produits MVP et SaaS selon les besoins spécifiques de nos clients et de leurs entreprises." />

                <DigitalService title="Digital Transformation" icon="https://i.ibb.co/dKmJzbs/Capture.png" text="Nous aidons les entreprises à se transformer numériquement grâce à des technologies avancées telles que lIA, le cloud computing, lIoT, et plus encore. Notre équipe de développement web a transformé des milliers dentreprises dans le monde entier." />


                


            </div>


            <Galerie/>


            <h3 className="font-bold text-blue-900 text-4xl  mt-32 mb-24 mx-auto w-9/12 " >Nos Technologies de développement </h3>
            
            <Technolgie />
                
                <Latest />
                <Footer />
            
            
        </div>
    )
}

export default apps_platforms
