const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userPhone = document.querySelector("#user-mobile-num");
const qrButton = document.querySelector("#qr-btn");
const loader = document.querySelector(".loader");
const qrImage = document.querySelector(".qr-image");



qrButton.addEventListener("click", async() => {
  qrImage.src = ""; //expects a url
  let userNameData = userName.value;
  let userEmailData = userEmail.value;
  let userPhoneData = userPhone.value;
  // console.log(imageSource);

  let allValues = `${userNameData} ${userEmailData} ${userPhoneData}`;
  // console.log(allValues);

  loader.style.display = "block";

  if (
    userNameData.length == 0 ||
    userPhoneData.length == 0 ||
    userEmailData == 0
  ) {
      alert("Enter valid credentials!");
      qrImage.src = "/images/4161429.jpg";
    loader.style.display = "none";
  } else {
    let imageSource = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
    let data = await fetch(imageSource);
    //Binary large object containing images,audio, other files
    let response = await data.blob();

    let url = URL.createObjectURL(response);
    qrImage.src = url; //expects a url
    loader.style.display = "none";
  }
})