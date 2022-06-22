import {Tech} from "./Tech";
import {gql, useQuery} from "@apollo/client";

const GET_TECHS_QUERY = gql`
query {
  techs {
    id
    techName
    techUrl
  }
}

`

interface GetTechsQueryResponse {
    techs: Array<{
        id: string,
        techName: string,
        techUrl: string,
    }>
}

export function Techs() {

    const {data} = useQuery<GetTechsQueryResponse>(GET_TECHS_QUERY)

    return (
        <div className="flex flex-col gap-3 ">
            <p className="text-2xl">Some Tools and Technologies I know</p>
            <div className="flex flex-row gap-1">
                {data?.techs.map(tech => {
                    return <Tech
                        key={tech.id}
                        title={tech.techName}
                        url={tech.techUrl}
                    />
                })}
            </div>
        </div>
    )
}