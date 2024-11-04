import React, { useState } from 'react';

const diseases = [
  { name: "Flu", symptoms: ["Fever", "Chills", "Cough", "Sore throat"] },
  { name: "Common Cold", symptoms: ["Runny nose", "Sneezing", "Cough", "Sore throat"] },
  { name: "COVID-19", symptoms: ["Fever", "Dry cough", "Fatigue", "Loss of taste"] },
  { name: "Diabetes", symptoms: ["Increased thirst", "Frequent urination", "Extreme fatigue"] },
  { name: "Allergy", symptoms: ["Sneezing", "Itchy eyes", "Runny nose", "Rash"] },
  { name: "Asthma", symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"] },
  { name: "Migraine", symptoms: ["Severe headache", "Nausea", "Sensitivity to light", "Visual disturbances"] },
  { name: "Hypertension", symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Flushing"] },
  { name: "Heart Attack", symptoms: ["Chest pain", "Shortness of breath", "Cold sweat", "Nausea"] },
  { name: "Gastroenteritis", symptoms: ["Diarrhea", "Vomiting", "Stomach cramps", "Fever"] },
  { name: "Pneumonia", symptoms: ["Cough", "Fever", "Chills", "Difficulty breathing"] },
  { name: "Bronchitis", symptoms: ["Cough", "Mucus production", "Fatigue", "Shortness of breath"] },
  { name: "Sinusitis", symptoms: ["Facial pain", "Nasal congestion", "Headache", "Fever"] },
  { name: "Osteoarthritis", symptoms: ["Joint pain", "Stiffness", "Swelling", "Decreased range of motion"] },
  { name: "Rheumatoid Arthritis", symptoms: ["Joint pain", "Swelling", "Fatigue", "Fever"] },
  { name: "Chronic Fatigue Syndrome", symptoms: ["Severe fatigue", "Sleep problems", "Memory issues", "Muscle pain"] },
  { name: "Depression", symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep disturbances"] },
  { name: "Anxiety Disorder", symptoms: ["Excessive worry", "Restlessness", "Fatigue", "Irritability"] },
  { name: "Hypothyroidism", symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Depression"] },
  { name: "Hyperthyroidism", symptoms: ["Weight loss", "Rapid heartbeat", "Increased appetite", "Nervousness"] },
  { name: "Acid Reflux", symptoms: ["Heartburn", "Regurgitation", "Difficulty swallowing", "Chest pain"] },
  { name: "Peptic Ulcer", symptoms: ["Abdominal pain", "Bloating", "Nausea", "Heartburn"] },
  { name: "Kidney Stones", symptoms: ["Severe pain", "Nausea", "Vomiting", "Frequent urination"] },
  { name: "Urinary Tract Infection", symptoms: ["Burning sensation", "Frequent urination", "Cloudy urine", "Pelvic pain"] },
  { name: "Irritable Bowel Syndrome", symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation"] },
  { name: "Liver Disease", symptoms: ["Fatigue", "Jaundice", "Swelling in legs", "Abdominal pain"] },
  { name: "Cirrhosis", symptoms: ["Fatigue", "Nausea", "Swelling", "Itchy skin"] },
  { name: "Skin Rash", symptoms: ["Redness", "Itching", "Swelling", "Bumps"] },
  { name: "Eczema", symptoms: ["Itchy skin", "Red patches", "Dry skin", "Flaky skin"] },
  { name: "Psoriasis", symptoms: ["Red patches", "Silver scales", "Itching", "Dry skin"] },
  { name: "Chickenpox", symptoms: ["Itchy rash", "Fever", "Fatigue", "Loss of appetite"] },
  { name: "Measles", symptoms: ["Fever", "Cough", "Runny nose", "Rash"] },
  { name: "Mumps", symptoms: ["Swollen glands", "Fever", "Headache", "Muscle pain"] },
  { name: "Hepatitis", symptoms: ["Fatigue", "Nausea", "Jaundice", "Abdominal pain"] },
  { name: "Tuberculosis", symptoms: ["Cough", "Weight loss", "Fever", "Night sweats"] },
  { name: "Celiac Disease", symptoms: ["Diarrhea", "Weight loss", "Bloating", "Fatigue"] },
  { name: "Gout", symptoms: ["Intense pain", "Swelling", "Redness", "Heat in joints"] },
  { name: "Constipation", symptoms: ["Infrequent bowel movements", "Abdominal pain", "Bloating", "Hard stools"] },
  { name: "Diverticulitis", symptoms: ["Abdominal pain", "Fever", "Nausea", "Change in bowel habits"] },
  { name: "Shingles", symptoms: ["Painful rash", "Burning sensation", "Fever", "Chills"] },
  { name: "Bacterial Vaginosis", symptoms: ["Unusual discharge", "Odor", "Itching", "Burning"] },
  { name: "Yeast Infection", symptoms: ["Itching", "Burning", "Discharge", "Redness"] },
  { name: "Dementia", symptoms: ["Memory loss", "Difficulty communicating", "Confusion", "Changes in mood"] },
  { name: "Alzheimer's Disease", symptoms: ["Memory loss", "Difficulty concentrating", "Mood swings", "Disorientation"] },
  { name: "Parkinson's Disease", symptoms: ["Tremors", "Stiffness", "Slowed movements", "Balance problems"] },
  { name: "Multiple Sclerosis", symptoms: ["Numbness", "Vision problems", "Fatigue", "Difficulty walking"] },
  { name: "Stroke", symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Severe headache"] },
  { name: "Anemia", symptoms: ["Fatigue", "Weakness", "Pale skin", "Shortness of breath"] },
  { name: "Sickle Cell Disease", symptoms: ["Anemia", "Pain episodes", "Swelling", "Frequent infections"] },
  { name: "Hemophilia", symptoms: ["Unexplained bleeding", "Bruising", "Joint pain", "Swelling"] },
  { name: "Thyroiditis", symptoms: ["Fatigue", "Weight changes", "Mood changes", "Menstrual irregularities"] },
  { name: "Bipolar Disorder", symptoms: ["Mood swings", "Energy changes", "Sleep disturbances", "Irritability"] },
  { name: "Autism Spectrum Disorder", symptoms: ["Social difficulties", "Repetitive behaviors", "Communication challenges", "Sensory sensitivities"] },
  { name: "Attention Deficit Hyperactivity Disorder", symptoms: ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty organizing tasks"] },
  { name: "Obsessive-Compulsive Disorder", symptoms: ["Intrusive thoughts", "Compulsive behaviors", "Anxiety", "Time-consuming rituals"] },
  { name: "Post-Traumatic Stress Disorder", symptoms: ["Flashbacks", "Avoidance", "Hyperarousal", "Negative thoughts"] },
  { name: "Eating Disorder", symptoms: ["Disordered eating", "Body image issues", "Extreme weight loss or gain", "Mood changes"] },
  { name: "Sleep Apnea", symptoms: ["Loud snoring", "Choking or gasping", "Daytime fatigue", "Difficulty concentrating"] },
  { name: "Insomnia", symptoms: ["Difficulty falling asleep", "Frequent waking", "Daytime fatigue", "Irritability"] },
  { name: "Restless Leg Syndrome", symptoms: ["Uncomfortable sensations", "Urge to move legs", "Difficulty sleeping", "Fatigue"] },
  { name: "Chronic Obstructive Pulmonary Disease", symptoms: ["Shortness of breath", "Cough", "Wheezing", "Chest tightness"] },
  { name: "Emphysema", symptoms: ["Shortness of breath", "Chronic cough", "Wheezing", "Fatigue"] },
  { name: "Chronic Bronchitis", symptoms: ["Cough", "Mucus production", "Fatigue", "Wheezing"] },
  { name: "Kidney Infection", symptoms: ["Back pain", "Fever", "Frequent urination", "Nausea"] },
  { name: "Heart Failure", symptoms: ["Shortness of breath", "Fatigue", "Swelling", "Rapid heartbeat"] },
  { name: "Peripheral Artery Disease", symptoms: ["Leg pain", "Numbness", "Weakness", "Coldness in legs"] },
  { name: "Varicose Veins", symptoms: ["Swollen veins", "Aching", "Heavy feeling", "Skin changes"] },
  { name: "Pulmonary Embolism", symptoms: ["Shortness of breath", "Chest pain", "Coughing up blood", "Rapid heartbeat"] },
  { name: "Gallbladder Disease", symptoms: ["Abdominal pain", "Nausea", "Vomiting", "Indigestion"] },
  { name: "Pancreatitis", symptoms: ["Severe abdominal pain", "Nausea", "Vomiting", "Fever"] },
  { name: "Cystic Fibrosis", symptoms: ["Persistent cough", "Wheezing", "Shortness of breath", "Frequent lung infections"] },
  { name: "Ehlers-Danlos Syndrome", symptoms: ["Skin hyperelasticity", "Joint pain", "Bruising easily", "Fatigue"] },
  { name: "Acne", symptoms: ["Pimples", "Blackheads", "Redness", "Inflammation"] },
  { name: "Psoriasis", symptoms: ["Red patches", "Silver scales", "Itching", "Dry skin"] },
  { name: "Burns", symptoms: ["Redness", "Swelling", "Blisters", "Pain"] },
  { name: "Frostbite", symptoms: ["Numbness", "Tingling", "Discolored skin", "Hard or waxy skin"] },
  { name: "Scabies", symptoms: ["Intense itching", "Rash", "Red bumps", "Skin sores"] },
  { name: "Hives", symptoms: ["Itchy welts", "Swelling", "Redness", "Burning sensation"] },
  { name: "Headache", symptoms: ["Pain", "Sensitivity to light", "Nausea", "Fatigue"] },
  { name: "Concussion", symptoms: ["Headache", "Confusion", "Dizziness", "Nausea"] },
  { name: "Carpal Tunnel Syndrome", symptoms: ["Numbness", "Tingling", "Weakness", "Pain in hands"] },
  { name: "Tendonitis", symptoms: ["Pain", "Swelling", "Stiffness", "Difficulty moving joint"] },
  { name: "Bursitis", symptoms: ["Pain", "Swelling", "Stiffness", "Limited movement"] },
  { name: "Tennis Elbow", symptoms: ["Pain on outer elbow", "Weak grip", "Pain with gripping", "Stiffness"] },
  { name: "Golfer's Elbow", symptoms: ["Pain on inner elbow", "Weakness", "Stiffness", "Pain with gripping"] },
  { name: "Plantar Fasciitis", symptoms: ["Heel pain", "Stiffness", "Pain after rest", "Swelling"] },
  { name: "Scoliosis", symptoms: ["Uneven shoulders", "Back pain", "Difficulty breathing", "Fatigue"] },
  { name: "Herniated Disc", symptoms: ["Back pain", "Numbness", "Weakness", "Radiating pain"] },
  { name: "Osteoporosis", symptoms: ["Bone fractures", "Back pain", "Loss of height", "Posture changes"] },
  { name: "Chronic Pain Syndrome", symptoms: ["Widespread pain", "Fatigue", "Sleep disturbances", "Mood changes"] },
  { name: "Pelvic Inflammatory Disease", symptoms: ["Pelvic pain", "Fever", "Unusual discharge", "Painful intercourse"] },
  { name: "Prostate Issues", symptoms: ["Frequent urination", "Difficulty urinating", "Pain", "Weak stream"] },
  { name: "Menopause", symptoms: ["Hot flashes", "Mood changes", "Sleep disturbances", "Vaginal dryness"] },
  { name: "Pregnancy", symptoms: ["Missed period", "Nausea", "Fatigue", "Breast tenderness"] },
  { name: "Postpartum Depression", symptoms: ["Sadness", "Fatigue", "Anxiety", "Changes in sleep"] },
];


const GuessTheDiseaseGame = () => {
  const [currentDisease, setCurrentDisease] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [result, setResult] = useState('');

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * diseases.length);
    setCurrentDisease(diseases[randomIndex]);
    setSelectedDisease('');
    setResult('');
  };

  const checkAnswer = () => {
    if (selectedDisease === currentDisease.name) {
      setResult('Correct! 🎉 it is ${currentDisease.name}.');
    } else {
      setResult(`Incorrect! The right answer was ${currentDisease.name}.`);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Guess the Disease!</h2>
      <button onClick={startGame} className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200">
        Start Game
      </button>
      {currentDisease && (
        <div className="mb-4">
          <h3 className="text-xl mb-2">Symptoms:</h3>
          <ul className="list-disc list-inside">
            {currentDisease.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          <h3 className="text-lg mt-4">What&apos;s your guess?</h3>
          <input
            type="text"
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
            placeholder="Enter disease name"
            className="border p-2 rounded-lg mt-2 mb-2"
          />
          <button
            onClick={checkAnswer}
            className="ml-2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-200"
          >
            Check Answer
          </button>
        </div>
      )}
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default GuessTheDiseaseGame;
