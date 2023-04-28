import Image from "next/image";
import Link from "next/link";
import * as s from "./style";
const items = {
    menu: [
        {
            name: 'Painel de Controle',
            href: '/dashboard-client/control-panel',
            icon: '/assets/images/Painel-de-Controle.svg'
        },
        {
            name: 'Perfil',
            href: '/dashboard-client/profile',
            icon: '/assets/images/profile.svg'
        },
        {
            name: 'Segurança',
            href: '/dashboard-client/security',
            icon: '/assets/images/Segurança.svg'
        },
        {
            name: 'Carteira',
            href: '/dashboard-client/wallet',
            icon: '/assets/images/carteira.svg'
        },
        {
            name: 'Cadastro complementar',
            href: '/dashboard-client/complementary-registration',
            icon: '/assets/images/Complete-cadastro.svg'
        },
        {
            name: 'MKT Place Personalizado',
            href: '/dashboard-client/mkt-place-custom',
            icon: '/assets/images/MKT-Place.svg'
        },
        {
            name: 'Configurações',
            href: '/dashboard-client/settings',
            icon: '/assets/images/Configurações.svg'
        },
        {
            name: 'Sair',
            href: '/dashboard-client/complementary-registration',
            icon: '/assets/images/Integração.svg'
        }
    ],
}
const MenuAside = () => {
    return (
        <s.Container>
            {items.menu.map((node, index) => (
                <s.Items key={index}>  
                    <Image src={node.icon} height={24} width={24} alt=""  />
                    <Link  href={node.href}>{node.name}</Link>
                </s.Items>
            ))}
        </s.Container>
    )
}
export default MenuAside