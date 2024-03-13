 import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSecttionCarouselComp/HomeSectionCarousel'
import { homeIemsData } from '../data/HomeItemsData'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
         <HomeSectionCarousel  data={homeIemsData} sectionName={"women's salwar suit"}/>
         <HomeSectionCarousel data={homeIemsData} sectionName={"Men's Shoes"}/>
         <HomeSectionCarousel data={homeIemsData} sectionName={"Men's Shirt"}/>
        </div>
    </div>
   
  )
}

export default HomePage