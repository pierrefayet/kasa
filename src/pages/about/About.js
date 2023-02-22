import React from 'react';
import './about.scss';
import '../../sass/base/setting.scss';
import Header from '../../component/header/Header';
import Banner from '../../component/bannerAbout/BannerAbout';
import Collapse from '../../component/collapse/collapse';
import VectorCollapse from '../../asset/VectorCollapse.png';
import Footer from '../../component/footer/Footer';
import data from '../../data/about.json';

export default function About() {
    const collapseList = data.map((collapse, index) => {
        return (
            <div key={index}>
            <Collapse
                title={collapse.title}
                content={collapse.content}
                arrowImage={VectorCollapse}
            >
            </Collapse>
            </div>
        );
    });

    return (
        <div>
            <Header />
            <Banner />
            <main className="about-container">
                {collapseList}
            </main>
            <Footer />
        </div>
    );
}


