import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ImagesSlider from '../components/ImagesSlider';
import Dropdown from '../components/Dropdown';
import Tags from '../components/Tags';
import Stars from '../components/Stars';

export default function RentalDetailsPage() {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const currentRental = loaderData.find((el) => el.id === id);

    document.title = '- KASA - ' + currentRental.title;

    return (
        <>
            <ImagesSlider
                slides={currentRental.pictures}
                currentRental={currentRental}
            />
            <div className='rental-infos'>
                <div className='rental-infos-right'>
                    <div>
                        <h1 className='rental-infos-title'>
                            {currentRental.title}
                        </h1>
                        <h2 className='rental-infos-location'>
                            {currentRental.location}
                        </h2>
                    </div>
                    <div className='tag-infos-container'>
                        <Tags currentRental={currentRental} />
                    </div>
                </div>
                <div className='rental-infos-left'>
                    <div className='name-image-infos'>
                        <h3 className='name-infos'>
                            {currentRental.host.name}
                        </h3>
                        <img
                            className='image-infos'
                            src={currentRental.host.picture}
                            alt='avatar'
                        />
                    </div>
                    <div className='star-container'>
                        <Stars currentRental={currentRental} />
                    </div>
                </div>
            </div>
            <div className='drop-rental-container'>
                <div className='drop-rental'>
                    <Dropdown
                        title={'Description'}
                        text={currentRental.description}
                    />
                </div>
                <div className='drop-rental'>
                    <Dropdown
                        title={'Equipments'}
                        equipements={currentRental.equipments}
                    />
                </div>
            </div>
        </>
    );
}

export function loader() {
    return fetch(window.location.origin + '/rentalsData.json');
}
