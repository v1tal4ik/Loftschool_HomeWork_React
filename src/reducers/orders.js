import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.


export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER :
      return [...state,
                {
                  id:action.payload.id,
                  ingredients:[],
                  position:'clients',
                  recipe: action.payload.recipe
                }
              ]


    case MOVE_ORDER_NEXT :
    return state.map(order=>{
      if(action.payload === order.id){
        switch(order.position){
          case 'clients':
              order.position  = 'conveyor_1';
              return order;
          case 'conveyor_1':
              order.position = 'conveyor_2';
              return order;
          case 'conveyor_2':
              order.position = 'conveyor_3'; 
              return order; 
          case 'conveyor_3':
              order.position = 'conveyor_4';
              return order;
          case 'conveyor_4':
          let counter = 0;
          order.recipe.forEach(must_ingredient=>{
            for(let ingredient of order.ingredients){
              must_ingredient === ingredient ? counter++ : counter=counter;
            }
          });
          counter === 4 ? order.position = 'finish': order.position = 'conveyor_4';
              return order;    
          default:
              return order;       
        }
      }else {return order; }
    });


    case MOVE_ORDER_BACK:
    return state.map(order=>{
      if(action.payload === order.id){
        switch(order.position){
          case 'conveyor_1':
              order.position = 'conveyor_1';
              return order;
          case 'conveyor_2':
              order.position = 'conveyor_1'; 
              return order; 
          case 'conveyor_3':
              order.position = 'conveyor_2';
              return order;
          case 'conveyor_4':
              order.position = 'conveyor_3';
              return order;
          default:
              return order;       
        }
      }else {return order; }
    });


    case ADD_INGREDIENT:
    const {from,ingredient} = action.payload;

      state.forEach((order)=>{
        if(from === order.position && !order.ingredients.includes(ingredient) && order.recipe.includes(ingredient)){
            order.ingredients.push(ingredient);
            return order;
        }else{
          return order;
        }
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);