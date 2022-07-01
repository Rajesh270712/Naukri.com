import React from "react";
import styled from "styled-components";


const AnchorIcon = styled.a`
margin-left:10px;
`;
const UlStyle = {
    "fontFamily":"sans-serif",
    "listStyleType":"none"
  }
  const An = styled.a`
color:#445578;
text-decoration:none;
margin-left:50px;
cursor: pointer;
font-size: 17px;
line-height: 30px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const AppStyle = {
    "border":"1px solid #D3E1EA",
    "borderRadius":"10px",
    "width":"340px",
    "height":"160px",
    "marginLeft":"60px",
    "padding":"20px",
    "fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
}
export default function Footer(){
    return(
        <div>
        <div style={{"display":"inline-flex","marginTop":"100px"}}>
            <div>
      <a href="https://www.naukri.com" target="_blank">
      <img style = {{"marginLeft":"100px","marginTop":"10px"}} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" height="31" width="186" />
      </a>
                <p style = {{"marginTop":"20px","marginLeft":"120px","color":"#8292B4"," fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Connect with us</p>
                <div style = {{"marginLeft":"120px"}}>
                <div style={{display:"flex"}} >
                <a target="_blank" href="https://www.facebook.com/Naukri"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" height="20" width="20" /></a>
                <AnchorIcon target="_blank" href="https://instagram.com/naukridotcom/" ><img src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" height="20" width="20" /></AnchorIcon>
                <AnchorIcon target="_blank" href="https://twitter.com/naukri"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" height="20" width="20" /></AnchorIcon>
                <AnchorIcon target="_blank" href="http://www.linkedin.com/company/naukri.com"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" height="20" width="20" /></AnchorIcon>
                </div>
            </div>
            </div>
            <div style={{ "display":"inline-flex"}}>
                <ul style={UlStyle}>
                    <li><An href= "http://infoedge.in/" target="_blank">About us</An></li>
                    <li><An href= "http://careers.infoedge.in/" target="_blank">Careers</An></li>
                    <li><An href= "https://www.naukri.com/recruit/login" target="_blank">Employer home</An></li>
                    <li><An href= "https://www.naukri.com/sitemap/sitemap.php" target="_blank">Sitemap</An></li>
                </ul>
                <ul style={UlStyle}>
                    <li><An href= "https://www.naukri.com/faq/job-seeker?utm_source=footer" target="_blank">Help center</An></li>
                    <li><An href= "https://w5.naukri.com/summons-notices-form/" target="_blank">Summons/Notices</An></li>
                    <li><An href= "https://w5.naukri.com/grievances-form/" target="_blank">Grievances</An></li>
                    <li><An href= "https://w5.naukri.com/fdbck/main/feedback.php?app_id=15" target="_blank">Report issue</An></li>
                </ul>
                <ul style={UlStyle}>
                    <li><An href= "https://www.naukri.com/privacypolicy" target="_blank">Privacy policy</An></li>
                    <li><An href= "https://www.naukri.com/termsconditions" target="_blank">Terms and conditions</An></li>
                    <li><An href= "https://www.naukri.com/imposter/report-fake-job-recruiter" target="_blank">Fraud alert</An></li>
                    <li><An href= "https://www.naukri.com/jobsearch/trust-safety" target="_blank">Trust and safety</An></li>
                </ul>
            </div>
            <div style={AppStyle}>
                <br />
                <span><b>Apply on the go</b></span><br />
                <span style={{'color':'#445578'}}>Get real-time job updates on our App</span><br /><br />
                <div style={{display:"flex"}} >

            <a href="https://play.google.com/store/apps/details?id=naukriApp.appModules.login&amp;hl=en&amp;utm_source=naukri&amp;utm_medium=footer" target="_blank"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" height="44" width="151" /></a>
            <a href="https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8" target="_blank"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" height="44" width="151" /></a>
                </div>
            </div>
        </div>
        </div>
    )
}