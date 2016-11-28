import {INIT_LIST,DELETE_ITEM,ADD_ITEM,MODIFY_ITEM} from '../actions/todoMVC.js'

const initState = [
  {
    time:'2016-10-24',
    content:'拜访好友',
    status:true
  },{
    time:'2016-12-24',
    content:'圣诞夜准备',
    status:false
  }
]
export default function todoMVC(state=initState,action){
  switch (action.type) {
    case INIT_LIST:
        return state;
      break;
    case DELETE_ITEM:
        return [
          ...state.slice(0, action.id),
          ...state.slice(action.id + 1)
        ];
      break;
    case ADD_ITEM:
      return [
        ...state,
        {
          time:action.obj.time,
          content:action.obj.content,
          status:false
        }
      ]
      break;
    case MODIFY_ITEM:
      return [
        ...state.slice(0, action.id),
        Object.assign({},state[action.id],{
          status:!state[action.id]['status']
        }),
        ...state.slice(action.id + 1)
      ];
      break;
    default:
      return state;
  }
}
