

//to upload image from the gallery and the image must be less than 500kb
document
  .getElementById("input-file")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const maxSize = 500 * 1024;
    if (file) {
      if (file.size > maxSize) {
        document.getElementById("uploadText").textContent =
          "Upload your photo (JPG or PNG, max size: 500KB)";
        document.getElementById("uploadText").style.color = "red";
        document.getElementById("img2").style.backgroundColor = "red";
        event.target.value = "";
        return;
      } else {
        document.getElementById("uploadText").textContent =
          "Uploaded photo (JPG or PNG, max size: 500KB)";
        document.getElementById("uploadText").style.color = "white";
        document.getElementById("img2").style.backgroundColor = "transparent";
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        localStorage.setItem("uploadImage", e.target.result);
        updatedProfile();
        console.log("image saved to local storgare");
        //TO SHOW THE PREVIEW

        // it's a class instead to hide the drag and drop button immediately the change and remove button comes up
        let dragTextClass = document.querySelector(".paragraph");
        if (dragTextClass) {
          dragTextClass.style.display = "none";
        }

        const preview = document.getElementById("preview");
        if (preview) {
          preview.src = reader.result;
          preview.style.display = "block";
        }
        const changeBtn = document.getElementById("changeBtn");
        if (changeBtn) {
          changeBtn.style.display = "inline-block";
        }

        const removeBtn = document.getElementById("removeBtn");
        if (removeBtn) {
          removeBtn.style.display = "inline-block";
        }
      };
    }
  });


// form validation
document.getElementById("MYFORM").addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  // name validate first
  const username = document.getElementById("username").value;
  if (
    username === "" ||
    !/^[A-Za-z\s]+$/.test(username) ||
    username.length <= 3
  ) {
    document.getElementById("nameError").textContent =
      "please enter a valid name...";
      document.getElementById("nameError").style.color = "red";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }
  console.log(username);

  //email validation
  const email = document.getElementById("email").value;
  if (email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]$/.test(email)) {
    document.getElementById("emailError").textContent =
      "please enter a valid email address..";
      document.getElementById("emailError").style.color = "red";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }
  console.log(email);
  //github validation
  const github = document.getElementById("github").value;
  if (github === "" || !/^@/.test(github) || github.length < 4) {
    document.getElementById("githubError").textContent =
      "please eneter a valid  github acc...";
      document.getElementById("githubError").style.color = "red";
    valid = false;
  } else {
    document.getElementById("githubError").textContent = "";
  }
  console.log(github);
  // image validation
  const preview = document.getElementById("preview").src;
  const profile= document.getElementById("input-file").value;
  if (profile === "") {
    document.getElementById("uploadText").textContent =
      " Upload your photo (JPG or PNG, max size: 500KB).";
    valid = false;
    document.getElementById("uploadText").style.color = "red";
  } else {
    document.getElementById("uploadText").textContent =
      " Upload your photo (JPG or PNG, max size: 500KB).";
    document.getElementById("uploadText").style.color = "white";
    
  
} 
  

  if (valid) {
    document.getElementById("MYFORM").classList.add("hidden");
    const ticketG = document.getElementById("ticketG");
    ticketG.classList.remove("hidden");
    ticketG.classList.add("opacity-100");

  }
});

// this is to get the user details whenever the user inputs his details to appears on the registration succesfull
const txt1 = document.getElementById("username");
const email = document.getElementById("email");
const githb = document.getElementById("github");
const picture = document.getElementById("input-file");
const btn1 = document.getElementById("submit");
const out1 = document.getElementById("nameShow");
const out2 = document.getElementById("emailShow");
const out3 = document.getElementById("gitshow");
const out4 = document.getElementById("nameF");
const imgU = document.getElementById("pics");
const gerationofrandomno = document.getElementById("random");
const currentDate = new Date();
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formatedate = `${currentDate.toLocaleDateString(
  "en-US",
  options
)} /Austin, TX`;

function fun1() {
  out1.innerHTML = txt1.value;
  out2.innerHTML = email.value;
  out3.innerHTML = githb.value;
  out4.innerHTML = txt1.value;
  // imgU.innerHTML = picture.value;
  // Retrieve the image from localStorage and set it as the src
  const storedImage = localStorage.getItem("uploadImage");
  if (storedImage) {
    imgU.src = storedImage; // Set the image source
    imgU.style.display = "block"; // Ensure the image is visible
  }
  

  let randomvalue = Math.floor(Math.random() * 900000);
  gerationofrandomno.innerHTML = `#${randomvalue}`;
  document.getElementById("date").innerHTML = formatedate;
}
document.getElementById("input-file").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("uploadImage", e.target.result); // Save the image to localStorage
    };
    reader.readAsDataURL(file); // Convert the file to a Base64 string
  }
});

function updatedProfile() {
  const storedImage = localStorage.getItem("uploadImage");

  if (storedImage) {
    const pics = document.getElementById("pics");
    pics.src = storedImage; // Set the image source
    pics.style.display = "block"; // Ensure the image is visible
  }
}

window.addEventListener("DOMContentLoaded", updatedProfile);
btn1.addEventListener("click", fun1);

document
  .getElementById("input-file")
  .addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";
        document.getElementById("buttons").style.display = "block";
        const uploadIcon = document.getElementById("profile-Pic");
        uploadIcon.style.display = "none";
        const dragText = document.querySelector(".paragraph");
      if (dragText) {
        dragText.style.display = "none";
      }
      };
      reader.readAsDataURL(file);
    }
  });

//to remove
document.getElementById("removeBtn").addEventListener("click", function () {
  document.getElementById("preview").src = "";
  document.getElementById("preview").style.display = "none";
  document.getElementById("input-file").value = "";
  document.getElementById("buttons").style.display = "none";
  document.querySelector(".paragraph").style.display = "block";
  document.getElementById("profile-Pic").style.display = "block";
  document.querySelector(".paragraph").style.display = "center";
 

});


//chnage picture
document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("input-file").click();
});

