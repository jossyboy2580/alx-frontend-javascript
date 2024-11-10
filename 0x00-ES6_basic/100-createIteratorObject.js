export default function createIteratorObject(report) {
  let allEmployees = [];

  // Flatten the array of employees
  for (const value of Object.values(report.allEmployees)) {
    allEmployees = [ ...allEmployees, ...value ];
  }

  let ind = 0;

  // Return an object with Symbol.iterator implemented correctly
  return {
    [Symbol.iterator]() {
      // The iterator function should return an object with a next() method
      return {
	next() {
	  if (ind < allEmployees.length) {
	    return {
	      value: allEmployees[ind++],
	      done: false
	    };
	  }
	  return {
	    value: undefined,
	    done: true
	  };
	}
      };
    }
  };
}
