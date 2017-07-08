var React = require("react");

module.exports = React.createClass({
    render:function(){
        return  (
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.props.info.EmployeeName}
                        </div>
                        <div className="panel-body">                            
                            <table border="2">                    
                                <tr>
                                    <td>EmployeeID: <b>{this.props.info.EmployeeID}</b>  </td>                                   
                                    <td> Salary: <b>{this.props.info.Salary}</b>  </td>
                                    <td> Address: <b>{this.props.info.Address}</b></td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                )
    }//end render function
})//end createClass