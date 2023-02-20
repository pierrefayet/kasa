
import fullStars from '../../asset/fullStars.png';
import emptyStars from '../../asset/emptyStars.png';

export default  function Star({ rating }) {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        const star = i <= rating ? fullStars : emptyStars;
        stars.push(<img src={star} alt="star" key={i} />);
    }

    return <div className="star">{stars}</div>;
}