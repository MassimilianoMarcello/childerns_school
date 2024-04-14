import { PortableTextBlock } from "sanity";

export type EarlyChildHood = {
  _id: string;
  heroImage: string;
  heroTitle: string;
  title: string;
  decorationImage: string;
  infoParagraph: string;
  slug: {
    current: string;
  };

  content: PortableTextBlock[];
};
