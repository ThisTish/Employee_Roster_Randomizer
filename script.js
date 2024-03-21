// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];

// Collect employee data
const collectEmployees = () =>{
  // TODO: Get user input to create and return an array of employee objects
  // const trackEmployeeData = () =>{
	let firstName = window.prompt("First Name");
	let lastName = window.prompt("Last Name");			
	let salary = window.prompt("Salary");

  // add an array with out the subjects so they don't show when logged by the getRandomEmployee function
  // close prompt screen closes all out if cancel is clicked

	const info = {
		firstName: firstName,
		lastName: lastName,
		salary: salary}
    
  
  employeeArray.push(info);
  let yes = window.confirm("Add another employee?");
  while(yes === true){
    collectEmployees();
    break;
  }
  return(employeeArray);
};




// Display the average salary
// DONE DONE DONE
// TODO: Calculate and display the average salary
const displayAverageSalary = () => {
	const salaries = employeeArray.map (employee => parseFloat (employee.salary));
	
  let total = 0;	
	
	for(let money of salaries){
    if(isNaN(money)){
			money = 0;
		}
		total += (money);
	}
	
	const howMany = salaries.length;
	const average = total / howMany;
	console.log(average);
} //DONE DONE DONE






// Select a random employee
const getRandomEmployee = function(employeeArray) {
  // TODO: Select and display a random employee
  let random = Math.floor(Math.random()* employeeArray.length);
  let getName = employeeArray[random];
  console.log(getName);
  // console.log(random); THIS JUST SHOWS THE INDEX NUMBER. NEED UNTIL I CAN GET NAMES TO SHOW IN STRING.

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');


  // SHOULD THIS BE MOVED, OR CALLED AFTER A LOOP SOMEWHRE?
  // Clear the employee table
  employeeTable.innerHTML = '';
  console.log(employeesArray);

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();


  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
