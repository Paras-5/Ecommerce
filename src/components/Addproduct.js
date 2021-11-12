import handbag from './assets/handbag.jpg'
import headphone from './assets/headphone.jpg'
import Mobile from './assets/Mobile.jpg'
import Shoes from './assets/shoes.jpg'
import smartwatch from './assets/smartwatch.jpg'
import sweatshirt from './assets/sweatshirt.jpg'
import Products from './products'
const Addproduct = () =>{
    const arr=[
        {
            image:<img class="items" src={handbag} alt="Handbag" width={200} height={200}/>,
            name:"Handbag",
            price:"Rs.10000"
        },
        {
            image:<img class="items" src={headphone} alt="Headphone" width={200} height={200}/>,
            name:"Headphone",
            price:"Rs.2000"
        },
        {
            image:<img class="items" src={Mobile} alt="Mobile" width={200} height={200}/>,
            name:"Mobile",
            price:"Rs.50000"
        },
        {
            image:<img class ="items" scr={Shoes} alt="Shoes" width={200} height={200}/>,
            name:"Shoes",
            price:"Rs.3000"
        },
        {
            image:<img class="items" src={smartwatch} alt="Smartwatch" width={200} height={200}/>,
            name:"Smartwatch",
            price:"Rs.12000"
        },
        {
            image:<img class="items" src={sweatshirt} alt="Sweatshirt" width={200} height={200}/>,
            name:"Sweatshirt",
            price:"Rs.1500"
        },
    ]
    return(
        <div class ="products_array">
          {
             arr.map((arr) =>{return <Products image={arr.image} name={arr.name} price={arr.price}/>
                })
          }
        </div>
    )
}
export default Addproduct;
