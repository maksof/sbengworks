import About from '@/components/About';
import Contactus from '@/components/Contactus';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import { Element } from 'react-scroll';
const Home = () => {
	return (
		<>
			<Element name="home">
				<Hero />
			</Element>
			<Element name="about">
				<About />
			</Element>
			<Element name="services">
				<Services />
			</Element>
			<Element name="projects">
				<Projects />
			</Element>
			<Element name="contactus">
				<Contactus />
			</Element>
		</>
	);
};

export default Home;
