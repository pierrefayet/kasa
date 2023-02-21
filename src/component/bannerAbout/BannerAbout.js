import "./Banner.scss";
import banniere_home from "../../asset/about.png"

export default function Banner() {
    return (
        <div className="banner_about">
            <img className="banner_about-background" src={banniere_home} alt="paysage d'une vallée entourée de montagne"></img>
        </div>
    );
}