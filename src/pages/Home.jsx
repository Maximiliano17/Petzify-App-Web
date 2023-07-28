//Componentes
import Header from "../components/Header"
//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import foto from "../assets/img/logo.png"
//Librerias
import SwitchSelector from "react-switch-selector";

function Home() {
  const options = [
    {
        label: <span>Seguidos</span>,
        value: {
             foo: true
        },
        selectedBackgroundColor: "#fff",
    },
    {
      label: <span>Otros</span>,
      value: {
           foo: true
      },
        selectedBackgroundColor: "#fff"
    }
 ];
 
 const onChange = (newValue) => {
     console.log(newValue);
 };
 
 const initialSelectedIndex = options.findIndex(({value}) => value === "bar");
 
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
               <section className={styles.campos}>
               <img src={foto} />
                <input placeholder="     Publica Algo" />   
               </section>
             </div>
             <section className={styles.filtros}>

                  <div className={styles.opciones}>
                  <SwitchSelector
                      onChange={onChange}
                      options={options}
                      initialSelectedIndex={initialSelectedIndex}
                      backgroundColor={"#73A073"}
                      fontColor={"#000"}
                  />
                  </div> 
               </section>
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
