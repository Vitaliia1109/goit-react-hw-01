import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <div>
        <table className={css.tableStyle}>
  <thead className={css.tableHeader}>
    <tr>
      <th className={css.tableCell}>Type</th>
      <th className={css.tableCell}>Amount</th>
      <th className={css.tableCell}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
        <tr className={css.rowColor} key={id}>
            <td className={css.tableCell}>{type}</td>
            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
</table></div>
       )
}