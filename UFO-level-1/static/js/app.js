// from data.js
// from data.js
var tableData = data;

var tbody = d3.select('tbody'); 
var button = d3.select("#filter-btn");
var resetbtn = d3.select("#reset-btn");
var inputField1 = d3.select("#datetime")

tableData.forEach(input => {
    var tr = tbody.append('tr');
    tr.append('td').text(input.country);
    tr.append('td').text(input.state);
    tr.append('td').text(input.city);
    tr.append('td').text(input.datetime);
    tr.append('td').text(input.durationMinutes);
    tr.append('td').text(input.shape);
    tr.append('td').text(input.comments);
}); 


button.on("click", runFilter);
    function runFilter(){
    d3.event.preventDefault();
    var filteredData = tableData.filter(data => data.datetime === inputField1);
    tbody.html("");
    filteredData.forEach(input => { 
      var row = tbody.append('tr');
      row.append('td').text(input.country);
      row.append('td').text(input.state);
      row.append('td').text(input.city);
      row.append('td').text(input.datetime);
      row.append('td').text(input.durationMinutes);
      row.append('td').text(input.shape);
      row.append('td').text(input.comments);
    });

}; 
 
resetbtn.on("click", runReset);
  function runReset() {
  tbody.html("");
};
