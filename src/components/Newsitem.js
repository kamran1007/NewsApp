import React, { Component } from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
    
    render() {
    let {title, desc,imgurl,newurl,updateat, auther, sourcefrom} = this.props;
    return (
        
      <div>
        <div className="card" style={{width : "20rem"}}>
  <img src={!imgurl?"https://deadline.com/wp-content/uploads/2022/11/nick-aaron-carter.jpg?w=1000":imgurl} className="card-img-top" alt="..." style={{height : "15rem"}}/>
  <div className="card-body">
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {sourcefrom}</span>
    
    
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <div class="card-footer text-muted">
    BY {!auther? "unkhown": auther} at {new Date(updateat).toGMTString()}
  </div>
    <a href={newurl} className="btn btn-sm btn-info">Read More... </a>
  </div>
</div>

      </div>
    )
  }
}
