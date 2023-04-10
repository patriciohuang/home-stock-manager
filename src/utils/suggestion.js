import { saveList, getList } from "./firestore";

export default async function addSuggestion(itemName) {
  const list = await getList('suggestionList');
  const indexOf = list.indexOf(itemName);
  if(indexOf != -1) {
    list.splice(indexOf, 1);
  } 
  list.push(itemName);
  saveList('suggestionList', list)
  //localStorage.setItem('suggestionList', JSON.stringify(list));
}