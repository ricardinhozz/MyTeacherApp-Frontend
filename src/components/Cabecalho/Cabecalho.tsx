import { NextPage } from "next";
import { CabecalhoContaier, Logo } from "./Cabecalho.style";


const Cabecalho = () => {
    return (
    <CabecalhoContaier>
        <div>
            <Logo src="/imagens/myteacher.png" />
        </div>

        <p>Encontre o professor perfeito</p>
    </CabecalhoContaier>
    )
}


export default Cabecalho;