import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import map from '../assets/img/bg-map.png';
import solution from '../assets/img/solution.png';
import supplyChain from '../assets/img/supply-chain.png';
import welding from '../assets/img/welding.png';
import Clients from './Clients';

const Services = () => {
	return (
		<div className="bg-slate-50 py-20 overflow-hidden">
			<div className="container relative">
				<img src={map} className="absolute top-0 left-0 w-full" />
				<div className="relative z-10 text-center mx-auto max-w-5xl space-y-4">
					<h1 className="text-primary text-3xl font-heading">Our Serivce</h1>
					<h1 className="md:text-5xl text-3xl font-heading font-bold">
						Confectionery Machinery Expertise and Services
					</h1>
					<p className="text-base font-medium text-slate-500">
						At SB Engineering, we offer an extensive portfolio of process and
						packaging solutions for confectionery that spans a wide range of
						services and tailored technologies. With years of experience in
						manufacturing various confectionery machinery and their parts, we
						are your trusted partner in achieving excellence in the
						confectionery industry.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2  gap-16 relative mt-20">
					<div className="relative">
						<div className="w-full border border-primary/30 rounded-sm z-0 absolute h-full top-5 left-5"></div>
						<Card className={cn('border-none relative')}>
							<CardContent className="p-6">
								<img src={welding} className="w-[100px]" />
								<h3 className="text-black mt-5 text-3xl line-clamp-1 font-heading">
									Confectionery Machinery Manufacturing
								</h3>
								<p className="text-sm text-slate-500 line-clamp-4">
									We specialize in the design, manufacture, and upgrading of
									candy and chocolate machinery to meet our customer's exact
									requirements. Our machinery operates reliably throughout the
									entire country, known for its solid performance, reliability,
									and low energy consumption.
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="relative">
						<div className="w-full border border-primary/30 rounded-sm z-0 absolute h-full top-5 left-5"></div>
						<Card className={cn('border-none relative')}>
							<CardContent className="p-6">
								<img src={supplyChain} className="w-[100px]" />
								<h3 className="text-black mt-5 text-3xl line-clamp-1 font-heading">
									Key Products
								</h3>
								<p className="text-sm text-slate-500 line-clamp-4">
									Our primary focus is on the manufacturing of confectionery
									machinery and their spare parts, with special expertise in
									chocolate process machinery, bounty rollers, depositors,
									enrobers, ball mills, coating pans, and more. We also provide
									the production of dies and molds, along with a comprehensive
									parts repair service.
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="relative">
						<div className="w-full border border-primary/30 rounded-sm z-0 absolute h-full top-5 left-5"></div>
						<Card className={cn('border-none relative')}>
							<CardContent className="p-6">
								<img src={solution} className="w-[100px]" />
								<h3 className="text-black mt-5 text-3xl line-clamp-1 font-heading">
									Tailored Solutions
								</h3>
								<p className="text-sm text-slate-500 line-clamp-4">
									SB Engineering is dedicated to delivering tailored solutions
									to meet the unique needs of our clients. Our commitment to
									innovation and excellence drives us to provide you with the
									highest quality equipment, guidance, and support across a
									broad spectrum of confectionery manufacturing processes.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="mt-20">
				<Clients />
			</div>
		</div>
	);
};

export default Services;
