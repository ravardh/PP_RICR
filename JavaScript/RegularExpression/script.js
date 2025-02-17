function sbmt() {
  let isValid = true;
  //Fetching the Elements
  const txt = document.getElementById("text").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  //Making to default Look
  document.querySelectorAll(".ip").forEach((element) => {
    element.classList.remove("error");
  });

  //Validating the Name
  if (!/^[A-Za-z\s]+$/.test(txt) || txt.length < 3) {
    document.getElementById("text").classList.add("error");
    isValid = false;
  }

  //Validating the email
  if (
    !/^[a-zA-Z\d._]+@(gmail|yahoo|outlook|hotmail|ricr).(com|in|co.in)$/.test(
      em
    ) ||
    em.length < 9
  ) {
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  //validation phone Number
  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phone").classList.add("error");
    isValid = false;
  }

  if (isValid) {
    console.log(txt, em, ph);
    //Erase all the data from input feild
    //Making to default Look
    document.querySelectorAll(".ip").forEach((element) => {
      element.value = "";
    });
  }
}
