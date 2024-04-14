import { PortableTextBlock } from "sanity";

export type Staff = {
  _id: string;
  _type:string;
  idPhoto: string;
  alt:string;
  name: string;
  role: string;
  decorationImage: string;
  infoParagraph: string;
  slug: {
    current: string;
  };

  content: PortableTextBlock[];
};