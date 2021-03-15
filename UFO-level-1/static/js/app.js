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


