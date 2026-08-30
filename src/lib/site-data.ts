import projectClothing from "@/assets/project-clothing.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSoftware from "@/assets/project-software.jpg";
import projectLocal from "@/assets/project-local.jpg";

export const WHATSAPP_NUMBER = "923173813148";
export const WHATSAPP_DISPLAY = "0317 381 3148";
export const WHATSAPP_MESSAGE =
  "Assalam o Alaikum, mujhe Uraan Digital ki services ke bare mein maloomat chahiye.";

export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  initial: string;
  title: string;
  short: string;
  detail: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    initial: "W",
    title: "Website Development",
    short: "Fast, modern websites jo customers ko convert karti hain.",
    detail:
      "Custom websites jo mobile par tez chalti hain, Google par acchi rank karti hain aur visitors ko inquiries mein badalti hain.",
    deliverables: ["Custom design", "Mobile-first build", "Speed optimisation", "Analytics setup"],
  },
  {
    slug: "seo",
    initial: "S",
    title: "SEO",
    short: "Google par upar aaiye, zyada traffic aur organic leads paaiye.",
    detail:
      "Technical SEO, keyword research aur local rankings — taake Pakistan bhar ke customers aapko pehle dhoondein.",
    deliverables: ["Keyword strategy", "On-page SEO", "Google Business Profile", "Monthly ranking report"],
  },
  {
    slug: "social-media-marketing",
    initial: "M",
    title: "Social Media Marketing",
    short: "Content jo aapke audience ki attention pakadta hai.",
    detail:
      "Monthly content calendar, design aur community management — Instagram, Facebook, TikTok aur LinkedIn ke liye.",
    deliverables: ["Content calendar", "Post design", "Reels scripting", "Community replies"],
  },
  {
    slug: "meta-ads",
    initial: "F",
    title: "Facebook & Instagram Ads",
    short: "Targeted campaigns, clear budget, measurable results.",
    detail:
      "Meta ads jo sirf reach nahi, actual orders aur leads laate hain — creative se lekar retargeting tak.",
    deliverables: ["Audience research", "Ad creatives", "A/B testing", "Weekly optimisation"],
  },
  {
    slug: "google-ads",
    initial: "G",
    title: "Google Ads",
    short: "Search aur display par high-intent customers tak pahunchein.",
    detail:
      "Search, Shopping aur YouTube campaigns jo un logon tak jaate hain jo abhi kharidna chahte hain.",
    deliverables: ["Campaign setup", "Conversion tracking", "Negative keywords", "Bid management"],
  },
  {
    slug: "branding-design",
    initial: "B",
    title: "Branding & Graphic Design",
    short: "Ek strong identity jo yaad rehti hai.",
    detail:
      "Logo, colours, typography aur brand guidelines — ek aisi pehchaan jo aapke customers ko yaad rahe.",
    deliverables: ["Logo suite", "Brand guidelines", "Packaging design", "Social templates"],
  },
  {
    slug: "content-marketing",
    initial: "C",
    title: "Content Marketing",
    short: "Stories jo trust build karti hain aur bechte hain.",
    detail:
      "Blogs, product copy, scripts aur email sequences — Urdu aur English dono mein.",
    deliverables: ["Content strategy", "Blog writing", "Video scripts", "Email sequences"],
  },
  {
    slug: "ai-automation",
    initial: "A",
    title: "AI Automation",
    short: "Repetitive kaam automate karein, time bachayein.",
    detail:
      "WhatsApp auto-replies, lead follow-ups aur reporting workflows jo aapki team ka waqt bachate hain.",
    deliverables: ["Chat automation", "Lead routing", "CRM workflows", "Auto reporting"],
  },
  {
    slug: "ecommerce",
    initial: "E",
    title: "E-commerce Solutions",
    short: "Online store se lekar checkout tak, complete setup.",
    detail:
      "Shopify ya custom stores with COD, courier integration aur checkout jo abandon nahi hota.",
    deliverables: ["Store build", "COD & courier setup", "Product photography", "Conversion tuning"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  services: string[];
  headline: string;
  results: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  quote: { text: string; author: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "noor-apparel",
    name: "Noor Apparel",
    category: "Clothing Brand",
    image: projectClothing,
    services: ["E-commerce", "Instagram Ads", "Branding"],
    headline: "+180% online sales in 90 days",
    results: [
      { label: "Online sales", value: "+180%" },
      { label: "Return on ad spend", value: "4.2x" },
      { label: "Instagram followers", value: "+31k" },
    ],
    challenge:
      "Lahore ki ek unstitched clothing brand ke paas strong Instagram presence tha, lekin orders DMs mein atak jaate the aur koi proper store nahi tha.",
    approach: [
      "Complete e-commerce store with COD aur nationwide courier integration",
      "Catalogue shoot aur brand guidelines for a consistent seasonal look",
      "Instagram aur Facebook ad funnel — prospecting se retargeting tak",
      "WhatsApp automation for order confirmation aur follow-ups",
    ],
    outcome:
      "Teen mahine mein online sales 180% barhi, aur ab 70% orders bina kisi manual DM ke complete hote hain.",
    quote: {
      text: "Uraan Digital ne hamari online sales ko poori tarah badal diya. Ab hum har mahine consistent leads paate hain.",
      author: "Ayesha Raza",
      role: "Founder, Noor Apparel · Karachi",
    },
  },
  {
    slug: "sarai-dhaba",
    name: "Sarai Dhaba",
    category: "Restaurant",
    image: projectRestaurant,
    services: ["Branding", "Google Ads", "Local SEO"],
    headline: "3x more footfall in 6 weeks",
    results: [
      { label: "Walk-in customers", value: "3x" },
      { label: "Google reviews", value: "480+" },
      { label: "Cost per booking", value: "-46%" },
    ],
    challenge:
      "Ek family dhaba Islamabad mein bohat acha khana serve karta tha, magar naye customers ko pata hi nahi tha ke wo kahan hai.",
    approach: [
      "Brand refresh: logo, menu design aur signage",
      "Google Business Profile optimisation aur review campaign",
      "Local search aur Maps ads within a 12km radius",
      "Reels content series featuring the kitchen aur signature dishes",
    ],
    outcome:
      "Chhe hafton mein weekend footfall teen guna ho gaya aur restaurant apne area mein 'best dhaba' searches par top 3 mein aa gaya.",
    quote: {
      text: "Pehle log poochte the ke aap kahan ho. Ab log seedha Google se aate hain.",
      author: "Bilal Ahmed",
      role: "Owner, Sarai Dhaba · Islamabad",
    },
  },
  {
    slug: "pehar-estates",
    name: "Pehar Estates",
    category: "Real Estate",
    image: projectRealestate,
    services: ["Website", "SEO", "Meta Ads"],
    headline: "420+ qualified leads / month",
    results: [
      { label: "Monthly leads", value: "420+" },
      { label: "Organic traffic", value: "+265%" },
      { label: "Lead cost", value: "₨310" },
    ],
    challenge:
      "Ek real estate agency ke paas listings to theek thi, magar website purani thi aur leads sirf referrals se aate the.",
    approach: [
      "Naya listings portal with map search aur instant WhatsApp inquiry",
      "Society-wise SEO landing pages for DHA, Bahria aur Gulberg",
      "Lead-form ads with automated qualification questions",
      "CRM automation so agents har lead ko 5 minute mein reply karein",
    ],
    outcome:
      "Ab har mahine 420+ qualified leads aate hain, aur organic traffic 265% barh chuka hai.",
    quote: {
      text: "Har lead CRM mein aata hai aur team turant follow-up karti hai. Process ab bilkul clear hai.",
      author: "Hamza Sheikh",
      role: "Director, Pehar Estates · Lahore",
    },
  },
  {
    slug: "chai-cart-co",
    name: "Chai Cart Co.",
    category: "E-commerce Store",
    image: projectEcommerce,
    services: ["E-commerce", "Content Marketing", "Google Ads"],
    headline: "2.4x revenue in one quarter",
    results: [
      { label: "Revenue", value: "2.4x" },
      { label: "Checkout completion", value: "+38%" },
      { label: "Repeat buyers", value: "27%" },
    ],
    challenge:
      "Premium chai blends becha jaa raha tha, lekin checkout par 60% customers cart chhod dete the.",
    approach: [
      "Checkout redesign with COD, card aur wallet options",
      "Product storytelling aur recipe content hub",
      "Google Shopping campaigns for high-intent buyers",
      "Post-purchase WhatsApp flow for repeat orders",
    ],
    outcome:
      "Ek quarter mein revenue 2.4x hui aur repeat buyers ab total orders ka 27% hain.",
    quote: {
      text: "Checkout theek hote hi sab kuch badal gaya. Ab har campaign profitable hai.",
      author: "Sana Iqbal",
      role: "Co-founder, Chai Cart Co. · Karachi",
    },
  },
  {
    slug: "orbit-softworks",
    name: "Orbit Softworks",
    category: "Software Company",
    image: projectSoftware,
    services: ["Branding", "Content Marketing", "AI Automation"],
    headline: "38 enterprise demos booked",
    results: [
      { label: "Demos booked", value: "38" },
      { label: "LinkedIn reach", value: "+410%" },
      { label: "Sales cycle", value: "-22 days" },
    ],
    challenge:
      "Ek B2B software house international clients chahta tha, magar brand aur website local feel deti thi.",
    approach: [
      "Positioning aur brand identity for global buyers",
      "Case-study driven website with clear service pages",
      "LinkedIn thought-leadership content program",
      "AI automation for lead scoring aur proposal drafting",
    ],
    outcome:
      "Chaar mahine mein 38 enterprise demos book huye aur sales cycle 22 din chhota ho gaya.",
    quote: {
      text: "Ab hamari website hamari asli capability dikhati hai. Clients seriously lete hain.",
      author: "Usman Tariq",
      role: "CEO, Orbit Softworks · Rawalpindi",
    },
  },
  {
    slug: "gulshan-dental",
    name: "Gulshan Dental Care",
    category: "Local Business",
    image: projectLocal,
    services: ["Local SEO", "Meta Ads", "Website"],
    headline: "9 new appointments every day",
    results: [
      { label: "Daily appointments", value: "9" },
      { label: "Map views", value: "+520%" },
      { label: "Cost per lead", value: "₨140" },
    ],
    challenge:
      "Ek dental clinic sirf walk-ins par depend karti thi, aur online koi presence nahi thi.",
    approach: [
      "One-page booking website with WhatsApp appointment button",
      "Google Maps aur local SEO optimisation",
      "Neighbourhood-targeted Meta ads with offer creatives",
      "Automated reminder messages to reduce no-shows",
    ],
    outcome:
      "Ab clinic ko roz 9 nayi appointments milti hain aur no-show rate half ho gaya hai.",
    quote: {
      text: "Patients ab pehle WhatsApp karte hain, phir aate hain. Schedule bhara rehta hai.",
      author: "Dr. Farah Nadeem",
      role: "Founder, Gulshan Dental Care · Karachi",
    },
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  featured: boolean;
  tagline: string;
  features: string[];
};

export const PRICING: PricingPlan[] = [
  {
    name: "Starter",
    price: "₨25,000",
    featured: false,
    tagline: "Nayi businesses ke liye perfect shuruaat.",
    features: [
      "12 social posts / month",
      "Basic SEO setup",
      "1 ad platform",
      "Monthly report",
      "WhatsApp support",
    ],
  },
  {
    name: "Growth",
    price: "₨50,000",
    featured: true,
    tagline: "Serious growth ke liye best value.",
    features: [
      "20 social posts / month",
      "Advanced SEO + content",
      "2 ad platforms",
      "Landing page design",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Business",
    price: "₨100,000",
    featured: false,
    tagline: "Full-scale digital presence, end to end.",
    features: [
      "Unlimited content + design",
      "Full SEO + automation",
      "All ad platforms",
      "Dedicated account manager",
      "Weekly strategy + reporting",
    ],
  },
];

export const FAQS = [
  {
    q: "Aap result kab tak dikhate hain?",
    a: "SEO mein 3-4 mahine lagte hain, par ads se pehle hi mahine measurable results milte hain.",
  },
  {
    q: "Kya main kabhi bhi package change kar sakta hoon?",
    a: "Haan, aap kabhi bhi upgrade ya downgrade kar sakte hain — koi lock-in nahi.",
  },
  {
    q: "Reporting kaise hoti hai?",
    a: "Har mahine ek clear dashboard aur summary call milti hai, taake aapko har rupee ka hisaab ho.",
  },
  {
    q: "Payment methods kya hain?",
    a: "Bank transfer, JazzCash aur Easypaisa — sab accept karte hain, invoice ke saath.",
  },
  {
    q: "Kya ad budget package mein shamil hai?",
    a: "Nahi, ad spend alag hota hai taake aap poora control rakhein. Hum management aur creatives handle karte hain.",
  },
];

export const TESTIMONIALS = [
  {
    text: "Uraan Digital ne hamari online sales ko poori tarah badal diya. Ab hum har mahine consistent leads paate hain.",
    author: "Ayesha Raza",
    role: "Founder, Noor Apparel · Karachi",
  },
  {
    text: "Team har hafte report bhejti hai aur har sawal ka jawab milta hai. Yeh transparency hi asli farq hai.",
    author: "Hamza Sheikh",
    role: "Director, Pehar Estates · Lahore",
  },
  {
    text: "Chhe hafton mein hamare dhaba ki pehchaan poore Islamabad mein ban gayi.",
    author: "Bilal Ahmed",
    role: "Owner, Sarai Dhaba · Islamabad",
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "Satisfaction" },
  { value: 3, suffix: "+", label: "Years" },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "pakistani-business-digital-marketing-guide",
    title: "Pakistani business ke liye digital marketing ka pehla qadam",
    category: "Strategy",
    date: "12 August 2026",
    readTime: "6 min read",
    excerpt:
      "Agar aap abhi online shuru kar rahe hain, to yeh teen cheezein sab se pehle set karein.",
    body: [
      "Zyada tar Pakistani businesses digital marketing ki shuruaat ads se karte hain — aur wahi sab se badi ghalti hai. Ads sirf us cheez ko tez karti hain jo pehle se kaam kar rahi ho.",
      "Pehla qadam: aapka digital ghar. Ek saaf website ya landing page jahan customer 5 second mein samajh jaye ke aap kya bechte hain aur kaise contact karein.",
      "Doosra qadam: Google Business Profile. Local businesses ke liye yeh sab se sasta aur sab se taqatwar channel hai. Photos, timings aur reviews complete rakhein.",
      "Teesra qadam: measurement. Analytics aur WhatsApp tracking ke bagair aap yeh nahi jaan sakte ke kaun sa channel paisa kama raha hai.",
      "In teen cheezon ke baad hi ad budget lagayein — tab har rupya double kaam karega.",
    ],
  },
  {
    slug: "meta-ads-budget-pakistan",
    title: "₨25,000 ad budget se Pakistan mein kya results mil sakte hain?",
    category: "Paid Ads",
    date: "28 July 2026",
    readTime: "5 min read",
    excerpt: "Chhoti budget ke saath realistic expectations aur ek simple campaign structure.",
    body: [
      "Chhota budget ka matlab kam results nahi — ka matlab hai focus. Ek audience, ek offer, ek clear message.",
      "Hum ₨25,000 monthly budget ko aam tor par 70% prospecting aur 30% retargeting mein baantte hain.",
      "Creative rotation har do hafte zaroori hai, warna Pakistan ke chhote audiences par fatigue jaldi aata hai.",
      "Reporting mein sirf reach mat dekhein — cost per qualified lead aur closed sales dekhein.",
    ],
  },
  {
    slug: "local-seo-pakistan",
    title: "Local SEO: apne shehar mein pehle number par kaise aayein",
    category: "SEO",
    date: "9 July 2026",
    readTime: "7 min read",
    excerpt: "Google Maps rankings ke liye ek practical checklist jo har local business use kar sakta hai.",
    body: [
      "Local SEO ka 60% kaam Google Business Profile par hota hai: category, service list, photos aur regular posts.",
      "Reviews ka silsila banayein — har mahine 8-10 nayi genuine reviews rankings par bara asar dalti hain.",
      "Website par area-specific pages banayein, jaise 'DHA Lahore mein dental clinic'.",
      "NAP (name, address, phone) har directory par bilkul same rakhein.",
    ],
  },
  {
    slug: "brand-identity-that-sells",
    title: "Brand identity jo sirf khoobsurat nahi, bechti bhi hai",
    category: "Branding",
    date: "21 June 2026",
    readTime: "4 min read",
    excerpt: "Logo se aage — colours, tone aur consistency ka business par asar.",
    body: [
      "Brand sirf logo nahi hai. Brand wo yaad hai jo customer ke zehan mein reh jati hai.",
      "Ek consistent colour palette aur typography aapke ads ko pehchana banati hai, chahe logo nazar na aaye.",
      "Tone of voice likh kar rakhein — Roman Urdu, English ya dono ka mix, lekin har jagah aik jaisa.",
      "Templates banayein taake team har din bina designer ke professional content nikaal sake.",
    ],
  },
];
