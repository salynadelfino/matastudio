/**
 * Editorial photography slots.
 *
 * TO ADD OR SWAP A PHOTO
 * 1. Put the file in src/assets/images/ (JPG/WebP; 2400px+ wide for `hero`).
 * 2. Import it below and set `src` on the matching slot, with a short `alt`.
 *
 * Photos are shown in their natural tone with a light film grain.
 * Until `src` is set, the site shows a grey frame with the `brief` as art direction.
 */
import aboutWalking from '../assets/images/about-walking.webp';
import contactPhone from '../assets/images/contact-phone.webp';
import tileCamera from '../assets/images/tile-camera.webp';
import tileDesk from '../assets/images/tile-desk.webp';
import tileMoodboard from '../assets/images/tile-moodboard.webp';

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
    // To come — add the hero image here.
    alt: '',
    brief: 'Hero image to come.',
  },
  about: {
    src: aboutWalking,
    alt: 'A woman in a black suit walks through a studio, sharp in focus, as two people blur past either side of her.',
    brief: '',
    focus: '50% 50%',
  },
  tileAbout: {
    src: tileCamera,
    alt: 'A woman raises a camera to her eye, caught in motion blur.',
    brief: '',
    focus: '62% 50%',
  },
  tileServices: {
    src: tileDesk,
    alt: 'Overhead view of hands typing on a laptop and writing in a notebook beside an espresso and printed layouts.',
    brief: '',
    focus: '45% 50%',
  },
  tileWork: {
    src: tileMoodboard,
    alt: 'A woman walks past a wall of pinned brand references, including a MATA card reading “A different perspective”.',
    brief: '',
    focus: '50% 50%',
  },
  contact: {
    src: contactPhone,
    alt: 'A woman laughs on a phone call, gold rings catching the light.',
    brief: '',
    focus: '50% 35%',
  },
} satisfies Record<string, Slot>;
