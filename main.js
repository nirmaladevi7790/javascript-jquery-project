const imageUrls = ["chickenrice.jpg", "chickendum.jpg", "gravy.jpg","finalbriyani.png","chickendum.jpg"];
let currentIndex = 0;
function changeImage() {
   document.getElementById("rotateimage").style.transform = "rotate(360deg)";
 setTimeout(() => {
    document.getElementById("rotateimage").src = imageUrls[currentIndex];
    document.getElementById("rotateimage").style.transform = "rotate(0deg)";
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }, 300); 
}
setInterval(changeImage, 4000);

const textToType="Enjoy our special menus everyday,Enhance your taste buds with us.we cook with lots of love and care like a mom,we make home made Authentic foods.we know good food is the foundation for good health.";
let currentI = 0;
const typingSpeed=20;
function typeParagraph() {
  const paragraphElement = document.getElementById("typingParagraph");
    if (currentI < textToType.length) {
    paragraphElement.textContent += textToType.charAt(currentI);
    currentI++;
    setTimeout(typeParagraph, typingSpeed);
    }
  }
  window.onload = typeParagraph;

  function sucess(){
    $("#title").show();
    $("#book").show();
    $("#typingParagraph").show();
    $(".login").hide();
  }      

        function fail() {
          $("#title").hide();
          $("#book").hide();
          $("#typingParagraph").hide();
          $(".login").show();
      }
      
      function log() {
          let username = document.getElementById('username').value;
          let password = document.getElementById('password').value;
      
          if (username == "nirmala" && password == "nirmala0707") {
              alert("Login successfully");
              sucess();
          } else {
              alert("Enter correct username & password");
              fail();  
          }
      }
      
      function printError(elemId, hintMsg) 
      {
  
          
          document.getElementById(elemId).innerHTML = hintMsg;
      }
  
  function validateForm() {
     
      var name = document.contactForm.cusername.value;
      var email = document.contactForm.cmailid.value;
      var message = document.contactForm.cmessage.value;
      var nameErr = true;
    if(name == "") 
    {
        printError("nameErr", "Please enter your name");
    } 
    else 
    {
        var regex = /^[a-zA-Z\s]+.$/ ;                
        if(regex.test(name) === false)
        {
            printError("nameErr", "Please enter a valid name");
        }
         else
         
         {
          
            nameErr = false;
        }
    }  
    if(email == "") 
    {
        printError("emailErr", "Please enter your email address");
    }
     else 
    {
      
    var regex = /^[\S+@\S+\.\S]+$/;

    if(regex.test(email) === false) 

    {
        
        printError("emailErr", "Please enter a valid email address");
    }
     else
    {
 
        emailErr = false;
    
    }
    }
    if(message == "")
    {
      printError("messageErr", "Please enter your message");
    }
 

    if((nameErr || emailErr || messageErr) == true)
{
    return false;
}
else{
    alert("THANK YOU FOR YOUR VALUABLE FEEDBACK! VISIT AGAIN");
}
};

function toggleMenu()
{
    let toggle=document.querySelector(".menu-bar");
    let menu=document.querySelector(".menu");
    toggle.onclick= function(){
    menu.classList.toggle("menu-active")  
}
}  
