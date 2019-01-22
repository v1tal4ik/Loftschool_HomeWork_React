import {search} from '../api.js';
import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions.js';

// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.


export default (store)=>(next)=>(action)=>{
    if(action.type === searchRequest.toString()){
        console.log(action);
        search(action.payload).then((data)=>{
            store.dispatch(searchSuccess(data));
        })
        .catch(error=>{
            store.dispatch(searchFailure(error));
        })
    }else{
        return next(action);
    }
}