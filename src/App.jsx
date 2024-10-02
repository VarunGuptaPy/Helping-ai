import { useState } from "react";
import "./App.css";
import HoverButton from "./widgets/HoverButton";
import FAQ from "./widgets/FAQ";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question:
        "Q1: What is the EQ of your model and how does it compare with the models like GPT-4?",
      answer:
        "Our best model have acheived staggering eq of 97 on the other hand GPT-4 Eq being mere 84",
      open: true,
    },
    {
      question:
        "Q2: What does it mean for an AI to have the highest Emotional Quotient (EQ) in the world?",
      answer:
        "Having the highest EQ means our AI can understand and respond to human emotions better than any other AI. It not only recognizes and adapts to a wide range of emotional cues, including subtle and complex feelings, but also responds in a way that resonates deeply with users, providing empathy, support, and understanding that feels genuinely human.",
      open: false,
    },
    {
      question:
        "Q3: How does this high Emotion Quotient benefit users in real-world scenarios?",
      answer:
        "Emotional intelligence allows AI to create more meaningful interactions, leading to better user experiences. It enables the AI to understand when someone is upset, happy, or confused and respond in a way that is supportive, comforting, or celebratory. This is crucial in applications like customer service, healthcare, education, and companionship, where understanding emotions can significantly impact the outcome.",
      open: false,
    },
    {
      question:
        "Q4: Can emotionally intelligent AI replace human therapists or counselors?",
      answer:
        " Emotionally intelligent AI is not designed to replace therapists or counselors but rather to support and enhance emotional well-being. It can be a helpful tool for providing general emotional support, detecting early signs of distress, and offering resources, but it cannot provide the depth of understanding and personalized care that a trained professional can.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div>
      <div className="hero-section">
        <h1 className="heading">
          Dive into the future of Emotinally intelligent AI. With Helping AI.
        </h1>
        <div className="main-container">
          <HoverButton
            title={"Chat Nakshatra"}
            subtitle={"Test our model by chatting it real time"}
          />
          <div style={{ width: "40px" }}></div>
          <HoverButton
            title={"API"}
            subtitle={"Get the access of our api"}
            onTap={() => {
              navigate("/api");
            }}
          />
        </div>
      </div>
      <h2 className="sub-heading">FAQ</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
