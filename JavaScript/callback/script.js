//promise

function xyz(ID) {
  return new Promise((Res, Rej) => {
    setTimeout(() => {
      if (ID !== 3) {
        console.log("Data", ID);
        Res("Success");
      } else {
        Rej("error");
      }
    }, 3000);
  });
}

xyz(1)
  .then((res) => {
    return xyz(2);
  })
  .then((res) => {
    return xyz(3);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log("error occured");
  });

// function fetchData(rollno, fetchnext) {
//   setTimeout(() => {
//     console.log("student " + rollno);
//     if (fetchnext) {
//       fetchnext();
//     }
//   }, 2000);
// }

// //callback Hell
// fetchData(1, () => {
//   fetchData(2, () => {
//     fetchData(3, () => {
//       fetchData(4, () => {
//         fetchData(5);
//       });
//     });
//   });
// });

//Initial understanding
// function sum(a,b)
// {
//     console.log(a+b);
// }

// function  calc(e,f,xyz){
//     e=e+1;
//     f=f+1
//     xyz(e,f)
// }

// calc(1,2,sum())
