import {Work} from "./Work";
import {gql, useQuery} from "@apollo/client";

const GET_WORKS_QUERY = gql(`
query {
    works{
    id
    photoUrl
    url
    title
    }
  }
`)

interface WorksResponse {
    works: Array<{
        id: string,
        title: string,
        url: string,
        photoUrl: string
    }>
}

export function Works() {

    const {data} = useQuery<WorksResponse>(GET_WORKS_QUERY)

    return (
        <div className="flex flex-col gap-3">
            <p className="text-2xl">Works</p>
            <div className="flex flex-row gap-1">
                {data?.works.map(work => {
                    return <Work key={work.id}
                                 title={work.title}
                                 urlImg={work.photoUrl}
                                 url={work.url}
                    />
                })}
            </div>
        </div>
    )
}