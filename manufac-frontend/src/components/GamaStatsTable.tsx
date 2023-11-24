// src/components/StatsTable.tsx

import React from 'react';
import { calculateMeanGamma, calculateMedianGamma, calculateModeGamma } from '../utils/statsUtils.ts';

interface StatsTableProps {
  data: {
    Alcohol: number;
    Flavanoids: number;
    Gamma: number; 
  }[];
}

const StatsTable: React.FC<StatsTableProps> = ({ data }) => {
  // to get the alcohol classes  
  const classes = Array.from(new Set(data.map((item) => item.Alcohol)));

  //get classwise gama vlaues
  const getValuesForClass = (className: number, property: string): number[] => {

    return data.filter((item) => item.Alcohol === className).map((item) => item[property]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {classes.map((className) => (
            <th key={className}>Class {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <b>Gamma Mean</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateMeanGamma(getValuesForClass(className, 'Gamma')).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td><b>Gamma Median</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateMedianGamma(getValuesForClass(className, 'Gamma')).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td><b>Gamma Mode</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateModeGamma(getValuesForClass(className, 'Gamma')).toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatsTable;
