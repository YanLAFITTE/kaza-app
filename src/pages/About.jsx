import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import aboutBanner from '../assets/banner-about.png';
// import { useFetch } from '../utils/useFetch';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - A propos';

    return (
        <>
            <Banner banner={aboutBanner} />

            <div>
                {loaderData.map((data, index) => (
                    <Dropdown key={index} title={data.title} text={data.text} />
                ))}
            </div>
        </>
    );
};

export default About;

export function loader() {
    return fetch(window.location.origin + '/aboutData.json');
}
