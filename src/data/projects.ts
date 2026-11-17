/**
 * Selected Work.
 *
 * HOW TO ADD A PROJECT
 * 1. Drop the image into src/assets/work/ (JPG/PNG/WebP, ideally 2000px+ on the long edge).
 * 2. Import it at the top of this file:   import acme from '../assets/work/acme.jpg';
 * 3. Add an entry below with `image: acme` and set `placeholder: false`.
 *
 * Images are resized and converted to modern formats automatically at build time.
 * The layout alternates sizes automatically, so order matters more than anything else.
 *
 * ACCURACY: only list real work. Use `attribution: 'prior'` for work delivered
 * before MATA Studio (e.g. in a previous role), and say so in the summary.
 */
export type Category =
  | 'Brand & Identity'
  | 'Website Design & Development'
  | 'Social & Content'
  | 'Digital Marketing & Campaigns'
  | 'Strategy & Growth';

export interface Project {
  title: string;
  category: Category;
  year: string;
  summary: string;
  /** What was delivered, e.g. ['Positioning', 'Visual identity'] */
  scope: string[];
  /** 'mata' = delivered by MATA Studio. 'prior' = founder's previous professional experience. */
  attribution: 'mata' | 'prior';
  image?: ImageMetadata;
  imageAlt?: string;
  /** Optional link to a live site or case study */
  href?: string;
  /** true shows a visible "Placeholder" tag. Set false once real content is in. */
  placeholder?: boolean;
}

export const attributionLabel: Record<Project['attribution'], string> = {
  mata: 'MATA Studio',
  prior: 'Prior experience',
};

export const projects: Project[] = [
  {
    title: 'Project name',
    category: 'Brand & Identity',
    year: '20XX',
    summary: 'One or two sentences on the brief, what was done and why it mattered. Replace with real project details.',
    scope: ['Positioning', 'Visual identity'],
    attribution: 'mata',
    placeholder: true,
  },
  {
    title: 'Project name',
    category: 'Website Design & Development',
    year: '20XX',
    summary: 'One or two sentences on the brief, what was done and why it mattered. Replace with real project details.',
    scope: ['Web design', 'Development'],
    attribution: 'mata',
    placeholder: true,
  },
  {
    title: 'Project name',
    category: 'Social & Content',
    year: '20XX',
    summary: 'One or two sentences on the brief, what was done and why it mattered. Replace with real project details.',
    scope: ['Content strategy', 'Creative direction'],
    attribution: 'mata',
    placeholder: true,
  },
  {
    title: 'Project name',
    category: 'Digital Marketing & Campaigns',
    year: '20XX',
    summary: 'One or two sentences on the brief, what was done and why it mattered. Replace with real project details.',
    scope: ['Paid social', 'Lead generation'],
    attribution: 'prior',
    placeholder: true,
  },
  {
    title: 'Project name',
    category: 'Strategy & Growth',
    year: '20XX',
    summary: 'One or two sentences on the brief, what was done and why it mattered. Replace with real project details.',
    scope: ['Marketing audit', 'Customer journey'],
    attribution: 'prior',
    placeholder: true,
  },
];
