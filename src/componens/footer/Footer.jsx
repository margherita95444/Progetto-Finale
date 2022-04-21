import React from "react";

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="shadow-lg mt-5 footer text-center">
                <img  className="m-3 imgfooterbicm" src="./assets/images/berries.png" alt="" />
                <img  className="m-3 imgfootercb" src="./assets/images/cake.png" alt="" />
                <img  className="m-3 imgfooterbicm" src="./assets/images/jelly.png" alt="" />
                <img  className="m-3 imgfootercb" src="./assets/images/cookies.png" alt="" />
                <img  className="m-3 imgfooterbicm" src="./assets/images/ice-cream.png" alt="" />
                <img  className="m-3 imgfooterbicm" src="./assets/images/muffin.png" alt="" />
                <img  className="m-3 imgfooterbicm" src="./assets/images/macaroons.png" alt="" />
            </div>
        )
    }
}