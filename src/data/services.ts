/** Services shown in "What we do". Add, remove or reorder freely. */
export interface Service {
  title: string;
  /** How the title is set: [caps part, italic part] */
  display: [string, string];
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Brand & Strategy',
    display: ['Brand &', 'strategy'],
    items: ['Brand positioning', 'Identity direction', 'Marketing strategy', 'Market research', 'Brand development'],
  },
  {
    title: 'Digital Presence',
    display: ['Digital', 'presence'],
    items: ['Website design & development', 'Website optimisation', 'SEO', 'Google Business Profile'],
  },
  {
    title: 'Social & Content',
    display: ['Social &', 'content'],
    items: ['Social media management', 'Content strategy', 'Creative direction', 'Content creation', 'Community engagement'],
  },
  {
    title: 'Growth & Performance',
    display: ['Growth &', 'performance'],
    items: ['Digital campaigns', 'Paid advertising', 'Lead generation', 'Audience development', 'Performance tracking'],
  },
  {
    title: 'Marketing Consultancy',
    display: ['Marketing', 'consultancy'],
    items: ['Marketing audits', 'Strategic direction', 'Customer journey optimisation', 'Ongoing marketing support'],
  },
];

export const differentiators: { display: [string, string]; body: string }[] = [
  {
    display: ['Commercially', 'considered'],
    body: 'Good marketing should do more than look good. It should have a purpose, understand the audience and contribute to the bigger picture. We bring commercial thinking into every creative decision.',
  },
  {
    display: ['Personal', 'by nature'],
    body: 'No unnecessary layers, off-the-shelf thinking or disappearing acts. We believe the best work comes from genuine collaboration, clear communication and being invested in the businesses we work with.',
  },
  {
    display: ['Strategy', 'with a creative edge'],
    body: 'Knowing what to say matters just as much as how you say it. We bring together strategic direction and creative execution to make sure your brand doesn’t just show up, but shows up with intention.',
  },
];
