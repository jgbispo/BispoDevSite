import {Header} from "./component/Header";
import {Welcome} from "./component/Welcome";

function App() {
    return (
        <div className="flex  items-center flex-col min-h-screen">
            <Header/>
            <main className="py-16 items-center">
                <Welcome/>
            </main>
        </div>
    )
}

export default App
