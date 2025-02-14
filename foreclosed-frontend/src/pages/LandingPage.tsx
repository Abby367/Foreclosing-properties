import TopNav from "../components/navigationbar/topnav";
import Landingsearch from "../components/searchbar/Landingsearch";
import Landingcard from "../components/cards/Landingcards";
import { Stack, Box } from "@mui/joy";
import Findbox from "../components/Box/Findbox";
const LandingPage = () => {
  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: "#F5F6F8",
          overflowY: "scroll !important",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar-thumb": {
            display: "none",
          },
          overflow: "hidden",
          height: "98.2vh",
          width: "100%",
        }}
      >
        <TopNav />
        <Landingsearch />
        <Landingcard />
        <Findbox/>
      </Box>
    </Stack>
  );
};

export default LandingPage;
