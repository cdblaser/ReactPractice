/*
Redux Cycle:
Action Creator -> Action -> dispatch -> Reducers -> State
Person dropping off form -> the form -> form receiver -> Departments -> Compiled department data

Reducers:
const accounting = (bagOfMoney = [] , action) => { //bagOfMoney = [] will initialize with empty array if value is undefined
    return [...bagOfMoney, action]
    //never use .push method! for some reason.
}

Rules of reducers:
can return listOfPolicies.filter(name => name !== action.payload.name); // this filters all names that are not = to the passed in name

Rules of array.filter
numbers = [1,2,3]
numbers.filter(num => num != 2) // output: [1, 3]. filter will create an entirely new array. it doesn't remove the 2

Rules of returning spread arrays to add a new element
if (...) return [...oldArray, newArrayItem] // output: oldArray = [oldArray, newArrayItem]

-----FINISHED REDUX EXAMPLE BY STEPHEN-----

console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};


// Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  // we don't care the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

createPolicy('Alex', 20)
createClaim('Alex', 120)
deletePolicy('Alex')

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

// store.dispatch(createClaim('Alex', 120));
// store.dispatch(createClaim('Jim', 50));

// store.dispatch(deletePolicy('Bob'));

console.log(store.getState());

*/
