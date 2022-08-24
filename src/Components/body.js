import './body.css';
import img1 from "./images/food image-1.jpg"
import img2 from "./images/food image-2.jpg"
import img3 from "./images/food image-3.jpg"
import img4 from "./images/food image-4.jpg"
import img5 from "./images/food image-5.jpg"
import img6 from "./images/food image-6.jpg"
function Body(){
    return(
        <div className='container'>
            <div className='wrapper'>
                <a href='' className='Hotel1'>
                <img className='img' src={img1}></img>
                <p>HOTEL PALMYRA Grand Suite <br/>
                  Indian, Chinese, Tandoor</p></a>
                  <a href='' className='Hotel2'>
                <img className='img' src={img2}></img>
                <p>BASMATI EXPRESS --35 mins₹ 200 for two Chinese, <br/> Indian Vannarpettai, palayamkottai</p></a>
                  <a href='' className='Hotel3'>
                <img className='img' src={img3}></img>
                <p>AJAY HOT SPOT --32 mins₹ 250 for two South Indian,<br/> Ice Creamm Vannarpettai, vasantha nagar</p></a>
                <a href='' className='Hotel4'>
                <img className='img' src={img4}></img>
                <p>AJAY HOT SPOT --32 mins₹ 250 for two South Indian,<br/> Ice Creamm Vannarpettai, vasantha nagar</p></a>
            </div>
        </div>
    )
}
export default Body;