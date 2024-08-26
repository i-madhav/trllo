import { auth } from "@clerk/nextjs/server"

const OrganizationIdPage = () => {
    const {userId , orgId} = auth();
    return(
        <div className="">
            OrganisationPageMadhav
        </div>
    )
}

export default OrganizationIdPage