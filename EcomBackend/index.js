import express from "express";
const app = express();

const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
  res.send("server is running sucessfully ");
})

app.get("/api/products",(req,res)=>{
  const products=[
    {
      id:1,
      productName:"Lenovo IdeaPad 1 14IGL7 ",
      productPrice:38000,
      productDescription:"Intel Celeron N4020, 4GB, 256GB, 14″ FHD",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/04/Lenovo-IdeaPad-1-2022-Intel-Celeron-N4020.jpg"
    },
    {
      id:2,
      productName:"Lenovo IdeaPad 1 14IGL7 ",
      productPrice:38000,
      productDescription:"Intel Celeron N4020, 4GB, 256GB, 14″ FHD",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/04/Lenovo-IdeaPad-1-2022-Intel-Celeron-N4020.jpg"
    },
    {
      id:3,
      productName:"Lenovo IdeaPad 1 14IGL7 ",
      productPrice:38000,
      productDescription:"Intel Celeron N4020, 4GB, 256GB, 14″ FHD",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/04/Lenovo-IdeaPad-1-2022-Intel-Celeron-N4020.jpg"
    },
  ]
  res.json(products);
})

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`);
})
