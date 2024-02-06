import { useState } from "react";
interface Expense {
  id: number;
  des: string;
  amount: number;
  category: string;
}
interface PropsExpenseList {
  items: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ items, onDelete }: PropsExpenseList) => {

    if(items.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="align-middle">
              <td>{item.des}</td>
              <td>{item.amount}$</td>
              <td>{item.category}</td>
              <td className="text-center">
                <button
                  onClick={() => {
                    onDelete(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className="align-middle">
            <td>Total</td>
            <td>
              {items
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}$ 
                {/* nowe!!!!!!!!!!!!!!!!!!! */}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
