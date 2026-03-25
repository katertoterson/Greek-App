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

  var unit3Vocab = [
    [
      { greek: 'ἆθλον', article: 'τό', gender: 'neuter', declension: '2nd', english: 'prize' },
      { greek: 'ἀρετή', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'excellence, virtue' },
      { greek: 'βουλή', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'will; council' },
      { greek: 'δῆμος', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'the people' },
      { greek: 'δημοκρατίᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'democracy' },
      { greek: 'εἰρήνη', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'peace' },
      { greek: 'ἐκκλησίᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'assembly' },
      { greek: 'θυσίᾱ', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'sacrifice' },
      { greek: 'νίκη', article: 'ἡ', gender: 'feminine', declension: '1st', english: 'victory' },
      { greek: 'ὀφθαλμός', article: 'ὁ', gender: 'masculine', declension: '2nd', english: 'eye' }
    ]
  ];

  var unit3VocabAll = [];
  unit3Vocab.forEach(function(group) {
    group.forEach(function(w) { unit3VocabAll.push(w); });
  });

  var allVocabAll = unit1VocabAll.concat(unit2VocabAll).concat(unit3VocabAll);

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

  var unit3Verbs = [
    { verb: 'γράφω', meaning: 'write, draw',
      pp: ['γράφω', 'γράψω', 'ἔγραψα', 'γέγραφα', 'γέγραμμαι', 'ἐγράφην'],
      present: ['γράφω', 'γράφεις', 'γράφει', 'γράφομεν', 'γράφετε', 'γράφουσι(ν)'],
      imperfect: ['ἔγραφον', 'ἔγραφες', 'ἔγραφε(ν)', 'ἐγράφομεν', 'ἐγράφετε', 'ἔγραφον'],
      future: ['γράψω', 'γράψεις', 'γράψει', 'γράψομεν', 'γράψετε', 'γράψουσι(ν)'],
      aorist: ['ἔγραψα', 'ἔγραψας', 'ἔγραψε(ν)', 'ἐγράψαμεν', 'ἐγράψατε', 'ἔγραψαν'],
      perfect: ['γέγραφα', 'γέγραφας', 'γέγραφε(ν)', 'γεγράφαμεν', 'γεγράφατε', 'γεγράφᾱσι(ν)'],
      pluperfect: ['ἐγεγράφη', 'ἐγεγράφης', 'ἐγεγράφει(ν)', 'ἐγεγράφεμεν', 'ἐγεγράφετε', 'ἐγεγράφεσαν'],
      perfInf: 'γεγραφέναι',
      presSub: ['γράφω', 'γράφῃς', 'γράφῃ', 'γράφωμεν', 'γράφητε', 'γράφωσι(ν)'],
      aorSub: ['γράψω', 'γράψῃς', 'γράψῃ', 'γράψωμεν', 'γράψητε', 'γράψωσι(ν)'],
      presOpt: ['γράφοιμι', 'γράφοις', 'γράφοι', 'γράφοιμεν', 'γράφοιτε', 'γράφοιεν'],
      aorOpt: ['γράψαιμι', 'γράψαις', 'γράψαι', 'γράψαιμεν', 'γράψαιτε', 'γράψαιεν'],
      presInf: 'γράφειν', aorInf: 'γράψαι' },
    { verb: 'θύω', meaning: 'sacrifice',
      pp: ['θύω', 'θύσω', 'ἔθῡσα', 'τέθυκα', 'τέθυμαι', 'ἐτύθην'],
      present: ['θύω', 'θύεις', 'θύει', 'θύομεν', 'θύετε', 'θύουσι(ν)'],
      imperfect: ['ἔθῡον', 'ἔθῡες', 'ἔθῡε(ν)', 'ἐθύομεν', 'ἐθύετε', 'ἔθῡον'],
      future: ['θύσω', 'θύσεις', 'θύσει', 'θύσομεν', 'θύσετε', 'θύσουσι(ν)'],
      aorist: ['ἔθῡσα', 'ἔθῡσας', 'ἔθῡσε(ν)', 'ἐθύσαμεν', 'ἐθύσατε', 'ἔθῡσαν'],
      perfect: ['τέθυκα', 'τέθυκας', 'τέθυκε(ν)', 'τεθύκαμεν', 'τεθύκατε', 'τεθύκᾱσι(ν)'],
      pluperfect: ['ἐτεθύκη', 'ἐτεθύκης', 'ἐτεθύκει(ν)', 'ἐτεθύκεμεν', 'ἐτεθύκετε', 'ἐτεθύκεσαν'],
      perfInf: 'τεθυκέναι',
      presSub: ['θύω', 'θύῃς', 'θύῃ', 'θύωμεν', 'θύητε', 'θύωσι(ν)'],
      aorSub: ['θύσω', 'θύσῃς', 'θύσῃ', 'θύσωμεν', 'θύσητε', 'θύσωσι(ν)'],
      presOpt: ['θύοιμι', 'θύοις', 'θύοι', 'θύοιμεν', 'θύοιτε', 'θύοιεν'],
      aorOpt: ['θύσαιμι', 'θύσαις', 'θύσαι', 'θύσαιμεν', 'θύσαιτε', 'θύσαιεν'],
      presInf: 'θύειν', aorInf: 'θῦσαι' },
    { verb: 'παύω', meaning: 'make stop, stop',
      pp: ['παύω', 'παύσω', 'ἔπαυσα', 'πέπαυκα', 'πέπαυμαι', 'ἐπαύθην'],
      present: ['παύω', 'παύεις', 'παύει', 'παύομεν', 'παύετε', 'παύουσι(ν)'],
      imperfect: ['ἔπαυον', 'ἔπαυες', 'ἔπαυε(ν)', 'ἐπαύομεν', 'ἐπαύετε', 'ἔπαυον'],
      future: ['παύσω', 'παύσεις', 'παύσει', 'παύσομεν', 'παύσετε', 'παύσουσι(ν)'],
      aorist: ['ἔπαυσα', 'ἔπαυσας', 'ἔπαυσε(ν)', 'ἐπαύσαμεν', 'ἐπαύσατε', 'ἔπαυσαν'],
      perfect: ['πέπαυκα', 'πέπαυκας', 'πέπαυκε(ν)', 'πεπαύκαμεν', 'πεπαύκατε', 'πεπαύκᾱσι(ν)'],
      pluperfect: ['ἐπεπαύκη', 'ἐπεπαύκης', 'ἐπεπαύκει(ν)', 'ἐπεπαύκεμεν', 'ἐπεπαύκετε', 'ἐπεπαύκεσαν'],
      perfInf: 'πεπαυκέναι',
      presSub: ['παύω', 'παύῃς', 'παύῃ', 'παύωμεν', 'παύητε', 'παύωσι(ν)'],
      aorSub: ['παύσω', 'παύσῃς', 'παύσῃ', 'παύσωμεν', 'παύσητε', 'παύσωσι(ν)'],
      presOpt: ['παύοιμι', 'παύοις', 'παύοι', 'παύοιμεν', 'παύοιτε', 'παύοιεν'],
      aorOpt: ['παύσαιμι', 'παύσαις', 'παύσαι', 'παύσαιμεν', 'παύσαιτε', 'παύσαιεν'],
      presInf: 'παύειν', aorInf: 'παῦσαι' },
    { verb: 'φυλάττω', meaning: 'guard',
      pp: ['φυλάττω', 'φυλάξω', 'ἐφύλαξα', 'πεφύλαχα', 'πεφύλαγμαι', 'ἐφυλάχθην'],
      present: ['φυλάττω', 'φυλάττεις', 'φυλάττει', 'φυλάττομεν', 'φυλάττετε', 'φυλάττουσι(ν)'],
      imperfect: ['ἐφύλαττον', 'ἐφύλαττες', 'ἐφύλαττε(ν)', 'ἐφυλάττομεν', 'ἐφυλάττετε', 'ἐφύλαττον'],
      future: ['φυλάξω', 'φυλάξεις', 'φυλάξει', 'φυλάξομεν', 'φυλάξετε', 'φυλάξουσι(ν)'],
      aorist: ['ἐφύλαξα', 'ἐφύλαξας', 'ἐφύλαξε(ν)', 'ἐφυλάξαμεν', 'ἐφυλάξατε', 'ἐφύλαξαν'],
      perfect: ['πεφύλαχα', 'πεφύλαχας', 'πεφύλαχε(ν)', 'πεφυλάχαμεν', 'πεφυλάχατε', 'πεφυλάχᾱσι(ν)'],
      pluperfect: ['ἐπεφυλάχη', 'ἐπεφυλάχης', 'ἐπεφυλάχει(ν)', 'ἐπεφυλάχεμεν', 'ἐπεφυλάχετε', 'ἐπεφυλάχεσαν'],
      perfInf: 'πεφυλαχέναι',
      presSub: ['φυλάττω', 'φυλάττῃς', 'φυλάττῃ', 'φυλάττωμεν', 'φυλάττητε', 'φυλάττωσι(ν)'],
      aorSub: ['φυλάξω', 'φυλάξῃς', 'φυλάξῃ', 'φυλάξωμεν', 'φυλάξητε', 'φυλάξωσι(ν)'],
      presOpt: ['φυλάττοιμι', 'φυλάττοις', 'φυλάττοι', 'φυλάττοιμεν', 'φυλάττοιτε', 'φυλάττοιεν'],
      aorOpt: ['φυλάξαιμι', 'φυλάξαις', 'φυλάξαι', 'φυλάξαιμεν', 'φυλάξαιτε', 'φυλάξαιεν'],
      presInf: 'φυλάττειν', aorInf: 'φυλάξαι' }
  ];

  var paideuoFull = {
    perfect: ['πεπαίδευκα', 'πεπαίδευκας', 'πεπαίδευκε(ν)', 'πεπαιδεύκαμεν', 'πεπαιδεύκατε', 'πεπαιδεύκᾱσι(ν)'],
    pluperfect: ['ἐπεπαιδεύκη', 'ἐπεπαιδεύκης', 'ἐπεπαιδεύκει(ν)', 'ἐπεπαιδεύκεμεν', 'ἐπεπαιδεύκετε', 'ἐπεπαιδεύκεσαν'],
    perfInf: 'πεπαιδευκέναι',
    presSub: ['παιδεύω', 'παιδεύῃς', 'παιδεύῃ', 'παιδεύωμεν', 'παιδεύητε', 'παιδεύωσι(ν)'],
    aorSub: ['παιδεύσω', 'παιδεύσῃς', 'παιδεύσῃ', 'παιδεύσωμεν', 'παιδεύσητε', 'παιδεύσωσι(ν)'],
    presOpt: ['παιδεύοιμι', 'παιδεύοις', 'παιδεύοι', 'παιδεύοιμεν', 'παιδεύοιτε', 'παιδεύοιεν'],
    aorOpt: ['παιδεύσαιμι', 'παιδεύσαις', 'παιδεύσαι', 'παιδεύσαιμεν', 'παιδεύσαιτε', 'παιδεύσαιεν']
  };

  var unit3Particles = [
    { greek: 'ἀλλά', english: 'but (stronger than δέ)' },
    { greek: 'ἀντί', english: 'instead of (+ gen.)' },
    { greek: 'δή', english: 'in fact, of course (postpos. particle)' },
    { greek: 'διά', english: 'through (+ gen.); on account of (+ acc.)' },
    { greek: 'ἐπεί', english: 'after, when, since' },
    { greek: 'ἐπειδή', english: 'after, when, since' },
    { greek: 'ἵνα', english: 'in order that' },
    { greek: 'μή', english: 'not (with non-indicative moods)' },
    { greek: 'ὅπως', english: 'in order that' },
    { greek: 'περί', english: 'concerning (+ gen.); around (+ dat./acc.)' },
    { greek: 'ὡς', english: 'in order that' }
  ];

  var unit3Cognates = [
    ['ἆθλον', 'athlete (one who competes for a prize)'],
    ['ἀντί', 'antipope (set up instead of)'],
    ['γράφω', 'telegraph, graphic (writing/drawing)'],
    ['δῆμος', 'democracy, demagogue (the people)'],
    ['διά', 'diagonal, diameter (through)'],
    ['εἰρήνη', 'Irene (peace)'],
    ['ἐκκλησίᾱ', 'ecclesiastical (assembly of God)'],
    ['νίκη', 'Nike (victory)'],
    ['ὀφθαλμός', 'ophthalmologist (eye doctor)'],
    ['παύω', 'pause (a stop in action)'],
    ['περί', 'perimeter (measure around)'],
    ['φυλάττω', 'prophylactic (guarding before)']
  ];

  var unit3Sentences = [
    { greek: 'ὁ δῆμος ἐν ταῖς ὁδοῖς τοῖς θεοῖς θύσει ἵνα τὸν πόλεμον παύσωσιν.', english: 'The people will sacrifice to the gods in the streets in order that they may stop the war.' },
    { greek: 'ἀγγέλους ἔπεμψαν ἐξ ἀγορᾶς οἱ ξένοι ὅπως λύσαιεν τὴν εἰρήνην.', english: 'The strangers sent messengers from the marketplace in order that they might break the peace.' },
    { greek: 'ἵνα λύσωμεν τὸν Ὅμηρον δῶρα πεπόμφᾱσιν.', english: 'In order that we may free Homer, they have sent gifts.' },
    { greek: 'λόγῳ μὲν τὴν εἰρήνην ἐλελύκεσαν, ἔργῳ δὲ οὔ.', english: 'In word they had broken the peace, but in deed they had not.' },
    { greek: 'διὰ τὴν τῶν θεῶν βουλὴν ἐπεπαύκεμεν τὸν πόλεμον.', english: 'On account of the will of the gods, we had stopped the war.' },
    { greek: 'ἐπειδὴ τοὺς παρὰ τῶν ξένων ἀγγέλους ἐφυλάξαμεν, τὴν δημοκρατίᾱν οὐκ ἔλῡσαν.', english: 'After we guarded the messengers from the strangers, they did not destroy the democracy.' },
    { greek: 'διὰ τὰς ἀρετὰς τοῖς φίλοις στεφάνους, ἆθλα νίκης, ἐπεπόμφεμεν.', english: 'On account of their virtues, we had sent wreaths, prizes of victory, to our friends.' },
    { greek: 'τοὺς ἀδελφοὺς ἐκέλευσε τὸν πόλεμον παῦσαι πρὸ τῆς νίκης.', english: 'He ordered the brothers to stop the war before the victory.' },
    { greek: 'τὰ τοῦ Ὁμήρου βιβλία τοὺς ξένους πεπαίδευκεν.', english: 'The books of Homer have educated the strangers.' },
    { greek: 'ἔθῡες τοῖς θεοῖς ἵνα παιδεύοιεν τοὺς ξένους.', english: 'You were sacrificing to the gods in order that they might educate the strangers.' }
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
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the battle" in nominative singular:',
          display: 'the battle',
          answer: 'ἡ μάχη',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the soul" in nominative singular:',
          display: 'the soul',
          answer: 'ἡ ψῡχή',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
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
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the brother" in nominative singular:',
          display: 'the brother',
          answer: 'ὁ ἀδελφός',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the word; the speech" in nominative singular:',
          display: 'the word; the speech',
          answer: 'ὁ λόγος',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
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
        { type: 'vocab-eng', vocabGroup: 2 },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the island" in nominative singular:',
          display: 'the island',
          answer: 'ἡ νῆσος',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the gift" in nominative singular:',
          display: 'the gift',
          answer: 'τό δῶρον',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        }
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
          options: ['The brother sends the gifts to the islands.', 'The brother educates the men on the islands.', 'The gifts send the brother to the islands.', 'The islands send the gifts to the brother.']
        },
        {
          type: 'mc-translate',
          prompt: 'What does καί mean as a conjunction?',
          display: 'καί', displayGreek: true,
          correct: 'and',
          options: ['and', 'or', 'but', 'not']
        },
        {
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'τέχνῃ καὶ τὸν ἀδελφὸν παιδεύει ὁ Ὅμηρος.',
          displayGreek: true,
          answer: ['Homer', 'educates', 'even', 'his', 'brother', 'with', 'skill'],
          distractors: ['sends', 'brothers', 'men']
        },
        {
          type: 'mc-translate',
          prompt: 'What does καί mean as an adverb?',
          display: 'καὶ Ὅμηρος', displayGreek: true,
          correct: 'even, also (even Homer, also Homer)',
          options: ['even, also (even Homer, also Homer)', 'and Homer (Homer and someone else)', 'but Homer (contrasting with another)', 'not Homer (negating the subject)']
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
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'ὁ ἀδελφὸς τοῦ Ὁμήρου παιδεύει τοὺς ἀνθρώπους τοὺς ἐν τῇ ἀγορᾷ.',
          displayGreek: true,
          answer: ['the', 'brother', 'of', 'Homer', 'educates', 'the', 'men', 'in', 'the', 'marketplace'],
          distractors: ['sends', 'brothers', 'man', 'island']
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
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'ἐν τῇ οἰκίᾳ ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          answer: ['in', 'the', 'house', 'the', 'man', 'educates', 'his', 'brother', 'by', 'word', 'and', 'deed'],
          distractors: ['sending', 'brothers', 'men', 'gifts']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          correct: 'The man educates his brother by word and deed.',
          options: ['The man educates his brother by word and deed.', 'The brother educates the man by word and deed.', 'The man sends his brother words and deeds.', 'The brother sends the man words and deeds.']
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
          options: ['Homer\'s brother educates the man.', 'Homer educates his brother\'s man.', 'The man educates Homer\'s brother.', 'The brother sends the man gifts.']
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
          options: ['The god sends a gift to Homer\'s brother into the land.', 'Homer\'s brother sends a gift to the god in the land.', 'The god educates Homer\'s brother in the land.', 'The brother sends the god\'s gift from the land.']
        },
        {
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'ὦ Ὅμηρε, ἡ θεὸς τοῖς ἐν τῇ χώρᾳ ἀνθρώποις δῶρα πέμπει.',
          displayGreek: true,
          answer: ['Homer', 'the', 'goddess', 'sends', 'gifts', 'to', 'the', 'men', 'in', 'the', 'country'],
          distractors: ['educates', 'gift', 'sending', 'brothers']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἀδελφὸς τὰ δῶρα εἰς τὰς νήσους πέμπει.',
          displayGreek: true,
          correct: 'The brother sends the gifts to the islands.',
          options: ['The brother sends the gifts to the islands.', 'The brother educates the men on the islands.', 'The gifts send the brother to the islands.', 'The islands send the gifts to the brother.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἐν τῇ νήσῳ ἄνθρωπος τοὺς ἀδελφοὺς εἰς μάχην πέμπει.',
          displayGreek: true,
          correct: 'The man on the island sends the brothers into battle.',
          options: ['The man on the island sends the brothers into battle.', 'The brothers on the island send the man into battle.', 'The man in battle sends the brothers to the island.', 'The island sends the brothers of the man into battle.']
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
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'ὁ ἄνθρωπος τοὺς ἀδελφοὺς καὶ λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          answer: ['the', 'man', 'educates', 'his', 'brothers', 'both', 'by', 'word', 'and', 'by', 'deed'],
          distractors: ['sends', 'brother', 'educating', 'men']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ ἄνθρωπος τὸν ἀδελφὸν λόγῳ καὶ ἔργῳ παιδεύει.',
          displayGreek: true,
          correct: 'The man educates his brother by word and deed.',
          options: ['The man educates his brother by word and deed.', 'The brother educates the man by word and deed.', 'The man sends his brother words and deeds.', 'Words and deeds educate the man\'s brother.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὦ ἄδελφε, ὁ θεὸς τοὺς ἀνθρώπους παιδεύει.',
          displayGreek: true,
          correct: 'Brother, the god educates the men.',
          options: ['Brother, the god educates the men.', 'The god educates his brother\'s men.', 'The men educate the god\'s brother.', 'Brother, the men send gifts to the god.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ θεὸς λόγους εἰς τὰς τῶν ἀνθρώπων ψῡχὰς πέμπει.',
          displayGreek: true,
          correct: 'The god sends words into the souls of the men.',
          options: ['The god sends words into the souls of the men.', 'The men send words into the soul of the god.', 'The god educates the souls of the men with words.', 'The god sends the men\'s souls into the words.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος βιβλίοις παιδεύει τὸν ἀδελφόν.',
          displayGreek: true,
          correct: 'Homer educates his brother with books.',
          options: ['Homer educates his brother with books.', 'Homer sends his brother\'s books.', 'The brother educates Homer with books.', 'Homer sends books to his brother.']
        },
        {
          type: 'word-bank',
          prompt: 'Translate:',
          display: 'ὦ ἄδελφε, καὶ ἐν μάχῃ ὁ θεὸς τοὺς ἀνθρώπους, τοὺς τοῦ Ὁμήρου ἀδελφούς, παιδεύει.',
          displayGreek: true,
          answer: ['brother', 'even', 'in', 'battle', 'the', 'god', 'educates', 'the', 'men', 'the', 'brothers', 'of', 'Homer'],
          distractors: ['sends', 'man', 'gifts', 'educating']
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
          options: ['The brother sends a book from the marketplace to the island.', 'The island sends a book from the brother to the marketplace.', 'The brother educates the island with books from the marketplace.', 'The book sends the brother from the island to the marketplace.']
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
          options: ['Homer educates the men in the marketplace.', 'The men educate Homer in the marketplace.', 'Homer sends the men to the marketplace.', 'Homer educates the men from the marketplace.']
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
          options: ['It changes form by adding endings to stems', 'It always stays the same in every context', 'It only changes form in poetry and prose', 'It has no endings or stem changes at all']
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
          options: ['Greek verb endings encode person — no pronoun needed', 'Greek always requires a separate pronoun for clarity', 'Greek has no person system in its verb forms', 'Greek uses word order instead of verb endings']
        },
        {
          type: 'mc-translate',
          prompt: 'The dual number in Attic Greek is:',
          correct: 'Rare — it indicates a pair of subjects',
          options: ['Rare — it indicates a pair of subjects', 'Very common — used in most verb forms', 'Used for all plurals alongside plural', 'Used only in questions and commands']
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
          options: ['Past indicative augment (ἐ-)', 'Future tense prefix (σ-)', 'Reduplication prefix (Cε-)', 'No changes to the stem']
        },
        {
          type: 'mc-translate',
          prompt: 'The future tense can express:',
          correct: 'Both simple and progressive/repeated aspect',
          options: ['Both simple and progressive/repeated aspect', 'Simple aspect only, never progressive', 'Completed aspect only, never simple', 'No aspect — only time is expressed']
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
          options: ['Imperfect (past + progressive/repeated)', 'Aorist (past + simple aspect)', 'Present (present + progressive)', 'Perfect (present + completed)']
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
          options: ['Receives the action from an outside agency', 'Performs the action on someone else', 'Has special personal involvement', 'Gives a command to someone else']
        },
        {
          type: 'mc-translate',
          prompt: 'The middle voice is unique to Greek. It indicates:',
          correct: 'The subject performs the action with special personal involvement',
          options: ['The subject performs the action with special personal involvement', 'The subject receives the action from an outside agency', 'A command directed at another person to act', 'A hypothetical action that may or may not occur']
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
          options: ['Four (indicative, subjunctive, optative, imperative)', 'Two (active and passive voices only)', 'Three (past, present, and future)', 'Six (one for each principal part)']
        },
        {
          type: 'mc-translate',
          prompt: 'How many voices does Greek have?',
          correct: 'Three (active, middle, passive)',
          options: ['Three (active, middle, passive)', 'Two (active and passive only)', 'Four (active, middle, passive, reflexive)', 'One (active only in all forms)']
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
          correct: 'Present indicative active',
          options: ['Present indicative active', 'Future indicative active', 'Aorist indicative active', 'Perfect indicative active']
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
          options: ['Reduplication (initial consonant doubled with ε)', 'The past indicative augment (prefix ἐ-)', 'A sigma suffix added to the stem', 'No changes at all to the stem']
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
          options: ['No — all six must be learned separately', 'Yes — always from the present stem', 'Only PP II can be derived from PP I', 'Only in regular verbs of the first conjugation']
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
          options: ['Person, number, tense, mood, voice', 'Just the tense and voice alone', 'Case, number, gender, and declension', 'Only the person and number of the form']
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
          options: ['ν added to certain endings before vowels or at sentence end', 'A special accent mark placed on the final syllable', 'An extra syllable added in poetry for meter', 'A prefix added to the stem for past tense']
        },
        {
          type: 'mc-translate',
          prompt: 'Most verb forms have what kind of accent?',
          correct: 'Recessive (as far from the end as possible)',
          options: ['Recessive (as far from the end as possible)', 'Persistent (stays on the same syllable)', 'No accent on the verb form at all', 'Circumflex always on the ultima']
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
          options: ['The augment ἐ- and different endings', 'A σ added in the tense stem', 'Reduplication of the initial consonant', 'Nothing at all — they are the same']
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
          options: ['Both "I was educating" and "they were educating"', 'Only "I was educating" (1st singular)', 'Only "they were educating" (3rd plural)', '"We were educating" (1st person plural)']
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
          options: ['The σ in the future tense stem', 'The augment ἐ- prefix', 'Different personal endings', 'Reduplication of initial consonant']
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
          options: ['Both "we shall educate" and "we shall be educating"', 'Only "we shall educate (once, simple aspect)"', 'Only "we shall be educating (progressive)"', '"We educated (past tense, not future)"']
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
          options: ['"I fell once" (simple, single occurrence)', '"I used to fall" (habitual, repeated)', 'Both are aorist forms of the verb', 'Neither is aorist — both are imperfect']
        },
        {
          type: 'mc-translate',
          prompt: 'The 3rd person singular aorist ending -ε(ν) is like which imperfect ending?',
          correct: 'The 3rd person singular imperfect ending -ε(ν)',
          options: ['The 3rd person singular imperfect ending -ε(ν)', 'The 1st person singular imperfect ending -ον', 'The 2nd person plural imperfect ending -ετε', 'No similarity to any imperfect ending']
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
          options: ['Yes — it encodes person and number in its ending', 'No — a separate pronoun is always required', 'Only in poetry and elevated prose', 'Only with 3rd person singular forms']
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
          options: ['The deeds of the gods educate the men.', 'The gods\' deeds are educated by the men.', 'The men educate the deeds of the gods.', 'The deed of the god educates the man.']
        },
        {
          type: 'mc-translate',
          prompt: 'Why is παιδεύει (singular) used with τὰ ἔργα (plural)?',
          correct: 'Neuter plural subjects take singular verbs',
          options: ['Neuter plural subjects take singular verbs', 'It is a mistake in the Greek text', 'ἔργα is actually a singular noun form', 'The verb agrees with θεῶν not ἔργα']
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
          options: ['A question is being asked (not separately translated)', 'A conclusion is drawn (translated as "therefore")', 'A contrast follows (translated as "but")', 'An addition follows (translated as "and")']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate: ἆρα ὁ ἄνθρωπος παιδεύει;',
          display: 'ἆρα ὁ ἄνθρωπος παιδεύει;', displayGreek: true,
          correct: 'Does the man educate? / Is the man educating?',
          options: ['Does the man educate? / Is the man educating?', 'Therefore the man educates the brothers.', 'The man does not educate anyone at all.', 'The man educated his brother yesterday.']
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
          options: ['No — only the question mark (and optionally ἆρα) signals a question', 'Yes — the verb always moves to the front of the clause', 'Yes — Greek follows the same rules as English does', 'Only in formal prose — informal Greek changes order']
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
          options: ['He/she/it educates. (subject in the verb form)', 'We educate. (the subject is first plural)', 'You educate. (the subject is second person)', 'I educate. (the subject is first singular)']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'ἆρα εἰς μάχην τοὺς ἀδελφοὺς πέμψεις;', displayGreek: true,
          answer: ['will', 'you', 'send', 'your', 'brothers', 'into', 'battle'],
          distractors: ['brother', 'sent', 'from']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'τὰ Ὁμήρου βιβλία ἐπαίδευε τοὺς ἀνθρώπους.', displayGreek: true,
          answer: ["Homer's", 'books', 'were', 'educating', 'the', 'men'],
          distractors: ['educated', 'man', 'sending']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'λύσουσιν οἱ θεοὶ τοὺς ἀνθρώπους τοὺς ἐν τῇ νήσῳ.', displayGreek: true,
          answer: ['the', 'gods', 'will', 'free', 'the', 'men', 'on', 'the', 'island'],
          distractors: ['freed', 'god', 'sending']
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
          options: ['λῦσαι (drop augment, add -αι)', 'λύειν (present stem, add -ειν)', 'ἐλῦσαι (keep augment, add -αι)', 'λύσειν (aorist stem, add -ειν)'],
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
          options: ['Always on the penult (not recessive)', 'Always recessive (as far back as possible)', 'Always on the ultima (last syllable)', 'Always on the antepenult (third from end)']
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
        { type: 'u2vocab-match', vocabGroup: 0 },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the war" in nominative singular:',
          display: 'the war',
          answer: 'ὁ πόλεμος',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the friendship" in nominative singular:',
          display: 'the friendship',
          answer: 'ἡ φιλίᾱ',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        }
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
          options: ['for (explanatory, postpositive)', 'but (contrastive conjunction)', 'and (connective conjunction)', 'therefore (conclusive adverb)']
        },
        {
          type: 'mc-translate',
          prompt: 'A postpositive conjunction:',
          correct: 'Never stands first in its clause',
          options: ['Never stands first in its clause', 'Always stands first in its clause', 'Has no fixed position rule', 'Comes only at the end of a clause']
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
          options: ['Before words with a rough breathing', 'Before words beginning with consonants', 'Before words with a smooth breathing', 'At the end of sentences or clauses']
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
          options: ['At the side of, at the house of', 'From the side of, away from', 'To the side of, toward', 'Before, in front of']
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
          options: ['The gods used to send gifts into the land.', 'The gods will send gifts into the land.', 'The gods send gifts from the land.', 'The gods sent gifts into the land once.']
        },
        {
          type: 'mc-translate',
          prompt: 'ἔπεμπον is what tense?',
          display: 'ἔπεμπον', displayGreek: true,
          correct: 'Imperfect (past + progressive/repeated)',
          options: ['Imperfect (past + progressive/repeated)', 'Aorist (past + simple aspect)', 'Present (present + progressive)', 'Future (future + simple aspect)']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'πέντε βιβλία τοῖς ξένοις ἔπεμψεν ὁ Ὅμηρος.', displayGreek: true,
          correct: 'Homer sent five books to the guest-friends.',
          options: ['Homer sent five books to the guest-friends.', 'Homer was sending five books to the brothers.', 'Homer will send five books to the strangers.', 'The guest-friends sent Homer five books.']
        },
        {
          type: 'mc-translate',
          prompt: 'ἔπεμψεν is what tense?',
          display: 'ἔπεμψεν', displayGreek: true,
          correct: 'Aorist (past + simple — a single action)',
          options: ['Aorist (past + simple — a single action)', 'Imperfect (past + progressive/repeated)', 'Present (present + progressive aspect)', 'Future (future + simple aspect)']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ἆρα λύσετε καὶ τὴν τῆς θεοῦ φιλίᾱν;', displayGreek: true,
          correct: 'Will you (pl.) destroy even the friendship of the goddess?',
          options: ['Will you (pl.) destroy even the friendship of the goddess?', 'Did you (pl.) destroy the friendship of the goddess?', 'You are destroying the friendship of the goddess.', 'The goddess destroyed the friendship of the men.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τοῖς μὲν ξένοις στεφάνους πέμψομεν, τοῖς δὲ φίλοις βιβλία.', displayGreek: true,
          correct: 'To the strangers we shall send crowns, but to the friends, books.',
          options: ['To the strangers we shall send crowns, but to the friends, books.', 'The strangers sent crowns to the friends and books to us.', 'We were sending crowns to the strangers and books to friends.', 'The friends and strangers will send crowns and books to us.']
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
          options: ['The god ordered Homer to free the men (once and for all).', 'The god was ordering Homer to keep freeing the men.', 'Homer ordered the god to free the men at once.', 'The men ordered Homer to free the god from the land.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὦ ξένε, ζῷα πέμπεις εἰς ἀγορὰν ἢ οὔ;', displayGreek: true,
          correct: 'Stranger, are you sending animals to the marketplace or not?',
          options: ['Stranger, are you sending animals to the marketplace or not?', 'The stranger sent animals to the marketplace from the island.', 'Stranger, are you ordering animals from the marketplace?', 'The animals are being sent to the stranger in the marketplace.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'τοὺς πολέμους ἢ λόγοις ἢ ἔργοις ἐλύομεν.', displayGreek: true,
          correct: 'We used to resolve the wars either by words or by deeds.',
          options: ['We used to resolve the wars either by words or by deeds.', 'We shall resolve the wars either by words or by deeds.', 'We resolved the war by deeds, not by words at all.', 'The wars freed us both by words and by deeds.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'ὁ Ὅμηρος τοὺς ἐν τῇ οἰκίᾳ φίλους εὖ παιδεύσει.', displayGreek: true,
          correct: 'Homer will educate the friends in the house well.',
          options: ['Homer will educate the friends in the house well.', 'Homer educated the friends in the house well.', 'Homer was educating the friends in the house well.', 'The friends will educate Homer in the house well.']
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
          options: ['By deed, not by word, I used to free my friends.', 'By word, not by deed, I used to free my friends.', 'By deed, not by word, my friends used to free me.', 'I did not free my friends by deed or by word.']
        },
        {
          type: 'mc-translate',
          prompt: 'Translate:',
          display: 'οἱ ἕξ ἀδελφοὶ χρῡσοῦ στέφανον ἔπεμπον παρὰ τὸν Ὅμηρον.', displayGreek: true,
          correct: 'The six brothers were sending a crown of gold to Homer.',
          options: ['The six brothers were sending a crown of gold to Homer.', 'Homer was sending six crowns of gold to the brothers.', 'The six brothers will send a crown of gold to Homer.', 'The six brothers sent a crown of gold from Homer.']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'οἱ θεοὶ λόγοις τὸν Ὅμηρον ἐπαίδευσαν.', displayGreek: true,
          answer: ['the', 'gods', 'educated', 'Homer', 'with', 'words'],
          distractors: ['educating', 'god', 'from']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'ἡ θεὸς λόγους εἰς τὴν Ὁμήρου ψῡχὴν ἔπεμπεν.', displayGreek: true,
          answer: ['the', 'goddess', 'was', 'sending', 'words', 'into', "Homer's", 'soul'],
          distractors: ['sent', 'souls', 'from']
        },
        { type: 'word-bank', prompt: 'Translate:', display: 'τὸν ἀδελφὸν ἐκ τῆς χώρᾱς πέμψουσιν.', displayGreek: true,
          answer: ['they', 'will', 'send', 'their', 'brother', 'out', 'of', 'the', 'land'],
          distractors: ['brothers', 'sent', 'into']
        }
      ]
    },
    // ---- Unit 3: Perfect, Subjunctive & Optative ----
    // Lesson 39: Perfect Ind. Active
    {
      id: 39,
      title: 'Perfect Ind. Active',
      subtitle: 'Completed Aspect',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'π',
      exercises: [
        { type: 'intro', title: 'The Perfect Indicative Active', cards: [
          { html: '<p>The <strong>perfect indicative active</strong> indicates an action complete from the point of view of present time.</p><p class="greek" style="font-size:20px">πεπαίδευκα = I have (now) educated</p><p>The time is <strong>present</strong>; the aspect is <strong>completed</strong>.</p>' },
          { html: '<p>To form the perfect indicative active, obtain the <strong>perfect active tense stem</strong> by dropping the ending <span class="greek">-α</span> from Principal Part IV.</p><p>Then add these endings:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-α</td><td class="greek">-αμεν</td></tr><tr><td>2nd</td><td class="greek">-ας</td><td class="greek">-ατε</td></tr><tr><td>3rd</td><td class="greek">-ε(ν)</td><td class="greek">-ᾱσι(ν)</td></tr></table>' },
          { html: '<p>The perfect of <span class="greek">παιδεύω</span> (stem: <span class="greek">πεπαιδευκ-</span>):</p><table class="intro-table"><tr><th></th><th>Form</th><th>Meaning</th></tr><tr><td>1st s.</td><td class="greek">πεπαίδευκα</td><td>I have educated</td></tr><tr><td>2nd s.</td><td class="greek">πεπαίδευκας</td><td>you have educated</td></tr><tr><td>3rd s.</td><td class="greek">πεπαίδευκε(ν)</td><td>he/she/it has educated</td></tr><tr><td>1st pl.</td><td class="greek">πεπαιδεύκαμεν</td><td>we have educated</td></tr><tr><td>2nd pl.</td><td class="greek">πεπαιδεύκατε</td><td>you have educated</td></tr><tr><td>3rd pl.</td><td class="greek">πεπαιδεύκᾱσι(ν)</td><td>they have educated</td></tr></table>' },
          { html: '<p><strong>Reduplication:</strong> Many perfect stems are formed by reduplicating the initial consonant with <span class="greek">-ε-</span> inserted between:</p><p class="greek" style="font-size:18px">παιδεύω → <strong>πε</strong>παίδευκα</p><p class="greek" style="font-size:18px">λύω → <strong>λέ</strong>λυκα</p><p class="greek" style="font-size:18px">γράφω → <strong>γέ</strong>γραφα</p><p>The perfect endings are identical to the aorist EXCEPT in the 3rd plural. Compare: <span class="greek">πεπαιδεύκ<strong>ᾱσι</strong>(ν)</span> vs. <span class="greek">ἐπαίδευσ<strong>αν</strong></span>.</p>' }
        ]},
        { type: 'mc-translate', prompt: 'What does the perfect indicative express?', correct: 'An action completed from the point of view of present time', options: ['An action completed from the point of view of present time', 'An action completed from the point of view of past time', 'An action that will be completed at a future time', 'A repeated action from the point of view of present time'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'πεπαίδευκα', displayGreek: true, correct: 'I have educated', options: ['I have educated', 'I was educating', 'I educated', 'I will educate'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'γέγραφας', displayGreek: true, correct: 'you have written', options: ['you have written', 'you were writing', 'you wrote', 'you will write'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'perfect', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'What is the 3rd plural ending of the perfect indicative active?', correct: '-ᾱσι(ν)', options: ['-ᾱσι(ν)', '-ᾱσα(ν)', '-ατε(ν)', '-αμε(ν)'] },
        { type: 'match', pairs: [
          ['πεπαίδευκα', 'I have educated'],
          ['πεπαίδευκας', 'you (s.) have educated'],
          ['πεπαίδευκε(ν)', 'he/she has educated'],
          ['πεπαιδεύκαμεν', 'we have educated'],
          ['πεπαιδεύκᾱσι(ν)', 'they have educated']
        ]},
        { type: 'mc-translate', prompt: 'Translate:', display: 'τέθυκα', displayGreek: true, correct: 'I have sacrificed', options: ['I have sacrificed', 'I sacrificed', 'I was sacrificing', 'I will sacrifice'] },
        { type: 'mc-translate', prompt: 'How is reduplication typically formed in the perfect?', correct: 'Initial consonant + ε + rest of stem', options: ['Initial consonant + ε + rest of stem', 'Prefix ἐ- to the beginning of stem', 'Add σ between the stem and ending', 'Double the entire stem and ending'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'perfect', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'Translate:', display: 'πεφύλαχε(ν)', displayGreek: true, correct: 'he/she has guarded', options: ['he/she has guarded', 'he/she guarded', 'he/she was guarding', 'he/she will guard'] },
        { type: 'mc-translate', prompt: 'Which form is the 3rd plural perfect (NOT aorist)?', correct: 'πεπαιδεύκᾱσι(ν)', options: ['πεπαιδεύκᾱσι(ν)', 'ἐπαίδευσαν', 'πεπαιδεύκατε', 'ἐπαιδεύσαμεν'] }
      ]
    },
    // Lesson 40: Pluperfect Ind. Active
    {
      id: 40,
      title: 'Pluperfect Ind. Active',
      subtitle: 'Past Completed',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'π',
      exercises: [
        { type: 'intro', title: 'The Pluperfect Indicative Active', cards: [
          { html: '<p>The <strong>pluperfect indicative active</strong> indicates an action complete from the point of view of <strong>past</strong> time.</p><p class="greek" style="font-size:20px">ἐπεπαιδεύκη = I had (by then) educated</p><p>Both the perfect and pluperfect have <strong>completed aspect</strong>; they differ only in time (present vs. past).</p>' },
          { html: '<p>To form the pluperfect, prefix the <strong>past indicative augment</strong> <span class="greek">ἐ-</span> to the perfect active tense stem, then add these endings:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-η</td><td class="greek">-εμεν</td></tr><tr><td>2nd</td><td class="greek">-ης</td><td class="greek">-ετε</td></tr><tr><td>3rd</td><td class="greek">-ει(ν)</td><td class="greek">-εσαν</td></tr></table>' },
          { html: '<p>The pluperfect of <span class="greek">παιδεύω</span> (stem: <span class="greek">ἐπεπαιδευκ-</span>):</p><table class="intro-table"><tr><th></th><th>Form</th><th>Meaning</th></tr><tr><td>1st s.</td><td class="greek">ἐπεπαιδεύκη</td><td>I had educated</td></tr><tr><td>2nd s.</td><td class="greek">ἐπεπαιδεύκης</td><td>you had educated</td></tr><tr><td>3rd s.</td><td class="greek">ἐπεπαιδεύκει(ν)</td><td>he/she had educated</td></tr><tr><td>1st pl.</td><td class="greek">ἐπεπαιδεύκεμεν</td><td>we had educated</td></tr><tr><td>2nd pl.</td><td class="greek">ἐπεπαιδεύκετε</td><td>you had educated</td></tr><tr><td>3rd pl.</td><td class="greek">ἐπεπαιδεύκεσαν</td><td>they had educated</td></tr></table>' },
          { html: '<p><strong>Key observations:</strong></p><ul><li>Like other past tenses, the pluperfect takes the <strong>past indicative augment</strong> <span class="greek">ἐ-</span>.</li><li>The tense vowel alternates: <span class="greek">-η-</span> in the singular, <span class="greek">-ε-</span> in the plural (except 3rd sing. <span class="greek">-ει</span>).</li><li>The 3rd singular can take a <strong>nu-movable</strong>.</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'What does the pluperfect indicative express?', correct: 'An action completed from the point of view of past time', options: ['An action completed from the point of view of past time', 'An action completed from the point of view of present time', 'A continuous action from the point of view of past time', 'A future action completed from the point of view of present time'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἐπεπαιδεύκη', displayGreek: true, correct: 'I had educated', options: ['I had educated', 'I have educated', 'I was educating', 'I educated'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἐγεγράφεσαν', displayGreek: true, correct: 'they had written', options: ['they had written', 'they have written', 'they wrote', 'they were writing'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'pluperfect', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'How does the pluperfect differ from the perfect?', correct: 'The pluperfect refers to past time; the perfect to present time', options: ['The pluperfect refers to past time; the perfect to present time', 'The pluperfect has different endings from the imperfect tense', 'The pluperfect uses a different stem from the perfect tense', 'There is no meaningful difference between the two tenses'] },
        { type: 'match', pairs: [
          ['ἐπεπαιδεύκη', 'I had educated'],
          ['ἐπεπαιδεύκης', 'you (s.) had educated'],
          ['ἐπεπαιδεύκει(ν)', 'he/she had educated'],
          ['ἐπεπαιδεύκεμεν', 'we had educated'],
          ['ἐπεπαιδεύκεσαν', 'they had educated']
        ]},
        { type: 'mc-translate', prompt: 'What prefix does the pluperfect add to the perfect stem?', correct: 'The past indicative augment ἐ-', options: ['The past indicative augment ἐ-', 'The reduplication prefix ἀ-', 'No prefix is added at all', 'The temporal augment προ-'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἐτεθύκεσαν', displayGreek: true, correct: 'they had sacrificed', options: ['they had sacrificed', 'they have sacrificed', 'they sacrificed', 'they will sacrifice'] },
        { type: 'mc-translate', prompt: 'In the pluperfect singular, the tense vowel is:', correct: '-η- (except 3rd sing. -ει)', options: ['-η- (except 3rd sing. -ει)', '-ε- (except 3rd sing. -ει)', '-α- (except 3rd sing. -ου)', '-ο- (except 3rd sing. -ᾱ)'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'pluperfect', verbSource: 'unit3' }
      ]
    },
    // Lesson 41: Perfect Infinitive
    {
      id: 41,
      title: 'Perfect Infinitive',
      subtitle: '-έναι',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'π',
      exercises: [
        { type: 'intro', title: 'The Perfect Infinitive Active', cards: [
          { html: '<p>To form the <strong>perfect infinitive active</strong>, add <span class="greek"><strong>-έναι</strong></span> to the perfect active tense stem.</p><p class="greek" style="font-size:22px">πεπαιδευκ- + έναι = πεπαιδευκέναι</p><p>"to have educated"</p><p>The perfect infinitive active is always accented on the <strong>penult</strong>.</p>' },
          { html: '<p>Like other infinitives, the tense of the perfect infinitive shows <strong>aspect only</strong>, not time. Compare:</p><table class="intro-table"><tr><th>Infinitive</th><th>Aspect</th></tr><tr><td class="greek">παιδεύειν</td><td>progressive/repeated</td></tr><tr><td class="greek">παιδεῦσαι</td><td>simple</td></tr><tr><td class="greek">πεπαιδευκέναι</td><td>completed</td></tr></table><p>The present infinitive shows ongoing action, the aorist shows simple action, and the perfect shows completed action.</p>' }
        ]},
        { type: 'mc-translate', prompt: 'What ending forms the perfect infinitive active?', correct: '-έναι', options: ['-έναι', '-ειν', '-σαι', '-εῖν'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'πεπαιδευκέναι', displayGreek: true, correct: 'to have educated', options: ['to have educated', 'to educate', 'to be educating', 'having educated'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'γεγραφέναι', displayGreek: true, correct: 'to have written', options: ['to have written', 'to write', 'to be writing', 'having written'] },
        { type: 'match', pairs: [
          ['παιδεύειν', 'progressive/repeated aspect'],
          ['παιδεῦσαι', 'simple aspect'],
          ['πεπαιδευκέναι', 'completed aspect'],
          ['λύειν', 'to be freeing (progressive)'],
          ['λελυκέναι', 'to have freed (completed)']
        ]},
        { type: 'mc-translate', prompt: 'What does the tense of the perfect infinitive indicate?', correct: 'Completed aspect only, not time', options: ['Completed aspect only, not time', 'Past time only, not aspect', 'Present time only, not aspect', 'Future time only, not aspect'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'τεθυκέναι', displayGreek: true, correct: 'to have sacrificed', options: ['to have sacrificed', 'to sacrifice', 'to be sacrificing', 'having sacrificed'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'πεπαυκέναι', displayGreek: true, correct: 'to have stopped', options: ['to have stopped', 'to stop', 'to be stopping', 'having stopped'] },
        { type: 'mc-translate', prompt: 'Where is the accent on the perfect infinitive?', correct: 'Always on the penult', options: ['Always on the penult', 'Always on the ultima', 'Always on the antepenult', 'It varies'] },
        { type: 'match', pairs: [
          ['πεπαιδευκέναι', 'to have educated'],
          ['γεγραφέναι', 'to have written'],
          ['τεθυκέναι', 'to have sacrificed'],
          ['πεπαυκέναι', 'to have stopped'],
          ['πεφυλαχέναι', 'to have guarded']
        ]}
      ]
    },
    // Lesson 42: Present Subjunctive
    {
      id: 42,
      title: 'Present Subjunctive',
      subtitle: 'Non-Factual Mood',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'σ',
      exercises: [
        { type: 'intro', title: 'The Present Subjunctive Active', cards: [
          { html: '<p>The <strong>subjunctive</strong> and <strong>optative</strong> moods show that the speaker views the action as <strong>non-factual</strong> (non-indicative).</p><p>The translation of a subjunctive varies depending on the type of clause it appears in. One common use is in <strong>purpose clauses</strong>.</p><p>The tense of the subjunctive does <strong>not</strong> indicate time — only <strong>aspect</strong>.</p>' },
          { html: '<p>To form the present subjunctive active, add these endings to the <strong>present tense stem</strong>:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-ω</td><td class="greek">-ωμεν</td></tr><tr><td>2nd</td><td class="greek">-ῃς</td><td class="greek">-ητε</td></tr><tr><td>3rd</td><td class="greek">-ῃ</td><td class="greek">-ωσι(ν)</td></tr></table>' },
          { html: '<p>The present subjunctive of <span class="greek">παιδεύω</span>:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">παιδεύω</td><td class="greek">παιδεύωμεν</td></tr><tr><td>2nd</td><td class="greek">παιδεύῃς</td><td class="greek">παιδεύητε</td></tr><tr><td>3rd</td><td class="greek">παιδεύῃ</td><td class="greek">παιδεύωσι(ν)</td></tr></table><p>The endings are like the present indicative, but with <strong>lengthened thematic vowels</strong> (ο→ω, ε→η). The 1st sing. is identical to the present indicative.</p>' },
          { html: '<p><strong>Key observations:</strong></p><ul><li>The present subjunctive shows <strong>progressive/repeated aspect</strong>, not present time.</li><li>When <span class="greek">-ε-</span> lengthens to <span class="greek">-η-</span> in the 2nd/3rd sing., the <span class="greek">-ι-</span> becomes an <strong>iota subscript</strong>.</li><li>The 2nd plural <span class="greek">-ητε</span> has no iota subscript.</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'What do the subjunctive and optative moods express?', correct: 'Non-factual actions', options: ['Non-factual actions', 'Completed actions', 'Past actions', 'Future actions'] },
        { type: 'mc-translate', prompt: 'How are subjunctive endings related to indicative endings?', correct: 'Same endings but with lengthened thematic vowels', options: ['Same endings but with lengthened thematic vowels', 'Completely different endings from the indicative', 'Identical endings to the present indicative', 'Same endings but with shortened thematic vowels'] },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'παιδεύωμεν', displayGreek: true, correct: 'Present subjunctive active', options: ['Present subjunctive active', 'Present indicative active', 'Aorist subjunctive active', 'Present optative active'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'presSub', verbSource: 'unit3' },
        { type: 'match', pairs: [
          ['παιδεύομεν', 'Present indicative (1st pl.)'],
          ['παιδεύωμεν', 'Present subjunctive (1st pl.)'],
          ['παιδεύῃς', 'Present subjunctive (2nd s.)'],
          ['παιδεύεις', 'Present indicative (2nd s.)'],
          ['παιδεύωσι(ν)', 'Present subjunctive (3rd pl.)']
        ]},
        { type: 'mc-translate', prompt: 'What does the present tense of the subjunctive indicate?', correct: 'Progressive/repeated aspect', options: ['Progressive/repeated aspect', 'Present time specifically', 'Completed aspect only', 'Simple aspect only'] },
        { type: 'mc-translate', prompt: 'Which person of the present subjunctive is identical to the present indicative?', correct: '1st person singular', options: ['1st person singular', '2nd person singular', '3rd person singular', '1st person plural'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'presSub', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'γράφῃ', displayGreek: true, correct: 'Present subjunctive (3rd s.)', options: ['Present subjunctive (3rd s.)', 'Present indicative (3rd s.)', 'Aorist subjunctive (3rd s.)', 'Imperfect indicative (3rd s.)'] },
        { type: 'match', pairs: [
          ['γράφω', 'Indicative OR Subjunctive (1st s.)'],
          ['γράφῃς', 'Subjunctive (2nd s.)'],
          ['γράφῃ', 'Subjunctive (3rd s.)'],
          ['γράφωμεν', 'Subjunctive (1st pl.)'],
          ['γράφωσι(ν)', 'Subjunctive (3rd pl.)']
        ]}
      ]
    },
    // Lesson 43: Aorist Subjunctive
    {
      id: 43,
      title: 'Aorist Subjunctive',
      subtitle: 'Simple Aspect',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'σ',
      exercises: [
        { type: 'intro', title: 'The Aorist Subjunctive Active', cards: [
          { html: '<p>To form the <strong>aorist subjunctive active</strong>, add the <strong>same endings</strong> as the present subjunctive to the <strong>unaugmented aorist tense stem</strong>.</p><p>The past indicative augment is <strong>NOT</strong> used in the aorist subjunctive.</p>' },
          { html: '<p>The aorist subjunctive of <span class="greek">παιδεύω</span> (stem: <span class="greek">παιδευσ-</span>):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">παιδεύσω</td><td class="greek">παιδεύσωμεν</td></tr><tr><td>2nd</td><td class="greek">παιδεύσῃς</td><td class="greek">παιδεύσητε</td></tr><tr><td>3rd</td><td class="greek">παιδεύσῃ</td><td class="greek">παιδεύσωσι(ν)</td></tr></table>' },
          { html: '<p><strong>Key observations:</strong></p><ul><li>The present and aorist subjunctive use the <strong>same endings</strong> — they are distinguished by their <strong>tense stems</strong>.</li><li>The 1st sing. aorist subjunctive often looks like the 1st sing. <strong>future indicative</strong> (e.g., <span class="greek">παιδεύσω</span>). Context distinguishes them.</li><li>There is <strong>NO future subjunctive</strong>.</li><li>The aorist subjunctive shows <strong>simple aspect</strong>, not past time.</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'Does the aorist subjunctive use the augment?', correct: 'No — only the indicative uses the augment', options: ['No — only the indicative uses the augment', 'Yes — all moods use the aorist augment', 'No — only the plural uses the augment', 'Yes — only the singular uses the augment'] },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'παιδεύσωμεν', displayGreek: true, correct: 'Aorist subjunctive active (1st pl.)', options: ['Aorist subjunctive active (1st pl.)', 'Future indicative active (1st pl.)', 'Present subjunctive active (1st pl.)', 'Aorist indicative active (1st pl.)'] },
        { type: 'mc-translate', prompt: 'What aspect does the aorist subjunctive express?', correct: 'Simple aspect', options: ['Simple aspect', 'Progressive aspect', 'Completed aspect', 'Past time'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'aorSub', verbSource: 'unit3' },
        { type: 'match', pairs: [
          ['παιδεύωμεν', 'Present subjunctive (1st pl.)'],
          ['παιδεύσωμεν', 'Aorist subjunctive (1st pl.)'],
          ['παιδεύσω', 'Aorist subj. OR Future ind. (1st s.)'],
          ['ἐπαίδευσα', 'Aorist indicative (1st s.)'],
          ['παιδεύσῃ', 'Aorist subjunctive (3rd s.)']
        ]},
        { type: 'mc-translate', prompt: 'Which form could be EITHER aorist subjunctive OR future indicative?', display: 'παιδεύσω', displayGreek: true, correct: 'Both are possible — context decides', options: ['Both are possible — context decides', 'It is always future indicative', 'It is always aorist subjunctive', 'Neither — they have different forms'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'aorSub', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'γράψῃς', displayGreek: true, correct: 'Aorist subjunctive (2nd s.)', options: ['Aorist subjunctive (2nd s.)', 'Present subjunctive (2nd s.)', 'Future indicative (2nd s.)', 'Aorist indicative (2nd s.)'] },
        { type: 'match', pairs: [
          ['γράψω', 'Aorist subj. OR Future ind. (1st s.)'],
          ['γράψῃς', 'Aorist subjunctive (2nd s.)'],
          ['γράψωμεν', 'Aorist subjunctive (1st pl.)'],
          ['γράψωσι(ν)', 'Aorist subjunctive (3rd pl.)'],
          ['ἔγραψα', 'Aorist indicative (1st s.)']
        ]}
      ]
    },
    // Lesson 44: Present Optative
    {
      id: 44,
      title: 'Present Optative',
      subtitle: '-οι- Suffix',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'ο',
      exercises: [
        { type: 'intro', title: 'The Present Optative Active', cards: [
          { html: '<p>The <strong>optative</strong> is another non-factual mood. Like the subjunctive, its translation varies by clause type.</p><p>To form the present optative active, add these endings to the <strong>present tense stem</strong>:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-οιμι</td><td class="greek">-οιμεν</td></tr><tr><td>2nd</td><td class="greek">-οις</td><td class="greek">-οιτε</td></tr><tr><td>3rd</td><td class="greek">-οι</td><td class="greek">-οιεν</td></tr></table>' },
          { html: '<p>The present optative of <span class="greek">παιδεύω</span>:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">παιδεύοιμι</td><td class="greek">παιδεύοιμεν</td></tr><tr><td>2nd</td><td class="greek">παιδεύοις</td><td class="greek">παιδεύοιτε</td></tr><tr><td>3rd</td><td class="greek">παιδεύοι</td><td class="greek">παιδεύοιεν</td></tr></table>' },
          { html: '<p><strong>Key observations:</strong></p><ul><li>All endings begin with the diphthong <span class="greek"><strong>-οι-</strong></span> (thematic vowel <span class="greek">-ο-</span> + optative suffix <span class="greek">-ι-</span>).</li><li>Compare 1st plural across moods:<br><span class="greek">παιδεύ<strong>ο</strong>μεν</span> (indicative)<br><span class="greek">παιδεύ<strong>ω</strong>μεν</span> (subjunctive)<br><span class="greek">παιδεύ<strong>οι</strong>μεν</span> (optative)</li><li>The final <span class="greek">-οι</span> of the 3rd singular counts as <strong>long</strong> for accentuation.</li><li>Like other non-indicative moods, the present optative shows <strong>progressive/repeated aspect</strong>, not present time.</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'What diphthong characterizes all present optative active endings?', correct: '-οι-', options: ['-οι-', '-ει-', '-αι-', '-ου-'] },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'παιδεύοιμεν', displayGreek: true, correct: 'Present optative active (1st pl.)', options: ['Present optative active (1st pl.)', 'Present subjunctive active (1st pl.)', 'Present indicative active (1st pl.)', 'Aorist optative active (1st pl.)'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'presOpt', verbSource: 'unit3' },
        { type: 'match', pairs: [
          ['παιδεύομεν', 'Present indicative (1st pl.)'],
          ['παιδεύωμεν', 'Present subjunctive (1st pl.)'],
          ['παιδεύοιμεν', 'Present optative (1st pl.)'],
          ['παιδεύοιμι', 'Present optative (1st s.)'],
          ['παιδεύοιεν', 'Present optative (3rd pl.)']
        ]},
        { type: 'mc-translate', prompt: 'What aspect does the present optative indicate?', correct: 'Progressive/repeated aspect', options: ['Progressive/repeated aspect', 'Simple aspect only', 'Completed aspect only', 'Present time specifically'] },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'γράφοις', displayGreek: true, correct: 'Present optative (2nd s.)', options: ['Present optative (2nd s.)', 'Present indicative (2nd s.)', 'Present subjunctive (2nd s.)', 'Aorist optative (2nd s.)'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'presOpt', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'In the 3rd sing. present optative, the final -οι counts as:', correct: 'Long for accentuation', options: ['Long for accentuation', 'Short for accentuation', 'It varies', 'Neither long nor short'] },
        { type: 'match', pairs: [
          ['γράφοιμι', 'Present optative (1st s.)'],
          ['γράφοις', 'Present optative (2nd s.)'],
          ['γράφοι', 'Present optative (3rd s.)'],
          ['γράφοιμεν', 'Present optative (1st pl.)'],
          ['γράφοιεν', 'Present optative (3rd pl.)']
        ]}
      ]
    },
    // Lesson 45: Aorist Optative
    {
      id: 45,
      title: 'Aorist Optative',
      subtitle: '-αι- Suffix',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'ο',
      exercises: [
        { type: 'intro', title: 'The Aorist Optative Active', cards: [
          { html: '<p>To form the <strong>aorist optative active</strong>, add these endings to the <strong>unaugmented aorist tense stem</strong>:</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">-αιμι</td><td class="greek">-αιμεν</td></tr><tr><td>2nd</td><td class="greek">-αις / -ειας</td><td class="greek">-αιτε</td></tr><tr><td>3rd</td><td class="greek">-αι / -ειε(ν)</td><td class="greek">-αιεν / -ειαν</td></tr></table><p>The augment is <strong>NOT</strong> used in the aorist optative.</p>' },
          { html: '<p>The aorist optative of <span class="greek">παιδεύω</span> (stem: <span class="greek">παιδευσ-</span>):</p><table class="intro-table"><tr><th></th><th>Singular</th><th>Plural</th></tr><tr><td>1st</td><td class="greek">παιδεύσαιμι</td><td class="greek">παιδεύσαιμεν</td></tr><tr><td>2nd</td><td class="greek">παιδεύσαις</td><td class="greek">παιδεύσαιτε</td></tr><tr><td>3rd</td><td class="greek">παιδεύσαι</td><td class="greek">παιδεύσαιεν</td></tr></table>' },
          { html: '<p><strong>Key observations:</strong></p><ul><li>The main endings begin with <span class="greek"><strong>-αι-</strong></span> (aorist tense vowel <span class="greek">-α-</span> + optative suffix <span class="greek">-ι-</span>).</li><li>The 2nd s., 3rd s., and 3rd pl. have <strong>alternative forms</strong> with no difference in meaning.</li><li>Compare across moods (1st pl.):<br><span class="greek">ἐπαιδεύσ<strong>α</strong>μεν</span> (aorist indicative)<br><span class="greek">παιδεύσ<strong>ω</strong>μεν</span> (aorist subjunctive)<br><span class="greek">παιδεύσ<strong>αι</strong>μεν</span> (aorist optative)</li><li>The final <span class="greek">-αι</span> of the 3rd singular counts as <strong>long</strong> for accentuation. Distinguish: <span class="greek">παιδεύσαι</span> (optative, long) vs. <span class="greek">παιδεῦσαι</span> (infinitive, short).</li><li>Like the aorist infinitive and subjunctive, the aorist optative indicates only <strong>simple aspect</strong>.</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'What diphthong characterizes the aorist optative active endings?', correct: '-αι-', options: ['-αι-', '-οι-', '-ει-', '-ου-'] },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'παιδεύσαιμεν', displayGreek: true, correct: 'Aorist optative active (1st pl.)', options: ['Aorist optative active (1st pl.)', 'Aorist subjunctive active (1st pl.)', 'Aorist indicative active (1st pl.)', 'Present optative active (1st pl.)'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'aorOpt', verbSource: 'unit3' },
        { type: 'match', pairs: [
          ['ἐπαιδεύσαμεν', 'Aorist indicative (1st pl.)'],
          ['παιδεύσωμεν', 'Aorist subjunctive (1st pl.)'],
          ['παιδεύσαιμεν', 'Aorist optative (1st pl.)'],
          ['παιδεύοιμεν', 'Present optative (1st pl.)'],
          ['παιδεύσαιμι', 'Aorist optative (1st s.)']
        ]},
        { type: 'mc-translate', prompt: 'What aspect does the aorist optative express?', correct: 'Simple aspect only, not past time', options: ['Simple aspect only, not past time', 'Past time only, not aspect', 'Progressive aspect, not time', 'Completed aspect, not time'] },
        { type: 'mc-translate', prompt: 'The 3rd sing. aorist optative παιδεύσαι differs from the aorist infinitive παιδεῦσαι in:', correct: 'Accent and vowel length of final -αι', options: ['Accent and vowel length of final -αι', 'The tense stem used before the ending', 'They are identical in every respect', 'The personal ending after the stem'] },
        { type: 'verb-form-id', verbIndex: 0, tense: 'aorOpt', verbSource: 'unit3' },
        { type: 'mc-translate', prompt: 'Identify the mood:', display: 'γράψαιεν', displayGreek: true, correct: 'Aorist optative (3rd pl.)', options: ['Aorist optative (3rd pl.)', 'Aorist subjunctive (3rd pl.)', 'Present optative (3rd pl.)', 'Aorist indicative (3rd pl.)'] },
        { type: 'match', pairs: [
          ['γράψαιμι', 'Aorist optative (1st s.)'],
          ['γράψαις', 'Aorist optative (2nd s.)'],
          ['γράψαι', 'Aorist optative (3rd s.)'],
          ['γράψαιμεν', 'Aorist optative (1st pl.)'],
          ['γράψαιεν', 'Aorist optative (3rd pl.)']
        ]}
      ]
    },
    // Lesson 46: Sequence of Moods
    {
      id: 46,
      title: 'Sequence of Moods',
      subtitle: 'Primary & Secondary',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'μ',
      exercises: [
        { type: 'intro', title: 'Sequence of Moods', cards: [
          { html: '<p>The indicative tenses are divided into two categories:</p><p><strong>Primary tenses</strong> (present/future time):<br>Present, Future, Perfect, Future Perfect</p><p><strong>Secondary tenses</strong> (past time):<br>Imperfect, Aorist, Pluperfect</p><p>The secondary tenses all have the <strong>past indicative augment</strong>.</p>' },
          { html: '<p><strong>Sequence of moods</strong> means that certain dependent clauses use either the subjunctive or optative depending on the main verb:</p><table class="intro-table"><tr><th>Main Verb</th><th>Dependent Verb</th></tr><tr><td>Primary tense (present, future, perfect)</td><td><strong>Subjunctive</strong></td></tr><tr><td>Secondary tense (imperfect, aorist, pluperfect)</td><td><strong>Optative</strong></td></tr></table><p>Primary tense → subjunctive = <strong>primary sequence</strong><br>Secondary tense → optative = <strong>secondary sequence</strong></p>' },
          { html: '<p>In both the subjunctive and optative, tense indicates <strong>aspect</strong>, not time:</p><ul><li><strong>Present</strong> subjunctive/optative → progressive/repeated aspect</li><li><strong>Aorist</strong> subjunctive/optative → simple aspect</li></ul><p>When translating purpose clauses:<br>Primary sequence → use "<strong>may</strong>"<br>Secondary sequence → use "<strong>might</strong>"</p>' }
        ]},
        { type: 'mc-translate', prompt: 'Which tenses are PRIMARY?', correct: 'Present, future, perfect', options: ['Present, future, perfect', 'Imperfect, aorist, pluperfect', 'Present, imperfect, aorist', 'Future, aorist, perfect'] },
        { type: 'mc-translate', prompt: 'A primary main verb governs which mood in a dependent clause?', correct: 'Subjunctive', options: ['Subjunctive', 'Optative', 'Indicative', 'Imperative'] },
        { type: 'mc-translate', prompt: 'A secondary main verb governs which mood in a dependent clause?', correct: 'Optative', options: ['Optative', 'Subjunctive', 'Indicative', 'Infinitive'] },
        { type: 'match', pairs: [
          ['Present indicative', 'Primary tense → Subjunctive'],
          ['Future indicative', 'Primary tense → Subjunctive'],
          ['Perfect indicative', 'Primary tense → Subjunctive'],
          ['Imperfect indicative', 'Secondary tense → Optative'],
          ['Aorist indicative', 'Secondary tense → Optative']
        ]},
        { type: 'mc-translate', prompt: 'When translating primary sequence, use:', correct: '"may"', options: ['"may"', '"might"', '"will"', '"would"'] },
        { type: 'mc-translate', prompt: 'When translating secondary sequence, use:', correct: '"might"', options: ['"might"', '"may"', '"will"', '"could have"'] },
        { type: 'mc-translate', prompt: 'The main verb is πέμπομεν (present). The dependent verb should be in the:', correct: 'Subjunctive (primary sequence)', options: ['Subjunctive (primary sequence)', 'Optative (secondary sequence)', 'Indicative (primary sequence)', 'Infinitive (no sequence)'] },
        { type: 'mc-translate', prompt: 'The main verb is ἐπέμψαμεν (aorist). The dependent verb should be in the:', correct: 'Optative (secondary sequence)', options: ['Optative (secondary sequence)', 'Subjunctive (primary sequence)', 'Indicative (secondary sequence)', 'Infinitive (no sequence)'] },
        { type: 'match', pairs: [
          ['Present subj.', 'Progressive/repeated aspect'],
          ['Aorist subj.', 'Simple aspect'],
          ['Present opt.', 'Progressive/repeated aspect'],
          ['Aorist opt.', 'Simple aspect'],
          ['Pluperfect ind.', 'Secondary tense → Optative']
        ]}
      ]
    },
    // Lesson 47: Purpose Clauses
    {
      id: 47,
      title: 'Purpose Clauses',
      subtitle: 'ἵνα, ὡς, ὅπως',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'ἵ',
      exercises: [
        { type: 'intro', title: 'Purpose Clauses', cards: [
          { html: '<p>Greek expresses purpose with a clause introduced by <span class="greek"><strong>ἵνα</strong></span>, <span class="greek"><strong>ὡς</strong></span>, or <span class="greek"><strong>ὅπως</strong></span> ("in order that").</p><p>A <strong>negative</strong> purpose clause uses <span class="greek"><strong>ἵνα μή</strong></span>, <span class="greek"><strong>ὡς μή</strong></span>, or <span class="greek"><strong>ὅπως μή</strong></span> ("in order that...not, lest").</p><p>Purpose clauses do <strong>NOT</strong> use the infinitive in Greek (unlike English).</p>' },
          { html: '<p>The mood in a purpose clause follows the <strong>sequence of moods</strong>:</p><p><strong>Primary sequence</strong> (main verb is present, future, or perfect):<br><span class="greek">πέμπομεν δῶρα <strong>ἵνα</strong> λύ<strong>ητε</strong> τοὺς ἀδελφούς.</span><br>"We send gifts <strong>in order that</strong> you <strong>may</strong> free the brothers."</p><p><strong>Secondary sequence</strong> (main verb is imperfect, aorist, or pluperfect):<br><span class="greek">ἐπέμπομεν δῶρα <strong>ἵνα</strong> λύ<strong>οιτε</strong> τοὺς ἀδελφούς.</span><br>"We were sending gifts <strong>in order that</strong> you <strong>might</strong> free the brothers."</p>' },
          { html: '<p><strong>Negation:</strong> Purpose clauses are negated with <span class="greek"><strong>μή</strong></span> (NOT <span class="greek">οὐ</span>).</p><p><span class="greek">οὐ πέμψομεν χρῡσὸν <strong>ἵνα μὴ</strong> ζῷα <strong>πέμψωσιν</strong>.</span><br>"We will not send gold <strong>in order that</strong> they <strong>may not</strong> send animals."</p><p>Remember: <span class="greek">μή</span> negates non-indicative moods; <span class="greek">οὐ</span> negates the indicative.</p>' }
        ]},
        { type: 'mc-translate', prompt: 'Which conjunctions introduce purpose clauses?', correct: 'ἵνα, ὡς, ὅπως', options: ['ἵνα, ὡς, ὅπως', 'ἐπεί, ἐπειδή', 'ἀλλά, δέ, γάρ', 'καί, ἤ, οὐδέ'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'πέμπομεν δῶρα ἵνα λύητε τοὺς ἀδελφούς.', displayGreek: true, correct: 'We send gifts in order that you may free the brothers.', options: ['We send gifts in order that you may free the brothers.', 'We sent gifts in order that you might free the brothers.', 'We are sending gifts in order to free the brothers.', 'We will send the gifts so that you may free the brothers.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἐπέμπομεν δῶρα ἵνα λύοιτε τοὺς ἀδελφούς.', displayGreek: true, correct: 'We were sending gifts in order that you might free the brothers.', options: ['We were sending gifts in order that you might free the brothers.', 'We are sending gifts in order that you may free the brothers.', 'We had sent the gifts in order that you might free the brothers.', 'We were sending gifts and you were freeing the brothers.'] },
        { type: 'mc-translate', prompt: 'How are purpose clauses negated?', correct: 'With μή (not οὐ)', options: ['With μή (not οὐ)', 'With οὐ (not μή)', 'With both μή and οὐ', 'Purpose clauses cannot be negated'] },
        { type: 'match', pairs: [
          ['πέμπομεν...ἵνα λύητε', 'Primary: may free'],
          ['ἐπέμπομεν...ἵνα λύοιτε', 'Secondary: might free'],
          ['πέμψομεν...ἵνα λύσητε', 'Primary: may free (simple)'],
          ['ἐπέμψαμεν...ἵνα λύσαιτε', 'Secondary: might free (simple)'],
          ['ἵνα μή', 'in order that...not']
        ]},
        { type: 'mc-translate', prompt: 'The main verb is πεπόμφᾱσιν (perfect). What mood should the purpose clause verb be in?', correct: 'Subjunctive (perfect is primary)', options: ['Subjunctive (perfect is primary)', 'Optative (perfect is secondary)', 'Indicative (perfect is primary)', 'Infinitive (no sequence applies)'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'ἔπεμψας χρῡσὸν ἵνα πέμψαιμεν βιβλία.', displayGreek: true,
          answer: ['you', 'sent', 'gold', 'in', 'order', 'that', 'we', 'might', 'send', 'books'],
          distractors: ['sending', 'book', 'may', 'gifts']
        },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἔθῡες τοῖς θεοῖς ἵνα παιδεύοιεν τοὺς ξένους.', displayGreek: true, correct: 'You were sacrificing to the gods in order that they might educate the strangers.', options: ['You were sacrificing to the gods in order that they might educate the strangers.', 'You sacrifice to the gods in order that they may educate the strangers.', 'You sacrificed to the gods and you educated the strangers as well.', 'You will sacrifice to the gods in order that they may educate the strangers.'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'λελύκατε τοὺς ἀδελφοὺς ὡς πέμψῃ δῶρα.', displayGreek: true,
          answer: ['you', 'have', 'freed', 'the', 'brothers', 'in', 'order', 'that', 'he', 'may', 'send', 'gifts'],
          distractors: ['sent', 'brother', 'had', 'sending']
        },
        { type: 'mc-translate', prompt: 'Identify the sequence:', display: 'ἐκέλευσε...ὅπως φυλάξαιεν', displayGreek: true, correct: 'Secondary (aorist main verb → optative)', options: ['Secondary (aorist main verb → optative)', 'Primary (present main verb → subjunctive)', 'No sequence — both are indicative', 'Primary (aorist main verb → subjunctive)'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'ἐπαίδευσε τοὺς ἀδελφοὺς ὅπως χρῡσὸν πέμψαις.', displayGreek: true,
          answer: ['he', 'educated', 'the', 'brothers', 'in', 'order', 'that', 'you', 'might', 'send', 'gold'],
          distractors: ['educating', 'brother', 'may', 'sent']
        },
        { type: 'match', pairs: [
          ['ἵνα', 'in order that'],
          ['ὡς', 'in order that'],
          ['ὅπως', 'in order that'],
          ['ἵνα μή', 'lest / in order that...not'],
          ['μή', 'not (non-indicative negation)']
        ]}
      ]
    },
    // Lesson 48: Vocabulary I (Nouns)
    {
      id: 48,
      title: 'Vocabulary I',
      subtitle: 'Unit 3 Nouns',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'ἀ',
      exercises: [
        { type: 'u3vocab-intro', vocabGroup: 0 },
        { type: 'u3vocab-gre', vocabGroup: 0 },
        { type: 'u3vocab-gre', vocabGroup: 0 },
        { type: 'u3vocab-eng', vocabGroup: 0 },
        { type: 'u3vocab-eng', vocabGroup: 0 },
        { type: 'u3vocab-match', vocabGroup: 0 },
        { type: 'u3vocab-gre', vocabGroup: 0 },
        { type: 'u3vocab-eng', vocabGroup: 0 },
        { type: 'u3vocab-gender', vocabGroup: 0 },
        { type: 'u3vocab-gender', vocabGroup: 0 },
        { type: 'match', pairs: [
          ['ἆθλον', 'athlete (prize-winner)'],
          ['δῆμος', 'democracy (the people)'],
          ['εἰρήνη', 'Irene (peace)'],
          ['νίκη', 'Nike (victory)'],
          ['ὀφθαλμός', 'ophthalmologist (eye doctor)']
        ]},
        { type: 'u3vocab-gre', vocabGroup: 0 },
        { type: 'u3vocab-eng', vocabGroup: 0 },
        { type: 'u3vocab-match', vocabGroup: 0 },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the victory" in nominative singular:',
          display: 'the victory',
          answer: 'ἡ νίκη',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the Greek word(s) for "the democracy" in nominative singular:',
          display: 'the democracy',
          answer: 'ἡ δημοκρατίᾱ',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        }
      ]
    },
    // Lesson 49: Vocabulary II (Verbs & Particles)
    {
      id: 49,
      title: 'Vocabulary II',
      subtitle: 'Verbs & Particles',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: 'γ',
      exercises: [
        { type: 'intro', title: 'New Verbs', cards: [
          { html: '<div class="vocab-card"><div class="vocab-greek">γράφω, γράψω, ἔγραψα, γέγραφα</div><div class="vocab-english">write, draw</div><div class="vocab-gender">Originally meant "scratch" or "graze"</div></div>' },
          { html: '<div class="vocab-card"><div class="vocab-greek">θύω, θύσω, ἔθῡσα, τέθυκα</div><div class="vocab-english">sacrifice</div><div class="vocab-gender">Note: reduplication shows τ- not θ- (dissimilation of aspirates)</div></div>' },
          { html: '<div class="vocab-card"><div class="vocab-greek">παύω, παύσω, ἔπαυσα, πέπαυκα</div><div class="vocab-english">make stop, stop</div><div class="vocab-gender">English "pause" comes from this verb</div></div>' },
          { html: '<div class="vocab-card"><div class="vocab-greek">φυλάττω, φυλάξω, ἐφύλαξα, πεφύλαχα</div><div class="vocab-english">guard</div><div class="vocab-gender">PP IV has an aspirated perfect; note dissimilation of aspirates</div></div>' }
        ]},
        { type: 'mc-translate', prompt: 'What does γράφω mean?', display: 'γράφω', displayGreek: true, correct: 'write, draw', options: ['write, draw', 'sacrifice, offer', 'guard, protect', 'stop, make cease'] },
        { type: 'mc-translate', prompt: 'What does θύω mean?', display: 'θύω', displayGreek: true, correct: 'sacrifice, offer', options: ['sacrifice, offer', 'write, draw', 'guard, protect', 'stop, make cease'] },
        { type: 'mc-translate', prompt: 'What does παύω mean?', display: 'παύω', displayGreek: true, correct: 'make stop, stop', options: ['make stop, stop', 'sacrifice, offer', 'write, draw', 'guard, protect'] },
        { type: 'mc-translate', prompt: 'What does φυλάττω mean?', display: 'φυλάττω', displayGreek: true, correct: 'guard, protect', options: ['guard, protect', 'stop, make cease', 'sacrifice, offer', 'write, draw'] },
        { type: 'match', pairs: [
          ['γράφω', 'write, draw'],
          ['θύω', 'sacrifice'],
          ['παύω', 'make stop, stop'],
          ['φυλάττω', 'guard'],
          ['γέγραφα', 'I have written']
        ]},
        { type: 'intro', title: 'Conjunctions & Particles', cards: [
          { html: '<table class="intro-table"><tr><th class="greek">Word</th><th>Meaning</th></tr><tr><td class="greek">ἀλλά</td><td>but (stronger than δέ)</td></tr><tr><td class="greek">δή</td><td>in fact, of course (postpositive)</td></tr><tr><td class="greek">ἐπεί</td><td>after, when, since</td></tr><tr><td class="greek">ἐπειδή</td><td>after, when, since (= ἐπεί + δή)</td></tr></table>' },
          { html: '<table class="intro-table"><tr><th class="greek">Word</th><th>Meaning</th></tr><tr><td class="greek">ἵνα</td><td>in order that</td></tr><tr><td class="greek">ὡς</td><td>in order that</td></tr><tr><td class="greek">ὅπως</td><td>in order that</td></tr><tr><td class="greek">μή</td><td>not (with non-indicative moods)</td></tr></table><p>All three purpose conjunctions mean the same thing.</p><p><span class="greek">μή</span> negates non-indicative moods; <span class="greek">οὐ</span> negates the indicative.</p>' },
          { html: '<table class="intro-table"><tr><th class="greek">Preposition</th><th>Meaning</th></tr><tr><td class="greek">ἀντί + gen.</td><td>instead of</td></tr><tr><td class="greek">διά + gen.</td><td>through</td></tr><tr><td class="greek">διά + acc.</td><td>on account of</td></tr><tr><td class="greek">περί + gen.</td><td>concerning, about</td></tr><tr><td class="greek">περί + dat.</td><td>around</td></tr><tr><td class="greek">περί + acc.</td><td>around, concerning</td></tr></table>' }
        ]},
        { type: 'mc-translate', prompt: 'What does ἀλλά mean?', correct: 'but (stronger contrast)', options: ['but (stronger contrast)', 'and (simple connection)', 'or (alternative option)', 'for (giving a reason)'] },
        { type: 'mc-translate', prompt: 'What does μή negate?', correct: 'Non-indicative moods (subjunctive, optative, etc.)', options: ['Non-indicative moods (subjunctive, optative, etc.)', 'The indicative mood only (present, aorist, etc.)', 'All moods equally (indicative, subjunctive, etc.)', 'Only the future tense (indicative and subjunctive)'] },
        { type: 'match', pairs: [
          ['ἵνα', 'in order that'],
          ['ἀλλά', 'but (strong)'],
          ['ἐπεί', 'after, when, since'],
          ['ἀντί', 'instead of (+ gen.)'],
          ['διά + gen.', 'through']
        ]},
        { type: 'mc-translate', prompt: 'What does διά mean with the accusative?', correct: 'on account of', options: ['on account of', 'by way of', 'all around', 'in place of'] },
        { type: 'match', pairs: [
          ['γράφω', 'telegraph, graphic'],
          ['παύω', 'pause'],
          ['φυλάττω', 'prophylactic'],
          ['περί', 'perimeter'],
          ['ἀντί', 'antipope']
        ]}
      ]
    },
    // Lesson 50: Unit 3 Review
    {
      id: 50,
      title: 'Unit 3 Review',
      subtitle: 'Translate Sentences',
      section: 'Unit 3: Perfect, Subjunctive & Optative',
      icon: '✓',
      exercises: [
        { type: 'mc-translate', prompt: 'Translate:', display: 'ὁ δῆμος ἐν ταῖς ὁδοῖς τοῖς θεοῖς θύσει ἵνα τὸν πόλεμον παύσωσιν.', displayGreek: true, correct: 'The people will sacrifice to the gods in the streets in order that they may stop the war.', options: ['The people will sacrifice to the gods in the streets in order that they may stop the war.', 'The people sacrificed to the gods in the streets in order that they might stop the war.', 'The people were sacrificing to the gods in the streets so that the war might stop.', 'The gods in the streets will stop the war in order that the people may sacrifice.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἵνα λύσωμεν τὸν Ὅμηρον δῶρα πεπόμφᾱσιν.', displayGreek: true, correct: 'In order that we may free Homer, they have sent gifts.', options: ['In order that we may free Homer, they have sent gifts.', 'In order that we might free Homer, they had sent gifts.', 'We freed Homer, and so they have now sent us gifts.', 'In order to free Homer, we ourselves had sent gifts.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'λόγῳ μὲν τὴν εἰρήνην ἐλελύκεσαν, ἔργῳ δὲ οὔ.', displayGreek: true, correct: 'In word they had broken the peace, but in deed they had not.', options: ['In word they had broken the peace, but in deed they had not.', 'In word they have broken the peace, but in deed they have not.', 'They were breaking the peace in word, but not yet in deed.', 'They broke the peace both by their words and by their deeds.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'διὰ τὴν τῶν θεῶν βουλὴν ἐπεπαύκεμεν τὸν πόλεμον.', displayGreek: true, correct: 'On account of the will of the gods, we had stopped the war.', options: ['On account of the will of the gods, we had stopped the war.', 'Through the will of the gods, we have now stopped the war.', 'On account of the will of the gods, they had stopped the war.', 'Because of the will of the gods, we will stop the war.'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'ὡς τὸν πόλεμον παύωσιν ὁ δῆμος ταῖς θεοῖς θύει.', displayGreek: true,
          answer: ['in', 'order', 'that', 'they', 'may', 'stop', 'the', 'war', 'the', 'people', 'sacrifices', 'to', 'the', 'goddesses'],
          distractors: ['stopped', 'wars', 'gods', 'sacrificing']
        },
        { type: 'mc-translate', prompt: 'Identify the sequence and mood:', display: 'πέμπεις χρῡσὸν ἵνα πέμψωμεν βιβλία.', displayGreek: true, correct: 'Primary sequence — aorist subjunctive', options: ['Primary sequence — aorist subjunctive', 'Secondary sequence — aorist optative', 'Primary sequence — present subjunctive', 'No sequence — both are indicative'] },
        { type: 'mc-translate', prompt: 'Identify the sequence and mood:', display: 'ἔπεμψας χρῡσὸν ἵνα πέμψαιμεν βιβλία.', displayGreek: true, correct: 'Secondary sequence — aorist optative', options: ['Secondary sequence — aorist optative', 'Primary sequence — aorist subjunctive', 'Secondary sequence — present optative', 'Primary sequence — present subjunctive'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἐπειδὴ τοὺς ἀγγέλους ἐφυλάξαμεν, τὴν δημοκρατίᾱν οὐκ ἔλῡσαν.', displayGreek: true, correct: 'After we guarded the messengers, they did not destroy the democracy.', options: ['After we guarded the messengers, they did not destroy the democracy.', 'Since we guard the messengers, they do not destroy the democracy.', 'We guarded the messengers and then they destroyed the democracy.', 'After the messengers were guarded, we destroyed the democracy.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'τὰ τοῦ Ὁμήρου βιβλία τοὺς ξένους πεπαίδευκεν.', displayGreek: true, correct: 'The books of Homer have educated the strangers.', options: ['The books of Homer have educated the strangers.', 'The books of Homer had educated the strangers.', 'The strangers have educated Homer with books.', 'Homer has written many books for the strangers.'] },
        { type: 'match', pairs: [
          ['πεπαίδευκα', 'I have educated (perfect)'],
          ['ἐπεπαιδεύκη', 'I had educated (pluperfect)'],
          ['πεπαιδευκέναι', 'to have educated (perf. inf.)'],
          ['παιδεύωμεν', 'pres. subjunctive (1st pl.)'],
          ['παιδεύοιμεν', 'pres. optative (1st pl.)']
        ]},
        { type: 'word-bank', prompt: 'Translate:', display: 'ἀγγέλους ἔπεμπον περὶ τὴν νῆσον ὅπως μὴ λύσιτε τὴν εἰρήνην.', displayGreek: true,
          answer: ['they', 'were', 'sending', 'messengers', 'around', 'the', 'island', 'in', 'order', 'that', 'you', 'might', 'not', 'destroy', 'the', 'peace'],
          distractors: ['sent', 'messenger', 'islands', 'may']
        },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἔθῡες τοῖς θεοῖς ἵνα παιδεύοιεν τοὺς ξένους.', displayGreek: true, correct: 'You were sacrificing to the gods in order that they might educate the strangers.', options: ['You were sacrificing to the gods in order that they might educate the strangers.', 'You sacrifice to the gods in order that they may educate the strangers.', 'You sacrificed to the gods and you were educating the strangers.', 'You will sacrifice to the gods so that they might educate the strangers.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'διὰ τὰς ἀρετὰς τοῖς φίλοις στεφάνους, ἆθλα νίκης, ἐπεπόμφεμεν.', displayGreek: true, correct: 'On account of their virtues, we had sent wreaths, prizes of victory, to our friends.', options: ['On account of their virtues, we had sent wreaths, prizes of victory, to our friends.', 'On account of their virtues, we have sent wreaths, prizes of victory, to our friends.', 'Our friends had sent wreaths, prizes of victory, on account of their virtues.', 'Because of their virtues, we were sending wreaths, prizes of victory, to our friends.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'τοὺς ἀδελφοὺς ἐκέλευσε τὸν πόλεμον παῦσαι πρὸ τῆς νίκης.', displayGreek: true, correct: 'He ordered the brothers to stop the war before the victory.', options: ['He ordered the brothers to stop the war before the victory.', 'The brothers stopped the war before victory.', 'He will order the brothers to win the war.', 'Before the victory, the brothers were stopping the war.'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'τὸν φίλον κελεύσεις δῶρα καὶ θεοῖς καὶ ἀνθρώποις πέμπειν.', displayGreek: true,
          answer: ['you', 'will', 'order', 'your', 'friend', 'to', 'send', 'gifts', 'both', 'to', 'gods', 'and', 'to', 'men'],
          distractors: ['ordered', 'friends', 'sending', 'gift']
        }
      ]
    },

    // ---- Section 7: Review — Units 1–3 ----

    // Lesson 51: Principal Parts
    {
      id: 51,
      title: 'Principal Parts',
      subtitle: 'All 8 Verbs',
      section: 'Review: Units 1–3',
      icon: '🔄',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Principal Parts Review</h3><p>Every Greek verb has <strong>six principal parts</strong>. Knowing these is the key to forming any tense.</p><table class="intro-table"><tr><th>#</th><th>Tense</th><th>Example (γράφω)</th></tr><tr><td>1st</td><td>Present</td><td class="greek">γράφω</td></tr><tr><td>2nd</td><td>Future</td><td class="greek">γράψω</td></tr><tr><td>3rd</td><td>Aorist</td><td class="greek">ἔγραψα</td></tr><tr><td>4th</td><td>Perfect Active</td><td class="greek">γέγραφα</td></tr><tr><td>5th</td><td>Perfect Mid./Pass.</td><td class="greek">γέγραμμαι</td></tr><tr><td>6th</td><td>Aorist Passive</td><td class="greek">ἐγράφην</td></tr></table>' }
        ]},
        { type: 'review-pp' },
        { type: 'review-pp' },
        { type: 'review-spelling-pp' },
        { type: 'review-pp' },
        { type: 'review-pp' },
        { type: 'review-spelling-pp' },
        { type: 'review-pp' },
        { type: 'review-spelling-pp' },
        { type: 'review-pp' },
        { type: 'review-spelling-pp' },
        { type: 'match', pairs: [
          ['παιδεύω', 'educate, teach'],
          ['κελεύω', 'order, command'],
          ['λύω', 'unbind, free, destroy'],
          ['πέμπω', 'send'],
          ['γράφω', 'write, draw']
        ]},
        { type: 'match', pairs: [
          ['θύω', 'sacrifice'],
          ['παύω', 'make stop, stop'],
          ['φυλάττω', 'guard'],
          ['γράφω', 'write, draw'],
          ['λύω', 'unbind, free, destroy']
        ]}
      ]
    },

    // Lesson 52: Verb Forms Review I
    {
      id: 52,
      title: 'Verb Review I',
      subtitle: 'All Forms (All 8 Verbs)',
      section: 'Review: Units 1–3',
      icon: '🔄',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Comprehensive Verb Review</h3><p>You have learned <strong>8 verbs</strong> across Units 2–3:</p><table class="intro-table"><tr><th>Verb</th><th>Meaning</th></tr><tr><td class="greek">παιδεύω</td><td>educate</td></tr><tr><td class="greek">κελεύω</td><td>order</td></tr><tr><td class="greek">λύω</td><td>unbind, free</td></tr><tr><td class="greek">πέμπω</td><td>send</td></tr><tr><td class="greek">γράφω</td><td>write</td></tr><tr><td class="greek">θύω</td><td>sacrifice</td></tr><tr><td class="greek">παύω</td><td>stop</td></tr><tr><td class="greek">φυλάττω</td><td>guard</td></tr></table><p>This lesson reviews verb forms across <strong>all tenses and moods</strong> — indicative, subjunctive, and optative.</p>' }
        ]},
        { type: 'review-verb-id' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-number-change' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-number-change' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-verb-id' }
      ]
    },

    // Lesson 53: Verb Forms Review II — Verbs & Infinitives
    {
      id: 53,
      title: 'Verb Review II',
      subtitle: 'Verb Forms & Infinitives',
      section: 'Review: Units 1–3',
      icon: '🔄',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Verb Forms & Infinitives Review</h3><p>This lesson continues drilling verb forms across all tenses and moods, with a focus on <strong>infinitives</strong>:</p><ul><li><strong>Present</strong>: present tense stem + -ειν (e.g., παιδεύ- → παιδεύειν)</li><li><strong>Aorist</strong>: unaugmented aorist tense stem + -αι (e.g., παιδευσ- → παιδεῦσαι)</li><li><strong>Perfect</strong>: perfect active tense stem + -έναι (e.g., πεπαιδευκ- → πεπαιδευκέναι)</li></ul>' }
        ]},
        { type: 'review-verb-id' },
        { type: 'review-verb-id' },
        { type: 'review-infinitive' },
        { type: 'review-verb-select' },
        { type: 'review-infinitive' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-infinitive' },
        { type: 'review-verb-id' },
        { type: 'review-verb-select' },
        { type: 'review-infinitive' },
        { type: 'review-verb-id' }
      ]
    },

    // Lesson 54: Vocabulary Review
    {
      id: 54,
      title: 'Vocabulary Review',
      subtitle: 'All Words (Units 1–3)',
      section: 'Review: Units 1–3',
      icon: '📝',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Vocabulary Review</h3><p>You have learned <strong>55 vocabulary words</strong> across three units:</p><ul><li><strong>Unit 1</strong> — 16 nouns (1st & 2nd declension) + 3 prepositions</li><li><strong>Unit 2</strong> — 8 nouns + 12 particles & other words</li><li><strong>Unit 3</strong> — 10 nouns + 11 particles & other words</li></ul><p>This lesson reviews all of them together.</p>' }
        ]},
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-eng' },
        { type: 'review-vocab-match' },
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-eng' },
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-eng' },
        { type: 'review-vocab-match' },
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-eng' },
        { type: 'review-vocab-gre' },
        { type: 'review-vocab-eng' },
        { type: 'review-spelling-vocab' },
        { type: 'review-spelling-vocab' },
        { type: 'review-spelling-vocab' }
      ]
    },

    // Lesson 55: Grammar Review — Cases, Prepositions & Purpose Clauses
    {
      id: 55,
      title: 'Grammar Review',
      subtitle: 'Cases, Prepositions & Clauses',
      section: 'Review: Units 1–3',
      icon: '📝',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Grammar Review</h3><p>Review the key grammatical concepts from Units 1–3:</p><ul><li><strong>Five Cases</strong>: Nominative, Genitive, Dative, Accusative, Vocative</li><li><strong>Prepositions</strong>: εἰς, ἐκ/ἐξ, ἐν, ἀπό, παρά, πρό, ἀντί, διά, περί</li><li><strong>Purpose Clauses</strong>: ἵνα, ὡς, ὅπως + subjunctive/optative</li><li><strong>Sequence of Moods</strong>: Primary → subjunctive; Secondary → optative</li></ul>' }
        ]},
        { type: 'mc-translate', prompt: 'What case is used for the indirect object?', display: 'τοῖς θεοῖς', displayGreek: true, correct: 'Dative', options: ['Dative', 'Genitive', 'Accusative', 'Nominative'] },
        { type: 'mc-translate', prompt: 'What case does ἐν take?', display: 'ἐν τῇ νήσῳ', displayGreek: true, correct: 'Dative', options: ['Dative', 'Genitive', 'Accusative', 'Nominative'] },
        { type: 'mc-translate', prompt: 'What case does εἰς take?', display: 'εἰς ἀγοράν', displayGreek: true, correct: 'Accusative', options: ['Accusative', 'Genitive', 'Dative', 'Nominative'] },
        { type: 'mc-translate', prompt: 'What case does ἐκ take?', display: 'ἐκ τῆς χώρᾱς', displayGreek: true, correct: 'Genitive', options: ['Genitive', 'Dative', 'Accusative', 'Nominative'] },
        { type: 'mc-translate', prompt: 'Identify the construction:', display: 'ἵνα τὸν πόλεμον παύσωσιν', displayGreek: true, correct: 'Purpose clause — primary sequence (aorist subjunctive)', options: ['Purpose clause — primary sequence (aorist subjunctive)', 'Purpose clause — secondary sequence (aorist optative)', 'Result clause — primary sequence (present indicative)', 'Temporal clause — primary sequence (aorist subjunctive)'] },
        { type: 'mc-translate', prompt: 'Identify the construction:', display: 'ὅπως τοὺς ξένους παιδεύοιεν', displayGreek: true, correct: 'Purpose clause — secondary sequence (present optative)', options: ['Purpose clause — secondary sequence (present optative)', 'Purpose clause — primary sequence (present subjunctive)', 'Temporal clause — secondary sequence (present optative)', 'Result clause — secondary sequence (present optative)'] },
        { type: 'mc-translate', prompt: 'What is the syntax of βιβλίοις in this sentence?', display: 'ἐκελεύομεν τοὺς ἀνθρώπους βιβλίοις παιδεῦσαι', displayGreek: true, correct: 'Instrumental dative (by means of books)', options: ['Instrumental dative (by means of books)', 'Dative of indirect object (to the books)', 'Dative of possession (of the books)', 'Locative dative (in the place of books)'] },
        { type: 'mc-translate', prompt: 'What case is ψῡχήν?', display: 'τὴν τῆς δημοκρατίᾱς ψῡχὴν λύσετε', displayGreek: true, correct: 'Accusative — direct object', options: ['Accusative — direct object', 'Nominative — subject', 'Genitive — possession', 'Dative — indirect object'] },
        { type: 'match', pairs: [
          ['εἰς', 'into (+ acc.)'],
          ['ἐκ / ἐξ', 'from out of (+ gen.)'],
          ['ἐν', 'in (+ dat.)'],
          ['ἀπό', 'from, away from (+ gen.)'],
          ['διά', 'through (+ gen.); because of (+ acc.)']
        ]},
        { type: 'mc-translate', prompt: 'After a primary main verb, a purpose clause uses:', display: 'πέμπεις ... ἵνα ...', displayGreek: true, correct: 'Subjunctive', options: ['Subjunctive', 'Optative', 'Indicative', 'Infinitive'] },
        { type: 'mc-translate', prompt: 'After a secondary main verb, a purpose clause uses:', display: 'ἔπεμψας ... ἵνα ...', displayGreek: true, correct: 'Optative', options: ['Optative', 'Subjunctive', 'Indicative', 'Infinitive'] },
        { type: 'match', pairs: [
          ['ἵνα', 'in order that'],
          ['ὡς', 'in order that'],
          ['ὅπως', 'in order that'],
          ['ἐπεί / ἐπειδή', 'after, when, since'],
          ['μή', 'not (non-indicative)']
        ]}
      ]
    },

    // Lesson 56: Comprehensive Exam — Translation & Analysis
    {
      id: 56,
      title: 'Comprehensive Exam',
      subtitle: 'Translation & Analysis',
      section: 'Review: Units 1–3',
      icon: '🏆',
      exercises: [
        { type: 'intro', cards: [
          { html: '<h3>Comprehensive Review Exam</h3><p>This is a cumulative exam covering everything from Units 1–3. Translate sentences, identify forms, and demonstrate your mastery of Greek grammar.</p><p>Drawn from the <em>Self-Correcting Examinations</em>.</p>' }
        ]},
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἆρα πρὸ τῆς μάχης τὸν ἄγγελον πέμψουσιν ἐξ ἀγορᾶς διὰ τῆς χώρᾱς;', displayGreek: true, correct: 'Before the battle will they send the messenger from the marketplace through the country?', options: ['Before the battle will they send the messenger from the marketplace through the country?', 'After the battle they sent the messenger from the marketplace through the country.', 'Before the battle they are sending the messenger from the marketplace to the country.', 'Will the messenger be sent from the marketplace before the battle through the country?'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ὡς τὴν εἰρήνην μὴ λύσειαν Ὅμηρον ἐκελεύομεν τοὺς ἀνθρώπους βιβλίοις παιδεῦσαι.', displayGreek: true, correct: 'In order that they might not destroy the peace, we were ordering Homer to educate the men by means of books.', options: ['In order that they might not destroy the peace, we were ordering Homer to educate the men by means of books.', 'In order that they may not destroy the peace, we are ordering Homer to educate the men by means of books.', 'In order that he might not destroy the peace, Homer was ordering us to educate the men by means of books.', 'They did not destroy the peace, because we had ordered Homer to educate the men by means of books.'] },
        { type: 'mc-translate', prompt: 'What is the syntax of λύσειαν?', display: 'ὡς τὴν εἰρήνην μὴ λύσειαν', displayGreek: true, correct: 'Aorist optative in a purpose clause in secondary sequence', options: ['Aorist optative in a purpose clause in secondary sequence', 'Aorist subjunctive in a purpose clause in primary sequence', 'Present optative in a result clause in secondary sequence', 'Aorist indicative in a temporal clause in past sequence'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'ὦ ἄνθρωπε, τὸν ἀδελφὸν τὴν τέχνην οὐ παιδεύεις;', displayGreek: true,
          answer: ['man', 'are', 'you', 'not', 'educating', 'your', 'brother', 'in', 'the', 'art'],
          distractors: ['educated', 'brothers', 'men', 'sending']
        },
        { type: 'mc-translate', prompt: 'Translate:', display: 'βιβλίον περὶ τῆς τοῖς θεοῖς θυσίᾱς γέγραφας ἵνα ζῷα καὶ στεφάνους εἰς τὴν νῆσον πέμψωμεν.', displayGreek: true, correct: 'You have written a book about the sacrifice to the gods in order that we may send animals and wreaths to the island.', options: ['You have written a book about the sacrifice to the gods in order that we may send animals and wreaths to the island.', 'You had written a book about the sacrifice to the gods in order that we might send animals and wreaths to the island.', 'He has written a book about the sacrifice to the gods in order that we may sacrifice animals and wreaths on the island.', 'You are writing a book about the sacrifice to the gods in order that we may send animals and wreaths to the island.'] },
        { type: 'mc-translate', prompt: 'What is the syntax of πέμψωμεν?', display: 'ἵνα ... πέμψωμεν', displayGreek: true, correct: 'Aorist subjunctive: subjunctive in primary sequence (main verb γέγραφας is perfect indicative)', options: ['Aorist subjunctive: subjunctive in primary sequence (main verb γέγραφας is perfect indicative)', 'Present subjunctive: subjunctive in primary sequence (main verb γέγραφας is present indicative)', 'Aorist optative: optative in secondary sequence (main verb γέγραφας is aorist indicative)', 'Aorist indicative: indicative in a temporal clause (main verb γέγραφας is perfect indicative)'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'λόγῳ μὲν τὸν ἐν τῇ χώρᾳ πόλεμον ἐπαύετε, ἔργῳ δὲ τοὺς ἀδελφοὺς εἰς μάχην ἐπέμπετε.', displayGreek: true, correct: 'By word you were stopping the war in the country, but by deed you were sending your brothers into battle.', options: ['By word you were stopping the war in the country, but by deed you were sending your brothers into battle.', 'By word you stopped the war in the country, but by deed you sent your brothers into battle.', 'By word you have stopped the war in the country, but by deed you have sent your brothers into battle.', 'By word you will stop the war in the country, but by deed you will send your brothers into battle.'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ἆρα τὴν τῆς δημοκρατίᾱς ψῡχὴν λύσετε ἵνα τὸν πόλεμον παύσωσιν οἱ ἄνθρωποι;', displayGreek: true, correct: 'Will you destroy the soul of the democracy in order that the men may stop the war?', options: ['Will you destroy the soul of the democracy in order that the men may stop the war?', 'Did you destroy the soul of the democracy in order that the men might stop the war?', 'Have you destroyed the soul of the democracy in order that the men may stop the war?', 'Are you destroying the soul of the democracy in order that the men may stop the war?'] },
        { type: 'mc-translate', prompt: 'Translate:', display: 'περὶ τοῦ πολέμου ἔγραψα ὡς τὴν εἰρήνην ἀρετῇ φυλάξειαν.', displayGreek: true, correct: 'I wrote about the war in order that they might guard the peace by means of virtue.', options: ['I wrote about the war in order that they might guard the peace by means of virtue.', 'I write about the war in order that they may guard the peace by means of virtue.', 'I had written about the war in order that they might guard the peace by means of virtue.', 'I wrote about the war because they were guarding the peace by means of virtue.'] },
        { type: 'mc-translate', prompt: 'What is the syntax of ἀρετῇ?', display: '... ἀρετῇ φυλάξειαν', displayGreek: true, correct: 'Instrumental dative (by means of virtue)', options: ['Instrumental dative (by means of virtue)', 'Dative of indirect object (to virtue)', 'Dative of possession (belonging to virtue)', 'Locative dative (in the place of virtue)'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'οὐ πέμψομεν χρῡσὸν ἵνα μὴ ζῷα πέμψωσιν.', displayGreek: true,
          answer: ['we', 'will', 'not', 'send', 'gold', 'in', 'order', 'that', 'they', 'may', 'not', 'send', 'animals'],
          distractors: ['sending', 'animal', 'sent', 'might']
        },
        { type: 'review-pp' },
        { type: 'review-synopsis' },
        { type: 'mc-translate', prompt: 'Translate:', display: 'ὁ μὲν Ὅμηρος τὸν φίλον ἐπεπαιδεύκειν ὅπως τοῖς θεοῖς θύοιεν, ὁ δὲ ἀδελφὸς οὔ.', displayGreek: true, correct: 'Homer had educated his friend in order that they might sacrifice to the gods, but his brother had not.', options: ['Homer had educated his friend in order that they might sacrifice to the gods, but his brother had not.', 'Homer has educated his friend in order that they may sacrifice to the gods, but his brother has not.', 'Homer was educating his friend in order that they might sacrifice to the gods, but his brother was not.', 'Homer educated his friend in order that they might sacrifice to the gods, but his brother did not.'] },
        { type: 'mc-translate', prompt: 'What is the syntax of θύοιεν?', display: 'ὅπως ... θύοιεν', displayGreek: true, correct: 'Present optative: optative in secondary sequence (main verb ἐπεπαιδεύκειν is pluperfect); present for progressive/repeated aspect', options: ['Present optative: optative in secondary sequence (main verb ἐπεπαιδεύκειν is pluperfect); present for progressive/repeated aspect', 'Aorist optative: optative in secondary sequence (main verb ἐπεπαιδεύκειν is pluperfect); aorist for simple aspect', 'Present subjunctive: subjunctive in primary sequence (main verb ἐπεπαιδεύκειν is present); present for progressive/repeated aspect', 'Imperfect indicative: indicative in a temporal clause (main verb ἐπεπαιδεύκειν is pluperfect); imperfect for past time'] },
        { type: 'word-bank', prompt: 'Translate:', display: 'ὁ μὲν Ὅμηρος τὰς ἀνθρώπων ψῡχὰς τέχνῃ, δώρῳ τῶν θεῶν, πεπαίδευκεν, ὁ δὲ ἀδελφὸς ἔργοις.', displayGreek: true,
          answer: ['Homer', 'has', 'educated', 'the', 'souls', 'of', 'men', 'by', 'art', 'with', 'a', 'gift', 'of', 'the', 'gods', 'but', 'his', 'brother', 'by', 'deeds'],
          distractors: ['educating', 'soul', 'brothers', 'gifts']
        }
      ]
    },

    // Lesson 57: Spelling Prototype
    {
      id: 57,
      title: 'Spelling',
      subtitle: 'Spell Principal Parts',
      section: 'Review: Units 1–3',
      icon: '✏️',
      exercises: [
        { type: 'intro', title: 'Spelling Practice', cards: [
          { html: '<h3>Spell It Out</h3><p>Spell Greek verb forms using the letter bank below.</p><p><strong>Tap</strong> a letter to add it. <strong>Hold</strong> a vowel for accent marks. Use <strong>⌫</strong> to delete.</p><p>Keys with a <strong>·</strong> dot have accent variants.</p>' }
        ]},
        {
          type: 'spelling',
          prompt: 'Spell the 2nd principal part (Future Ind. Act.) of λύω:',
          display: 'λύω → Future',
          displayGreek: true,
          answer: 'λύσω',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the 4th principal part (Perfect Ind. Act.) of λύω:',
          display: 'λύω → Perfect',
          displayGreek: true,
          answer: 'λέλυκα',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the 3rd principal part (Aorist Ind. Act.) of πέμπω:',
          display: 'πέμπω → Aorist',
          displayGreek: true,
          answer: 'ἔπεμψα',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the 1st principal part (Present Ind. Act.) of παιδεύω:',
          display: 'to educate → Present',
          answer: 'παιδεύω',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the 2nd principal part (Future Ind. Act.) of παιδεύω:',
          display: 'παιδεύω → Future',
          displayGreek: true,
          answer: 'παιδεύσω',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
        },
        {
          type: 'spelling',
          prompt: 'Spell the 3rd principal part (Aorist Ind. Act.) of κελεύω:',
          display: 'κελεύω → Aorist',
          displayGreek: true,
          answer: 'ἐκέλευσα',
          letters: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
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
    unit3Vocab: unit3Vocab,
    unit3VocabAll: unit3VocabAll,
    unit3Verbs: unit3Verbs,
    paideuoFull: paideuoFull,
    unit3Particles: unit3Particles,
    unit3Cognates: unit3Cognates,
    unit3Sentences: unit3Sentences,
    lessons: lessons,
    buildLetterTable: buildLetterTable
  };
})();
