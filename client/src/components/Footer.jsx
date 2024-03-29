import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive";


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    ${mobile({
        display:"none"
    })};
`;

const Right = styled.div`
    flex: 1;
    ${mobile({
        display:"none"
    })};
`;

const Logo = styled.h1`
    flex: 1;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    background-color: #${(props) => props.color};
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`;

const Title = styled.h3`
    margin: 30px 0px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Desc = styled.p`
    flex: 1;
    margin: 20px 0px;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DEV.SHOP</Logo>
            <Desc>
                There are very huge varities of product available for you and if you need
                anything customize then you can also contact me. For that purpose.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E440F5">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedInIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTubeIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Brass Work</ListItem>
                <ListItem>Handloom Work</ListItem>
                <ListItem>Special Handicraft collection</ListItem>
                <ListItem>Embroidery</ListItem>
                <ListItem>Hand Designing</ListItem>
                <ListItem>Traditional Designs</ListItem>
                <ListItem>Rajisthani Designs</ListItem>
                <ListItem>Gujarati Work</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <Contact>
            <LocationOnIcon style={{marginRight:"10px"}}/>
                90-A naszy nagar, luckhnow, UttarPradesh
            </Contact>
            <Contact> 
            <LocalPhoneIcon style={{marginRight:"10px"}}/>
            +91 9088987677
            </Contact>
            <Contact>
            <EmailIcon style={{marginRight:"10px"}}/>
                contacthandicraft@gmail.com
            </Contact>
        </Right>
    </Container>
  )
}

export default Footer