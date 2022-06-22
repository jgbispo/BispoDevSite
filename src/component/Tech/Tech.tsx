
interface Tech {
    title: string,
    url: string
}

export function Tech(props: Tech) {
    return (
        <div className="flex text-center flex-col gap-1 ml-8 p-4">
            <img className="rounded-3xl w-[80px] h-[80px]" src={props.url}/>
            <p>{props.title}</p>
        </div>
    )
}