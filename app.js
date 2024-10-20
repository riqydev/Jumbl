const word_list = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"];


const kb = document.querySelector(".keyboard__hack");
let token;

const wb1 = document.querySelector(".word__ch1");
const wb2 = document.querySelector(".word__ch2");
const wb3 = document.querySelector(".word__ch3");
const wb4 = document.querySelector(".word__ch4");
const wb5 = document.querySelector(".word__ch5");

const gb1 = document.querySelector(".guess__ch1");
const gb2 = document.querySelector(".guess__ch2");
const gb3 = document.querySelector(".guess__ch3");
const gb4 = document.querySelector(".guess__ch4");
const gb5 = document.querySelector(".guess__ch5");

const guessboxes_collection = document.getElementsByClassName("game__box--guess");
const guessboxes_arr = Array.from(guessboxes_collection);
let wrongState = false;

function openKeyboard() {
    // if (inputDisabled) {
    //     newGame();
    // }
    kb.focus();
    kb.value = "";
}

function getRandomWord(){
    var word = word_list[Math.floor(Math.random() * word_list.length)];
    return word;
}

const scoreBox = document.querySelector(".score");
const timerBox = document.querySelector(".timer");
//const scoreBestBox = document.querySelector(".score__best");
let timer;
let inputDisabled = false;
let gameStarted = false;

let currentWords = new Array;
const defaultScore = 0;
let score = 0;
let highScore;
let startTime = 20;
currentTime = startTime;

window.onload = (e) => {
    inputDisabled = true;
    loadLoginState();
}


function scrambleWord() {
    let baseWord = getRandomWord();
    let scrambledWord;
    do {
        let wordSplit = baseWord.split("");
        wordSplit.sort(() => 0.5 - Math.random());
        scrambledWord = wordSplit.join("");
    } while (scrambledWord === baseWord); 
    currentWords.push(baseWord.toUpperCase(), scrambledWord.toUpperCase());
    return currentWords;
}

function newWord() {
    currentWords = [];
    let currentWord = scrambleWord();
    console.log("The answer is: " + currentWord[0]);
    resetInput();
    wb1.style.color = "#fff";
    wb2.style.color = "#fff";
    wb3.style.color = "#fff";
    wb4.style.color = "#fff";
    wb5.style.color = "#fff";
    wb1.innerText = currentWord[1].charAt(0);
    wb2.innerText = currentWord[1].charAt(1);
    wb3.innerText = currentWord[1].charAt(2);
    wb4.innerText = currentWord[1].charAt(3);
    wb5.innerText = currentWord[1].charAt(4);

    guessboxes_arr.forEach((box) => {
        box.classList.remove("correct");
    })

}

// load first round on page load
//newGame();


