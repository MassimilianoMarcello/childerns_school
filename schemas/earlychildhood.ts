// studio/earlyChildhoodPage.js

const earlyChildhood = {
    name: 'earlyChildhoodPage',
    title: 'Early Childhood Page',
    type: 'document',
    fields: [
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: 'decorationImage',
        title: 'Decoration Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'heroTitle',
        title: 'Hero Title',
        type: 'string',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "heroTitle" }
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'infoParagraph',
        title: 'Info Paragraph',
        type: 'text',
      },
    ],
  };
  
  export default earlyChildhood;