import React from 'react';
import { Layout, Menu, Avatar, Card,Row, Col, Carousel } from "antd";
import karen from "./assets/img/karen.jpeg";
import purple_b from "./assets/img/purple_butterfly.png";
import speak from "./assets/img/speak.ico";
import email from "./assets/img/email.ico";
import mobile from "./assets/img/mobile.ico";
import Gato from "./components/Gato";

import {
    TeamOutlined,
    BulbOutlined,
    CommentOutlined,
    StarOutlined,
    HeartOutlined,
    ToolOutlined,
    LoadingOutlined,
    UserOutlined 
} from "@ant-design/icons";
import "./animacion/index";

import "./App.scss";



export default function App() {
    const { Header, Content, Footer } = Layout;
    return(
        <Layout > 
            <Header>
                <Menu theme = "dark" mode= "horizontal" style={{textAlign:"right"}}>
                    <Menu.Item key="1"><a href="#acerca-de-mi">Acercar de mí</a></Menu.Item>
                    <Menu.Item key="2"><a href="#aptitudes">Aptitudes</a></Menu.Item>
                    <Menu.Item key="3"><a href="#idiomas">Idiomas</a></Menu.Item>
                    <Menu.Item key="4"><a href="#contacto">Contacto</a></Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Layout className = "app">
                    <Header className="app__header">
                        <div className = "app__header-text">
                            <div>
                                <img  className="app__header-butterfly" src={purple_b} alt="mariposa" width="10%" />
                            </div>
                            <h1>Karen Cortés</h1>
                            <hr/>
                            <hr/>
                            <h2>Ingeniera en computación</h2>
                            <Avatar id="acerca-de-mi" className = "app__header-img"
                                size={{
                                    xs: 84,
                                    sm: 92,
                                    md: 100,
                                    lg: 124,
                                    xl: 160,
                                    xxl: 180,
                                }}
                                icon={<img src={karen} alt="Karen Cortés"/>}
                                
                            />  
                        </div>  
            
                    </Header>
                    <Content className="app__content" style={{textAlign:"center"}}>
                        <h1 >Bienvenid@ a mi sitio web</h1>
                        <h2>Acerca de mi</h2>
                        <h3 >
                            Principalmente he trabajado en la parte de maquetación web,me apasiona el área web ya que es una área donde puedes ser creativo 
                            y experimentar, continuamente estoy mejorando mi conocimiento con la librería React, utilizando react-router,hooks, JavaScript, frameworks como bootstrap, material-Ui y Ant Design.
                            Adicionalmente tengo conocimiento e intereses en las áreas de inteligencia artificial, machine learning y procesamiento de lenguaje natural. 
                        </h3>
                        <hr id="aptitudes" />
                        <Card  title="Aptitudes" style={{marginTop:"10%",marginBottom:"10%", background:"#eeaeca"}}>
                            <Card.Grid className="cardContainer" >
                                <div className="card">
                                    <figure className="back">Creativa</figure>
                                    <figure className="front"><BulbOutlined /></figure>
                                </div>
                            </Card.Grid>
                            <Card.Grid className="cardContainer" >
                                <div className="card middle">
                                    <figure className="back">Trabajo en equipo</figure>
                                    <figure className="front"><TeamOutlined /></figure>
                                </div>
                            </Card.Grid> 
                            <Card.Grid className="cardContainer" >
                                <div className="card middle">
                                    <figure className="back">Perseverante</figure>
                                    <figure className="front"><StarOutlined /></figure>
                                </div>
                            </Card.Grid>  
                            <Card.Grid className="cardContainer" >
                                <div className="card middle">
                                    <figure className="back">Abierta al diálogo</figure>
                                    <figure className="front"><CommentOutlined /></figure>
                                </div>
                            </Card.Grid>
                            <Card.Grid className="cardContainer" >
                                <div className="card middle">
                                    <figure className="back">Apasionada</figure>
                                    <figure className="front"><HeartOutlined /></figure>
                                </div>
                            </Card.Grid>
                            <Card.Grid className="cardContainer" >
                                <div className="card middle">
                                    <figure className="back">Resolución de problemas</figure>
                                    <figure className="front"><ToolOutlined /></figure>
                                </div>
                            </Card.Grid>     
                        </Card>
                        <hr stye={{}}/>
                        {/* Knowledge*/}
                        <div id="idiomas" className="app__content-animaciones" >
                          <h2 style={{marginTop:"-5%", marginBottom:"5%"}}>Idiomas</h2>
                            <Row gutter={24}  style={{height:"450px"}} >
                                <Col lg={12} style={{display:"flex",justifyContent:"center"}} >
                                   <Gato />
                                </Col>
                                <Col lg={12} >
                                    <div className="app__content-big" >
                                        <img src={speak} style={{fontSize:"50px"}} />
                                        <div className="app__content-one" id="animado">
                                            Inglés
                                        </div>
                                        <div className="app__content-two" id="animadoTwo">
                                            Italiano
                                        </div>
                                        <div className="app__content-three" id="animadoThree">
                                        <LoadingOutlined /> 
                                        Cargando...  
                                        </div>
                                    </div>
                                </Col>
                            </Row>
   
                        </div>
                        <div className="app__content-carousel">
                                    <Carousel autoplay>
                                    <div className="app__content-carousel-page">
                                        <Card className="app__content-carousel-page-card" title = "En construcción..">
                                            <p></p>
                                        </Card>
                                    </div>
                                    <div className="app__content-carousel-page">
                                        <Card className="app__content-carousel-page-card"title = "...">
                                            <p></p>
                                        </Card>
                                    </div>
                                    <div className="app__content-carousel-page">
                                        <Card className="app__content-carousel-page-card" title = "...">
                                            <p></p>
                                        </Card>
                                    </div>
                                    <div className="app__content-carousel-page">
                                        <Card className="app__content-carousel-page-card" title = "...">
                                            <p></p>
                                        </Card>
                                    </div>
                                    </Carousel>
                            </div>
                    </Content>
                    <Footer id="contacto" className="app__footer" style={{background:"#1D1D1D", color:"white"}}>
                       <Row>
                          <Col md={2} />
                          <Col md={20}>
                          <div>
                            <p>
                                <UserOutlined />
                               <span style={{paddingLeft:"15px"}}>Karen Cortés</span><br/>
                            </p>
                            <p>
                                <img src={email} alt="Email" width="20px" />
                                <span style={{paddingLeft:"10px"}}>email:cortestelloa@gmail.com</span><br/>
                            </p>
                            <p>
                                <img src={mobile} alt ="Celular" width="20x" />
                                <span style={{paddingLeft:"10px"}}> celular:55-78-90-14-12</span>
                            </p>
                        </div>
                          </Col>
                          <Col md={2}/>
                       </Row>
                        
                    </Footer>
                </Layout>
            </Content>
        </Layout>

    );
}