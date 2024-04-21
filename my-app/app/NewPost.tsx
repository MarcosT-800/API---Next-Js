import { revalidateTag } from "next/cache";

export function AddTagUpdate(){
    async function handleCreateTag(form: FormData) {
        'use server'

        const slug = form.get('slug')

        if(!slug) {
            return
        }

        await fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: 'POST',
            body: JSON.stringify({
                slug,
            })
        })
        revalidateTag('get-tags')
    }

    return (
        <form action={handleCreateTag} method="POST">
            <input type="text" name="slug" placeholder="Slug da tag" />
            <button type="submit">Criar tag</button>
        </form>
    )
}