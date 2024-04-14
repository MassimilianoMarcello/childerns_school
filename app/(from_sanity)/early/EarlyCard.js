// EarlyCard.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const EarlyCard = ({ early }) => (
  <MainContainer key={early._id} className='card-container'>
    <ImagesContainer className='images-container'>
      <div className='hero-image'>
        {early.heroImage && (
          <Image
          className='h-img'
            src={early.heroImage}
            alt={early.heroTitle}
            width={300}
            height={400}
            layout='responsive'
            priority
          />
        )}
      </div>
      <div className='decoration-image'>
        {early.decorationImage && (
          <Image
          className='deco-img'
            src={early.decorationImage}
            alt={early.heroTitle}
            width={300}
            height={300}
            priority
          />
        )}
       
      </div>
    </ImagesContainer>
    <TextContainer className="text-container">
          <p className="title-card">{early.title}</p>
          <p className="text-card">{early.infoParagraph}</p>
        </TextContainer>
  </MainContainer>
);

export default EarlyCard;

const MainContainer = styled.section`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto auto auto;


.images-container{
grid-column: 1/5;
grid-row: 1/3;
background-color:blu;
padding: .1rem;
position: relative;
margin-bottom:20rem;

}
.text-container{
  grid-column: 1/5;
  grid-row: 2/4;
 
  display: flex;
  flex-direction: column;
justify-content: center;
}

.h-img{
  z-index: -9000;
}
.decoration-image{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  margin-left:-1rem;
  margin-bottom: -1rem;
}
@media only screen and (min-width: 1000px) {
  .images-container{
grid-column: 1/4;
grid-row: 1/3;
margin-bottom:5rem;
padding: 2rem;

}
.text-container{
  grid-column: 4/5;
  grid-row: 1/3;

  display: flex;
  flex-direction: column;
justify-content: center;
margin-top: -10rem;
}

.h-img{
  z-index: -900000;
}
}
`

const ImagesContainer = styled.div`

`

const TextContainer = styled.div`
.title-card{border-top: solid 3px #f5a700;
    padding-top: 1.25rem;
    color: #0741a4;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1px;}
.text-card{
  font-size:1.2rem;
font-weight:300;
color: #28231d;
}
`
