import HomesaleBox from "../components/homesale/homesalebox";
import TopNav from "../components/navigationbar/topnav";
import { Box } from '@mui/joy';
const LandingPage = () => {


	return (
		<Box sx={{backgroundColor:'#E5E5E5'}}>
			<TopNav/>
			<HomesaleBox />
		</Box>
	);
};

export default LandingPage;
