import { Icon } from '@iconify-icon/react';
import { useEffect, useRef } from 'react';
import Video1 from '../../assets/img/video1.mp4';
import Video2 from '../../assets/img/video2.mp4';
import Video3 from '../../assets/img/video3.mp4';
import Video4 from '../../assets/img/video4.mp4';
// import Video5 from '../../assets/img/video5.mp4';
import Video6 from '../../assets/img/video6.mp4';
import { Button } from '../ui/button';
import { Link } from 'react-scroll';
const Hero = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const videoSources: string[] = [
			Video1,
			Video2,
			Video3,
			Video4,
			Video6,
		];
		const randomIndex = Math.floor(Math.random() * videoSources.length);
		if (videoRef.current) {
			videoRef.current.src = videoSources[randomIndex];
			videoRef.current.load();
			const playVideo = () => {
				if (videoRef.current) {
					videoRef.current.play();
				}
			};
			document.addEventListener('click', playVideo, { once: true });
		}
	}, []);
	return (
		<div className="w-full relative max-h-[calc(100vh_-_92px)] overflow-hidden">
			<video
				ref={videoRef}
				autoPlay={true}
				loop={true}
				muted
				className="w-full"
				controls={false}
			/>
			<div className="flex items-center  absolute h-full w-full top-0 left-0">
				<div className="container">
					<div className="flex flex-col md:gap-y-6 gap-2  justify-center relative z-10">
						<h1 className="font-semibold mb-0  font-heading lg:text-8xl sm:text-5xl text-3xl text-white sm:leading-none leading-7">
							Manufacture A Variety <br />
							Of High Quality Products
						</h1>
						<p className="text-white font-bold sm:mb-5 mb-0 lg:text-lg sm:text-base sm:line-clamp-none line-clamp-2">
							We produce positive results from ever-growing Industrial &
							manufacturing estates,
							<br /> we have established a corporate mandate to maintain strong
							core values.
						</p>
						<div className="flex items-center gap-4">
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								<Button
									size="sm"
									className="flex text-white items-center border-2  sm:text-base text-sm font-bold md:py-6 py-3 border-primary  gap-1 rounded-full transition-all"
									variant="default"
								>
									<Icon
										icon="solar:arrow-right-linear"
										className="text-xl text-white"
									/>
									About us
								</Button>
							</Link>
							<Link
								activeClass="active"
								to="services"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								<Button
									size="sm"
									className="flex text-white items-center   sm:text-base text-sm font-bold md:py-6 py-3 border-2 border-white  gap-1 rounded-full hover:border-primary transition-all"
									variant="outline"
								>
									<Icon
										icon="solar:arrow-right-linear"
										className="text-xl text-white"
									/>
									Our Service
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
