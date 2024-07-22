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
      }
       

        function viewMore(menuId) {
          const description = document.getElementById(menuId + '-desc');

          if (description.style.display === "none" || description.style.display === "") {
              description.style.display = "block";
          } else {
              description.style.display = "none";
          }
      }
  
     

      document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('successMessage').style.display = 'block';
    });

    
