import React , { Component } from 'react'
import {Link} from 'react-router-dom'
class BodyImage extends Component {
    render(){
        const setImage = this.props.allImages.map(function(value , index){
            return (
                    <Link to ={`/images/` + value._id} key = {index}>
                        <div className="thumbnail" >
                            <div className = "imagePosted">
                                <img src={'http://' + value.imageUrl} alt={value.title}  className="img-responsive"/>
                                <div className ="iconTop">
                                    <i className="fa fa-plus"></i>
                                </div>
                            </div>
                            <div className="caption">
                                <div className="circle">
                                    <img src={'http://' + value.imageUrl} alt={value.title}  className="img-responsive"/>
                                    <h3>{value.description}</h3>
                                </div>
                                <p>{value.title}</p>
                            </div>
                        </div>  
                    </Link>
                    )
        })
        return(           
                <div className="col-md-3 col-ms-4 col-xs-6 col">
                        {setImage}
                </div>
        )
    }
}

export default BodyImage;