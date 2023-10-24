import { Icon } from '@iconify-icon/react';
import logo from '../assets/img/logo.png';
const Footer = () => {
	return (
		<div>
			<div className="flex items-end w-full  bg-white">
				<footer className="w-full text-gray-700">
					<div className="border-t border-slate-200">
						<div className="container px-5 gap-2 py-4 mx-auto flex md:flex-row flex-col  items-center justify-between">
							<div className="flex items-center gap-4">
								<img src={logo} className="w-[100px]" />
								<p className="text-base text-gray-700 capitalize text-center">
									© {new Date().getFullYear()} All rights reserved
								</p>
							</div>
							<div className="flex lg:flex-row flex-col lg:items-center lg:gap-8">
								<div className="flex items-center gap-4">
									<Icon icon={'ic:baseline-phone'} className="text-xl text-primary" />
									<p>+92 300 8268 427 , +92-3248080179</p>
								</div>
								<div className="flex items-center gap-4">
									<Icon icon={'cib:mail-ru'} className="text-xl text-primary" />
									<a
										href="sb.engineering@hotmail.com"
										className=" cursor-pointer block whitespace-nowrap"
									>
										sb.engineering@hotmail.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
