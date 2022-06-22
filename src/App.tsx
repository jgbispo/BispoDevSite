import {Header} from "./component/Header";
import {Welcome} from "./component/Welcome";
import {Bio} from "./component/Bio";
import {Techs} from "./component/Techs";

function App() {
    return (
        <div className="flex items-center flex-col min-h-screen">
            <Header/>
            <div className="py-12 items-center">
                <Welcome/>
            </div>
            <div className="px-24 max-w-screen-2xl flex-col flex gap-12">
                <Bio/>
                <Techs/>
            </div>
        </div>
    )
}

export default App
