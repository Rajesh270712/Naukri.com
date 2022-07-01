import React from "react";
import styled from "styled-components";

const ResumeWrapper = styled.div`
padding: 20px;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
.bottomSection{
    display: flex;
    margin-top: 3%;
    .flexDisplay{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}

.blur{
    font-size: 13px;
    color:#adadad;
    font-weight: 400;    
}

.buttonContainer{
    display: inline-block;
    text-align:center;
     border: 1px dotted #ddd;
     margin-top: 2%;
    width: 100%;
    height: 9rem;
    button{
        color: white;
        background-color: #4A90E2;
        height: 34%;
        width: 30%;
        margin-top: 6%;
    }
    input{
        
        position: absolute;
    opacity: 0;
    z-index: 1;
    text-decoration: none;
    color: black;
    background-color: #4A90E2;
    text-align: center;
    letter-spacing: .5px;
    transition: .2s ease-out;
    cursor: pointer;
    text-transform: uppercase;
    vertical-align: middle;
    }
    .belowButton{
    font-size: 12px;
    text-align:center;
    color:#9c9c9c;
    }  
}
`;

const AddContainer = styled.span`
font-size: 13px;
color: #666;
font-weight: 500;
margin-left: 30px;
`;

const ResumeHeader = styled.span`
font-size: 20px;
color: #666;
font-weight: 700;

`;
const CreateResumeSection = styled.div`
flex-basis: 90%;
padding-top: 10px;
.bold{
    color: #333;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700
}
.semibold{
    color: #666;
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
}
`;
const CreateLink = styled.div`
flex-basis: 30%;
padding-top: 13px;
color: #5A8FDC;
font-size: 13px;
font-weight: 700;
line-height: 15px;
text-transform: uppercase;
`;



export const ResumeOverlay = () => {
    const inputRef = React.useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
        console.log("clicked")
      };
    return <>
         <ResumeWrapper>
                    <div>
                        <ResumeHeader>Resume</ResumeHeader>
                        <AddContainer>Add 10%</AddContainer>
                    </div>
                    <div className="blur">Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</div>
                    <div className="buttonContainer">
                    <button onClick={handleClick}>UPLOAD RESUME</button>
                    <input type="file" ref={inputRef}  placeholder="UPLOAD RESUME"/>
                    <div className="belowButton">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</div>
                    </div>
                    <div className="bottomSection">
                        <img src="	https://static.naukimg.com/s/5/105/i/folderImg.png" alt="" />
                        <div className="flexDisplay">
                            <CreateResumeSection>
                                <div className="bold">Don't have a resume yet?</div>
                                <div className="semibold">Create a job-winning resume with our simple resume builder</div>
                            </CreateResumeSection>
                            <CreateLink>
                                Create Free Resume
                            </CreateLink>
                        </div>
                    </div>
                </ResumeWrapper>
    </>
}