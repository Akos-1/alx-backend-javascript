export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesLisst,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
