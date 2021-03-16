	// from data.js
	const tableData = data;
	

	// YOUR CODE HERE!
	var tbody = d3.select("tbody");
	

	//Get aata values for each column
	// 

    data.forEach(row => {
      var DataRow = tbody.append("tr");
      Object.entries(row).forEach(([key, value]) => {
        var cell = DataRow.append("td");
        cell.text(value);
      });
    });

	
    // Select the button
    var button = d3.select("#filter-btn");

    // Select the form
    var form = d3.select("#date-form");

    // Create event handlers for clicking the button or pressing the enter key
    button.on("click", filterDate);
    form.on("submit", filterDate);

    // Event handler function for the form
	function filterDate() {

        // Prevent the page from refreshing
	    d3.event.preventDefault();
	

	    tbody.html("");
	

	    // Select the input element and get the raw HTML node
	    var inputElement = d3.select("#datetime");

	    // Get the value of the input element
	    var inputValue = inputElement.property("value");
	    console.log(inputValue);
	

	    //Filtered data
	    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
	    console.log(filteredData);
	

	    filteredData.forEach(function(selections){
	    
        //Add one tbale row for each UFO Sighting filtered
        var row = tbody.append("tr");
	    
        //Use Object.entries to append a cell to the row for each value
        Object.entries(selections).forEach(function([key, value]) {
	        console.log(key,value);
	        var cell = row.append("td");
	        cell.text(value);

            
	    });
	    });
	};
