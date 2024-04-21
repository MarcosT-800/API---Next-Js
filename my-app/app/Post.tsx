'use client'
import { setDefaultResultOrder } from "dns";
import { useState, FormEvent } from "react"

//faz a hidratação de um componente

export default function AddTag() {
    const [teste, setTeste] = useState('');

    async function criarTags(event: FormEvent) {
        event.preventDefault()
        if (!teste) {
            return
        }

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                teste
            })
        }
        )
    }


    return (
        <form onSubmit={criarTags} method="POST">
            <input type="text" name="teste" placeholder="teste de post" value={teste} onChange={e => setTeste(e.target.value)} />
            <button type="submit">Criar Teste</button>
        </form>
    )
}
