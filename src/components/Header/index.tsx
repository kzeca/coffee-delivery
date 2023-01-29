import { CartButton, HeaderContainer, LocationContainer } from "./styles"
import appLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    const cartItems: number = 10
    return (
        <HeaderContainer>
            <img src={appLogo} />
            <div>
                <LocationContainer>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </LocationContainer>
                <CartButton onClick={() => console.log("Clique")}>
                    <ShoppingCart size={22} weight="fill"/>
                    { cartItems > 0 && (<div>{cartItems}</div>)}
                </CartButton>
            </div>
        </HeaderContainer>
    )
}