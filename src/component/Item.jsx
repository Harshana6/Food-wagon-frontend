import item1 from '../assets/Images/item1.png'
import item2 from '../assets/Images/item2.png'
import item3 from '../assets/Images/item3.png'
import item4 from '../assets/Images/item4.png'

const Item = ()=>{
    const items = [
        {
            image:item1,
            discout:'15',
            itemname:'Greys Vage',
            timer:'10 days remaining' 
        },
        {
            image:item2,
            discout:'10',
            itemname:'Greys Vage',
            timer:'6 days remaining' 
        },
         {
            image:item3,
            discout:'25',
            itemname:'Greys Vage',
            timer:'7 days remaining' 
        },
        {
            image:item4,
            discout:'20',
            itemname:'Greys Vage',
            timer:'8 days remaining' 
        }
    ]
    return(
        <div className='container'>
           <div className="row g-4">
             {
                items.map((item,index)=>(
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 " key={index}>
                 <div className='item-image'>
                <img src={item.image} alt="" />
                <div className="discount">
                    <h1>{item.discout}</h1>
                    <div><span>%</span><p>Off</p></div>
                </div>
                </div>
            <div className='item-info'>
                <span>{item.itemname}</span>
                <div className='time-remain'>{item.timer}</div>
            </div>
            </div>
        ))
            }
           </div>
        </div>
        
    )
}
export default Item