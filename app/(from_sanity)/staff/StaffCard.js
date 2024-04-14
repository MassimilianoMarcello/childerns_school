// EarlyCard.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StaffCard = ({ staff }) => (<>
  <CardContainer>
  <MainContainer key={staff._id} className='card-container'>
    <ImageContainer className='images-container'>
      <div className='hero-image'>
        {staff.idPhoto && (
          <Image
          className='image'
            src={staff.idPhoto}
            alt={staff.role}
            width={240}
            height={200}
      
            priority
          />
        )}
      </div>

    </ImageContainer>
    <TextContainer className="text-container">
          <p className="title-card">{staff.name}</p>
          <p className="text-card">{staff.role}</p>
        </TextContainer>
  </MainContainer>
  </CardContainer>
  </>
);

export default StaffCard;
const CardContainer = styled.div`
/* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;  */
  display: inline-block;
  margin-left: 0rem ;


`

const MainContainer = styled.section`
  margin-right:.5rem;
  display: flex;
flex-direction: column;


  
`

const ImageContainer = styled.div`
.image{

  padding: 1rem;
}
`


const TextContainer = styled.div`
width: 220px;
text-align: center;
.title-card{
  font-size:1rem;
  color:#0741a4;
  font-weight:500;
  margin-top: -.5rem;
}
.text-card{
  font-size: .8rem;
  color: #333333;
  margin-top: -1rem;
  font-size:.9rem;
  font-weight:300;
}
`
