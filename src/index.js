import ReactDOM from "react-dom";
//import Stories from "./components/Stories";
import Topo from "./components/Topo"
import Feed from "./components/Feed"
//import TopoMobi from "./components/TopoMobi";

function App(){
    return(
       <div>
            <Topo />
            <Feed />
    <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div> 
    )
}
    


ReactDOM.render(<App />, document.querySelector(".root"));