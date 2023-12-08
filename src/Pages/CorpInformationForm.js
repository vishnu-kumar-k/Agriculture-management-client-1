import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Load } from '../Atom/Atom';
import Loading from '../Components/Loading';
import { ToastContainer, toast } from 'react-toastify';

const CropInformationForm = () => {
  const [formData, setFormData] = useState({
    cropType: '',
    cropVariety: '',
    growthStage: '',
    climateZone: '',
    waterSource: '',
    typeOfDisease: '',
  });
  const[show,setShow]=useState(false);
  const[loading,setLoading]=useRecoilState(Load)

  const cropOptions = ['Wheat', 'Rice', 'Maize', 'Potato', 'Tomato'];
  const growthStageOptions = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting'];
  const climateZoneOptions = ['Temperate', 'Tropical', 'Arid'];
  const waterSourceOptions = ['Well', 'River', 'Reservoir'];
  const diseaseOptions = ['Fungal', 'Bacterial', 'Viral'];
  
  const fertilizerSuggestions = {
    Wheat: 'For wheat, consider using a balanced fertilizer with a ratio of 10-10-10 (N-P-K). You can also use ammonium sulfate as a nitrogen source.',
    Rice: 'Use a balanced fertilizer such as 14-14-14 (N-P-K) for rice. Additionally, apply organic fertilizers like compost to improve soil fertility.',
    Maize: 'Maize benefits from a fertilizer with a ratio of 8-16-16 (N-P-K) during planting. Top-dress with nitrogen fertilizer when the plants are knee-high.',
    Potato: 'Potatoes prefer a fertilizer with a ratio like 5-10-10 (N-P-K) to promote tuber development. Use well-rotted manure for organic enrichment.',
    Tomato: 'Tomatoes thrive with a fertilizer like 10-20-20 (N-P-K) during planting. Consider supplementing with calcium nitrate to prevent blossom end rot.',
  };
  
  const pesticideSuggestions = {
    Wheat: 'Watch out for wheat rust, and consider using fungicides like azoxystrobin. For insect control, neonicotinoid-based pesticides can be effective against aphids.',
    Rice: 'Pesticides for rice stem borers may include carbaryl or neem oil. For leafhoppers, consider using pyrethroid-based insecticides.',
    Maize: 'For corn borers in maize, use bacillus thuringiensis (Bt) or spinosad-based pesticides. Aphids can be controlled with insecticidal soap.',
    Potato: 'Control Colorado potato beetles with insecticides containing spinosad or neem oil. Consider using beneficial insects like ladybugs for natural control.',
    Tomato: 'Tomatoes may be susceptible to diseases; consider using fungicides like chlorothalonil for early blight. Insecticidal soap is effective against aphids.',
  };
  
  const floweringSuggestions = {
    Wheat: 'Wheat flowers during the reproductive stage; ensure proper pollination by maintaining optimal spacing between plants. Watch for environmental conditions that may affect flowering.',
    Rice: 'Rice flowering is crucial for grain development; provide adequate water during this stage. Implement water management practices for successful flowering.',
    Maize: 'Maize produces tassels during flowering; ensure proper spacing for pollination. Wind-pollinated, so ensure good air circulation for successful pollination.',
    Potato: 'Potato plants flower before forming tubers; maintain consistent watering to support flowering. Hill the soil around the plants to protect developing tubers.',
    Tomato: 'Tomato plants produce flowers before fruiting; support with appropriate nutrients. Prune indeterminate varieties for better fruit production and airflow.',
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShow(false)
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
       toast.error("Please Fill all the Fields.")
        return;
      }

    const randomNumber = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
    const cropType = formData.cropType;
    setTimeout(()=>{
        setShow(true);
    setLoading(false);
    
       
    },randomNumber*1000)
    setLoading(true);
    

    
  };

  return (
    <><ToastContainer />{loading?<Loading />:(
    <div className="container mt-5" >
      <div className="row justify-content-center">
        <div className="col-md-6">
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
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      {show && (
  <div className="mt-3">
    <h5>Suggestions:</h5>
    <p>
      <strong>Fertilizer:</strong> {fertilizerSuggestions[formData.cropType]}
      <br />
      Provide nutrients to your {formData.cropType.toLowerCase()} crops by using a balanced fertilizer. This will help ensure healthy growth and development.
    </p>
    <p>
      <strong>Pesticide:</strong> {pesticideSuggestions[formData.cropType]}
      <br />
      Protect your {formData.cropType.toLowerCase()} plants from common pests and diseases. Consider using organic alternatives for environmentally friendly control.
    </p>
    <p>
      <strong>Flowering Tips:</strong> {floweringSuggestions[formData.cropType]}
      <br />
      Proper flowering is essential for successful fruit or grain development. Ensure optimal conditions for pollination and flowering stages.
    </p>
  </div>
)}

    </div>)}</>
  );
};

export default CropInformationForm;
