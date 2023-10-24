import React from 'react';
import candyland from '../assets/img/candyland.png';
import danpak from '../assets/img/danpak.png';
import gips from '../assets/img/gips.png';
import hilal from '../assets/img/hilal.png';
import nisar from '../assets/img/nisar.png';
import paxys from '../assets/img/paxys.png';
import sm from '../assets/img/sm.png';
import volka from '../assets/img/volka.png';
import Marquee from 'react-fast-marquee';

const Clients = () => {
	const clients = [
		danpak,
		candyland,
		gips,
		hilal,
		nisar,
		paxys,
		sm,
    volka
	];
	return (
		<div className="relative z-10">
			<div className="container">
				<h1 className="md:text-5xl text-3xl font-heading font-bold text-center">
					Our Clients
				</h1>
				<div className='mt-8'>
					<Marquee pauseOnHover={true}>
						<div className="flex items-center gap-x-10">
							{clients.map((row, idx) => (
								<img src={row} key={idx} className="w-[200px]" />
							))}
						</div>
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default Clients;
