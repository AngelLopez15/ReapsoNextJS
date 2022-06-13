import Link from "next/link"

const services = (props) => {
  const {
    services,
  } = props

  return (
    <div>
      <h1>Página de Servicios</h1>
      <ul>
        {
          services.map(service => {
            <li key={ service.id }>
              <Link href={`/services/${service.id}`}>
                { service.name }
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

// Para conectarnos a la API usaremos la funcion de NEXT getStaticProps
// que nos retornara un objeto JSON que contendra las props que recibira nuestro componente
// la funcion debe de ser exportada y asincrona
// NOTA: Estamos opteniendo propiedades estaticas
// Esto significa que cuando hagamos el build de la app estas props se van a generar en el build y
// este ya tendra el listado de servicios y NO! van a cambiar en el front a no ser que se haga un nuevo build
// por que en el momento del build es que se hacen las peticiones.
// Esto se hace por temas de rendimientos para que el front solo se conecte una vez a la Base de datos.
// Es decir se podria apagar el back despues de hacer el build y el front seguira funcionando.
export async function getStaticProps() {

  // haciendo un fetch a la url de la API
  const resp = await fetch("http://localhost:3050/services")
  const services = await resp.json()

  // para aplicar el Incremental site regeneration debemos retornar la propiedad revalidate (su valor siempre debe ser dada en segundo)
  // la cual indica cada cuanto tiempo debe volver a hacer una peticion a la API
  return {
    props: {
      services
    },
    revalidate: 60,
  }
}

export default services