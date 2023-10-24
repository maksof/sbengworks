

import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Layout = () => {
	return (
		<>
			<div>
        <Header/>
				<div className='mt-20'>
			  <Outlet />
				</div>
				<Footer/>
      </div>
		</>
	);
};

export default Layout;
