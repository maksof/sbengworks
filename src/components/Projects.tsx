import chcolateball from '../assets/img/chcolate-ball.png';
import chocolatebeanse from '../assets/img/chocolate-beanse.png';
import chocolatemoulde from '../assets/img/chocolate-moulde.png';
import chocolatestorage from '../assets/img/chocolate-storage.png';
import coatingpans from '../assets/img/coating-pans.png';
import flavourmixxing from '../assets/img/flavour-mixxing.png';
const Projects = () => {
	const projects = [
		{
			title: 'COATING PANS',
			description: [
				'Coating pans for syrup coating, chocolate coating or polishing applications, rotation speed of the coating pan can be changed via a VFD.',
				'Pan made of AISI304 grade stainless steel.',
				'Pan diameter 1000mm.',
				'Pan rotation speed adjustable.',
				'Row material loading capacity 100 - 120kg.',
				'Total power consumption 220V 2KW.',
			],
			image: coatingpans,
		},
		{
			title: 'CHOCOLATE STORAGE TANK',
			description: [
				'A chocolate warm keeping tank is one of the essential equipment during the chocolate processing. It is used for the warm –keeping storage of the refined chocolate paste, which can meet the technical requirements of the continuous chocolate production. The tanks not only have the functions of cooling, warming, and warm-keeping.',
			],
			image: chocolatestorage,
		},
		{
			title: 'CHOCOLATE BEANS PRODUCTION LINE',
			description: [
				'The Chocolate beans production line is specially use for coldrolling to produce different shapes of pure chocolate such as ball shape, ellipse shape, bean shape, and a variety of other shape with simple operation, hygienic and safe.',
				'It is suitable for making high quality chocolate beans.iameter of the roller: 300mm',
				'Length of the roller: 610mm',
				'Numbers of the roller: 1 Set',
				'Max. rotating speed of the roller: 1.5r/min',
				'Max. temperature of refrigerator: -30~-28C',
				'Forming temperature: -24C~-22C',
			],
			image: chocolatebeanse,
		},
		{
			title: 'CHOCOLATE BALL MILL',
			description: [
				'The chocolate ball mill refining machine is designed for fine milling chocolate cream or similar oil-based products. Chocolate mass will be homogeneously ground into 15 to 25 microns in the jacketed steel cylinder. The temperature controller precisely controls the immersed electric heater status and external cold water replenishment to ensure the entire chocolate ball milling process is all set at target temperature.',
			],
			image: chcolateball,
		},
		{
			title: 'FLAVOUR MIXXING TANK',
			description: [
				'We are distinguished in providing a wide array of Flavoured Mixing Tank. It is easy to keep from one to another place. This tank is necessary to form a final product. Flavoured Mixing Tank is to create a buffer between blending and packaging. It does not contaminate the product due to its smooth surface finishing body. It is easy to maintain and give reliable mixing.',
			],
			image: flavourmixxing,
		},
		{
			title: 'CHOCOLATE MOULDING MACHINE',
			description: [
				'Chocolate molding machines, also known as chocolate bar depositor, and chocolate moulding line, they are widely used in the bulk producing industry of plain chocolate bar and central-filled chocolates. Their jacketed depositing hoppers are divided into two or three parts - One for the chocolate shell, the other for center soft fillings, and they could be all filled with chocolate while producing plain chocolate bars without soft fillings in the center.',
			],
			image: chocolatemoulde,
		},
	];
	return (
		<div>
			<div className="container py-20">
				<div className="relative z-10 text-left  space-y-4">
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
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-20">
					{projects.map((row, idx) => (
						<div key={idx}>
							<div className="max-h-[250px] overflow-hidden group">
								<img
									src={row.image}
									className="w-full duration-500 transition-all group-hover:scale-110"
								/>
							</div>
							<div className="py-5 bg-white relative z-10 -mt-10 px-2 w-[90%] rounded-r-md">
								<h1 className="text-3xl font-heading">{row.title}</h1>
								{row.description.map((d, i) => (
									<p className="text-sm text-slate-500" key={i}>
										{d}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
