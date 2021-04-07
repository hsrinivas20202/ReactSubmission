import React, { useState } from 'react';
import Pagination from '../Pagination';
import '../../styles.css';

const Table = ({ props }) => {
  const restaurants = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  // Gets current page array
  const indexOfLastPage = currentPage * entriesPerPage;
  const indexOfFirstPage = indexOfLastPage - entriesPerPage;
  const currentEntries = restaurants.slice(indexOfFirstPage, indexOfLastPage);

  // Changes page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!restaurants.length > 0) {
    return (
      <>
        <h2>Restaurant  Not Found</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>Restaurant Details</h2>
        <div className="table-wrapper"><table>
          <tbody>
            <tr className="title-row">
              <td>Name</td>
              <td>City</td>
              <td>Phone</td>
              <td>Genres</td>
            </tr>
            {currentEntries.map(restaurant => {
              return (
                <tr key={restaurant.telephone}>
                  <td>{restaurant.name}</td>
                  <td>
                    {restaurant.city}, {restaurant.state}
                  </td>
                  <td>{restaurant.telephone}</td>
                  <td>{restaurant.genre.split(',').join(', ')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        <div style={{ alignItems: 'center', margin: 10 }}>
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={restaurants.length}
            paginate={paginate}
          />
        </div>
      </>
    );
  }
};

export default Table;
