import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
import Image from "next/image";
import img from "./public/images/my-image.png";
import img2 from "./public/images/arrow.png";
import img4 from "./public/images/image4.png";
import img3 from "./public/images/image2.png";
import heart from "./public/images/heart.png";
import roundheart from "./public/images/round.png";
import shoe from "./public/images/shoe.png";

export default function Home() {
  return (
    <main className="flex relative h-screen flex-col">
     
      <div className="relative z-10 flex">
        <div>
          <span
            style={{ fontFamily: "Stencil, sans-serif" }}
            className="text-5xl font-bold ml-10 "
          >
            SPORTS SHOES
          </span>
          <div
            className="font-bold text-2xl ml-10 mt-5"
            style={{ fontFamily: "Yu Gothic, sans-serif" }}
          >
            <span className="text-4xl font-bold  text-sky-300/100">
              Men's
            </span>
               collection
          </div>
          <h1
            style={{ fontFamily: "Yu Gothic, sans-serif", width: "460px" }}
            className="ml-10 mt-5 text-2xl justify-self-end"
          >
            Find your true style with Shoepress and explore the variety of playful, colorful designs.
          </h1>
          
  <div className="  flex text-center bg-[#006C79] text-2xl ml-10  mt-10 absolute rounded-full text-white p-3" >Shop Now     
    <Image
        src={img2}
        alt="Description of the image"
    width={30}
    height={10}
    className="ml-5"
      
      />
  </div>
        </div>
        <div className="w-screen h-screen">
  {/* Small Circle */}
  <div
    className="rounded-full"
    style={{
      backgroundColor: "#007D8B",
      height: "40px",
      width: "40px",
      marginLeft: "300px",
      zIndex: 1, // Lower z-index for the circle
      transform: "translate(-50%, -50%)", // Centering the circle
    }}
  ></div>

  {/* Large shape behind */}
  <div
    style={{
      backgroundColor: "#007D8B",
      borderRadius: "500px 0px 0px 500px",
      marginLeft: "368px",
      height: "700px",
      width: "479px",
      marginTop: "-250px",
      paddingTop: "200px",
      zIndex: 1, // Lower z-index for this shape
    }}
    className="relative rounded-full w-2/6"
  >
    <div
      className="h-[300px] w-[200x] bg-white relative ml-[280px] rounded-[200px_0_0_200px]"
    ></div>
  </div>

  {/* Another small circle */}
  <div
    className="rounded-full"
    style={{
      backgroundColor: "#007D8B",
      height: "70px",
      width: "70px",
      marginLeft: "50px",
      marginTop: "-180px",
      zIndex: 1, // Lower z-index for the circle
    }}
  ></div>

  {/* Front Image */}
  <Image
    src={img}
    alt="Description of the image"
    className="w-[1000px] h-[1000px] mt-[-740px] ml-[20px]"
    style={{
      zIndex: 2, 
      position: "relative", 
    }}
  />
</div>



      </div>
      <div
  className="relative bg-[#006C79] flex items-center justify-center pt-[400px] pb-[400px] " 
  style={{
    height: "120vh",  
    width: "210vh",  
  }}
>  <h1 className="absolute text-[#185159] text-[100px] "   style={{ fontFamily: "Stencil, sans-serif" }}>
    Black <br />
    <span className="ml-[80px] text-[130px] ">Together</span> <br />
    <span className="ml-[440px]">Power</span> <br /> 
    <span className="ml-[490px]">    Friday    </span> <br /> 
  </h1>
  <div className="relative w-full h-[800px] ">
      <Image
        src={img3}
        alt="Description of the image"
    
      
        className="absolute     h-[130vh]   w-[105vh] ml-[350px]"
      />
  </div>
  <div className="font-bold text-4xl w-[200px]  ml-[1000px]  mt-[-500px] absolute text-[#3D3D3D]">70% OFF</div>

  <div className="  flex text-center bg-[#868689] text-2xl   ml-[-600px]  mt-[400px] absolute rounded-full text-white p-3" >Shop Now     <Image
        src={img2}
        alt="Description of the image"
    width={30}
    height={10}
    className="ml-5"
      
      />
  </div>

</div>


<div className=" flex  flex-col mt-[150px] " >
<h1 className="text-5xl text-bold text-center mb-[50px]"   style={{ fontFamily: "Stencil, sans-serif" }}>POPULAR RIGHT NOW</h1>
<div className="flex items-center justify-center">
<div className="ml-4  border-2 border-[#006C79]   bg-white rounded-full text-1xl p-2  font-bold text-center w-[200px] ">Sneakers</div>
<div className="ml-4  border-2 border-[#006C79]   bg-white rounded-full text-1xl p-2  font-bold text-center w-[200px]">Sport Shoes</div>
<div className="ml-4  border-2 border-[#006C79]   bg-white rounded-full text-1xl p-2  font-bold text-center w-[200px] ">Oxford</div>
<div className="ml-4  border-2 border-[#006C79]   bg-white rounded-full text-1xl p-2  font-bold text-center w-[200px] ">Sale</div>


</div>

<div className=" flex  flex-col mt-[150px] flex items-center justify-center " >
<Carousel className="w-full">
      <CarouselContent className="-ml-1">
      <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold"><Image
        src={img4}
        alt="Description of the image"
    
      
      /></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold"><Image
        src={img4}
        alt="Description of the image"
    
      
      /></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold"><Image
        src={img4}
        alt="Description of the image"
    
      
      /></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem><CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold"><Image
        src={img4}
        alt="Description of the image"
    
      
      /></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
</div>



<div className=" flex  flex-col mt-[150px] " >
<div>
<h1 className="text-5xl text-bold text-center mb-[100px]"   style={{ fontFamily: "Stencil, sans-serif" }}>OUR WEEKLY PICK</h1>
</div>


<div className=" w-[600px] h-[100px] m-10 ">
      <Image
        src={img4}
        alt="Description of the image"
    
      
      />
  </div>




  <div className="ml-[600px] p-10    mt-[-140px]">
<h1 className="text-3xl font-bold   pl-4 mt-[-50px]">Nike- The  joyride</h1>
<h1 className="text-3xl font-bold  text-[#006C79]  p-4 ">$390</h1>
<div className="flex p-4 gap-10">
<div>
<h1 className="text-3xl font-bold text-center  ">Colour</h1>
<div className="flex gap-4  mt-10">

<div className="rounded-full  border-2 border-black text-center w-12 h-12 flex items-center justify-center"><div className="rounded-full   text-center w-8 h-8 bg-black flex items-center justify-center"></div></div>
<div className="rounded-full  border-2 border-[#F6835F] text-center w-12 h-12 flex items-center justify-center"><div className="rounded-full   text-center w-8 h-8 bg-[#F6835F] flex items-center justify-center"></div></div>
</div>
<div className="text-2xl font-bold text-center rounded-full border-2 border-blue-500 m-5  mx-auto flex justify-center items-center ">
  - 0 +
</div>
</div>

<div  >
<h1 className="text-3xl font-bold">Size</h1>
<div className="flex gap-4 mt-10">
  <div className="bg-[#006C79] rounded-full text-white text-center w-12 h-12 flex items-center justify-center">41</div>
  <div className="rounded-full text-[#006C79] border-2 border-blue-500 text-center w-12 h-12 flex items-center justify-center">42</div>
  <div className="rounded-full text-[#006C79] border-2 border-blue-500 text-center w-12 h-12 flex items-center justify-center">43</div>
  <div className="rounded-full text-[#006C79] border-2 border-blue-500 text-center w-12 h-12 flex items-center justify-center">44</div>
</div>
<Image
        src={roundheart}
        alt="Description of the image"
    
      
        className="absolute     h-[40px]   w-[50px]  mt-5"
      />
</div>
<div>
<h1 className="text-3xl font-bold text-center  ">Reviews</h1>
<Image
        src={heart}
        alt="Description of the image"
    
      
        className="absolute     h-[40px]   w-[200px]  mt-10"
      />
</div>
</div>


<div className=" w-[550px] h-[100px] ml-5   mt-[-25px] text-center">
      <Image
        src={shoe}
        alt="Description of the image"
    
      
      />
  </div>


<div className="ml-4    bg-[#006C79] rounded-full text-1xl p-2 text-white font-bold text-center w-1/2 mt-[100px]"> Buy it Now</div>

</div>




  </div>
  <div
  className=" mt-[100px] bg-[#006C79]  flex items-center justify-center  flex-col  pt-[150px] pb-[150px]" // Flexbox used for centering
  style={{
    height: "100vh",  
    width: "210vh",  
  }}>
<h1 className="text-5xl text-bold text-center  text-white"   style={{ fontFamily: "Stencil, sans-serif" }}>
BECOME A MEMBER  AND GET 20% OFF</h1>
<div className="ml-4    bg-white rounded-full text-1xl p-2 text-[#006C79] font-bold text-center w-1/5 mt-[100px]">SIGN UP  FREE NOW </div>


</div>

<div
  className=" bg-[#F6835F]  flex items-center justify-center  flex-col  pt-[150px] pb-[150px]" // Flexbox used for centering
  style={{
    height: "100vh",  
    width: "210vh",  
  }}>

<div className="flex gap-[200px] text-[20px] text-white border-t-2 borderTop-white pt-10">

<div><div className="text-3xl font-bold">Products</div>

  <div className="mt-5">Shoes</div>
</div>



<div ><div className="text-3xl font-bold">Category</div>

<div className="mt-5">Man</div>
<div className="mt-5">New In</div>
<div className="mt-5">Weekly Pick</div>

</div>
<div><div className="text-3xl font-bold">Company Info</div>


<div className="mt-5">About us</div>
<div className="mt-5">Contact us</div>
<div className="mt-5"> Payment Options </div>
<div className="mt-5" >Track Order</div>
<div className="mt-5">Support</div>
<div className="mt-5">Vouchers</div>
<div className="mt-5">Size Charts</div>



</div>
<div className="text-3xl font-bold">Follow us</div>
</div>

</div>
    </main>
    
  );
}
