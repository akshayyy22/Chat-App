import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div>
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
			
		</div>
		<div className="absolute bottom-0 right-0 m-6 px-4 py-2 bg-slate-400 rounded-full text-slate-700 text-sm font-medium">Created by Akshay Esackimuthu</div>
		</div>
		
	);
};
export default Home;