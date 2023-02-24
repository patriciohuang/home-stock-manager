export default function addSuggestion(itemName) {
  const list = JSON.parse(localStorage.getItem('suggestionList') || '[]');
  const indexOf = list.indexOf(itemName);
  if(indexOf != -1) {
    list.splice(indexOf, 1);
  } 
  list.push(itemName);
  localStorage.setItem('suggestionList', JSON.stringify(list));
}