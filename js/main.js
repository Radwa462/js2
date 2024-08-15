

function Ages(){

    var age = window.prompt("Enter your age");
    console.log(age);


    if(!isNaN(age)&&age>=18){
        CreateCards(age); 
    }
    else{
       var messageElement = document.createElement("h1");
      messageElement.textContent = " you are not eligible to log the website .";
      document.body.appendChild(messageElement);
    }
}
 
function CreateCards(age){
    var content = document.getElementById("content");
    for(var i=1;i<=100;i++){
        var card = document.createElement("div");
        card.classList.add('card');
        card.innerHTML = `<h3>Welcome!</h3>
          <p>Your age: ${age}</p>
          <p>Card number: ${i}</p>`;
        content.appendChild(card);
    }
}

Ages();