document.addEventListener("keydown", (e) => {
    let input = e.key.toString().toUpperCase();

    // if the input is from a to z
    if (e.code>= "KeyA" && e.code <= "KeyZ" && inputDisabled === false) {

        // fill the first empty slot with the pressed key
        if (gb1.innerText === "") {
            gb1.innerText = input;
        } else if (gb2.innerText === "") {
            gb2.innerText = input;
        } else if (gb3.innerText === "") {
            gb3.innerText = input;
        } else if (gb4.innerText === "") {
            gb4.innerText = input;
        } else if (gb5.innerText === "") {
            gb5.innerText = input;
        }

        // delete the last occupied slot
    } else if (e.key === "Backspace" && inputDisabled === false) {
        if (gb5.innerText !== "") {
            gb5.innerText = "";
        } else if (gb4.innerText !== "") {
            gb4.innerText = "";
        } else if (gb3.innerText !== "") {
            gb3.innerText = "";
        } else if (gb2.innerText !== "") {
            gb2.innerText = "";
        } else if (gb1.innerText !== "") {
            gb1.innerText = "";
        } 
        // if the input is full when enter is pressed, submit
    } else if (e.key === "Enter" & gb5.innerText !== "" && inputDisabled === false) {
            // SUBMIT ANSWER
            let submittedWord = gb1.innerText + gb2.innerText + gb3.innerText + gb4.innerText + gb5.innerText;
            lockInput();
            // IF ANSWER IS RIGHT
            if (submittedWord === currentWords[0]) {
                
                // green box animation
                guessboxes_arr.forEach((box) => {
                    box.classList.add("correct");
                })
                addTime();

                // gets new word after animation
                setTimeout(() => {
                updateScore();
                newWord();
                unlockInput();
                }  , 850); 
            } 
            // IF ANSWER IS WRONG
            else if (submittedWord !== currentWords[0]) {
                // red box animation
                guessboxes_arr.forEach((box) => {
                    box.classList.add("incorrect");
                })

                // delete input so the user can try again
                setTimeout(() => {
                        guessboxes_arr.forEach((box) => {
                        box.classList.remove("incorrect");

                        resetInput();
                        unlockInput();
                    })
                        }  , 850); 
            }
            
        }
 });


 // mobile input hack
 kb.addEventListener("input", (e) => {
    const inputVal = kb.value;
    if (inputVal.length > 5) {
        kb.value = kb.value.substr(0,5);
    }
    if (!inputDisabled) {
        gb1.innerText = inputVal.charAt(0).toUpperCase();
        gb2.innerText = inputVal.charAt(1).toUpperCase();
        gb3.innerText = inputVal.charAt(2).toUpperCase();
        gb4.innerText = inputVal.charAt(3).toUpperCase();
        gb5.innerText = inputVal.charAt(4).toUpperCase();
    }
 })

 function resetInput(){
    kb.value="";
    gb1.innerText="";
    gb2.innerText="";
    gb3.innerText="";
    gb4.innerText="";
    gb5.innerText="";
 }

 function updateScore() {
    score++;
    scoreBox.innerText = score;
 }

 function wipeScore() {
    score = 0;
    scoreBox.innerText = score;
 }

function newGame() {
    gameStarted = true;
    scoreBox.innerText = defaultScore;
    timerBox.innerText = startTime + "s";
    clearInitialState();
    newWord();
    startTimer();
    unlockInput();
 }

 function endGame() {
    gameStarted = false;
    handleScore();
    clearTimer();
    resetInput();
    lockInput();
    revealWord();
 }
 

 function startTimer(){
    currentTime = startTime;
    timerBox.className = "timer less-safe";
     timer = setInterval(function() {
        currentTime--;
        timerBox.innerText = currentTime + "s";

        if (currentTime >=30) {
            timerBox.className = "timer safe";
        } 
        if (currentTime < 30) {
            timerBox.className = "timer less-safe";
        }
        if (currentTime <=13) {
            timerBox.className = "timer unsafe";
        }

        if (currentTime === 0) {
            clearTimer();
            // TIME RAN OUT HERE
            endGame();
        }
    },  1000);
 }

 async function handleScore() {
    if (score > highScore) {
        highScore = score;
        const result = await updateHighScore(highScore);
        if (!result) {
            console.log("couldnt update score");
        } 
    console.log(result.message);
    }
    console.log("score this round was: " + score + "; highscore is: "+highScore);

    //make a call to backend here to store high score in database
    

    //reset score for next round
    score = 0;
 }

 function clearTimer() {
    clearInterval(timer);
    currentTime = 0;
    timerBox.innerText = "0s";
 }

 function addTime() {
    currentTime += 15;
 }

 function lockInput() {
    inputDisabled = true;

 }

 function unlockInput() {
    inputDisabled = false;
 }

 function revealWord() {
    wb1.innerText = currentWords[0].charAt(0);
    wb2.innerText = currentWords[0].charAt(1);
    wb3.innerText = currentWords[0].charAt(2);
    wb4.innerText = currentWords[0].charAt(3);
    wb5.innerText = currentWords[0].charAt(4);
    wb1.style.color = "#c60d0d";
    wb2.style.color = "#c60d0d";
    wb3.style.color = "#c60d0d";
    wb4.style.color = "#c60d0d";
    wb5.style.color = "#c60d0d";

 }

 const descSection = document.querySelector(".desc");

 function clearInitialState() {
    wb1.parentElement.classList.remove("initial");
    wb2.parentElement.classList.remove("initial");
    wb3.parentElement.classList.remove("initial");
    wb4.parentElement.classList.remove("initial");
    wb5.parentElement.classList.remove("initial");
    descSection.classList.add("hidden");
 }

