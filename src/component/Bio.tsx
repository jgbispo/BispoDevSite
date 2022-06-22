import {gql, useQuery} from "@apollo/client";

interface Bio {
    bios: Array<{
        textBio: string
    }>
}

const query = gql(`
query {
  bios {
    textBio
  }
}
`)

export function Bio() {

    const {data} = useQuery<Bio>(query)

    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-[24px]">Summary about me..</h2>
            <p className="text-[18px] ml-8 p-4">{data?.bios[0].textBio}</p>
        </div>
    )
}