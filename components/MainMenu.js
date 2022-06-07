import Link from "next/link"

const MainMenu = () => {
  // 
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about">
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/services">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu