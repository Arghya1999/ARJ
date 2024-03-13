import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS file for styling
import { MainCarouselData } from '../../data/MainCarouselData';



const MainCarousel = () => {
    const items=MainCarouselData.map((item)=><img style={{width:'100%'}} key={item.path} className='cursor-pointer' src={item.image}  
         role='presentation' alt='_'/>
    )
   
  return (
   <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={3000}
    infinite
  />
  )
}

export default MainCarousel


// const MainCarousel = () =>{
//     const items = MainCarouselData.map((item)=>{
//         <img className='cursor-pointer' src={item.image}  role='presentation' alt=''/>
//     })

//     return(
//   <AliceCarousel
//     mouseTracking
//     items={items}
//     controlsStrategy="alternate"
//   />
// )};

// export default MainCarousel;
