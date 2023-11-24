// src/utils/statsUtils.ts

// to calculate mean
export const calculateMean = (values: number[]): number => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  };
 
  // to calculate median
  export const calculateMedian = (values: number[]): number => {
    const sortedValues = values.sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
  
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    } else {
      return sortedValues[middle];
    }
  };

  // to calculate mode
  export const calculateMode = (values: number[]): number => {
    const valueCount = values.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  
    let maxCount = 0;
    let mode = 0;
  
    for (const value in valueCount) {
      if (valueCount[value] > maxCount) {
        maxCount = valueCount[value];
        mode = parseFloat(value);
      }
    }
  
    return mode;
  };

  // to calculate gama mean
  export const calculateMeanGamma = (values: number[]): number => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  };
  
  // to calculate gama median
  export const calculateMedianGamma = (values: number[]): number => {
    const sortedValues = values.sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
  
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    } else {
      return sortedValues[middle];
    }
  };

  // to calculate gama mode
  export const calculateModeGamma = (values: number[]): number => {
    const valueCount = values.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  
    let maxCount = 0;
    let mode = 0;
  
    for (const value in valueCount) {
      if (valueCount[value] > maxCount) {
        maxCount = valueCount[value];
        mode = parseFloat(value);
      }
    }
  
    return mode;
  };
  
  