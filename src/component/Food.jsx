import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Food1 from '../assets/Images/Food1.png'
import Food2 from '../assets/Images/Food2.png'
import Food3 from '../assets/Images/Food3.png'
import Food4 from '../assets/Images/Food4.png'
import Food5 from '../assets/Images/Food5.png'
import Food6 from '../assets/Images/Food6.png'
const Food = ({ startIndex })=>{
    const foodList = [
        {
            foodName:'Pizza',
            foodImage:Food1
        },
         {
            foodName:'Burger',
            foodImage:Food2
        },
         {
            foodName:'Noodles',
            foodImage:Food3
        },
         {
            foodName:'Sub-sandiwch',
            foodImage:Food4
        },
         {
            foodName:'Chowmein',
            foodImage:Food5
        },
        {
            foodName:'Steak',
            foodImage:Food6
        },
        {
            foodName:'Pizza',
            foodImage:Food1
        },
         {
            foodName:'Burger',
            foodImage:Food2
        },
         {
            foodName:'Noodles',
            foodImage:Food3
        },
         {
            foodName:'Sub-sandiwch',
            foodImage:Food4
        },
         {
            foodName:'Chowmein',
            foodImage:Food5
        },
        {
            foodName:'Steak',
            foodImage:Food6
        },

    ]
   
    return(
        <Swiper
         modules={[Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={6}
      autoplay={{ delay: 2000 }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      breakpoints={{
        280:{slidesPerView: 1 },
            320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1200: { slidesPerView: 4 }, 
     1440: { slidesPerView: 6 }, 
      }}
        >
             {foodList.map((food,index)=>
                (<SwiperSlide key={index}>
                     <a href="">
                         <div className="food">
                        <img src={food.foodImage} alt="" />
                        <span>{food.foodName}</span>
                      </div>
                     </a>
                </SwiperSlide>))}
        </Swiper> 
           

    )
}
export default Food