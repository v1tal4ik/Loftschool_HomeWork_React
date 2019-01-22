import {show} from '../api.js';
import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions.js';
// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.


export default (store)=>(next)=>(action)=>{
    if(action.type === showRequest.toString()){
        console.log(action);
        show(action.payload).then((data)=>{
            store.dispatch(showSuccess(data));
        })
        .catch(error=>{
            store.dispatch(showFailure(error));
        })
    }else{
        return next(action);
    }
}