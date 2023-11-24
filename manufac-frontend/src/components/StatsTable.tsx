// src/components/StatsTable.tsx

import React from 'react';
import { calculateMean, calculateMedian, calculateMode } from '../utils/statsUtils.ts';

interface StatsTableProps {
  data: {
    Alcohol: number;
    Flavanoids: number;
  }[];
}

const StatsTable: React.FC<StatsTableProps> = ({ data }) => {

  // get alcohol classes
  const classes = Array.from(new Set(data.map((item) => item.Alcohol)));

  //get classwise Flavanoids vlaues
  const getValuesForClass = (className: number, property: string): number[] => {
    
    return data.filter((item) => item.Alcohol === className).map((item) => parseFloat(item[property]));
  };

  return (
    <>
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
          <td><b>Flavanoids Mean</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateMean(getValuesForClass(className, 'Flavanoids')).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td><b>Flavanoids Median</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateMedian(getValuesForClass(className, 'Flavanoids')).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td><b>Flavanoids Mode</b></td>
          {classes.map((className) => (
            <td key={className}>{calculateMode(getValuesForClass(className, 'Flavanoids')).toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
    </>
  );
  
};

export default StatsTable;
