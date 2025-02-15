import React, { Component } from 'react';
import './menu.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Menu extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        collapseID: "",
        redirect: false
    }
    toggleCollapse = collapseID => () => this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    toggle = nr => () => {
        let modalNumber = "modal" + nr; this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        let imgUrl = 'https://file1.pleinevie.fr/var/pleinevie/storage/images/article/10-aliments-prix-d-excellence-pour-la-sante-16025/100017-1-fre-FR/10-aliments-prix-d-excellence-pour-la-sante_width1024.jpg'
        return (
            <div>
                <MDBNavbar color="#d05c62" dark expand="md" id="navbar">
                    <MDBNavbarBrand>
                        <div id="contentlogo"><img src="logo.png" alt="logo" id="logo" /></div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>

                            <MDBNavItem >
                                <MDBNavLink to="/" className="nav-header">Accueil</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/Atelier" className="nav-header">Ateliers</MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <div className="card card-image" id="header" style={{
                    backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
                }}>
                    <div className="text-white text-center  py-5 px-4">
                        <div className="py-5">
                            <h2 id="h2accueil"><strong>Cuisinier</strong> </h2>
                            <p className="mb-4 pb-2 px-md-5 mx-md-5">Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
                                    partir de 12 ans, mais aussi à des particuliers. <span id="spanheader">Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
                                        matières premières.</span>
                                <br /><br />C’est la raison pour laquelle nous souhaitons booster cette activité en grâce à une
                  application web.
                                </p>
                                <p>Pour cibler les jeunes actifs entre 25 - 35 ans.</p><span>Des personnes qui veulent apprendre à<br />
cuisiner afin de manger correctement.</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}