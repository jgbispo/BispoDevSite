interface Work {
    title: string,
    urlImg: string,
    url: string
}

export function Work(props: Work) {
    return (
        <div className="ml-8 p-4 text-center">
            <a href={props.url} target="_blank" className="flex flex-col gap-3">
                <img className="rounded-3xl w-[250px] h=[150px]" src={props.urlImg}/>
                <p>{props.title}</p>
            </a>
        </div>
    )
}