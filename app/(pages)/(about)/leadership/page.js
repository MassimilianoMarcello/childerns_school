"use client"

import "../../samplePages.css";
import Image from 'next/image';
import drpesha from '@/public/assets/drpesha.jpg';
import Blue from '@/public/assets/Blue.png';
import styled from "styled-components";
import StaffCard from "../../../(from_sanity)/staff/serves";

export default function Leadership() {
  return (
    <>
      <div className=" bg-container">
        <div className="kindergarten">
          <h1 className="text-sample">leadership</h1>
        </div>
      </div>
    <MainContainer className="main-container">
    <TextContainer className="text-container">
      <h1 className="text-name">Dr. Pesha Kletenik</h1>
      <h2 className="text-role">Head of School
</h2>
      </TextContainer>
      
      <ImageContainer className="images-container">
      <div className="main-image">
        <Image
        src={drpesha}
        alt="heaad of the school"
        fill
        // width={220}
        // height={220}
        />
      </div>
      <div className="decoration-image">
      <Image
        src={Blue}
        alt="heaad of the school"
     
        width={160}
        height={160}
        />
      </div>
      
    
    </ImageContainer>
    <Bio className="staff-bio">

Dr. Pesha Kletenik joins the MDS community with a great deal of enthusiasm and two decades of experience in Jewish education. Most recently she served as an assistant principal and principal at Yeshiva Har Torah in Queens. Prior to that, she was a mechanechet, programs director, school psychologist and assistant principal at Bnos Malka Academy. In those roles she utilized her creativity and energy for building teams, innovating new programs and partnering with parents in meeting the unique needs of each child.

Dr. Kletenik received her Doctorate in Education from the Learning and Teaching Program at Hofstra University, with a specialization in Human Development and Educational Psychology and a Master’s of Science in School Psychology from the Touro Graduate School of Education and Psychology. Dr. Kletenik has been an Avi Chai Fellow and a scholar in residence for the Orthodox Union Women’s Initiative as well as a guest lecturer at Hofstra University's Graduate School of Education. She has participated in numerous professional development initiatives, including attending the Principals’ Center at Harvard University Graduate School of Education. She is currently a student in the Emil Fish Center for Holocaust and Genocide Studies at Yeshiva University. Dr. Kletenik has written about parenting and Jewish education in the Lookstein Jewish Educational Leadership Journal and the Panim Journal. She lives in West Hempstead with her husband and three children.
</Bio>
      </MainContainer>
      <Title>Educational leadership</Title>
<StaffCard/>
    </>
  );
}


const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto auto auto auto ;
margin-top:6rem;
 
`
const ImageContainer = styled.div`
  position: relative;
  grid-column:1/4;
  grid-row:1/2;
  position: relative;

  width: 220px;
height: 220px;

.main-image img{
  border-radius: 50%;
  /* object-fit: cover; */
  margin-left: 1.5rem;
  margin-bottom:3rem;
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
    height: 100%;
    z-index:100 ;


}
.decoration-image img{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin-right: 1rem;
  margin-top:2rem;


}
`

const TextContainer = styled.div`
  grid-column:4/5;
  grid-row:1/2;
  padding-left:.1rem;
  margin-top: -8rem;
  padding-top:8rem;
  padding-bottom: 5rem;
  margin-left:3rem;
height: 6rem;
width: 16rem;
  border-bottom: solid 2px #f5a800;
 
.text-name{
font-size: 2rem;
font-weight:500;

color: #0741a4;
text-align: left;
margin-left: -1rem;
}
.text-role{
font-size:1rem;
text-align: left;
margin-left: -1rem;
}
`
const Bio = styled.p`

  grid-column:1/5;
  grid-row:3/4;
  color: #333333;
  margin: 1.8rem 1.8rem;
  font-size:.9rem;
  font-weight:300;
`

const Title = styled.h1`
font-size:1.5rem;
font-weight:500;
color: #0741a4;
border-top: solid 2px #f5a800;
margin:2rem;
padding-top:1rem;

`
