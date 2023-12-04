export interface CarProps {
  id: number;
  brand: string;
  model: string;
  carTypeId: number;
  carType: string;
  priceNew: number;
  priceUsed: number;
  cylinder: number;
  transmissionTypeId: number;
  transmissionTypeCode: string;
  transmissionType: string;
  transmission: string;
  gears: number;
  driveSystemId: number;
  driveSystemCode: string;
  driveSystem: string;
  fuelId: number;
  fuelCode: string;
  fuel: string;
  maxBioFuel: number;
  hasStartAndStop: boolean;
  cityFuel: number;
  cityFuelMetric: number;
  cityCarbon: number;
  cityCarbonMetric: number;
  highwayFuel: number;
  highwayFuelMetric: number;
  highwayCarbon: number;
  highwayCarbonMetric: number;
  combinedFuel: number;
  combinedFuelMetric: number;
  combinedCarbon: number;
  combinedCarbonMetric: number;
  hasGuzzler: boolean;
  annualFuelCost: number;
  annualFuelCostEuro: number;
  spendOnFiveYears: number;
  spendOnFiveYearsEuro: number;
  feRating: number;
  ghgRating: number;
  smogRating: number;
  ecoScore: number;
  image?: string;
  views: number;
}

