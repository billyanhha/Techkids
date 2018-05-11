import React , {Component} from 'react';

class SearchField extends Component{

    handleChangeText = (e) =>{
        this.props.searchFunction(e);
    }
    
    render(){
        return(
            <form className="navbar-form" role="search">
                <div className="input-group add-on">
                    <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" onChange = {e => this.handleChangeText(e.target.value)}/>
                    <div className="input-group-btn searhicon">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>
        );    
    }
}


export default SearchField