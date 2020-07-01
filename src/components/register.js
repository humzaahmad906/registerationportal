import React from 'react'
import {addname, addfname, addpass} from '../actions/actions'
import {connect} from 'react-redux'
class App extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = (e) => {
            let isSuccess = false
            const name = document.getElementById("name").value
            const fname = document.getElementById("fname").value
            const pass = document.getElementById("pass").value
            
            if (name==="" || fname==="" || pass===""){
                console.log("cant submit")
                    // if (name===""){
                    //     document.getElementById("errname").style.display = "block"
                        
                    // }
                    // if (fname===""){
                    //     document.getElementById("errfname").style.display = "block"  
                    // }
                    // if (pass===""){
                    //     document.getElementById("errpass").style.display = "block"
                    // }
            }
            else isSuccess = true
            if (isSuccess){
                let tag= this.innerHTML;
                let obj={
                    name: name,
                    fname: fname,
                    password: pass
                }
                const id = Math.random().toString(25).substring(4)
                let payload = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
                let dlAnchorElem = document.createElement('a');
                dlAnchorElem.setAttribute("href",payload);
                dlAnchorElem.setAttribute("download", id+".json");
                dlAnchorElem.click();
            }
            else{
                if (name===""){
                    this.props.addfname(fname)
                    this.props.addpass(pass)
                }
                if (fname===""){
                    this.props.addname(name)
                    this.props.addpass(pass)
                }
                if (pass===""){
                    this.props.addname(name)
                    this.props.addfname(fname)
                }
            }
        }
    }
    render(){
        const allprops = {
            statename: this.props.propname,
            statefname: this.props.propfname,
            statepass: this.props.proppass
        }
        console.log(allprops)
        if (allprops.statename === "" && allprops.statefname === "" && allprops.statepass === ""){
            return (
                <div>
                    <div>Enter Name</div>
                    <div id = "errname" style = {{"display":"none"}}>name is incorrect</div>
                    <input id = "name" type = "text" placeholder = "Name"/><br></br>
                    <div>Enter Father Name</div>
                    <div id = "errfname" style = {{"display":"none"}}>father's name is incorrect</div>
                    <input id = "fname" type = "text" placeholder = "Father Name"/><br></br>
                    <div>Enter Password</div>
                    <div id = "errpass" style = {{"display":"none"}}>password is incorrect</div>
                    <input id = "pass" type = "password" placeholder = "Password"/><br></br>
                    <button onClick = {this.handleSubmit}>Submit</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <div>Enter Name</div>
                    <div id = "errname" style = {{"display":"none"}}>name is incorrect</div>
                    <input id = "name" type = "text" placeholder = "Name" defaultValue = {allprops.statename}/><br></br>
                    <div>Enter Father Name</div>
                    <div id = "errfname" style = {{"display":"none"}}>name is incorrect</div>
                    <input id = "fname" type = "text" placeholder = "Father Name" defaultValue = {allprops.statefname}/><br></br>
                    <div>Enter Password</div>
                    <div id = "errpass" style = {{"display":"none"}}>name is incorrect</div>
                    <input id = "pass" type = "password" placeholder = "Password" defaultValue = {allprops.statepass}/><br></br>
                    <button onClick = {this.handleSubmit}>Submit</button>
                </div>
            )
        }
        
    }
}
const mapStatesToProps = state => ({
    propname: state.name,
    propfname: state.fname,
    proppass: state.pass
})
const mapDispatchToProps = {addname, addfname, addpass}

export default connect(mapStatesToProps, mapDispatchToProps)(App)
