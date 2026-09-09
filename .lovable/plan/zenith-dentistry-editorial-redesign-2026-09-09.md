# Zenith Dentistry editorial redesign

## Goal
Rebuild the blank project as a premium Zenith Dentistry website that preserves the clinic’s real brand, content, imagery, contact details, appointment path, and public page structure while translating them into the supplied rounded-card, image-led editorial design language.

## 1. Capture and preserve the source site
- Audit the live Zenith Dentistry pages directly and create a verified content inventory: navigation, logo, brand colors, copy, services, doctors and qualifications, facilities, galleries, testimonials, articles, contact details, social links, maps, and appointment flow.
- Download the original Zenith image assets used by those pages and store them through the project asset flow; do not use stock, generated, or template imagery.
- Treat the live site as the source of truth. Omit or flag any item that cannot be verified rather than inventing it.
- Build a route map from the existing public URLs so important links and treatment pages remain available.

## 2. Establish Zenith’s visual system
- Translate Zenith’s verified colors and typography into semantic Tailwind v4 design tokens.
- Load Open Sauce One through the document head using the supplied font links where it complements the Zenith identity.
- Define consistent card radii, spacing, glass surfaces, image treatments, focus states, and restrained motion while preserving readable medical content.
- Replace all placeholder metadata with Zenith-specific titles, descriptions, Open Graph fields, and appropriate image previews per page.

## 3. Build the shared experience
- Create a fixed translucent navigation bar with the Zenith logo, real navigation destinations, and a persistent “Book an Appointment” action.
- Add an animated mobile side menu with body scroll locking, accessible controls, and working links.
- Add the two-second branded loading screen and respect reduced-motion preferences.
- Create a minimal Zenith footer containing verified navigation, services, contact details, social links, and copyright.

## 4. Redesign the landing page
- Build the homepage journey in this order: hero, about, services, featured treatments, doctors, facilities, smile gallery, testimonials, latest articles, appointment prompt, contact, and footer.
- Adapt the supplied full-screen editorial composition with varied rounded cards, large type, photographic areas, overlapping/glass details, seamless section spacing, and subtle hover feedback.
- Implement the shared-image masked-card effect for suitable Zenith imagery using resize-aware positioning; fall back to undistorted normal image cards where a source photo does not suit masking.
- Use verified Zenith messaging and all relevant existing content rather than the template’s sample clinic copy.

## 5. Preserve supporting pages and functionality
- Recreate every verified public destination, including About, Services, individual treatments, Doctors, Facilities, Gallery, Blog/articles, Contact, and appointment destinations.
- Give each route its actual content and unique metadata while sharing the new navigation, visual system, and footer.
- Preserve appointment, telephone, email, social, location, and article links with their original destinations and behavior.
- Add a responsive gallery lightbox and restrained testimonial presentation using only existing reviews and media.

## 6. Interaction and responsive behavior
- Implement reusable viewport reveal behavior: fade from 0 to 1, translate 24px to 0, approximately 600ms, staggered around 120ms, firing once.
- Add smooth scrolling, restrained card/image motion, CTA feedback, mobile menu transitions, and lightbox transitions.
- Adapt editorial grids for desktop, tablet, and single-column mobile layouts with touch-friendly controls, stable card proportions, and no horizontal overflow.

## 7. Verification
- Check desktop and mobile layouts in the running preview after the loading sequence.
- Exercise navigation, mobile menu, appointment actions, phone/email/map links, gallery lightbox, and all recreated routes.
- Confirm images load without distortion, key faces and clinical results remain visible, headings do not overlap, animations remain smooth, and no template branding/content survives.
- Cross-check the finished site against the source inventory: logo, colors, services, doctors, testimonials, facilities, gallery, articles, contact information, social links, and appointment flow.

## Technical notes
- Keep the project’s existing TanStack Start React/Vite/TypeScript/Tailwind v4 foundation rather than replacing it with an incompatible classic Vite scaffold.
- Use small focused React components and shared verified data modules instead of forcing the entire multi-route site into one file; this is necessary to preserve the requested public routes cleanly.
- Use only React, the existing router, Tailwind, browser APIs, and inline SVG icons; add no UI or icon package.
- Load remote font stylesheets from the document head, not CSS imports, and keep all colors tokenized in the global stylesheet.
