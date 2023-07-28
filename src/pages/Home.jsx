//Componentes
import Header from "../components/Header"
//Styles
import styles from "../modules/Home.module.css"

function Home() {
  return (
    <>
       <Header /> 
       <div className={styles.conteiner}> 
         <section className={styles.leftsection}>
           <div className={styles.perfilinfo}>
             
           </div>
           <div className={styles.mapinfo}>
            
            </div>
         </section>
         <section className={styles.midsection}>
             <div className={styles.crearpublicacion}>
             
             </div>
             <div className={styles.posteo}>
              
             </div>
         </section>
        <section className={styles.rightsection}>

         </section>
       </div>
    </>
  )
} 

export default Home
