import logo from '../assets/Images/Logo (8).png'
import { useState } from "react";
const Nav = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <>
        <div className="nav-upper"><span>Deliver to:</span> <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04688 17.6484C6.36328 18.1406 7.10156 18.1406 7.41797 17.6484C12.5508 10.2656 13.5 9.49219 13.5 6.75C13.5 3.02344 10.4766 0 6.75 0C2.98828 0 0 3.02344 0 6.75C0 9.49219 0.914062 10.2656 6.04688 17.6484ZM6.75 9.5625C5.16797 9.5625 3.9375 8.33203 3.9375 6.75C3.9375 5.20312 5.16797 3.9375 6.75 3.9375C8.29688 3.9375 9.5625 5.20312 9.5625 6.75C9.5625 8.33203 8.29688 9.5625 6.75 9.5625Z" fill="#FFB30E"/>
</svg>
 Current Location <span>Mohammadpur Bus Stand, Dhaka</span></div>
        <nav className='container nav-bar'>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="nav-center"><span>Deliver to:</span> <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04688 17.6484C6.36328 18.1406 7.10156 18.1406 7.41797 17.6484C12.5508 10.2656 13.5 9.49219 13.5 6.75C13.5 3.02344 10.4766 0 6.75 0C2.98828 0 0 3.02344 0 6.75C0 9.49219 0.914062 10.2656 6.04688 17.6484ZM6.75 9.5625C5.16797 9.5625 3.9375 8.33203 3.9375 6.75C3.9375 5.20312 5.16797 3.9375 6.75 3.9375C8.29688 3.9375 9.5625 5.20312 9.5625 6.75C9.5625 8.33203 8.29688 9.5625 6.75 9.5625Z" fill="#FFB30E"/>
</svg>
 Current Location <span>Mohammadpur Bus Stand, Dhaka</span></div>
            <div className={`nav-right ${menuOpen ? "active" : ""}`}>
               <div className='search'>
                 <span> <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7539 15.5742L14.2383 12.0586C14.0625 11.918 13.8516 11.8125 13.6406 11.8125H13.0781C14.0273 10.582 14.625 9.03516 14.625 7.3125C14.625 3.30469 11.3203 0 7.3125 0C3.26953 0 0 3.30469 0 7.3125C0 11.3555 3.26953 14.625 7.3125 14.625C9 14.625 10.5469 14.0625 11.8125 13.0781V13.6758C11.8125 13.8867 11.8828 14.0977 12.0586 14.2734L15.5391 17.7539C15.8906 18.1055 16.418 18.1055 16.7344 17.7539L17.7188 16.7695C18.0703 16.4531 18.0703 15.9258 17.7539 15.5742ZM7.3125 11.8125C4.81641 11.8125 2.8125 9.80859 2.8125 7.3125C2.8125 4.85156 4.81641 2.8125 7.3125 2.8125C9.77344 2.8125 11.8125 4.85156 11.8125 7.3125C11.8125 9.80859 9.77344 11.8125 7.3125 11.8125Z" fill="#FFB30E"/>
</svg>
Search Food</span>
               </div>
                <a href=""><div className='login'> <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.875 9C10.3359 9 12.375 6.99609 12.375 4.5C12.375 2.03906 10.3359 0 7.875 0C5.37891 0 3.375 2.03906 3.375 4.5C3.375 6.99609 5.37891 9 7.875 9ZM11.0039 10.125H10.4062C9.63281 10.5117 8.78906 10.6875 7.875 10.6875C6.96094 10.6875 6.08203 10.5117 5.30859 10.125H4.71094C2.10938 10.125 0 12.2695 0 14.8711V16.3125C0 17.2617 0.738281 18 1.6875 18H14.0625C14.9766 18 15.75 17.2617 15.75 16.3125V14.8711C15.75 12.2695 13.6055 10.125 11.0039 10.125Z" fill="url(#paint0_linear_1_265)"/>
<defs>
<linearGradient id="paint0_linear_1_265" x1="-7.15325" y1="-22.6" x2="23.7784" y2="-21.2348" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB800"/>
<stop offset="1" stop-color="#FF8A00"/>
</linearGradient>
</defs>
</svg>
 <span>Login</span></div></a>
            </div>
             <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
    </div>
        </nav>
       </>
    )
}
export default Nav