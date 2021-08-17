function buildTable(data) {
  // first, clear out any exising data
  tbody.html("");

  // loop through each object in the data
  // append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // append a row to the table
    let row = tbody.append("tr");
    // loop through each field in the datarow and add
    // each value as a table cell (td)
    Objects.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

function handleclick () {
  // grab the date time value from the filter 
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  // check to see if a date was selected and filter the data using that date
  if (date) ={
    // apply a filter to the table data to only keep the rows where the date time value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    };
  // rebuild the the table using the filtered data
  // if no date was entered, then filted data will be the original table
  buildTable(filteredData);

  // attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleclick);

  // build the table when the page loads
  buildTable(buildTable);
  };
