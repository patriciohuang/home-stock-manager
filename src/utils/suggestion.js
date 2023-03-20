import { saveList } from "./firestore";

export default async function addSuggestion(itemName) {
  const list = JSON.parse(localStorage.getItem('suggestionList') || '[]');
  const indexOf = list.indexOf(itemName);
  if(indexOf != -1) {
    list.splice(indexOf, 1);
  } 
  list.push(itemName);
  await saveList('suggestionList', list)
  localStorage.setItem('suggestionList', JSON.stringify(list));
}