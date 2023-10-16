// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

/*Using count-- will allow counter to go less than
 zero so i had to use another counter to make sure counter 
 stops at exactly this.counter = Math.max(0, this.counter - 1);

 option 1    
 if(this.counter > 0){
    this.counter -= 1
  }

  Option 2
  this.counter = Math.max(0, this.counter - 1);
 */

// Function to decrement count
const handleDecrement = () => {
    this.count = Math.max(0, this.count - 1);     //makes counter stops at zero and nothing less
  totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);







let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("circle")) {
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".product-image .active").classList.remove("active");
        document.querySelector(`.product-image .${target.id}`).classList.add("active");
    }
});