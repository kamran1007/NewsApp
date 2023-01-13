import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Mover from './Mover';

import Newsitem from './Newsitem'



export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize : 8,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }
    articles = []
    constructor(){
        super();
        this.state  = {
            articles : [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
      
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51112d73ba874790bdf844c4dd03d366&page = 1&pageSize=${this.props.pageSize}`
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData  = await data.json()
        console.log(parsedData)
        this.setState({
          articles: parsedData.articles,
           totalResults:parsedData.parsedData,
           loading: false
          })

    }
    PreviousClick  = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51112d73ba874790bdf844c4dd03d366&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData  = await data.json()
        console.log(parsedData)
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles,
            loading : false
          })
    }
    NextClick = async ()=>{
        if(this.state.page + 1> Math.ceil(this.state.totalResults/(this.props.pageSize))){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51112d73ba874790bdf844c4dd03d366&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData  = await data.json()
            console.log(parsedData)
            this.setState({
            page : this.state.page + 1,
            articles: parsedData.articles,
            loading:false
          })
        }
        
    }

  render() {
    return (
      <div>
        <div className='container my-5'>

        <h2>This is news app</h2>
        {this.state.loading && <Mover></Mover>}
        
        <div className='row'>
        {!this.state.loading && this.state.articles.map((e)=>{
            return <div className='col-md-4'>
                <Newsitem key  = {e.url} title = {e.title} desc = {e.description} imgurl = {e.urlToImage} newurl = {e.url} updateat= {e.publishedAt} auther = {e.author} sourcefrom = {e.source.name}/>
    
                </div>
        })}
        
            

        </div>
        <div className='container d-flex justify-content-evenly'>
        <button disabled = {this.state.page<=1} type="button" class="btn btn-info"onClick={this.PreviousClick}>&larr; previoue</button>
        <button disabled = {this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-info" onClick={this.NextClick}>Next &rarr;</button>
        </div>
      </div>
      </div>
    )
  }
}
