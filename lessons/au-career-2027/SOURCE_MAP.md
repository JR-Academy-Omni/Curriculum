# Talk Deck source map

- Runtime, fonts, visual canvas, navigation, notes and print preview from the `lessons/_template` at Curriculum `origin/main` f2123055.
- Approved W12 snapshot copied from the checked local Skill assets. `kit.tsx` SHA-256 `48b91bb368d971d4b7835811f0b3894308994303e47457fe4fa3114acbcd4be7`. `deck.tsx` SHA-256 `671e63c23dfdb1dd075c9a865bb164a2a04fa4414a308fa3504a988d18000b84`.
- P01 cover preserves the left title with marker and right five nodes. Changes are topic, labels, text lengths, lecturer/date, and 1-based roadmap numbering.
- P05 layout supplies slide 02's wide/narrow reference. The bar chart is a new accessible, keyboard-interactive visualization with a W12 Panel.
- P06c supplies slide 03's left-to-right decision layout.
- Slide 04 uses W12 panels, a zero-based national column chart, and comparisons by occupation. Chart bars are animated with the template’s existing Framer Motion dependency.
- Slide 05 uses four separate built-in ImageGen editorial photographs. The cards show an engineering workstation, an FDE alongside a client at their operations site, an AI product prototype review, and a customer sales meeting. The standalone 16:9 images keep their original framing. The Big Motion sequence starts with 2027 at centre stage. The year compresses to the left as the four photographs enter and form the right-hand comparison. Photos and captions hold for reading. Reduced-motion and print layouts show the composed view. S17 Table is reused for slides 11–12, 14–15, 19–31. Slides 20 and 25 compare entry paths; slides 22 and 26 present ten capabilities synthesised from the named sources. Slide 21 uses a meeting task assistant to compare PM and AI PM responsibilities. Slide 24 compares enterprise IT, residential property and beauty retail sales. Slide 27 presents a partner-resource-based sales practice exercise.
- S12 Node/Arrow and side-by-side W12 Panel patterns are reused for slide 32.
- Slides 06, 13 and 16–17 use W12 DeckFrame, Panel and Steps with shared career content. Slide 33 uses the original two-panel pattern for citations.
- The published event describes the presenter and three decisions. Labor, posting, job and pay source URLs are centralized in `src/data/sources.ts`. Source scope, figures and teaching caveats are in `RUNSHEET.md`.
- Slides 07–10 copy Cohort 07 MiniClaw public class slides 04, 08, 09 and 13 respectively. The four components are byte-identical to the source under `lessons/ai-engineer-cohort-07-miniclaw/src/components/slides/`; their shared DeckFrame is also byte-identical. Reuse this deck’s 1600 × 900 runtime and bundled variable versions of the same font families.
- The matching four paragraphs from the source `SPEAKER_NOTES.md` are copied into the revised talk’s notes. Other role and salary pages keep their existing sources.
- The telephone, meeting and candidate situations are teaching scenarios.

| Talk slide | Public-class source |
|---|---|
| 07 | 04 · `S03a_AudienceGap.tsx` |
| 08 | 08 · `S03a_Convergence.tsx` |
| 09 | 09 · `S03a_Formula.tsx` |
| 10 | 13 · `S03e_SkillCheck.tsx` |

## FDE course sources

- JR website source verified at origin/main 475b72e391ba945990419619150e9fdbec621614. Each course route in src/app/[locale]/program-course imports the relevant generated course definition.
- Slide 14 follows src/content/fdeBusinessCourse.generated.json, and the three outcome headings on the FDE Business website. Sales lead intake and follow-up appears in the public outline tasks. The budget-cut exercise comes from week 7, lesson L13.
- Slide 17 follows src/content/fdeTechCourse.generated.json, specifically locales.zh.curriculum.weeks, locales.zh.schedule.stages, and locales.zh.proposalShowcase for Knowledge Access. Slide 17 reproduces the ten role capability names and definitions under 十个维度，练出完整的 FDE 交付能力, in the order displayed on the public FDE Tech page. Founder + AI Engineer is the owner’s lecture framing.

- Slide 18 pairs the original Anthropic path screenshot with the OpenAI PartnerU course screenshot and the matching partner marks. The six OpenAI category cards are arranged in two rows for projection.

## Employer marks

- Google and OpenAI from the existing AI Engineer Landscape Talk assets. Accenture, MYOB and Salesforce from the JR Academy website brand image library. Endla and Suntory from the images used on their official careers pages.
- EmployerLinks embeds all marks in the built bundle and links them to the exact recruitment notice. Slide 12 adds Google Cloud Staff Forward Deployed Engineer in Sydney or Melbourne. Slide 25 adds Google Cloud AI Sales Specialist in the same cities.

## JR Academy technology partner badges

- Slides 01, 17, 18 and 27 show the same two partner marks as the official FDE program pages. Sources are the website public/icon/openai-select-partner.png (resized losslessly as WebP for offline HTML) and public/icon/claude-partner-certified.svg (unmodified).
- Source UI: JR Academy website src/components/Fde/CourseSalesPage.tsx, which uses “OpenAI Select Partner” and “Claude Certified Services Partner”.

- FDE Business slides 12–15 use the official FDE Business public outline and website course definition for the 8-week work and admission preparation. The owner clarified its graduate job-seeking positioning for this talk. Graduate job examples use ADAPTOVATE Sydney and the Appian Sydney 2027 posting. ADAPTOVATE lists one salary for the combined Graduate and Associate posting.

- Slide 13 illustrates SME sales lead follow-up and separates it from the ADAPTOVATE Graduate requirements. Slide 16 draws on Google Cloud Australia’s Staff Developer AI FDE role for executive stakeholders, migration and code review, and OpenAI Sydney’s FDE role for adoption, workflow impact and feedback into product and research.

- Slide 22 draws on the JR AI Product Manager (BA) syllabus and the Suntory and MYOB JDs. Slide 26 distinguishes BDR, presales and AE responsibilities using Salesforce, Google Cloud and OpenAI hiring material.
