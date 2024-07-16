import HomesaleBox from "../components/homesale/homesalebox";
import TopNav from "../components/navigationbar/topnav";
import Landingsearch from "../components/searchbar/Landingsearch";
import { Box } from '@mui/joy';
const LandingPage = () => {


	return (
		<Box sx={{backgroundColor:'#F5F6F8', width:'100vw'}}  display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
			<TopNav/>
			<Landingsearch/>
		</Box>
	);
};

export default LandingPage;
