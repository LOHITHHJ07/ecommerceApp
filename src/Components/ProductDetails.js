import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { selectedProduct } from '../redux/ActionTypes/productActions';
import Button from '@mui/material/Button';
import {add} from "../redux/reducers/CartSlice"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function ProductDetails() {
    const product = useSelector((state) => state.product);
    const { id, title, image, price, category,description } = product;
    const {productID}=useParams();
        const dispatch = useDispatch();
        const fetchProductsDetails = async () => {
          const response = await axios
            .get(`https://fakestoreapi.com/products/${productID}`)
            .catch((err) => {
              console.log("error:", err);
            });
        dispatch(selectedProduct(response.data));
        };
        useEffect(() => {
            fetchProductsDetails();
        }, [productID]);

    const addCart=(product)=>
    {
      dispatch(add(product));
    }

      
  return (
    <Paper sx={{ maxWidth: 800,marginLeft:"auto",marginRight:"auto",minHeight:"800",marginTop:"20px" }}>
      <CardHeader
        title={title} 
        subheader={category}
      />
      <CardContent sx={{display:"flex",padding:"30px",justifyContent:"space-evenly"}}>
      <img src={image} alt="not found" style={{height:400,width:300,padding:"5px"}} />
       <p style={{fontSize:"18px"}}>{description}</p>
      </CardContent> 
      <div style={{ position:"relative",left:"400px",bottom:"40px"}}> 
     <Button sx={{margin:"10px"}} variant="contained"  onClick={()=>addCart(product)}>Add to cart</Button>
      <Button sx={{margin:"10px"}} variant="contained">Buy now</Button>
      </div>  
    </Paper>
  )
}

export default ProductDetails
