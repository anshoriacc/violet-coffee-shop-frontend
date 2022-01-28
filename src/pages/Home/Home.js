import React, { Component } from "react"
import Header from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/CardFavorite/CardFavorite"

export class Home extends Component {
  render() {
    return (
      <>
        <Header />

        <Card />

        <div className="container-fluid">
          <div className="row">row pertama</div>
          <div className="row">row kedua</div>
          <div className="row">row ketiga</div>
          <div className="row">row keempat</div>
          <div className="row">row kelima</div>
        </div>

        <Footer />
      </>
    )
  }
}

export default Home
