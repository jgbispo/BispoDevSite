import {Social} from "./Social"
import {gql, useQuery} from "@apollo/client";

const GET_SOCIALS_QUERY = gql`
query {
   socials {
    id
    socialName
    socialUrl
    socialUsername
  }
}

`

interface GetTechsQueryResponse {
    socials: Array<{
        id: string,
        socialName: string,
        socialUrl: string,
        socialUsername: string,
    }>
}

export function SocialContainer() {

    const {data} = useQuery<GetTechsQueryResponse>(GET_SOCIALS_QUERY)

    return (
        <div className="flex flex-col gap-3">
            <p className="text-2xl">How to find me</p>
            <div className="flex flex-row gap-1">
                {data?.socials.map(social => {
                    return <Social
                        key={social.id}
                        socialName={social.socialName}
                        username={social.socialUsername}
                        url={social.socialUrl}/>
                })
                }
            </div>
        </div>
    )
}