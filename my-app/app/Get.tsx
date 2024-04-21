export async function Tags() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return (
       <ul>
        {data.map((item: any) => <li key={item.id}>{item.id}</li>)}
       </ul>
    )
}