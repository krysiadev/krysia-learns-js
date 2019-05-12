/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

var $products = [
    {
      name: 'Baies candle',
      inventory: 20,
      unit_price: 65.00
    },
    {
      name: 'Figuier candle',
      inventory: 8,
      unit_price: 65.00
    },
    {
      name: 'Ambre candle',
      inventory: 12,
      unit_price: 65.00
    },
  ];
  
  
  // 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.
    
    function listProducts($arr) {
      var $productNames = []; // creates an array for the product names
      for (i=0;i<$arr.length;i++) { // loops thru products array
        $productObj = $arr[i]; // creates var to grab each product object from the array
        $productNames.push($productObj['name']); // pushes the 'name' key from each product object into the productNames array
      }
      return $productNames; // returns productNames array
    }
  
  
  // 4. Call the listProducts() function and log the returned value to the console.
  
    console.log(listProducts($products));
  
  // 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value
  
  function totalValue($arr) {
    var $totalProductValue = 0; // create variable to hold total value
    for (i=0;i<$arr.length;i++) { // loop through every item in the $products array
        $productObj = $arr[i]; // get each product object from the array
        $perItemCost = $productObj['unit_price']; // create variable for individual item cost and get each product object's unit_price value
        $perItemInventory = $productObj['inventory']; // create variable for individual item inventory and get each product object's inventory value
        $perItemValue = $perItemCost * $perItemInventory; // calculate total value of each item's inventory 
        $totalProductValue += $perItemValue; // add indiv item's value to the totalProductValue variable
    }
    return $totalProductValue; // returns the total value after the loop is complete
  };
  
  // 6. Call the totalValue() function and log the returned value to the console.
  
  console.log(totalValue($products));
  
  // 7. Run your code by typing node 3_final_products.js in the console below