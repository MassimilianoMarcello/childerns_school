import { createClient, groq } from "next-sanity";

import { EarlyChildHood } from "@/types/EarlyChildhood";
import { Staff } from "@/types/Staff";

// EARLY CHILDHOOD

export async function getEarlyChildhood(): Promise<EarlyChildHood[]> {
  const client = createClient({
    projectId: "s5zezdma",
    dataset: "production",
    apiVersion: "2023-01-11",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'earlyChildhoodPage']{
        _id,
        _type,
        "heroImage":heroImage.asset->url,
        'decorationImage':decorationImage.asset->url,
        heroTitle,
        title,
       
        infoParagraph,
        "slug": slug.current
      }`,
    {
      next: {
        revalidate: 62,
      },
    }
  );
}


// STAFF

export async function getStaff(): Promise<Staff[]> {
  const client = createClient({
    projectId: "s5zezdma",
    dataset: "production",
    apiVersion: "2023-01-11",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'staffPage']{
        _id,
        _type,
        "idPhoto":idPhoto.asset->url,
       name,
       role,
       infoParagraph,
      //  content,
        "slug": slug.current
      }`,
    {
      next: {
        revalidate: 63,
      },
    }
  );
}
