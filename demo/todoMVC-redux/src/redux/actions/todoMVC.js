export const INIT_LIST ='INIT_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM ='ADD_ITEM';
export const MODIFY_ITEM='MODIFY_ITEM';

export function initList(){
  return {type:INIT_LIST};
}
export function deleteItem(id){
  return {type:DELETE_ITEM,id};
}
export function addItem(obj){
  return {type:ADD_ITEM,obj}
}
export function modifyItem(id){
  return {type:MODIFY_ITEM,id}
}
