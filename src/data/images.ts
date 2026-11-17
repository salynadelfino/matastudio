/**
 * Editorial photography slots.
 *
 * Every photo is shown in black & white with a fine grain, so a mix of sources still looks like one shoot.
 *
 * TO ADD A PHOTO
 * 1. Put the file in src/assets/images/ (JPG/WebP, 2000px+ on the long edge for `hero`).
 * 2. Import it below, e.g.   import hero from '../assets/images/hero.jpg';
 * 3. Set `src: hero` on the matching slot, and write a short `alt` describing it.
 *
 * Until `src` is set, the site shows a grey frame with the `brief` as the art direction for that shot.
 */
export interface Slot {
  src?: ImageMetadata;
  alt: string;
  /** Art direction for the shot — shown on the placeholder until a photo is added */
  brief: string;
  /** CSS object-position, e.g. '50% 30%' to keep a face in frame */
  focus?: string;
}

export const images = {
  hero: {
    alt: '',
    brief: 'Photographer mid-shot, camera raised, motion blur. B&W, lots of wall space.',
  },
  about: {
    alt: '',
    brief: 'Woman working on a laptop, soft blur, side light. Portrait crop.',
  },
  tileAbout: {
    alt: '',
    brief: 'Hands on a camera, close crop.',
  },
  tileServices: {
    alt: '',
    brief: 'Laptop and notebook on a desk, overhead.',
  },
  tileWork: {
    alt: '',
    brief: 'Prints / contact sheets spread on a table.',
  },
  contact: {
    alt: '',
    brief: 'Woman on the phone, mid-laugh, blurred movement.',
  },
} satisfies Record<string, Slot>;
