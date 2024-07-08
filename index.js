       function addEmail(){
       document.getElementById('email-input').value = '';
       alert("Your email added successfully");
       }

       function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        reset();
      }
       
      function viewMore(){
        document.getElementById('menu3').innerHTML = "hello";
      }

      document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('successMessage').style.display = 'block';
    });
