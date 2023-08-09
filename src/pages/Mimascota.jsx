//Components
import Header from "../components/Header"
//import Posteos from "../components/Posteos"
//Styles
import styles from "../modules/Mascota.module.css"
//Imagenes
import foto from "../assets/img/logo.png"
import banner from "../assets/img/banner.jpeg"
import mapa from "../assets/iconos/mapa.png"

function Mimascota() {
    return (  
      <>
       <Header />
        <div className={styles.container}> 
            <section className={styles.perfil}>  
              <div className={styles.bannersection}>
                <div className={styles.bannerimagen}>
                 <img src={banner} alt="Banner" />
                    <div className={styles.fotoperfil}>
                        <img src={foto} alt="Foto" />
                    </div>
                </div>
              </div>
              <div className={styles.informacionperfil}>
                <section className={styles.datos}>
                <h1 className={styles.nombreperro}>Ñoqui</h1>
                <div className={styles.datosdelperro}>
                <h2>Tamaño</h2>
                <p>Mediano</p>
                <h2>Raza</h2>
                <p>Sabueso</p>
                </div>
                </section>
                <section className={styles.button}> 
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  </button>
                </section>
              </div>
            </section>
            <div className={styles.posteos}>
               {/*<Posteos />*/}
            </div>
        </div>
      </>
    )
  }
  
  export default Mimascota
  