// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");

var table = d3.select("table");

table.attr("class", "table table-striped");


function loadtable(tableData) {
  tbody.html("");

  tableData.forEach((record) => {
    
    var row = tbody.append("tr");
    
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value)
    });
  })
}

loadtable(tableData);


var submit = d3.select("#filter-btn");


var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");

submit.on("click", function() {
  d3.event.preventDefault();

  var inputValue = inputDate.property("value");

  console.log(inputValue);
  

  var filteredtable = tableData.filter(record => record.datetime === inputValue);
  console.log(filteredtable);

  loadtable(filteredtable);
});
// loadtable(tableData)
// console.log(tableData);
// function loadtable(tableData){  
//   tbody.html("")
// datetable.forEach(function(datetable){
  
//     console.log(datetable);
//     var row =tbody.append("tr");

//     Object.entries(datetable).forEach(function([key, value]){
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     })
// })
// };
// var table = d3.select("table");



// var submit = d3.select("#submit");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);
  
//   // clear the input value
//   d3.select("#stockInput").node().value = "";
//   console.log(tableData);

//   var filteredData = tableData.filter(date => date.datetime === inputValue);
//   loadtable(filteredData);
 
// });
// table.attr("class", "table table-striped");