import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful";

const PortfolioContext = React.createContext();
class PortfolioProvider extends Component {
  state = {
    portfolios: [],
    sortedPortfolio: [],
    featuredPortfolio: [],
    modalPortfolioOpen: false,
    modalContactOpen: false,
    modalAboutOpen: false,
    loading: true,
    type: "all",
    method: "all",
  };
  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "portfolio",
      });
      let portfolios = this.formatData(response.items);
      let featuredPortfolio = portfolios.filter(
        (portfolio) => portfolio.featured === true
      );
      this.setState({
        portfolios,
        featuredPortfolio,
        sortedPortfolio: portfolios,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
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
  //Open featured portfolio methods
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

  // Open contact page model
  openContactModal = () => {
    this.setState(() => {
      return { modalContactOpen: true };
    });
  };
  closeContactModal = () => {
    this.setState(() => {
      return { modalContactOpen: false };
    });
  };
  // Open contact page model end

  getPortfolio = (slug) => {
    let tempPortfolios = [...this.state.portfolios];
    const portfolio = tempPortfolios.find(
      (portfolio) => portfolio.slug === slug
    );
    return portfolio;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterPortfolios
    );
  };
  filterPortfolios = () => {
    let { portfolios, type, method } = this.state;
    let tempPortfolios = [...portfolios];
    if (type !== "all") {
      tempPortfolios = tempPortfolios.filter(
        (portfolio) => portfolio.type === type
      );
    }
    if (method !== "all") {
      tempPortfolios = tempPortfolios.filter(
        (portfolio) => portfolio.method === method
      );
    }
    this.setState({
      sortedPortfolio: tempPortfolios,
    });
  };
  render() {
    return (
      <PortfolioContext.Provider
        value={{
          ...this.state,
          getPortfolio: this.getPortfolio,
          openPortfolioModal: this.openPortfolioModal,
          closePortfolioModal: this.closePortfolioModal,
          openContactModal: this.openContactModal,
          closeContactModal: this.closeContactModal,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </PortfolioContext.Provider>
    );
  }
}

const PortfolioConsumer = PortfolioContext.Consumer;
export { PortfolioProvider, PortfolioConsumer, PortfolioContext };
