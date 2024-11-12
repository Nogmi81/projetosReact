import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from "next/link";

export default function Topo() {
  return (
    <header className={estilos['topo']}>
        <div className={estilos['limitar-secao']}>
          <Image src={Logo} alt='Logo' className={estilos['logo']} />

          <nav>
            <Link href='#produtos'>PRODUTOS</Link>
            <Link href='#sobre'>SOBRE</Link>
            <Link href='#contato'>CONTATO</Link>
          </nav>
        </div>
      </header>
  )
}