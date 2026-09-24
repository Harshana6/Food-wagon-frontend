import featured1 from "../assets/Images/Image.png";
import featured2 from "../assets/Images/Image (1).png";
import featured3 from "../assets/Images/Image (3).png";
import featured4 from "../assets/Images/Image (4).png";
import featured5 from "../assets/Images/Image (5).png";
import featured6 from "../assets/Images/Image (6).png";
import featured7 from "../assets/Images/Image (7).png";
import featured8 from "../assets/Images/Image (2).png";
import restro1 from "../assets/Images/Image (8).png";
import restro2 from "../assets/Images/Image (9).png";
import restro3 from "../assets/Images/Image (10).png";
import restro4 from "../assets/Images/Image (11).png";
import restro5 from "../assets/Images/Image (12).png";
import restro6 from '../assets/Images/Restaruant Logo.png'
import restro7 from '../assets/Images/Restaruant Logo (1).png'
import restro8 from '../assets/Images/Restaruant Logo (2).png'

const FeaturedItem = () => {
  const featuredItems = [
    {
      image: featured1,
      discount: "20%",
      restroimage: restro1,
      restro: "Foodworld",
      rating: "40",
      open: "Opens tomorrow",
    },
    {
      image: featured2,
      discount: "15%",
      restro: "Pizzahub",
      restroimage: restro2,
      rating: "40",
      open: "Opens tomorrow",
    },
    {
      image: featured3,
      discount: "10%",
      restro: "Donuts hut",
      restroimage: restro6,
      rating: "20",
      open: "Open Now",
    },
      {
      image: featured5,
      discount: "10%",
      restro: "Ruby Tuesday",
      restroimage: restro3,
      rating: "26",
      open: "Open Now",
    },
    {
      image: featured4,
      discount: "15%",
      restro: "Donuts hut",
      restroimage: restro7,
      rating: "50",
      open: "Open Now",
    },
    {
      image: featured6,
      discount: "25%",
      restro: "Kuakata Fried Chicken",
      restroimage: restro4,
      rating: "50",
      open: "Open Now",
    },
    {
      image: featured7,
      discount: "10%",
      restro: "Red Square",
      restroimage: restro5,
      rating: "50",
      open: "Open Now",
    },
   {
      image: featured8,
      discount: "10%",
      restro: "Red Square",
      restroimage: restro8,
      rating: "35",
      open: "Open Now",
    },
    
  ];
  return (
      
      <>
      {featuredItems.map((item, index) => (
       <div className="col-xl-3 col-lg-3 col-md-6 col-12">
         <div className="featured-item" key={index}>
          <img src={item.image} alt="" />
          <div className="restro-logo">
            <img src={item.restroimage} alt="" />
            <div className="restro-info"><div className="restro-name">{item.restro}</div>
            <div className="restro-rate">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6562 1.03125C11.1719 0 12.6328 0.0429688 13.1055 1.03125L15.9414 6.74609L22.2148 7.64844C23.332 7.82031 23.7617 9.19531 22.9453 10.0117L18.4336 14.4375L19.5078 20.668C19.6797 21.7852 18.4766 22.6445 17.4883 22.1289L11.9023 19.1641L6.27344 22.1289C5.28516 22.6445 4.08203 21.7852 4.25391 20.668L5.32812 14.4375L0.816406 10.0117C0 9.19531 0.429688 7.82031 1.54688 7.64844L7.86328 6.74609L10.6562 1.03125Z"
                  fill="#FFB30E"
                />
              </svg>
              <span>{item.rating}</span>
            </div></div>
          </div>
          <div className={`available-btn ${item.open =='Open Now'?'open':'close'}` }>
            {item.open}
          </div>
          <div className="top-btn-feature">
            <div className="discount-btn">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8.89453V1.6875C0 0.773438 0.738281 0 1.6875 0H8.85938C9.31641 0 9.73828 0.210938 10.0547 0.527344L17.4727 7.94531C18.1406 8.61328 18.1406 9.70312 17.4727 10.3359L10.3008 17.5078C9.66797 18.1758 8.57812 18.1758 7.91016 17.5078L0.492188 10.0898C0.175781 9.77344 0 9.35156 0 8.89453ZM3.9375 2.25C2.98828 2.25 2.25 3.02344 2.25 3.9375C2.25 4.88672 2.98828 5.625 3.9375 5.625C4.85156 5.625 5.625 4.88672 5.625 3.9375C5.625 3.02344 4.85156 2.25 3.9375 2.25Z" fill="white"/>
</svg>
<span>{item.discount} off</span>
            </div>
            <div className="fast-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.71875 0C13.5352 0 17.4375 3.90234 17.4375 8.71875C17.4375 13.5352 13.5352 17.4375 8.71875 17.4375C3.90234 17.4375 0 13.5352 0 8.71875C0 3.90234 3.90234 0 8.71875 0ZM11.9531 11.0039C12.0234 10.9336 12.0938 10.793 12.0938 10.6523C12.0938 10.4766 11.9883 10.3359 11.8828 10.2305L9.84375 8.71875V3.65625C9.84375 3.375 9.5625 3.09375 9.28125 3.09375H8.15625C7.83984 3.09375 7.59375 3.375 7.59375 3.65625V9.14062C7.59375 9.59766 7.76953 9.98438 8.12109 10.2305L10.4766 11.9883C10.5469 12.0586 10.6875 12.1289 10.793 12.1289C11.0039 12.1289 11.1445 12.0234 11.25 11.8828L11.9531 11.0039Z" fill="white"/>
</svg>
<span>Fast</span>
            </div>
          </div>
        </div>
       </div>
      ))}
      </>
    
  );
};
export default FeaturedItem;
