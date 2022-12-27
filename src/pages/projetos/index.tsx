import Head from "next/head";
import styles from './styles.module.scss';
import ProjectImage from "../../../public/images/AmbientBarbearia.png"
import ProjectDolar from "../../../public/images/ConversorDolar.png"
import Image from 'next/image'
import Link from "next/link";


export default function Projetos(){
    return(
        <>
            <Head>
                <title>Projetos</title>
            </Head>
            <main>
                <div className={styles.titleContent}>
                    <h1 >
                        Principais <span>Projetos</span>
                    </h1>
                </div>

                <section className={styles.projectsContainer}>
                    <div className={styles.projContent}>
                        <Image 
                            src={ProjectImage} 
                            width={290} 
                            height={180} 
                            quality={100} 
                            placeholder='blur'
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8cpenHgAGyAJOaI3nMAAAAABJRU5ErkJggg=="
                            alt="Projeto barbearia" 
                        />
                        <div className={styles.techs}>
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <span className={styles.spanName}>Nome do Projeto</span>
                        <h2>Ambient-Barbearia</h2>
                        <a href="https://ambientbarbearia.vercel.app/">
                            <span>
                               Ver Projeto 
                            </span> 
                        </a>
                    </div>
                    <div className={styles.projContent}>
                        <Image 
                            src={ProjectDolar} 
                            width={290} 
                            height={180} 
                            quality={100} 
                            placeholder='blur'
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8cpenHgAGyAJOaI3nMAAAAABJRU5ErkJggg=="
                            alt="Projeto barbearia" 
                        />
                        <div className={styles.techs}>
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <span className={styles.spanName}>Nome do Projeto</span>
                        <h2>Conversor de Dolar</h2>
                        <a href="https://consvertmoney-6fg2wvxwp-mauricio-br182.vercel.app/">
                        <span>
                            Ver Projeto 
                        </span> 
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}