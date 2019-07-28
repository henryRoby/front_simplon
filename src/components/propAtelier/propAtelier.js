import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get(`https://mampmeback.herokuapp.com/api/users/newArticle/${localStorage.id}`)
            .then(response => {
                console.log('user-article ==== ', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <div className="name" id="tableau">
<div className="row view-group" >
                {this.state.profil.length > 0 ? (

            (this.state.profil.map((user) => (

                        <div class="item col-xs-4 col-lg-4">

                            <div className="card card-cascade narrower card-ecommerce"   id="list">
                            <img width="auto" height="200px" src={'https://mampmeback.herokuapp.com/api/users/newArticleImage/' + user.image} alt="image" />

                                <div className="card-body card-body-cascade">

                                    <center><h6 id="description"><span id="nomproduit">{user.titre}</span></h6></center>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point">{user.description}</div> </p>
                                            <p className="card-text"><strong><span id="description">Date</span></strong>&nbsp;&nbsp; <div id="point">{user.date}</div> </p>
                                            <p className="card-text"><strong><span id="description">Nombre de place disponible</span></strong>&nbsp;&nbsp; <div id="point">{user.place}</div> </p>
                                            <p><Link to={"/modifierAtl/" + user._id} class="btn btn-warning">Modifier</Link></p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="card-text"><strong><span id="description">Horaire de debut</span></strong>&nbsp;&nbsp; <div id="point">{user.horaire}</div> </p>
                                            <p className="card-text" id="colonne2"><strong><span id="description">Durée de l'atelier</span></strong>&nbsp;&nbsp; <div id="point">{user.duree}</div> </p>
                                            <p className="card-text"><strong><span id="description">Nombre de place reserve</span></strong>&nbsp;&nbsp; <div id="point">{user.placeRes}</div> </p>
                                            <p>{user.visib == true ? (<button class="btn btn-success" id="Activer" onClick={(e) => {
                                    e.preventDefault()
                                    axios.get("https://mampmeback.herokuapp.com/api/users/cacherAtl/" + user._id).then(res => {
                                        axios.get('https://mampmeback.herokuapp.com/api/users/newArticle/' + localStorage.id).then(res => {
                                            console.log(res.data)
                                            this.setState({ profil: res.data })
                                        })
                                        console.log(res.data)
                                    })


                                }}>Activer</button>) : (<button class="btn btn-warning" id="Desactiver" onClick={(e) => {
                                    e.preventDefault()
                                    console.log(user._id)
                                    axios.get("https://mampmeback.herokuapp.com/api/users/affichAtl/" + user._id).then(res => {
                                        axios.get('https://mampmeback.herokuapp.com/api/users/newArticle/' + localStorage.getItem('id')).then(res => {
                                            console.log(res.data)
                                            this.setState({ profil: res.data })
                                        })
                                        console.log(res.data)
                                    })

                                }}>Desactiver</button>)}</p>
                                        </div>
                                    </div>
                                    <span className="spanprix">
                                        <strong>Prix: {user.prix} Ar</strong>
                                    </span><br />


                                </div>
                            </div>

                        </div>

                    ))
                )) : (''
                    )}
            </div>



            </div>
    }
    render() {
        return (
            <div className='app1'>
                {this.liste()}
            </div>
        );
    }
}