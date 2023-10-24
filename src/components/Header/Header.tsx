import { Icon } from '@iconify-icon/react';
import logo from '../../assets/img/logo.png';
import './header.css';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';
const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="nav border-b fixed top-0 left-0 bg-white   border-slate-200  w-full z-50">
			<div className="container flex items-center lg:py-0 py-2 justify-between">
				<aside>
					<img src={logo} className="w-[120px]" />
				</aside>
				<aside>
					<label
						role="button"
						className={cn(isVisible ? 'active' : '', ' hamburger lg:hidden')}
						onClick={() => {
							setIsVisible(!isVisible);
						}}
					>
						<svg viewBox="0 0 32 32">
							<path
								className="line line-top-bottom"
								d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
							></path>
							<path className="line" d="M7 16 27 16"></path>
						</svg>
					</label>
					<ul
						className={cn(
							isVisible
								? 'lg:max-h-[unset] md:max-100vh'
								: 'lg:max-h-[unset] max-h-0',
							'flex lg:flex-row  flex-col lg:static absolute top-[90px] border-t border-slate-200 lg:py-0 py-3 z-50 w-full left-0 bg-white  lg:items-center items-start overflow-hidden transition-all duration-300'
						)}
					>
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<li className="nav-menu w-full whitespace-nowrap">Home</li>
						</Link>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							<li className="nav-menu w-full whitespace-nowrap">About us</li>
						</Link>
						<Link
							activeClass="active"
							to="services"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							<li className="nav-menu w-full whitespace-nowrap">Services</li>
						</Link>
						<Link
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							<li className="nav-menu w-full whitespace-nowrap">Projects</li>
						</Link>
						<Link
							activeClass="active"
							to="contactus"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							<li className="nav-menu w-full whitespace-nowrap">Contact us</li>
						</Link>
						<li className="flex justify-start items-center gap-2 px-10">
							<Icon
								icon="ic:baseline-phone"
								className="text-3xl text-primary"
							/>
							<span className="text-3xl whitespace-nowrap  font-bold font-heading capitalize">
								+92-3248080179
							</span>
						</li>
					</ul>
				</aside>
			</div>
		</div>
	);
};

export default Header;
