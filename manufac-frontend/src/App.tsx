import React from 'react';
import StatsTable from './components/StatsTable.tsx';
import GamaStatsTable from './components/GamaStatsTable.tsx'
import wineData from './data/wineData.ts'; // wine dataset

// Calculate Gamma property for each data point
const dataWithGamma = wineData.map((item) => ({
  ...item,
  Gamma: (item.Ash * item.Hue) / item.Magnesium,
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>Wine Statistics</h1>
      <StatsTable data={wineData} />
      <GamaStatsTable data={dataWithGamma} />
    </div>
  );
};

export default App;
