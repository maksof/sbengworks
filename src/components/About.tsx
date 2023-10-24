
import about1 from '../assets/img/about1.png';
import about2 from '../assets/img/about2.png';
import satisfaction from '../assets/img/customer-satisfaction.png';
import infrastructure from '../assets/img/infrastructure.png';
import innovation from '../assets/img/innovation.png';
import journey from '../assets/img/journey.png';
const About = () => {
	return (
		<div className="py-20">
			<div className="container">
				<div className="grid grid-cols-7 gap-8 items-center">
					<div className="xl:col-span-4 col-span-7">
						<h1 className="font-heading mb-5 md:text-5xl text-3xl font-bold">
							Established in 1987, Your Trusted Partner in Machinery and
							Confectionery Solutions
						</h1>
						<p className="text-sm text-slate-500 font-medium mb-5">
							SB Engineering, founded in 1987, initially specialized in the
							manufacturing of spare parts for various machines. With unwavering
							dedication and a commitment to exceptional customer service, we
							soon broadened our horizons and ventured into the world of
							Confectionery Machinery.
						</p>
						<p className="text-sm text-slate-500 font-medium">
							Over the years, our passion for innovation and our relentless
							pursuit of excellence have propelled us to become one of the most
							leading and trusted companies in our field, serving clients
							nationwide.
						</p>
						<div className="grid grid-cols-1 gap-y-8  lg:max-w-[80%] mt-10">
							<div className="flex sm:flex-row flex-col items-start justify-center">
								<div className="bg-primary/10 w-[110px]  p-5 rounded-xl ">
									<img src={journey} />
								</div>
								<div className="sm:w-[calc(100%_-_110px)] sm:pl-5 sm:mt-0 mt-4">
									<h1 className="text-3xl font-bold font-heading">
										Our Journey
									</h1>
									<p className="text-sm text-slate-500 font-medium">
										From our modest beginnings, SB Engineering has grown into a
										dynamic force in the national market. What sets us apart is
										our small yet highly specialized team, working tirelessly to
										meet your specific needs.
									</p>
								</div>
							</div>
							<div className="flex sm:flex-row flex-col items-start justify-center">
								<div className="bg-primary/10 w-[110px]  p-5 rounded-xl ">
									<img src={innovation} />
								</div>
								<div className="sm:w-[calc(100%_-_110px)] sm:pl-5 sm:mt-0 mt-4">
									<h1 className="text-3xl font-bold font-heading">
										Total Process Solutions
									</h1>
									<p className="text-sm text-slate-500 font-medium">
										We have evolved into a national supplier of total process
										solutions and high-tech equipment for the confectionery
										market. Our many years of experience in equipment
										manufacturing provide us with the knowledge and expertise to
										offer you favorable prices, convenient delivery times, and
										flexible payment terms.
									</p>
								</div>
							</div>
							<div className="flex sm:flex-row flex-col items-start justify-center">
								<div className="bg-primary/10 w-[110px]  p-5 rounded-xl ">
									<img src={satisfaction} />
								</div>
								<div className="sm:w-[calc(100%_-_110px)] sm:pl-5 sm:mt-0 mt-4">
									<h1 className="text-3xl font-bold font-heading">
										Your Satisfaction is Our Priority
									</h1>
									<p className="text-sm text-slate-500 font-medium">
										At SB Engineering, we prioritize our customer's satisfaction
										above all else. Our commitment to high-quality service and
										maintenance ensures that your experience with us is second
										to none.
									</p>
									<p className="text-sm text-slate-500 font-medium">
										Join us on our journey, and let SB Engineering be your
										trusted partner for all your machinery and confectionery
										needs.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="xl:col-span-3 col-span-7">
						<div className="flex items-start  justify-center gap-8 w-full">
							<div className="relative w-[350px] overflow-hidden mt-10">
								<div className="bg-primary absolute bottom-0 left-0 w-[80%] py-10 p-4">
									<img src={infrastructure} className="w-20 mb-4" />
                  <h1 className='text-white text-2xl font-heading font-bold'>Building The Future, Restoring The Past</h1>
								</div>
								<img src={about2} alt="" className="w-[400px] h-[500px] max-w-[unset]" />
							</div>
							<div className="relative w-[250px] overflow-hidden">
								<img src={about1} alt="" className="w-[350px] h-[400px] max-w-[unset]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
