import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {showRequest} from '../../actions';
import '../ShowPage/ShowPage.css';
// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
class ShowPage extends Component {
    componentDidMount(){
        const {showRequest} = this.props;
        const {id} = this.props.match.params;
        showRequest(id);
    }
    render(){
        const {entities} = this.props.shows;
        return (
            <div className="container">
                <h3>{entities.name}</h3>
                <div>
                <img className='photo' 
                src={entities.image !== undefined ? entities.image.medium: 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg'}/>
                </div>
                <p className='text' dangerouslySetInnerHTML={{__html:entities.summary}} />
            </div>
            
        )
    }
}

const mapStateToProps =(state)=> state;
const mapDispatchToProps ={showRequest};

export default connect(mapStateToProps,mapDispatchToProps)(ShowPage);
