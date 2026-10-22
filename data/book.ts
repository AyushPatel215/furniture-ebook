export type BookPart = {
  number: number;
  title: string;
  topics: readonly string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: "quote" | "layers" | "hinge" | "kitchen" | "receipt" | "check";
};

export const parts: readonly BookPart[] = [
  {
    number: 1,
    title: "Plan Before You Spend",
    topics: [
      "How Home Furniture Is Actually Built",
      "The Complete Furniture Planning Process",
      "How to Understand Your Home Before Designing",
      "Custom vs Modular vs Ready-Made",
      "Carpenter vs Interior Designer vs Furniture Company",
      "How to Set & Divide Your Furniture Budget",
      "How to Read & Compare Furniture Quotations",
    ],
  },
  {
    number: 2,
    title: "Materials: Choose the Right One",
    topics: [
      "Plywood vs MDF vs HDHMR vs Particle Board vs PVC",
      "MR vs BWR vs BWP Plywood",
      "Which Material for Each Room",
      "Carcass vs Shutter",
      "Veneer vs Laminate vs Acrylic vs PU vs Membrane",
      "Waterproof vs Water-Resistant",
      "Thickness, Edges & Construction Quality",
      "How to Check Material Quality Before You Buy",
      "Where to Spend More & Where to Save",
    ],
  },
  {
    number: 3,
    title: "Finishes, Colours & Appearance",
    topics: [
      "Choosing the Right Finish",
      "Matte vs Glossy vs Textured",
      "How to Choose Furniture Colours",
      "Matching Furniture with Walls, Flooring, Sofa & Curtains",
      "Making Furniture Look Premium Without Making It Expensive",
    ],
  },
  {
    number: 4,
    title: "Hardware: Don't Waste Money",
    topics: [
      "Hinges & Drawer Channels",
      "Normal vs Tandem/Box Drawers",
      "Kitchen Baskets & Accessories",
      "Wardrobe Hardware & Accessories",
      "Where to Spend on Hardware & Where to Save",
    ],
  },
  {
    number: 5,
    title: "Kitchen: The Complete Decision Guide",
    topics: [
      "Choosing the Right Kitchen Layout",
      "Planning Kitchen Storage",
      "Kitchen Materials for Water, Heat & Daily Use",
      "Kitchen Shutters & Finishes",
      "Granite vs Quartz vs Other Countertops",
      "Appliance, Electrical, Plumbing & Ventilation Planning",
      "Kitchen Lighting & Colour Planning",
      "Kitchen Budget Examples & Where to Save",
      "Kitchen Mistakes That Cost You Money",
    ],
  },
  {
    number: 6,
    title: "Bedroom & Wardrobe",
    topics: [
      "Planning a Comfortable Bedroom",
      "Bed Design, Storage & Materials",
      "Hinged vs Sliding Wardrobe",
      "Planning Your Wardrobe Interior",
      "Wardrobe Material & Finish by Budget",
      "Dressing Table, Mirror & Bedside Storage",
      "Bedroom Colours, Lighting & Premium Look",
    ],
  },
  {
    number: 7,
    title: "Living Room & Other Home Areas",
    topics: [
      "Choosing the Right Sofa",
      "Sofa, TV & Walking Space Proportions",
      "TV Unit Full Wall vs Minimal",
      "TV Wall Moulding vs Wallpaper vs Panels vs Paint",
      "Living Room Storage",
      "Small Home & 2BHK Storage",
    ],
  },
  {
    number: 8,
    title: "Decoration & Smart Money Saving",
    topics: [
      "Wall Moulding vs Wallpaper vs Paint vs Posters",
      "20 Ways to Make Your Home Look Expensive on a Budget",
      "Where You Can Save Without Sacrificing Quality",
      "Where You Should NOT Save",
      "Common Mistakes That Make Homes Look Cheap",
    ],
  },
  {
    number: 9,
    title: "Money, Quality & Final Check",
    topics: [
      "How Furniture Pricing Actually Works",
      "How to Compare Two Furniture Quotes",
      "Hidden Costs You Should Ask About",
      "Checking Furniture During Manufacturing & Installation",
      "Final Handover Checklist",
      "The Ultimate Homeowner Decision Guide",
    ],
  },
];

