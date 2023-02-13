export const FormatadorService = {
    valorMonetario(valor: number): string {
        return (valor.toLocaleString('pt-br', 
        { minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL' }
            )
        )
    },
    LimitarTexto(texto: string, tamanhoMaximo: number): string {
        if(texto.length < tamanhoMaximo){
            return texto
        }else{
            return texto.slice(0,tamanhoMaximo) + '...'
        }
    }

}