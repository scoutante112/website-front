import React from "react";

export default function Contact() {


  return <div className={"text-center text-2xl"}>
    <h1 className={"text-4xl text-white mt-4"}>Contact </h1>
    <p className={"font-bold text-3xl my-4"}>LiveChat <div className="badge badge-primary">NEW</div></p>
    <p>You just need to click on the button at bottom right</p>
    <p className={"font-bold text-3xl my-4"}>Email</p>
    <p>You can send a email to <a href={"mailto:contact@bagou450.com"} className={"text-blue-500"}>contact@bagou450.com
    </a> (Answer in 12-24h)</p>
    <p className={"font-bold text-3xl my-4"}>Sms</p>
    <p>For Europe: You can send a sms to  <a href={'tel:+33651975031'} className={"text-blue-500"}>+33 (0)6 51 97 50 31</a> (Your local operator's charges apply) (Answer in 12-24h)</p>
    <p>For America/Others: You can send a sms to <a href={'tel:+16036003503'} className={"text-blue-500"}>+1 603-600-3503</a> (Your local operator's charges apply) (Answer in 12-24h)</p>
    <p className={"font-bold text-3xl my-4"}>Discord</p>
    <p>You can contact me on <a href={"https://discord.gg/bagou450"} className={"text-blue-500"}>discord</a> (Answer in
      72hours max)</p>
  </div>;
}
