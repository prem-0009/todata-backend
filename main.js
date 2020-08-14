/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo){
  return todo.text
}

const getPriority = (todo) => todo.priority ;

// const isComplete
const isComplete = (todo) => todo.complete;



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = (todos) => todos.map(getTodoName);


const priorities = (todos) => todos.map((todos) => todos.priority)


//name and priorities
const namesAndPriorities = 
(todos) => 
todos.map((todos) =>
todos.priority > 1 ? 
`${todos.text} - High` : `${todos.text} - Low`)

//just not complete
const justNotComplete = (todos) =>todos.filter((todos) => todos.complete === false );

//just complete
const justComplete = (todos) => todos.filter((todos) => todos.complete === true)

//priority 2 Only
const priority2Only = (todos) => todos.filter((todos) => todos.priority === 2)

//priority 1 only
const priority1Only = (todos) => todos.filter((todos) => todos.priority === 1)









// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
