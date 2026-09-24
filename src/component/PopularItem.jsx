import popular1 from '../assets/Images/Frame 40.png'
import popular2 from '../assets/Images/Frame 40 (1).png'
import popular3 from '../assets/Images/Frame 40 (2).png'
import popular4 from '../assets/Images/pop2.png'
import popular5 from '../assets/Images/Rectangle 336.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const PopularItem = ({ nextRef, prevRef })=>{
    const popularItem = [{
        image:popular1,
        popularName:'Cheese Burger',
        restroName:'Burger Arena',
        price:'$3.88' 
    },
    {
        image:popular2,
        popularName:'Dancake',
        restroName:'Cake World',
        price:'$1.99' 
    },
    {
        image:popular4,
        popularName:'Toffe’s Cake',
        restroName:'Top Sticks',
        price:'$4.00' 
    },
    {
        image:popular5,
        popularName:'Crispy Sandwitch',
        restroName:'Fastfood Dine',
        price:'$3.00' 
    },
     {
        image:popular3,
        popularName:'Thai  Soup',
        restroName:'Foody man',
        price:'$2.79' 
    },
    {
        image:popular1,
        popularName:'Cheese Burger',
        restroName:'Burger Arena',
        price:'$3.88' 
    },
    {
        image:popular2,
        popularName:'Dancake',
        restroName:'Cake World',
        price:'$1.99' 
    },
    {
        image:popular4,
        popularName:'Toffe’s Cake',
        restroName:'Top Sticks',
        price:'$4.00' 
    },
    {
        image:popular5,
        popularName:'Crispy Sandwitch',
        restroName:'Fastfood Dine',
        price:'$3.00' 
    },
     {
        image:popular3,
        popularName:'Thai  Soup',
        restroName:'Foody man',
        price:'$2.79' 
    }

    ]
    return(
        <Swiper 
          spaceBetween={20}
      slidesPerView={5}
      onSwiper={(swiper) => {
        nextRef.current = () => swiper.slideNext();
        prevRef.current = () => swiper.slidePrev();
      }}
       breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
         1440: { slidesPerView: 5 },
      }}
        >
        {
            popularItem.map((popItem,index)=>(
                <SwiperSlide key={index}>

                    <div className="popitem" >
                    <img src={popItem.image} alt="" />
                   <div className='popitem-info'>
                     <div className='pop-name'>{popItem.popularName}</div>
                     <div className='pop-restro'><svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04688 17.6484C0.914062 10.2656 0 9.49219 0 6.75C0 3.02344 2.98828 0 6.75 0C10.4766 0 13.5 3.02344 13.5 6.75C13.5 9.49219 12.5508 10.2656 7.41797 17.6484C7.10156 18.1406 6.36328 18.1406 6.04688 17.6484ZM6.75 9.5625C8.29688 9.5625 9.5625 8.33203 9.5625 6.75C9.5625 5.20312 8.29688 3.9375 6.75 3.9375C5.16797 3.9375 3.9375 5.20312 3.9375 6.75C3.9375 8.33203 5.16797 9.5625 6.75 9.5625Z" fill="#FFB30E"/>
</svg>  <span>{popItem.restroName}</span>
</div>
  <div className='pop-name'>{popItem.price}</div>
                   </div>
                   <a href=""><div className='order-btn'>Order Now</div></a>
                 </div>
                </SwiperSlide>
                 
            
            ))
        }
        </Swiper>
    )
}
export default PopularItem