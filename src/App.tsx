import {Header} from "./component/Header";
import {Welcome} from "./component/Welcome";
import {Bio} from "./component/Bio";
import {Techs} from "./component/Tech/Techs";
import {Works} from "./component/Work/Works";
import {SocialContainer} from "./component/Social/SocialContainer";

function App() {
    return (
        <div className="flex items-center flex-col min-h-screen">
            <Header/>
            <div className="py-6 items-center">
                <Welcome/>
            </div>
            <div className="px-24 max-w-[1280px] flex-col flex gap-3">
                <Bio/>
                <Techs/>
                <Works/>
                <SocialContainer />
            </div>
        </div>
    )
}

export default App
