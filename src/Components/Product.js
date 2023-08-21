import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useShopContext } from "./shopContext";

function Product() {
  const { searchText } = useShopContext();
  const products = useSelector((state) => state.allProducts.products);
  const renderProducts = products
    ?.filter((product) => {
      if (searchText === "") {
        return product;
      } else if (
        product.title.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return product;
      }
    })
    .map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <Link to={`/product/${id} `} key={id}>
          <Box
            sx={{
              display: "inline-grid",
              padding: "0px",
              marginLeft: "80px",
              justifyContent: "center",
              "& > :not(style)": {
                m: 2,
                width: 250,
                height: 350,
              },
            }}
          >
            <Paper elevation={3} sx={{ padding: "5px" }}>
              <img
                src={image}
                alt="not found"
                style={{
                  height: 140,
                  width: 100,
                  padding: "0",
                  marginLeft: "20px",
                }}
              />
              <h4>{title}</h4>
              <h5> price ${price}</h5>
              <h6>Category:{category}</h6>
            </Paper>
          </Box>
        </Link>
      );
    });
  return <div>{renderProducts}</div>;
}

export default Product;
