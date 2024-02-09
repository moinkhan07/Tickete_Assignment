import React,{useState} from 'react'
import ChatWithUs from '../Assets/chatwithus.jpg';
import Add from '../Assets/add.png';
import Cross from '../Assets/close.png';

const FAQ = () => {
    const [openQuestions, setOpenQuestions] = useState({});

    const toggleQuestion = (index) => {
      setOpenQuestions((prevState) => ({
        ...prevState,
        [index]: !prevState[index] || false,
      }));
    };
    const faqData = [
        {
          question: "What should I do on my first trip to Rome?",
          answer: "On your first trip to Rome, explore iconic landmarks like the Colosseum and Vatican City, savor authentic Italian cuisine, stroll through charming neighborhoods, and immerse yourself in the city's rich history and culture."
        },
        {
          question: "What are some hidden gems to see in Rome?",
          answer: "On your first trip to Rome, explore iconic landmarks like the Colosseum and Vatican City, savor authentic Italian cuisine, stroll through charming neighborhoods, and immerse yourself in the city's rich history and culture."
        },
        {
            question: "What much time should I spend in Rome?",
            answer: "On your first trip to Rome, explore iconic landmarks like the Colosseum and Vatican City, savor authentic Italian cuisine, stroll through charming neighborhoods, and immerse yourself in the city's rich history and culture."
        },
        {
            question: "What food is Rome known for?",
            answer: "On your first trip to Rome, explore iconic landmarks like the Colosseum and Vatican City, savor authentic Italian cuisine, stroll through charming neighborhoods, and immerse yourself in the city's rich history and culture."
        },
        {
            question: "What is the best way to get around Rome?",
            answer: "On your first trip to Rome, explore iconic landmarks like the Colosseum and Vatican City, savor authentic Italian cuisine, stroll through charming neighborhoods, and immerse yourself in the city's rich history and culture."
        }
      ];
  return (
    <div id='faq'>
        <div id='faqbanner'>
            <h2>Frequently asked questions</h2>
            <p>Here are some of our most asked questions.</p>
            <div className='chatwithus'>
                <div>
                    <p>Still need help? <br/> We're here for you.</p>
                    <button>Chat with us</button>
                </div>
                <div>
                    <img src={ChatWithUs} alt="faq logo"/>
                </div>
            </div>
        </div>
        <div id='faqquestions'>
        {faqData.map((question, index) => (
          <div className='faqquestion' key={index}>
            <div>
              <img
                src={openQuestions[index] ? Cross : Add}
                alt={openQuestions[index] ? 'cross' : 'add'}
                onClick={() => toggleQuestion(index)}
              />
            </div>
            <div>
              <p>{question.question}</p>
              {openQuestions[index] && <p className='questionanswer'>{question.answer}</p>}
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default FAQ