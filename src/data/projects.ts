/**
 * Selected Work.
 *
 * HOW TO ADD A PROJECT
 * 1. Drop the image into src/assets/work/ (JPG/PNG/WebP, ideally 2000px+ on the long edge).
 * 2. Import it at the top of this file:   import acme from '../assets/work/acme.jpg';
 * 3. Add an entry below with `image: acme`.
 *
 * One project shows as a featured case study. Two or more switch to the editorial grid automatically.
 *
 * ACCURACY: only list real work, and never add results you can't evidence.
 * `attribution` says how the work was delivered:
 *   'mata'    — a MATA Studio client project
 *   'founder' — delivered by the founder in an in-house or previous role, not as a MATA client
 */
export type Category =
  | 'Brand & Identity'
  | 'Website Design & Development'
  | 'Social & Content'
  | 'Digital Marketing & Campaigns'
  | 'Strategy & Growth'
  | 'Website & Customer Journey';

export interface Project {
  title: string;
  category: Category;
  /** Optional — leave empty to hide */
  year?: string;
  /** Sector / context line, e.g. 'UK visa & immigration administration' */
  sector?: string;
  summary: string;
  /** Shown on the featured layout */
  brief?: string;
  approach?: string;
  /** What was delivered, e.g. ['Positioning', 'Visual identity'] */
  scope: string[];
  attribution: 'mata' | 'founder';
  image?: ImageMetadata;
  imageAlt?: string;
  /** Art direction shown until an image is added */
  imageBrief?: string;
  /** Optional link to a live site or case study */
  href?: string;
  /** true shows a visible "Placeholder" tag */
  placeholder?: boolean;
}

export const attributionLabel: Record<Project['attribution'], string> = {
  mata: 'MATA Studio',
  founder: 'Founder experience',
};

export const projects: Project[] = [
  {
    // DRAFT COPY — check every line is accurate before publishing, and confirm CTC is happy to be named.
    title: 'CTC Administration',
    category: 'Website & Customer Journey',
    sector: 'UK visa & immigration administration',
    summary:
      'A website redesign and a rethink of the customer journey for a UK visa and immigration administration business.',
    brief:
      'Make a detailed, trust-sensitive service easier to understand, easier to navigate and easier to enquire about.',
    approach:
      'A redesigned website alongside a reworked customer journey, from first visit to enquiry and beyond, with clearer structure, messaging and next steps at each stage.',
    scope: ['Website redesign', 'Customer journey strategy'],
    attribution: 'founder',
    imageBrief: 'CTC website on a laptop and phone, shot on a desk in the same warm tone.',
  },
];
