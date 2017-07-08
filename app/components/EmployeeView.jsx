var React = require("react");
var EmployeeDetail = require("./EmployeeDetails.jsx")

module.exports = React.createClass({
   render:function(){
       return(                     
                  <div>
                      {
                          this.props.employees.map(function(s,index){
                              return(
                               
                                  <EmployeeDetail info={s} key={"employee"+index} />
                              )         
                          })
                      }
                  </div>
           
            )}//end render function 
    });//end createClass