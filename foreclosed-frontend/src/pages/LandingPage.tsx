import HomesaleBox from "../components/homesale/homesalebox";
import TopNav from "../components/navigationbar/topnav";
import Landingsearch from "../components/searchbar/Landingsearch";
import { Box } from '@mui/joy';
const LandingPage = () => {


	return (
		<Box sx={{backgroundColor:'#F5F6F8'}} width={'100vw'} height={'100vh'} display={"flex"} flexDirection={"column"} alignItems={"center"}>
			<TopNav/>
			<Landingsearch/>
		</Box>
	);
};

export default LandingPage;
