
function toUppercase() {
      let input = document.getElementById("fname");
      input.value = input.value.toUpperCase();
    }

    // Attach event listener for when the field loses focus
document.getElementById("fname").addEventListener("blur", toUppercase);
  
