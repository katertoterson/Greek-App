# Hellenika — A Duolingo-Style Attic Greek Learning App

## What It Is

A progressive web app (PWA) for learning ancient Attic Greek, modeled after Duolingo's lesson structure. It follows the curriculum from Hansen & Quinn's textbook "Greek: An Intensive Course," covering the Introduction through Unit 2.

It's built with vanilla HTML/CSS/JS — no frameworks, no build step, no dependencies. Just static files served by any web server.

## How It Works

### Home Screen

The home screen shows:
- App title "Hellenika" with subtitle "Learn Attic Greek"
- Stats bar: Total XP, Day Streak, Completed lessons count
- A vertical lesson path with 29 lessons organized into sections
- Each lesson shows as a circular node: locked (gray), available (purple), or completed (with 1-3 gold stars)
- Lessons unlock sequentially — you must complete one to unlock the next
- Secret: tap the title 5 times to auto-unlock the next locked lesson (for testing)

### Lesson Flow

When you tap a lesson, you enter a sequence of ~15-20 exercises. During a lesson:
- A progress bar fills across the top
- You have 3 hearts (lives) — each wrong answer costs one heart
- If you lose all hearts, it's game over and you must retry
- Exercises are all multiple-choice or matching (no typing required)
- Correct answers flash green with a chime sound; wrong answers flash red
- After answering, a "Continue" button advances to the next exercise

When you finish a lesson:
- You see a results screen with stars (1-3 based on accuracy), XP earned, and accuracy percentage
- Confetti animation plays
- You can continue to the home screen

### Exercise Types

1. **Intro cards** (`intro`, `vocab-intro`, `grammar-intro`): Non-graded info screens that teach before quizzing. Show letter charts, vocabulary flashcards, or grammar concept cards that you swipe through.

2. **Multiple choice** (`mc-name`, `mc-letter`, `mc-sound`, `mc-translate`): A prompt is shown (Greek text, English text, or a question) with 4 answer buttons. Only one is correct. The prompt can display in a large Greek font or smaller text. Options can also be styled as Greek text.

3. **Matching** (`match`): 5 pairs shown as two columns of tappable tiles. Tap one from the left column, then its match from the right. Correctly matched pairs fade out. No penalty for wrong matches (they just deselect).

### Progress System

- Progress saved to localStorage under key `hellenika_progress`
- Tracks: completed lessons (with stars and best XP), total XP, day streak, last play date
- XP formula: base 10 + (stars × 5) + round(accuracy / 10)
- Stars: ≥95% accuracy = 3 stars, ≥75% = 2 stars, else 1 star
- Streak increments if you play on consecutive days

## The 29 Lessons

### Section 1: The Alphabet (6 lessons)
Teach the 24 Greek letters in groups of 5 (last group has 4), plus a full review:
- Letters I: Α Β Γ Δ Ε
- Letters II: Ζ Η Θ Ι Κ
- Letters III: Λ Μ Ν Ξ Ο
- Letters IV: Π Ρ Σ Τ Υ
- Letters V: Φ Χ Ψ Ω
- Full Review: All 24 letters

Each alphabet lesson introduces the letters with a chart (upper, lower, name, pronunciation, example), then quizzes: "What is this letter called?", "Which letter is this?", "What sound does this letter make?", matching letters to names.

Each letter has: uppercase form, lowercase form, name (Alpha, Beta, etc.), pronunciation description, and an IPA value.

### Section 2: Introduction (7 lessons)
These cover the phonology and orthography topics from the textbook's Introduction chapter:

1. **Breathing Marks**: Rough breathing (῾) = h-sound, smooth breathing (᾿) = no h-sound. All initial vowels must have one. Initial υ and ρ always have rough breathing. Exercises: identify rough vs. smooth on Greek words, select which word has rough breathing, matching.

2. **Long & Short Vowels**: η and ω are always long; ε and ο are always short; α, ι, υ can be either. Long vowels get a macron (ᾱ, ῑ, ῡ) in the textbook. Exercises: classify each vowel's length, matching.

3. **Diphthongs**: 8 diphthongs (αι, ει, οι, υι, αυ, ευ, ηυ, ου), all counted as long. Breathing marks go over the second letter. Exercises: identify pronunciation of each diphthong, distinguish real diphthongs from fake pairs, matching.

