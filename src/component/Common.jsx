
const Common = ({title, highlight, desc, image, reverse })=>{
    return  (
        <>
       <div className="row food-row">
         <div className={`col-lg-5 ${reverse ? "order-lg-2" : ""}`}>
          <div className="food-content">
            <div className="common-info">
             <h1>{title} <span>{highlight}</span></h1>
           <p>{desc}</p>
          </div>
   <a href=""><div className="proceed-btn">
  <span>  Proceed to order</span><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.125 7.40625L2.0625 13.5C1.75 13.7812 1.28125 13.7812 1 13.5L0.28125 12.7812C0 12.5 0 12.0312 0.28125 11.7188L5.09375 6.875L0.28125 2.0625C0 1.75 0 1.28125 0.28125 1L1 0.28125C1.28125 0 1.75 0 2.0625 0.28125L8.125 6.375C8.40625 6.65625 8.40625 7.125 8.125 7.40625Z" fill="white"/>
</svg>

   </div></a>
          </div>
        </div>
        <div className={`col-lg-7 ${reverse ? "order-lg-1" : ""}`}>
          <img src={image} alt="" />
        </div>
       </div>
        </>
    )
}
export default Common