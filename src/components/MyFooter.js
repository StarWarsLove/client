
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class MyFooter extends React.Component {
    render() {
        return (

            <Footer color="indigo" className="font-small pt-0">
                <Container>
                    <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">A propos</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Aide</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Contactez-nous</a></h6>
                        </Col>
                    </Row>
                    <hr className="rgba-white-light" style={{margin: '0 15%'}}/>
                    <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <Col md="8" sm="12" className="mt-5">
                            <p style={{lineHeight: '1.7rem'}}>Grâce à Intergalactic Love, faites enfin des rencontres sérieuses en ligne et trouvez 
                            votre moitié parmi les célibataires du site qui se réunissent selon leurs affinités. Multipliez vos chances de faire 
                            des rencontres haut de gamme sur internet en rejoignant notre communauté de célibataires exigeants.
                            Pour passer naturellement du virtuel au réel, les soirées Intergalactic Love sont des occasions uniques de faire des 
                            rencontres avec les autres membres qui partagent vos centres d’intérêt.</p>
                            <p> Avec Intergalactic Love vous trouverez enfin votre âme soeur.</p>
                        </Col>
                    </Row>
                    <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}}/>
                    <Row className="pb-3">
                        <Col md="12">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                                <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </Footer>
        );
    }
}
        
export default MyFooter;
                      