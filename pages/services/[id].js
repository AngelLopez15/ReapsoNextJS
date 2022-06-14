import Head from "next/head";

const Service = (props) => {
  const { service } = props;
  return (
    <div>
      <Head>
        <title>{ service.name } | Mi sitio con NEXT</title>
      </Head>
      <h1>{ service.name }</h1>
      <p>{ service.detail }</p>
    </div>
  )
}

// Como estamo haciendo un componente que va a funcionar para varias paginas
// NEXT necesita saber cuantas paginas y para eso esta la funcion getStaticPaths
// la cual contendra todo el listado de paths que necesita crear.

export async function getStaticProps(context) {
  const api = process.env.API_URL 

  // id es una propiedad que podemos destructurar de params que a su vez es una propiedad del context
  const { id } = context.params
  const resp = await fetch(`${api}/services/${id}`)
  const service = await resp.json()

  return {
    props: {
      service
    }
  }
}

export async function getStaticPaths() {
  // la funcion getStaticPaths necesita retornar dos parametro, el arreglo de paths que es el arreglo
  // de las paginas que debe de generar y un fallback que en este caso es un booleano en true.
  // el arreglo de paths debe ser un arreglo de objetos
  // Para contruir el paths de forma dinamica seria decirle al backend que nos devuelva un endpoint 
  // con solo los id de todas las rutas que tenemos
  // El id de los params siempre debe de ser un string
  // El arreglo paths es importa ya que NEXT puede de esta manera pre renderizar las paginas, generandolas
  // desde el servidor al momento de hacer el build
  return {
    paths: [
      {
        params: {
          id: "1"
        }
      },
      {
        params: {
          id: "2"
        }
      },
      {
        params: {
          id: "3"
        }
      },
    ],
    fallback: true
  }
}

export default Service