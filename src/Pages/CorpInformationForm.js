


import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Load } from '../Atom/Atom';
import Loading from '../Components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import '../StyleSheet/CorpSuggestor.css';
import axios from '../Axios/Axios';

const Typewriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextChar = text[currentIndex];
        currentIndex += 1;
        return prevText + (nextChar || ''); // Add the next character or stop when text ends
      });

      if (currentIndex >= text.length) {
        clearInterval(intervalId); // Stop the interval when all text is displayed
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [text, speed]);

  return <>{displayedText}</>;
};

const CropInformationForm = () => {
  const [plant, setPlant] = useState('');
  const [disease, setDisease] = useState('');
  const [formData, setFormData] = useState({
    cropType: '',
    cropVariety: '',
    growthStage: '',
    climateZone: '',
    waterSource: '',
    typeOfDisease: '',
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useRecoilState(Load);

  const cropOptions = ['Wheat', 'Rice', 'Maize', 'Potato', 'Tomato'];
  const growthStageOptions = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting'];
  const climateZoneOptions = ['Temperate', 'Tropical', 'Arid'];
  const waterSourceOptions = ['Well', 'River', 'Reservoir'];
  const diseaseOptions = ['Fungal', 'Bacterial', 'Viral'];

  const fertilizerSuggestions = {
    Wheat: `
      For wheat, consider using a balanced fertilizer with a ratio of 10-10-10 (N-P-K). 
      Additionally, test the soil for micronutrients and adjust fertilizer composition accordingly.
      Apply fertilizer in early spring before jointing stage for best results. 
      Monitor nitrogen levels throughout the season and consider a top-dress application if needed.
      `,
    Rice: `
      Use a balanced fertilizer such as 14-14-14 (N-P-K) for rice. 
      Conduct a soil test to determine nutrient deficiencies and adjust fertilizer recommendations accordingly.
      Incorporate organic matter into the soil to enhance fertility. 
      Consider split applications, applying fertilizer at different growth stages for optimal uptake.
      `,
    Maize: `
      Maize benefits from a fertilizer with a ratio of 8-16-16 (N-P-K) during planting. 
      Conduct a soil test to assess nutrient levels, especially phosphorus and potassium.
      Consider the 4 Rs of nutrient management: right source, right rate, right time, and right place.
      Implement a side-dress application of nitrogen when the plants are knee-high for improved yields.
      `,
    Potato: `
      Potatoes prefer a fertilizer with a ratio like 5-10-10 (N-P-K) to promote tuber development. 
      Conduct a soil test to determine pH and nutrient levels, adjusting fertilizer recommendations accordingly.
      Use well-rotted manure for organic enrichment, and ensure even distribution during application.
      Monitor potassium levels to prevent common potato disorders like scab.
      `,
    Tomato: `
      Tomatoes thrive with a fertilizer like 10-20-20 (N-P-K) during planting. 
      Test soil pH and adjust nutrient availability accordingly. 
      Consider incorporating organic matter to improve soil structure and water retention.
      Use calcium nitrate to supplement calcium levels, reducing the risk of blossom end rot.
      `,
  };
  
  const pesticideSuggestions = {
    Wheat: `
      Watch out for wheat rust, and consider using fungicides like azoxystrobin. 
      Monitor fields regularly for signs of disease and apply fungicides preventatively.
      For insect control, neonicotinoid-based pesticides can be effective against aphids.
      Rotate pesticides to prevent resistance development in target pests.
      `,
    Rice: `
      Pesticides for rice stem borers may include carbaryl or neem oil. 
      Implement cultural practices like clean cultivation to reduce pest pressure.
      For leafhoppers, consider using pyrethroid-based insecticides, and introduce beneficial insects for natural control.
      Monitor pest populations using pheromone traps to determine the need for pesticide application.
      `,
    Maize: `
      For corn borers in maize, use bacillus thuringiensis (Bt) or spinosad-based pesticides. 
      Implement integrated pest management (IPM) strategies, such as planting resistant varieties.
      Aphids can be controlled with insecticidal soap; scout regularly to detect early infestations.
      Consider using biological control agents like parasitoid wasps for sustainable pest management.
      `,
    Potato: `
      Control Colorado potato beetles with insecticides containing spinosad or neem oil. 
      Implement crop rotation to reduce pest pressure and disrupt the pest life cycle.
      Consider using beneficial insects like ladybugs for natural control, and avoid excessive pesticide use to protect beneficial organisms.
      Monitor pest populations and apply pesticides when thresholds are reached.
      `,
    Tomato: `
      Tomatoes may be susceptible to diseases; consider using fungicides like chlorothalonil for early blight. 
      Practice crop rotation and select disease-resistant tomato varieties.
      Insecticidal soap is effective against aphids; use it in conjunction with other cultural practices for comprehensive pest management.
      Monitor for signs of disease regularly and apply pesticides preventatively during critical growth stages.
      `,
  };
  
  const floweringSuggestions = {
    Wheat: `
      Wheat flowers during the reproductive stage; ensure proper pollination by maintaining optimal spacing between plants. 
      Implement disease management practices to prevent diseases that can affect flowering.
      Monitor weather conditions, as extreme temperatures and water stress can impact pollination.
      `,
    Rice: `
      Rice flowering is crucial for grain development; provide adequate water during this stage. 
      Implement water management practices such as controlled flooding for successful flowering.
      Monitor for pests and diseases that may affect flowering, and apply appropriate measures.
      `,
    Maize: `
      Maize produces tassels during flowering; ensure proper spacing for pollination. 
      Implement cultural practices like removing tassel branches to improve airflow.
      Since maize is wind-pollinated, ensure good air circulation for successful pollination.
      `,
    Potato: `
      Potato plants flower before forming tubers; maintain consistent watering to support flowering. 
      Hill the soil around the plants to protect developing tubers and improve water drainage.
      Monitor for pests and diseases that may affect flowering, and apply appropriate measures.
      `,
    Tomato: `
      Tomato plants produce flowers before fruiting; support with appropriate nutrients. 
      Prune indeterminate varieties for better fruit production and airflow.
      Monitor for environmental stressors such as nutrient deficiencies and address them promptly.
      `,
  };
  const handleSubmitCrop = async (e) => {
    e.preventDefault();

    try {
      // Send data to the "/addplant" endpoint using Axios
      await axios.post('/addplant', { plant, disease });

      // Clear form fields after successful submission
      setPlant('');
      setDisease('');
      toast.success("Thanking for providing.We will add soon")
      // You can add additional logic or feedback for the user here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors or provide feedback to the user
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShow(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.cropType ||
      !formData.growthStage ||
      !formData.climateZone ||
      !formData.waterSource ||
      !formData.typeOfDisease
    ) {
      toast.error('Please Fill all the Fields.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
    const cropType = formData.cropType;
    setTimeout(() => {
      setShow(true);
      setLoading(false);
    }, randomNumber * 1000);
    setLoading(true);
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <div className="container mt-5" style={{ opacity: 1 }}>
          <div className="row justify-content-center">
            <div className="col-md-6 form-container">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label>Crop Type:</label>
              <select
                className="form-control"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
              >
                <option value="">Select Crop Type</option>
                {cropOptions.map((crop, index) => (
                  <option key={index} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Growth Stage:</label>
              <select
                className="form-control"
                name="growthStage"
                value={formData.growthStage}
                onChange={handleChange}
              >
                <option value="">Select Growth Stage</option>
                {growthStageOptions.map((stage, index) => (
                  <option key={index} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Climate Zone:</label>
              <select
                className="form-control"
                name="climateZone"
                value={formData.climateZone}
                onChange={handleChange}
              >
                <option value="">Select Climate Zone</option>
                {climateZoneOptions.map((zone, index) => (
                  <option key={index} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Water Source:</label>
              <select
                className="form-control"
                name="waterSource"
                value={formData.waterSource}
                onChange={handleChange}
              >
                <option value="">Select Water Source</option>
                {waterSourceOptions.map((source, index) => (
                  <option key={index} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Type of Disease:</label>
              <select
                className="form-control"
                name="typeOfDisease"
                value={formData.typeOfDisease}
                onChange={handleChange}
              >
                <option value="">Select Type of Disease</option>
                {diseaseOptions.map((disease, index) => (
                  <option key={index} value={disease}>
                    {disease}
                  </option>
                ))}
              </select>
            </div><br />


                <Button type="submit" variant="outline-danger">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          {show && (
            <div className="mt-3 suggestions">
              <h5 className='suggestions-heading'>Suggestions:</h5>
              <p>
                <strong>Fertilizer:</strong>{' '}
                <Typewriter text={fertilizerSuggestions[formData.cropType]} speed={50} />
                <br />
              </p>
              <p>
                <strong>Pesticide:</strong>{' '}
                <Typewriter text={pesticideSuggestions[formData.cropType]} speed={50} />
                <br />
              </p>
              <p>
                <strong>Flowering Tips:</strong>{' '}
                <Typewriter text={floweringSuggestions[formData.cropType]} speed={50} />
                <br />
              </p>
            </div>
          )}
        </div>
      )}
      <div className="container mt-5" style={{ opacity: 1 }}>
          <div className="row justify-content-center">
            <div className="col-md-6 form-container">
        <h1>Do you want a solution for any other crops?</h1>
        <form onSubmit={handleSubmitCrop}>
          <div className="mb-3">
            <label htmlFor="plantInput" className="form-label">Plant:</label>
            <input
              type="text"
              className="form-control"
              id="plantInput"
              value={plant}
              onChange={(e) => setPlant(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseInput" className="form-label">Disease:</label>
            <input
              type="text"
              className="form-control"
              id="diseaseInput"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default CropInformationForm;
