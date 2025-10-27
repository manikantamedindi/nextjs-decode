import { promises } from "dns";

export default async function UserDetails({ params }: {params: Promise<{id: string}>}){
    const id = await params;
    console.log(id);
    return (
        <div>
            <h1>Showing Details for User {id.id}</h1>
        </div>
    )
}