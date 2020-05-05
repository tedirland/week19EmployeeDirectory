import React, { Component } from "react"

class Table extends Component {
    constructor(props) {
        super(props)
     this.state = {  
        employees: [
            { id: 1, name: "Jeff", department: "Engineering", email: "jeffgoldblum22@gmail.com" },
            { id: 2, name: "Tom", department: "Finance", email: "tomthebomb23@gmail.com" },
            { id: 3, name: "Myles", department: "Sales", email: "mgrunk34@gmail.com" },
            { id: 4, name: "Dave", department: "Executive", email: "downtown88@gmail.com" },
            { id: 5, name: "Vince", department: "Engineering", email: "the_real_craw_daddy@gmail.com" },
            { id: 6, name: "Topher", department: "Engineering", email: "tgrace12@gmail.com" },
            { id: 7, name: "Brian", department: "Sales", email: "keehnerb@gmail.com" },
            { id: 8, name: "Neal", department: "Finance", email: "the_real_craw_daddy@gmail.com" },
            { id: 9, name: "Ted", department: "Engineering", email: "teddywestside@gmail.com" },
            { id: 10, name: "Brandon", department: "Sales", email: "rutchard@gmail.com" },

        ]

     }

    }
    
    renderTableData() {
        return this.state.employees.map((employee, index) => {
           const { id, name, department, email } = employee //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{department}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
         let header = Object.keys(this.state.employees[0])
         return header.map((key, index) => {
             return <th key = {index}> {key.toUpperCase()}</th>
         })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Employee Directory</h1>
              <table id='employees'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
    }




export default Table;
