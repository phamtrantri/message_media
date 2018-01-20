import React, { Component } from 'react';
import '../styles/app.css';
import axios from 'axios';
import { PAGE_SIZE, API_KEY, ROOT_URL, TRENDING } from '../commons/constants';
import Images from './Images';
import Pagination from "react-js-pagination/dist/Pagination";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activePage: 1,
      totalCount: 0
    }
  }
  getImages(activePage) {
    axios.get(ROOT_URL + TRENDING, {
      params: {
        api_key: API_KEY,
        limit: PAGE_SIZE,
        offset: (activePage - 1) * PAGE_SIZE
      }
    })
      .then((res) => {
        this.setState((prevState, props) => {
          return {
            data: res.data.data,
            totalCount: res.data.pagination.total_count,
            activePage
          }
        }, () => window.scrollTo(0, 0))
      })
      .catch((err) => {
        console.log(err);
      })
  }
  componentWillMount() {
    const { activePage } = this.state;
    this.getImages(activePage);
  }

  handlePageChange(pageNumber) {
    this.getImages(pageNumber);
  }
  renderPagination() {
    const { totalCount, activePage } = this.state;
    try {
      return (
        <div className="text-center">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={PAGE_SIZE}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            innerClass="news-pagination"
            itemClass="news-pagination-li"
            activeClass="news-pagination-li-active"
            firstPageText="First"
            lastPageText="Last"
            prevPageText="Prev"
            nextPageText="Next"
            onChange={(e) => this.handlePageChange(e)}
          />
        </div>
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  render() {
    const { data } = this.state;
    if (!data) return <div>Not found.</div>
    if (data.length === 0) return <div>Loading...</div>
    return (
      <main>
        <div className="row">
          {
            data.map((elem) => {
              return <Images key={elem.id} image={elem} />
            })
          }
        </div>

        <div className="row text-center">
          {this.renderPagination()}
        </div>
      </main>

    );
  }
}

export default App;
