

import { AiFillApple } from "react-icons/ai";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SiGooglebigquery } from "react-icons/si";
import { MdKeyboardVoice } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Carousal from "@itseasy21/react-elastic-carousel";

//img
import img1 from "../assets/data/product1.jpg";
import img2 from "../assets/data/product2.jpg";
import img3 from "../assets/data/product3.jpg";
import img4 from "../assets/data/product4.jpg";
import img5 from "../assets/data/product5.jpg";
import img6 from "../assets/data/product6.jpg";
import img7 from "../assets/data/product7.jpg";
import img8 from "../assets/data/product8.jpg";
import img9 from "../assets/data/product9.jpg";

import chatbot from "../assets/data/chatbot.png";
import bmi from "../assets/data/image.png";
import dish from "../assets/data/dish.png";
import statistic from "../assets/data/statistic.png";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const IMG_LIST= [
  {img: img1, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img2, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img3, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img4, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img5, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img6, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img7, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img8, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {img: img9, title: 'Product Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
];
const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width:950, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
]
function App() {
  return (
    <div className=''>
      <nav className='bg-[#f7f7f7] p-4'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <AiFillApple className="text-[#4f46e5] h-8 w-8" />
            <span className='font-bold text-xl'>
                NutriTracker©
            </span>
          </div>
          <div className='flex items-center space-x-4'>
            <a href='#' className='text-[#4f46e5] font-bold'>Home</a>
            <a href='#' className='text-[#4f46e5] font-bold'>About</a>
            <a href='#' className='text-[#4f46e5] font-bold'>Contact</a>
            <a href='#' className='text-[#4f46e5] font-bold'>Login</a>
            <a href='#' className='text-white font-bold bg-[#4f46e5] px-4 py-2 rounded-lg'>Sign Up</a>
          </div>
        </div>
      </nav>

      <header className="bg-[#e0e7ff] p-8">
        <div className='mx-auto container '>
          <div className='flex flex-col items-start space-y-4'>
            <span className=' p-1 rounded-full'>
              Health Matters ❤️
            </span>
            <h1 className='font-bold text-5xl text-[#1e293b]'>
              One Step Solution
              <br />
              for all your dietary
              <br />
              needs.
            </h1>
            <p className='text-lg text-[#475569]'>
                Using your BMI index we calculate whether the
                <br />
                dish is suitable for you.
            </p>
            <div className='flex w-full max-w-md space-x-4'>
                <TextField size='small' placeholder='Search your product'/>
                <Button variant='contained' color='info' size='small'><SiGooglebigquery className='text-xl'/></Button>
                <Button variant='contained' color='info' size='small'><MdKeyboardVoice className='text-xl'/></Button>
                <Button variant='contained' color='info' size='small'><IoSettingsSharp className='text-xl'/></Button>
            </div>
          </div>
        </div>
      </header>

      <section className='py-8 relative '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold'>Feauture We Provided</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          
          <Card variant='outline' >
            <CardContent>
                <span className='flex'>
                  <h3 className='text-2xl font-bold'>Calculate BMI is easier</h3>
                  <img src={bmi} style={{width:"50px", height:"50px"}}></img>
                </span>
                <p>We calculate your BMI index from data like age, height, weight.</p>
            </CardContent>
          </Card>
          <Card variant='outline ' >
            <CardContent>
              <img src={dish}  style={{width:"50px", height:"50px"}}></img>
              <h3 className='text-xl font-bold'>Calculating BMI is easier</h3>
              <p>We calculate your BMI index from data like age, height, weight.</p>
            </CardContent>
          </Card>
          <Card variant='outline'>
            <CardContent>
              <img src={statistic}  style={{width:"50px", height:"50px"}}></img>
              <h3 className='text-xl font-bold'>Calculating BMI is easier</h3>
              <p>We calculate your BMI index from data like age, height, weight.</p>
            </CardContent>
          </Card>
          <Card variant='outline'>
            <CardContent>
              <img src={chatbot}  style={{width:"50px", height:"50px"}}></img>
              <h3 className='text-xl font-bold'>Calculating BMI is easier</h3>
              <p>We calculate your BMI index from data like age, height, weight.</p>
            </CardContent>
          </Card>
        </div>
        </div>
        
      </section>

      <section className='py-8'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold'>Related Topics</h2>
          <Carousal breakPoints={breakPoints} className='mt-4' showArrows={false}>
              {IMG_LIST.map((item, index) => (
                <div>
                  <Card key={index} variant='outline' >
                    <CardContent >
                      <img src={item.img} className='object-fill h-48 w-96 rounded-lg'></img>
                      <h3 className='text-xl font-bold'>{item.title}</h3>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </Carousal>

          <Carousal breakPoints={breakPoints} className='mt-4' showArrows={false}>
              {IMG_LIST.map((item, index) => (
                <div>
                  <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <img src={item.img} className='object-fill h-48 w-96 rounded-lg'></img>
                      <h3 className='text-xl font-bold'>{item.title}</h3>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </Carousal>
        </div>
      </section>
      

      <footer className='bg-[#f7f7f7] py-6'>
        <div className='flex p-4 justify-between items-center'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-xl'>NutriTracker©</h3>
              <p>© 2021 NutriTracker. All rights reserved.</p>
            </div>
            
            <div>
              <ul className='flex space-x-4'>
                <li className='text-[#4f46e5]'>Home</li>
                <li className='text-[#4f46e5]'>About</li>
                <li className='text-[#4f46e5]'>Contact</li>
              </ul>
            </div>

            <div>
              <ul className='flex space-x-4'>
                <li className='text-[#4f46e5]'><TiSocialFacebookCircular  className='text-3xl'/></li>
                <li className='text-[#4f46e5]'><FaInstagram  className='text-3xl'/></li>
                <li className='text-[#4f46e5]'><CiLinkedin  className='text-3xl'/></li>
              </ul>
            </div>
            
        </div>
        
      </footer>
    </div>
  );
}

export default App;
