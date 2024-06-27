"use client"
import React from 'react'
import { Section } from '../../organisms';
import { useTable , usePagination } from 'react-table';
import { useDispatch } from 'react-redux';
import { LoadingScreen } from '../../shared/LoadingScreen';
import './style.css';
import EmptyTable from '../../shared/emptyTable';


const Table = ({ columns, data, loading, pageCount = 1, limit = 10, setLimit = (val) => { }, prevPage = () => { }, nextPage = () => { } }) => {


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows, 
    page,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    }, 
    usePagination
  );

  const dispatch = useDispatch()

  const pagination = () => {
    return (
      <>

        <div className="pagination">
          <div className="main_pagination">
            <button className='shadow-lg' disabled={loading || pageCount === 1}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <button className='shadow-lg' onClick={() => dispatch(prevPage())} disabled={loading || pageCount === 1}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <button className='shadow-lg' onClick={() => dispatch(nextPage())} disabled={loading}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button className='shadow-lg' disabled={loading}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            </button>
            <div>
              <span  >
                صفحة {pageCount}
              </span>
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <select
            className="btn_sec"
            value={limit}
            onChange={(e) => {
              dispatch(setLimit(Number(e.target.value)));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize,index) => (
              <option key={index} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

      </>

    )
  }

  return (
    <Section title="جدول بيانات"
      // button='اضافه جديد +' 
      footer={!loading ? pagination() : null}
      maxHeight={500}
    // loading={loading}
    >
      <div>
        {loading ? <LoadingScreen /> : (
          page.length > 0 ? (
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup, index) => {
                  const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={key} {...restHeaderGroupProps}>
                      {headerGroup.headers.map((column) => {
                        const { key, ...restColumnProps } = column.getHeaderProps();
                        return (
                          <th key={column.id} {...restColumnProps}>
                            {column.render('Header')}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  const { key, ...restRowProps } = row.getRowProps();
                  return (
                    <tr key={key} {...restRowProps}>
                      {row.cells.map((cell) => {
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                          <td key={cell.column.id} {...restCellProps}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : <EmptyTable />
        )}
      </div>
    </Section>
  )

}

export default Table