4. **Iota Subscript & Adscript**: When long vowels ᾱ, η, ω combine with short ι, the iota is written beneath (subscript: ᾳ, ῃ, ῳ) and not pronounced. When capitalized, iota is written after (adscript). Exercises: spot iota subscripts in words, identify which vowels can take subscripts.

5. **Consonant Classes**: Labials (π β φ), dentals (τ δ θ), palatals (κ γ χ). Double consonants: ζ=dz, ξ=ks, ψ=ps. Labial+σ→ψ, palatal+σ→ξ. γ before palatals = "ng" sound. Exercises: classify consonants, identify double consonant values, matching.

6. **Greek Punctuation**: Comma and period same as English. Raised dot (·) = colon/semicolon. Semicolon (;) = question mark. Proper names capitalized but sentence-initial words normally are not. Exercises: identify what each mark means, matching.

7. **Accents**: Three types — acute (´) raises pitch, grave (`) lowers pitch, circumflex (῀) rises and falls. Accent only on last 3 syllables (ultima, penult, antepenult). Rules for each accent type. Verb accents are recessive; noun accents are persistent. Exercises: identify accent type on words, identify which syllable is accented, matching.

### Section 3: Unit 1 — Nouns & Articles (6 lessons)

**Vocabulary I-III** (3 lessons, ~5 words each): Teach 17 vocabulary words:
- 1st declension feminine: ἀγορά (marketplace), ψῡχή (soul), μάχη (battle), χώρᾱ (land), ἐπιστολή (letter)
- 2nd declension masculine: ἀδελφός (brother), ἄνθρωπος (man), θεός (god), λόγος (word), πόλεμος (war)
- 2nd declension feminine: νῆσος (island)
- 2nd declension neuter: βιβλίον (book), δῶρον (gift), ἔργον (work)
- Additional: τέχνη (art), ὁδός (road), οἰκίᾱ (house), Ὅμηρος (Homer)

Each vocab lesson: intro flashcards showing Greek + English + article + gender, then Greek→English MC, English→Greek MC, matching pairs, gender identification MC.

**The Article** (grammar lesson): Concept cards about gender (ὁ/ἡ/τό), nominative case, then exercises picking the right article for nouns, identifying gender.

**Declensions** (grammar lesson): 1st and 2nd declension patterns, then exercises identifying which declension a noun belongs to, matching.

**First Sentences** (reading lesson): Introduces 4 verb forms (παιδεύει, πέμπει, γράφει, λύει) and 8 simple sentences. Exercises: translate Greek→English, English→Greek, identify the verb.

### Section 4: Unit 1 — Cases & Declensions (6 lessons)

**Vocabulary IV** (1 lesson): τέχνη, ὁδός, οἰκίᾱ, Ὅμηρος

**The Five Cases** (concept lesson): Nominative (subject), genitive (of/from), dative (to/for/in/with), accusative (direct object), vocative (address). Exercises: MC about case functions, matching cases to functions.

**1st Declension** (concept lesson): Full paradigms for -η type (τέχνη) and -ᾱ type (χώρᾱ). All case forms singular and plural. Exercises: identify case of a given form, select correct form for a given case, matching.

**2nd Declension** (concept lesson): Full paradigms for -ος type (λόγος) and -ον neuter type (δῶρον). Accent shifts. Exercises: same pattern as 1st declension.

**The Full Article** (concept lesson): Complete declension of ὁ/ἡ/τό in all genders, numbers, cases. Proclitics. Exercises: identify article forms by case+gender, matching.

**Prepositions** (concept lesson): εἰς + acc. (into/to), ἐκ/ἐξ + gen. (from/out of), ἐν + dat. (in). Exercises: what case each takes, what each means, translate prepositional phrases, matching.

**Reading Practice** (sentence lesson): 8 more complex sentences with cases, articles, and prepositions.

### Section 5: Unit 2 — Verbs (12 lessons)

**Vocabulary V-VI** (2 lessons): ἄγγελος (messenger), ζῷον (animal), ξένος (stranger), φίλος (friend), στέφανος (crown), χρῡσός (gold), φιλίᾱ (friendship).

**Verbs: Overview** (concept lesson): Person (1st/2nd/3rd), number (sg/pl), tense (time + aspect), mood (indicative/subjunctive/optative/imperative), voice (active/passive/middle).

**Time & Aspect** (concept lesson): 7 tenses mapped to time × aspect grid. Present = now + progressive. Imperfect = past + progressive. Aorist = past + simple. Future = future + simple/progressive. Perfect = now + completed. Pluperfect = past + completed. Primary vs. secondary tenses. The augment ἐ-.

**Principal Parts** (concept lesson): 6 principal parts per verb. Patterns: σ-stems, reduplication, -θη-. Four model verbs: παιδεύω, κελεύω, λύω, πέμπω with all 6 parts.

**Present & Imperfect** (concept lesson): Present active conjugation of παιδεύω (6 forms: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)). Imperfect with augment (ἐ-) and secondary endings (-ον, -ες, -ε(ν), -ομεν, -ετε, -ον). Thematic vowels ε/ο. Exercises: identify tense, identify person/number, matching, pick correct form.

**Future & Aorist** (concept lesson): Future = present endings on σ-stem. Aorist = augmented σ-stem + α-endings (-α, -ας, -ε(ν), -αμεν, -ατε, -αν). Simple aspect. Exercises: identify tense, matching, translate forms.

**Infinitives** (concept lesson): Present infinitive (-ειν, progressive aspect). Aorist infinitive (-αι on unaugmented stem, simple aspect, accent on penult). Used with κελεύω (order). Exercises: identify ending/aspect, translate constructions, match verbs to infinitives.

**Particles & Negation** (concept lesson): Postpositives γάρ (for) and δέ (but/and). μέν...δέ contrast. Negation οὐ/οὐκ/οὐχ. Question particle ἆρα. ἤ (or), ἤ...ἤ (either...or). Adverbs εὖ (well), νῦν (now). Numerals πέντε (5), ἕξ (6).

**More Prepositions** (concept lesson): ἀπό + gen. (from/away from — starts at boundary), παρά + gen./dat./acc. (from/at/to the side of), πρό + gen. (before/in front of).

**Reading Practice II** (sentence lesson): 12 sentences using conjugated verbs, particles, prepositions, infinitive constructions.

## Visual Design

- Dark theme: deep navy background (#1a1a2e), slightly lighter cards (#16213e)
- Purple accent color (#6C5CE7) for buttons, progress bar, active states
- Green (#00E676) for correct answers, red (#FF5252) for wrong
- Gold (#FFD700) for stars and XP
- Greek text uses "Noto Serif" font family, displayed larger than English
- English/UI text uses "Inter" font family
- Mobile-first: max-width 480px container centered on screen
- Font sizes use `min()` with `vw` units to prevent overflow on small screens
- Long text in buttons gets auto-sized down using `.medium` and `.small` CSS classes
- Confetti animation on lesson completion
- XP toast notification (+N XP) slides up when earned

## Technical Architecture

- `index.html` — entry point, loads all scripts
- `manifest.json` + `sw.js` — PWA support (offline capable, installable)
- `css/style.css` — all styles
- `js/data.js` — all content: alphabet, vocabulary, declensions, articles, prepositions, particles, verbs, verb paradigms, tense chart, sentences, grammar concept cards, exercise data, and the 29-lesson definition array
- `js/audio.js` — Web Audio API sound effects (correct chime, wrong buzz, tap, lesson complete)
- `js/engine.js` — exercise generation logic (takes a lesson definition, produces an array of exercise objects), progress tracking (localStorage), shuffle/distractor utilities
- `js/ui.js` — all DOM rendering using an `el()` helper function that creates elements imperatively. Renders: home screen with lesson path, exercise screens (MC, matching, intro cards), results screen, game over screen
- `js/app.js` — app controller: state machine managing lesson flow (start → exercise → next → finish), heart tracking, XP calculation

All JS uses the revealing module pattern (IIFEs returning a public API): `App`, `UI`, `Engine`, `AudioFX`.

## Content Source

All Greek content comes from Hansen & Quinn's "Greek: An Intensive Course" — specifically the Introduction chapter, Unit 1, and Unit 2. The corrected source text with proper accent marks, macrons, and diacritics is in:
- `Introduction-latest.md`
- `Unit1-latest.md`
- `Unit2-latest.md`
