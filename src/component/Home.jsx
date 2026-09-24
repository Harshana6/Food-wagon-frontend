import Nav from "./Nav"
import food1 from '../assets/Images/food-first.png'
import Item from "./Item"
import location from '../assets/Images/Icon (3).png'
import order from '../assets/Images/Icons.png'
import pay from '../assets/Images/Invoice.png'
import enjoy from '../assets/Images/Donut.png'
import arrowleft from '../assets/Images/Arrow Left.png'
import arrowright from '../assets/Images/Arrow Right.png'
import PopularItem from "./PopularItem"
import FeaturedItem from "./FeaturedItem"
import Food from "./Food"
import quality1 from '../assets/Images/Icon (4).png'
import quality2 from '../assets/Images/Icon (5).png'
import quality3 from '../assets/Images/Icon (6).png'
import phone1 from '../assets/Images/Shadow.png'
import phone2 from '../assets/Images/Shadow copy.png'
import download1 from '../assets/Images/Google Play logo.png'
import download2 from '../assets/Images/Apple logo.png'
import Common from "./Common"
import common1 from '../assets/Images/coomon1.jpg'
import common2 from '../assets/Images/common2.png'
import common3 from '../assets/Images/common3.png'
import Footer from "./Footer"
import { useRef } from "react";


