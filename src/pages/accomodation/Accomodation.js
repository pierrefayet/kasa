import './accomodation.scss';
import Header from '../../component/header/Header';
import Carrousel from '../../component/carrousel/Carrousel';
import Footer from '../../component/footer/Footer';
import data from '../../data/logements.json';
import Star from '../../component/stars/star';
import Collapse from '../../component/collapse/collapse';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Accomodation() {
    const { id } = useParams();
    const accomodation = data.find((item) => item.id === id);
    
    if (!accomodation) {
        return <Navigate to="/error/Error" />;
    }
    const rating = parseInt(accomodation.rating);

    return (
        <div>
            <Header />
            <Carrousel pictures={accomodation.pictures} />
            <main className="content">
                <div className="content__header">
                    <div className="content__header--content">
                        <div className="content__header--title-wrapper">
                            <div className="content__header--title">{accomodation.title}</div>
                            <div className="content__header--location">{accomodation.location}</div>
                        </div>
                        <div className="content__buble">
                            <ul>
                                {accomodation.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="content__host">
                        <ul className='content__host--items'>
                            <li className='content__host--items--name'>{accomodation.host.name}</li>
                            <li>
                                <img className='round-image' src={accomodation.host.picture} alt="Host" />
                            </li>
                        </ul>
                        <div className="content__rating">
                            <Star rating={rating} />
                        </div>
                    </div>
                </div>
                <section className='content__accomodation'>
                        <div className="content__collapse-item--description">
                            <Collapse title="Description" content={accomodation.description} arrowImage />
                        </div>
                        <div className="content__collapse-item--equipments">
                            <Collapse title="Équipement" content= {
                                    accomodation.equipments.map((item, index) => {
                                        return <p key={index}>{item}</p>
                                    })} arrowImage>
                            </Collapse>
                        </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
