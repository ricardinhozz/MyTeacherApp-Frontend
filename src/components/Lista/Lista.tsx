import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { FormatadorService } from "../../services/FormatadorService"
import { ListaStyled, ItemLista, Foto,Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}


const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ?
            ( 
            <ListaStyled>
            {props.professores.map(professor => (
                <ItemLista key={professor.id}>
                <Foto src={professor.foto}></Foto>
                <Informacoes>
                    <Nome>{professor.nome}</Nome>
                    <Valor>{ FormatadorService.valorMonetario(professor.valor_hora)}</Valor>
                    <Descricao>{FormatadorService.LimitarTexto(professor.descricao,30)}</Descricao>
                    <Button onClick={() => props.onSelect(professor)} sx={{ widht: '70%' }}>Marcar aula com {professor.nome}!</Button>
                </Informacoes>
            </ItemLista>
            ))}
        </ListaStyled>
            ) : (
                <ListaVazia>
                    Nenhum item encontrado!
                </ListaVazia>
            ) }
        </div>
    )
}



export default Lista