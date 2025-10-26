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
      type:"General",
      display:'"14" FHD 60Hz',
      cpu:"Intel Celeron N4020",
      gpu:"Intel UHD Graphics",
      battery:"42 Wh",
      weight:"1.3 kg",
      detail:"The Lenovo IdeaPad 1 2023 14IGL7 is ideal for extremely lightweight activities like surfing the internet or consuming media. It comes in a minimal design language with a plastic frame. You get a 14-inch screen with a TN panel offering an FHD resolution, 60Hz refresh rate, and 220 nits brightness. For performance, you get a low-powered dual-core Intel Celeron N4020 processor. Additionally, you get an 4GB memory and a 256GB SSD with support for up to 512GB storage. In the tank, you get a 42Wh battery that you can juice up with a barreljack charger.",
      productDescription:"Intel Celeron N4020, 4GB, 256GB, 14″ FHD",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/04/Lenovo-IdeaPad-1-2022-Intel-Celeron-N4020.jpg"
    },
    {
      id:2,
      productName:"Acer Aspire Lite 14 AL14-31P-36ZY ",
      productPrice:50999,
      type:"Traditional",
      display:'"14" WUXGA 60Hz',
      cpu:"Intel Core i3-N300",
      gpu:"Intel UHD Graphics",
      battery:"45 Wh",
      weight:"1.5 kg",
      detail:"Acer Aspire Lite 14 (AL14-31P-36ZY) is a low-powered laptop that comes in a very affordable price tag. It comes with a 14-inch TFT LCD that stretches WUXGA resolution. Under the hood, it comes with the Intel Core i3-N300 processor with eight cores, eight threads, and a 6MB cache. Additional hardware includes 8GB RAM and 512GB storage. In the tank, you get a decent 45Wh battery.",
      productDescription:"Intel Core i3-N300, 8GB, 512GB, 14",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/03/Acer-Aspire-14-Lite.jpg"
    },
    {
      id:3,
      productName:"Lenovo V15 G4 IRU 2023 ",
      productPrice:55500,
      type:"Traditional",
      display:'"15.6" FHD 60Hz',
      cpu:"i3-1315U",
      gpu:"Intel Iris Xe",
      battery:"45 Wh",
      weight:"1.7 kg",
      detail:"Lenovo V15 G4 IAP (2023) is an affordable laptop that comes with decent specs and the signature Lenovo design. This laptop has a 15.6-inch FHD panel up front with a 45% NTSC colour gamut. Under the hood, it packs 13th Gen Intel Core i3-1315U  and integrated Intel graphics. Additionally, it packs 8GB DDR4-3200 and 256GB M.2 NVMe PCIe SSD. You can add 8 more GB of RAM with a SO-DIMM slot while you can swap out a 1TB SSD for the default one. Lastly, this laptop has a 45Wh battery with 65W charging capability.",
      productDescription:"Intel i3-1315U, 8GB, 256GB, 15.6″ FHD",
      productImage:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2025/05/Lenovo-V15-G4-2023-Intel-i3-1315U-8GB-512GB-15.622-FHD.jpg"
    },
  ]
 setTimeout(() => {
   res.json(products);
 }, 1000);
})

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`);
})
