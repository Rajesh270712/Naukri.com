
import styled from "styled-components";
import {Navigate} from "react-router-dom";


const SearchComponentWrapper = styled.div`
position: absolute;
top: 50px;
left: 200px;
color: white;
div{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
}
`
const SearchComponent = styled.div`
height: 45px;
width: 600px;
`;
const Input = styled.input`
height: 45px;
width: 80%;
font-size: 12px;
padding-left: 1%;
border: none;
outline: 0;
vertical-align: bottom;
color: black;
&:focus{
    font-size: 16px;
}
`
const Button = styled.button`
color: white;
background-color: #4A90E2;
font-weight: 500;
${props => props.children == "Search" ? `height: 45px;
width: 20%;
// vertical-align:middle;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 1px -2px rgb(0 0 0 / 20%);
border: none;
outline: 0;
text-transform: uppercase;
cursor: pointer;
font-size: 80%;
` : ""}
${props => props.children == "UPDATE PROFILE" ? `
height: 45px;
width: 80%;
margin: 0 10%;
` : ""}
`

const handleClick = () => {
    return <Navigate to="/SearchPage" />
}
export const SearchBar = () => {
    return <>
        <SearchComponentWrapper>
            <div>Search Jobs</div>
            <SearchComponent>
                <Input type="text" placeholder="Search Jobs by Skills, Designation, Companies" />
                <Button inputButton onClick={handleClick}>Search</Button>
            </SearchComponent>
        </SearchComponentWrapper>
    </>
}