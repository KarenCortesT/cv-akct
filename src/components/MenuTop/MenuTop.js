import React from "react";
import {Menu} from "antd";


import "./MenuTop.scss";

export default function MenuTop(){
    return(
        <Menu>
               <Menu theme = "dark" mode= "horizontal" style={{textAlign:"right"}}>
                    <Menu.Item key="1"><a href="#acerca-de-mi">Acercar de mí</a></Menu.Item>
                    <Menu.Item key="2">Aptitudes</Menu.Item>
                    <Menu.Item key="3">Idiomas</Menu.Item>
                    <Menu.Item key="4">Contacto</Menu.Item>
                </Menu>
        </Menu>
    );
}