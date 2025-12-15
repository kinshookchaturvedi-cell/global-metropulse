// Enhanced Metro Database Schema with System, Financial & Operational Details

// ==================== SYSTEM INFORMATION ====================
export interface MetroSystemSpecs {
  trainType: string; // e.g., 'Driverless', 'Semi-Automated', 'Manual'
  trackGauge: string; // e.g., '1000mm', '1435mm' (Standard gauge)
  voltageSystem: string; // e.g., '1500V DC', '25kV AC'
  signallingSystem: string; // e.g., 'CBTC', 'Traditional Block Signal'
  maxSpeed: number; // km/h
  averageSpeed: number; // km/h
  frequency: number; // Trains per hour during peak
  carCount: number; // Cars per train
  capacity: number; // Passengers per train
  peakHourCapacity: number; // Total capacity during peak hour
  totalTrainFleet: number; // Total number of trains
  platformScreenDoors: boolean; // Safety feature
  automaticTicketing: boolean; // Automatic fare system
  mobileTicketing: boolean; // Digital payment support
}

// ==================== FINANCIAL INFORMATION ====================
export interface MetroFinancials {
  totalProjectCost: number; // USD millions
  costPerKm: number; // USD per km
  fundingSources: {
    government: number; // % or USD
    publicBonds: number;
    internationalLoans: number;
    privateInvestment: number;
    other: number;
  };
  yearlyOperatingBudget: number; // USD millions
  maintenanceBudget: number; // USD millions
  costRecoveryRatio: number; // % (Fare revenue / Operating cost)
  averageFareRevenue: number; // USD millions per year
  subsidyRequired: number; // USD millions per year
  employeeCount: number;
  profitMargin: number; // % (If profitable, else negative)
  debtOutstanding: number; // USD millions
  interestRate: number; // % on debt
}

// ==================== OPERATIONAL INFORMATION ====================
export interface MetroOperationalMetrics {
  dailyRidership: number; // Average daily passengers
  annualRidership: number; // Total annual passengers
  peakHourRidership: number; // Passengers during peak hour
  averageOccupancy: number; // % of capacity used
  peakOccupancy: number; // % of capacity during peak
  punctuality: number; // % of on-time arrivals
  averageWaitTime: number; // Minutes
  operatingHours: string; // e.g., '05:00-23:00'
  stationsOpen24Hours: number; // Count
  wheelchairAccessibleStations: number; // Count
  totalAccessibleStations: number; // %
  weekdayHoliday: boolean; // Operates on weekends/holidays
  avgPassengersPerStation: number;
  avgTicketPrice: number; // USD
  revenuePerKm: number; // USD per km annually
  costPerPassenger: number; // USD to operate per passenger
  employeeProductivity: number; // Passengers per employee
}

// ==================== EXPANSION & TIMELINE ====================
export interface MetroExpansionPlan {
  phaseNumber: number; // Current phase
  phaseName: string; // e.g., 'Phase 2 - Eastern Corridor'
  plannedOpeningDate: string; // ISO date
  actualOpeningDate: string; // ISO date
  newLinesKm: number; // New km in this phase
  newStations: number;
  plannedCompletionDate: string; // For ongoing phases
  completionPercentage: number; // %
  estimatedBudget: number; // USD millions
  actualSpentToDate: number; // USD millions
  budgetOverrun: number; // % (If negative, under budget)
  expectedDelayMonths: number;
}

// ==================== ENVIRONMENTAL & SOCIAL ====================
export interface MetroSustainability {
  energySource: string[]; // e.g., ['Hydroelectric', 'Solar', 'Grid']
  renewableEnergyPercent: number; // %
  carbonEmissionPerPassenger: number; // kg CO2 per year
  emissionsReduction: number; // % vs private cars
  communityAffected: number; // Persons
  displacedCommunities: number; // Families/Persons
  relocationCompensation: number; // USD millions provided
  localEmploymentCreated: number; // Jobs
  womenEmploymentPercent: number; // % of workforce
  accessibilityScore: number; // 1-10
}

// ==================== COMPLETE ENHANCED METRO PROJECT ====================
export interface MetroProjectEnhanced {
  // Basic Identification
  id: string;
  name: string;
  city: string;
  country: string;
  countryCode: string; // ISO 3166-1 alpha-2
  region: string; // Asia, Europe, Americas, Africa, Oceania
  
  // Timeline
  operationalDate: string;
  constructionStartDate: string;
  projectDuration: number; // Years from start to completion
  currentExpansionPhase: MetroExpansionPlan;
  
  // Physical Attributes
  totalLength: number; // km
  totalStations: number;
  lines: Array<{
    lineNumber: string;
    lineName: string;
    color: string;
    lengthKm: number;
    stationCount: number;
    operationalDate: string;
  }>;
  
  // Status
  status: 'operational' | 'under-construction' | 'planned' | 'suspended' | 'closed';
  operationalStatus: string; // e.g., 'Fully Operational', '80% Complete'
  
  // Detailed Information
  systems: MetroSystemSpecs;
  financials: MetroFinancials;
  operations: MetroOperationalMetrics;
  sustainability: MetroSustainability;
  
  // Additional Metadata
  governingAuthority: string; // e.g., 'DMRC', 'MTR Corporation'
  mainOperator: string;
  chiefEngineer: string;
  contactWebsite: string;
  officialWebsite: string;
  
  // Performance Ratings
  safetyRating: number; // 1-10
  reliabilityRating: number; // 1-10
  cleanlinessRating: number; // 1-10
  passengerSatisfaction: number; // % satisfied
  
  // Geographic & Infrastructure
  latitude: number;
  longitude: number;
  serviceArea: number; // sq km
  depotCount: number;
  depotCapacity: number; // Total trains that can be maintained
  interchangeStations: number; // Stations connecting multiple lines
  
  // Last Updated
  lastUpdated: string;
  nextPlannedExpansion: string; // ISO date
}
