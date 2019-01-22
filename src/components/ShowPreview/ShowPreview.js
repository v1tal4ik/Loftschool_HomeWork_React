import React,{Component} from 'react';
import { Switch,Link,Route} from 'react-router-dom';
import ShowPage from '../ShowPage';
import './ShowPreview.css';

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
class ShowPreview extends Component{
    render(){
        console.log(this.props);
        const {result}=this.props;
        return (
            <div className='container'>
            {
                result.map((film)=>{
                   return <div  key ={film.id} className='film-item'>
                                <Link to={`/shows/${film.id}`} className='link' film={film}>{film.name}</Link>
                                <div className='describe'>
                                    {film.image !== null ? <img  src={film.image.medium} />: <img className='photo' src='http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg' />}
                                    <p className='text' dangerouslySetInnerHTML={{__html:film.summary}} />
                                </div>
                                
                          </div>
                          
                })
            }
            </div>
            
        )
    }
}

export default ShowPreview;
//<img src={film.image !== undefined ? film.image.medium}/>/>