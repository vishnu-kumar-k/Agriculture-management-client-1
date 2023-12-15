import React from "react";
import "../StyleSheet/Home.css"
import { useRecoilState } from "recoil";
import { Plant } from "../Atom/Atom";
const PlantTips = () => {
  const[plant,setPlant]=useRecoilState(Plant)
  return (<div className="plant-tips-container">
    <div className="plant-tips">
      {plant!==1?null:<>
      <h1>Corp Nutriention Management</h1>
      <p>
        Application of organic manure helps in maintaining the organic matter of
        the soil, which is very important for grape crop nutrition. Grape is
        also a heavy feeder and it should be supplied through proper fertiliser
        application at different stages of vegetative growth, fruiting and berry
        development stages. Most grape growers have started adopting drip
        irrigation and supplying the nutrients through the drip system.
      </p>
      <h1>What nutrients does a grape plantation require?</h1>
      <p>
        <ul>
          <li>Nitrogen</li>
          <li>Phosphorus</li>
          <li>Potassium</li>
          <li>Calcium</li>
          <li>Magnesium</li>
          <li>Sulphur</li>
          <li>Iron</li>
          <li>Manganese</li>
          <li>Zinc</li>
          <li>Copper</li>
          <li>Boron</li>
        </ul>
      </p>
      <h1>Insect Pests & Pest Management</h1>
      <ol>
        <li>
          <strong>Nematodes Management:</strong>
          <p>
            Application of 60 g of Carbofuran 3G or Phorate 10G granules per
            vine at a week before pruning followed by profuse irrigation helps
            in controlling the nematodes. The soil should not be disturbed for
            at least 15 days. Thereafter normal manuring may be done.
            Application of neemcake 200 g/vine also helps in controlling
            nematodes.
          </p>
        </li>
        <li>
          <strong>Mealy Bug Management:</strong>
          <p>
            Spray application of dichlorvas @ 1ml mixed with neem oil 2ml or
            tridemorph @ 1 gm helps in minimizing the damage of mealy bug.
          </p>
        </li>
      </ol>

      <h1>Plant Diseases & Disease Management</h1>
      <p>
        <ul>
          <li>
            <strong>Powdery Mildew Management:</strong>
            <p>
              Spraying 0.3% Wettable sulphur or dusting of Sulphur @ 2.5 – 4.0
              kg/acre in the morning hours helps in controlling the disease.
            </p>
          </li>
          <li>
            <strong>Anthracnose Management:</strong>
            <p>
              Spraying 1% Bordeaux mixture or Thio phanate methyl 400 gm or
              Copper Oxy Chloride @ 400 gm/acre or Hexaconazole @ 200 ml/acre
            </p>
          </li>
          <li>
            <strong>Downy Mildew Management:</strong>
            <p>
              Spraying of 1% Bordeaux mixture or any other copper fungicide at
              0.25% concentration.
            </p>
          </li>
        </ul>
      </p>
      <h1>Harvesting & Post Harvest Measures</h1>
      <p>
        Grapes are harvested at the right stage and properly packed so that
        farmers get the best price for their produce.
      </p></>}
      {plant!== 2 ? null : (
  <>
    <h1>Groundnut Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for groundnut cultivation. The
      application of organic manure contributes to soil health and ensures
      optimal nutrient levels for groundnut plants. Groundnuts require specific
      nutrients at different growth stages, including vegetative growth,
      flowering, and pod development.
    </p>
    <h1>Essential Nutrients for Groundnut Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Sulphur</li>
        <li>Iron</li>
        <li>Manganese</li>
        <li>Zinc</li>
        <li>Copper</li>
        <li>Boron</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Groundnuts</h1>
    <ol>
      <li>
        <strong>Nematodes Management:</strong>
        <p>
          To control nematodes, apply 60 g of Carbofuran 3G or Phorate 10G
          granules per plant a week before planting. Follow with profuse
          irrigation, avoiding soil disturbance for at least 15 days.
        </p>
      </li>
      <li>
        <strong>Aphid Management:</strong>
        <p>
          Use insecticides such as imidacloprid to manage aphid infestations in
          groundnut crops.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Groundnuts</h1>
    <p>
      <ul>
        <li>
          <strong>Early Leaf Spot Management:</strong>
          <p>
            Apply fungicides like chlorothalonil to control early leaf spot
            disease in groundnut plants.
          </p>
        </li>
        <li>
          <strong>Rust Management:</strong>
          <p>
            Use appropriate fungicides, such as propiconazole, to manage rust
            infections in groundnut crops.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Groundnuts</h1>
    <p>
      Harvest groundnuts at the right stage of maturity and implement proper
      post-harvest measures, including drying and storage, to ensure the
      quality of the harvested crop.
    </p>
  </>
)}
{plant !== 3 ? null : (
  <>
    <h1>Onion Nutrient Management</h1>
    <p>
      Maintaining proper nutrient levels is crucial for successful onion
      cultivation. Organic manure application is beneficial for soil health and
      ensuring the availability of essential nutrients for onion plants.
      Additionally, supplementing with fertilizers at different growth stages is
      important for optimal onion bulb development.
    </p>
    <h1>Essential Nutrients for Onion Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Zinc</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Onions</h1>
    <ol>
      <li>
        <strong>Thrips Management:</strong>
        <p>
          Use insecticidal soaps or neem oil to control thrips infestations in
          onion crops.
        </p>
      </li>
      <li>
        <strong>Onion Maggot Management:</strong>
        <p>
          Implement cultural practices like crop rotation and use insecticides
          to manage onion maggot issues.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Onions</h1>
    <p>
      <ul>
        <li>
          <strong>Downy Mildew Management:</strong>
          <p>
            Apply fungicides containing mancozeb to control downy mildew in
            onion plants.
          </p>
        </li>
        <li>
          <strong>Botrytis Rot Management:</strong>
          <p>
            Practice proper spacing and ventilation to prevent botrytis rot.
            Fungicides like chlorothalonil can be used for control.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Onions</h1>
    <p>
      Harvest onions when the tops have fallen over, and the bulbs have reached
      the desired size. Proper curing and storage are essential for maintaining
      the quality of harvested onions.
    </p>
  </>
)}
{plant !== 4 ? null : (
  <>
    <h1>Pomegranate Nutrient Management</h1>
    <p>
      Ensuring proper nutrient levels is essential for successful pomegranate
      cultivation. Organic manure application helps maintain soil fertility,
      while supplemental fertilizers should be applied at different growth
      stages for optimal tree health and fruit development.
    </p>
    <h1>Essential Nutrients for Pomegranate Trees</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Sulphur</li>
        <li>Iron</li>
        <li>Manganese</li>
        <li>Zinc</li>
        <li>Copper</li>
        <li>Boron</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Pomegranates</h1>
    <ol>
      <li>
        <strong>Aphid Management:</strong>
        <p>
          Control aphids using insecticidal soaps or neem oil. Regular
          monitoring is essential to detect early infestations.
        </p>
      </li>
      <li>
        <strong>Fruit Borer Management:</strong>
        <p>
          Apply appropriate insecticides like spinosad to manage fruit borer
          infestations in pomegranate orchards.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Pomegranates</h1>
    <p>
      <ul>
        <li>
          <strong>Anthracnose Management:</strong>
          <p>
            Use fungicides such as copper-based formulations to control
            anthracnose in pomegranate trees.
          </p>
        </li>
        <li>
          <strong>Bacterial Blight Management:</strong>
          <p>
            Apply copper sprays to manage bacterial blight issues in
            pomegranates.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Pomegranates</h1>
    <p>
      Harvest pomegranates when they reach the desired color and size.
      Post-harvest measures include proper cleaning, sorting, and packaging to
      ensure the quality of the harvested fruits.
    </p>
  </>
)}
{plant !== 5 ? null : (
  <>
    <h1>Tomato Nutrient Management</h1>
    <p>
      Adequate nutrient management is crucial for successful tomato
      cultivation. Utilize organic manure and apply fertilizers at different
      growth stages to ensure optimal plant development, flower setting, and
      fruit production.
    </p>
    <h1>Essential Nutrients for Tomato Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Sulphur</li>
        <li>Iron</li>
        <li>Manganese</li>
        <li>Zinc</li>
        <li>Boron</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Tomatoes</h1>
    <ol>
      <li>
        <strong>Tomato Hornworm Management:</strong>
        <p>
          Handpick or use appropriate insecticides like bacillus thuringiensis
          (Bt) to control tomato hornworm infestations.
        </p>
      </li>
      <li>
        <strong>Whitefly Management:</strong>
        <p>
          Use insecticidal soaps or neem oil to manage whitefly populations in
          tomato crops.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Tomatoes</h1>
    <p>
      <ul>
        <li>
          <strong>Early Blight Management:</strong>
          <p>
            Apply fungicides containing chlorothalonil to control early blight
            in tomato plants.
          </p>
        </li>
        <li>
          <strong>Tomato Mosaic Virus Management:</strong>
          <p>
            Control viral infections like tomato mosaic virus through
            prevention measures and removing infected plants.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Tomatoes</h1>
    <p>
      Harvest tomatoes when they reach mature color and size. Proper handling,
      sorting, and storage are essential for maintaining the quality of
      harvested tomatoes.
    </p>
  </>
)}
{plant !== 6 ? null : (
  <>
    <h1>Banana Nutrient Management</h1>
    <p>
      Proper nutrient management is essential for successful banana
      cultivation. Utilize organic manure and apply fertilizers at different
      growth stages to ensure optimal plant development, flowering, and fruiting.
    </p>
    <h1>Essential Nutrients for Banana Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Sulphur</li>
        <li>Iron</li>
        <li>Manganese</li>
        <li>Zinc</li>
        <li>Copper</li>
        <li>Boron</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Bananas</h1>
    <ol>
      <li>
        <strong>Banana Aphid Management:</strong>
        <p>
          Control banana aphids using insecticidal soaps or neem oil. Regular
          monitoring is crucial to detect early infestations.
        </p>
      </li>
      <li>
        <strong>Banana Weevil Management:</strong>
        <p>
          Implement cultural practices like removing affected pseudostems and
          use insecticides to manage banana weevil infestations.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Bananas</h1>
    <p>
      <ul>
        <li>
          <strong>Panama Disease Management:</strong>
          <p>
            Practice strict hygiene measures and use resistant banana varieties
            to manage Panama disease (Fusarium wilt).
          </p>
        </li>
        <li>
          <strong>Black Sigatoka Management:</strong>
          <p>
            Apply fungicides containing chlorothalonil to control black Sigatoka
            disease in banana plants.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Bananas</h1>
    <p>
      Harvest bananas when they reach the desired size and color. Proper
      handling, packaging, and storage are crucial for maintaining the quality
      of harvested bananas.
    </p>
  </>
)}

{plant !== 7 ? null : (
  <>
    <h1>Cotton Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for successful cotton cultivation.
      Utilize organic manure and apply fertilizers at different growth stages to
      ensure optimal plant development, flowering, and boll formation.
    </p>
    <h1>Essential Nutrients for Cotton Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Zinc</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Cotton</h1>
    <ol>
      <li>
        <strong>Bollworm Management:</strong>
        <p>
          Control bollworm infestations using insecticides like
          pyrethroids. Implement integrated pest management (IPM) practices.
        </p>
      </li>
      <li>
        <strong>Aphid Management:</strong>
        <p>
          Use insecticides or beneficial insects to control aphid populations
          in cotton crops.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Cotton</h1>
    <p>
      <ul>
        <li>
          <strong>Verticillium Wilt Management:</strong>
          <p>
            Practice crop rotation and use resistant varieties to manage
            Verticillium wilt in cotton.
          </p>
        </li>
        <li>
          <strong>Cotton Leaf Curl Virus Management:</strong>
          <p>
            Control whitefly populations to prevent the spread of Cotton Leaf
            Curl Virus. Use insecticides and resistant varieties.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Cotton</h1>
    <p>
      Harvest cotton when bolls are fully mature and have opened. Proper
      ginning and storage are crucial for maintaining the quality of harvested
      cotton.
    </p>
  </>
)}
{plant !== 8 ? null : (
  <>
    <h1>Soybean Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for successful soybean cultivation.
      Utilize organic manure and apply fertilizers at different growth stages to
      ensure optimal plant development, flowering, and pod formation.
    </p>
    <h1>Essential Nutrients for Soybean Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Zinc</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Soybeans</h1>
    <ol>
      <li>
        <strong>Soybean Aphid Management:</strong>
        <p>
          Monitor soybean aphid populations regularly and use insecticides when
          necessary. Beneficial insects like ladybugs can also help control
          aphids.
        </p>
      </li>
      <li>
        <strong>Bean Pod Borer Management:</strong>
        <p>
          Apply appropriate insecticides to control bean pod borer infestations
          in soybean crops.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Soybeans</h1>
    <p>
      <ul>
        <li>
          <strong>Soybean Rust Management:</strong>
          <p>
            Apply fungicides containing azoxystrobin or other effective
            ingredients to manage soybean rust.
          </p>
        </li>
        <li>
          <strong>Anthracnose Management:</strong>
          <p>
            Plant resistant varieties and practice crop rotation to manage
            anthracnose in soybeans.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Soybeans</h1>
    <p>
      Harvest soybeans when the pods are fully mature and have turned yellow.
      Proper drying and storage are crucial for maintaining the quality of
      harvested soybeans.
    </p>
  </>
)}
{plant !== 9 ? null : (
  <>
    <h1>Sugarcane Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for successful sugarcane
      cultivation. Utilize organic manure and apply fertilizers at different
      growth stages to ensure optimal plant development, maturation, and sugar
      content in the cane.
    </p>
    <h1>Essential Nutrients for Sugarcane Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Zinc</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Sugarcane</h1>
    <ol>
      <li>
        <strong>Sugarcane Borer Management:</strong>
        <p>
          Control sugarcane borers using insecticides or biological control
          methods. Regular monitoring is crucial to detect infestations early.
        </p>
      </li>
      <li>
        <strong>Sugarcane Aphid Management:</strong>
        <p>
          Use insecticides to control sugarcane aphids and prevent the
          transmission of viral diseases.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Sugarcane</h1>
    <p>
      <ul>
        <li>
          <strong>Red Rot Management:</strong>
          <p>
            Implement proper sanitation practices and use resistant varieties to
            manage red rot disease in sugarcane.
          </p>
        </li>
        <li>
          <strong>Smut Management:</strong>
          <p>
            Apply appropriate fungicides and practice crop rotation to control
            smut in sugarcane crops.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Sugarcane</h1>
    <p>
      Harvest sugarcane when it reaches maturity. Proper cleaning and
      transportation are essential for maintaining the quality of harvested
      sugarcane. Juice extraction and sugar processing follow the harvest.
    </p>
  </>
)}

{plant !== 10 ? null : (
  <>
    <h1>Paddy Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for successful paddy cultivation.
      Utilize organic manure and apply fertilizers at different growth stages to
      ensure optimal plant development, panicle formation, and grain filling.
    </p>
    <h1>Essential Nutrients for Paddy Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Zinc</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Paddy</h1>
    <ol>
      <li>
        <strong>Brown Plant Hopper Management:</strong>
        <p>
          Use insecticides like imidacloprid to control brown plant hopper
          infestations in paddy fields.
        </p>
      </li>
      <li>
        <strong>Leaf Folder Management:</strong>
        <p>
          Apply insecticides such as chlorpyrifos to control leaf folder
          populations in paddy crops.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Paddy</h1>
    <p>
      <ul>
        <li>
          <strong>Blast Disease Management:</strong>
          <p>
            Use fungicides containing tricyclazole to manage blast disease in
            paddy crops. Planting resistant varieties is also advisable.
          </p>
        </li>
        <li>
          <strong>Sheath Blight Management:</strong>
          <p>
            Apply fungicides like azoxystrobin to control sheath blight disease
            in paddy fields.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Paddy</h1>
    <p>
      Harvest paddy when the grains have reached their full size and the
      moisture content is appropriate. After harvesting, paddy undergoes
      threshing, drying, and milling processes to obtain rice.
    </p>
  </>
)}
{plant !== 11 ? null : (
  <>
    <h1>Coconut Nutrient Management</h1>
    <p>
      Proper nutrient management is important for successful coconut
      cultivation. Apply organic manure and provide appropriate fertilizers to
      support healthy growth, flowering, and fruiting of coconut palms.
    </p>
    <h1>Essential Nutrients for Coconut Trees</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Magnesium</li>
        <li>Calcium</li>
        <li>Sulphur</li>
        <li>Iron</li>
        <li>Zinc</li>
        <li>Manganese</li>
        <li>Boron</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Coconuts</h1>
    <ol>
      <li>
        <strong>Rhino Beetle Management:</strong>
        <p>
          Control rhinoceros beetle infestations by using traps, biological
          control agents, and proper sanitation practices.
        </p>
      </li>
      <li>
        <strong>Red Palm Weevil Management:</strong>
        <p>
          Implement pheromone traps and use insecticides judiciously to control
          red palm weevil in coconut plantations.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Coconuts</h1>
    <p>
      <ul>
        <li>
          <strong>Lethal Yellowing Disease Management:</strong>
          <p>
            Use disease-resistant coconut varieties and practice early detection
            and removal of infected palms to manage lethal yellowing disease.
          </p>
        </li>
        <li>
          <strong>Root Wilt Disease Management:</strong>
          <p>
            Maintain proper drainage and avoid waterlogged conditions to
            mitigate the impact of root wilt disease in coconut palms.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Coconuts</h1>
    <p>
      Harvest coconuts when they are fully mature, and the husk has turned
      brown. Proper post-harvest practices include husking, dehusking, and
      storage of coconuts.
    </p>
  </>
)}

{plant !== 12 ? null : (
  <>
    <h1>Maize Nutrient Management</h1>
    <p>
      Proper nutrient management is crucial for successful maize cultivation.
      Apply organic manure and provide balanced fertilizers at different growth
      stages to ensure optimal plant development, flowering, and grain
      formation.
    </p>
    <h1>Essential Nutrients for Maize Plants</h1>
    <p>
      <ul>
        <li>Nitrogen</li>
        <li>Phosphorus</li>
        <li>Potassium</li>
        <li>Sulphur</li>
        <li>Calcium</li>
        <li>Magnesium</li>
        <li>Boron</li>
        <li>Copper</li>
        <li>Zinc</li>
        <li>Manganese</li>
      </ul>
    </p>
    <h1>Insect Pests & Pest Management for Maize</h1>
    <ol>
      <li>
        <strong>Fall Armyworm Management:</strong>
        <p>
          Monitor fields regularly and use biological control agents or
          insecticides to manage fall armyworm infestations in maize crops.
        </p>
      </li>
      <li>
        <strong>Corn Borer Management:</strong>
        <p>
          Implement integrated pest management (IPM) practices and use
          insecticides if needed to control corn borer populations.
        </p>
      </li>
    </ol>

    <h1>Plant Diseases & Disease Management for Maize</h1>
    <p>
      <ul>
        <li>
          <strong>Maize Rust Management:</strong>
          <p>
            Apply fungicides containing triazoles to manage rust diseases in
            maize crops.
          </p>
        </li>
        <li>
          <strong>Maize Stalk Rot Management:</strong>
          <p>
            Practice crop rotation and field sanitation to reduce the incidence
            of stalk rot in maize.
          </p>
        </li>
      </ul>
    </p>

    <h1>Harvesting & Post Harvest Measures for Maize</h1>
    <p>
      Harvest maize when the kernels are fully mature and have reached the
      desired moisture content. Proper drying and storage are crucial for
      maintaining the quality of harvested maize.
    </p>
  </>
)}








    </div>
    </div>
  );
};

export default PlantTips;
