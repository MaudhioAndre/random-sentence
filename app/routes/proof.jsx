import React from 'react'

import ss63 from "../assets/img/ss63.png"
import ss64 from "../assets/img/ss64.png"
import ss65 from "../assets/img/ss65.png"

import styles from "../assets/style/style.css?url";
export function links (){
    return [{ rel: "stylesheet", href: styles }]
  } ;

export default function Proof() {
  return (
    <>
        <div style={{textAlign:'center', marginTop:'20px'}}>Send me one screenshot like this : </div>
        <center><img src={ss63} className={"img-proof"} /></center>
        <center><img src={ss64} className={"img-proof"} /></center>
        <center><img src={ss65} className={"img-proof"} /></center>
    </>
  )
}
