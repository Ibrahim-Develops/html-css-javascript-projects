let form = document.querySelector("form");
let array = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let Name = document.querySelector(".Name").value;
    let Email = document.querySelector(".Email").value;
    let Degree = document.querySelector(".Degree").value;
    let Password = document.querySelector(".Password").value;
    let CPassword = document.querySelector(".CPassword").value;
    let file = document.querySelector(".file").files[0];

    let NameError = document.querySelector(".eName");
    let EmailError = document.querySelector(".eEmail");
    let DegreeError = document.querySelector(".eDegree");
    let PicError = document.querySelector(".efile");
    let PasswordError = document.querySelector(".ePassword");
    let CPasswordError = document.querySelector(".eCPassword");

    NameError.style.display = "none";
    EmailError.style.display = "none";
    DegreeError.style.display = "none";
    PicError.style.display = "none";
    PasswordError.style.display = "none";
    CPasswordError.style.display = "none";

    if (Name === "") {
        NameError.style.display = "block";
    }
    if (Email === "") {
        EmailError.style.display = "block";
    }
    if (Degree === "") {
        DegreeError.style.display = "block";
    }
    if (!file) {
        PicError.style.display = "block";
    }
    if (Password === "") {
        PasswordError.style.display = "block";
    }
    if (CPassword !== Password) {
        CPasswordError.style.display = "block";
    }

    if (Name === "" || Email === "" || Degree === "" || !file || Password === "" || CPassword !== Password) {
        return;
    }

    let img = URL.createObjectURL(file);
    let obj = {
        Name: Name,
        Email: Email,
        Degree: Degree,
        Password: Password,
        img: img
    };

    array.push(obj);
    form.reset();
    console.log("For your security, please do not share your password with anyone");
    console.log("Password: " + obj.Password);
    


    document.querySelector(".Main").innerHTML = array.map((item) => {
        return `
          <div class="card">
          <img src="${item.img}" alt="" width="300px" height="340px">
          <h3><span>Name: </span>${item.Name}</h3>
          <h3><span>Email: </span>${item.Email}</h3>
          <h3><span>Degree: </span>${item.Degree}</h3>
          </div>
        `;
    }).join('');
});