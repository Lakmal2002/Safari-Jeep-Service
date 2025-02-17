import React from 'react'

function DefaultLayout(props) {
  return (
    <div>
        <div className="header bs1">
            <div className="d-flex">  
              <h1>Wild Safari</h1>

              
           </div>
        </div>
        <div className="content"> 
            {props.children}

        </div>
    </div>
  )
}

export default DefaultLayout;
