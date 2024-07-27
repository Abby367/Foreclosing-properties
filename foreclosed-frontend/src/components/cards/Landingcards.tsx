import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import slide2 from "../../assets/slide2.jpg";
import { Box, Card, Typography } from "@mui/joy";
import { fetchSales, selectSales } from "../../redux/slice/saleSlice";
import type { RootState, AppDispatch } from "../../redux/store/store";
import individual from "../../assets/individual.png";
import group from "../../assets/group.png";
import saleviamemo from "../../assets/saleviamemo.png";
import saleviabuyer from "../../assets/saleviabuyer.png";

const backgroundImages = [individual, group, saleviamemo, saleviabuyer];

export default function Landingcards() {
  const dispatch = useDispatch<AppDispatch>();
  const sales = useSelector(selectSales);

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  const renderCards = () => {
    return sales.slice(0, 4).map((sale, index) => (
      <Box
        key={sale.home_sale_id}
        sx={{
          height: "450px",
          width: "350px",
          boxShadow:
            "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2)",
          "&:hover .data": {
            transform: "translateY(0)",
          },
          margin: "1em",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${backgroundImages[index] || saleviamemo})`, // Assign specific background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "transform 0.25s",
        }}
      >
        <Box
          className="data"
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            transform: "translateY(calc(260px + 1em))",
            transition: "transform 0.3s",
            ".content": {
              padding: "1em",
              position: "relative",
              zIndex: 1,
            },
          }}
        >
          <Box
            className="content"
            sx={{
              height: "300px",
              position: "relative",
              background:
                "linear-gradient(360deg, #0c419a 25%, rgba(12, 64, 154, 0.555) 100%)",
              boxShadow: "0 5px 30px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "start",
              }}
            >
              <div>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  {sale.sale_type}
                </Typography>
                <Typography>{sale.sale_details}</Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1em", // Add gap between cards
        marginTop: "1em", // Optional: add some margin at the top
      }}
    >
      {renderCards()}
    </Box>
  );
}
