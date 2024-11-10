export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const value of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...value];
  }

  let ind = -1;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          ind += 1;
          if (ind < allEmployees.length) {
            return {
              value: allEmployees[ind],
              done: false,
            };
          }

          return {
            done: true,
          };
        },
      };
    },
  };
}
