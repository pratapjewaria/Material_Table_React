import React, { Component, forwardRef } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Search from "@material-ui/icons/Search";
import FilterList from "@material-ui/icons/FilterList";

class App extends Component {
  render() {
    const tableIcons = {
      SortArrow: forwardRef((props, ref) => (
        <ArrowUpward {...props} ref={ref} />
      )),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />)
    };
    const columns = [
      { title: "Name", field: "name" },
      { title: "Town", field: "town" },
      { title: "Digits", field: "digits", type: "currency" }
    ];
    const data = [
      {
        name: "skube",
        town: <input value="sample input data" />,
        digits: 1
      },
      { name: "jimmy", town: "scaraborough", digits: 555 },
      { name: "xiu", town: "china", digits: 999 }
    ];

    const options = { filtering: true, selection: true };

    const style = {
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    };

    return (
      <MaterialTable
        style={style}
        icons={tableIcons}
        columns={columns}
        data={data}
        options={options}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
