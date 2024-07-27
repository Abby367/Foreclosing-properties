import HomesaleBox from "../components/homesale/homesalebox";
import TopNav from "../components/navigationbar/topnav";
import Landingsearch from "../components/searchbar/Landingsearch";
import Landingcard from "../components/cards/Landingcards";
import { Box } from "@mui/joy";
const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F6F8",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
    >
      <TopNav />
      <Landingsearch />
      <Landingcard />
    </Box>
  );
};

export default LandingPage;
