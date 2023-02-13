import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { apiService } from "../../services/apiServices";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([])
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    
    
        useEffect( () => {
            apiService.get('/professores').then((resposta) => {
                setListaProfessores(resposta.data)
            })
        },[])

        function marcarAula(){
            if (professorSelecionado !== null){
                if(validacaoDadosAulas()){
                  apiService.post('/professores/' + professorSelecionado.id + '/aulas', {
                  nome,email
                  }).then( () => {
                      setProfessorSelecionado(null)
                      alert('Aula cadastrada!')
                  }).catch( (err) => {
                    alert('Algo deu errado ao se cadastrar na aula!' + err.response?.data.message)
                  })
                }else{
                  alert('Preencha os campos corretamente.')
                }
            }
        }

        function validacaoDadosAulas(){
            return nome.length > 0 && email.length > 0
        }


      return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula
      }

}