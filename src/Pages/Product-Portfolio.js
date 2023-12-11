import React, { useRef } from 'react'
import '../StyleSheet/Home.css'
const ProductPortfolio = () => {
    

    const eefBenefits = [
        "Revolutionizes traditional fertilization methods by maximizing nutrient delivery to plants.",
        "Designed to address challenges of nutrient loss through leaching, volatilization, and denitrification.",
        "Utilizes cutting-edge technologies to enhance nutrient uptake efficiency and minimize environmental impact.",
        "Controlled-release mechanisms ensure a steady and sustained supply of nutrients to crops over an extended period.",
        "Slow-release formulations prevent nutrient wastage, promoting sustainability and cost-effectiveness.",
        "Mitigates nutrient runoff, reducing the risk of water pollution and protecting aquatic ecosystems.",
        "Nutrient stabilization technologies prevent conversion of fertilizers into forms prone to losses, ensuring higher retention in the soil.",
        "Beneficial in addressing nutrient imbalances in the soil, leading to improved overall nutrient management.",
        "Plays a crucial role in supporting global efforts towards sustainable agriculture and responsible environmental stewardship.",
        "Enhanced nutrient use efficiency contributes to the reduction of greenhouse gas emissions associated with traditional fertilizer application.",
        "Controlled-release formulations allow for precise nutrient management, catering to specific needs of different crops and soil types.",
        "Significantly reduces the frequency of fertilizer applications, saving time and resources for farmers.",
        "Advanced technologies promote better soil health, fostering a favorable environment for microbial activity and nutrient cycling.",
        "Helps minimize the negative impact of nutrient excess on plant growth, preventing issues such as nutrient toxicity.",
        "Contributes to the conservation of natural resources by optimizing the use of fertilizers and reducing the need for excessive inputs."
      ];
      const bulkFertilizersBenefits = [
        "Ideal for large-scale agricultural operations requiring substantial quantities of fertilizers.",
        "Cost-effective solution for farmers looking to purchase fertilizers in bulk quantities.",
        "Streamlines the fertilization process for extensive crop areas, improving efficiency.",
        "Customizable formulations available to meet specific nutrient requirements of different crops.",
        "Convenient packaging options designed for ease of handling and storage in bulk.",
        "Bulk fertilizers often come with reduced packaging waste, contributing to sustainability.",
        "Bulk purchasing allows for potential cost savings compared to buying individual packages.",
        "Suitable for use in various agricultural systems, including conventional and organic farming.",
        "Bulk fertilizers can be integrated into precision farming practices for efficient nutrient management.",
        "Availability of a wide range of nutrient ratios and formulations to suit diverse crop needs.",
      ];
      const specialtyFertilizersBenefits = [
        "Tailored formulations to meet the specific nutrient needs of specialized crops.",
        "Enhanced nutrient absorption and utilization for targeted plant growth.",
        "Addresses deficiencies in unique soil conditions or cropping systems.",
        "Optimizes nutrient ratios for optimal crop performance in specific environments.",
        "May contain additional elements or compounds beneficial for certain crops.",
        "Supports the development of specific plant traits, such as color, flavor, or nutritional content.",
        "Customizable for different growth stages of specialty crops.",
        "Minimizes the risk of nutrient imbalances, promoting healthier plants.",
        "Contributes to increased yield and quality of specialty crops.",
        "Can be integrated into precision agriculture practices for precise nutrient management.",
      ];
      
      const waterSolubleFertilizersBenefits = [
        "Quick and efficient nutrient absorption by plants due to high solubility.",
        "Provides an immediate and readily available nutrient source for crops.",
        "Suitable for use in hydroponic and fertigation systems.",
        "Allows for precise control of nutrient concentrations in irrigation water.",
        "Reduces the risk of nutrient leaching in certain soil types.",
        "Can be applied through foliar spraying for rapid nutrient uptake.",
        "Ideal for crops with high water requirements or limited root access.",
        "Promotes uniform nutrient distribution in the root zone.",
        "Enhances nutrient efficiency by minimizing losses through leaching and runoff.",
        "Convenient for use in greenhouse and controlled environment agriculture.",
      ];
      
      const micronutrientsFertilizersBenefits = [
        "Addresses micronutrient deficiencies in soils and crops.",
        "Essential for various physiological processes crucial for plant health.",
        "Promotes enzyme activity and metabolic functions in plants.",
        "Improves the efficiency of nutrient uptake by plants.",
        "Prevents and corrects symptoms of micronutrient deficiencies, such as yellowing or stunted growth.",
        "Supports overall plant development and stress resistance.",
        "Customizable formulations for specific micronutrient requirements of different crops.",
        "Helps maintain balanced nutrient levels in the soil.",
        "Critical for achieving optimal yield and quality in crops.",
        "Compatible with various application methods, including soil and foliar application.",
      ];
      
      const secondaryNutrientsBenefits = [
        "Addresses deficiencies of secondary nutrients (calcium, magnesium, sulfur) in the soil.",
        "Promotes strong cell wall structure and overall plant development.",
        "Improves nutrient availability and uptake by plants.",
        "Enhances soil structure and nutrient retention.",
        "Prevents disorders associated with secondary nutrient deficiencies.",
        "Contributes to improved root development and nutrient absorption.",
        "Supports the activation of enzymes involved in various plant processes.",
        "Customizable formulations to meet specific secondary nutrient needs.",
        "Compatible with diverse crops and soil types.",
        "Plays a crucial role in achieving balanced nutrient levels for optimal crop growth.",
      ];
      
      const cropStageSpecificFertilizersBenefits = [
        "Tailored nutrient formulations for specific growth stages of crops.",
        "Optimizes nutrient ratios to meet the changing needs of plants during different stages of development.",
        "Supports vegetative growth, flowering, fruiting, and other critical growth phases.",
        "Reduces the risk of nutrient excess or deficiency at different crop stages.",
        "Enhances crop resilience to environmental stress during vulnerable stages.",
        "Promotes efficient nutrient utilization for maximum yield and quality.",
        "Customizable application schedules based on crop phenology.",
        "Adaptable to various agricultural systems, including conventional and organic farming.",
        "Contributes to sustainable and precision agriculture practices.",
        "Facilitates targeted and efficient nutrient management throughout the crop life cycle.",
      ];
      
  return (
    <div className='product-portfolio-container'>
       <div className='product-portfolio'>
      
      <div id="Enhanced-Efficiency-Fertilizers">
        <h2>Key Aspects and Benefits of Enhanced Efficiency Fertilizers (EEFs)</h2>
        <ul>
          {eefBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Bulk Fertilizers */}
      <div id="Bulk-Fertilizers">
        <h2>Key Aspects and Benefits of Bulk Fertilizers</h2>
        <ul>
          {bulkFertilizersBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Specialty Fertilizers */}
      <div id="Specialty-Fertilizers">
        <h2>Key Aspects and Benefits of Specialty Fertilizers</h2>
        <ul>
          {specialtyFertilizersBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Water Soluble Fertilizers */}
      <div id="Water-Soluble-Fertilizers">
        <h2>Key Aspects and Benefits of Water Soluble Fertilizers</h2>
        <ul>
          {waterSolubleFertilizersBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Micronutrients Fertilizers */}
      <div id="Micronutrients-Fertilizers">
        <h2>Key Aspects and Benefits of Micronutrients Fertilizers</h2>
        <ul>
          {micronutrientsFertilizersBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Secondary Nutrients */}
      <div id="Secondary-Nutrients">
        <h2>Key Aspects and Benefits of Secondary Nutrients</h2>
        <ul>
          {secondaryNutrientsBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Crop & Stage Specific Fertilizers */}
      <div id="Crop-Stage-Specific-Fertilizers">
        <h2>Key Aspects and Benefits of Crop & Stage Specific Fertilizers</h2>
        <ul>
          {cropStageSpecificFertilizersBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default ProductPortfolio;
