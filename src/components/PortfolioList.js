import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCart from './PortfolioCart';

export default class PortfolioList extends Component {
  //Load more
  state = {
    allPortfolioList: [],
    filteredItems: [],
    loadMoreIndex: 1,
  };

  componentDidMount() {
    this.loadMoreFromList(1);
  }

  componentDidUpdate(nextProps) {
    if (this.props.portfolio !== nextProps.portfolio) {
      this.loadMoreFromList(1);
    }
  }

  loadMoreFromList(index = 0) {
    const howMuchLoad = 12;

    this.setState({
      ...this.state,
      filteredItems: this.props.portfolio.slice(
        0,
        howMuchLoad * (index === 1 ? 1 : this.state.loadMoreIndex)
      ),
      loadMoreIndex: index === 1 ? 1 : this.state.loadMoreIndex + 1,
    });
  }
  //Load more end
  render() {
    if (this.state.filteredItems.length === 0) {
      return (
        <NoResults>
          <h3>
            <i className='fas fa-search' />
            &nbsp; There are no projects matching your parameters
          </h3>
        </NoResults>
      );
    }
    return (
      <ListSection>
        <div className='portfolio-list'>
          {this.state.filteredItems.map((portfolios) => {
            return (
              <PortfolioCart key={portfolios.id} portfolios={portfolios} />
            );
          })}
        </div>
        <div className='row'>
          <button
            className='btn-primary'
            onClick={() => this.loadMoreFromList()}>
            Load More
          </button>
        </div>
      </ListSection>
    );
  }
}

//export default PortfolioList;

const ListSection = styled.div`
  padding: 5rem 0;
  padding-bottom: 15rem;

  .portfolio-list {
    width: 97vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    justify-items: center;
  }
  .row {
    margin-top: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 776px) {
    .portfolio-list {
      width: 90vw;
      grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    }
  }
`;
const NoResults = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15rem;
  margin-top: 5rem;
  font-size: 3rem;
`;
