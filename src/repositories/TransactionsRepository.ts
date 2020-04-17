import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface AllTransactions {
  transactions: Transaction[];
  balance: Balance;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): AllTransactions {
    // TODO
    const balance = this.getBalance();
    const { transactions } = this;
    return {
      transactions,
      balance,
    };
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions
      .filter(item => item.type === 'income')
      .reduce((acc, item) => acc + item.value, 0);

    const outcome = this.transactions
      .filter(item => item.type === 'outcome')
      .reduce((acc, item) => acc + item.value, 0);

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
