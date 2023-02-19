import React from 'react';
import './homepage.scss';
import Header from "../../component/header/Header";
import Footer from '../../component/footer/Footer';
import Banner from '../../component/banner/Banner';
import data from '../../data/logements.json';
import HousingCard from '../../component/HousingCard/HousingCard';


export default function Homepage() {
    return (
        <div>
            <Header />
            <Banner />
                <main className="container">
                    {data.map(card => (
                        <HousingCard key={card.id} item={card} />
                    ))}
                </main>
            <Footer />
        </div>
    );
}