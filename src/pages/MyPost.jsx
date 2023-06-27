import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import MenuBtn from '../components/MenuBtn';
// import MeetingCard from '../components/MeetingCard';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<MyNav />
			<MenuBtn className="menu-btn" />
			{/* <div className="card-list">
				<MeetingCard />
			</div> */}
			<Footer />
		</div>
	);
};

export default MainPage;