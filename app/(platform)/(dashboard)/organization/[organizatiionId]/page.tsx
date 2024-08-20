import { auth } from "@clerk/nextjs/server"

const OrganizationIdPage = () => {
    const {userId , orgId} = auth();
    return(
        <div className="">
            OrganisationPageMadhav
            user id - {userId}
            org - {orgId}
        </div>
    )
}

export default OrganizationIdPage