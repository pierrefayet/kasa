import React from 'react';
import './homepage.scss';
import Header from "../../component/header/Header";
import Footer from '../../component/footer/Footer';
import banniere_home from "../../asset/banniere_home.png"
import data from '../../data/logements.json';
import HousingCard from '../../component/HousingCard/HousingCard';
import MainBanner from '../../component/Mainbanner/MainBanner';


export default function Homepage() {
    return (
        <div>
            <Header />
            <MainBanner imagePath={banniere_home}
            altImage='paysage de falaise au bord de mer'
            textContent='Chez vous, partout et ailleurs'
            />
                <main className="container_home">
                    {data.map(card => (
                        <HousingCard key={card.id} item={card} />
                    ))}
                </main>
            <Footer />
        </div>
    );
}