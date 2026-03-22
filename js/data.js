var Data = (function() {

  // ===== ALPHABET =====
  var alphabet = [
    { upper: 'Α', lower: 'α', name: 'Alpha',   pron: 'father (long ᾱ) / drama (short)', pronHtml: '(long: ᾱ) f<strong>a</strong>ther / (short: α) dram<strong>a</strong>', ipa: 'a/aː' },
    { upper: 'Β', lower: 'β', name: 'Beta',    pron: 'bit',           pronHtml: '<strong>b</strong>it', ipa: 'b' },
    { upper: 'Γ', lower: 'γ', name: 'Gamma',   pron: 'get',           pronHtml: '<strong>g</strong>et', ipa: 'ɡ' },
    { upper: 'Δ', lower: 'δ', name: 'Delta',   pron: 'den',           pronHtml: '<strong>d</strong>en', ipa: 'd' },
    { upper: 'Ε', lower: 'ε', name: 'Epsilon', pron: 'get (always short)', pronHtml: '(always short) g<strong>e</strong>t', ipa: 'e' },
    { upper: 'Ζ', lower: 'ζ', name: 'Zeta',    pron: 'adds, gadzooks (= dz)', pronHtml: 'a<strong>dds</strong>, ga<strong>dz</strong>ooks (= dz)', ipa: 'dz' },
    { upper: 'Η', lower: 'η', name: 'Eta',     pron: 'wait, bait (always long)', pronHtml: '(always long) w<strong>ai</strong>t, b<strong>ai</strong>t', ipa: 'ɛː' },
    { upper: 'Θ', lower: 'θ', name: 'Theta',   pron: 'thought',       pronHtml: '<strong>th</strong>ought', ipa: 'tʰ' },
    { upper: 'Ι', lower: 'ι', name: 'Iota',    pron: 'meet (long ῑ) / bit (short)', pronHtml: '(long: ῑ) m<strong>ee</strong>t / (short: ι) b<strong>i</strong>t', ipa: 'i/iː' },
    { upper: 'Κ', lower: 'κ', name: 'Kappa',   pron: 'kit',           pronHtml: '<strong>k</strong>it', ipa: 'k' },
    { upper: 'Λ', lower: 'λ', name: 'Lambda',  pron: 'lit',           pronHtml: '<strong>l</strong>it', ipa: 'l' },
    { upper: 'Μ', lower: 'μ', name: 'Mu',      pron: 'meet',          pronHtml: '<strong>m</strong>eet', ipa: 'm' },
    { upper: 'Ν', lower: 'ν', name: 'Nu',      pron: 'neat',          pronHtml: '<strong>n</strong>eat', ipa: 'n' },
    { upper: 'Ξ', lower: 'ξ', name: 'Xi',      pron: 'coax, taxi (= ks)', pronHtml: 'coa<strong>x</strong>, ta<strong>x</strong>i (= ks)', ipa: 'ks' },
    { upper: 'Ο', lower: 'ο', name: 'Omicron', pron: 'thought, bought (always short)', pronHtml: '(always short) th<strong>oug</strong>ht, b<strong>ough</strong>t', ipa: 'o' },
    { upper: 'Π', lower: 'π', name: 'Pi',      pron: 'pen',           pronHtml: '<strong>p</strong>en', ipa: 'p' },
    { upper: 'Ρ', lower: 'ρ', name: 'Rho',     pron: 'drama (slightly rolled)', pronHtml: 'd<strong>r</strong>ama (slightly rolled)', ipa: 'r' },
    { upper: 'Σ', lower: 'σ/ς', name: 'Sigma', pron: 'set (ς at word end)', pronHtml: '<strong>s</strong>et (ς at word end)', ipa: 's' },
    { upper: 'Τ', lower: 'τ', name: 'Tau',     pron: 'ten',           pronHtml: '<strong>t</strong>en', ipa: 't' },
    { upper: 'Υ', lower: 'υ', name: 'Upsilon', pron: 'boot (long ῡ) / put (short)', pronHtml: '(long: ῡ) b<strong>oo</strong>t / (short: υ) p<strong>u</strong>t', ipa: 'u/uː' },
    { upper: 'Φ', lower: 'φ', name: 'Phi',     pron: 'fit',           pronHtml: '<strong>f</strong>it', ipa: 'pʰ' },
    { upper: 'Χ', lower: 'χ', name: 'Chi',     pron: 'backhand, German lachen', pronHtml: 'bac<strong>kh</strong>and, German la<strong>ch</strong>en', ipa: 'kʰ' },
    { upper: 'Ψ', lower: 'ψ', name: 'Psi',     pron: 'flaps, upset (= ps)', pronHtml: 'fla<strong>ps</strong>, u<strong>ps</strong>et (= ps)', ipa: 'ps' },
    { upper: 'Ω', lower: 'ω', name: 'Omega',   pron: 'total (always long)', pronHtml: '(always long) t<strong>o</strong>tal', ipa: 'ɔː' }
  ];

  // Alphabet groups for lessons
  var alphaGroups = [
    alphabet.slice(0, 5),   // Α Β Γ Δ Ε
    alphabet.slice(5, 10),  // Ζ Η Θ Ι Κ
    alphabet.slice(10, 15), // Λ Μ Ν Ξ Ο
    alphabet.slice(15, 20), // Π Ρ Σ Τ Υ
    alphabet.slice(20, 24)  // Φ Χ Ψ Ω
  ];

  // ===== BREATHING MARKS =====
  var breathingExamples = {
    rough: [
      { word: 'ἑξάγωνον', meaning: 'hexagon' },
      { word: 'Ἑλένη', meaning: 'Helen' },
      { word: 'ὑπόθεσις', meaning: 'hypothesis' },
      { word: 'ῥητορική', meaning: 'rhetoric' },
      { word: 'ἱστορίᾱ', meaning: 'history' },
      { word: 'Ἡρακλῆς', meaning: 'Herakles' },
      { word: 'ὕμνος', meaning: 'hymn' }
    ],
    smooth: [
      { word: 'ὀλιγαρχίᾱ', meaning: 'oligarchy' },
      { word: 'Ἠλέκτρᾱ', meaning: 'Elektra' },
      { word: 'ἐπιστολή', meaning: 'letter' },
      { word: 'ἄνθρωπος', meaning: 'man' },
      { word: 'ἀξίωμα', meaning: 'axiom' },
      { word: 'Ὠκεανός', meaning: 'Okeanos' }
    ]
  };

  // ===== VOWELS =====
  var vowelData = {
    alwaysLong:  ['η', 'ω'],
    alwaysShort: ['ε', 'ο'],
    either:      ['α', 'ι', 'υ'],
    longForms:   ['ᾱ', 'ῑ', 'ῡ']
  };

  // ===== DIPHTHONGS =====
  var diphthongs = [
    { letters: 'αι', pron: 'defy, fine',    pronHtml: 'def<strong>y</strong>, f<strong>i</strong>ne', example: 'αἰθήρ' },
    { letters: 'ει', pron: 'wait, bait',    pronHtml: 'w<strong>ai</strong>t, b<strong>ai</strong>t', example: 'εἰρήνη' },
    { letters: 'οι', pron: 'boy',           pronHtml: 'b<strong>oy</strong>',           example: 'οἶνος' },
    { letters: 'υι', pron: 'wit',           pronHtml: '<strong>wi</strong>t',           example: 'Εἰλείθυια' },
    { letters: 'αυ', pron: 'scow, plow',    pronHtml: 'sc<strong>ow</strong>, pl<strong>ow</strong>', example: 'αὐτόνομος' },
    { letters: 'ευ', pron: 'ε + υ together',example: 'Ὀδυσσεύς' },
    { letters: 'ηυ', pron: 'η + υ together',example: 'ηὕρηκα' },
    { letters: 'ου', pron: 'boot',          pronHtml: 'b<strong>oo</strong>t',          example: 'Οὐρανός' }
  ];

  // ===== IOTA SUBSCRIPT =====
  var iotaSubscriptData = {
    examples: [
      { with: 'ᾳ', without: 'ᾱ', base: 'α' },
      { with: 'ῃ', without: 'η', base: 'η' },
      { with: 'ῳ', without: 'ω', base: 'ω' }
    ],
    words: [
      { word: 'ᾠδή', meaning: 'ode (iota subscript)' },
      { word: 'Ὠιδή', meaning: 'Ode (iota adscript — capitalized)' }
    ]
  };

  // ===== CONSONANT CLASSES =====
  var consonantClasses = {
    labials:  ['π', 'β', 'φ'],
    dentals:  ['τ', 'δ', 'θ'],
    palatals: ['κ', 'γ', 'χ'],
    doubleConsonants: [
      { letter: 'ζ', value: 'dz' },
      { letter: 'ξ', value: 'ks' },
      { letter: 'ψ', value: 'ps' }
    ],
    sigmaRules: [
      { combo: 'π + σ', result: 'ψ' },
      { combo: 'β + σ', result: 'ψ' },
      { combo: 'φ + σ', result: 'ψ' },
      { combo: 'κ + σ', result: 'ξ' },
      { combo: 'γ + σ', result: 'ξ' },
      { combo: 'χ + σ', result: 'ξ' }
    ],
    gammaCombos: [
      { combo: 'γγ', sound: 'anger (ng)',       example: 'ἄγγελος' },
      { combo: 'γκ', sound: 'banker, anchor (nk)', example: 'ἄγκῡρα' },
      { combo: 'γξ', sound: 'larynx, sphinx (nks)', example: 'λάρυγξ' },
      { combo: 'γχ', sound: 'lunkhead (nkh)',   example: 'Ὀξύρρυγχος' }
    ]
  };

  // ===== PUNCTUATION =====
  var punctuation = [
    { mark: ',', name: 'Comma', usage: 'Same as English comma' },
    { mark: '.', name: 'Period', usage: 'Same as English period' },
    { mark: '·', name: 'Raised dot', usage: 'Colon or semicolon' },
    { mark: ';', name: 'Question mark', usage: 'Question mark (looks like English semicolon!)' }
  ];

  // ===== ACCENTS =====
  var accents = {
    types: [
      { name: 'Acute', mark: '´', desc: 'Raises musical pitch', syllables: 'ultima, penult, antepenult', on: 'short or long vowels' },
      { name: 'Grave', mark: '`', desc: 'Lowers pitch; replaces acute on ultima when next word follows without pause', syllables: 'ultima only', on: 'short or long vowels' },
      { name: 'Circumflex', mark: '῀', desc: 'Rises then falls in pitch', syllables: 'ultima, penult only', on: 'long vowels or diphthongs only' }
    ],
    syllableNames: [
      { name: 'Ultima', abbr: 'u', desc: 'Last syllable' },
      { name: 'Penult', abbr: 'p', desc: 'Second-to-last syllable' },
      { name: 'Antepenult', abbr: 'a', desc: 'Third-from-last syllable' }
    ],
    examples: [
      { word: 'ἄνθρωπος', accent: 'acute', syllable: 'antepenult' },
      { word: 'βιβλίον', accent: 'acute', syllable: 'penult' },
      { word: 'ψῡχή', accent: 'acute', syllable: 'ultima' },
      { word: 'νῆσος', accent: 'circumflex', syllable: 'penult' },
      { word: 'δρᾶμα', accent: 'circumflex', syllable: 'penult' },
      { word: 'εἰρήνη', accent: 'acute', syllable: 'penult' },
      { word: 'φιλοσοφίᾱ', accent: 'acute', syllable: 'penult' },
      { word: 'Σωκράτης', accent: 'acute', syllable: 'penult' },
      { word: 'Ὠκεανός', accent: 'acute', syllable: 'ultima' }
    ]
  };

  // ===== UNIT 1 VOCABULARY =====
  var unit1Vocab = [
    // Group 0: Vocab I (1st declension feminine)
    [
      { greek: 'ἀγορά', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'marketplace' },
      { greek: 'ψῡχή', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'soul' },
      { greek: 'μάχη', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'battle' },
      { greek: 'χώρᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'land, country' },
      { greek: 'τέχνη', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'art, skill, craft' }
    ],
    // Group 1: Vocab II (2nd declension masculine)
    [
      { greek: 'ἀδελφός', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'brother' },
      { greek: 'ἄνθρωπος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'man, human being' },
      { greek: 'θεός', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'god' },
      { greek: 'λόγος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'word, speech, story' },
      { greek: 'Ὅμηρος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'Homer (epic poet)' }
    ],
    // Group 2: Vocab III (2nd declension mixed + 1st)
    [
      { greek: 'νῆσος', article: 'ἡ', gender: 'feminine', declension: '2nd', english: 'island' },
      { greek: 'ὁδός', article: 'ἡ', gender: 'feminine', declension: '2nd', english: 'road, way' },
      { greek: 'βιβλίον', article: 'τό', gender: 'neuter', declension: '2nd', english: 'book' },
      { greek: 'δῶρον', article: 'τό', gender: 'neuter', declension: '2nd', english: 'gift' },
      { greek: 'ἔργον', article: 'τό', gender: 'neuter', declension: '2nd', english: 'work, deed' },
      { greek: 'οἰκίᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'house' }
    ]
  ];

  var unit1VocabAll = [];
  unit1Vocab.forEach(function(group) {
    group.forEach(function(w) { unit1VocabAll.push(w); });
  });

  // ===== UNIT 1 SENTENCES =====
  var unit1Sentences = [
    { greek: 'ὁ Ὅμηρος τὸν ἄνθρωπον παιδεύει.', english: 'Homer educates the man.' },
    { greek: 'ὁ Ὁμήρου ἀδελφὸς παιδεύει τὸν ἄνθρωπον.', english: 'Homer\'s brother educates the man.' },
    { greek: 'τὸν Ὅμηρον παιδεύει ὁ ἄνθρωπος.', english: 'The man educates Homer.' },
    { greek: 'Ὅμηρος τοὺς ἀνθρώπους παιδεύει.', english: 'Homer educates the men.' },
    { greek: 'ὁ θεὸς δῶρον τῷ Ὁμήρου ἀδελφῷ πέμπει εἰς τὴν χώρᾱν.', english: 'The god sends a gift to Homer\'s brother into the land.' },
    { greek: 'ὁ ἀδελφὸς τὰ δῶρα εἰς τὰς νήσους πέμπει.', english: 'The brother sends the gifts to the islands.' },
    { greek: 'ὁ ἐν τῇ νήσῳ ἄνθρωπος τοὺς ἀδελφοὺς εἰς μάχην πέμπει.', english: 'The man on the island sends the brothers into battle.' },
    { greek: 'ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.', english: 'The man educates his brother by word and by deed.' },
    { greek: 'ὦ ἄδελφε, ὁ θεὸς τοὺς ἀνθρώπους παιδεύει.', english: 'Brother, the god educates the men.' },
    { greek: 'ὁ θεὸς λόγους εἰς τὰς τῶν ἀνθρώπων ψῡχὰς πέμπει.', english: 'The god sends words into the souls of the men.' },
    { greek: 'ὁ Ὅμηρος βιβλίοις παιδεύει τὸν ἀδελφόν.', english: 'Homer educates his brother with books.' },
    { greek: 'ὁ ἀδελφὸς βιβλίον ἐκ τῆς ἀγορᾶς εἰς τὴν νῆσον πέμπει.', english: 'The brother sends a book from the marketplace to the island.' }
  ];

  // ===== UNIT 2 DATA =====

  var unit2Vocab = [
    // Group 0: All Unit 2 nouns
    [
      { greek: 'ἄγγελος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'messenger' },
      { greek: 'ζῷον', article: 'τό', gender: 'neuter', declension: '2nd', english: 'animal' },
      { greek: 'ξένος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'guest-friend, stranger' },
      { greek: 'πόλεμος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'war' },
      { greek: 'στέφανος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'crown, wreath' },
      { greek: 'φίλος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'friend' },
      { greek: 'φιλίᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'friendship' },
      { greek: 'χρῡσός', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'gold' }
    ]
  ];

  var unit2VocabAll = [];
  unit2Vocab.forEach(function(group) {
    group.forEach(function(w) { unit2VocabAll.push(w); });
  });

  var allVocabAll = unit1VocabAll.concat(unit2VocabAll);

  var unit2Verbs = [
    { verb: 'παιδεύω', meaning: 'educate, teach',
      pp: ['παιδεύω', 'παιδεύσω', 'ἐπαίδευσα', 'πεπαίδευκα', 'πεπαίδευμαι', 'ἐπαιδεύθην'],
      present: ['παιδεύω', 'παιδεύεις', 'παιδεύει', 'παιδεύομεν', 'παιδεύετε', 'παιδεύουσι(ν)'],
      imperfect: ['ἐπαίδευον', 'ἐπαίδευες', 'ἐπαίδευε(ν)', 'ἐπαιδεύομεν', 'ἐπαιδεύετε', 'ἐπαίδευον'],
      future: ['παιδεύσω', 'παιδεύσεις', 'παιδεύσει', 'παιδεύσομεν', 'παιδεύσετε', 'παιδεύσουσι(ν)'],
      aorist: ['ἐπαίδευσα', 'ἐπαίδευσας', 'ἐπαίδευσε(ν)', 'ἐπαιδεύσαμεν', 'ἐπαιδεύσατε', 'ἐπαίδευσαν'],
      presInf: 'παιδεύειν', aorInf: 'παιδεῦσαι' },
    { verb: 'κελεύω', meaning: 'order, command',
      pp: ['κελεύω', 'κελεύσω', 'ἐκέλευσα', 'κεκέλευκα', 'κεκέλευσμαι', 'ἐκελεύσθην'],
      present: ['κελεύω', 'κελεύεις', 'κελεύει', 'κελεύομεν', 'κελεύετε', 'κελεύουσι(ν)'],
      imperfect: ['ἐκέλευον', 'ἐκέλευες', 'ἐκέλευε(ν)', 'ἐκελεύομεν', 'ἐκελεύετε', 'ἐκέλευον'],
      future: ['κελεύσω', 'κελεύσεις', 'κελεύσει', 'κελεύσομεν', 'κελεύσετε', 'κελεύσουσι(ν)'],
      aorist: ['ἐκέλευσα', 'ἐκέλευσας', 'ἐκέλευσε(ν)', 'ἐκελεύσαμεν', 'ἐκελεύσατε', 'ἐκέλευσαν'],
      presInf: 'κελεύειν', aorInf: 'κελεῦσαι' },
    { verb: 'λύω', meaning: 'unbind, free, destroy',
      pp: ['λύω', 'λύσω', 'ἔλῡσα', 'λέλυκα', 'λέλυμαι', 'ἐλύθην'],
      present: ['λύω', 'λύεις', 'λύει', 'λύομεν', 'λύετε', 'λύουσι(ν)'],
      imperfect: ['ἔλῡον', 'ἔλῡες', 'ἔλῡε(ν)', 'ἐλύομεν', 'ἐλύετε', 'ἔλῡον'],
      future: ['λύσω', 'λύσεις', 'λύσει', 'λύσομεν', 'λύσετε', 'λύσουσι(ν)'],
      aorist: ['ἔλῡσα', 'ἔλῡσας', 'ἔλῡσε(ν)', 'ἐλύσαμεν', 'ἐλύσατε', 'ἔλῡσαν'],
      presInf: 'λύειν', aorInf: 'λῦσαι' },
    { verb: 'πέμπω', meaning: 'send',
      pp: ['πέμπω', 'πέμψω', 'ἔπεμψα', 'πέπομφα', 'πέπεμμαι', 'ἐπέμφθην'],
      present: ['πέμπω', 'πέμπεις', 'πέμπει', 'πέμπομεν', 'πέμπετε', 'πέμπουσι(ν)'],
      imperfect: ['ἔπεμπον', 'ἔπεμπες', 'ἔπεμπε(ν)', 'ἐπέμπομεν', 'ἐπέμπετε', 'ἔπεμπον'],
      future: ['πέμψω', 'πέμψεις', 'πέμψει', 'πέμψομεν', 'πέμψετε', 'πέμψουσι(ν)'],
      aorist: ['ἔπεμψα', 'ἔπεμψας', 'ἔπεμψε(ν)', 'ἐπέμψαμεν', 'ἐπέμψατε', 'ἔπεμψαν'],
      presInf: 'πέμπειν', aorInf: 'πέμψαι' }
  ];

  var personLabels = ['1st sing.', '2nd sing.', '3rd sing.', '1st pl.', '2nd pl.', '3rd pl.'];

  var unit2Particles = [
    { greek: 'ἀπό', english: 'from, away from (+ gen.)' },
    { greek: 'ἆρα', english: 'introduces a question' },
    { greek: 'γάρ', english: 'for (postpositive conj.)' },
    { greek: 'δέ', english: 'but, and (postpositive conj.)' },
    { greek: 'ἕξ', english: 'six' },
    { greek: 'εὖ', english: 'well' },
    { greek: 'ἤ', english: 'or; ἤ...ἤ = either...or' },
    { greek: 'νῦν', english: 'now' },
    { greek: 'οὐ, οὐκ, οὐχ', english: 'not' },
    { greek: 'παρά', english: 'from / at / to the side of' },
    { greek: 'πέντε', english: 'five' },
    { greek: 'πρό', english: 'before, in front of (+ gen.)' }
  ];

  var unit2Cognates = [
    ['ἄγγελος', 'angel (messenger of God)'],
    ['ἀπό', 'apogee (farthest from earth)'],
    ['ἕξ', 'hexagon (six-sided)'],
    ['εὖ', 'eugenics (well-produced)'],
    ['ζῷον', 'zoology (study of animals)'],
    ['λύω', 'analysis (loosening apart)'],
    ['ξένος', 'xenophobia (fear of strangers)'],
    ['οὐ', 'utopia (no-place)'],
    ['πέντε', 'pentagon (five-sided)'],
    ['πόλεμος', 'polemic (warlike speech)'],
    ['πρό', 'prologue (spoken before)'],
    ['στέφανος', 'Stephen (crowned one)'],
    ['φίλος', 'philosophy (love of wisdom)'],
    ['χρῡσός', 'chrysanthemum (golden flower)']
  ];

  var unit2Sentences = [
    { greek: 'οἱ θεοὶ δῶρα ἔπεμπον εἰς τὴν χώρᾱν.', english: 'The gods used to send gifts into the land.' },
    { greek: 'πέντε βιβλία τοῖς ξένοις ἔπεμψεν ὁ Ὅμηρος.', english: 'Homer sent five books to the guest-friends.' },
    { greek: 'ἆρα λύσετε καὶ τὴν τῆς θεοῦ φιλίᾱν;', english: 'Will you destroy even the friendship of the goddess?' },
    { greek: 'τοῖς μὲν ξένοις στεφάνους πέμψομεν, τοῖς δὲ φίλοις βιβλία.', english: 'To the strangers we shall send crowns, but to the friends, books.' },
    { greek: 'ὁ θεὸς τὸν Ὅμηρον λῦσαι τοὺς ἀνθρώπους ἐκέλευσεν.', english: 'The god ordered Homer to free the men.' },
    { greek: 'ὦ ξένε, ζῷα πέμπεις εἰς ἀγορὰν ἢ οὔ;', english: 'Stranger, are you sending animals to the marketplace or not?' },
    { greek: 'τοὺς πολέμους ἢ λόγοις ἢ ἔργοις ἐλύομεν.', english: 'We used to resolve the wars either by words or by deeds.' },
    { greek: 'ὁ Ὅμηρος τοὺς ἐν τῇ οἰκίᾳ φίλους εὖ παιδεύσει.', english: 'Homer will educate the friends in the house well.' },
    { greek: 'ἔργῳ, οὐ λόγῳ, τοὺς φίλους ἔλῡον.', english: 'By deed, not by word, I used to free my friends.' },
    { greek: 'οἱ ἕξ ἀδελφοὶ χρῡσοῦ στέφανον ἔπεμπον παρὰ τὸν Ὅμηρον.', english: 'The six brothers were sending a crown of gold to Homer.' }
  ];

  // ===== LESSON DEFINITIONS =====
  var lessons = [
    // ---- Section 1: The Alphabet ----
    // Lesson 1: Letters I (Α Β Γ Δ Ε)
    {
      id: 1,
      title: 'Letters I',
      subtitle: 'Α Β Γ Δ Ε',
      section: 'The Alphabet',
      icon: 'Α',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Letters: Group 1',
          cards: [
            {
              html: '<p>Welcome to Ancient Greek!</p><p>The Greek alphabet has <strong>24 letters</strong>. Let\'s learn the first five.</p>'
            },
            {
              html: function() {
                return buildLetterTable(alphaGroups[0]);
              }
            }
          ]
        },
        // MC: name identification
        { type: 'mc-name', group: 0 },
        { type: 'mc-name', group: 0 },
        { type: 'mc-name', group: 0 },
        // MC: letter identification
        { type: 'mc-letter', group: 0 },
        { type: 'mc-letter', group: 0 },
        // MC: sound identification
        { type: 'mc-sound', group: 0 },
        { type: 'mc-sound', group: 0 },
        { type: 'mc-sound', group: 0 },
        // Matching
        { type: 'match', group: 0, matchType: 'name' },
        // More MC
        { type: 'mc-letter', group: 0 },
        { type: 'mc-name', group: 0 },
        { type: 'mc-sound', group: 0 },
        // Matching sound
        { type: 'match', group: 0, matchType: 'sound' },
        { type: 'mc-name', group: 0 },
        { type: 'mc-letter', group: 0 }
      ]
    },

    // Lesson 2: Letters II (Ζ Η Θ Ι Κ)
    {
      id: 2,
      title: 'Letters II',
      subtitle: 'Ζ Η Θ Ι Κ',
      section: 'The Alphabet',
      icon: 'Ζ',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Letters: Group 2',
          cards: [
            {
              html: '<p>Five more letters! Notice that <strong>Η (eta)</strong> is always long and <strong>Ζ (zeta)</strong> is a double consonant = dz.</p>'
            },
            {
              html: function() {
                return buildLetterTable(alphaGroups[1]);
              }
            }
          ]
        },
        { type: 'mc-name', group: 1 },
        { type: 'mc-name', group: 1 },
        { type: 'mc-name', group: 1 },
        { type: 'mc-letter', group: 1 },
        { type: 'mc-letter', group: 1 },
        { type: 'mc-sound', group: 1 },
        { type: 'mc-sound', group: 1 },
        { type: 'mc-sound', group: 1 },
        { type: 'match', group: 1, matchType: 'name' },
        { type: 'mc-letter', group: 1 },
        { type: 'mc-name', group: 1 },
        { type: 'mc-sound', group: 1 },
        { type: 'match', group: 1, matchType: 'sound' },
        { type: 'mc-name', group: 1 },
        { type: 'mc-letter', group: 1 }
      ]
    },

    // Lesson 3: Letters III (Λ Μ Ν Ξ Ο)
    {
      id: 3,
      title: 'Letters III',
      subtitle: 'Λ Μ Ν Ξ Ο',
      section: 'The Alphabet',
      icon: 'Λ',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Letters: Group 3',
          cards: [
            {
              html: '<p>Five more! <strong>Ξ (xi)</strong> is a double consonant = ks, and <strong>Ο (omicron)</strong> is always short.</p>'
            },
            {
              html: function() {
                return buildLetterTable(alphaGroups[2]);
              }
            }
          ]
        },
        { type: 'mc-name', group: 2 },
        { type: 'mc-name', group: 2 },
        { type: 'mc-name', group: 2 },
        { type: 'mc-letter', group: 2 },
        { type: 'mc-letter', group: 2 },
        { type: 'mc-sound', group: 2 },
        { type: 'mc-sound', group: 2 },
        { type: 'mc-sound', group: 2 },
        { type: 'match', group: 2, matchType: 'name' },
        { type: 'mc-letter', group: 2 },
        { type: 'mc-name', group: 2 },
        { type: 'mc-sound', group: 2 },
        { type: 'match', group: 2, matchType: 'sound' },
        { type: 'mc-name', group: 2 },
        { type: 'mc-letter', group: 2 }
      ]
    },

    // Lesson 4: Letters IV (Π Ρ Σ Τ Υ)
    {
      id: 4,
      title: 'Letters IV',
      subtitle: 'Π Ρ Σ Τ Υ',
      section: 'The Alphabet',
      icon: 'Π',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Letters: Group 4',
          cards: [
            {
              html: '<p>Almost there! Note that <strong>Σ (sigma)</strong> has two lowercase forms: σ in the middle of words, and ς at the end.</p>'
            },
            {
              html: function() {
                return buildLetterTable(alphaGroups[3]);
              }
            }
          ]
        },
        { type: 'mc-name', group: 3 },
        { type: 'mc-name', group: 3 },
        { type: 'mc-name', group: 3 },
        { type: 'mc-letter', group: 3 },
        { type: 'mc-letter', group: 3 },
        { type: 'mc-sound', group: 3 },
        { type: 'mc-sound', group: 3 },
        { type: 'mc-sound', group: 3 },
        { type: 'match', group: 3, matchType: 'name' },
        { type: 'mc-letter', group: 3 },
        { type: 'mc-name', group: 3 },
        { type: 'mc-sound', group: 3 },
        { type: 'match', group: 3, matchType: 'sound' },
        { type: 'mc-name', group: 3 },
        { type: 'mc-letter', group: 3 }
      ]
    },

    // Lesson 5: Letters V (Φ Χ Ψ Ω)
    {
      id: 5,
      title: 'Letters V',
      subtitle: 'Φ Χ Ψ Ω',
      section: 'The Alphabet',
      icon: 'Φ',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Letters: Group 5',
          cards: [
            {
              html: '<p>The last four letters! <strong>Ψ (psi)</strong> is a double consonant = ps, and <strong>Ω (omega)</strong> is always long.</p>'
            },
            {
              html: function() {
                return buildLetterTable(alphaGroups[4]);
              }
            }
          ]
        },
        { type: 'mc-name', group: 4 },
        { type: 'mc-name', group: 4 },
        { type: 'mc-letter', group: 4 },
        { type: 'mc-letter', group: 4 },
        { type: 'mc-sound', group: 4 },
        { type: 'mc-sound', group: 4 },
        { type: 'match', group: 4, matchType: 'name' },
        { type: 'mc-letter', group: 4 },
        { type: 'mc-name', group: 4 },
        { type: 'mc-sound', group: 4 },
        { type: 'mc-name', group: 4 },
        { type: 'mc-letter', group: 4 },
        { type: 'mc-sound', group: 4 },
        { type: 'mc-name', group: 4 }
      ]
    },

    // Lesson 6: Full Alphabet Review
    {
      id: 6,
      title: 'Full Review',
      subtitle: 'All 24 Letters',
      section: 'The Alphabet',
      icon: 'Ω',
      exercises: [
        { type: 'mc-name', group: 'all' },
        { type: 'mc-name', group: 'all' },
        { type: 'mc-letter', group: 'all' },
        { type: 'mc-letter', group: 'all' },
        { type: 'mc-sound', group: 'all' },
        { type: 'mc-sound', group: 'all' },
        { type: 'match', group: 'all', matchType: 'name' },
        { type: 'mc-name', group: 'all' },
        { type: 'mc-letter', group: 'all' },
        { type: 'mc-sound', group: 'all' },
        { type: 'match', group: 'all', matchType: 'sound' },
        { type: 'mc-name', group: 'all' },
        { type: 'mc-letter', group: 'all' },
        { type: 'mc-sound', group: 'all' },
        { type: 'match', group: 'all', matchType: 'name' },
        { type: 'mc-name', group: 'all' },
        { type: 'mc-letter', group: 'all' }
      ]
    },

    // ---- Section 2: Introduction ----
    // Lesson 7: Breathing Marks
    {
      id: 7,
      title: 'Breathing Marks',
      subtitle: 'Rough & Smooth',
      section: 'Introduction',
      icon: '῾',
      exercises: [
        {
          type: 'intro',
          title: 'Breathing Marks',
          cards: [
            {
              html: '<p>Greek has an <em>h</em>-sound at the start of some words. It\'s shown by a <strong>breathing mark</strong> over the initial vowel.</p>'
            },
            {
              html: '<p>The <strong>rough breathing</strong> <span class="greek" style="font-size:28px">῾</span> = an <em>h</em>-sound before the vowel.</p><div class="info-box"><span class="greek" style="font-size:22px">ἑξάγωνον</span> → <strong>h</strong>exagon</div>'
            },
            {
              html: '<p>The <strong>smooth breathing</strong> <span class="greek" style="font-size:28px">᾿</span> = <em>no h</em>-sound. It marks the absence of the h.</p><div class="info-box"><span class="greek" style="font-size:22px">ὀλιγαρχίᾱ</span> → oligarchy</div>'
            },
            {
              html: '<p><strong>Rules:</strong></p><ul style="text-align:left;line-height:2"><li>All words starting with a vowel <strong>must</strong> have a breathing mark</li><li>All words starting with <strong>υ</strong> (upsilon) have rough breathing</li><li>All words starting with <strong>ρ</strong> (rho) have rough breathing</li></ul>'
            }
          ]
        },
        // Identify rough vs smooth
        {
          type: 'mc-translate',
          prompt: 'Which breathing mark does this word have?',
          display: 'ἑξάγωνον',
          correct: 'Rough breathing (h-sound)',
          options: ['Rough breathing (h-sound)', 'Smooth breathing (no h)', 'No breathing mark needed', 'Both rough and smooth']
        },
        {
          type: 'mc-translate',
          prompt: 'Which breathing mark does this word have?',
          display: 'ὀλιγαρχίᾱ',
          correct: 'Smooth breathing (no h)',
          options: ['Rough breathing (h-sound)', 'Smooth breathing (no h)', 'No breathing mark needed', 'It changes depending on dialect']
        },
        {
          type: 'mc-translate',
          prompt: 'Which breathing mark does this word have?',
          display: 'ὑπόθεσις',
          correct: 'Rough breathing (h-sound)',
          options: ['Rough breathing (h-sound)', 'Smooth breathing (no h)', 'No breathing mark', 'Circumflex breathing']
        },
        {
          type: 'mc-translate',
          prompt: 'Words beginning with υ (upsilon) always have:',
          display: 'ὑπόθεσις → hypothesis',
          correct: 'Rough breathing',
          options: ['Rough breathing', 'Smooth breathing', 'No breathing mark', 'Either rough or smooth']
        },
        {
          type: 'mc-translate',
          prompt: 'Words beginning with ρ (rho) always have:',
          display: 'ῥητορική → rhetoric',
          correct: 'Rough breathing',
          options: ['Rough breathing', 'Smooth breathing', 'No breathing mark', 'Either rough or smooth']
        },
        {
          type: 'mc-translate',
          prompt: 'Which word has a ROUGH breathing?',
          display: '',
          correct: 'ἱστορίᾱ',
          options: ['ἱστορίᾱ', 'ἐπιστολή', 'ἄνθρωπος', 'ὀλιγαρχίᾱ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Which word has a SMOOTH breathing?',
          display: '',
          correct: 'ἄνθρωπος',
          options: ['ἄνθρωπος', 'ἑξάγωνον', 'ὑπόθεσις', 'ῥητορική'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'True or false: The rough breathing is pronounced.',
          display: 'ῥητορική',
          correct: 'False — it is silent',
          options: ['True — it adds an h-sound', 'False — it is silent', 'Only in Attic dialect', 'Only before vowels']
        },
        {
          type: 'match',
          pairs: [
            ['ἑξάγωνον', 'hexagon'],
            ['ὀλιγαρχίᾱ', 'oligarchy'],
            ['ὑπόθεσις', 'hypothesis'],
            ['Ἠλέκτρᾱ', 'Elektra'],
            ['ῥητορική', 'rhetoric']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'When a word is capitalized, where is the breathing mark written?',
          display: 'Ἑλένη = Helen',
          correct: 'Before the initial vowel',
          options: ['Before the initial vowel', 'After the initial vowel', 'Above the initial vowel', 'It is omitted']
        },
        {
          type: 'mc-translate',
          prompt: 'Which statement is TRUE?',
          display: '',
          correct: 'All vowel-initial words must have a breathing mark',
          options: ['All vowel-initial words must have a breathing mark', 'Only rough breathings are written', 'Breathing marks are optional', 'Only long vowels get breathing marks']
        },
        {
          type: 'match',
          pairs: [
            ['Ἑλένη', 'Helen'],
            ['ἑξάγωνον', 'hexagon'],
            ['ὑπόθεσις', 'hypothesis'],
            ['ῥητορική', 'rhetoric'],
            ['ὀλιγαρχίᾱ', 'oligarchy']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which consonant can take a breathing mark?',
          display: '',
          correct: 'ρ (rho)',
          options: ['ρ (rho)', 'σ (sigma)', 'γ (gamma)', 'ν (nu)']
        },
        {
          type: 'mc-translate',
          prompt: 'Which word has a ROUGH breathing?',
          display: '',
          correct: 'Ἡρακλῆς',
          options: ['Ἡρακλῆς', 'Ἠλέκτρᾱ', 'ἐπιστολή', 'ὀλιγαρχίᾱ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'The smooth breathing indicates:',
          display: '',
          correct: 'The absence of the h-sound',
          options: ['The absence of the h-sound', 'A long vowel', 'A short vowel', 'An aspirated consonant']
        }
      ]
    },

    // Lesson 8: Long & Short Vowels
    {
      id: 8,
      title: 'Long & Short Vowels',
      subtitle: 'Vowel Length',
      section: 'Introduction',
      icon: 'η',
      exercises: [
        {
          type: 'intro',
          title: 'Long & Short Vowels',
          cards: [
            {
              html: '<p>Greek vowels come in <strong>long</strong> and <strong>short</strong> pairs. Long vowels took about twice as long to say.</p>'
            },
            {
              html: '<p><strong>Always long:</strong> <span class="greek" style="font-size:28px">η</span> and <span class="greek" style="font-size:28px">ω</span></p><p><strong>Always short:</strong> <span class="greek" style="font-size:28px">ε</span> and <span class="greek" style="font-size:28px">ο</span></p><p><strong>Either long or short:</strong> <span class="greek" style="font-size:28px">α, ι, υ</span></p>'
            },
            {
              html: '<p>When α, ι, or υ are long, a <strong>macron</strong> (¯) is placed above them:</p><p class="greek" style="font-size:32px;margin-top:12px">ᾱ &nbsp; ῑ &nbsp; ῡ</p><p style="margin-top:12px">Short vowels and always-long vowels (η, ω) are not marked.</p><p style="margin-top:12px"><em>Note: The macron is only used in this app to help learn pronunciation. It is not present in actual Greek texts.</em></p>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the length of η (eta)?',
          display: 'η',
          displayGreek: true,
          correct: 'Always long',
          options: ['Always long', 'Always short', 'Either long or short', 'It depends on accent']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the length of ε (epsilon)?',
          display: 'ε',
          displayGreek: true,
          correct: 'Always short',
          options: ['Always long', 'Always short', 'Either long or short', 'It depends on position']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the length of ω (omega)?',
          display: 'ω',
          displayGreek: true,
          correct: 'Always long',
          options: ['Always long', 'Always short', 'Either long or short', 'It varies']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the length of ο (omicron)?',
          display: 'ο',
          displayGreek: true,
          correct: 'Always short',
          options: ['Always long', 'Always short', 'Either long or short', 'It depends on accent']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the length of α (alpha)?',
          display: 'α',
          displayGreek: true,
          correct: 'Either long or short',
          options: ['Always long', 'Always short', 'Either long or short', 'Always medium']
        },
        {
          type: 'mc-translate',
          prompt: 'What does a macron (¯) indicate?',
          display: 'ᾱ ῑ ῡ',
          displayGreek: true,
          correct: 'The vowel is long',
          options: ['The vowel is long', 'The vowel is short', 'The vowel is accented', 'The vowel is silent']
        },
        {
          type: 'mc-translate',
          prompt: 'Which vowel is always SHORT?',
          display: '',
          correct: 'ο (omicron)',
          options: ['ο (omicron)', 'η (eta)', 'α (alpha)', 'ω (omega)']
        },
        {
          type: 'mc-translate',
          prompt: 'Which vowels can be either long or short?',
          display: '',
          correct: 'α, ι, υ',
          options: ['α, ι, υ', 'η, ω', 'ε, ο', 'α, ε, ο']
        },
        {
          type: 'match',
          pairs: [
            ['η (eta)', 'Always long'],
            ['ε (epsilon)', 'Always short'],
            ['α (alpha)', 'Long or short'],
            ['ω (omega)', 'Always long'],
            ['ο (omicron)', 'Always short']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The long form of α is written as:',
          display: '',
          correct: 'ᾱ (with macron)',
          options: ['ᾱ (with macron)', 'ά (with accent)', 'ᾳ (with subscript)', 'ἁ (with breathing)']
        },
        {
          type: 'match',
          pairs: [
            ['ι (iota)', 'Long or short'],
            ['υ (upsilon)', 'Long or short'],
            ['ε (epsilon)', 'Always short'],
            ['η (eta)', 'Always long'],
            ['ω (omega)', 'Always long']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which pair contains only ALWAYS LONG vowels?',
          display: '',
          correct: 'η and ω',
          options: ['η and ω', 'ε and ο', 'α and ι', 'υ and η']
        },
        {
          type: 'mc-translate',
          prompt: 'Why is η not marked with a macron?',
          display: '',
          correct: 'Because it is always long — no need to mark it',
          options: ['Because it is always long — no need to mark it', 'Because it is always short', 'Because macrons are only for consonants', 'Because it is a diphthong']
        },
        {
          type: 'mc-translate',
          prompt: 'Which pair contains only ALWAYS SHORT vowels?',
          display: '',
          correct: 'ε and ο',
          options: ['ε and ο', 'η and ω', 'α and ε', 'ι and υ']
        }
      ]
    },

    // Lesson 9: Diphthongs
    {
      id: 9,
      title: 'Diphthongs',
      subtitle: 'Vowel Pairs',
      section: 'Introduction',
      icon: 'αι',
      exercises: [
        {
          type: 'intro',
          title: 'Diphthongs',
          cards: [
            {
              html: '<p>A <strong>diphthong</strong> is a pair of vowels pronounced together as one continuous sound. All diphthongs count as <strong>long</strong>.</p>'
            },
            {
              html: '<table class="intro-table"><tr><th>Diphthong</th><th>Sounds like</th><th>Example</th></tr>' +
                diphthongs.map(function(d) {
                  return '<tr><td class="greek">' + d.letters + '</td><td>' + (d.pronHtml || d.pron) + '</td><td class="greek">' + d.example + '</td></tr>';
                }).join('') + '</table>'
            },
            {
              html: '<p><strong>Notes:</strong></p><ul style="text-align:left;line-height:2"><li>ει and η are pronounced alike</li><li>ου and long ῡ are pronounced alike</li><li>Breathing marks go over the <strong>second</strong> letter of a diphthong</li></ul>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How is αι pronounced?',
          display: 'αι',
          displayGreek: true,
          correct: 'Like "defy" or "fine"',
          options: ['Like "defy" or "fine"', 'Like "wait" or "bait"', 'Like "boy"', 'Like "boot"'],
          optionsHtml: ['Like "def<strong>y</strong>" or "f<strong>i</strong>ne"', 'Like "w<strong>ai</strong>t" or "b<strong>ai</strong>t"', 'Like "b<strong>oy</strong>"', 'Like "b<strong>oo</strong>t"']
        },
        {
          type: 'mc-translate',
          prompt: 'How is ου pronounced?',
          display: 'ου',
          displayGreek: true,
          correct: 'Like "boot"',
          options: ['Like "boot"', 'Like "boy"', 'Like "defy"', 'Like "scow"'],
          optionsHtml: ['Like "b<strong>oo</strong>t"', 'Like "b<strong>oy</strong>"', 'Like "def<strong>y</strong>"', 'Like "sc<strong>ow</strong>"']
        },
        {
          type: 'mc-translate',
          prompt: 'How is οι pronounced?',
          display: 'οι',
          displayGreek: true,
          correct: 'Like "boy"',
          options: ['Like "boy"', 'Like "boot"', 'Like "fine"', 'Like "wait"'],
          optionsHtml: ['Like "b<strong>oy</strong>"', 'Like "b<strong>oo</strong>t"', 'Like "f<strong>i</strong>ne"', 'Like "w<strong>ai</strong>t"']
        },
        {
          type: 'mc-translate',
          prompt: 'How is αυ pronounced?',
          display: 'αυ',
          displayGreek: true,
          correct: 'Like "scow" or "plow"',
          options: ['Like "scow" or "plow"', 'Like "boot"', 'Like "boy"', 'Like "defy"'],
          optionsHtml: ['Like "sc<strong>ow</strong>" or "pl<strong>ow</strong>"', 'Like "b<strong>oo</strong>t"', 'Like "b<strong>oy</strong>"', 'Like "def<strong>y</strong>"']
        },
        {
          type: 'mc-translate',
          prompt: 'Are diphthongs counted as long or short?',
          display: '',
          correct: 'Always long',
          options: ['Always long', 'Always short', 'It depends on the vowels', 'They have no length']
        },
        {
          type: 'mc-translate',
          prompt: 'Where does the breathing mark go on a diphthong?',
          display: 'αἰθήρ',
          displayGreek: true,
          correct: 'Over the second letter',
          options: ['Over the second letter', 'Over the first letter', 'Before the diphthong', 'After the diphthong']
        },
        {
          type: 'match',
          pairs: [
            ['αι', '"def<strong>y</strong>"'],
            ['ει', '"w<strong>ai</strong>t"'],
            ['οι', '"b<strong>oy</strong>"'],
            ['ου', '"b<strong>oo</strong>t"'],
            ['αυ', '"pl<strong>ow</strong>"']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which diphthong sounds the same as η (eta)?',
          display: '',
          correct: 'ει',
          options: ['ει', 'αι', 'οι', 'ου']
        },
        {
          type: 'mc-translate',
          prompt: 'Which diphthong sounds the same as long ῡ (upsilon)?',
          display: '',
          correct: 'ου',
          options: ['ου', 'ευ', 'αυ', 'υι']
        },
        {
          type: 'mc-translate',
          prompt: 'How many syllables does αὐτόνομος have?',
          display: 'αὐ-τό-νο-μος',
          displayGreek: true,
          correct: '4 syllables',
          options: ['4 syllables', '3 syllables', '5 syllables', '6 syllables']
        },
        {
          type: 'match',
          pairs: [
            ['ευ', 'ε + υ together'],
            ['ηυ', 'η + υ together'],
            ['υι', '"<strong>wi</strong>t"'],
            ['αι', '"f<strong>i</strong>ne"'],
            ['οι', '"b<strong>oy</strong>"']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'A Greek word has as many syllables as it has:',
          display: '',
          correct: 'Vowels or diphthongs',
          options: ['Vowels or diphthongs', 'Consonants', 'Letters', 'Breathing marks']
        },
        {
          type: 'mc-translate',
          prompt: 'Which is a real Greek diphthong?',
          display: '',
          correct: 'ευ',
          options: ['ευ', 'εα', 'ωα', 'ηο']
        },
        {
          type: 'mc-translate',
          prompt: 'Is ει a diphthong or two separate vowels?',
          display: 'εἰρήνη',
          displayGreek: true,
          correct: 'A diphthong — one syllable',
          options: ['A diphthong — one syllable', 'Two separate vowels — two syllables', 'It depends on the word', 'Neither']
        }
      ]
    },

    // Lesson 10: Iota Subscript & Adscript
    {
      id: 10,
      title: 'Iota Subscript',
      subtitle: 'ᾳ ῃ ῳ',
      section: 'Introduction',
      icon: 'ῃ',
      exercises: [
        {
          type: 'intro',
          title: 'Iota Subscript & Adscript',
          cards: [
            {
              html: '<p>When the long vowels <span class="greek" style="font-size:24px">ᾱ, η, ω</span> combine with short ι, the iota is written <strong>beneath</strong> as an <strong>iota subscript</strong>.</p><p class="greek" style="font-size:36px;margin-top:16px">ᾳ &nbsp; ῃ &nbsp; ῳ</p><p style="margin-top:12px">The iota subscript is <strong>not pronounced</strong>.</p>'
            },
            {
              html: '<p>When the vowel is <strong>capitalized</strong>, the iota is written <strong>after</strong> it as an <strong>iota adscript</strong> (also not pronounced).</p><div class="info-box"><span class="greek" style="font-size:22px">ᾠδή</span> → iota subscript<br><span class="greek" style="font-size:22px">Ὠιδή</span> → iota adscript (capitalized)</div>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the small iota written beneath a vowel called?',
          display: 'ᾳ  ῃ  ῳ',
          displayGreek: true,
          correct: 'Iota subscript',
          options: ['Iota subscript', 'Iota adscript', 'Breathing mark', 'Macron']
        },
        {
          type: 'mc-translate',
          prompt: 'Is the iota subscript pronounced?',
          display: 'ᾠδή',
          displayGreek: true,
          correct: 'No, it is silent',
          options: ['No, it is silent', 'Yes, as a short i', 'Yes, as a long i', 'Only in some dialects']
        },
        {
          type: 'mc-translate',
          prompt: 'Which vowels can take an iota subscript?',
          display: '',
          correct: 'ᾱ, η, ω (long vowels only)',
          options: ['ᾱ, η, ω (long vowels only)', 'ε, ο (short vowels)', 'All vowels', 'Only α']
        },
        {
          type: 'mc-translate',
          prompt: 'When the vowel is capitalized, the iota is written:',
          display: 'Ὠιδή',
          displayGreek: true,
          correct: 'After the vowel (adscript)',
          options: ['After the vowel (adscript)', 'Before the vowel', 'It is omitted', 'Below the vowel still']
        },
        {
          type: 'mc-translate',
          prompt: 'Which word has an iota subscript?',
          display: '',
          correct: 'ᾠδή',
          options: ['ᾠδή', 'οἶνος', 'αἰθήρ', 'εἰρήνη'],
          optionsGreek: true
        },
        {
          type: 'match',
          pairs: [
            ['ᾳ', 'alpha + iota subscript'],
            ['ῃ', 'eta + iota subscript'],
            ['ῳ', 'omega + iota subscript'],
            ['ᾠδή', 'subscript (lowercase)'],
            ['Ὠιδή', 'adscript (capitalized)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the iota adscript?',
          display: '',
          correct: 'Iota written after a capitalized long vowel',
          options: ['Iota written after a capitalized long vowel', 'Iota written below a vowel', 'A breathing mark', 'A type of accent']
        },
        {
          type: 'mc-translate',
          prompt: 'Contrast: which has a diphthong (not a subscript)?',
          display: '',
          correct: 'Εἰλείθυια',
          options: ['Εἰλείθυια', 'ᾠδή', 'Ὠιδή', 'ᾳ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Can ε (epsilon) take an iota subscript?',
          display: '',
          correct: 'No — only long vowels ᾱ, η, ω can',
          options: ['No — only long vowels ᾱ, η, ω can', 'Yes, as ει', 'Yes, always', 'Only in Koine Greek']
        },
        {
          type: 'match',
          pairs: [
            ['Iota subscript', 'written beneath'],
            ['Iota adscript', 'written after (capitals)'],
            ['Diphthong', 'two vowels, one sound'],
            ['Macron', 'marks long α, ι, υ'],
            ['Breathing mark', 'rough or smooth']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'True or false: the iota adscript is pronounced.',
          display: '',
          correct: 'False — it is silent, just like the subscript',
          options: ['False — it is silent, just like the subscript', 'True — it is pronounced', 'True — but only when capitalized', 'False — it doesn\'t exist']
        }
      ]
    },

    // Lesson 11: Consonant Classes
    {
      id: 11,
      title: 'Consonant Classes',
      subtitle: 'Labials, Dentals, Palatals',
      section: 'Introduction',
      icon: 'π',
      exercises: [
        {
          type: 'intro',
          title: 'Consonant Classes',
          cards: [
            {
              html: '<p>Greek consonants are classified by where in the mouth they are formed:</p><div class="info-box"><p><strong>Labials</strong> (lips): <span class="greek" style="font-size:22px">π β φ</span></p><p><strong>Dentals</strong> (teeth): <span class="greek" style="font-size:22px">τ δ θ</span></p><p><strong>Palatals</strong> (palate): <span class="greek" style="font-size:22px">κ γ χ</span></p></div>'
            },
            {
              html: '<p><strong>Double consonants</strong> — two sounds in one letter:</p><div class="info-box"><p><span class="greek" style="font-size:22px">ζ</span> = dz</p><p><span class="greek" style="font-size:22px">ξ</span> = ks</p><p><span class="greek" style="font-size:22px">ψ</span> = ps</p></div>'
            },
            {
              html: '<p>When a labial or palatal combines with σ:</p><div class="info-box"><p>Labial + σ → <span class="greek" style="font-size:22px">ψ</span> (π+σ, β+σ, φ+σ = ψ)</p><p>Palatal + σ → <span class="greek" style="font-size:22px">ξ</span> (κ+σ, γ+σ, χ+σ = ξ)</p></div>'
            },
            {
              html: '<p><strong>Gamma before palatals and ξ</strong> = "ng" sound:</p><div class="info-box"><p><span class="greek" style="font-size:22px">γγ</span> = "anger" — <span class="greek">ἄγγελος</span></p><p><span class="greek" style="font-size:22px">γκ</span> = "banker" — <span class="greek">ἄγκῡρα</span></p><p><span class="greek" style="font-size:22px">γξ</span> = "larynx" — <span class="greek">λάρυγξ</span></p><p><span class="greek" style="font-size:22px">γχ</span> = "lunkhead" — <span class="greek">Ὀξύρρυγχος</span></p></div>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'π, β, φ are classified as:',
          display: 'π β φ',
          displayGreek: true,
          correct: 'Labials (formed with the lips)',
          options: ['Labials (formed with the lips)', 'Dentals (formed with the teeth)', 'Palatals (formed with the palate)', 'Double consonants']
        },
        {
          type: 'mc-translate',
          prompt: 'τ, δ, θ are classified as:',
          display: 'τ δ θ',
          displayGreek: true,
          correct: 'Dentals (formed with the teeth)',
          options: ['Labials (formed with the lips)', 'Dentals (formed with the teeth)', 'Palatals (formed with the palate)', 'Vowels']
        },
        {
          type: 'mc-translate',
          prompt: 'κ, γ, χ are classified as:',
          display: 'κ γ χ',
          displayGreek: true,
          correct: 'Palatals (formed with the palate)',
          options: ['Labials (formed with the lips)', 'Dentals (formed with the teeth)', 'Palatals (formed with the palate)', 'Aspirates only']
        },
        {
          type: 'mc-translate',
          prompt: 'What sound does ζ (zeta) represent?',
          display: 'ζ',
          displayGreek: true,
          correct: 'dz (a double consonant)',
          options: ['dz (a double consonant)', 'z (like "zoo")', 'ks', 'ps']
        },
        {
          type: 'mc-translate',
          prompt: 'What sound does ξ (xi) represent?',
          display: 'ξ',
          displayGreek: true,
          correct: 'ks (a double consonant)',
          options: ['ks (a double consonant)', 'ps', 'dz', 'sh']
        },
        {
          type: 'mc-translate',
          prompt: 'What sound does ψ (psi) represent?',
          display: 'ψ',
          displayGreek: true,
          correct: 'ps (a double consonant)',
          options: ['ps (a double consonant)', 'ks', 'dz', 'ts']
        },
        {
          type: 'mc-translate',
          prompt: 'What does labial + σ produce?',
          display: 'π + σ = ?',
          correct: 'ψ',
          options: ['ψ', 'ξ', 'ζ', 'σσ']
        },
        {
          type: 'mc-translate',
          prompt: 'What does palatal + σ produce?',
          display: 'κ + σ = ?',
          correct: 'ξ',
          options: ['ξ', 'ψ', 'ζ', 'κσ']
        },
        {
          type: 'match',
          pairs: [
            ['π β φ', 'Labials'],
            ['τ δ θ', 'Dentals'],
            ['κ γ χ', 'Palatals'],
            ['ζ', 'dz'],
            ['ψ', 'ps']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How is γγ pronounced?',
          display: 'ἄγγελος',
          displayGreek: true,
          correct: 'Like "ng" in "anger"',
          options: ['Like "ng" in "anger"', 'Like "gg" in "egg"', 'Like "j" in "judge"', 'Like "g" in "get"']
        },
        {
          type: 'mc-translate',
          prompt: 'Which consonant class does φ belong to?',
          display: 'φ',
          displayGreek: true,
          correct: 'Labials',
          options: ['Labials', 'Dentals', 'Palatals', 'Double consonants']
        },
        {
          type: 'match',
          pairs: [
            ['ξ', 'ks'],
            ['ψ', 'ps'],
            ['ζ', 'dz'],
            ['labial + σ', 'ψ'],
            ['palatal + σ', 'ξ']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'φ + σ = ?',
          display: '',
          correct: 'ψ',
          options: ['ψ', 'ξ', 'ζ', 'φσ']
        },
        {
          type: 'mc-translate',
          prompt: 'χ + σ = ?',
          display: '',
          correct: 'ξ',
          options: ['ξ', 'ψ', 'χσ', 'ζ']
        }
      ]
    },

    // Lesson 12: Greek Punctuation
    {
      id: 12,
      title: 'Punctuation',
      subtitle: 'Marks & Capitals',
      section: 'Introduction',
      icon: '·',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Punctuation',
          cards: [
            {
              html: '<p>Greek uses some familiar punctuation — and some surprising differences!</p>'
            },
            {
              html: '<div class="info-box"><p><strong>,</strong> (comma) — same as English</p><p><strong>.</strong> (period) — same as English</p><p><strong>·</strong> (raised dot) — serves as colon <em>and</em> semicolon</p><p><strong>;</strong> — this is the Greek <strong>question mark</strong>!</p></div>'
            },
            {
              html: '<p><strong>Capitalization rules:</strong></p><ul style="text-align:left;line-height:2"><li>Proper names are capitalized</li><li>First words of paragraphs and quotations are capitalized</li><li>The first word of a sentence is <strong>not</strong> normally capitalized</li></ul>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does the raised dot (·) mean in Greek?',
          display: '·',
          correct: 'Colon or semicolon',
          options: ['Colon or semicolon', 'Period', 'Question mark', 'Comma']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the Greek question mark?',
          display: '',
          correct: '; (looks like an English semicolon)',
          options: ['; (looks like an English semicolon)', '? (same as English)', '· (raised dot)', '! (exclamation)']
        },
        {
          type: 'mc-translate',
          prompt: 'The Greek comma looks like:',
          display: '',
          correct: 'The same as an English comma',
          options: ['The same as an English comma', 'A raised dot', 'A semicolon', 'An inverted comma']
        },
        {
          type: 'mc-translate',
          prompt: 'Is the first word of a sentence normally capitalized in Greek?',
          display: '',
          correct: 'No — only proper names, paragraphs, and quotations',
          options: ['No — only proper names, paragraphs, and quotations', 'Yes — always', 'Only in formal writing', 'Only in poetry']
        },
        {
          type: 'mc-translate',
          prompt: 'How would you write "Sophokles?" in Greek punctuation?',
          display: '',
          correct: 'Σοφοκλῆς;',
          options: ['Σοφοκλῆς;', 'Σοφοκλῆς?', 'Σοφοκλῆς·', 'Σοφοκλῆς!'],
          optionsGreek: true
        },
        {
          type: 'match',
          pairs: [
            [',', 'Comma (same as English)'],
            ['.', 'Period (same as English)'],
            ['·', 'Colon / semicolon'],
            [';', 'Question mark'],
            ['Σοφοκλῆς', 'Capitalized (proper name)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does ; mean at the end of a Greek sentence?',
          display: 'Σοφοκλῆς;',
          displayGreek: true,
          correct: 'It\'s a question: "Sophokles?"',
          options: ['It\'s a question: "Sophokles?"', 'It\'s a statement with a pause', 'It\'s an exclamation', 'It separates clauses']
        },
        {
          type: 'mc-translate',
          prompt: 'True or false: Proper names are capitalized in Greek.',
          display: '',
          correct: 'True',
          options: ['True', 'False', 'Only in Koine Greek', 'Only in poetry']
        },
        {
          type: 'mc-translate',
          prompt: 'Which symbol serves as BOTH colon AND semicolon?',
          display: '',
          correct: '· (raised dot)',
          options: ['· (raised dot)', '; (semicolon-shape)', ': (regular colon)', ', (comma)']
        },
        {
          type: 'match',
          pairs: [
            ['Σοφοκλῆς;', '"Sophokles?"'],
            ['Σοφοκλῆς.', '"Sophokles."'],
            ['Σοφοκλῆς·', '"Sophokles:" or "Sophokles;"'],
            ['English ;', 'Greek question mark'],
            ['English ?', 'No Greek equivalent symbol']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'In Greek, a new sentence after a period:',
          display: '',
          correct: 'Does NOT capitalize the first word (usually)',
          options: ['Does NOT capitalize the first word (usually)', 'Always capitalizes the first word', 'Capitalizes only verbs', 'Uses a special mark']
        }
      ]
    },

    // Lesson 13: Accents
    {
      id: 13,
      title: 'Accents',
      subtitle: 'Acute, Grave, Circumflex',
      section: 'Introduction',
      icon: '´',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Accents',
          cards: [
            {
              html: '<p><strong>The last three syllables have names:</strong></p><div class="info-box"><p><strong>Ultima</strong> — the last syllable</p><p><strong>Penult</strong> — second-to-last</p><p><strong>Antepenult</strong> — third-from-last</p></div><p style="margin-top:8px" class="greek" style="font-size:18px">ἄν-θρω-πος<br>(a) &nbsp; (p) &nbsp; (u)</p>'
            },
            {
              html: '<p>Most Greek words have one accented syllable. Unlike English stress accent, Greek accent was originally a difference in <strong>musical pitch</strong>.</p><p style="margin-top:12px">The accent can only appear on one of the <strong>last three syllables</strong>.</p>'
            },
            {
              html: '<div class="info-box"><p><strong>´ Acute accent</strong> — raises pitch</p><p>Can appear on: ultima, penult, antepenult</p><p>On: short or long vowels</p><p>Must change to circumflex on the penult when it contains a long vowel or diphthong and the ultima contains a short vowel</p></div><div class="info-box" style="margin-top:8px"><p><strong>` Grave accent</strong> — lowers pitch</p><p>Can appear on: <em>ultima only</em></p><p>Replaces acute on ultima when next word follows without pause</p></div><div class="info-box" style="margin-top:8px"><p><strong>῀ Circumflex accent</strong> — rises then falls</p><p>Can appear on: <em>ultima and penult only</em></p><p>Only on: <em>long vowels or diphthongs</em></p></div>'
            },
            {
              html: '<p><strong>Two types of accent behavior:</strong></p><div class="info-box"><p><strong>Recessive</strong> — goes back as far as possible (most <em>verbs</em>)</p><p><strong>Persistent</strong> — stays on the same syllable when possible (most <em>nouns</em>)</p></div>'
            }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What accent does this word have?',
          display: 'ἄνθρωπος',
          displayGreek: true,
          correct: 'Acute accent',
          options: ['Acute accent', 'Grave accent', 'Circumflex accent', 'No accent']
        },
        {
          type: 'mc-translate',
          prompt: 'What accent does this word have?',
          display: 'νῆσος',
          displayGreek: true,
          correct: 'Circumflex accent',
          options: ['Circumflex accent', 'Acute accent', 'Grave accent', 'No accent']
        },
        {
          type: 'mc-translate',
          prompt: 'On which syllable is ἄνθρωπος accented?',
          display: 'ἄνθρωπος',
          displayGreek: true,
          correct: 'Antepenult (third from last)',
          options: ['Antepenult (third from last)', 'Penult (second from last)', 'Ultima (last)', 'It has no accent']
        },
        {
          type: 'mc-translate',
          prompt: 'The grave accent can appear on:',
          display: '',
          correct: 'The ultima only',
          options: ['The ultima only', 'Any syllable', 'The penult only', 'The antepenult only']
        },
        {
          type: 'mc-translate',
          prompt: 'The circumflex can appear only on:',
          display: '',
          correct: 'Long vowels or diphthongs',
          options: ['Long vowels or diphthongs', 'Short vowels only', 'Any vowel', 'Consonants']
        },
        {
          type: 'mc-translate',
          prompt: 'The grave accent replaces the acute on the ultima when:',
          display: '',
          correct: 'Another word follows without a pause',
          options: ['Another word follows without a pause', 'The word ends a sentence', 'The vowel is long', 'The word is a verb']
        },
        {
          type: 'match',
          pairs: [
            ['´ Acute', 'Raises pitch'],
            ['` Grave', 'Lowers pitch; ultima only'],
            ['῀ Circumflex', 'Rises then falls'],
            ['Ultima', 'Last syllable'],
            ['Penult', 'Second-to-last syllable']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the "antepenult"?',
          display: '',
          correct: 'The third syllable from the end',
          options: ['The third syllable from the end', 'The last syllable', 'The second-to-last syllable', 'The first syllable']
        },
        {
          type: 'mc-translate',
          prompt: 'Most VERB accents are:',
          display: '',
          correct: 'Recessive (go back as far as possible)',
          options: ['Recessive (go back as far as possible)', 'Persistent (stay on one syllable)', 'Always on the ultima', 'Never accented']
        },
        {
          type: 'mc-translate',
          prompt: 'Most NOUN accents are:',
          display: '',
          correct: 'Persistent (try to stay on the same syllable)',
          options: ['Persistent (try to stay on the same syllable)', 'Recessive (go back as far as possible)', 'Always acute', 'Always circumflex']
        },
        {
          type: 'mc-translate',
          prompt: 'What accent does δρᾶμα have?',
          display: 'δρᾶμα',
          displayGreek: true,
          correct: 'Circumflex on the penult',
          options: ['Circumflex on the penult', 'Acute on the penult', 'Acute on the antepenult', 'Grave on the ultima']
        },
        {
          type: 'match',
          pairs: [
            ['ἄνθρωπος', 'Acute on antepenult'],
            ['βιβλίον', 'Acute on penult'],
            ['ψῡχή', 'Acute on ultima'],
            ['νῆσος', 'Circumflex on penult'],
            ['δρᾶμα', 'Circumflex on penult']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The accent can appear on at most the last ___ syllables.',
          display: '',
          correct: '3 (ultima, penult, antepenult)',
          options: ['3 (ultima, penult, antepenult)', '2 (ultima, penult)', '1 (ultima only)', '4 (any of four syllables)']
        },
        {
          type: 'mc-translate',
          prompt: 'Where is the accent placed on diphthongs?',
          display: '',
          correct: 'Over the second letter of the diphthong',
          options: ['Over the second letter of the diphthong', 'Over the first letter', 'Before the diphthong', 'Between the two letters']
        },
        {
          type: 'mc-translate',
          prompt: 'The acute accent on the penult MUST become a circumflex when:',
          display: '',
          correct: 'The penult has a long vowel or a diphthong and the ultima has a short vowel',
          options: ['The penult has a long vowel or a diphthong and the ultima has a short vowel', 'The penult has a short vowel', 'The word is a verb', 'The word begins with a vowel']
        }
      ]
    },

    // ---- Section 3: Unit 1 — Nouns & Articles ----

    // Lesson 14: Vocabulary I
    {
      id: 14,
      title: 'Vocabulary I',
      subtitle: '1st Declension Nouns',
      section: 'Unit 1: Nouns & Articles',
      icon: 'ἀ',
      exercises: [
        { type: 'vocab-intro', vocabGroup: 0 },
        { type: 'vocab-gre', vocabGroup: 0 },
        { type: 'vocab-gre', vocabGroup: 0 },
        { type: 'vocab-eng', vocabGroup: 0 },
        { type: 'vocab-eng', vocabGroup: 0 },
        { type: 'vocab-match', vocabGroup: 0 },
        { type: 'vocab-gender', vocabGroup: 0 },
        { type: 'vocab-article', vocabGroup: 0 },
        { type: 'vocab-gre', vocabGroup: 0 },
        { type: 'vocab-eng', vocabGroup: 0 },
        {
          type: 'mc-translate',
          prompt: 'All five of these nouns are:',
          display: 'ἀγορά, ψῡχή, μάχη, χώρᾱ, τέχνη',
          displayGreek: true,
          correct: 'First declension, feminine',
          options: ['First declension, feminine', 'Second declension, masculine', 'Second declension, neuter', 'Third declension']
        }
      ]
    },

    // Lesson 15: Vocabulary II
    {
      id: 15,
      title: 'Vocabulary II',
      subtitle: '2nd Declension Masc.',
      section: 'Unit 1: Nouns & Articles',
      icon: 'β',
      exercises: [
        { type: 'vocab-intro', vocabGroup: 1 },
        { type: 'vocab-gre', vocabGroup: 1 },
        { type: 'vocab-gre', vocabGroup: 1 },
        { type: 'vocab-eng', vocabGroup: 1 },
        { type: 'vocab-eng', vocabGroup: 1 },
        { type: 'vocab-match', vocabGroup: 1 },
        { type: 'vocab-gender', vocabGroup: 1 },
        { type: 'vocab-article', vocabGroup: 1 },
        { type: 'vocab-gre', vocabGroup: 1 },
        { type: 'vocab-eng', vocabGroup: 1 },
        {
          type: 'mc-translate',
          prompt: 'These nouns belong to which declension?',
          display: 'ἀδελφός, ἄνθρωπος, θεός, λόγος',
          displayGreek: true,
          correct: 'Second declension',
          options: ['Second declension', 'First declension', 'Third declension', 'Mixed declension']
        }
      ]
    },

    // Lesson 16: Vocabulary III
    {
      id: 16,
      title: 'Vocabulary III',
      subtitle: 'Mixed Nouns',
      section: 'Unit 1: Nouns & Articles',
      icon: 'γ',
      exercises: [
        { type: 'vocab-intro', vocabGroup: 2 },
        { type: 'vocab-gre', vocabGroup: 2 },
        { type: 'vocab-gre', vocabGroup: 2 },
        { type: 'vocab-eng', vocabGroup: 2 },
        { type: 'vocab-eng', vocabGroup: 2 },
        { type: 'vocab-match', vocabGroup: 2 },
        { type: 'vocab-gender', vocabGroup: 2 },
        { type: 'vocab-article', vocabGroup: 2 },
        {
          type: 'mc-translate',
          prompt: 'νῆσος is 2nd declension but its gender is:',
          display: 'ἡ νῆσος',
          displayGreek: true,
          correct: 'Feminine (unusual for 2nd declension)',
          options: ['Feminine (unusual for 2nd declension)', 'Masculine', 'Neuter', 'No gender']
        },
        { type: 'vocab-gre', vocabGroup: 2 },
        { type: 'vocab-eng', vocabGroup: 2 }
      ]
    },

    // Lesson 17: The Article
    {
      id: 17,
      title: 'The Article',
      subtitle: 'ὁ, ἡ, τό',
      section: 'Unit 1: Nouns & Articles',
      icon: 'ὁ',
      exercises: [
        {
          type: 'intro',
          title: 'The Greek Article',
          cards: [
            { html: '<p>Greek has a definite article like English "the." Unlike English, the Greek article changes form based on <strong>gender</strong>.</p>' },
            { html: '<div class="info-box"><p><span class="greek" style="font-size:28px">ὁ</span> — masculine ("the" for masc. nouns)</p><p><span class="greek" style="font-size:28px">ἡ</span> — feminine ("the" for fem. nouns)</p><p><span class="greek" style="font-size:28px">τό</span> — neuter ("the" for neut. nouns)</p></div>' },
            { html: '<p>The article tells you a noun\'s <strong>gender</strong>:</p><div class="info-box"><p><span class="greek" style="font-size:20px">ὁ λόγος</span> — the word (masc.)</p><p><span class="greek" style="font-size:20px">ἡ τέχνη</span> — the art (fem.)</p><p><span class="greek" style="font-size:20px">τό ἔργον</span> — the work (neut.)</p></div>' },
            { html: '<p>The article <strong>agrees</strong> with its noun in gender, number, and case. You must memorize each noun\'s gender.</p><p style="margin-top:12px">Some 2nd-declension nouns are feminine despite their -ος ending: <span class="greek">ἡ νῆσος, ἡ ὁδός</span>.</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which article goes with λόγος?',
          display: '___ λόγος', displayGreek: true,
          correct: 'ὁ (masculine)',
          options: ['ὁ (masculine)', 'ἡ (feminine)', 'τό (neuter)', 'τά (neuter plural)']
        },
        {
          type: 'mc-translate',
          prompt: 'Which article goes with τέχνη?',
          display: '___ τέχνη', displayGreek: true,
          correct: 'ἡ (feminine)',
          options: ['ὁ (masculine)', 'ἡ (feminine)', 'τό (neuter)', 'οἱ (masc. plural)']
        },
        {
          type: 'mc-translate',
          prompt: 'Which article goes with δῶρον?',
          display: '___ δῶρον', displayGreek: true,
          correct: 'τό (neuter)',
          options: ['ὁ (masculine)', 'ἡ (feminine)', 'τό (neuter)', 'αἱ (fem. plural)']
        },
        {
          type: 'mc-translate',
          prompt: 'Which article goes with νῆσος?',
          display: '___ νῆσος', displayGreek: true,
          correct: 'ἡ (feminine — despite the -ος ending!)',
          options: ['ἡ (feminine — despite the -ος ending!)', 'ὁ (masculine)', 'τό (neuter)', 'τοῦ (genitive)']
        },
        {
          type: 'match',
          pairs: [
            ['ὁ ἀδελφός', 'masculine'],
            ['ἡ ψῡχή', 'feminine'],
            ['τό βιβλίον', 'neuter'],
            ['ἡ νῆσος', 'feminine (2nd decl!)'],
            ['ὁ θεός', 'masculine']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'ὁ indicates which gender?',
          display: 'ὁ', displayGreek: true,
          correct: 'Masculine',
          options: ['Masculine', 'Feminine', 'Neuter', 'Plural']
        },
        {
          type: 'mc-translate',
          prompt: 'τό indicates which gender?',
          display: 'τό', displayGreek: true,
          correct: 'Neuter',
          options: ['Masculine', 'Feminine', 'Neuter', 'Dual']
        },
        {
          type: 'mc-translate',
          prompt: 'The article must agree with its noun in:',
          display: '',
          correct: 'Gender, number, and case',
          options: ['Gender, number, and case', 'Gender only', 'Number only', 'It never changes']
        },
        {
          type: 'match',
          pairs: [
            ['ὁ λόγος', 'the word'],
            ['ἡ μάχη', 'the battle'],
            ['τό ἔργον', 'the work'],
            ['ἡ χώρᾱ', 'the land'],
            ['ὁ ἄνθρωπος', 'the man']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which article goes with ὁδός?',
          display: '___ ὁδός', displayGreek: true,
          correct: 'ἡ (feminine — despite the -ος ending!)',
          options: ['ἡ (feminine — despite the -ος ending!)', 'ὁ (masculine)', 'τό (neuter)', 'τοῦ (genitive)']
        },
        {
          type: 'mc-translate',
          prompt: 'Can you always guess a noun\'s gender from its ending?',
          display: '',
          correct: 'No — gender must be memorized with each word',
          options: ['No — gender must be memorized with each word', 'Yes — from the ending', 'Yes — from the meaning', 'Gender doesn\'t matter']
        },
        {
          type: 'match',
          pairs: [
            ['ὁ', 'masculine article'],
            ['ἡ', 'feminine article'],
            ['τό', 'neuter article'],
            ['ἡ ὁδός', 'fem. (2nd decl!)'],
            ['τό δῶρον', 'neuter']
          ]
        }
      ]
    },

    // Lesson 18: Declensions Overview
    {
      id: 18,
      title: 'Declensions',
      subtitle: '1st & 2nd Patterns',
      section: 'Unit 1: Nouns & Articles',
      icon: 'η',
      exercises: [
        {
          type: 'intro',
          title: 'Noun Declensions',
          cards: [
            { html: '<p>Greek nouns have a <strong>stem</strong> (the meaning) and an <strong>ending</strong> (showing number and case).</p><p style="margin-top:12px">Changing a noun\'s ending is called <strong>inflection</strong>, and the pattern of endings is called a <strong>declension</strong>.</p>' },
            { html: '<p>There are <strong>three declensions</strong>:</p><div class="info-box"><p><strong>1st declension</strong> — endings use η or ᾱ</p><p><strong>2nd declension</strong> — endings use ο</p><p><strong>3rd declension</strong> — various patterns</p></div><p style="margin-top:8px">Each noun belongs to only one declension.</p>' },
            { html: '<p><strong>1st Declension</strong> (feminine):</p><div class="info-box"><p>-η type: <span class="greek">τέχνη, τέχνης</span> (stem: τεχν-)</p><p>-ᾱ type: <span class="greek">χώρᾱ, χώρᾱς</span> (stem: χωρ-)</p><p>The -ᾱ ending appears when the stem ends in ε, ι, or ρ.</p></div>' },
            { html: '<p><strong>2nd Declension</strong>:</p><div class="info-box"><p>-ος type (masc./fem.): <span class="greek">λόγος, λόγου</span> (stem: λογ-)</p><p>-ον type (neuter): <span class="greek">ἔργον, ἔργου</span> (stem: ἐργ-)</p></div><p style="margin-top:8px">To find the stem: take the <strong>genitive singular</strong>, remove the ending.</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How do you find a noun\'s stem?',
          display: '',
          correct: 'Remove the genitive singular ending',
          options: ['Remove the genitive singular ending', 'Remove the last letter', 'Remove the article', 'It\'s the same as the nominative']
        },
        {
          type: 'mc-translate',
          prompt: 'τέχνη belongs to which declension?',
          display: 'τέχνη, τέχνης, ἡ', displayGreek: true,
          correct: 'First declension (η-type)',
          options: ['First declension (η-type)', 'Second declension', 'Third declension', 'First declension (ᾱ-type)']
        },
        {
          type: 'mc-translate',
          prompt: 'χώρᾱ belongs to which declension?',
          display: 'χώρᾱ, χώρᾱς, ἡ', displayGreek: true,
          correct: 'First declension (ᾱ-type)',
          options: ['First declension (ᾱ-type)', 'First declension (η-type)', 'Second declension', 'Third declension']
        },
        {
          type: 'mc-translate',
          prompt: 'λόγος belongs to which declension?',
          display: 'λόγος, λόγου, ὁ', displayGreek: true,
          correct: 'Second declension (-ος type)',
          options: ['Second declension (-ος type)', 'First declension', 'Third declension', 'Second declension (-ον type)']
        },
        {
          type: 'mc-translate',
          prompt: 'ἔργον belongs to which declension?',
          display: 'ἔργον, ἔργου, τό', displayGreek: true,
          correct: 'Second declension (-ον type, neuter)',
          options: ['Second declension (-ον type, neuter)', 'First declension', 'Third declension', 'Second declension (-ος type)']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the stem of τέχνη (gen. τέχνης)?',
          display: 'τέχνης → remove -ης', displayGreek: true,
          correct: 'τεχν-',
          options: ['τεχν-', 'τέχνη-', 'τεχνη-', 'τέχ-']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the stem of λόγος (gen. λόγου)?',
          display: 'λόγου → remove -ου', displayGreek: true,
          correct: 'λογ-',
          options: ['λογ-', 'λόγο-', 'λόγος-', 'λό-']
        },
        {
          type: 'match',
          pairs: [
            ['τέχνη', '1st decl. (η-type)'],
            ['χώρᾱ', '1st decl. (ᾱ-type)'],
            ['λόγος', '2nd decl. (-ος)'],
            ['ἔργον', '2nd decl. (-ον)'],
            ['νῆσος', '2nd decl. (-ος, fem.)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'First-declension nouns use which vowels in their endings?',
          display: '',
          correct: 'η or ᾱ',
          options: ['η or ᾱ', 'ο', 'ε or ι', 'ω']
        },
        {
          type: 'mc-translate',
          prompt: 'Second-declension nouns use which vowel in their endings?',
          display: '',
          correct: 'ο',
          options: ['ο', 'η or ᾱ', 'ε', 'ι']
        },
        {
          type: 'mc-translate',
          prompt: 'The -ᾱ ending in 1st declension appears when the stem ends in:',
          display: '',
          correct: 'ε, ι, or ρ',
          options: ['ε, ι, or ρ', 'Any consonant', 'π, β, or φ', 'A vowel']
        },
        {
          type: 'match',
          pairs: [
            ['stem', 'Shows dictionary meaning'],
            ['ending', 'Shows number and case'],
            ['declension', 'Pattern of endings'],
            ['inflection', 'Changing the ending'],
            ['paradigm', 'Model inflection']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How many declensions are there in Greek?',
          display: '',
          correct: 'Three',
          options: ['Three', 'Two', 'Five', 'One']
        }
      ]
    },

    // ---- Section 4: Unit 1 — Cases & Declensions ----

    // Lesson 20: The Five Cases
    {
      id: 20,
      title: 'The Five Cases',
      subtitle: 'Nom. Gen. Dat. Acc. Voc.',
      section: 'Unit 1: Cases & Declensions',
      icon: '5',
      exercises: [
        {
          type: 'intro',
          title: 'The Five Cases',
          cards: [
            { html: '<p>The <strong>case</strong> of a Greek noun shows its grammatical role in the sentence. Greek has <strong>five cases</strong>.</p>' },
            { html: '<div class="info-box"><p><strong>Nominative</strong> — subject of the sentence</p><p>"The <em>man</em> educates."</p></div><div class="info-box" style="margin-top:8px"><p><strong>Genitive</strong> — possession (of); separation (from)</p><p>"The word <em>of the brother</em>"</p></div>' },
            { html: '<div class="info-box"><p><strong>Dative</strong> — indirect object (to/for); means (by/with); place (in/at)</p><p>"Sends a gift <em>to the brother</em>"</p></div><div class="info-box" style="margin-top:8px"><p><strong>Accusative</strong> — direct object; motion toward</p><p>"Homer educates <em>the man</em>"</p></div>' },
            { html: '<div class="info-box"><p><strong>Vocative</strong> — direct address</p><p>"<em>Brother</em>, the god educates."</p><p>Used with the interjection <span class="greek">ὦ</span></p></div><p style="margin-top:12px"><span class="greek" style="font-size:20px">ὦ ἄδελφε</span> — O brother!</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The nominative case is used for:',
          display: '',
          correct: 'The subject of the sentence',
          options: ['The subject of the sentence', 'The direct object', 'Possession', 'Direct address']
        },
        {
          type: 'mc-translate',
          prompt: 'The genitive case expresses:',
          display: '',
          correct: '"of" (possession) or "from" (separation)',
          options: ['"of" (possession) or "from" (separation)', '"to" or "for"', 'Direct object', 'Direct address']
        },
        {
          type: 'mc-translate',
          prompt: 'The dative case expresses:',
          display: '',
          correct: '"to/for," "by/with," or "in/at"',
          options: ['"to/for," "by/with," or "in/at"', '"of" or "from"', 'Subject', 'Direct object']
        },
        {
          type: 'mc-translate',
          prompt: 'The accusative case is used for:',
          display: '',
          correct: 'The direct object; motion toward',
          options: ['The direct object; motion toward', 'The subject', 'Possession', 'Direct address']
        },
        {
          type: 'mc-translate',
          prompt: 'The vocative case is used for:',
          display: 'ὦ ἄδελφε', displayGreek: true,
          correct: 'Direct address',
          options: ['Direct address', 'The subject', 'The direct object', 'Possession']
        },
        {
          type: 'match',
          pairs: [
            ['Nominative', 'subject'],
            ['Genitive', 'of / from'],
            ['Dative', 'to/for, by/with, in/at'],
            ['Accusative', 'direct object'],
            ['Vocative', 'direct address']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'In "The man educates his brother," what case is "man"?',
          display: '',
          correct: 'Nominative (subject)',
          options: ['Nominative (subject)', 'Accusative (object)', 'Genitive', 'Dative']
        },
        {
          type: 'mc-translate',
          prompt: 'In "The man educates his brother," what case is "brother"?',
          display: '',
          correct: 'Accusative (direct object)',
          options: ['Accusative (direct object)', 'Nominative (subject)', 'Genitive', 'Dative']
        },
        {
          type: 'mc-translate',
          prompt: 'In "of the brother," what case is "brother"?',
          display: 'τοῦ ἀδελφοῦ', displayGreek: true,
          correct: 'Genitive',
          options: ['Genitive', 'Nominative', 'Accusative', 'Dative']
        },
        {
          type: 'mc-translate',
          prompt: '"Sends a gift TO the brother" — what case is "brother"?',
          display: 'τῷ ἀδελφῷ', displayGreek: true,
          correct: 'Dative',
          options: ['Dative', 'Genitive', 'Accusative', 'Nominative']
        },
        {
          type: 'mc-translate',
          prompt: 'The dative can show instrumentality. What does this mean?',
          display: '',
          correct: 'The means by which something is done (by/with)',
          options: ['The means by which something is done (by/with)', 'The subject of the sentence', 'Possession', 'Motion toward']
        },
        {
          type: 'match',
          pairs: [
            ['ὁ ἀδελφός', 'nominative (subject)'],
            ['τοῦ ἀδελφοῦ', 'genitive (of)'],
            ['τῷ ἀδελφῷ', 'dative (to/for)'],
            ['τὸν ἀδελφόν', 'accusative (object)'],
            ['ὦ ἄδελφε', 'vocative (address)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How many cases does Greek have?',
          display: '',
          correct: 'Five',
          options: ['Five', 'Three', 'Four', 'Six']
        },
        {
          type: 'mc-translate',
          prompt: 'The accusative can also show:',
          display: '',
          correct: 'Motion toward a place',
          options: ['Motion toward a place', 'Motion away from a place', 'Location in a place', 'Possession']
        },
        {
          type: 'mc-translate',
          prompt: 'The genitive can also show:',
          display: '',
          correct: 'Motion away from / separation',
          options: ['Motion away from / separation', 'Motion toward', 'Direct object', 'Direct address']
        }
      ]
    },

    // Lesson 21: 1st Declension
    {
      id: 21,
      title: '1st Declension',
      subtitle: 'Full Paradigms',
      section: 'Unit 1: Cases & Declensions',
      icon: 'η',
      exercises: [
        {
          type: 'intro',
          title: '1st Declension Paradigms',
          cards: [
            { html: '<p>The 1st declension has two subtypes: <strong>-η</strong> and <strong>-ᾱ</strong>.</p><p style="margin-top:8px">They differ only in the singular. The <strong>plural is the same</strong> for all 1st-declension nouns.</p>' },
            { html: '<p><strong>-η type</strong> (τέχνη, "art"):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>Nom./Voc.</td><td class="greek">τέχνη</td><td class="greek">τέχναι</td></tr><tr><td>Gen.</td><td class="greek">τέχνης</td><td class="greek">τεχνῶν</td></tr><tr><td>Dat.</td><td class="greek">τέχνῃ</td><td class="greek">τέχναις</td></tr><tr><td>Acc.</td><td class="greek">τέχνην</td><td class="greek">τέχνᾱς</td></tr></table>' },
            { html: '<p><strong>-ᾱ type</strong> (χώρᾱ, "land"):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>Nom./Voc.</td><td class="greek">χώρᾱ</td><td class="greek">χῶραι</td></tr><tr><td>Gen.</td><td class="greek">χώρᾱς</td><td class="greek">χωρῶν</td></tr><tr><td>Dat.</td><td class="greek">χώρᾳ</td><td class="greek">χώραις</td></tr><tr><td>Acc.</td><td class="greek">χώρᾱν</td><td class="greek">χώρᾱς</td></tr></table>' },
            { html: '<p><strong>Key rules:</strong></p><ul style="text-align:left;line-height:2"><li>The genitive plural is always <span class="greek">-ῶν</span> (circumflex on ultima)</li><li>The diphthong -αι when final counts as <strong>short</strong> for accent</li><li>Nouns with acute on ultima change to circumflex in gen. & dat.</li></ul>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the genitive singular of τέχνη?',
          display: 'τέχνη (art)', displayGreek: true,
          correct: 'τέχνης',
          options: ['τέχνης', 'τέχνῃ', 'τέχνην', 'τεχνῶν']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the dative singular of τέχνη?',
          display: 'τέχνη (art)', displayGreek: true,
          correct: 'τέχνῃ',
          options: ['τέχνῃ', 'τέχνης', 'τέχνην', 'τέχναις']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the accusative singular of χώρᾱ?',
          display: 'χώρᾱ (land)', displayGreek: true,
          correct: 'χώρᾱν',
          options: ['χώρᾱν', 'χώρᾱς', 'χώρᾳ', 'χῶραι']
        },
        {
          type: 'mc-translate',
          prompt: 'What case is τέχνης?',
          display: 'τέχνης', displayGreek: true,
          correct: 'Genitive singular',
          options: ['Genitive singular', 'Nominative singular', 'Dative singular', 'Accusative singular']
        },
        {
          type: 'mc-translate',
          prompt: 'The genitive plural of ALL 1st-declension nouns ends in:',
          display: '',
          correct: '-ῶν (circumflex on ultima)',
          options: ['-ῶν (circumflex on ultima)', '-ων (no accent change)', '-ᾱς', '-αις']
        },
        {
          type: 'match',
          pairs: [
            ['τέχνη', 'Nom. singular'],
            ['τέχνης', 'Gen. singular'],
            ['τέχνῃ', 'Dat. singular'],
            ['τέχνην', 'Acc. singular'],
            ['τεχνῶν', 'Gen. plural']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What case is χώρᾳ?',
          display: 'χώρᾳ', displayGreek: true,
          correct: 'Dative singular',
          options: ['Dative singular', 'Genitive singular', 'Nominative singular', 'Accusative singular']
        },
        {
          type: 'mc-translate',
          prompt: 'ψῡχή has acute on the ultima. In the genitive, the accent becomes:',
          display: 'ψῡχή → ψῡχ___', displayGreek: true,
          correct: 'ψῡχῆς (circumflex)',
          options: ['ψῡχῆς (circumflex)', 'ψῡχής (stays acute)', 'ψύχης (moves to penult)', 'ψῡχῇς']
        },
        {
          type: 'mc-translate',
          prompt: 'In the plural, 1st declension nouns:',
          display: '',
          correct: 'All follow the same pattern',
          options: ['All follow the same pattern', 'Differ by η/ᾱ type', 'Have no plural', 'Change declension']
        },
        {
          type: 'match',
          pairs: [
            ['χώρᾱ', 'Nom. sing.'],
            ['χώρᾱς', 'Gen. sing.'],
            ['χώρᾳ', 'Dat. sing.'],
            ['χώρᾱν', 'Acc. sing.'],
            ['χωρῶν', 'Gen. plural']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What case is τέχναις?',
          display: 'τέχναις', displayGreek: true,
          correct: 'Dative plural',
          options: ['Dative plural', 'Genitive plural', 'Accusative plural', 'Nominative plural']
        },
        {
          type: 'mc-translate',
          prompt: 'What case is τέχνᾱς?',
          display: 'τέχνᾱς', displayGreek: true,
          correct: 'Accusative plural',
          options: ['Accusative plural', 'Genitive singular', 'Dative plural', 'Nominative plural']
        },
        {
          type: 'mc-translate',
          prompt: 'The nominative plural of τέχνη is:',
          display: '',
          correct: 'τέχναι',
          options: ['τέχναι', 'τέχνης', 'τεχνῶν', 'τέχνᾱς'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Final -αι counts as ___ for accent purposes.',
          display: '',
          correct: 'Short',
          options: ['Short', 'Long', 'Neither', 'It varies']
        }
      ]
    },

    // Lesson 22: 2nd Declension
    {
      id: 22,
      title: '2nd Declension',
      subtitle: 'Full Paradigms',
      section: 'Unit 1: Cases & Declensions',
      icon: 'ος',
      exercises: [
        {
          type: 'intro',
          title: '2nd Declension Paradigms',
          cards: [
            { html: '<p>The 2nd declension has two subtypes:</p><div class="info-box"><p><strong>-ος type</strong> (masc./fem.): <span class="greek">λόγος</span></p><p><strong>-ον type</strong> (neuter): <span class="greek">ἔργον</span></p></div>' },
            { html: '<p><strong>-ος type</strong> (λόγος, "word"):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>Nom.</td><td class="greek">λόγος</td><td class="greek">λόγοι</td></tr><tr><td>Gen.</td><td class="greek">λόγου</td><td class="greek">λόγων</td></tr><tr><td>Dat.</td><td class="greek">λόγῳ</td><td class="greek">λόγοις</td></tr><tr><td>Acc.</td><td class="greek">λόγον</td><td class="greek">λόγους</td></tr><tr><td>Voc.</td><td class="greek">λόγε</td><td class="greek">λόγοι</td></tr></table>' },
            { html: '<p><strong>-ον type</strong> (ἔργον, "work"):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>Nom./Voc.</td><td class="greek">ἔργον</td><td class="greek">ἔργα</td></tr><tr><td>Gen.</td><td class="greek">ἔργου</td><td class="greek">ἔργων</td></tr><tr><td>Dat.</td><td class="greek">ἔργῳ</td><td class="greek">ἔργοις</td></tr><tr><td>Acc.</td><td class="greek">ἔργον</td><td class="greek">ἔργα</td></tr></table>' },
            { html: '<p><strong>Neuter rules:</strong></p><ul style="text-align:left;line-height:2"><li>Acc. and Voc. = Nom. (always!)</li><li>Nom./Voc./Acc. plural always ends in <span class="greek">-α</span></li><li>Final -οι counts as <strong>short</strong> for accent</li></ul>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the genitive singular of λόγος?',
          display: 'λόγος (word)', displayGreek: true,
          correct: 'λόγου',
          options: ['λόγου', 'λόγῳ', 'λόγον', 'λόγων']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the vocative singular of λόγος?',
          display: 'λόγος (word)', displayGreek: true,
          correct: 'λόγε',
          options: ['λόγε', 'λόγος', 'λόγον', 'λόγοι']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the accusative plural of λόγος?',
          display: 'λόγος (word)', displayGreek: true,
          correct: 'λόγους',
          options: ['λόγους', 'λόγοι', 'λόγων', 'λόγοις']
        },
        {
          type: 'mc-translate',
          prompt: 'What case is λόγῳ?',
          display: 'λόγῳ', displayGreek: true,
          correct: 'Dative singular',
          options: ['Dative singular', 'Genitive singular', 'Accusative singular', 'Nominative singular']
        },
        {
          type: 'mc-translate',
          prompt: 'In neuter nouns, the accusative is always:',
          display: '',
          correct: 'The same as the nominative',
          options: ['The same as the nominative', 'Different from the nominative', 'The same as the genitive', 'The same as the dative']
        },
        {
          type: 'match',
          pairs: [
            ['λόγος', 'Nom. singular'],
            ['λόγου', 'Gen. singular'],
            ['λόγῳ', 'Dat. singular'],
            ['λόγον', 'Acc. singular'],
            ['λόγε', 'Voc. singular']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The nom./voc./acc. plural of neuter nouns ends in:',
          display: 'ἔργον → ἔργ___', displayGreek: true,
          correct: '-α (ἔργα)',
          options: ['-α (ἔργα)', '-οι (ἔργοι)', '-ους (ἔργους)', '-ων (ἔργων)']
        },
        {
          type: 'mc-translate',
          prompt: 'What case is ἔργων?',
          display: 'ἔργων', displayGreek: true,
          correct: 'Genitive plural',
          options: ['Genitive plural', 'Dative plural', 'Nominative plural', 'Accusative plural']
        },
        {
          type: 'mc-translate',
          prompt: 'ἀδελφός has an accent on the ultima. In the gen. sing., the accent becomes:',
          display: 'ἀδελφός → ἀδελφ___',
          correct: 'ἀδελφοῦ (circumflex)',
          options: ['ἀδελφοῦ (circumflex)', 'ἀδελφού (stays acute)', 'ἄδελφου (moves)', 'ἀδελφοῦ (grave)']
        },
        {
          type: 'match',
          pairs: [
            ['ἔργον', 'Nom./Acc. singular'],
            ['ἔργου', 'Gen. singular'],
            ['ἔργῳ', 'Dat. singular'],
            ['ἔργα', 'Nom./Acc. plural'],
            ['ἔργων', 'Gen. plural']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the vocative singular of ἀδελφός?',
          display: 'ἀδελφός (brother)', displayGreek: true,
          correct: 'ἄδελφε (accent shifts!)',
          options: ['ἄδελφε (accent shifts!)', 'ἀδελφός', 'ἀδελφέ', 'ἀδελφόν']
        },
        {
          type: 'mc-translate',
          prompt: 'Final -οι counts as ___ for accent purposes.',
          display: '',
          correct: 'Short (like final -αι)',
          options: ['Short (like final -αι)', 'Long', 'Neither', 'It varies']
        },
        {
          type: 'mc-translate',
          prompt: 'The gen. plural accent in 2nd declension:',
          display: '',
          correct: 'Does NOT shift to circumflex on ultima (unlike 1st decl.)',
          options: ['Does NOT shift to circumflex on ultima (unlike 1st decl.)', 'Always shifts to circumflex on ultima', 'Is always on the antepenult', 'Has no accent']
        },
        {
          type: 'match',
          pairs: [
            ['λόγοι', 'Nom./Voc. plural'],
            ['λόγων', 'Gen. plural'],
            ['λόγοις', 'Dat. plural'],
            ['λόγους', 'Acc. plural'],
            ['ἔργα', 'Neut. Nom./Acc. plural']
          ]
        }
      ]
    },

    // Lesson 23: The Full Article
    {
      id: 23,
      title: 'The Full Article',
      subtitle: 'All Cases & Genders',
      section: 'Unit 1: Cases & Declensions',
      icon: 'τ',
      exercises: [
        {
          type: 'intro',
          title: 'The Article: Complete Declension',
          cards: [
            { html: '<table class="intro-table"><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th></tr><tr><td>Nom. S</td><td class="greek">ὁ</td><td class="greek">ἡ</td><td class="greek">τό</td></tr><tr><td>Gen.</td><td class="greek">τοῦ</td><td class="greek">τῆς</td><td class="greek">τοῦ</td></tr><tr><td>Dat.</td><td class="greek">τῷ</td><td class="greek">τῇ</td><td class="greek">τῷ</td></tr><tr><td>Acc.</td><td class="greek">τόν</td><td class="greek">τήν</td><td class="greek">τό</td></tr></table>' },
            { html: '<table class="intro-table"><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th></tr><tr><td>Nom. P</td><td class="greek">οἱ</td><td class="greek">αἱ</td><td class="greek">τά</td></tr><tr><td>Gen.</td><td class="greek">τῶν</td><td class="greek">τῶν</td><td class="greek">τῶν</td></tr><tr><td>Dat.</td><td class="greek">τοῖς</td><td class="greek">ταῖς</td><td class="greek">τοῖς</td></tr><tr><td>Acc.</td><td class="greek">τούς</td><td class="greek">τάς</td><td class="greek">τά</td></tr></table>' },
            { html: '<p><strong>Key points:</strong></p><ul style="text-align:left;line-height:2"><li>Nom. masc./fem. (ὁ, ἡ, οἱ, αἱ) have no τ- and no accent — they are <strong>proclitics</strong></li><li>Gen. plural is <span class="greek">τῶν</span> for all three genders</li><li>Masc. and neut. gen./dat. are identical</li></ul>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the genitive singular feminine article?',
          display: '',
          correct: 'τῆς',
          options: ['τῆς', 'τοῦ', 'τῇ', 'τήν'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the dative singular masculine article?',
          display: '',
          correct: 'τῷ',
          options: ['τῷ', 'τοῦ', 'τόν', 'τοῖς'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the accusative singular feminine article?',
          display: '',
          correct: 'τήν',
          options: ['τήν', 'τῆς', 'τῇ', 'τάς'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the genitive plural for ALL genders?',
          display: '',
          correct: 'τῶν',
          options: ['τῶν', 'τοῖς', 'τούς', 'τά'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'The forms ὁ, ἡ, οἱ, αἱ are called:',
          display: '',
          correct: 'Proclitics (no accent, lean on next word)',
          options: ['Proclitics (no accent, lean on next word)', 'Enclitics', 'Postpositives', 'Particles']
        },
        {
          type: 'match',
          pairs: [
            ['τοῦ', 'gen. masc./neut. sing.'],
            ['τῆς', 'gen. fem. sing.'],
            ['τῷ', 'dat. masc./neut. sing.'],
            ['τῇ', 'dat. fem. sing.'],
            ['τῶν', 'gen. plural (all)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What is the nominative plural neuter article?',
          display: '',
          correct: 'τά',
          options: ['τά', 'οἱ', 'αἱ', 'τοῖς'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the accusative plural masculine article?',
          display: '',
          correct: 'τούς',
          options: ['τούς', 'τοῖς', 'τῶν', 'οἱ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'τοῖς is the dative plural for which genders?',
          display: 'τοῖς', displayGreek: true,
          correct: 'Masculine and neuter',
          options: ['Masculine and neuter', 'Feminine only', 'All three genders', 'Masculine only']
        },
        {
          type: 'mc-translate',
          prompt: 'ταῖς is the dative plural for which gender?',
          display: 'ταῖς', displayGreek: true,
          correct: 'Feminine',
          options: ['Feminine', 'Masculine', 'Neuter', 'All genders']
        },
        {
          type: 'match',
          pairs: [
            ['τόν', 'acc. masc. sing.'],
            ['τήν', 'acc. fem. sing.'],
            ['τό', 'nom./acc. neut. sing.'],
            ['τούς', 'acc. masc. plural'],
            ['τάς', 'acc. fem. plural']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Which article form would go with ψῡχήν (acc. fem. sing.)?',
          display: '___ ψῡχήν', displayGreek: true,
          correct: 'τήν',
          options: ['τήν', 'τόν', 'τοῦ', 'τῇ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Which article form would go with ἀνθρώποις (dat. masc. pl.)?',
          display: '___ ἀνθρώποις', displayGreek: true,
          correct: 'τοῖς',
          options: ['τοῖς', 'τούς', 'τῶν', 'οἱ'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Which article form would go with δῶρα (nom./acc. neut. pl.)?',
          display: '___ δῶρα', displayGreek: true,
          correct: 'τά',
          options: ['τά', 'τοῖς', 'οἱ', 'αἱ'],
          optionsGreek: true
        }
      ]
    },

    // Lesson 24: Prepositions
    {
      id: 24,
      title: 'Prepositions',
      subtitle: 'εἰς, ἐκ/ἐξ, ἐν',
      section: 'Unit 1: Cases & Declensions',
      icon: 'ἐν',
      exercises: [
        {
          type: 'intro',
          title: 'Prepositions',
          cards: [
            { html: '<p>Greek prepositions govern specific <strong>cases</strong>. The three basic prepositions show motion and location:</p>' },
            { html: '<div class="info-box"><p><span class="greek" style="font-size:24px">εἰς</span> + accusative = <strong>into, to</strong></p><p><span class="greek" style="font-size:20px">εἰς τὴν χώρᾱν</span> — into the land</p><p style="margin-top:4px">Can also mean "for" (purpose): <span class="greek">εἰς μάχην</span> — for battle</p></div>' },
            { html: '<div class="info-box"><p><span class="greek" style="font-size:24px">ἐκ</span> (ἐξ before vowels) + genitive = <strong>from, out of</strong></p><p><span class="greek" style="font-size:20px">ἐκ τῆς οἰκίᾱς</span> — from the house</p><p><span class="greek" style="font-size:20px">ἐξ ἀγορᾶς</span> — from the marketplace</p></div>' },
            { html: '<div class="info-box"><p><span class="greek" style="font-size:24px">ἐν</span> + dative = <strong>in</strong></p><p><span class="greek" style="font-size:20px">ἐν τῇ νήσῳ</span> — on the island</p><p><span class="greek" style="font-size:20px">ἐν ἀγορᾷ</span> — in the marketplace</p></div><p style="margin-top:12px">These three prepositions are <strong>proclitics</strong> (no accent).</p>' },
            { html: '<p>The three prepositions map to motion/location:</p><div class="info-box"><p><strong>εἰς</strong> + acc. → motion <strong>toward/into</strong></p><p><strong>ἐν</strong> + dat. → <strong>location in</strong> (no motion)</p><p><strong>ἐκ</strong> + gen. → motion <strong>away from/out of</strong></p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'εἰς takes which case?',
          display: 'εἰς', displayGreek: true,
          correct: 'Accusative',
          options: ['Accusative', 'Genitive', 'Dative', 'Nominative']
        },
        {
          type: 'mc-translate',
          prompt: 'ἐκ/ἐξ takes which case?',
          display: 'ἐκ / ἐξ', displayGreek: true,
          correct: 'Genitive',
          options: ['Genitive', 'Accusative', 'Dative', 'Nominative']
        },
        {
          type: 'mc-translate',
          prompt: 'ἐν takes which case?',
          display: 'ἐν', displayGreek: true,
          correct: 'Dative',
          options: ['Dative', 'Accusative', 'Genitive', 'Nominative']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: εἰς τὴν χώρᾱν',
          display: 'εἰς τὴν χώρᾱν', displayGreek: true,
          correct: 'into the land',
          options: ['into the land', 'in the land', 'from the land', 'of the land']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: ἐκ τῆς οἰκίᾱς',
          display: 'ἐκ τῆς οἰκίᾱς', displayGreek: true,
          correct: 'from/out of the house',
          options: ['from/out of the house', 'into the house', 'in the house', 'to the house']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: ἐν τῇ νήσῳ',
          display: 'ἐν τῇ νήσῳ', displayGreek: true,
          correct: 'on the island',
          options: ['on the island', 'to the island', 'from the island', 'of the island']
        },
        {
          type: 'match',
          pairs: [
            ['εἰς + acc.', 'into, to'],
            ['ἐκ + gen.', 'from, out of'],
            ['ἐν + dat.', 'in'],
            ['εἰς μάχην', 'for battle'],
            ['ἐξ ἀγορᾶς', 'from the marketplace']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'When is ἐξ used instead of ἐκ?',
          display: '',
          correct: 'Before words beginning with a vowel',
          options: ['Before words beginning with a vowel', 'Before consonants', 'In poetry only', 'In questions']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: εἰς μάχην',
          display: 'εἰς μάχην', displayGreek: true,
          correct: 'into battle / for battle',
          options: ['into battle / for battle', 'in battle', 'from battle', 'of battle']
        },
        {
          type: 'mc-translate',
          prompt: 'Which preposition shows motion TOWARD?',
          display: '',
          correct: 'εἰς (+ accusative)',
          options: ['εἰς (+ accusative)', 'ἐκ (+ genitive)', 'ἐν (+ dative)', 'None of these']
        },
        {
          type: 'mc-translate',
          prompt: 'Which preposition shows LOCATION (no motion)?',
          display: '',
          correct: 'ἐν (+ dative)',
          options: ['ἐν (+ dative)', 'εἰς (+ accusative)', 'ἐκ (+ genitive)', 'None of these']
        },
        {
          type: 'match',
          pairs: [
            ['εἰς τὴν νῆσον', 'to the island'],
            ['ἐν τῇ νήσῳ', 'on the island'],
            ['ἐκ τῆς νήσου', 'from the island'],
            ['εἰς τὰς νήσους', 'to the islands'],
            ['ἐν ἀγορᾷ', 'in the marketplace']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'These three prepositions are:',
          display: 'εἰς, ἐκ, ἐν',
          correct: 'Proclitics (no accent of their own)',
          options: ['Proclitics (no accent of their own)', 'Enclitics', 'Postpositives', 'Always accented']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: ἐκ τῆς ἀγορᾶς εἰς τὴν νῆσον',
          display: 'ἐκ τῆς ἀγορᾶς εἰς τὴν νῆσον', displayGreek: true,
          correct: 'from the marketplace to the island',
          options: ['from the marketplace to the island', 'in the marketplace on the island', 'to the marketplace from the island', 'from the island to the marketplace']
        }
      ]
    },

    // Lesson 19: First Sentences
    {
      id: 19,
      title: 'First Sentences',
      subtitle: 'παιδεύει & πέμπει',
      section: 'Unit 1: Cases & Declensions',
      icon: '→',
      exercises: [
        {
          type: 'intro',
          title: 'Your First Greek Sentences',
          cards: [
            { html: '<p>Let\'s learn two verb forms to make sentences:</p><div class="info-box"><p><span class="greek" style="font-size:24px">παιδεύει</span> — educates, teaches</p><p><span class="greek" style="font-size:24px">πέμπει</span> — sends</p></div><p style="margin-top:8px">These are 3rd person singular present: "he/she/it educates/sends."</p>' },
            { html: '<p>Also learn the conjunction:</p><div class="info-box"><p><span class="greek" style="font-size:24px">καί</span> — and (conjunction); even, also (adverb)</p><p><span class="greek" style="font-size:18px">καί . . . καί</span> — both . . . and</p></div>' },
            { html: '<p>Greek shows grammatical relations through <strong>case endings</strong>, not word order. So word order is free to show emphasis!</p><div class="info-box"><p><span class="greek">ὁ Ὅμηρος τὸν ἀδελφὸν παιδεύει.</span></p><p>Homer educates his brother. (neutral)</p><p style="margin-top:8px"><span class="greek">τὸν ἀδελφὸν ὁ Ὅμηρος παιδεύει.</span></p><p>It is his brother Homer educates. (emphasis on brother)</p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does παιδεύει mean?',
          display: 'παιδεύει', displayGreek: true,
          correct: 'educates, teaches',
          options: ['educates, teaches', 'sends', 'fights', 'reads']
        },
        {
          type: 'mc-translate',
          prompt: 'What does πέμπει mean?',
          display: 'πέμπει', displayGreek: true,
          correct: 'sends',
          options: ['sends', 'educates', 'gives', 'writes']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος τὸν ἄνθρωπον παιδεύει.',
          displayGreek: true,
          correct: 'Homer educates the man.',
          options: ['Homer educates the man.', 'The man educates Homer.', 'Homer sends the man.', 'The man sends Homer.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἀδελφὸς τὰ δῶρα εἰς τὰς νήσους πέμπει.',
          displayGreek: true,
          correct: 'The brother sends the gifts to the islands.',
          options: ['The brother sends the gifts to the islands.', 'The brother educates the islands.', 'The gifts send the brother.', 'The islands send the gifts.']
        },
        {
          type: 'mc-translate',
          prompt: 'What does καί mean as a conjunction?',
          display: 'καί', displayGreek: true,
          correct: 'and',
          options: ['and', 'or', 'but', 'not']
        },
        {
          type: 'mc-translate',
          prompt: 'What does καί mean as an adverb?',
          display: 'καὶ Ὅμηρος', displayGreek: true,
          correct: 'even / also (even Homer, also Homer)',
          options: ['even / also (even Homer, also Homer)', 'and Homer', 'but Homer', 'not Homer']
        },
        {
          type: 'match',
          pairs: [
            ['παιδεύει', 'educates, teaches'],
            ['πέμπει', 'sends'],
            ['καί (conj.)', 'and'],
            ['καί (adv.)', 'even, also'],
            ['καί...καί', 'both...and']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'Ὅμηρος τοὺς ἀνθρώπους παιδεύει.',
          displayGreek: true,
          correct: 'Homer educates the men.',
          options: ['Homer educates the men.', 'The men educate Homer.', 'Homer sends the men.', 'Homer educates the man.']
        },
        {
          type: 'mc-translate',
          prompt: 'In Greek, word order primarily shows:',
          display: '',
          correct: 'Emphasis (case endings show grammar)',
          options: ['Emphasis (case endings show grammar)', 'Subject vs. object', 'Tense', 'Gender']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τὸν Ὅμηρον παιδεύει ὁ ἄνθρωπος.',
          displayGreek: true,
          correct: 'The man educates Homer.',
          options: ['The man educates Homer.', 'Homer educates the man.', 'Homer sends the man.', 'The man sends Homer.']
        },
        {
          type: 'mc-translate',
          prompt: 'Which sentence means "Homer educates his brother"?',
          display: '',
          correct: 'ὁ Ὅμηρος τὸν ἀδελφὸν παιδεύει.',
          options: ['ὁ Ὅμηρος τὸν ἀδελφὸν παιδεύει.', 'ὁ ἀδελφὸς τὸν Ὅμηρον παιδεύει.', 'ὁ Ὅμηρος τὸν ἀδελφὸν πέμπει.', 'τὸν Ὅμηρον ὁ ἀδελφὸς παιδεύει.'],
          optionsGreek: true
        },
        {
          type: 'match',
          pairs: [
            ['ὁ Ὅμηρος παιδεύει', 'Homer educates'],
            ['ὁ ἀδελφὸς πέμπει', 'the brother sends'],
            ['τοὺς ἀνθρώπους', 'the men (acc.)'],
            ['τὰ δῶρα', 'the gifts (acc.)'],
            ['καὶ λόγῳ καὶ ἔργῳ', 'both by word and deed']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὁμήρου ἀδελφὸς παιδεύει τὸν ἄνθρωπον.',
          displayGreek: true,
          correct: 'Homer\'s brother educates the man.',
          options: ['Homer\'s brother educates the man.', 'Homer educates his brother.', 'The man educates Homer\'s brother.', 'The brother of the man educates Homer.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          correct: 'The man educates his brother by word and deed.',
          options: ['The man educates his brother by word and deed.', 'The brother educates the man by word and deed.', 'The man sends his brother a word and a deed.', 'The brother sends words and deeds.']
        }
      ]
    },

    // Lesson 25: Reading Practice
    {
      id: 25,
      title: 'Reading Practice',
      subtitle: 'Translate Sentences',
      section: 'Unit 1: Cases & Declensions',
      icon: '📖',
      exercises: [
        {
          type: 'intro',
          title: 'Reading Practice',
          cards: [
            { html: '<p>Time to put it all together! You\'ll translate full Greek sentences using everything you\'ve learned:</p><ul style="text-align:left;line-height:2"><li>Vocabulary (nouns)</li><li>Articles and cases</li><li>Verbs: παιδεύει, πέμπει</li><li>Prepositions: εἰς, ἐκ, ἐν</li><li>καί (and / even / also)</li></ul>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος τὸν ἄνθρωπον παιδεύει.',
          displayGreek: true,
          correct: 'Homer educates the man.',
          options: ['Homer educates the man.', 'The man educates Homer.', 'Homer sends the man.', 'The man sends Homer.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὁμήρου ἀδελφὸς παιδεύει τὸν ἄνθρωπον.',
          displayGreek: true,
          correct: 'Homer\'s brother educates the man.',
          options: ['Homer\'s brother educates the man.', 'Homer educates his brother.', 'The man educates Homer\'s brother.', 'The brother sends the man.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τὸν Ὅμηρον παιδεύει ὁ ἄνθρωπος.',
          displayGreek: true,
          correct: 'The man educates Homer.',
          options: ['The man educates Homer.', 'Homer educates the man.', 'Homer sends the man.', 'The men educate Homer.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ θεὸς δῶρον τῷ Ὁμήρου ἀδελφῷ πέμπει εἰς τὴν χώρᾱν.',
          displayGreek: true,
          correct: 'The god sends a gift to Homer\'s brother into the land.',
          options: ['The god sends a gift to Homer\'s brother into the land.', 'Homer\'s brother sends a gift to the god.', 'The god educates Homer\'s brother in the land.', 'The brother sends the god from the land.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἀδελφὸς τὰ δῶρα εἰς τὰς νήσους πέμπει.',
          displayGreek: true,
          correct: 'The brother sends the gifts to the islands.',
          options: ['The brother sends the gifts to the islands.', 'The brother educates the islands.', 'The gifts send the brother to the islands.', 'The islands send gifts to the brother.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἐν τῇ νήσῳ ἄνθρωπος τοὺς ἀδελφοὺς εἰς μάχην πέμπει.',
          displayGreek: true,
          correct: 'The man on the island sends the brothers into battle.',
          options: ['The man on the island sends the brothers into battle.', 'The brothers send the man to the island.', 'The man in battle sends the brothers to the island.', 'The island sends the brothers into battle.']
        },
        {
          type: 'match',
          pairs: [
            ['τοὺς ἀδελφούς', 'the brothers (acc.)'],
            ['ἐν τῇ νήσῳ', 'on the island'],
            ['εἰς ἀγοράν', 'to the marketplace'],
            ['τῶν ἀδελφῶν', 'of the brothers'],
            ['τοῖς βιβλίοις', 'with the books']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          correct: 'The man educates his brother by word and deed.',
          options: ['The man educates his brother by word and deed.', 'The brother educates the man by word and deed.', 'The man sends words and deeds.', 'Words and deeds educate the man.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὦ ἄδελφε, ὁ θεὸς τοὺς ἀνθρώπους παιδεύει.',
          displayGreek: true,
          correct: 'Brother, the god educates the men.',
          options: ['Brother, the god educates the men.', 'The god educates his brother.', 'The men educate the god, brother.', 'Brother, send the men to the god.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ θεὸς λόγους εἰς τὰς τῶν ἀνθρώπων ψῡχὰς πέμπει.',
          displayGreek: true,
          correct: 'The god sends words into the souls of the men.',
          options: ['The god sends words into the souls of the men.', 'The men send words to the god\'s soul.', 'Words educate the souls of men.', 'The god educates the men\'s words.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος βιβλίοις παιδεύει τὸν ἀδελφόν.',
          displayGreek: true,
          correct: 'Homer educates his brother with books.',
          options: ['Homer educates his brother with books.', 'Homer sends books to his brother.', 'The brother educates Homer with books.', 'Homer gives books to his brother.']
        },
        {
          type: 'match',
          pairs: [
            ['ὁ Ὅμηρος παιδεύει', 'Homer educates'],
            ['πέμπει εἰς τὴν νῆσον', 'sends to the island'],
            ['ἐκ τῆς ἀγορᾶς', 'from the marketplace'],
            ['τῷ ἀδελφῷ', 'to/for the brother'],
            ['τὰ τῶν θεῶν δῶρα', 'the gifts of the gods']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἀδελφὸς βιβλίον ἐκ τῆς ἀγορᾶς εἰς τὴν νῆσον πέμπει.',
          displayGreek: true,
          correct: 'The brother sends a book from the marketplace to the island.',
          options: ['The brother sends a book from the marketplace to the island.', 'The island sends a book to the marketplace.', 'The brother reads a book in the marketplace.', 'The book sends the brother from the island.']
        },
        {
          type: 'mc-translate',
          prompt: 'What does τὰ τῶν ἀδελφῶν δῶρα mean?',
          display: 'τὰ τῶν ἀδελφῶν δῶρα', displayGreek: true,
          correct: 'the gifts of the brothers',
          options: ['the gifts of the brothers', 'the brothers of the gifts', 'the brothers\' souls', 'gifts for the brothers']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος τοὺς ἀνθρώπους ἐν τῇ ἀγορᾷ παιδεύει.',
          displayGreek: true,
          correct: 'Homer educates the men in the marketplace.',
          options: ['Homer educates the men in the marketplace.', 'The men educate Homer in the marketplace.', 'Homer sends the men from the marketplace.', 'The marketplace educates the men.']
        }
      ]
    },

    // ---- Section 5: Unit 2 — Verbs ----

    // Lesson 26: Verbs Overview — Person & Number
    {
      id: 26,
      title: 'Verbs: Overview',
      subtitle: 'Person & Number',
      section: 'Unit 2: Verbs',
      icon: 'ω',
      exercises: [
        {
          type: 'intro',
          title: 'Greek Verbs',
          cards: [
            { html: '<p>Like nouns, Greek verbs are <strong>inflected</strong>.</p><p>Nouns are <em>declined</em> (have a declension).<br/>Verbs are <em>conjugated</em> (have a conjugation).</p>' },
            { html: '<p>Most verb forms express five properties:</p><div class="info-box"><p>1. <strong>Person</strong> (1st, 2nd, 3rd)</p><p>2. <strong>Number</strong> (singular, plural)</p><p>3. <strong>Tense</strong> (time + aspect)</p><p>4. <strong>Mood</strong></p><p>5. <strong>Voice</strong></p></div>' },
            { html: '<p><strong>Person</strong> tells who is acting:</p><div class="info-box"><p><strong>1st person</strong>: I / we</p><p><strong>2nd person</strong>: you</p><p><strong>3rd person</strong>: he, she, it / they</p></div><p>Greek verb endings encode person — no separate pronoun is needed!</p>' },
            { html: '<p><strong>Number</strong> tells how many:</p><div class="info-box"><p><strong>Singular</strong>: one subject (I, you, he/she/it)</p><p><strong>Plural</strong>: multiple subjects (we, you, they)</p></div><p>Greek originally had a <strong>dual</strong> number (for pairs), but it is rare in Attic Greek.</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does it mean to say a verb is "inflected"?',
          correct: 'It changes form by adding endings to stems',
          options: ['It changes form by adding endings to stems', 'It always stays the same', 'It only changes in poetry', 'It has no endings']
        },
        {
          type: 'mc-translate',
          prompt: '"I" or "we" as the subject indicates:',
          correct: 'First person',
          options: ['First person', 'Second person', 'Third person', 'No person']
        },
        {
          type: 'mc-translate',
          prompt: '"You" as the subject indicates:',
          correct: 'Second person',
          options: ['Second person', 'First person', 'Third person', 'Dual number']
        },
        {
          type: 'mc-translate',
          prompt: '"He," "she," "it," or "they" indicates:',
          correct: 'Third person',
          options: ['Third person', 'First person', 'Second person', 'Vocative']
        },
        {
          type: 'mc-translate',
          prompt: 'A verb with a single subject is:',
          correct: 'Singular',
          options: ['Singular', 'Plural', 'Dual', 'Infinite']
        },
        {
          type: 'match',
          pairs: [
            ['I educate', '1st person singular'],
            ['you educate', '2nd person singular'],
            ['he educates', '3rd person singular'],
            ['we educate', '1st person plural'],
            ['they educate', '3rd person plural']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How does Greek differ from English regarding pronouns with verbs?',
          correct: 'Greek verb endings encode person — no pronoun needed',
          options: ['Greek verb endings encode person — no pronoun needed', 'Greek always requires a pronoun', 'Greek has no person system', 'Greek uses word order instead']
        },
        {
          type: 'mc-translate',
          prompt: 'The dual number in Attic Greek is:',
          correct: 'Rare — it indicates a pair of subjects',
          options: ['Rare — it indicates a pair of subjects', 'Very common', 'Used for all plurals', 'Used only in questions']
        },
        {
          type: 'mc-translate',
          prompt: 'A verb is "conjugated." A noun is:',
          correct: 'Declined',
          options: ['Declined', 'Conjugated', 'Inflated', 'Compounded']
        },
        {
          type: 'match',
          pairs: [
            ['Person', 'who is acting (1st/2nd/3rd)'],
            ['Number', 'how many (sing./pl.)'],
            ['Tense', 'time + aspect'],
            ['Mood', 'type of statement'],
            ['Voice', 'how subject relates to action']
          ]
        },
        {
          type: 'mc-translate',
          prompt: '"The men educate" — what person and number?',
          correct: '3rd person plural',
          options: ['3rd person plural', '1st person plural', '2nd person plural', '3rd person singular']
        },
        {
          type: 'mc-translate',
          prompt: 'Greek has separate forms for 2nd person singular and plural. English:',
          correct: 'Uses "you" for both singular and plural',
          options: ['Uses "you" for both singular and plural', 'Also has separate forms', 'Has no 2nd person', 'Uses the plural as a polite singular']
        }
      ]
    },

    // Lesson 27: Time & Aspect
    {
      id: 27,
      title: 'Time & Aspect',
      subtitle: 'The Seven Tenses',
      section: 'Unit 2: Verbs',
      icon: 'χ',
      exercises: [
        {
          type: 'intro',
          title: 'Time & Aspect',
          cards: [
            { html: '<p><strong>Tense</strong> in Greek ALWAYS conveys <strong>aspect</strong> and SOMETIMES conveys <strong>time</strong>.</p><div class="info-box"><p><strong>Time</strong>: present, past, future</p><p><strong>Aspect</strong>: how the action is viewed</p></div>' },
            { html: '<p>Greek has three <strong>aspects</strong>:</p><div class="info-box"><p><strong>Simple</strong>: action simply occurs<br/>"We fell." (once)</p><p><strong>Progressive/Repeated</strong>: action in progress or habitual<br/>"We were falling." / "We used to fall."</p><p><strong>Completed</strong>: action already finished<br/>"We had fallen."</p></div>' },
            { html: '<p>Greek has <strong>seven tenses</strong> in the indicative mood:</p><table class="intro-table"><tr><th></th><th>Simple</th><th>Progr./Repeated</th><th>Completed</th></tr><tr><td>Present</td><td></td><td><strong>Present</strong><br/><span style="font-size:12px">I am falling</span></td><td><strong>Perfect</strong><br/><span style="font-size:12px">I have fallen</span></td></tr><tr><td>Past</td><td><strong>Aorist</strong><br/><span style="font-size:12px">I fell</span></td><td><strong>Imperfect</strong><br/><span style="font-size:12px">I was falling</span></td><td><strong>Pluperfect</strong><br/><span style="font-size:12px">I had fallen</span></td></tr><tr><td>Future</td><td colspan="2"><strong>Future</strong><br/><span style="font-size:12px">I shall fall</span></td><td><span style="font-size:12px">(rare)</span></td></tr></table>' },
            { html: '<p><strong>Primary tenses</strong> = present or future time:<br/>Present, Future, Perfect</p><p><strong>Secondary tenses</strong> = past time:<br/>Aorist, Imperfect, Pluperfect</p><p>Secondary tenses receive the <strong>past indicative augment</strong> ἐ- prefixed to the stem.</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Tense in Greek ALWAYS conveys:',
          correct: 'Aspect',
          options: ['Aspect', 'Time only', 'Mood', 'Voice']
        },
        {
          type: 'mc-translate',
          prompt: '"We were falling" has what aspect?',
          correct: 'Progressive/repeated aspect',
          options: ['Progressive/repeated aspect', 'Simple aspect', 'Completed aspect', 'No aspect']
        },
        {
          type: 'mc-translate',
          prompt: '"We fell" (once) has what aspect?',
          correct: 'Simple aspect',
          options: ['Simple aspect', 'Progressive/repeated aspect', 'Completed aspect', 'Future aspect']
        },
        {
          type: 'mc-translate',
          prompt: '"We had fallen" has what aspect?',
          correct: 'Completed aspect',
          options: ['Completed aspect', 'Simple aspect', 'Progressive/repeated aspect', 'Past aspect']
        },
        {
          type: 'mc-translate',
          prompt: 'Which tense combines PAST time + SIMPLE aspect?',
          correct: 'Aorist',
          options: ['Aorist', 'Imperfect', 'Present', 'Perfect']
        },
        {
          type: 'mc-translate',
          prompt: 'Which tense combines PAST time + PROGRESSIVE/REPEATED aspect?',
          correct: 'Imperfect',
          options: ['Imperfect', 'Aorist', 'Present', 'Pluperfect']
        },
        {
          type: 'mc-translate',
          prompt: 'Which tense combines PRESENT time + COMPLETED aspect?',
          correct: 'Perfect',
          options: ['Perfect', 'Pluperfect', 'Present', 'Aorist']
        },
        {
          type: 'match',
          pairs: [
            ['Present', 'present time + progr./rep.'],
            ['Aorist', 'past time + simple'],
            ['Imperfect', 'past time + progr./rep.'],
            ['Perfect', 'present time + completed'],
            ['Pluperfect', 'past time + completed']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Primary tenses describe actions in:',
          correct: 'Present or future time',
          options: ['Present or future time', 'Past time only', 'All times equally', 'No specific time']
        },
        {
          type: 'mc-translate',
          prompt: 'Secondary tenses receive the:',
          correct: 'Past indicative augment (ἐ-)',
          options: ['Past indicative augment (ἐ-)', 'Future prefix (σ-)', 'Reduplication', 'No changes']
        },
        {
          type: 'mc-translate',
          prompt: 'The future tense can express:',
          correct: 'Both simple and progressive/repeated aspect',
          options: ['Both simple and progressive/repeated aspect', 'Simple aspect only', 'Completed aspect only', 'No aspect']
        },
        {
          type: 'match',
          pairs: [
            ['Present tense', 'primary (present time)'],
            ['Imperfect tense', 'secondary (past time)'],
            ['Aorist tense', 'secondary (past time)'],
            ['Future tense', 'primary (future time)'],
            ['Perfect tense', 'primary (present time)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: '"I used to fall" — which Greek tense?',
          correct: 'Imperfect (past + progressive/repeated)',
          options: ['Imperfect (past + progressive/repeated)', 'Aorist (past + simple)', 'Present', 'Perfect']
        }
      ]
    },

    // Lesson 28: Mood & Voice
    {
      id: 28,
      title: 'Mood & Voice',
      subtitle: 'Indicative, Active, Middle, Passive',
      section: 'Unit 2: Verbs',
      icon: 'μ',
      exercises: [
        {
          type: 'intro',
          title: 'Mood & Voice',
          cards: [
            { html: '<p><strong>Mood</strong> indicates the type of statement:</p><div class="info-box"><p><strong>Indicative</strong>: factual statements & questions<br/>"Homer educates." "Does Homer educate?"</p><p><strong>Subjunctive</strong>: "If we see..." "Let us see!"</p><p><strong>Optative</strong>: "We might see..." "May we see!"</p><p><strong>Imperative</strong>: commands — "Look! See!"</p></div><p>We will focus on the <strong>indicative</strong> mood first.</p>' },
            { html: '<p><strong>Voice</strong> defines how the subject relates to the action:</p><div class="info-box"><p><strong>Active</strong>: subject <em>performs</em> the action<br/>"Homer educates his brother."</p><p><strong>Passive</strong>: subject <em>receives</em> the action<br/>"Homer is educated by his brother."</p><p><strong>Middle</strong>: subject performs the action with <em>special personal involvement</em><br/>(unique to Greek!)</p></div>' },
            { html: '<p>The <strong>middle voice</strong> is unique to Greek. It indicates the subject has a special interest in the action:</p><div class="info-box"><p>Active: Homer educates his brother.<br/>(simple action)</p><p>Middle: Homer has his brother educated.<br/>(personal involvement/interest)</p></div><p>The middle voice will be introduced later.</p>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The indicative mood is used for:',
          correct: 'Factual statements and questions',
          options: ['Factual statements and questions', 'Commands only', 'Wishes only', 'Hypothetical situations only']
        },
        {
          type: 'mc-translate',
          prompt: 'The imperative mood is used for:',
          correct: 'Commands ("Look! See!")',
          options: ['Commands ("Look! See!")', 'Factual statements', 'Wishes', 'Past actions']
        },
        {
          type: 'mc-translate',
          prompt: 'When a verb is in the active voice, the subject:',
          correct: 'Performs the action',
          options: ['Performs the action', 'Receives the action', 'Is unrelated to the action', 'Commands the action']
        },
        {
          type: 'mc-translate',
          prompt: 'When a verb is in the passive voice, the subject:',
          correct: 'Receives the action from an outside agency',
          options: ['Receives the action from an outside agency', 'Performs the action', 'Has personal involvement', 'Gives a command']
        },
        {
          type: 'mc-translate',
          prompt: 'The middle voice is unique to Greek. It indicates:',
          correct: 'The subject performs the action with special personal involvement',
          options: ['The subject performs the action with special personal involvement', 'The subject receives the action', 'A command', 'A hypothetical action']
        },
        {
          type: 'match',
          pairs: [
            ['Indicative', 'factual statements & questions'],
            ['Subjunctive', '"if we see...", "let us see!"'],
            ['Optative', '"we might see...", "may we see!"'],
            ['Imperative', 'commands ("Look!")'],
            ['Active voice', 'subject performs the action']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How many moods does Greek have?',
          correct: 'Four (indicative, subjunctive, optative, imperative)',
          options: ['Four (indicative, subjunctive, optative, imperative)', 'Two (active and passive)', 'Three (past, present, future)', 'Six']
        },
        {
          type: 'mc-translate',
          prompt: 'How many voices does Greek have?',
          correct: 'Three (active, middle, passive)',
          options: ['Three (active, middle, passive)', 'Two (active and passive)', 'Four', 'One']
        },
        {
          type: 'match',
          pairs: [
            ['Active voice', 'subject performs action'],
            ['Passive voice', 'subject receives action'],
            ['Middle voice', 'subject acts with personal interest'],
            ['Indicative mood', 'mood of facts'],
            ['Imperative mood', 'mood of commands']
          ]
        },
        {
          type: 'mc-translate',
          prompt: '"Homer is educated by his brother" — what voice?',
          correct: 'Passive',
          options: ['Passive', 'Active', 'Middle', 'Subjunctive']
        },
        {
          type: 'mc-translate',
          prompt: '"Homer educates his brother" — what voice?',
          correct: 'Active',
          options: ['Active', 'Passive', 'Middle', 'Imperative']
        },
        {
          type: 'mc-translate',
          prompt: 'A verb with no direct object specified is called:',
          correct: 'Intransitive',
          options: ['Intransitive', 'Transitive', 'Middle', 'Passive']
        }
      ]
    },

    // Lesson 29: Principal Parts
    {
      id: 29,
      title: 'Principal Parts',
      subtitle: 'The Six Forms of a Verb',
      section: 'Unit 2: Verbs',
      icon: 'π',
      exercises: [
        {
          type: 'intro',
          title: 'Principal Parts',
          cards: [
            { html: '<p>To generate all forms of a Greek verb, you need its <strong>six principal parts</strong>.</p><p>Compare English: <em>sing, sang, sung</em> (3 parts).</p><p>Greek has <strong>six</strong> — ALL must be learned for each verb!</p>' },
            { html: '<p>The six principal parts of <span class="greek" style="font-size:22px">παιδεύω</span> (educate):</p><table class="intro-table"><tr><th>#</th><th>Form</th><th>Identification</th></tr><tr><td>I</td><td class="greek">παιδεύω</td><td>Present Ind. Act.</td></tr><tr><td>II</td><td class="greek">παιδεύσω</td><td>Future Ind. Act.</td></tr><tr><td>III</td><td class="greek">ἐπαίδευσα</td><td>Aorist Ind. Act.</td></tr><tr><td>IV</td><td class="greek">πεπαίδευκα</td><td>Perfect Ind. Act.</td></tr><tr><td>V</td><td class="greek">πεπαίδευμαι</td><td>Perfect Ind. Pass.</td></tr><tr><td>VI</td><td class="greek">ἐπαιδεύθην</td><td>Aorist Ind. Pass.</td></tr></table>' },
            { html: '<p>Each principal part provides a <strong>tense stem</strong>. Different <strong>endings</strong> are added to produce all forms.</p><div class="info-box"><p>PP II & III often have σ in the stem</p><p>PP IV & V often show <strong>reduplication</strong>:<br/><span class="greek">παιδεύω → πε-παίδευκα</span></p><p>PP VI often has θ in the stem</p><p>PP III & VI have the past augment ἐ-</p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'How many principal parts does a Greek verb have?',
          correct: 'Six',
          options: ['Six', 'Three', 'Four', 'Two']
        },
        {
          type: 'mc-translate',
          prompt: 'Principal Part I is the:',
          display: 'παιδεύω', displayGreek: true,
          correct: '1st person singular, present indicative active',
          options: ['1st person singular, present indicative active', 'Future indicative active', 'Aorist indicative active', 'Perfect indicative active']
        },
        {
          type: 'mc-translate',
          prompt: 'Principal Part III (ἐπαίδευσα) is the:',
          display: 'ἐπαίδευσα', displayGreek: true,
          correct: 'Aorist indicative active',
          options: ['Aorist indicative active', 'Present indicative active', 'Imperfect indicative active', 'Future indicative active']
        },
        {
          type: 'mc-translate',
          prompt: 'Which principal part shows the perfect indicative active?',
          correct: 'PP IV (πεπαίδευκα)',
          options: ['PP IV (πεπαίδευκα)', 'PP III (ἐπαίδευσα)', 'PP II (παιδεύσω)', 'PP V (πεπαίδευμαι)'],
          optionsGreek: false
        },
        {
          type: 'match',
          pairs: [
            ['PP I: παιδεύω', 'present ind. active'],
            ['PP II: παιδεύσω', 'future ind. active'],
            ['PP III: ἐπαίδευσα', 'aorist ind. active'],
            ['PP IV: πεπαίδευκα', 'perfect ind. active'],
            ['PP V: πεπαίδευμαι', 'perfect ind. passive']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'PP IV and V often show:',
          display: 'πεπαίδευκα, πεπαίδευμαι', displayGreek: true,
          correct: 'Reduplication (initial consonant doubled with ε)',
          options: ['Reduplication (initial consonant doubled with ε)', 'The past augment ἐ-', 'A sigma suffix', 'No changes to the stem']
        },
        {
          type: 'mc-translate',
          prompt: 'Which principal parts have the past indicative augment ἐ-?',
          correct: 'PP III and PP VI',
          options: ['PP III and PP VI', 'PP I and PP II', 'PP IV and PP V', 'All of them']
        },
        {
          type: 'mc-translate',
          prompt: 'Greek verbs are named by which principal part?',
          correct: 'Principal Part I (the present)',
          options: ['Principal Part I (the present)', 'Principal Part III (the aorist)', 'Principal Part VI (the passive)', 'The infinitive']
        },
        {
          type: 'mc-translate',
          prompt: 'Can one principal part be derived from another?',
          correct: 'No — all six must be learned separately',
          options: ['No — all six must be learned separately', 'Yes, always', 'Only PP II from PP I', 'Only in regular verbs']
        },
        {
          type: 'match',
          pairs: [
            ['παιδεύω', 'I educate (PP I)'],
            ['παιδεύσω', 'I shall educate (PP II)'],
            ['ἐπαίδευσα', 'I educated (PP III)'],
            ['πεπαίδευκα', 'I have educated (PP IV)'],
            ['ἐπαιδεύθην', 'I was educated (PP VI)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'PP VI (ἐπαιδεύθην) is the:',
          display: 'ἐπαιδεύθην', displayGreek: true,
          correct: 'Aorist indicative passive',
          options: ['Aorist indicative passive', 'Aorist indicative active', 'Perfect indicative passive', 'Imperfect indicative active']
        },
        {
          type: 'mc-translate',
          prompt: 'Verb forms are identified by stating:',
          correct: 'Person, number, tense, mood, voice',
          options: ['Person, number, tense, mood, voice', 'Just the tense', 'Case, number, gender', 'Only person and number']
        }
      ]
    },

    // Lesson 30: Present Indicative Active
    {
      id: 30,
      title: 'Present Ind. Active',
      subtitle: 'παιδεύω conjugation',
      section: 'Unit 2: Verbs',
      icon: 'ε',
      exercises: [
        {
          type: 'intro',
          title: 'Present Indicative Active',
          cards: [
            { html: '<p>To form the <strong>present indicative active</strong>:</p><div class="info-box"><p>1. Drop <span class="greek">-ω</span> from PP I to get the <strong>present tense stem</strong></p><p><span class="greek">παιδεύω → παιδευ-</span></p><p>2. Add the <strong>primary active endings</strong></p></div>' },
            { html: '<table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-ω</td><td class="greek">-ομεν</td></tr><tr><td>2nd</td><td class="greek">-εις</td><td class="greek">-ετε</td></tr><tr><td>3rd</td><td class="greek">-ει</td><td class="greek">-ουσι(ν)</td></tr></table><p style="margin-top:8px">The (ν) is <strong>nu-movable</strong> — added before vowels or at sentence end.</p>' },
            { html: '<table class="intro-table"><tr><th></th><th>Form</th><th>Translation</th></tr><tr><td>1s</td><td class="greek">παιδεύω</td><td>I educate</td></tr><tr><td>2s</td><td class="greek">παιδεύεις</td><td>you educate</td></tr><tr><td>3s</td><td class="greek">παιδεύει</td><td>he/she/it educates</td></tr><tr><td>1p</td><td class="greek">παιδεύομεν</td><td>we educate</td></tr><tr><td>2p</td><td class="greek">παιδεύετε</td><td>you (pl.) educate</td></tr><tr><td>3p</td><td class="greek">παιδεύουσι(ν)</td><td>they educate</td></tr></table>' },
            { html: '<p>Most verb forms have a <strong>recessive accent</strong> — the accent falls as far from the end as the rules allow.</p><div class="info-box"><p><span class="greek">παιδεύ<strong>ει</strong></span> — long ultima → accent on penult</p><p><span class="greek">παιδεύ<strong>ομεν</strong></span> — short ultima → accent on antepenult</p></div>' }
          ]
        },
        { type: 'verb-form-id', tense: 'present', verbIndex: 0 },
        { type: 'verb-form-id', tense: 'present', verbIndex: 0 },
        {
          type: 'mc-translate',
          prompt: 'What is the present tense stem of παιδεύω?',
          display: 'παιδεύω', displayGreek: true,
          correct: 'παιδευ-',
          options: ['παιδευ-', 'παιδεύσ-', 'ἐπαιδευ-', 'πεπαιδευ-'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the 1st person plural present ending?',
          correct: '-ομεν',
          options: ['-ομεν', '-ετε', '-ουσι(ν)', '-ω'],
          optionsGreek: true
        },
        { type: 'verb-form-select', tense: 'present', verbIndex: 0 },
        { type: 'verb-form-select', tense: 'present', verbIndex: 0 },
        {
          type: 'match',
          pairs: [
            ['παιδεύω', 'I educate'],
            ['παιδεύεις', 'you educate'],
            ['παιδεύει', 'he/she/it educates'],
            ['παιδεύομεν', 'we educate'],
            ['παιδεύουσι(ν)', 'they educate']
          ]
        },
        { type: 'verb-form-id', tense: 'present', verbIndex: 2 },
        { type: 'verb-form-select', tense: 'present', verbIndex: 3 },
        {
          type: 'mc-translate',
          prompt: 'What is nu-movable?',
          correct: 'ν added to certain endings before vowels or at sentence end',
          options: ['ν added to certain endings before vowels or at sentence end', 'A special accent mark', 'An extra syllable added in poetry', 'A prefix for past tense']
        },
        {
          type: 'mc-translate',
          prompt: 'Most verb forms have what kind of accent?',
          correct: 'Recessive (as far from the end as possible)',
          options: ['Recessive (as far from the end as possible)', 'Persistent (stays on the same syllable)', 'No accent', 'Circumflex always']
        },
        { type: 'verb-form-id', tense: 'present', verbIndex: 1 },
        { type: 'verb-form-select', tense: 'present', verbIndex: 2 }
      ]
    },

    // Lesson 31: Imperfect Indicative Active
    {
      id: 31,
      title: 'Imperfect Ind. Active',
      subtitle: 'Past progressive/repeated',
      section: 'Unit 2: Verbs',
      icon: 'ἐ',
      exercises: [
        {
          type: 'intro',
          title: 'Imperfect Indicative Active',
          cards: [
            { html: '<p>The <strong>imperfect</strong> describes an action in <strong>past time</strong> with <strong>progressive/repeated aspect</strong>.</p><div class="info-box"><p>"I was educating" (progressive)</p><p>"I used to educate" (repeated)</p><p>"I educated (habitually)" (repeated)</p></div>' },
            { html: '<p>To form the imperfect:</p><div class="info-box"><p>1. Prefix the <strong>augment ἐ-</strong> to the present stem</p><p><span class="greek">παιδευ- → ἐπαιδευ-</span></p><p>2. Add <strong>secondary active endings</strong></p></div>' },
            { html: '<table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-ον</td><td class="greek">-ομεν</td></tr><tr><td>2nd</td><td class="greek">-ες</td><td class="greek">-ετε</td></tr><tr><td>3rd</td><td class="greek">-ε(ν)</td><td class="greek">-ον</td></tr></table><p style="margin-top:8px">Note: 1st/2nd plural endings are the <em>same</em> as the present!</p>' },
            { html: '<table class="intro-table"><tr><th></th><th>Form</th><th>Translation</th></tr><tr><td>1s</td><td class="greek">ἐπαίδευον</td><td>I was educating</td></tr><tr><td>2s</td><td class="greek">ἐπαίδευες</td><td>you were educating</td></tr><tr><td>3s</td><td class="greek">ἐπαίδευε(ν)</td><td>he/she/it was educating</td></tr><tr><td>1p</td><td class="greek">ἐπαιδεύομεν</td><td>we were educating</td></tr><tr><td>2p</td><td class="greek">ἐπαιδεύετε</td><td>you (pl.) were educating</td></tr><tr><td>3p</td><td class="greek">ἐπαίδευον</td><td>they were educating</td></tr></table><p style="margin-top:8px">Note: 1st sing. and 3rd plural are <em>identical</em>!</p>' }
          ]
        },
        { type: 'verb-form-id', tense: 'imperfect', verbIndex: 0 },
        { type: 'verb-form-id', tense: 'imperfect', verbIndex: 0 },
        {
          type: 'mc-translate',
          prompt: 'What distinguishes the imperfect from the present?',
          correct: 'The augment ἐ- and different endings',
          options: ['The augment ἐ- and different endings', 'A σ in the stem', 'Reduplication', 'Nothing — they are the same']
        },
        {
          type: 'mc-translate',
          prompt: 'The imperfect tense expresses:',
          correct: 'Past time + progressive/repeated aspect',
          options: ['Past time + progressive/repeated aspect', 'Past time + simple aspect', 'Present time + progressive aspect', 'Future time']
        },
        { type: 'verb-form-select', tense: 'imperfect', verbIndex: 0 },
        { type: 'verb-form-select', tense: 'imperfect', verbIndex: 0 },
        {
          type: 'match',
          pairs: [
            ['ἐπαίδευον', 'I was educating (or: they)'],
            ['ἐπαίδευες', 'you were educating'],
            ['ἐπαίδευε(ν)', 'he/she/it was educating'],
            ['ἐπαιδεύομεν', 'we were educating'],
            ['ἐπαιδεύετε', 'you (pl.) were educating']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'ἐπαίδευον can mean:',
          display: 'ἐπαίδευον', displayGreek: true,
          correct: 'Both "I was educating" and "they were educating"',
          options: ['Both "I was educating" and "they were educating"', 'Only "I was educating"', 'Only "they were educating"', '"We were educating"']
        },
        { type: 'verb-form-id', tense: 'imperfect', verbIndex: 2 },
        { type: 'verb-form-id', tense: 'imperfect', verbIndex: 3 },
        { type: 'verb-form-select', tense: 'imperfect', verbIndex: 1 },
        {
          type: 'mc-translate',
          prompt: 'The vowel in secondary endings before μ and ν is:',
          correct: 'ο (the thematic vowel)',
          options: ['ο (the thematic vowel)', 'ε', 'α', 'η']
        }
      ]
    },

    // Lesson 32: Future Indicative Active
    {
      id: 32,
      title: 'Future Ind. Active',
      subtitle: 'παιδεύσω — I shall educate',
      section: 'Unit 2: Verbs',
      icon: 'σ',
      exercises: [
        {
          type: 'intro',
          title: 'Future Indicative Active',
          cards: [
            { html: '<p>To form the <strong>future indicative active</strong>:</p><div class="info-box"><p>1. Drop <span class="greek">-ω</span> from PP II to get the <strong>future tense stem</strong></p><p><span class="greek">παιδεύσω → παιδεύσ-</span></p><p>2. Add the <strong>same endings as the present!</strong></p></div><p>The σ in the stem is what distinguishes future from present.</p>' },
            { html: '<table class="intro-table"><tr><th></th><th>Form</th><th>Translation</th></tr><tr><td>1s</td><td class="greek">παιδεύσω</td><td>I shall educate</td></tr><tr><td>2s</td><td class="greek">παιδεύσεις</td><td>you will educate</td></tr><tr><td>3s</td><td class="greek">παιδεύσει</td><td>he/she/it will educate</td></tr><tr><td>1p</td><td class="greek">παιδεύσομεν</td><td>we shall educate</td></tr><tr><td>2p</td><td class="greek">παιδεύσετε</td><td>you (pl.) will educate</td></tr><tr><td>3p</td><td class="greek">παιδεύσουσι(ν)</td><td>they will educate</td></tr></table>' },
            { html: '<p>Compare present vs. future — only the stem differs:</p><div class="info-box"><p><span class="greek"><strong>παιδεύ</strong>ομεν</span> — we educate (present)</p><p><span class="greek"><strong>παιδεύσ</strong>ομεν</span> — we shall educate (future)</p></div><p>The future can have <em>simple</em> or <em>progressive/repeated</em> aspect.</p>' }
          ]
        },
        { type: 'verb-form-id', tense: 'future', verbIndex: 0 },
        { type: 'verb-form-id', tense: 'future', verbIndex: 0 },
        {
          type: 'mc-translate',
          prompt: 'The future uses the same endings as which tense?',
          correct: 'The present',
          options: ['The present', 'The imperfect', 'The aorist', 'The perfect']
        },
        {
          type: 'mc-translate',
          prompt: 'What distinguishes the future from the present?',
          correct: 'The σ in the future tense stem',
          options: ['The σ in the future tense stem', 'The augment ἐ-', 'Different endings', 'Reduplication']
        },
        { type: 'verb-form-select', tense: 'future', verbIndex: 0 },
        { type: 'verb-form-select', tense: 'future', verbIndex: 0 },
        {
          type: 'match',
          pairs: [
            ['παιδεύσω', 'I shall educate'],
            ['παιδεύσεις', 'you will educate'],
            ['παιδεύσει', 'he/she/it will educate'],
            ['παιδεύσομεν', 'we shall educate'],
            ['παιδεύσουσι(ν)', 'they will educate']
          ]
        },
        { type: 'verb-form-id', tense: 'future', verbIndex: 3 },
        { type: 'verb-form-select', tense: 'future', verbIndex: 2 },
        {
          type: 'mc-translate',
          prompt: 'The future tense of πέμπω uses which stem?',
          display: 'πέμψω', displayGreek: true,
          correct: 'πέμψ- (from PP II)',
          options: ['πέμψ- (from PP II)', 'πέμπ- (from PP I)', 'ἐπεμπ- (augmented)', 'πεπεμπ- (reduplicated)']
        },
        { type: 'verb-form-id', tense: 'future', verbIndex: 1 },
        {
          type: 'mc-translate',
          prompt: 'παιδεύσομεν can mean:',
          display: 'παιδεύσομεν', displayGreek: true,
          correct: 'Both "we shall educate" and "we shall be educating"',
          options: ['Both "we shall educate" and "we shall be educating"', 'Only "we shall educate (once)"', 'Only "we shall be educating"', '"We educated"']
        }
      ]
    },

    // Lesson 33: Aorist Indicative Active
    {
      id: 33,
      title: 'Aorist Ind. Active',
      subtitle: 'ἐπαίδευσα — I educated',
      section: 'Unit 2: Verbs',
      icon: 'α',
      exercises: [
        {
          type: 'intro',
          title: 'Aorist Indicative Active',
          cards: [
            { html: '<p>The <strong>aorist</strong> describes a <strong>past</strong> action with <strong>simple aspect</strong> — it happened once and for all.</p><div class="info-box"><p>"I educated" (once, not habitually)</p><p>"He sent" (a single completed action)</p></div>' },
            { html: '<p>To form the aorist indicative active:</p><div class="info-box"><p>1. Drop <span class="greek">-α</span> from PP III</p><p><span class="greek">ἐπαίδευσα → ἐπαιδευσ-</span></p><p>This gives the <strong>augmented aorist tense stem</strong></p><p>2. Add <strong>aorist active endings</strong></p></div>' },
            { html: '<table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-α</td><td class="greek">-αμεν</td></tr><tr><td>2nd</td><td class="greek">-ας</td><td class="greek">-ατε</td></tr><tr><td>3rd</td><td class="greek">-ε(ν)</td><td class="greek">-αν</td></tr></table><p style="margin-top:8px">Note the <strong>tense vowel α</strong> (instead of thematic ε/ο) in most endings.</p>' },
            { html: '<table class="intro-table"><tr><th></th><th>Form</th><th>Translation</th></tr><tr><td>1s</td><td class="greek">ἐπαίδευσα</td><td>I educated</td></tr><tr><td>2s</td><td class="greek">ἐπαίδευσας</td><td>you educated</td></tr><tr><td>3s</td><td class="greek">ἐπαίδευσε(ν)</td><td>he/she/it educated</td></tr><tr><td>1p</td><td class="greek">ἐπαιδεύσαμεν</td><td>we educated</td></tr><tr><td>2p</td><td class="greek">ἐπαιδεύσατε</td><td>you (pl.) educated</td></tr><tr><td>3p</td><td class="greek">ἐπαίδευσαν</td><td>they educated</td></tr></table>' }
          ]
        },
        { type: 'verb-form-id', tense: 'aorist', verbIndex: 0 },
        { type: 'verb-form-id', tense: 'aorist', verbIndex: 0 },
        {
          type: 'mc-translate',
          prompt: 'The aorist tense has:',
          correct: 'Simple aspect (action occurred once)',
          options: ['Simple aspect (action occurred once)', 'Progressive/repeated aspect', 'Completed aspect', 'No aspect']
        },
        {
          type: 'mc-translate',
          prompt: 'Aorist endings use the tense vowel:',
          correct: 'α (instead of thematic ε/ο)',
          options: ['α (instead of thematic ε/ο)', 'ε/ο (thematic vowel)', 'η', 'ω']
        },
        { type: 'verb-form-select', tense: 'aorist', verbIndex: 0 },
        { type: 'verb-form-select', tense: 'aorist', verbIndex: 0 },
        {
          type: 'match',
          pairs: [
            ['ἐπαίδευσα', 'I educated'],
            ['ἐπαίδευσας', 'you educated'],
            ['ἐπαίδευσε(ν)', 'he/she/it educated'],
            ['ἐπαιδεύσαμεν', 'we educated'],
            ['ἐπαίδευσαν', 'they educated']
          ]
        },
        { type: 'verb-form-id', tense: 'aorist', verbIndex: 3 },
        { type: 'verb-form-select', tense: 'aorist', verbIndex: 2 },
        {
          type: 'mc-translate',
          prompt: '"I fell once" vs "I used to fall" — which is aorist?',
          correct: '"I fell once" (simple, single occurrence)',
          options: ['"I fell once" (simple, single occurrence)', '"I used to fall" (habitual)', 'Both are aorist', 'Neither is aorist']
        },
        {
          type: 'mc-translate',
          prompt: 'The 3rd person singular aorist ending -ε(ν) is like which imperfect ending?',
          correct: 'The 3rd person singular imperfect ending -ε(ν)',
          options: ['The 3rd person singular imperfect ending -ε(ν)', 'The 1st person singular', 'The 2nd person plural', 'No similarity']
        },
        { type: 'verb-form-id', tense: 'aorist', verbIndex: 1 },
        { type: 'verb-form-select', tense: 'aorist', verbIndex: 3 }
      ]
    },

    // Lesson 34: Agreement & Questions
    {
      id: 34,
      title: 'Agreement & Questions',
      subtitle: 'Subject-verb agreement, ἆρα',
      section: 'Unit 2: Verbs',
      icon: ';',
      exercises: [
        {
          type: 'intro',
          title: 'Agreement & Questions',
          cards: [
            { html: '<p>Each Greek verb form can stand alone as a complete sentence:</p><div class="info-box"><p><span class="greek" style="font-size:20px">παιδεύομεν.</span></p><p>= "We educate." (one word!)</p></div><p>When a noun or pronoun accompanies the verb, it must <strong>agree</strong> in number.</p>' },
            { html: '<p><strong>Agreement rules:</strong></p><div class="info-box"><p>Singular noun → singular verb</p><p>Plural noun → plural verb</p><p><strong>BUT: neuter plural nouns take SINGULAR verbs!</strong></p></div><div class="info-box"><p><span class="greek">οἱ ἄνθρωποι παιδεύ<strong>ουσιν</strong>.</span><br/>The men educate. (pl. + pl.)</p><p><span class="greek">τὰ ἔργα παιδεύ<strong>ει</strong>.</span><br/>The deeds educate. (neut. pl. + sing.!)</p></div>' },
            { html: '<p><strong>Questions</strong> in Greek:</p><div class="info-box"><p>Indicated by a <strong>question mark</strong> (which looks like our semicolon: <strong>;</strong>)</p><p>Optionally introduced by <span class="greek" style="font-size:20px">ἆρα</span> (not separately translated)</p></div><p>Unlike English, Greek does <strong>not</strong> change word order for questions.</p><div class="info-box"><p><span class="greek">ὁ ἄνθρωπος παιδεύει;</span><br/>Does the man educate?</p><p><span class="greek">ἆρα ὁ ἄνθρωπος παιδεύει;</span><br/>Does the man educate?</p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Can a single Greek verb form express a complete sentence?',
          correct: 'Yes — it encodes person and number in its ending',
          options: ['Yes — it encodes person and number in its ending', 'No — a pronoun is always required', 'Only in poetry', 'Only with 3rd person']
        },
        {
          type: 'mc-translate',
          prompt: 'Neuter plural nouns take:',
          correct: 'Singular verbs',
          options: ['Singular verbs', 'Plural verbs', 'No verb at all', 'Dual verbs']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: τὰ τῶν θεῶν ἔργα τοὺς ἀνθρώπους παιδεύει.',
          display: 'τὰ τῶν θεῶν ἔργα τοὺς ἀνθρώπους παιδεύει.', displayGreek: true,
          correct: 'The deeds of the gods educate the men.',
          options: ['The deeds of the gods educate the men.', 'The gods\' deeds are educated by men.', 'The men educate the deeds of the gods.', 'The deed of the god educates the man.']
        },
        {
          type: 'mc-translate',
          prompt: 'Why is παιδεύει (singular) used with τὰ ἔργα (plural)?',
          correct: 'Neuter plural subjects take singular verbs',
          options: ['Neuter plural subjects take singular verbs', 'It is a mistake in the text', 'ἔργα is actually singular', 'The verb agrees with θεῶν']
        },
        {
          type: 'mc-translate',
          prompt: 'The Greek question mark looks like:',
          correct: 'An English semicolon (;)',
          options: ['An English semicolon (;)', 'An English question mark (?)', 'A raised dot (·)', 'An exclamation mark (!)']
        },
        {
          type: 'mc-translate',
          prompt: 'ἆρα at the start of a clause indicates:',
          display: 'ἆρα', displayGreek: true,
          correct: 'A question is being asked (not separately translated)',
          options: ['A question is being asked (not separately translated)', '"Therefore"', '"But"', '"And"']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: ἆρα ὁ ἄνθρωπος παιδεύει;',
          display: 'ἆρα ὁ ἄνθρωπος παιδεύει;', displayGreek: true,
          correct: 'Does the man educate? / Is the man educating?',
          options: ['Does the man educate? / Is the man educating?', 'Therefore the man educates.', 'The man does not educate.', 'The man educated.']
        },
        {
          type: 'match',
          pairs: [
            ['οἱ ἄνθρωποι παιδεύουσιν', 'the men educate (pl. verb)'],
            ['τὰ ἔργα παιδεύει', 'the deeds educate (sing. verb!)'],
            ['ἆρα παιδεύεις;', 'do you educate?'],
            ['παιδεύομεν.', 'we educate (no pronoun needed)'],
            ['ὁ ἄνθρωπος παιδεύει;', 'does the man educate?']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Does Greek change word order to form questions?',
          correct: 'No — only the question mark (and optionally ἆρα) signals a question',
          options: ['No — only the question mark (and optionally ἆρα) signals a question', 'Yes, the verb moves to the front', 'Yes, like English', 'Only in formal prose']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: οἱ ἄνθρωποι τοὺς ἀδελφοὺς παιδεύουσιν.',
          display: 'οἱ ἄνθρωποι τοὺς ἀδελφοὺς παιδεύουσιν.', displayGreek: true,
          correct: 'The men educate their brothers.',
          options: ['The men educate their brothers.', 'The man educates his brother.', 'The brothers educate the men.', 'The men were educating.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: παιδεύει.',
          display: 'παιδεύει.', displayGreek: true,
          correct: 'He/she/it educates. (subject in the verb form)',
          options: ['He/she/it educates. (subject in the verb form)', 'We educate.', 'You educate.', 'I educate.']
        }
      ]
    },

    // Lesson 35: Infinitives
    {
      id: 35,
      title: 'Infinitives',
      subtitle: 'παιδεύειν, παιδεῦσαι',
      section: 'Unit 2: Verbs',
      icon: 'ν',
      exercises: [
        {
          type: 'intro',
          title: 'Infinitives',
          cards: [
            { html: '<p>The <strong>infinitive</strong> is a <em>non-finite</em> verb form — it does not specify person or number.</p><p>It has only <strong>tense</strong> (= aspect) and <strong>voice</strong>.</p><p>English: "to educate"</p>' },
            { html: '<p><strong>Present Infinitive Active:</strong></p><div class="info-box"><p>Present stem + <span class="greek" style="font-size:22px">-ειν</span></p><p><span class="greek" style="font-size:22px">παιδεύ<strong>ειν</strong></span> — to be educating / to educate (habitually)</p></div><p>Aspect: <em>progressive/repeated</em> (NOT present time!)</p>' },
            { html: '<p><strong>Aorist Infinitive Active:</strong></p><div class="info-box"><p>Unaugmented aorist stem + <span class="greek" style="font-size:22px">-αι</span></p><p><span class="greek" style="font-size:22px">παιδεῦσ<strong>αι</strong></span> — to educate (once and for all)</p></div><p>Aspect: <em>simple</em>. Note: the augment ἐ- is <strong>dropped</strong>!</p><p>The accent is always on the <strong>penult</strong> (not recessive).</p>' },
            { html: '<p><strong>Using the infinitive</strong> — with verbs of ordering:</p><div class="info-box"><p><span class="greek">ὁ θεὸς τὸν Ὅμηρον <strong>παιδεύειν</strong> τὸν ἀδελφὸν ἐκέλευσεν.</span></p><p>The god ordered Homer <strong>to be educating</strong> his brother.</p><p><span class="greek">ὁ θεὸς τὸν Ὅμηρον <strong>παιδεῦσαι</strong> τὸν ἀδελφὸν ἐκέλευσεν.</span></p><p>The god ordered Homer <strong>to educate</strong> his brother (once).</p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The present infinitive active ending is:',
          correct: '-ειν',
          options: ['-ειν', '-αι', '-ω', '-ομεν'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'The aorist infinitive active ending is:',
          correct: '-αι',
          options: ['-αι', '-ειν', '-ον', '-ας'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the present infinitive active of λύω?',
          display: 'λύω', displayGreek: true,
          correct: 'λύειν',
          options: ['λύειν', 'λῦσαι', 'λύω', 'ἔλῡον'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'What is the aorist infinitive active of λύω?',
          display: 'PP III: ἔλῡσα', displayGreek: true,
          correct: 'λῦσαι (drop augment, add -αι)',
          options: ['λῦσαι (drop augment, add -αι)', 'λύειν', 'ἐλῦσαι', 'λύσειν'],
          optionsGreek: false
        },
        {
          type: 'mc-translate',
          prompt: 'In the infinitive, tense indicates:',
          correct: 'Aspect only (NOT time)',
          options: ['Aspect only (NOT time)', 'Time only', 'Both time and aspect', 'Neither']
        },
        {
          type: 'mc-translate',
          prompt: 'παιδεύειν has what aspect?',
          display: 'παιδεύειν', displayGreek: true,
          correct: 'Progressive/repeated ("to be educating")',
          options: ['Progressive/repeated ("to be educating")', 'Simple ("to educate once")', 'Completed', 'No aspect']
        },
        {
          type: 'mc-translate',
          prompt: 'παιδεῦσαι has what aspect?',
          display: 'παιδεῦσαι', displayGreek: true,
          correct: 'Simple ("to educate once and for all")',
          options: ['Simple ("to educate once and for all")', 'Progressive/repeated', 'Completed', 'No aspect']
        },
        {
          type: 'match',
          pairs: [
            ['παιδεύειν', 'to be educating (pres. inf.)'],
            ['παιδεῦσαι', 'to educate once (aor. inf.)'],
            ['πέμπειν', 'to be sending (pres. inf.)'],
            ['πέμψαι', 'to send once (aor. inf.)'],
            ['κελεύειν', 'to be ordering (pres. inf.)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'The aorist infinitive drops which element from PP III?',
          correct: 'The past indicative augment ἐ-',
          options: ['The past indicative augment ἐ-', 'The sigma', 'The ending -α', 'Nothing — it uses the full PP III']
        },
        {
          type: 'mc-translate',
          prompt: 'What is the aorist infinitive active of πέμπω?',
          display: 'PP III: ἔπεμψα', displayGreek: true,
          correct: 'πέμψαι',
          options: ['πέμψαι', 'πέμπειν', 'ἐπέμψαι', 'πεμψειν'],
          optionsGreek: true
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: τὸν Ὅμηρον ἐκελεύομεν βιβλία πέμψαι.',
          display: 'τὸν Ὅμηρον ἐκελεύομεν βιβλία πέμψαι.', displayGreek: true,
          correct: 'We were ordering Homer to send books.',
          options: ['We were ordering Homer to send books.', 'Homer was ordering us to send books.', 'We order Homer to send books.', 'Homer sent books to us.']
        },
        {
          type: 'mc-translate',
          prompt: 'The accent on the aorist infinitive active is:',
          correct: 'Always on the penult (not recessive)',
          options: ['Always on the penult (not recessive)', 'Always recessive', 'On the ultima', 'On the antepenult']
        },
        {
          type: 'match',
          pairs: [
            ['λύειν', 'to be freeing (present inf.)'],
            ['λῦσαι', 'to free once (aorist inf.)'],
            ['κελεῦσαι', 'to order once (aorist inf.)'],
            ['κελεύειν', 'to be ordering (present inf.)'],
            ['πέμπειν', 'to be sending (present inf.)']
          ]
        }
      ]
    },

    // Lesson 36: Unit 2 Vocabulary I — Nouns
    {
      id: 36,
      title: 'Vocabulary I',
      subtitle: 'Unit 2 Nouns',
      section: 'Unit 2: Verbs',
      icon: 'φ',
      exercises: [
        { type: 'u2vocab-intro', vocabGroup: 0 },
        { type: 'u2vocab-gre', vocabGroup: 0 },
        { type: 'u2vocab-gre', vocabGroup: 0 },
        { type: 'u2vocab-eng', vocabGroup: 0 },
        { type: 'u2vocab-eng', vocabGroup: 0 },
        { type: 'u2vocab-match', vocabGroup: 0 },
        { type: 'u2vocab-gre', vocabGroup: 0 },
        { type: 'u2vocab-eng', vocabGroup: 0 },
        { type: 'u2vocab-gender', vocabGroup: 0 },
        { type: 'u2vocab-gender', vocabGroup: 0 },
        {
          type: 'match',
          pairs: [
            ['ἄγγελος', 'angel (messenger)'],
            ['ζῷον', 'zoology (animals)'],
            ['ξένος', 'xenophobia (strangers)'],
            ['πόλεμος', 'polemic (warlike)'],
            ['χρῡσός', 'chrysanthemum (golden)']
          ]
        },
        { type: 'u2vocab-gre', vocabGroup: 0 },
        { type: 'u2vocab-eng', vocabGroup: 0 },
        { type: 'u2vocab-match', vocabGroup: 0 }
      ]
    },

    // Lesson 37: Unit 2 Vocabulary II — Verbs, Particles, Prepositions
    {
      id: 37,
      title: 'Vocabulary II',
      subtitle: 'Particles & Prepositions',
      section: 'Unit 2: Verbs',
      icon: 'γ',
      exercises: [
        {
          type: 'intro',
          title: 'Unit 2 Vocabulary: Verbs',
          cards: [
            { html: '<p>Four verbs to learn with all six principal parts:</p><table class="intro-table"><tr><th>Verb</th><th>Meaning</th></tr><tr><td class="greek">κελεύω</td><td>order, command</td></tr><tr><td class="greek">λύω</td><td>unbind, free, destroy</td></tr><tr><td class="greek">παιδεύω</td><td>educate, teach</td></tr><tr><td class="greek">πέμπω</td><td>send</td></tr></table>' },
            { html: '<p><strong>Particles, Conjunctions & Adverbs:</strong></p><div class="info-box"><p><span class="greek">γάρ</span> — for (postpositive: never first in clause)</p><p><span class="greek">δέ</span> — but, and (postpositive)</p><p><span class="greek">μέν...δέ</span> — on the one hand...on the other</p><p><span class="greek">ἆρα</span> — introduces a question</p><p><span class="greek">ἤ</span> — or; <span class="greek">ἤ...ἤ</span> — either...or</p></div>' },
            { html: '<div class="info-box"><p><span class="greek">οὐ, οὐκ, οὐχ</span> — not (proclitic)</p><p style="font-size:13px"><span class="greek">οὐ</span> before consonants, <span class="greek">οὐκ</span> before smooth breathing, <span class="greek">οὐχ</span> before rough breathing</p><p><span class="greek">εὖ</span> — well</p><p><span class="greek">νῦν</span> — now</p><p><span class="greek">ἕξ</span> — six (indeclinable)</p><p><span class="greek">πέντε</span> — five (indeclinable)</p></div>' },
            { html: '<p><strong>New prepositions:</strong></p><div class="info-box"><p><span class="greek">ἀπό</span> + gen. = from, away from</p><p><span class="greek">παρά</span> + gen. = from (the side of)</p><p><span class="greek">παρά</span> + dat. = at (the side of), at the house of</p><p><span class="greek">παρά</span> + acc. = to (the side of), beside; contrary to</p><p><span class="greek">πρό</span> + gen. = before, in front of</p></div>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does γάρ mean?',
          display: 'γάρ', displayGreek: true,
          correct: 'for (explanatory, postpositive)',
          options: ['for (explanatory, postpositive)', 'but', 'and', 'therefore']
        },
        {
          type: 'mc-translate',
          prompt: 'A postpositive conjunction:',
          correct: 'Never stands first in its clause',
          options: ['Never stands first in its clause', 'Always stands first', 'Has no position rule', 'Comes only at the end']
        },
        {
          type: 'mc-translate',
          prompt: 'μέν...δέ expresses:',
          display: 'μέν...δέ', displayGreek: true,
          correct: 'On the one hand...on the other hand',
          options: ['On the one hand...on the other hand', 'Because...therefore', 'If...then', 'Both...and']
        },
        {
          type: 'mc-translate',
          prompt: 'When is οὐχ used instead of οὐ or οὐκ?',
          correct: 'Before words with a rough breathing',
          options: ['Before words with a rough breathing', 'Before consonants', 'Before smooth breathing', 'At the end of sentences']
        },
        {
          type: 'match',
          pairs: [
            ['γάρ', 'for (postpositive)'],
            ['δέ', 'but, and (postpositive)'],
            ['ἆρα', 'introduces a question'],
            ['ἤ', 'or'],
            ['οὐ', 'not']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does ἀπό + genitive mean?',
          display: 'ἀπό', displayGreek: true,
          correct: 'From, away from',
          options: ['From, away from', 'Into, toward', 'In, at', 'Before']
        },
        {
          type: 'mc-translate',
          prompt: 'παρά + dative means:',
          display: 'παρά + dat.', displayGreek: true,
          correct: 'At the side of, at the house of',
          options: ['At the side of, at the house of', 'From the side of', 'To the side of', 'Before']
        },
        {
          type: 'mc-translate',
          prompt: 'πρό + genitive means:',
          display: 'πρό', displayGreek: true,
          correct: 'Before, in front of',
          options: ['Before, in front of', 'After, behind', 'From, away from', 'Into']
        },
        {
          type: 'match',
          pairs: [
            ['ἀπό + gen.', 'from, away from'],
            ['παρά + gen.', 'from (the side of)'],
            ['παρά + dat.', 'at (the side of)'],
            ['παρά + acc.', 'to (the side of), beside'],
            ['πρό + gen.', 'before, in front of']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: πρὸ τοῦ πολέμου',
          display: 'πρὸ τοῦ πολέμου', displayGreek: true,
          correct: 'Before the war',
          options: ['Before the war', 'After the war', 'During the war', 'Into the war']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: παρὰ τοῦ Ὁμήρου',
          display: 'παρὰ τοῦ Ὁμήρου', displayGreek: true,
          correct: 'From (the side of) Homer',
          options: ['From (the side of) Homer', 'At Homer\'s house', 'To Homer', 'Before Homer']
        },
        {
          type: 'match',
          pairs: [
            ['εὖ', 'well'],
            ['νῦν', 'now'],
            ['ἕξ', 'six'],
            ['πέντε', 'five'],
            ['ἤ...ἤ', 'either...or']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'What does λύω mean?',
          display: 'λύω', displayGreek: true,
          correct: 'Unbind, free, destroy',
          options: ['Unbind, free, destroy', 'Send', 'Order', 'Educate']
        },
        {
          type: 'mc-translate',
          prompt: 'What does κελεύω mean?',
          display: 'κελεύω', displayGreek: true,
          correct: 'Order, command',
          options: ['Order, command', 'Educate', 'Send', 'Free']
        }
      ]
    },

    // Lesson 38: Unit 2 Review — Sentences
    {
      id: 38,
      title: 'Unit 2 Review',
      subtitle: 'Translate Sentences',
      section: 'Unit 2: Verbs',
      icon: '📖',
      exercises: [
        {
          type: 'intro',
          title: 'Unit 2 Review',
          cards: [
            { html: '<p>Time to put Unit 2 together! You\'ll translate sentences using:</p><ul style="text-align:left;line-height:2"><li>Present, imperfect, future, and aorist tenses</li><li>New vocabulary: verbs, nouns, particles</li><li>Infinitives with κελεύω</li><li>Prepositions: ἀπό, παρά, πρό</li><li>Connectives: γάρ, δέ, μέν...δέ</li></ul>' }
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'οἱ θεοὶ δῶρα ἔπεμπον εἰς τὴν χώρᾱν.', displayGreek: true,
          correct: 'The gods used to send gifts into the land.',
          options: ['The gods used to send gifts into the land.', 'The gods will send gifts into the land.', 'The gods send gifts into the land.', 'The gods sent gifts into the land (once).']
        },
        {
          type: 'mc-translate',
          prompt: 'ἔπεμπον is what tense?',
          display: 'ἔπεμπον', displayGreek: true,
          correct: 'Imperfect (past + progressive/repeated)',
          options: ['Imperfect (past + progressive/repeated)', 'Aorist (past + simple)', 'Present', 'Future']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'πέντε βιβλία τοῖς ξένοις ἔπεμψεν ὁ Ὅμηρος.', displayGreek: true,
          correct: 'Homer sent five books to the guest-friends.',
          options: ['Homer sent five books to the guest-friends.', 'Homer was sending five books.', 'Homer will send five books.', 'The guest-friends sent Homer five books.']
        },
        {
          type: 'mc-translate',
          prompt: 'ἔπεμψεν is what tense?',
          display: 'ἔπεμψεν', displayGreek: true,
          correct: 'Aorist (past + simple — a single action)',
          options: ['Aorist (past + simple — a single action)', 'Imperfect (past + progressive)', 'Present', 'Future']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ἆρα λύσετε καὶ τὴν τῆς θεοῦ φιλίᾱν;', displayGreek: true,
          correct: 'Will you (pl.) destroy even the friendship of the goddess?',
          options: ['Will you (pl.) destroy even the friendship of the goddess?', 'Did you destroy the goddess\'s friendship?', 'You are destroying the goddess\'s friendship.', 'The goddess destroyed your friendship.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τοῖς μὲν ξένοις στεφάνους πέμψομεν, τοῖς δὲ φίλοις βιβλία.', displayGreek: true,
          correct: 'To the strangers we shall send crowns, but to the friends, books.',
          options: ['To the strangers we shall send crowns, but to the friends, books.', 'The strangers sent crowns, the friends sent books.', 'We were sending crowns and books.', 'The friends and strangers send crowns.']
        },
        {
          type: 'match',
          pairs: [
            ['ἔπεμπον', 'imperfect (was sending)'],
            ['ἔπεμψεν', 'aorist (sent, once)'],
            ['πέμψομεν', 'future (we shall send)'],
            ['πέμπει', 'present (sends)'],
            ['πέμπειν', 'present infinitive (to send)']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ θεὸς τὸν Ὅμηρον λῦσαι τοὺς ἀνθρώπους ἐκέλευσεν.', displayGreek: true,
          correct: 'The god ordered Homer to free the men (once and for all).',
          options: ['The god ordered Homer to free the men (once and for all).', 'The god was ordering Homer to free the men.', 'Homer ordered the god to free the men.', 'The men ordered Homer to free the god.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὦ ξένε, ζῷα πέμπεις εἰς ἀγορὰν ἢ οὔ;', displayGreek: true,
          correct: 'Stranger, are you sending animals to the marketplace or not?',
          options: ['Stranger, are you sending animals to the marketplace or not?', 'The stranger sent animals to the marketplace.', 'Stranger, do you order animals?', 'The animals are sent to the stranger.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τοὺς πολέμους ἢ λόγοις ἢ ἔργοις ἐλύομεν.', displayGreek: true,
          correct: 'We used to resolve the wars either by words or by deeds.',
          options: ['We used to resolve the wars either by words or by deeds.', 'We shall resolve the wars by words.', 'We resolved the war by deeds (once).', 'The wars freed us by word and deed.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος τοὺς ἐν τῇ οἰκίᾳ φίλους εὖ παιδεύσει.', displayGreek: true,
          correct: 'Homer will educate the friends in the house well.',
          options: ['Homer will educate the friends in the house well.', 'Homer educated the friends well.', 'Homer was educating the friends.', 'The friends educate Homer well.']
        },
        {
          type: 'match',
          pairs: [
            ['γάρ', 'for (postpositive)'],
            ['μέν...δέ', 'on one hand...on the other'],
            ['ἆρα', 'introduces a question'],
            ['οὐ', 'not'],
            ['εὖ', 'well']
          ]
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ἔργῳ, οὐ λόγῳ, τοὺς φίλους ἔλῡον.', displayGreek: true,
          correct: 'By deed, not by word, I used to free my friends.',
          options: ['By deed, not by word, I used to free my friends.', 'By word, not by deed, I freed my friends.', 'The friends freed me by deeds.', 'I did not free my friends by deed.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'οἱ ἕξ ἀδελφοὶ χρῡσοῦ στέφανον ἔπεμπον παρὰ τὸν Ὅμηρον.', displayGreek: true,
          correct: 'The six brothers were sending a crown of gold to Homer.',
          options: ['The six brothers were sending a crown of gold to Homer.', 'Homer sent six golden crowns.', 'The brothers will send a gold crown.', 'Six crowns were sent from Homer.']
        }
      ]
    }
  ];

  // Helper to build a letter table HTML
  function buildLetterTable(group) {
    var html = '<table class="intro-table">';
    html += '<tr><th>Upper</th><th>Lower</th><th>Name</th><th>Sound</th></tr>';
    for (var i = 0; i < group.length; i++) {
      var l = group[i];
      html += '<tr><td class="greek">' + l.upper + '</td><td class="greek">' + l.lower + '</td><td>' + l.name + '</td><td style="font-size:13px">' + (l.pronHtml || l.pron) + '</td></tr>';
    }
    html += '</table>';
    return html;
  }

  return {
    alphabet: alphabet,
    alphaGroups: alphaGroups,
    breathingExamples: breathingExamples,
    vowelData: vowelData,
    diphthongs: diphthongs,
    iotaSubscriptData: iotaSubscriptData,
    consonantClasses: consonantClasses,
    punctuation: punctuation,
    accents: accents,
    unit1Vocab: unit1Vocab,
    unit1VocabAll: unit1VocabAll,
    unit1Sentences: unit1Sentences,
    unit2Vocab: unit2Vocab,
    unit2VocabAll: unit2VocabAll,
    allVocabAll: allVocabAll,
    unit2Verbs: unit2Verbs,
    personLabels: personLabels,
    unit2Particles: unit2Particles,
    unit2Cognates: unit2Cognates,
    unit2Sentences: unit2Sentences,
    lessons: lessons,
    buildLetterTable: buildLetterTable
  };
})();
