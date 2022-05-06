import ReactDOM from "react-dom";
import Stories from "./components/Stories";
import Topo from "./components/Topo"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import TopoMobi from "./components/TopoMobi";

function App(){
    return(
        <div>
        <Topo />
        <Stories />
        <Feed />
        <Sidebar />
        <TopoMobi />
        </div>
    )
}
    


ReactDOM.render(<App />, document.querySelector(".tudo"));