import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  id="fotera" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">CUISINIER</h5>
            <p>
            Le plus grand réconfort de ma vieillesse, et qui m'apporte la plus grande satisfaction,
            <br/> c'est le souvenir agréable de tous les bienfaits et services amicaux que j'ai donnés aux autres.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Tél</a>: +261343969481
              </li>
             
              <li className="list-unstyled">
                <a href="#!">Adresse @mail</a>:razanabelahyhenri@gmail.com
              </li>
              <li className="list-unstyled">
                <a href="#!">Ville</a>:Antananarive
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com/henry.roby.98">RAZANABELAHY Henri</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;