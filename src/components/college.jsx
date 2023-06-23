import React from "react";
import collegebanner from './images/college-banner.jpg';
import './college.css';
import img1 from './images/woolen-ball.jpg'
import img2 from './images/wool.png'
import img3 from './images/Cotton.png'
import img4 from './images/Viscose.png'
import cover from './images/making-banner.jpg'
import caro1 from './images/caro1.png'
import caro2 from './images/caro2.png'
import caro3 from './images/caro3.png'
import con3 from './images/College-3.jpg'



function College() {
    return (
        <div>
            <div>
                <img id='img-banner' src={collegebanner} alt='' height={550} width={1342.8}></img>
                <div id='h3'>
                    <h3 id='firsttext'>The acecraft Collection.</h3>
                    <p id='pre' style={{ marginLeft: 1160 }}>Simple. Sharp.</p>
                    <p id='pre' style={{ marginLeft: 1000 }}>Detailed perfection that makes you</p>
                    <p id='pre' style={{ marginLeft: 895 }}>Look good and feel great. Put it on. Its like magic.</p>
                    <div className="container">
                        <div id='container' className="container">
                            <div className="row">
                                <div className="col">
                                    <h2 id='col' style={{ borderRight: 'solid', borderWidth: 2 }}>Classic</h2>
                                </div>
                                <div className="col">
                                    <h2 id='col' style={{ borderRight: 'solid', borderWidth: 2 }}>Absolute</h2>
                                </div>
                                <div className="col">
                                    <h2 id='col'>Signature</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Logo />

        </div>
    )

}


export function Logo() {
    return (
        <div>

            <div id='content'>
                <div>
                    <img id='img1' src={img1} alt="" height={200} width={380}></img>
                    <h2 id='heading'>Naturally Cutting Edge.</h2>
                    <p id='con'>The 'best of both worlds' has a new definition. Every fabric in </p>
                    <p id='con'>the acecraft line-up is made from a blend of two fibres to </p>
                    <p id='con'> give you the best range. No tech involved - it's just the touch </p>
                    <p id='con' style={{ marginLeft: 650 }}>of nature.</p>
                </div>
                <div className="row w-100">
                    <div id='col' className="col">
                        <img id='img2' src={img2} alt='' height={200} width={240}></img>
                        <h2 id='heading' style={{ marginTop: -170, marginLeft: 800 }}>The Blended Wool</h2>
                        <p id='con' style={{ marginTop: -100, marginLeft: 800 }}>The Blended Wool is a class apart - with a mix of polyester </p>
                        <p id='con' style={{ marginTop: -80, marginLeft: 800 }}> for its wrinkle/crease-resistance and wool for warmth and </p>
                        <p id='con' style={{ marginTop: -60, marginLeft: 800 }}> absorbency, end your day looking the same as how you </p>
                        <p id='con' style={{ marginTop: -40, marginLeft: 800 }}>began it.</p>
                    </div>
                </div>
                <div id='' className="row w-100">
                    <div id='col' className="col">
                        <img id='img3' alt="" height={200} width={240} src={img3}></img>
                        <h2 id='heading' style={{ marginTop: -170, marginLeft: 200 }}>The Blended Cotton</h2>
                        <p id='con' style={{ marginTop: -100, marginLeft: 200 }}>The Blended Cotton is extremely strong and breathable</p>
                        <p id='con' style={{ marginTop: -80, marginLeft: 200 }}>Easy to iron, this variant shrinks lesser than pure cotton and</p>
                        <p id='con' style={{ marginTop: -60, marginLeft: 200 }}>retains its colour, which makes it a favourite choice for your</p>
                        <p id='con' style={{ marginTop: -40, marginLeft: 200 }}>everyday college wear.</p>
                    </div>
                </div>
                <div className="row w-100">
                    <div id='col' className="col">
                        <img id='img2' src={img4} alt='' height={200} width={240}></img>
                        <h2 id='heading' style={{ marginTop: -190, marginLeft: 800 }}>The Blended Viscose</h2>
                        <p id='con' style={{ marginTop: -140, marginLeft: 800 }}>The Blended Viscose addition combines two ends of the</p>
                        <p id='con' style={{ marginTop: -120, marginLeft: 800 }}> spectrum - durability and a sense of softness. While the</p>
                        <p id='con' style={{ marginTop: -100, marginLeft: 800 }}>polyester contributes to resilience and shape retention, the</p>
                        <p id='con' style={{ marginTop: -80, marginLeft: 800 }}>viscose adds on to the overall absorbency, both sharpening</p>
                        <p id='con' style={{ marginTop: -60, marginLeft: 800 }}>and softening your look at the same time.</p>
                    </div>
                </div>
                <div>
                    <img id='img4' src={cover} alt=""></img>
                    <h5 id='h5'>THE ACECRAFT FIT</h5>
                    <h2 id='h2'>Comfy.</h2>
                    <h2 id='h2' style={{ marginTop: -210 }}>Very comfy</h2>
                    <p id='para' style={{ marginTop: -170 }}>It's not just the fabric - it's also the fit.</p>
                    <p id='para' style={{ marginTop: -155 }} >The shoulders and sleeves fit right while the body feels </p>
                    <p id='para' style={{ marginTop: -140 }}>relaxed, making it undoubtedly the best.</p>
                </div>
            </div>
            <Black />
        </div>
    )
}

export function Black() {
  
    return (
        <div id='bg1' className="row w-100" style={{marginLeft:0}}>
            <div className="col">
                <h2 style={{ fontSize: 40, paddingTop: 90, paddingLeft: 90 }}> Your pretrial.</h2>
                <h2 style={{ fontSize: 40, paddingLeft: 90, lineHeight: 0.4 }}>Powered by our AI.
                </h2>
                <p id="p">The acecraft Measurement Process is one <br></br> among the world's most accurate methods.<br></br> We set up a pre-trial event in your campus <br></br> and make each one try on the right fit. No<br></br> more guessing the right size business.</p>
            </div>
            <div className="col">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="1000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={caro1} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>

                        <div class="carousel-item">
                            <img src={caro2} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={caro3} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Container3 />
        </div>
    )
}

export function Container3(){
    return(
        <div id='con3' className="container w-100">
           <img style={{position:'relative'}} src={con3}  width={1282} alt=''></img>
           <Getintounch />
        </div>
    )
}
export default College;

export function Getintounch(){
    return(
        <div className="container">
    <div id='con5' class="content text-center">
    <p  id='tit'class="ms-m-0">Designer Uniforms</p>
    <p id='by' class="signature">by</p>
    <p  id='ace'class="proximaThin logoName">acecraft</p>
    <a id='a' class="btn btn-default" data-toggle="modal" href="#getInTouch">Get In Touch</a>
    </div>
    </div>
    )
}

