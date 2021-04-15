// const BindingForm = state => {
//   var result = [];
//   [state].map(function(obj) {
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     let auxKeys;
//     for (let index = 0; index < keys.length; index++) {
//       if (typeof values[index] === 'object') {
//         [values[index]].map(
//           (auxKeys = function(obj2) {
//             return Object.keys(obj2);
//           })
//         );
//         let auxValues = Object.values(values[index]);
//         let indexAux = index;
//         for (let index = 0; index < auxValues.length; index++) {
//           result.push({
//             name: [`${keys[indexAux].toString()}`, `${auxKeys[index]}`],
//             value: auxValues[index],
//           });
//         }
//         continue;
//       }
//       result.push({ name: keys[index], value: values[index] });
//     }
//     return state;
//   });
//   return result;
// };

// export default BindingForm;

const BindingForm = state => {
  var result = [];
  [state].map(function(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for (let index = 0; index < keys.length; index++) {
      let auxKeys;
      if (typeof values[index] === 'object') {
        [values[index]].map(obj2 => {
          return (auxKeys = Object.keys(obj2));
        });
        let auxValues = Object.values(values[index]);
        let indexAux = index;
        for (let index = 0; index < auxValues.length; index++) {
          result.push({
            name: [`${keys[indexAux].toString()}`, `${auxKeys[index]}`],
            value: auxValues[index],
          });
        }
        continue;
      }
      result.push({ name: keys[index], value: values[index] });
    }
    return result;
  });
  return result;
};

export default BindingForm;
