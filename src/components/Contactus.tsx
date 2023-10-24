import { Button } from './ui/button';
import { Icon } from '@iconify-icon/react/dist/iconify.js';

const Contactus = () => {
	return (
		<>
			<div className=" bg-slate-100 py-32">
				<div className="container sm:flex items-center">
					<div className="w-full  px-4 md:py-20 py-10 lg:max-w-md md:max-w-xs sm:max-w-[240px] relative z-10  bg-primary rounded-2xl">
						<div className="flex flex-col text-white  ">
							<h1 className="font-bold font-heading uppercase lg:text-4xl text-3xl">
								CEO Message
							</h1>
							<p className="text-white/80 text-base">
								We not only measure our excellence by the technical advancements
								we have but by the level of our client's satisfaction.We take
								full responsibility for the projects and implement all the
								expertise we have. This is how the prestige and credibility of
								our company have been built over years..
							</p>

							<div className="flex my-4 w-2/3 lg:w-1/2">
								<div className="flex flex-col">
									<Icon
										icon={'la:map-marked-alt'}
										className="pt-1 pr-2 text-xl"
									/>
								</div>
								<div className="flex flex-col">
									<h2 className="text-2xl font-heading">Main Office</h2>
									<p className="text-white/80">
										plot no 673/B 5/E Orangi Town Karachi. pakistan
									</p>
								</div>
							</div>

							<div className="flex my-4 w-2/3 lg:w-1/2">
								<div className="flex flex-col">
									<Icon
										icon={'ic:baseline-phone'}
										className="pt-1 pr-2 text-xl"
									/>
								</div>
								<div className="flex flex-col">
									<h2 className="text-2xl font-heading">Call Us</h2>
									<p className="text-white/80">Tel: +92 300 8268 427</p>
									<p className="text-white/80">Tel: +92-3248080179</p>
									<a
										href="sb.engineering@hotmail.com"
										className="text-white/80 cursor-pointer block whitespace-nowrap"
									>
										E-mail: sb.engineering@hotmail.com
									</a>
								</div>
							</div>

							<div className="flex my-4 w-2/3 lg:w-1/2">
								<a
									href="https://www.facebook.com/sbenginer"
									target="_blank"
									className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
								>
									<Icon
										icon={'eva:facebook-fill'}
										className="text-primary text-2xl"
									/>
								</a>
								<a
									href="https://www.youtube.com/@sbengineering9426"
									target="_blank"
									className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
								>
									<Icon
										icon={'entypo-social:youtube'}
										className="text-primary text-2xl"
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full   md:-ml-3 sm:mt-0 mt-5 bg-white lg:p-8 p-5 rounded-2xl">
						<div className="flex">
							<h1 className="font-bold font-heading uppercase lg:text-5xl md:text-4xl text-3xl">
								Send us a message
							</h1>
						</div>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="First Name*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="Last Name*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="email"
								placeholder="Email*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Phone*"
							/>
						</div>
						<div className="my-4">
							<textarea
								placeholder="Message*"
								className="w-full resize-none h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							></textarea>
						</div>
						<div className="my-2 w-1/2 lg:w-1/4">
							<Button size={'lg'} className="text-base whitespace-nowrap">
								Send Message
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactus;
