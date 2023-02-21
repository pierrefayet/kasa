import "./banner.scss";
import banniere_home from "../../asset/banniere_home.png"

export default function Banner() {
    return (
        <div className="banner_home">
            <img className="banner_home-background" src={banniere_home} alt="paysage de falaise au bord de mer"></img>
            <p className="banner_home-text">Chez vous, partout et ailleurs</p>
        </div>
    );
}