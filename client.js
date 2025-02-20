// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // Initialize bonusPercentage variable to 0
  let bonusPercentage = 0;

  // Check the employee's reviewRating and assign the appropriate bonusPercentage
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 0.1;
  }

  // Add an additional bonus if the employeeNumber has 4 digits
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  }

  // Adjust the bonusPercentage if the annualSalary is above $65,000
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
  }

  // Ensure the bonusPercentage is within the acceptable range (0 to 13%)
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  // Calculate the bonusAmount and totalCompensation
  const bonusAmount = Math.round(employee.annualSalary * bonusPercentage);
  const totalCompensation = Number(employee.annualSalary) + bonusAmount;

  // Return an object with the employee's name, bonusPercentage, totalCompensation, and bonusAmount
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: bonusAmount
  };
}

// Loop over the employees array and calculate the bonus data for each employee
for (let i = 0; i < employees.length; i++) {
  const employee = employees[i];

  // Calculate the bonus data for the current employee
  const bonusData = calculateIndividualEmployeeBonus(employee);

  // Print the employee's name and their bonus data
  console.log('Employee:', employee.name);
  console.log('Bonus Data:', bonusData);
}

  











  // return new object with bonus results

