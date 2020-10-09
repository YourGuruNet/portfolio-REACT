import React, { Component } from "react";
import items from "./data";

const PortfolioContext = React.createContext();
class PortfolioProvider extends Component {
  state = {
    portfolios: [],
    type: "all",
    modalPortfolioOpen: false,
    modalContactOpen: false,
    modalAboutOpen: false,
    sortedPortfolio: [],
    featuredPortfolio: [],
    loading: true,
  };
  //getData

  componentDidMount() {
    let portfolios = this.formatData(items);
    let featuredPortfolio = portfolios.filter(
      (portfolio) => portfolio.featured === true
    );
    this.setState({
      portfolios,
      featuredPortfolio,
      sortedPortfolio: portfolios,
      loading: false,
    });
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let logo = item.fields.logo.map((logos) => logos.fields.file.url);
      let portfolios = { ...item.fields, logo, images, id };
      return portfolios;
    });
    return tempItems;
  }
  //Open methods
  openPortfolioModal = () => {
    this.setState(() => {
      return { modalPortfolioOpen: true };
    });
  };
  //The function returns opposite and set modalOpen to false from true,
  //that's mean that the card closed
  closePortfolioModal = () => {
    this.setState(() => {
      return { modalPortfolioOpen: false };
    });
  };
  //End of open methods
  //
  getPortfolio = (slug) => {
    let temPortfolios = [...this.state.portfolios];
    const portfolio = temPortfolios.find(
      (portfolio) => portfolio.slug === slug
    );
    return portfolio;
  };
  render() {
    return (
      <PortfolioContext.Provider
        value={{
          ...this.state,
          getPortfolio: this.getPortfolio,
          openPortfolioModal: this.openPortfolioModal,
          closePortfolioModal: this.closePortfolioModal,
        }}
      >
        {this.props.children}
      </PortfolioContext.Provider>
    );
  }
}

const PortfolioConsumer = PortfolioContext.Consumer;
export { PortfolioProvider, PortfolioConsumer, PortfolioContext };
