const expenses = require('./expenses');

const getExpenses = () => {
  return expenses;
}

const resolvers = {
  expenses: () => {
    return getExpenses();
  },
};

export default resolvers;