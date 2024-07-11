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
       
    /*  function viewMore(menuId){
        
        
        if(menuId='menu1'){
          document.getElementById('menu1').innerHTML = "The perfect balance of espresso, steamed milk and foam.";
        }else 
        if(menuId = 'menu2'){
          document.getElementById('menu2').innerHTML = " A concentrated form of coffee served in small, strong shots";
        }
        else if(menuId = 'menu3'){
          document.getElementById('menu3').innerHTML =  "Made with caramel syrup, espresso shots, milk, and ice ";
        }else if(menuId ='menu4'){
          document.getElementById('menu4').innerHTML = "Made with dark, semisweet, or bittersweet chocolate chopped into small pieces stirred into milk with the addition of sugar.";
        }
        
        
       
      }*/

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

    
