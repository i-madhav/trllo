import { auth } from "@clerk/nextjs/server"

const OrganizationIdPage = () => {
    const {userId , orgId} = auth();
    return(
        <div className="mt-28">
            OrganisationPageMadhav
            user id - {userId}
            org - {orgId}
        </div>
    )
}

export default OrganizationIdPage