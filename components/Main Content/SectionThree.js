import Link from "next/link";

import styled from "styled-components";

const SectionThree = () => {
    return (
      <Parallax className="section6 parallax-6">
        <ParaContainer className="para-container-6">
          <h1 className="title-6">Join our family</h1>
  
          <p className="text-6">
            The future is bright: feel the warmth. <br /> Join the MDS family today to
            experience the magic of MDS firsthand. <br /> 
          </p>
          <AskLinkContainer className="ask-link-container">
            <p className="text-6">Have a question about application?</p>
            <a href="./" className="ask-link">Ask Here</a>
          </AskLinkContainer>
          <Link  href="./apply" className='btn'>apply now</Link>
        </ParaContainer>
      </Parallax>
    );
  };
  
  export default SectionThree;

   const Parallax = styled.section`
   background: url("/assets/Group\ 606.svg") fixed no-repeat; 
padding: 1rem;
padding-top: 4rem;
background-color: rgb(26, 96, 215, 0.7);
margin-top: 1rem;
   `
   const ParaContainer = styled.div`
     text-align: center;
   padding-bottom: 2rem;
   h1{font-size: 50px;
color:  #f5a700;
padding-bottom: 5px;}
   p{color:#fff; 
   padding-bottom: 10px;
   line-height: 30px;}
   .btn{ width: 130px;
  
  font-size: 15px;


  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.05em;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0.85rem 0.85rem;
  font-weight: 700;
  border-radius: 0.333em;
  background: #fff;
  color: #0741a4;
  display: inline-block;
  margin-bottom: 2rem;}
   `
   const AskLinkContainer = styled.div`
   line-height:30px;
    margin-bottom: 40px;
    color: #fff;
    .ask-link{
        line-height:30px;
    margin-bottom: 40px;
    color: #fff;
    &:hover{

color: #f5a700;
}
    }
   `
   