function startGame() {
    if (!gameStarted) {
        newGame();
        //keyboard hack for mobile users
        openKeyboard();
    }
    if (gameStarted) {
        openKeyboard();
    }
 }

const modalContainer = document.querySelector(".modal__container");

function openLoginModal(){
    modalContainer.style.display = "flex";
}

function closeModal(){
    modalContainer.style.display = "none";
}


// form stuff
const form = document.querySelector(".login__form");
const formStatusText = document.querySelector(".form__status");
const backendURL = "https://jumbl-backend.onrender.com";

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    let action;

    if (event.submitter) {
        action = event.submitter.value;
    }

    const url = action === 'login' ? '/login' : '/register'

    try {
        const response = await fetch(backendURL + url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(obj)
        })
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            formStatusText.innerText = "Successfully logged in!"
            loadLoginState();
            closeModal();
        } else {
            formStatusText.innerText = data;
        }
    } catch (error) {
        console.error("Error: ", error);
    }
});

const descStateChange = document.querySelector(".desc__state-change");
const nameofPlayerBox = document.querySelector(".nameofPlayer");
const sideMenuContainer = document.querySelector(".side-menu-container");

function openMenu(){
    if (sideMenuContainer.classList.contains("hidden"))
    {
        sideMenuContainer.classList.remove("hidden");
    } else 
    {
        sideMenuContainer.classList.add("hidden")
    }
}

function goToLeaderboard() {
    window.location.assign("./leaderboard.html")
}

async function loadLoginState() {
    const token = localStorage.getItem("token");
    if (!token) {
        descStateChange.innerHTML = `You are currently playing as a guest. If you want to submit your score to the leaderboard, you will need to <a onclick="openLoginModal()">Login</a>`
        nameofPlayerBox.innerText = "Guest";
        nameofPlayerBox.removeAttribute("onClick");
        sideMenuContainer.classList.add("hidden");
    } else {
        const response = await verifyToken(token);
        if(response.message === "token is valid") {
            nameofPlayerBox.innerText = `${response.username}`;
            nameofPlayerBox.setAttribute("onClick", "openMenu()");
            descStateChange.innerHTML = `Hey ${response.username}! Your best score will automatically get submitted to the leaderboard, good luck!`
        }
    } 
}

async function verifyToken(token) {
    
    try {
        const response = await fetch(backendURL + "/verify-token", {
            method: "POST",
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })
        const data = await response.json();
        if(data.message === "token is valid") {
            console.log(data.message + " for: " + data.username)
            await loadPB(token);
            return data;
        } else {
            return "token is invalid";
        }
    } catch (error) {
        console.error("There was an error verifying the token: ", error);
        localStorage.removeItem("token");
        return false;
    }
}

async function loadPB(token){
    try{
        const response = await fetch(backendURL + "/highscore", {
            method: "POST",
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })
        const data = await response.json();
        highScore = data.highscore;
        console.log(`${data.username}'s highscore is ${data.highscore}`)
    }
    catch (err) {
        console.error(err);
    }
}

async function updateHighScore(newHighScore){
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(backendURL + "/update-highscore", {
            method: "POST",
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({highscore: newHighScore})
        })
        
        const data = await response.json();
        return data;

    } catch (err) {
        console.error(err);
    }
}

function signOut(){
    localStorage.removeItem("token");
    loadLoginState();
}