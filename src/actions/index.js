let nextIssueId = 300;

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;

export const addIssue = (title, body, tags) => ({
  type: 'ADD_ISSUE',
  id: nextIssueId++,
  author: "jcshah98",
  title,
  date: today,
  body,
  tags,
  stars: 56
})