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

export const differentiators = [
  {
    title: 'Commercially minded.',
    body: 'We understand that marketing needs to do more than look good. It needs to work.',
  },
  {
    title: 'Personal by design.',
    body: 'A considered, hands-on approach. No unnecessary layers between you and the people doing the work.',
  },
  {
    title: 'Strategy meets creativity.',
    body: 'We bring together commercial thinking, creative execution and a clear understanding of the customer journey.',
  },
];
