import { useContext } from "react"
import { UserContext } from "../contexts/users"

function Nome(){

    const { alunos, setAlunos } = useContext(UserContext)

    return(
        <div>
            <h3 style={{color: '#ff0000'}}>Bem-viado, {alunos} </h3>
            <button onClick={() => setAlunos('Henrique')}>Trocar nome</button>

        </div>
    )
}

export default Nome