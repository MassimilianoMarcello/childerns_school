"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  ImageContainer,
  Rectangle,
  TextContainer,
} from "./SecTwoStyle";

const sectionData = [
  {
    imageSrc: "/assets/school-02.png",
    altText: "Teacher and student reading",
    goldenTitle: "Early Childhood Education",
    title: "designed to nurture and engage young minds",
    textParagraph:
      "MDS creates a warm and welcoming place for our youngest learners -toddlers through kindergartners- to thrive as they begin their educational journey.",
    linkHref: "./apply",
    linkText: "learn more",
  },
  {
    imageSrc: "/assets/school-01.png",
    altText: "Young Scientist",
    goldenTitle: "Middle School ",
    title: "helps groving student fluorish",

    textParagraph:
      "When entering Middle School, students dive deeper into academic subjects, critical thinking and questioning, and logical reasoning.",
    linkHref: "./another-link",
    linkText: "learn more",
  },
  {
    imageSrc: "/assets/school-00.png",
    altText: "Children smiling",
    title: "builds a solid foundation for life",
    goldenTitle: "Lower School ",
    textParagraph:
      "Students explore their studies through unique, interdisciplinary hands-on experiences and state-of-the-art technology and begin to develop core academic skills.",
    linkHref: "./another-link",
    linkText: "learn more",
  },
];

const SectionTwo = () => {
  return (
    <>
      {sectionData.map((data, index) => (
        <Container key={index} className={`section-${index}`}>
          <ImageContainer className={`image-container-${index}`}>
            <Image
              className="images"
              src={data.imageSrc}
              alt={data.altText}
              height={9}
              width={16}
              layout="responsive"
              priority
              // objectFit="cover"
              //  sizes="(min-width: 440px) 650px, calc(95,5vw -19px)"
            />
            <Rectangle className={`rectangle-${index}`} />
          </ImageContainer>
          <TextContainer className={`text-container-${index}`}>
            <h1 className={`title-${index}`}>
              <span className={`golden-title-${index}`}>
                {" "}
                {data.goldenTitle}
              </span>{" "}
              {data.title}
            </h1>
            <p className={`text-paragraph-${index}`}>{data.textParagraph}</p>

            <Link href={data.linkHref} className={`btn btn-${index}`}>
              {data.linkText}
            </Link>
          </TextContainer>
        </Container>
      ))}
    </>
  );
};

export default SectionTwo;
