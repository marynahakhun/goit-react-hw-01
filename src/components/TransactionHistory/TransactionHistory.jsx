import clsx from "clsx"
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  
    return <div>
        <table className={css.transactionTable}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map((item, index) => (
                    <tr key={item.id} className={clsx(index % 2 === 0 ? css.evenRow : css.oddRow)}>
                        <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>  
                ))}
                

    
 
    
  </tbody>
</table>

    </div>
}