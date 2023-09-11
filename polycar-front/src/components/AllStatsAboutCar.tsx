import DisplayStats from "./displayStats";
import * as dataOfTheCar from "../data/car-data-updated.json";

function AllStatsAboutCar() {
  // Get the car ID from the URL
  const idOfCar: string = window.location.href.split("/")[4];

  // Get the car data by filtering the JSON based on the ID
  const carData = dataOfTheCar.result.find((car) => car.id === parseInt(idOfCar));

  // Destructure the carData object to extract its properties
  const {
    id,
    brand,
    model,
    carType,
    carTypeId,
    priceNew,
    priceUsed,
    cylinder,
    transmissionType,
    transmissionTypeId,
    transmissionTypeCode,
    transmission,
    gears,
    driveSystem,
    driveSystemId,
    driveSystemCode,
    fuel,
    fuelDetail,
    fuelId,
    fuelCode,
    maxBioFuel,
    hasStartAndStop,
    cityFuel,
    cityCarbon,
    highwayFuel,
    highwayCarbon,
    combinedFuel,
    combinedCarbon,
    hasGuzzler,
    annualFuelCost,
    spendOnFiveYears,
    feRating,
    ghgRating,
    smogRating,
    ecoScore,
  } = carData;

  return (
    <div>
      <h1>Stats about car</h1>
      {/* Pass the extracted variables as props to DisplayStats */}
      <DisplayStats
        id={id}
        brand={brand}
        model={model}
        carType={carType}
        carTypeId={carTypeId}
        priceNew={priceNew}
        priceUsed={priceUsed}
        cylinder={cylinder}
        transmissionType={transmissionType}
        transmissionTypeId={transmissionTypeId}
        transmissionTypeCode={transmissionTypeCode}
        transmission={transmission}
        gears={gears}
        driveSystem={driveSystem}
        driveSystemId={driveSystemId}
        driveSystemCode={driveSystemCode}
        fuel={fuel}
        fuelId={fuelId}
        fuelCode={fuelCode}
        fuelDetail={fuelDetail}
        maxBioFuel={maxBioFuel}
        hasStartAndStop={hasStartAndStop}
        cityFuel={cityFuel}
        cityCarbon={cityCarbon}
        highwayFuel={highwayFuel}
        highwayCarbon={highwayCarbon}
        combinedFuel={combinedFuel}
        combinedCarbon={combinedCarbon}
        hasGuzzler={hasGuzzler}
        annualFuelCost={annualFuelCost}
        spendOnFiveYears={spendOnFiveYears}
        feRating={feRating}
        ghgRating={ghgRating}
        smogRating={smogRating}
        ecoScore={ecoScore}

        
      />
    </div>
  );
}

export default AllStatsAboutCar;
