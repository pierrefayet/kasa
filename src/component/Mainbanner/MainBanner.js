import "./banner.scss";

export default function MainBanner ({ imagePath, altImage, textContent = '' }) {

    return (
        <div className="banner_home">
            <img className="banner_home-background" src={imagePath} alt={altImage}></img>
            {textContent && 
                <p className="banner_home-text">{textContent}</p>
            }
        </div>
    );
}