import {GithubLogo, InstagramLogo, LinkedinLogo} from "phosphor-react";

interface Social {
    socialName: string,
    username: string,
    url: string
}

export function Social(props: Social) {

    return (
        <div className="ml-8 p-4">
            <a href={props.url} target="_blank" className="flex gap-1 justify-start">
                {selectIcon(props.socialName)}
                <p className="text-[18px] font-semibold">@{props.username}</p>
            </a>
        </div>
    )
}

function selectIcon(name: String){
    switch (name) {
        case "github":
            return <GithubLogo size={30}/>
        case "linkedin":
            return <LinkedinLogo size={30}/>
        case "instagram":
            return <InstagramLogo size={30}/>
    }
}