import { useState } from 'react';
import icon from './assets/icon.png';
import slideEndIcon from './assets/slideEndIcon.png'
import playAgain from './assets/playAgain.svg'
import a1 from './assets/answers/a1.png'
import a2 from './assets/answers/a2.png'
import a3 from './assets/answers/a3.png'
import a4 from './assets/answers/a4.png'
import a5 from './assets/answers/a5.png'
import a6 from './assets/answers/a6.png'
import a7 from './assets/answers/a7.png'
import a8 from './assets/answers/a8.png'
import a9 from './assets/answers/a9.png'
import a10 from './assets/answers/a10.png'


function App() {
  const data = [
    { question: "Eve has 9 apples and she was given 7 more. How many apples does she have now? ", answer: "Eve has 16 apples now (9 + 7 = 16)",img:a1 },
    { question: "Lucas had 14 candies. He ate 5. How many candies does he have left? ", answer: "Lucas has 9 candies left (14 - 5 = 9)",img:a2 },
    { question: "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?", answer: "There are 5 cats left in the room (11 - 6 = 5)",img:a3 },
    { question: "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now? ", answer: "Tom now has 14 pencils (8 + 6 = 14)",img:a4 },
    { question: "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left? ", answer: "Maria has 9 cupcakes left (20 - 11 = 9)",img:a5 },
    { question: "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?", answer: "There are 12 goldfish in the aquarium now (7+5=12)",img:a6 },
    { question: "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total? ", answer: "There are 16 oranges in total (10 + 6 = 16)",img:a7 },
    { question: "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?", answer: "There are 11 apples left in the box (18-7=11)",img:a8 },
    { question: "Lisa had 12 balloons, and 7 flew away. How many balloons does Rita have now?", answer: "Rita has 5 balloons now (12-7=5)",img:a9},
    { question: "Michael had $15, and his father gave him $5 more. How much money does Michael have now?", answer: "Michael has $20 now (15+5=20)",img:a10 }

  ];
  const [showAnswer, setShowAnswer] = useState(false); // Set initial state to false
  const [slideNo, setSlideNo] = useState(0);
  const [slideEnd,setSlideEnd]=useState(false)
  const [slideStart,setSlideStart]=useState(true)
  const [sound,setSound]=useState(false)
  const [animate, setAnimate] = useState('');

  const handleNext = () => {
    setShowAnswer(false)
    document.body.classList.add('no-scroll'); // Disable scrolling
    setAnimate('slide-out-left');
    setTimeout(() => {
      if(slideNo===data.length-1)
        setSlideEnd(true)
      else
     { setSlideNo((prevSlideNo) => (prevSlideNo + 1) % data.length);}
      setAnimate('slide-in-right');
      setTimeout(() => {
        setAnimate('');
        document.body.classList.remove('no-scroll'); // Re-enable scrolling
      }, 500); // Duration of slide-in animation
    }, 500); // Duration of slide-out animation

  };

  const handlePrev = () => {
    setShowAnswer(false)
    document.body.classList.add('no-scroll'); // Disable scrolling
    setAnimate('slide-out-right');
    setTimeout(() => {
      setSlideNo((prevSlideNo) => (prevSlideNo - 1 + data.length) % data.length);
      setAnimate('slide-in-left');
      setTimeout(() => {
        setAnimate('');
        document.body.classList.remove('no-scroll'); // Re-enable scrolling
      }, 500); // Duration of slide-in animation
    }, 500); // Duration of slide-out animation
  };

   function Circle({color}){
    return(<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill={color}/></svg>
)}
  const soundOff = (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2409 2.07663C11.2085 2.06585 11.1732 2.08025 11.1576 2.11055C11.1282 2.16759 11.0936 2.22179 11.0542 2.27243L6.21777 8.49074C6.02142 8.74319 5.71951 8.89085 5.39969 8.89085H2.636C2.44521 8.89085 2.29054 9.04552 2.29054 9.23631V14.7637C2.29054 14.9545 2.44521 15.1092 2.636 15.1092H5.39969C5.71951 15.1092 6.02142 15.2568 6.21777 15.5093L11.0542 21.7276C11.0936 21.7782 11.1282 21.8324 11.1576 21.8895C11.1732 21.9197 11.2085 21.9341 11.2409 21.9234C11.2732 21.9126 11.2928 21.8799 11.2871 21.8463C11.2774 21.789 11.2725 21.731 11.2725 21.6729V2.32708C11.2725 2.26899 11.2774 2.211 11.2871 2.15373C11.2928 2.12014 11.2732 2.0874 11.2409 2.07663ZM9.36847 1.06366C9.8759 0.191913 10.9298 -0.211955 11.8963 0.110226C12.8663 0.433537 13.4679 1.39455 13.3453 2.40023V21.5998C13.4679 22.6055 12.8663 23.5665 11.8963 23.8898C10.9298 24.212 9.8759 23.8081 9.36847 22.9363L4.89282 17.1819H2.636C1.30045 17.1819 0.217773 16.0992 0.217773 14.7637V9.23631C0.217773 7.90076 1.30045 6.81808 2.636 6.81808H4.89282L9.36847 1.06366ZM18.4853 8.50335C18.8901 8.09862 19.5463 8.09862 19.951 8.50335L21.9818 10.5342L24.0127 8.50335C24.4174 8.09862 25.0736 8.09862 25.4784 8.50335C25.8831 8.90808 25.8831 9.56429 25.4784 9.96902L23.4475 11.9999L25.4784 14.0307C25.8831 14.4355 25.8831 15.0917 25.4784 15.4964C25.0736 15.9011 24.4174 15.9011 24.0127 15.4964L21.9818 13.4655L19.951 15.4964C19.5463 15.9011 18.8901 15.9011 18.4853 15.4964C18.0806 15.0917 18.0806 14.4355 18.4853 14.0307L20.5162 11.9999L18.4853 9.96902C18.0806 9.56429 18.0806 8.90808 18.4853 8.50335Z" fill="white"/>
    </svg>
  );

  const soundOn=(
<svg width="35" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#FFFFFF" fill="none"><path d="M34.12,49.2,20.41,39.32H12V24h7.54l14.58-9.2a.39.39,0,0,1,.59.33V48.88A.39.39,0,0,1,34.12,49.2Z" stroke-linecap="square"/><path d="M39.63,24.29a8,8,0,0,1,.16,15.37"/><path d="M42.23,18.91A13.66,13.66,0,0,1,42.5,45"/></svg>  )

  function handleStartPlay(){
    setSlideStart(false)
  }
  function handlePlayAgain(){
    setSlideNo(0)
    setSlideStart(true)
    setSlideEnd(false)
  }
  
  return (
    <>
      <div className="topbar">
        <div>

          <img className="top-bar-icon" src={icon} alt="Top Bar Icon" />
          <span className='top-bar-font'>Cloudifyapp Pvt. Ltd.</span>
        </div>
        <span className='button' onClick={()=>setSound(!sound)}>{sound?soundOn:soundOff}</span>
      </div>


      {slideStart?
      <div className='slideStart'>
            <div><p className='slide-start-heading'>Addition and Subtraction Facts within 20</p></div>
            <div><p className='slide-start-description'>Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!</p></div>
            <div>  <button onClick={()=>handleStartPlay()} className='slideEndButton'><svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 1C5.43263 1 0.5 5.93263 0.5 12C0.5 18.0674 5.43263 23 11.5 23C17.5674 23 22.5 18.0674 22.5 12C22.5 5.93263 17.5674 1 11.5 1ZM11.5 22.0737C5.94211 22.0737 1.42632 17.5579 1.42632 12C1.42632 6.44211 5.94211 1.92632 11.5 1.92632C17.0579 1.92632 21.5737 6.44211 21.5737 12C21.5737 17.5579 17.0579 22.0737 11.5 22.0737Z" fill="black" stroke="black"/>
              <path d="M16.0853 11.2582L9.69374 7.27503C9.11479 6.9045 8.35059 7.32135 8.35059 8.01608V16.0056C8.35059 16.7003 9.11479 17.1171 9.69374 16.7466L16.0853 12.7635C16.6411 12.3929 16.6411 11.6056 16.0853 11.2582Z" fill="black"/>
              </svg>
              Let’s play</button></div>

      </div>
      
      
      :slideEnd?
      <div className='slide-end'>
        
            <img className='slide-end-icon' src={slideEndIcon}/>
            
            <div><p className='slide-end-text'>Hope you learned something new!</p></div>
           
            <div>  <button onClick={()=>handlePlayAgain()} className='slideEndButton'><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8093 3.05837C7.80713 3.13072 3.6378 6.90865 3.07428 11.8795C3.0103 12.4439 2.50089 12.8496 1.93648 12.7856C1.37208 12.7216 0.966406 12.2122 1.03039 11.6478C1.7105 5.6485 6.74245 1.08892 12.7796 1.0016C18.8167 0.914276 23.9784 5.32641 24.8317 11.3035C25.6851 17.2807 21.9642 22.961 16.1438 24.5665C11.2251 25.9233 6.10179 24.0129 3.22522 20.0271L3.29607 24.0858C3.30598 24.6537 2.85362 25.1221 2.28568 25.132C1.71775 25.1419 1.24931 24.6896 1.2394 24.1216L1.11973 17.2661C1.10982 16.6981 1.56218 16.2297 2.13012 16.2198L2.79171 16.2082C2.80751 16.2076 2.82328 16.2073 2.83903 16.2074L8.98569 16.1001C9.55362 16.0902 10.0221 16.5426 10.032 17.1105C10.0419 17.6784 9.58952 18.1469 9.02159 18.1568L4.50052 18.2357C6.78751 21.9338 11.287 23.7724 15.5969 22.5836C20.4194 21.2533 23.5024 16.5468 22.7954 11.5943C22.0883 6.64178 17.8115 2.98602 12.8093 3.05837Z" fill="black" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Play Again</button></div>

          


      </div>
      :<div className='main-section'>
        <div className='pagination'>

          <p className='pagination-text'>{slideNo + 1} / {data.length}</p>
          {data.map((_, index) => (

            (index === slideNo ? <Circle color={"red"}></Circle> : <Circle color={"white"}></Circle>)
          ))}

        </div>
        
       

        <div class='question-section'>
          <div className='button' id='prev-button' onClick={handlePrev}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_1_959)">
                <rect x="60" y="60" width="60" height="60" rx="30" transform="rotate(180 60 60)" fill="#F5EC02" fill-opacity="0.14" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6724 37.2559C31.347 37.5814 30.8194 37.5814 30.4939 37.2559L23.8272 30.5893C23.5018 30.2638 23.5018 29.7362 23.8272 29.4107L30.4939 22.7441C30.8194 22.4186 31.347 22.4186 31.6724 22.7441C31.9979 23.0695 31.9979 23.5972 31.6724 23.9226L25.595 30L31.6724 36.0774C31.9979 36.4028 31.9979 36.9305 31.6724 37.2559Z" fill="black" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_b_1_959" x="-60" y="-60" width="180" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="30" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_959" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_959" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>

          <div className={`flip-card ${showAnswer ? 'flipped' : ''} ${animate}`} onClick={() => setShowAnswer(!showAnswer)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {data[slideNo].question}
              </div>
              <div className="flip-card-back">
                <img className='answer-img' src={data[slideNo].img} alt="Answer" />
                <p>{data[slideNo].answer}</p>
              </div>
            </div>
          </div>

          <div className='button' id='next-button' onClick={handleNext}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_527)">
                <rect x="60" y="60" width="60" height="60" rx="30" transform="rotate(180 60 60)" fill="yellow" fill-opacity="100"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3274 37.2559C28.6528 37.5814 29.1805 37.5814 29.5059 37.2559L36.1726 30.5893C36.498 30.2638 36.498 29.7362 36.1726 29.4107L29.5059 22.7441C29.1805 22.4186 28.6528 22.4186 28.3274 22.7441C28.002 23.0695 28.002 23.5972 28.3274 23.9226L34.4048 30L28.3274 36.0774C28.002 36.4028 28.002 36.9305 28.3274 37.2559Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_b_1_527" x="-60" y="-60" width="180" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="30"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_527"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_527" result="shape"/>
                </filter>
                </defs>
            </svg>
          </div>
        </div>
       

          </div>
          
          }


<p className='footer'>Powered by<span>CLOUDIYFYAPPS</span></p>
          
    </>
  );
}

export default App;
