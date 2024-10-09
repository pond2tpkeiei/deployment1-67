export function BMI(weight: number, height: number): string {
    return (weight / (height * height)).toFixed(2);
  }
  
  const weight: number = 60;
  const height: number = 1.75;
  console.log(`Your weight: ${weight} kg.\nYour height: ${height} m.\nYour BMI: ${BMI(weight, height)}`);
  