export const insights: readonly string[] = [
  "Ask: what board and thickness are you using, and can I see the brand sticker? Most people never do, and it's how budgets quietly blow up by ₹50,000+.",
  "Keep a 10% contingency, untouched, until the very end. Almost every project needs it.",
  "Spend where daily use and water meet your furniture; save where they don't.",
];

export const benefits: readonly Benefit[] = [
  {
    title: "Read quotations like a pro",
    description:
      "Spot vague line items, missing specs and padded rates, and compare two furniture quotations line by line instead of just looking at the total.",
    icon: "quote",
  },
  {
    title: "Choose the right plywood grade",
    description:
      "Understand BWP vs MR plywood, HDHMR, MDF and particle board, and know exactly which board belongs in your kitchen, wardrobe and TV unit.",
    icon: "layers",
  },
  {
    title: "Spend on hardware that matters",
    description:
      "Learn which hinges, drawer channels and baskets take daily abuse, and where a premium Hettich or Ebco fitting is worth it versus where it isn't.",
    icon: "hinge",
  },
  {
    title: "Plan a kitchen that lasts",
    description:
      "Layout, storage, countertops, shutters, plumbing and ventilation: a modular kitchen guide built around Indian cooking, water and heat.",
    icon: "kitchen",
  },
  {
    title: "Avoid hidden costs",
    description:
      "Know what to ask about before you sign: transport, installation, GST, lofts, accessories and the extras that appear only on the final bill.",
    icon: "receipt",
  },
  {
    title: "Inspect before final payment",
    description:
      "Use the manufacturing, installation and handover checklists to catch problems while they can still be fixed, not after the money is gone.",
    icon: "check",
  },
];

export const faqs: readonly Faq[] = [
  {
    question: "What exactly do I get when I buy?",
    answer:
      "You get The Complete Home Furniture Guide as a 65-page PDF ebook: 9 parts and 59 topics, each ending with a highlighted practical tip. It is a digital download, so nothing is shipped.",
  },
  {
    question: "How soon can I start reading?",
    answer:
      "Right away. After payment you receive access to the PDF download, so you can start reading within minutes.",
  },
  {
    question: "Is this guide written for Indian homes?",
    answer:
      "Yes. It uses Indian context throughout: ₹ budgets, BWP and MR plywood, HDHMR, Hettich and Ebco style hardware, modular kitchens for Indian cooking, and storage for 2BHK and smaller homes.",
  },
  {
    question: "I'm already working with an interior designer. Is it still useful?",
    answer:
      "Very much. The guide helps you ask the right questions, understand what you are paying for, compare quotations and check the work during manufacturing and installation, whoever is doing the job.",
  },
  {
    question: "Do I need any technical knowledge to follow it?",
    answer:
      "No. It is written in plain, story-driven English for homeowners, not carpenters. Technical terms are explained the first time they appear.",
  },
  {
    question: "Does it cover modular kitchens and wardrobes in detail?",
    answer:
      "Yes. Part 5 is a complete modular kitchen guide with 9 topics, and Part 6 covers bedrooms and wardrobes, including hinged vs sliding wardrobes, interiors, and materials by budget.",
  },
  {
    question: "Will it tell me exact prices for my city?",
    answer:
      "Rates vary by city, brand and season, so the guide focuses on how furniture pricing works, what drives cost up or down, and budget examples, so you can judge any quote you receive.",
  },
  {
    question: "Can I read it on my phone, and is it a one-time payment?",
    answer:
      "Yes to both. The PDF opens on any phone, tablet or computer, and ₹299 is a single one-time payment with no subscription. Please see our refund policy for details on refunds.",
  },
];
