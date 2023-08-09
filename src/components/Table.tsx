import type { ReactNode, TableHTMLAttributes } from "react";

export interface Column<T> {
  render: (element: T) => ReactNode;
  title: string;
}

interface TableProps<T> extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[];
  rows: T[];
}

interface Model {
  id: string;
}

const Table = <T extends Model>({
  columns,
  rows,
  ...props
}: TableProps<T>): JSX.Element => (
  <div className="relative overflow-x-auto overflow-y-scroll">
    <table
      className="border-collapse rounded border-spacing-px	table-auto w-full bg-slate-500 text-white"
      {...props}
    >
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map((column) => (
            <th
              className="p-2 text-slate-900 dark:text-slate-200 text-left"
              key={column.title}
            >
              {column.title.toLocaleUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {rows.map((row) => (
          <tr className="border hover:border-slate-200 " key={row.id}>
            {columns.map((column) => (
              <td
                className="border text-sm border-slate-300 hover:text-slate-600 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400"
                key={column.title}
              >
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>{`${rows.length} elements`}</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default Table;
