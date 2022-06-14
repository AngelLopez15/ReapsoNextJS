import Image from "next/image";

export default function Home() {
  // NEXT nos provee un componente optimizado para utilizar imagenes.
  // Lo que necesitamos hacer es si usamos imagenes dentro de nuestro proyecto
  // es crear una carpeta images dentro de la carpeta public
  // importar el componente "Image" y la prop src solo necesita la "/" para que sepa
  // que debe entrar a la carpeta public
  // Este componente tambien necesita que le pasemos el width y el height
  // tambien necesitara una prop "placeholder" esta nos servira para que antes de que cargue la imagen
  // ya exista "algo" osea estara una imagen precargada, se sugiera que sea la misma imagen pero con un menor
  // tamaño y calidad
  return (
    <section>
      <h1>Bienvenidos al mejor HOME de la web</h1>
      <div>
        <Image 
          src="/images/laptop.jpg" 
          alt="laptop" 
          width={ 3882 }
          height={ 2584 }
          placeholder="blur"
          blurDataURL="/images/laptopTiny.jpg"
        />
      </div>
    </section>
  )
}
