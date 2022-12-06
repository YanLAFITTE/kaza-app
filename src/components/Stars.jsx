import { IoIosStar } from 'react-icons/io';

const Stars = ({ currentRental }) => {
    const totalStars = 5;
    const activeStars = currentRental.rating;
    const starElements = [...new Array(totalStars)].map((arr, index) => {
        return (
            <IoIosStar
                key={index}
                className={index < activeStars ? 'star-active' : 'star'}
            />
        );
    });

    return starElements;
};

export default Stars;
