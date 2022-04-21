import React from "react";

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="shadow-lg mt-5 footer text-center">
                <img  className="m-3 imgfooter" src="./assets/images/berries.png" alt="" />
                <img  className="m-3 imgfooter" src="./assets/images/cake.png" alt="" />
                <img  className="m-3 imgfooter" src="./assets/images/candy.png" alt="" />
                <img  className="m-3 imgfooter" src="./assets/images/cookie.png" alt="" />
                <img  className="m-3 imgfooter" src="./assets/images/ice-cream.png" alt="" />
                <img  className="m-3 imgfooter" src="./assets/images/muffin.png" alt="" />
            </div>
        )
    }
}