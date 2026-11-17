/** Services shown in "What we do". Add, remove or reorder freely. */
export interface Service {
  title: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Brand & Strategy',
    items: ['Brand positioning', 'Identity direction', 'Marketing strategy', 'Market research', 'Brand development'],
  },
  {
    title: 'Digital Presence',
    items: ['Website design & development', 'Website optimisation', 'SEO', 'Google Business Profile'],
  },
  {
    title: 'Social & Content',
    items: ['Social media management', 'Content strategy', 'Creative direction', 'Content creation', 'Community engagement'],
  },
  {
    title: 'Growth & Performance',
    items: ['Digital campaigns', 'Paid advertising', 'Lead generation', 'Audience development', 'Performance tracking'],
  },
  {
    title: 'Marketing Consultancy',
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
