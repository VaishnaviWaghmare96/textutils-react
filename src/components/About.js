// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState ({
    //     color:'white',
    //     backgroundColor: 'black' 
    // })
    //     const[btntext, setBtnText]=useState("Ënable light mode")
    let myStyle ={
        color : props.mode === 'dark' ? 'white' :'#042743',
        backgroundColor :  props.mode === 'dark' ? 'rgb(36 74 104)' :'white',
        // border : '2px solid ',
        // borderColor :props.mode === 'dark' ? 'white' :'#042743',
    }
    // const toggleStyle = () =>{
    //  if(myStyle.color === 'white'){
    //     setMyStyle({
    //         color:'black',
    //     backgroundColor: 'white'
    //         })
    //         setBtnText("enable dark mode")
    // }
    // else{
    //     setMyStyle({
    //         color:'white',
    //     backgroundColor: 'black'
    //     })
    //     setBtnText("enable light mode")
    // }
    // }

  return (
    <div className='container' >
        <h2 className="my-3" style={{color : props.mode === 'dark' ? 'white' :'#042743'}}>
          About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" 
      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin 
        adds the appropriate classes that we use to style each element. These classes control the overall appearance,
         as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within 
          the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
        plugin adds the appropriate classes that we use to style each element. These classes control the overall 
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom 
        CSS or overriding our default variables. It's also worth noting that just about any HTML can go within 
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse"
       data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>browser compatible</strong>  
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse 
        plugin adds the appropriate classes that we use to style each element. These classes control the overall 
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom 
        CSS or overriding our default variables. It's also worth noting that just about any HTML can go within 
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div> */}
    </div>
  )
}
