import Head from 'next/head'
import styles from '../styles/styles.module.scss'
import Image from 'next/image'
import {FiArrowRight,} from 'react-icons/fi'
import {FaReact,} from 'react-icons/fa'
import {SiTypescript, SiNextdotjs, SiGraphql, SiSass, SiJavascript} from 'react-icons/si'
// import {perfilPhoto} from '../../public/perfilPhoto'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MauriciobrDev</title>
      </Head>
      <main className={styles.container}>
          <div className={styles.headerContainer}>
            <section className={styles.actText}>
              <h1>
                <span>Desenvolvedor Web </span>
                designer e criador de sites com tecnologia de ponta
              </h1>
              {/* <p>Olá eu sou o Mauricio da Silva Santos, apaixonado por tecnologia desde sempre, criei o habito de aprender a programar e busco sempre aprender cada dia mais. trabalho na parte de front-end, um pouco das minhas habilidades em programação consiste em criações de sites responsivos, designs inteligentes, e logicas de programação, participei na criação de varios modelos de sites como Landing Pages, Dashboards de gestão de finanças, aplicação de conversão de moeda, Blogs com serviços de cms, alem de ter experiencia com Firebase, Apis rest, autenticação e Apis de pagamentos </p> */}
              <p>
                Criação e designs de WebSites totalmente responsivos para varios tipos de telas, ultilizando das melhores tecnologias do mercado, criação de sites para pequenos negocios, Blogs, site de finanças e etc. <br />
                entre em contato...
              </p>
              <button>
                Contato...  
                <FiArrowRight size={15} color={'#000'}></FiArrowRight>
              </button>
            </section>
            
            <div className={styles.box}>
              {/* <Image src={perfilphoto} alt=''></Image> */}
              <img width={360} src="https://avatars.githubusercontent.com/u/77470832?v=4" alt="Foto perfil Mauriciobr Dev" />
            </div>

          </div>
          <div className={styles.lineSeparator}>

          </div>

          <section className={styles.techsContainer}>
            <h2>Minhas tecnologias</h2>
            <ul className={styles.techs}>
              <li><FaReact size={20} color={'var(--gray)'}></FaReact><span>ReactJs</span></li>
              <li><SiTypescript size={20} color={'var(--gray)'}></SiTypescript><span>TypeScript</span></li>
              <li><SiNextdotjs size={20} color={'var(--gray)'}></SiNextdotjs><span>NextJs</span></li>
              <li><SiGraphql size={20} color={'var(--gray)'}></SiGraphql><span>GraphQl</span></li>
              <li><SiSass size={20} color={'var(--gray)'}></SiSass><span>Sass</span></li>
            </ul>
          </section>

          <section className={styles.advantageContainer}>

          </section>
      </main>
    </>
  )
}