const Home = ()=>{
    const nextRef = useRef(null);
const prevRef = useRef(null);
    return(
        <div>
            <Nav></Nav>
            <section className="banner">
               <div className="container">
                 <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                        <div className="first-left">
                    <div><h1>Are you starving?</h1>
                <p>Within a few clicks, find meals that are accessible near you</p>
                </div>
                <div className="food-order-info">
                  <div className="food-status">
                      <div className="delivery">
                        <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0703 4.5C17.5781 4.5 17.0508 4.60547 16.5938 4.74609L15.4336 2.8125H18.3516C18.8086 2.8125 19.1953 2.46094 19.1953 1.96875V0.84375C19.1953 0.386719 18.8086 0 18.3516 0H16.7344C16.4883 0 16.2773 0.105469 16.1016 0.28125L14.8008 1.75781L13.9922 0.421875C13.8516 0.175781 13.5703 0 13.2891 0H10.4766C10.1602 0 9.91406 0.28125 9.91406 0.5625V1.125C9.91406 1.44141 10.1602 1.6875 10.4766 1.6875H12.7969L13.4648 2.8125H8.05078C7.45312 2.00391 6.50391 1.40625 4.57031 1.40625H2.60156C2.14453 1.40625 1.72266 1.79297 1.75781 2.28516C1.75781 2.74219 2.10938 3.09375 2.60156 3.09375H4.57031C5.41406 3.09375 5.90625 3.48047 6.22266 3.97266L5.83594 4.71094C5.37891 4.57031 4.88672 4.5 4.39453 4.53516C2.00391 4.60547 0.105469 6.53906 0.0703125 8.89453C0 11.4609 2.03906 13.5 4.57031 13.5C6.64453 13.5 8.40234 12.0938 8.92969 10.125H11.8828C12.3398 10.125 12.7266 9.73828 12.7266 9.24609C12.6562 7.59375 13.3242 5.97656 14.6953 4.85156L15.1172 5.58984C14.168 6.43359 13.5352 7.66406 13.5703 9.03516C13.5703 11.4961 15.5742 13.5 18 13.5C20.5312 13.5352 22.5703 11.4961 22.5703 8.96484C22.5352 6.53906 20.5312 4.53516 18.0703 4.5ZM4.57031 11.8125C2.98828 11.8125 1.75781 10.582 1.75781 9C1.75781 7.45312 2.98828 6.1875 4.57031 6.1875C4.71094 6.1875 4.85156 6.22266 4.99219 6.22266L3.55078 8.89453C3.23438 9.45703 3.62109 10.125 4.28906 10.125H7.13672C6.67969 11.1445 5.69531 11.8125 4.57031 11.8125ZM20.8477 9.17578C20.7773 10.582 19.6172 11.7422 18.2109 11.8125C16.5938 11.918 15.2578 10.6172 15.2578 9C15.2578 8.26172 15.5391 7.59375 16.0312 7.06641L17.7539 9.98438C17.9297 10.2305 18.2461 10.3359 18.5273 10.1602L19.0195 9.87891C19.2656 9.73828 19.3711 9.38672 19.1953 9.10547L17.5078 6.25781C17.6836 6.22266 17.8594 6.22266 18.0703 6.22266C19.6523 6.1875 20.9531 7.55859 20.8477 9.17578Z" fill="#F17228"/>
</svg>

                        <span>Delivery</span>
                    </div>
                    <div className="pickup">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.375 5.625V4.5C12.375 2.03906 10.3359 0 7.875 0C5.37891 0 3.375 2.03906 3.375 4.5V5.625H0V15.1875C0 16.7695 1.23047 18 2.8125 18H12.9375C14.4844 18 15.75 16.7695 15.75 15.1875V5.625H12.375ZM5.625 4.5C5.625 3.26953 6.60938 2.25 7.875 2.25C9.10547 2.25 10.125 3.26953 10.125 4.5V5.625H5.625V4.5ZM11.25 8.71875C10.7578 8.71875 10.4062 8.36719 10.4062 7.875C10.4062 7.41797 10.7578 7.03125 11.25 7.03125C11.707 7.03125 12.0938 7.41797 12.0938 7.875C12.0938 8.36719 11.707 8.71875 11.25 8.71875ZM4.5 8.71875C4.00781 8.71875 3.65625 8.36719 3.65625 7.875C3.65625 7.41797 4.00781 7.03125 4.5 7.03125C4.95703 7.03125 5.34375 7.41797 5.34375 7.875C5.34375 8.36719 4.95703 8.71875 4.5 8.71875Z" fill="#757575"/>
</svg>

                       <span> Pickup</span>
                    </div>
                  </div>
                  <div className="search-food">
                 <div className="input-feild">
                       <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.0625 23.5312C8.48438 24.1875 9.46875 24.1875 9.89062 23.5312C16.7344 13.6875 18 12.6562 18 9C18 4.03125 13.9688 0 9 0C3.98438 0 0 4.03125 0 9C0 12.6562 1.21875 13.6875 8.0625 23.5312ZM9 12.75C6.89062 12.75 5.25 11.1094 5.25 9C5.25 6.9375 6.89062 5.25 9 5.25C11.0625 5.25 12.75 6.9375 12.75 9C12.75 11.1094 11.0625 12.75 9 12.75Z" fill="#FF7474"/>
</svg>

                    <input type="text" placeholder="Enter Your Address" />
                 </div>
              <a href=""><div className="search-btn">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8086 12.1133L11.0742 9.37891C10.9375 9.26953 10.7734 9.1875 10.6094 9.1875H10.1719C10.9102 8.23047 11.375 7.02734 11.375 5.6875C11.375 2.57031 8.80469 0 5.6875 0C2.54297 0 0 2.57031 0 5.6875C0 8.83203 2.54297 11.375 5.6875 11.375C7 11.375 8.20312 10.9375 9.1875 10.1719V10.6367C9.1875 10.8008 9.24219 10.9648 9.37891 11.1016L12.0859 13.8086C12.3594 14.082 12.7695 14.082 13.0156 13.8086L13.7812 13.043C14.0547 12.7969 14.0547 12.3867 13.8086 12.1133ZM5.6875 9.1875C3.74609 9.1875 2.1875 7.62891 2.1875 5.6875C2.1875 3.77344 3.74609 2.1875 5.6875 2.1875C7.60156 2.1875 9.1875 3.77344 9.1875 5.6875C9.1875 7.62891 7.60156 9.1875 5.6875 9.1875Z" fill="white"/>
</svg>
  <span>Find Food</span>
              </div></a>
                  </div>
                </div>
                </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                        <div className="first-right" >
                    <img src={food1} alt='food-dish' />
                </div>
                    </div>
                </div>
               </div>
            </section>
            <section className="food-item-container">
            <Item></Item>
            </section>
            <section className="work-flow">
                <div className="container">
                    <h1>How does it work</h1>
                  <div className="work">
                    <div className="work-first">
                        <div className="work-image"><img src={location} alt="" /></div>
                         <div className="flow-step">
                            <span>Select Location</span>
                         <p>Choose the location where your food will be delivered.</p>
                         </div>
                    </div>
                     <div className="work-first">
                        <div className="work-image"><img src={order} alt="" /></div>
                         <div className="flow-step">
                            <span>Choose Order</span>
                         <p>Check over hundreds of menus to pick your favorite food</p>
                         </div>
                    </div>
                    <div className="work-first">
                        <div className="work-image"><img src={pay} alt="" /></div>
                         <div className="flow-step">
                            <span>Pay advanced</span>
                         <p>It's quick, safe, and simple. Select several methods of payment</p>
                         </div>
                    </div>
                      <div className="work-first">
                        <div className="work-image"><img src={enjoy} alt="" /></div>
                         <div className="flow-step">
                            <span>Enjoy meals</span>
                         <p>Food is made and delivered directly to your home.</p>
                         </div>
                    </div>
                  </div>
                </div>
            </section>
            <section className="popular">
                 <div className="container-fluid">
                    <h1>Popular items</h1>
                   
                    <div className="row g-4">
                        <div className="col-1" onClick={() => prevRef.current()} >
                           <div className="leftarrow">
                            <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.580078 13.1484C0 13.7285 0 14.6953 0.580078 15.2754L13.084 27.8438C13.7285 28.4238 14.6953 28.4238 15.2754 27.8438L16.7578 26.3613C17.3379 25.7812 17.3379 24.8145 16.7578 24.1699L6.83203 14.1797L16.7578 4.25391C17.3379 3.60938 17.3379 2.64258 16.7578 2.0625L15.2754 0.580078C14.6953 0 13.7285 0 13.084 0.580078L0.580078 13.1484Z" fill="white"/>
</svg>

                           </div>
                        </div>
                         <div className="col-10">
                            <PopularItem nextRef={nextRef} prevRef={prevRef} ></PopularItem>
                         </div>
                        <div className="col-1" onClick={() => nextRef.current()}   >
                           <div className="rightarrow">
                            <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7578 15.2754C17.3379 14.6953 17.3379 13.7285 16.7578 13.1484L4.25391 0.580078C3.60938 0 2.64258 0 2.0625 0.580078L0.580078 2.0625C0 2.64258 0 3.60938 0.580078 4.25391L10.5059 14.1797L0.580078 24.1699C0 24.8145 0 25.7812 0.580078 26.3613L2.0625 27.8438C2.64258 28.4238 3.60938 28.4238 4.25391 27.8438L16.7578 15.2754Z" fill="white"/>
</svg>

                           </div>
                        </div>
                
                   </div>
                 </div>
            </section>
            <section className="featured">
                <h1>Featured Restaurants</h1>
                <div className="container">
                    <div className="row">
                          <FeaturedItem></FeaturedItem>
                    </div>
                    <div className="view-btn-container">
                      <a href="">
                          <div className="view-btn">
                        <span> View All</span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.10938 6.48047C7.35547 6.23438 7.35547 5.82422 7.10938 5.57812L1.80469 0.246094C1.53125 0 1.12109 0 0.875 0.246094L0.246094 0.875C0 1.12109 0 1.53125 0.246094 1.80469L4.45703 6.01562L0.246094 10.2539C0 10.5273 0 10.9375 0.246094 11.1836L0.875 11.8125C1.12109 12.0586 1.53125 12.0586 1.80469 11.8125L7.10938 6.48047Z" fill="white"/>
</svg>

                    </div>
                      </a>
                    </div>
                </div>
            </section>
            <section className="search-food"> 
                 <div className="container">
                    <div className="search-head">
                        <h1>Search by Food</h1>
                        <div className="search-right">
                            <div className="search-view"><span>View All</span>
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.125 7.40625C8.40625 7.125 8.40625 6.65625 8.125 6.375L2.0625 0.28125C1.75 0 1.28125 0 1 0.28125L0.28125 1C0 1.28125 0 1.75 0.28125 2.0625L5.09375 6.875L0.28125 11.7188C0 12.0312 0 12.5 0.28125 12.7812L1 13.5C1.28125 13.7812 1.75 13.7812 2.0625 13.5L8.125 7.40625Z" fill="#FFB30E"/>
</svg>
</div>
 <div className="search-food-btn">
    <div className="leftarrow custom-prev">
                            <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.580078 13.1484C0 13.7285 0 14.6953 0.580078 15.2754L13.084 27.8438C13.7285 28.4238 14.6953 28.4238 15.2754 27.8438L16.7578 26.3613C17.3379 25.7812 17.3379 24.8145 16.7578 24.1699L6.83203 14.1797L16.7578 4.25391C17.3379 3.60938 17.3379 2.64258 16.7578 2.0625L15.2754 0.580078C14.6953 0 13.7285 0 13.084 0.580078L0.580078 13.1484Z" fill="white"/>
</svg>

                           </div>
<div className="rightarrow custom-next">
                            <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7578 15.2754C17.3379 14.6953 17.3379 13.7285 16.7578 13.1484L4.25391 0.580078C3.60938 0 2.64258 0 2.0625 0.580078L0.580078 2.0625C0 2.64258 0 3.60938 0.580078 4.25391L10.5059 14.1797L0.580078 24.1699C0 24.8145 0 25.7812 0.580078 26.3613L2.0625 27.8438C2.64258 28.4238 3.60938 28.4238 4.25391 27.8438L16.7578 15.2754Z" fill="white"/>
</svg>

                           </div>
 </div>
                        </div>
                    </div>
                    <div className="row g-4">
                     <Food ></Food>
                    </div>
                 </div>
                  </section>
             <section className="quality">
                 <div className="container">
                    <div className="quality-container">
                       <div className="quality-item">
                        <img src={quality1} alt="" />
                         <span>Daily
Discounts</span>
                       </div>
                        <div className="quality-border"></div>
                       <div className="quality-item ">
                        <img src={quality2} alt="" />
                         <span>Live
Tracing</span>
                       </div>
                       <div className="quality-border"></div>
                       <div className="quality-item">
                        <img src={quality3} alt="" />
                         <span>Quick
Delivery</span>
                       </div>
                 </div>
                 </div>
                </section>     
            <section className="app-download">
                <div className="container">
                   
                        <div className="app-left">
                           <div className="phone-container">
                              <img src={phone2} alt="" />
                             <img src={phone1} alt="" />
                           </div>
                        </div>
                        
                        <div className="app-right">
                             <div className="app-info">
                            <div> <h1>Install the app</h1>
                             <p>It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p></div>
                             <div className="download-btn">
                                <a href="https://play.google.com/store/games?device=windows">
                                    <div className="google-play">
                                    <img src={download1} alt="" />
                                    <div><span>GET IT ON</span>
                                    <h5>Google Play</h5></div>
                                </div>
                                </a>
                                <a href="https://www.apple.com/app-store/">
                                     <div className="google-play">
                                    <img src={download2} alt="" />
                                    <div><span>Downloat at the</span>
                                    <h5>App Store</h5></div>
                                </div>
                                </a>
                             </div>
                         </div>
                        </div>
                </div>
                
            </section>
            <section className="common-food">
                <div className="container">
                      
                       <Common 
                       title="Best deals"
                       highlight=" Crispy Sandwiches"
                       desc="Enjoy the large size of sandwiches. Complete 
perfect slice of sandwiches."
                    image={common1}

                        ></Common>
                       <Common
                        title="Celebrate  parties
with"
                       highlight=" Fried Chicken"
                       desc="Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out 
best deals for fried chicken."
                    image={common2}
                      reverse={true}
                       ></Common>
                       <Common 
                        title="Wanna eat hot 
& spicy"
                       highlight=" Pizza?"
                       desc="Pair up with a friend and enjoy the 
hot and crispy pizza pops. Try it 
with the best deals."
                    image={common3}
                       ></Common>
                
                </div>
            </section>
            <section className="testmonial">
               <div className="container-fluid">
                 <h1>Are you ready to order with the best deals?</h1>
                <a href=""><div className="test-order"><span>Proceed to order</span>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.125 7.40625C8.40625 7.125 8.40625 6.65625 8.125 6.375L2.0625 0.28125C1.75 0 1.28125 0 1 0.28125L0.28125 1C0 1.28125 0 1.75 0.28125 2.0625L5.09375 6.875L0.28125 11.7188C0 12.0312 0 12.5 0.28125 12.7812L1 13.5C1.28125 13.7812 1.75 13.7812 2.0625 13.5L8.125 7.40625Z" fill="white"/>
</svg>

                </div></a>
               </div>
            </section>
             <Footer></Footer>
        </div>
    )
}
export default Home