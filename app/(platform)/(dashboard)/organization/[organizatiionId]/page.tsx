import { db } from "@/lib/db";

const OrganizationIdPage = () => {
    async function create(formData:FormData) {
        "use server"
        
        const title = formData.get("title") as string;
        await db.board.create({
            data:{
                title
            }
        });
    }
    
    return(
        <div className="">
            <form action={create}>
                <input type="text" id="title" name="title" required placeholder="Enter a board title" className=" border-black border p-1" />
            </form>
        </div>
    )
}

export default OrganizationIdPage