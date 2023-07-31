//Componentes
import Header from "../components/Header"
import SimpleMap from "./Maps"
//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import foto from "../assets/img/logo.png"
import perfil from "../assets/img/perfil.png"
import banner from "../assets/img/banner.jpeg"
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
             <div className={styles.banner}>
               <img src={banner} alt="Banner" />
             </div>
             <div className={styles.info}>

             <img src={perfil} alt="Foto" className={styles.fotoperfil} />

              <p>
                +
              </p>
              <p>
                +
              </p>
              <p>
                +
              </p>

             </div>
           
             <div className={styles.informacion}>
              <h3>Carlos Acuña</h3>
              
              <button>
              Seguir
              </button>
             </div> 


           </div>
           <div className={styles.perfilmascota}>

           </div>
           <div className={styles.maps2}>
             <SimpleMap />
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
           <SimpleMap />
         </section>
       </div>
    </>
  )
} 

export default Home
