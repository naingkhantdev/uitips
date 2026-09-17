// Content extracted verbatim from design-style-swatchbook.html — the source of truth
// for this site. Keys are terse by design: e/m = English/Myanmar prose,
// te/tm = the "tell", we/wm = where you see it, c = swatch class, d = deco layers.

export const STYLES = [
  {
    g: 0,
    c: "trad",
    d: [],
    eye: "Est. 1894",
    n: "Traditional",
    mn: "ရိုးရာ ဒီဇိုင်းပုံစံ",
    era: "pre-1900s",
    e: "Ornament, symmetry and historical detail. Reads as trustworthy, established, formal.",
    m: "အလှဆင် အသေးစိတ်များ၊ ဟန်ချက်ညီညီ ဖွဲ့စည်းမှုနှင့် သမိုင်းဝင် အမွေအနှစ်ပုံစံများကို အသုံးပြုထားသည်။ ခိုင်မာယုံကြည်ရပြီး တည်တံ့ဂုဏ်သရေရှိသော ခံစားချက်ကို ပေးစွမ်းသည်။",
    te: "Centred layout, serif type, gold or maroon, a decorative frame.",
    tm: "အလယ်ဗဟိုပြု စာစီစနစ်၊ Serif ဖောင့်၊ ရွှေရောင် သို့မဟုတ် အနီညိုရောင်နှင့် အလှဆင်ဘောင်များ။",
    we: "Law firms, banks, hotels, wedding invitations.",
    wm: "ဥပဒေလုပ်ငန်းများ၊ ဘဏ်များ၊ ဟိုတယ်များနှင့် မင်္ဂလာဖိတ်စာများ။"
  },
  {
    g: 0,
    c: "min",
    d: [],
    eye: "01",
    n: "Minimalism",
    mn: "လိုရင်းတိုရှင်း ဒီဇိုင်းပုံစံ (Minimalism)",
    era: "1960s onward",
    e: "Remove until only the necessary is left. The empty space is the design, not leftover room.",
    m: "မလိုအပ်သည်များကို ဖယ်ရှားပြီး မရှိမဖြစ် လိုအပ်သည်များသာ ချန်ထားသည့် ပုံစံ။ နေရာလွတ် (White space) သည် ပိုနေသောအရာ မဟုတ်ဘဲ ဒီဇိုင်း၏ အဓိက အစိတ်အပိုင်းဖြစ်သည်။",
    te: "One accent at most, small type, enormous margins.",
    tm: "အဓိက ပေါ်လွင်ရောင် တစ်မျိုးတည်းသာ အများဆုံးသုံးခြင်း၊ စာလုံးအရွယ်အစား သေးငယ်ခြင်းနှင့် ဘေးဘောင် နေရာလွတ် အလွန်ကျယ်ကျယ် ချန်ထားခြင်း။",
    we: "Apple, Muji, photography portfolios.",
    wm: "Apple၊ Muji တို့ကဲ့သို့ အမှတ်တံဆိပ်များ၊ ဓာတ်ပုံ ပို့ဖိုလီယို ဝဘ်ဆိုက်များ။"
  },
  {
    g: 0,
    c: "max",
    d: ["a"],
    eye: "More!",
    n: "Maximalism",
    mn: "ဆန်းသစ်စုံလင် ပိုလျှံပုံစံ (Maximalism)",
    era: "2010s onward",
    e: "Deliberate excess. Layers, pattern and colour piled up until the page has a personality you cannot ignore.",
    m: "တမင်တကာ စုံလင်ပိုလျှံအောင် ဖန်တီးထားသည့် ပုံစံ။ အလွှာများ၊ ပုံစံကွက်များနှင့် အရောင်များကို ထပ်မံပေါင်းစပ်ထားသဖြင့် လျှစ်လျူရှု၍မရသော ထူးခြားသည့် ပင်ကိုယ်ဟန်ကို ဖန်တီးပေးသည်။",
    te: "Clashing colour on purpose, texture behind everything, nothing left plain.",
    tm: "အရောင်များကို တမင်တကာ ဆန့်ကျင်ဘက် သုံးထားခြင်း၊ အရာတိုင်း၏ နောက်ခံတွင် Texture ပါဝင်ခြင်းနှင့် ရိုးရိုးရှင်းရှင်း ဗလာနေရာ လုံးဝမကျန်ခြင်း။",
    we: "Fashion, music posters, youth brands.",
    wm: "ဖက်ရှင်ဒီဇိုင်းများ၊ ဂီတ ပိုစတာများ၊ လူငယ်အမှတ်တံဆိပ်များ။"
  },
  {
    g: 0,
    c: "brut",
    d: [],
    eye: "index.html",
    n: "Brutalism",
    mn: "အကြမ်းထည် ဒီဇိုင်းပုံစံ (Brutalism)",
    era: "1950s / web 2014",
    e: "Raw and unpolished on purpose - the structure left showing, like bare concrete. A reaction against over-designed pages.",
    m: "တမင်တကာ မပြုပြင်ထားသည့် အကြမ်းထည်အတိုင်း ပြသထားသော ပုံစံ - ကွန်ကရစ်တုံးများကဲ့သို့ ဖွဲ့စည်းပုံကို အကွယ်အကာမရှိ ဖော်ပြထားသည်။ အလှဆင်လွန်ကဲသော ဝဘ်ဆိုက်များကို ဆန့်ကျင်တုံ့ပြန်မှုမှ ပေါ်ထွက်လာခြင်းဖြစ်သည်။",
    te: "Default fonts, blue underlined links, hard black boxes, zero rounding.",
    tm: "မူလစနစ်ပါ Font များ၊ အပြာရောင် မျဉ်းသားလင့်ခ်များ၊ လေးထောင့်အနက်ရောင် ဘောင်ထူထူများ၊ ထောင့်လုံးဝ မကွေးဘဲ ထောင့်မှန်အတိုင်း ထားခြင်း။",
    we: "Craigslist, Hacker News, indie portfolios.",
    wm: "Craigslist၊ Hacker News နှင့် တစ်သီးပုဂ္ဂလ ဒီဇိုင်နာ ပို့ဖိုလီယို ဝဘ်ဆိုက်များ။"
  },
  {
    g: 0,
    c: "mod",
    d: ["a"],
    eye: "Form / Function",
    n: "Modernism",
    mn: "မော်ဒန်နိစမ် ဒီဇိုင်းပုံစံ (Modernism)",
    era: "1920s onward",
    e: "Form follows function. Ornament is treated as dishonest; clarity and structure do the work instead.",
    m: "'ပုံစံသည် အသုံးဝင်မှုကို ဦးစားပေးရမည်' (Form follows function) ဆိုသည့် အယူအဆ။ အလှဆင်မှုများကို မလိုလားအပ်ဟု ယူဆပြီး ရှင်းလင်းပြတ်သားမှုနှင့် စနစ်ကျသော ဖွဲ့စည်းပုံဖြင့်သာ ပုံဖော်ထားသည်။",
    te: "Flush-left text, one primary colour, strict alignment, no decoration.",
    tm: "ဘယ်ဘက်ညီ စာစီစနစ်၊ အဓိက ပင်မအရောင် တစ်မျိုးတည်း သုံးစွဲခြင်း၊ တိကျလွန်းသော နေရာချထားမှုနှင့် အလှဆင်မှု လုံးဝမပါဝင်ခြင်း။",
    we: "Braun, IBM, museum signage.",
    wm: "Braun၊ IBM နှင့် ပြတိုက် လမ်းညွှန် ဆိုင်းဘုတ်များ။"
  },
  {
    g: 1,
    c: "nouv",
    d: ["a"],
    eye: "Paris",
    n: "Art Nouveau",
    mn: "အာ့တ်နူးဗိုး / သဘာဝနွယ် ပုံစံ (Art Nouveau)",
    era: "1890-1910",
    e: "Nature turned into pattern: vines, whiplash curves, nothing straight if it can help it.",
    m: "သဘာဝတရားမှ သစ်နွယ်များ၊ နွဲ့နှောင်းသောအကွေးအကောက်များကို ဒီဇိုင်းအဖြစ် ပြောင်းလဲထားခြင်းဖြစ်သည်။ ဖြစ်နိုင်လျှင် မျဉ်းဖြောင့်များ လုံးဝမသုံးပေ။",
    te: "Flowing asymmetric curves, gold on deep green, italic serif.",
    tm: "ပြေပြစ်သော မညီမျှသည့် အကွေးအကောက်များ၊ အစိမ်းရင့်ပေါ်တွင် ရွှေရောင်သုံးထားခြင်းနှင့် စာလုံးစောင်း Serif ဖောင့်။",
    we: "Perfume, tea and spa branding; the Paris Metro signs.",
    wm: "ရေမွှေး၊ လက်ဖက်ရည်နှင့် Spa အမှတ်တံဆိပ်များ၊ ပါရီ မိုထရို ဘူတာဆိုင်းဘုတ်များ။"
  },
  {
    g: 1,
    c: "deco",
    d: ["a", "b"],
    eye: "Metropolis",
    n: "Art Deco",
    mn: "အာ့တ်ဒေကို / ဇိမ်ခံစက်မှုပုံစံ (Art Deco)",
    era: "1920-1939",
    e: "Machine-age luxury. Geometry, symmetry and metal - the look of hotels, cinemas and ocean liners.",
    m: "စက်မှုခေတ်ဦး၏ ခမ်းနားထည်ဝါသော အလှ။ ဂျီဩမေတြီ အချိုးအစား၊ အချိုးညီမှုနှင့် သတ္တုရောင်များပါဝင်ပြီး ဟိုတယ်များ၊ ရုပ်ရှင်ရုံများနှင့် ပင်လယ်ကူးသင်္ဘောကြီးများ၏ အသွင်ပြင်ဖြစ်သည်။",
    te: "Gold on black, wide letter-spacing, stepped or fanned lines.",
    tm: "အနက်ရောင်ပေါ်တွင် ရွှေရောင် သုံးစွဲခြင်း၊ စာလုံးအကွာအဝေး ကျယ်ကျယ်ထားခြင်း၊ လှေကားထစ် သို့မဟုတ် ယက်တောင်ပုံစံ မျဉ်းကွက်များ ပါဝင်ခြင်း။",
    we: "Hotels, cinemas, whisky and jewellery labels.",
    wm: "ဟိုတယ်များ၊ ရုပ်ရှင်ရုံများ၊ ဝီစကီနှင့် လက်ဝတ်ရတနာ တံဆိပ်များ။"
  },
  {
    g: 1,
    c: "bau",
    d: ["a", "b", "c"],
    eye: "Dessau",
    n: "Bauhaus",
    mn: "ဘောက်ဟောက်စ် ပုံစံ (Bauhaus)",
    era: "1919-1933",
    e: "A German school whose rule was simple: circle, square, triangle; red, blue, yellow. The root of most modern design education.",
    m: "ဂျာမနီ ဒီဇိုင်းကျောင်းတစ်ခုမှ စတင်ခဲ့သော ပုံစံ။ စည်းမျဉ်းမှာ ရိုးရှင်းသည် - စက်ဝိုင်း၊ လေးထောင့်၊ တြိဂံနှင့် အနီ၊ အပြာ၊ အဝါ ပင်မအရောင်သုံးမျိုးသာ အသုံးပြုသည်။ ခေတ်သစ် ဒီဇိုင်းပညာ၏ အခြေခံပင်မဖြစ်သည်။",
    te: "Primary colours, basic shapes as decoration, geometric sans type.",
    tm: "ပင်မအရောင် ၃ မျိုး၊ အခြေခံ ပုံသဏ္ဌာန်များကို အလှဆင်အဖြစ် သုံးခြင်းနှင့် Geometric Sans-serif ဖောင့်။",
    we: "Design schools, museums, sportswear graphics.",
    wm: "ဒီဇိုင်းကျောင်းများ၊ ပြတိုက်များ၊ အားကစားဝတ်စုံ ဂရပ်ဖစ် ဒီဇိုင်းများ။"
  },
  {
    g: 1,
    c: "const",
    d: ["a", "b"],
    eye: "Agitprop",
    n: "Constructivism",
    mn: "ကွန်စထရက်တီဗစ်ဇမ် / ဆိုဗီယက်ပိုစတာပုံစံ (Constructivism)",
    era: "1919-1934",
    e: "Soviet poster design. Type set on a diagonal, red and black only, built to shout across a street.",
    m: "ဆိုဗီယက်ခေတ် ပိုစတာ ဒီဇိုင်း။ စာလုံးများကို ဒေါင်လိုက်/အစောင်းအတိုင်း စီတန်းထားပြီး အနီနှင့် အနက်အရောင် သာသုံးကာ အဝေးမှပင် ထင်ရှားပေါ်လွင်စေရန် ဖန်တီးထားသည်။",
    te: "Hard diagonals, heavy condensed caps, red + black + off-white.",
    tm: "ခိုင်မာသော အစောင်းမျဉ်းများ၊ ထူထဲကျဉ်းမြောင်းသော စာလုံးကြီးများ၊ အနီ + အနက် + ခရင်မ်ရောင် ပေါင်းစပ်မှု။",
    we: "Protest posters, record sleeves, streetwear.",
    wm: "ဆန္ဒပြပိုစတာများ၊ တေးဂီတ အခွေအဖုံးများ၊ Streetwear လမ်းဘေးဖက်ရှင်များ။"
  },
  {
    g: 1,
    c: "stijl",
    d: ["a", "b", "c", "d", "e"],
    noEye: true,
    n: "De Stijl",
    mn: "ဒီစတေးလ် / အကွက်စနစ်ပုံစံ (De Stijl)",
    era: "1917-1931",
    e: "Mondrian's world reduced to rectangles: black lines, white fields, three primaries and nothing else.",
    m: "ပန်းချီဆရာ Mondrian ၏ ကမ္ဘာကို လေးထောင့်ကွက်များအဖြစ် လျှော့ချထားခြင်း - အနက်ရောင် မျဉ်းထူများ၊ အဖြူရောင် နောက်ခံ၊ ပင်မအရောင် ၃ မျိုးမှအပ အခြားဘာမျှ မပါရှိပေ။",
    te: "Thick black grid lines, blocks of pure red / blue / yellow.",
    tm: "အနက်ရောင် Grid မျဉ်းထူများ၊ အနီ/အပြာ/အဝါ သန့်သန့် လေးထောင့်ကွက်များ။",
    we: "Furniture, packaging, architecture references.",
    wm: "ပရိဘောဂများ၊ ထုပ်ပိုးမှုဆိုင်ရာ ဒီဇိုင်းများ၊ ဗိသုကာ ရည်ညွှန်းချက်များ။"
  },
  {
    g: 1,
    c: "swiss",
    d: ["a"],
    eye: "01 / 04",
    sub: "Set on a strict grid, flush left, ragged right.",
    btn: "View",
    n: "Swiss / International",
    mn: "ဆွစ် / အပြည်ပြည်ဆိုင်ရာ Grid ပုံစံ (Swiss / International)",
    era: "1950s onward",
    e: "The grid style taught in every design school: mathematical spacing, one neutral sans, information above expression.",
    m: "ဒီဇိုင်းကျောင်းတိုင်းတွင် သင်ကြားရသော Grid စနစ် - သင်္ချာနည်းကျ အကွာအဝေးများ၊ ရိုးရှင်းသော Sans-serif ဖောင့်တစ်မျိုးတည်း သုံးစွဲမှု၊ အလှပြခြင်းထက် သတင်းအချက်အလက် ရှင်းလင်းမှုကို ဦးစားပေးခြင်း။",
    te: "Visible column grid, Helvetica-like type, a single red accent.",
    tm: "ထင်ရှားသော ကော်လံ Grid စနစ်၊ Helvetica ကဲ့သို့သော ဖောင့်၊ အနီရောင် ပေါ်လွင်ချက် တစ်ခုတည်းသာ ထည့်သွင်းခြင်း။",
    we: "Airports, timetables, annual reports, most corporate sites.",
    wm: "လေဆိပ်များ၊ အချိန်ဇယားများ၊ နှစ်ပတ်လည် အစီရင်ခံစာများနှင့် ကုမ္ပဏီ ဝဘ်ဆိုက် အများစု။"
  },
  {
    g: 1,
    c: "mcm",
    d: ["a", "b"],
    eye: "Palm Springs",
    n: "Mid-Century Modern",
    mn: "ရာစုနှစ်လယ် မော်ဒန်ပုံစံ (Mid-Century Modern)",
    era: "1945-1969",
    e: "Post-war optimism: warm mustards and teals, atomic starbursts, soft organic shapes.",
    m: "ဒုတိယကမ္ဘာစစ်ပြီးခေတ်၏ တောက်ပသော မျှော်လင့်ချက်အသွင် - နွေးထွေးသော မုန်ညင်းဝါနှင့် စိမ်းပြာရောင်များ၊ အဏုမြူ ကြယ်ပွင့် ပုံစံကွက်များနှင့် နူးညံ့သော သဘာဝအကွေးအဝိုင်း ပုံသဏ္ဌာန်များ။",
    te: "Mustard + teal + cream, rounded blobs, thin starburst motifs.",
    tm: "မုန်ညင်းဝါ + စိမ်းပြာ + ခရင်မ်ရောင်၊ အနားလုံး ပုံသဏ္ဌာန်များနှင့် သေးသွယ်သော ကြယ်ပွင့် အလှဆင်မျဉ်းများ။",
    we: "Cafes, furniture shops, retro-styled apps.",
    wm: "ကော်ဖီဆိုင်များ၊ ပရိဘောဂဆိုင်များ၊ Retro စတိုင် အက်ပ်များ။"
  },
  {
    g: 1,
    c: "pop",
    d: ["a"],
    eye: "Pow!",
    n: "Pop Art",
    mn: "ပေါ့ပ်အာ့တ် ဒီဇိုင်းပုံစံ (Pop Art)",
    era: "1955-1970",
    e: "Comic books and advertising treated as fine art. Loud, printed, mass-produced by design.",
    m: "ကာတွန်းစာအုပ်များနှင့် ကြော်ငြာများကို အနုပညာအဖြစ် ပြောင်းလဲဖန်တီးထားခြင်း။ ပေါ်လွင်တောက်ပပြီး ပုံနှိပ်စက်ထုတ် အစုလိုက်ထုတ်လုပ်မှု ပုံစံဆန်သည်။",
    te: "Halftone dots, outlined display type, primary yellow and red.",
    tm: "Halftone ပုံနှိပ်အစက်များ၊ ဘောင်ခတ်ထားသော ခေါင်းစဉ် စာလုံးကြီးများ၊ အဝါနှင့် အနီ ပင်မအရောင်များ။",
    we: "Streetwear, comics, food and drink packaging.",
    wm: "Streetwear ဝတ်စုံများ၊ ကာတွန်းစာအုပ်များ၊ အစားအသောက် ထုပ်ပိုးမှုများ။"
  },
  {
    g: 1,
    c: "psy",
    d: ["a"],
    eye: "Fillmore",
    n: "Psychedelic",
    mn: "ဆိုက်ခီဒယ်လစ် / စိတ်ကူးယဉ်ပုံရိပ် ပုံစံ (Psychedelic)",
    era: "1965-1975",
    e: "Concert-poster style: letterforms stretched until they nearly stop being readable, colour vibrating against colour.",
    m: "တေးဂီတပွဲ ပိုစတာ စတိုင် - စာလုံးများကို ဖတ်ရခက်သည်အထိ ဆွဲဆန့်ထားပြီး အရောင်များ တစ်ခုနှင့်တစ်ခု တုန်ခါပြင်းထန်နေသကဲ့သို့ ယှဉ်တွဲသုံးထားသည်။",
    te: "Melting warped type, rainbow gradients, barely legible on purpose.",
    tm: "အရည်ပျော် ရွဲ့စိမ်းနေသော စာလုံးများ၊ သက်တံရောင် Gradient များ၊ တမင်တကာ ဖတ်ရခက်အောင် ပြုလုပ်ထားခြင်း။",
    we: "Music festivals, album art, craft beer labels.",
    wm: "ဂီတပွဲတော်များ၊ အယ်လ်ဘမ်ကာဗာများ၊ Craft Beer ဘီယာတံဆိပ်များ။"
  },
  {
    g: 1,
    c: "mem",
    d: ["a", "b", "c"],
    eye: "Milano",
    n: "Memphis",
    mn: "မန်းဖစ် / ၈၀ ပြည့်လွန် ဒီဇိုင်းပုံစံ (Memphis)",
    era: "1981-1987",
    e: "The 80s squiggle-and-confetti look. Deliberately childish shapes and pastels, thrown against black outlines.",
    m: "၁၉၈၀ ပြည့်လွန်နှစ်များ၏ ကွေးကောက်မျဉ်းများနှင့် Confetti အစက်ပြောက် စတိုင်။ ကလေးဆန်သော ပုံသဏ္ဌာန်များနှင့် Pastel အရောင်များကို အနက်ရောင် ဘောင်ထူထူများနှင့် ပေါင်းစပ်ထားသည်။",
    te: "Squiggles, terrazzo dots, mint + pink + yellow, mismatched shapes.",
    tm: "ကွေးကောက်မျဉ်းများ၊ Terrazzo ကျောက်စက်ကွက်များ၊ မင်ဒါရောင်+ပန်းရောင်+အဝါရောင် ပေါင်းစပ်မှုနှင့် မတူညီသော ပုံသဏ္ဌာန်များ။",
    we: "Kids brands, 80s throwbacks, retro TV graphics.",
    wm: "ကလေးအမှတ်တံဆိပ်များ၊ ၈၀ ပြည့်လွန် Retro ဂရပ်ဖစ်များနှင့် ရုပ်သံလိုင်း ဂရပ်ဖစ်များ။"
  },
  {
    g: 1,
    c: "grunge",
    d: ["a"],
    eye: "Analog",
    n: "Grunge",
    mn: "ဂရန်းဂျ် / အဟောင်းအနွမ်း ပုံစံ (Grunge)",
    era: "1990s",
    e: "Photocopied, torn and stained. A rejection of the clean corporate look that came before it.",
    m: "မိတ္တူကူးထားသကဲ့သို့ ခြစ်ရာများ၊ စုတ်ပြဲမှုများနှင့် အကွက်များ ပါဝင်သောပုံစံ။ သူ့မတိုင်မီက သန့်ရှင်းသပ်ရပ်သော ကော်ပိုရိတ် ဒီဇိုင်းများကို ဆန့်ကျင်တုံ့ပြန်ထားခြင်းဖြစ်သည်။",
    te: "Noise and scratches, torn edges, muddy browns, crooked alignment.",
    tm: "Noise အစက်များနှင့် ခြစ်ရာများ၊ စုတ်ပြဲနေသော အနားစွန်းများ၊ ရွှံ့ညိုရောင်နှင့် စိမ်းစောင်းနေသော နေရာချထားမှု။",
    we: "Skate brands, band merch, indie magazines.",
    wm: "စကိတ် အမှတ်တံဆိပ်များ၊ တီးဝိုင်း အမှတ်တရပစ္စည်းများ၊ လွတ်လပ်သော အင်ဒီ မဂ္ဂဇင်းများ။"
  },
  {
    g: 1,
    c: "y2k",
    d: ["a"],
    eye: "Millennium",
    n: "Y2K",
    mn: "ဝိုင်တူးကေ / ၂၀၀၀ ပြည့်လွန် နည်းပညာပုံစံ (Y2K)",
    era: "1998-2004",
    e: "The future as imagined in 1999: chrome, bubbles, lens flare and translucent blue plastic.",
    m: "၁၉၉၉ ခုနှစ်ဝန်းကျင်က စိတ်ကူးယဉ်ခဲ့သော အနာဂတ်ပုံရိပ် - ခရိုမီယမ် သတ္တုရောင်၊ ပူဖောင်း ပုံသဏ္ဌာန်များ၊ Lens Flare အလင်းတန်းများနှင့် အလင်းဖောက် အပြာရောင် ပလတ်စတစ်။",
    te: "Metallic gradient type, glossy orbs, silver-blue everything.",
    tm: "သတ္တုရောင် Gradient စာလုံးများ၊ တောက်ပြောင်သော အဝိုင်းလုံးများ၊ ငွေရောင်နှင့် အပြာရောင် သုံးစွဲမှု။",
    we: "Nostalgia branding, gaming, Gen-Z fashion.",
    wm: "ခေတ်ဟောင်းပြန်ပြောင်းအမှတ်တရ အမှတ်တံဆိပ်များ၊ ဂိမ်းများ၊ Gen-Z ဖက်ရှင်များ။"
  },
  {
    g: 1,
    c: "vapor",
    d: ["b", "a"],
    eye: "A E S T H E T I C",
    n: "Vaporwave / Synthwave",
    mn: "ဗေးပါဝေ့ဖ် / ဆင့်သ်ဝေ့ဖ် ပုံစံ (Vaporwave / Synthwave)",
    era: "2010s onward",
    e: "Nostalgia for an 80s that never happened - sunset gradients, neon grids and VHS colour fringing.",
    m: "အမှန်တကယ် မရှိခဲ့ဖူးသော ၈၀ ပြည့်လွန်နှစ်များကို တမ်းတသောပုံစံ - နေဝင်ချိန် Gradient၊ Neon Grid မျဉ်းကွက်များနှင့် VHS ဗီဒီယို အရောင်လွဲချက်များ။",
    te: "Magenta-to-cyan gradient, glowing horizon grid, offset neon type.",
    tm: "Magenta မှ Cyan သို့ Gradient ပြောင်းလဲမှု၊ လင်းလက်သော မိုးကုတ်စက်ဝိုင်း Grid မျဉ်းနှင့် အရာရွှေ့ထားသော Neon စာလုံးများ။",
    we: "Lo-fi music channels, gaming, night-life posters.",
    wm: "Lo-Fi တေးဂီတ လိုင်းများ၊ ဂိမ်းများ၊ ညဘဝ ပွဲလမ်းသဘင် ပိုစတာများ။"
  },
  {
    g: 2,
    c: "skeu",
    d: [],
    eye: "Notes",
    n: "Skeuomorphism",
    mn: "အစစ်တုပ ဒီဇိုင်းပုံစံ (Skeuomorphism)",
    era: "2007-2012",
    e: "Screens pretending to be objects: leather stitching, paper texture, buttons that look pressable because they look real.",
    m: "မျက်နှာပြင်များပေါ်တွင် တကယ့်ပြင်ပဝတ္ထုပစ္စည်းများအတိုင်း တုပထားခြင်း - သားရေချုပ်ရိုးများ၊ စက္ကူသား Texture နှင့် အစစ်အတိုင်း ထင်ရ၍ နှိပ်ချင်စရာ ခလုတ်များ။",
    te: "Material textures, bevels, glossy gradients, drop shadows everywhere.",
    tm: "ပြင်ပဝတ္ထု၏ Texture များ၊ ထောင့်နိမ့်ထောင့်မြင့် Bevel များ၊ တောက်ပြောင်သော Gradient နှင့် Drop Shadow အရိပ်များ အလွန်သုံးထားခြင်း။",
    we: "iPhone before iOS 7; older calculator, notes and camera apps.",
    wm: "iOS 7 မတိုင်မီ iPhone များ၊ ရှေးယခင် ဂဏန်းတွက်စက်၊ မှတ်စုနှင့် ကင်မရာ အက်ပ်များ။"
  },
  {
    g: 2,
    c: "flat",
    d: ["a"],
    eye: "Flat",
    n: "Flat design",
    mn: "ဖလက်တ် / ပြားချပ်ပုံစံ (Flat Design)",
    era: "2013 onward",
    e: "The hard reset. No shadow, no gradient, no texture - just solid colour blocks and clear type.",
    m: "အရာအားလုံးကို ရိုးရှင်းအောင် ပြန်လည်စတင်လိုက်သည့် ပုံစံ - အရိပ် မပါ၊ Gradient မပါ၊ Texture မပါဘဲ သန့်သန့်ပြန့်ပြန့် အရောင်ကွက်များနှင့် ရှင်းလင်းသော စာလုံးများသာ ပါဝင်သည်။",
    te: "Pure fills, sharp corners, no depth cues at all.",
    tm: "Solid အရောင်သန့်များ၊ ထောင့်မှန် ထောင့်ချွန်များ၊ အနက်တိမ် သုံးဖက်မြင် ပြသချက် လုံးဝမပါရှိခြင်း။",
    we: "Windows 8, early Google apps, most 2014-era websites.",
    wm: "Windows 8၊ အစောပိုင်း Google အက်ပ်များနှင့် ၂၀၁၄ ခေတ်ဝန်းကျင် ဝဘ်ဆိုက်အများစု။"
  },
  {
    g: 2,
    c: "mat",
    d: ["a"],
    eye: "Material",
    n: "Material Design",
    mn: "မက်တီရီရယ် ဒီဇိုင်းပုံစံ (Material Design)",
    era: "2014 onward",
    e: "Google's answer: flat colour, but on sheets of paper that stack, cast shadows and move. The default look of Android.",
    m: "Google ၏ အဖြေ - Flat အရောင်များကို သုံးထားသော်လည်း အထပ်ထပ် စီထားသော စက္ကူချပ်များကဲ့သို့ အရိပ်ကျခြင်း၊ လှုပ်ရှားခြင်းများ ပါဝင်သည်။ Android စနစ်၏ မူလ ပုံစံဖြစ်သည်။",
    te: "Elevation shadows, floating round action button, ripple on tap.",
    tm: "အမြင့်အလွှာအလိုက် အရိပ်များ (Elevation)၊ အဝိုင်းပုံ Floating Action Button (FAB) နှင့် နှိပ်လိုက်ပါက ရေလှိုင်း Ripple အကျိုးသက်ရောက်မှု ပါဝင်ခြင်း။",
    we: "Android, Gmail, Google Maps - and Flutter apps by default.",
    wm: "Android၊ Gmail၊ Google Maps နှင့် မူလအားဖြင့် Flutter အက်ပ်များ။"
  },
  {
    g: 2,
    c: "neu",
    d: [],
    eye: "Soft UI",
    n: "Neumorphism",
    mn: "နယူမောဖစ်ဇမ် / ပျော့ပျောင်းဖောင်းထွက်ပုံစံ (Neumorphism)",
    era: "2019-2021",
    e: "Controls extruded from the background as if pressed out of the same sheet. Beautiful, and famously hard to read.",
    m: "ပြင်ပနောက်ခံ တစ်ခုတည်းမှ ဖောင်းထွက် သို့မဟုတ် ခွက်ဝင်နေသကဲ့သို့ ဖန်တီးထားသော ခလုတ်များ။ သပ္ပါယ်လှပသော်လည်း ဖတ်ရှုရခက်ခဲမှုကြောင့် လူသိများသည်။",
    te: "One background colour for everything, twin light + dark shadows, almost no contrast.",
    tm: "အရာအားလုံးအတွက် နောက်ခံအရောင် တစ်မျိုးတည်း သုံးခြင်း၊ အလင်းနှင့် အမှောင် အရိပ်နှစ်မျိုး စိစပ်ထားခြင်း၊ Contrast ပေါ်လွင်မှု အလွန်နည်းခြင်း။",
    we: "Concept designs on Dribbble; rarely shipped in real products.",
    wm: "Dribbble ပေါ်မှ Concept ဒီဇိုင်းများ၊ လက်တွေ့ ထုတ်ကုန်များတွင် အသုံးပြုမှု အလွန်ရှားပါးသည်။"
  },
  {
    g: 2,
    c: "glass",
    d: ["a", "b"],
    eye: "Frosted",
    n: "Glassmorphism",
    mn: "ဂလတ်စ်မောဖစ်ဇမ် / မှန်ဖောက်ပုံစံ (Glassmorphism)",
    era: "2020 onward",
    e: "Frosted panels floating over colour. Depth comes from blur and transparency instead of shadow.",
    m: "အရောင်စုံ နောက်ခံအထက်တွင် လွင့်မျှောနေသော နှင်းဖုံးမှန်သား (Frosted Glass) ပန်းကန်ပြားများ။ အနက်တိမ် ကြည်လင်မှုကို အရိပ်ထက် Blur နှင့် အလင်းဖောက်မှု (Transparency) တို့ဖြင့် ဖန်တီးသည်။",
    te: "Blurred translucent card, thin white border, colourful blobs behind.",
    tm: "Blur ဖြစ်နေသော အလင်းဖောက် ကတ်ပြား၊ အဖြူရောင် ဘောင်ပါးပါးနှင့် နောက်ခံရှိ တောက်ပသော အရောင်အကွက်များ။",
    we: "macOS Big Sur, Windows 11, iOS Control Centre.",
    wm: "macOS Big Sur၊ Windows 11 နှင့် iOS Control Centre။"
  },
  {
    g: 2,
    c: "clay",
    d: [],
    eye: "Soft 3D",
    n: "Claymorphism",
    mn: "ကလေးမောဖစ်ဇမ် / ရွှံ့စေး 3D ပုံစံ (Claymorphism)",
    era: "2021 onward",
    e: "Puffy, rounded, toy-like shapes in pastel. Friendly and unserious - common in fintech and kids' products.",
    m: "Pastel အရောင်များဖြင့် ပြုလုပ်ထားသော ဖောင်းလုံးလုံး ကစားစရာ ပုံသဏ္ဌာန်များ။ ခင်မင်ရင်းနှီးဖွယ်ရှိပြီး ရွှင်ပျသော ခံစားချက်ကို ပေးစွမ်းကာ Fintech နှင့် ကလေးအသုံးအဆောင်များတွင် ခေတ်စားသည်။",
    te: "Very large radius, inner highlight + inner shadow, pastel lilac and peach.",
    tm: "အလွန်ကြီးသော ထောင့်ကွေး Radius၊ အတွင်းဘက် အလင်းပြောက်နှင့် အတွင်းအရိပ်၊ Pastel ခရမ်းနုနှင့် မက်မွန်သီးရောင်။",
    we: "Fintech onboarding, kids apps, 3D icon sets.",
    wm: "Fintech မိတ်ဆက် စာမျက်နှာများ၊ ကလေးအက်ပ်များ၊ 3D Icon စုစည်းမှုများ။"
  },
  {
    g: 2,
    c: "nbrut",
    d: ["a"],
    eye: "New",
    n: "Neo-brutalism",
    mn: "နီယို-ဘရူတယ်လစ်ဇမ် / ခေတ်သစ် အကြမ်းထည်ပုံစံ (Neo-brutalism)",
    era: "2020 onward",
    e: "Brutalism cleaned up and made friendly: still loud and blocky, but arranged carefully. Everywhere in startup branding.",
    m: "Brutalism ကို သန့်ရှင်းသပ်ရပ်ပြီး ခင်မင်ဖွယ်ဖြစ်အောင် ပြုပြင်ထားခြင်း - ထင်းလင်းသော လေးထောင့်ကွက်များ ပါဝင်သော်လည်း သေချာစွာ စနစ်တကျ နေရာချထားသည်။ Startup အမှတ်တံဆိပ်များတွင် အများဆုံး အသုံးပြုကြသည်။",
    te: "Thick black outlines, hard offset shadow with no blur, saturated flat colour.",
    tm: "အနက်ရောင် ဘောင်လိုင်းထူထူများ၊ Blur လုံးဝမပါသော ပြတ်သားသည့် ရွှေ့အရိပ် (Hard Offset Shadow)၊ တောက်ပသော Flat အရောင်များ။",
    we: "Gumroad, Figma community, indie SaaS landing pages.",
    wm: "Gumroad၊ Figma Community၊ လွတ်လပ်သော SaaS လန်းဒင်းစာမျက်နှာများ။"
  },
  {
    g: 2,
    c: "bento",
    d: [],
    eye: "Grid",
    n: "Bento grid",
    mn: "ဘန်တိုဂရစ် / ထမင်းဗူးကွက် ပုံစံ (Bento Grid)",
    era: "2022 onward",
    e: "Content packed into a lunchbox of unequal rounded tiles, each holding one idea. Apple's product pages made it standard.",
    m: "ဂျပန် ထမင်းဗူးခွက်ကဲ့သို့ အရွယ်အစားမတူညီသော ထောင့်ကွေးအကွက်များထဲတွင် အကြောင်းအရာတစ်ခုစီကို စနစ်တကျ ထည့်သွင်းပြသခြင်း။ Apple ၏ ထုတ်ကုန်မိတ်ဆက် စာမျက်နှာများက ခေတ်စားစေခဲ့သည်။",
    te: "Tiles of different sizes, equal gaps, everything rounded.",
    tm: "အရွယ်အစားမတူသော အကွက်များ၊ ညီညာသောအကွာအဝေး၊ အရာအားလုံး ထောင့်ကွေးထားခြင်း။",
    we: "Apple product pages, AI startup landing pages, dashboards.",
    wm: "Apple ထုတ်ကုန် စာမျက်နှာများ၊ AI Startup ဝဘ်ဆိုက်များ၊ Dashboard ဒက်ရှ်ဘုတ်များ။"
  },
  {
    g: 2,
    c: "dark",
    d: ["a"],
    eye: "Dark",
    n: "Dark mode design",
    mn: "ဒတ်ခ်မုဒ် / အမှောင် ဒီဇိုင်းပုံစံ (Dark Mode Design)",
    era: "2019 onward",
    e: "Not simply inverted - surfaces get lighter as they get closer, text is softened off pure white, one accent carries the colour.",
    m: "အရောင်ကို ပြောင်းပြန်လှန်ရုံမျှ မဟုတ်ပေ - အပေါ်လွှာနီးကပ်လေလေ အရောင်ပိုမိုလင်းလာရသည်၊ စာလုံးကို အဖြူစစ်စစ်မသုံးဘဲ စက္ကူဖြူပျော့ရောင်သုံးရသည်၊ ပေါ်လွင်ရောင် တစ်မျိုးတည်းဖြင့် အရောင်ကို ထိန်းချုပ်သည်။",
    te: "Near-black not black, grey-white text, faint borders, single bright accent.",
    tm: "အနက်စစ်မဟုတ္ဘဲ အနက်ရင့် (Near-black) သုံးခြင်း၊ မီးခိုးဖြူရောင် စာလုံးများ၊ မှိန်သော ဘောင်များ၊ ထင်းလင်းသော အဓိက အရောင်တစ်မျိုး သုံးခြင်း။",
    we: "VS Code, X, YouTube - an option in almost every app now.",
    wm: "VS Code၊ X (Twitter)၊ YouTube - ယခုအခါ အက်ပ်တိုင်းနီးပါးတွင် ပါဝင်လာသည့် ရွေးချယ်စရာ။"
  },
  {
    g: 2,
    c: "aurora",
    d: ["a", "b", "c"],
    eye: "Ambient",
    n: "Aurora / mesh gradient",
    mn: "အော်ရိုရာ / မက်ရှ် Gradient ပုံစံ (Aurora / Mesh Gradient)",
    era: "2021 onward",
    e: "Soft blooms of coloured light behind flat content. The default background of AI and developer-tool sites.",
    m: "Flat အကြောင်းအရာများ၏ နောက်ကွယ်တွင် နူးညံ့စွာ ဖြာထွက်နေသော ရောင်စုံအလင်းများ။ AI နှင့် Developer Tool ဝဘ်ဆိုက်များ၏ မူလ နောက်ခံပုံစံ ဖြစ်သည်။",
    te: "Heavily blurred colour circles, dark ground, no hard edges anywhere.",
    tm: "အလွန်အမင်း Blur ပြုလုပ်ထားသည့် အရောင်စက်ဝိုင်းများ၊ မှောင်သောနောက်ခံ၊ မာဆတ်ဆတ် အနားစွန်းများ လုံးဝမပါရှိခြင်း။",
    we: "AI products, developer tools, SaaS hero sections.",
    wm: "AI ထုတ်ကုန်များ၊ Developer Tool များ၊ SaaS ဝဘ်ဆိုက်များ၏ Hero ခေါင်းစဉ်ပိုင်းများ။"
  },
  {
    g: 2,
    c: "iso",
    d: ["a", "b"],
    eye: "3D",
    n: "3D / Isometric",
    mn: "အိုင်ဆိုမက်ထရစ် 3D ပုံစံ (3D / Isometric)",
    era: "2016 onward",
    e: "Objects drawn at a fixed tilt with no perspective, so every face keeps the same scale. Reads as technical and buildable.",
    m: "အရာဝတ္ထုများကို ကွာဝေးပြောင်းလဲမှု (Perspective) မပါဘဲ ပုံသေ အစောင်းထောင့် (၃၀ ဒီဂရီ) ဖြင့် ဆွဲသားထားသဖြင့် မျက်နှာပြင်တိုင်း အချိုးတူညီနေသည်။ နည်းပညာဆန်ပြီး စနစ်တကျ တည်ဆောက်နိုင်သော ခံစားချက်ကို ပေးသည်။",
    te: "Cubes at a fixed 30 degree tilt, three shades per object, no vanishing point.",
    tm: "ပုံသေ ၃၀ ဒီဂရီ စောင်းထားသော အတုံးများ၊ အရာဝတ္ထုတစ်ခုလျှင် အရောင် ရင့်/လတ်/ဖျော့ ၃ မျိုးပါဝင်ခြင်း၊ ပျောက်ကွယ်မှတ် (Vanishing point) မပါရှိခြင်း။",
    we: "Explainer graphics, infrastructure diagrams, game art.",
    wm: "ရှင်းလင်းချက် ဂရပ်ဖစ်များ၊ အခြေခံအဆောက်အအုံ ပြကြမ်းများ၊ ဂိမ်းဒီဇိုင်းများ။"
  },
  {
    g: 2,
    c: "illus",
    d: ["a", "b", "c"],
    eye: "Draw",
    n: "Illustrative",
    mn: "သရုပ်ဖော် ပုံဆွဲဒီဇိုင်းပုံစံ (Illustrative)",
    era: "2015 onward",
    e: "Custom drawing carries the brand instead of photography. Warm, human, and hard for competitors to copy.",
    m: "ဓာတ်ပုံများအစား သီးသန့်ဆွဲထားသော ပုံဆွဲလက်ရာများဖြင့် အမှတ်တံဆိပ်ကို ပုံဖော်ခြင်း။ နွေးထွေးမှု၊ လူသားဆန်မှုကို ပေးစွမ်းပြီး ပြိုင်ဘက်များ ကူးယူရန် ခက်ခဲသည်။",
    te: "Hand-made blob shapes, limited warm palette, a character or scene as the hero.",
    tm: "လက်ဆွဲ ပုံသဏ္ဌာန်များ၊ နွေးထွေးသော အရောင်အနည်းငယ်သာ သုံးစွဲခြင်း၊ ဇာတ်ကောင် သို့မဟုတ် မြင်ကွင်းတစ်ခုကို အဓိကထား ပြသခြင်း။",
    we: "Mailchimp, Slack, Dropbox, most startup marketing sites.",
    wm: "Mailchimp၊ Slack၊ Dropbox နှင့် Startup ကြော်ငြာ ဝဘ်ဆိုက် အများစု။"
  }
];

export const GROUPS = [
  {
    e: "Attitudes",
    m: "ဒီဇိုင်း သဘောထားများ",
    pe: "Not looks so much as positions - how much is the design willing to say, and how loudly? Everything else sits somewhere on this spectrum.",
    pm: "ဒါတွေက အသွင်အပြင်ထက် ဒီဇိုင်း၏ ရပ်တည်ချက် သဘောထားများ ဖြစ်ကြသည် - ဒီဇိုင်းက မည်မျှအထိ ပြောဆိုချင်သနည်း၊ မည်မျှ ကျယ်လောင်စွာ ပြသချင်သနည်း။ ကျန်သည့် ပုံစံအားလုံးသည် ဒီအစဉ်အလာကြားထဲတွင် ရှိကြသည်။"
  },
  {
    e: "Movements",
    m: "သမိုင်းဝင် ဒီဇိုင်းလှုပ်ရှားမှုများ",
    pe: "Named periods with a fixed vocabulary of colour, shape and type. Borrow one and the audience gets the reference instantly.",
    pm: "သတ်မှတ်ထားသော အရောင်၊ ပုံသဏ္ဌာန်နှင့် စာလုံးပုံစံများရှိသည့် ခေတ်ကာလများ ဖြစ်သည်။ တစ်ခုခုကို ငှားရမ်းသုံးစွဲလိုက်သည်နှင့် ကြည့်ရှုသူက သမိုင်းဝင် အကိုးအကားကို ချက်ချင်း သဘောပေါက်သွားမည်ဖြစ်သည်။"
  },
  {
    e: "Screen styles",
    m: "မျက်နှာပြင် ဒီဇိုင်းစတိုင်များ",
    pe: "These are the ones that matter for apps and websites. Unlike the movements above they arrived in a clear order, each one answering the last.",
    pm: "အက်ပ်များနှင့် ဝဘ်ဆိုက်များအတွက် အရေးအကြီးဆုံး ပုံစံများ ဖြစ်သည်။ အထက်ပါ သမိုင်းဝင် လှုပ်ရှားမှုများနှင့် မတူဘဲ စနစ်တကျ အစဉ်လိုက် ပေါ်ပေါက်လာခဲ့ကြပြီး တစ်ခုစီသည် အရင်ပုံစံကို ပြန်လည်တုံ့ပြန်ထားခြင်း ဖြစ်သည်။"
  }
];

export const RAIL = [
  { y: "2007", e: "Skeuomorphism - iPhone launches", m: "အစစ်တုပ ပုံစံ - iPhone စတင်မိတ်ဆက်" },
  { y: "2013", e: "Flat - iOS 7 strips it all out", m: "ဖလက်တ် ပြားချပ်ပုံစံ - iOS 7 မှ အလှဆင်မှုများ စွန့်လွှတ်" },
  { y: "2014", e: "Material - Google adds depth back", m: "မက်တီရီရယ် - Google မှ အနက်တိမ် ပြန်လည်ထည့်သွင်း" },
  { y: "2019", e: "Neumorphism + dark mode", m: "နယူမောဖစ်ဇမ် + အမှောင် ဒီဇိုင်းပုံစံ" },
  { y: "2020", e: "Glass - macOS Big Sur", m: "ဂလတ်စ်မောဖစ်ဇမ် မှန်ဖောက်ပုံစံ - macOS Big Sur" },
  { y: "2021", e: "Clay + aurora gradients", m: "ရွှံ့စေးပုံစံ + အော်ရိုရာ Gradient နောက်ခံ" },
  { y: "2022", e: "Bento grids + neo-brutalism", m: "ဘန်တိုဂရစ် ထမင်းဗူးကွက် + နီယို-ဘရူတယ်လစ်ဇမ်" }
];

export const METHOD = [
  ["UX vs UI", "UX နှင့် UI", "UX is the flow and the decisions; UI is the surface people touch. One person often does both.", "UX သည် အသုံးပြုပုံ အဆင့်ဆင့်နှင့် ဆုံးဖြတ်ချက်များ ဖြစ်ပြီး၊ UI သည် လူများ ထိတွေ့ကိုင်တွယ်ရသော မျက်နှာပြင် ဖြစ်သည်။ လူတစ်ဦးတည်းမှ နှစ်မျိုးလုံး လုပ်ဆောင်သည်များသည်။"],
  ["Human-centred design", "လူကို ဗဟိုပြုသော ဒီဇိုင်း (HCD)", "Decisions come from watching real users, not from the team's taste.", "ဆုံးဖြတ်ချက်များသည် အဖွဲ့၏ အကြိုက်မှ မဟုတ်ဘဲ တကယ့် အသုံးပြုသူများကို လေ့လာစောင့်ကြည့်ခြင်းမှ လာသည်။"],
  ["Design thinking", "ဒီဇိုင်း တွေးခေါ်နည်းစနစ်", "The five-step loop: empathise, define, ideate, prototype, test.", "အဆင့် ၅ ဆင့် ပါဝင်သော အဝိုင်းပတ် - ကိုယ်ချင်းစာ၊ ပြဿနာသတ်မှတ်၊ အကြံထုတ်၊ နမူနာပြု၊ စမ်းသပ်။"],
  ["Design system", "ဒီဇိုင်း စနစ်", "Reusable components plus the rules for using them. Material is one.", "ပြန်လည်အသုံးပြုနိုင်သော Component များနှင့် ၎င်းတို့ကို အသုံးပြုရန် စည်းမျဉ်းများ။ Material Design သည် တစ်ခုအပါအဝင် ဖြစ်သည်။"],
  ["Atomic design", "အက်တမ် ဒီဇိုင်းစနစ်", "A way to organise a system: atoms, molecules, organisms, templates, pages.", "ဒီဇိုင်းစနစ်တစ်ခုကို ဖွဲ့စည်းသည့်နည်း - အက်တမ်၊ မော်လီကျူး၊ အော်ဂနိဇမ်၊ တမ်းပလိတ်၊ စာမျက်နှာ။"],
  ["Wireframe", "ဝိုင်ယာဖရိမ် မူကြမ်း", "Grey boxes. Structure only, no styling, meant to be argued about cheaply.", "မီးခိုးရောင် လေးထောင့်ကွက်များ။ ဖွဲ့စည်းပုံ သက်သက်သာဖြစ်ပြီး အလှဆင်မှုမပါဘဲ ကုန်ကျစရိတ်နည်းနည်းဖြင့် အငြင်းပွား ပြင်ဆင်ရန် ဖန်တီးထားခြင်း ဖြစ်သည်။"],
  ["Mockup", "မော့ခ်အပ် နမူနာပုံ", "The wireframe with real colour, type and images. Looks finished, does nothing.", "ဝိုင်ယာဖရိမ်ကို တကယ့် အရောင်၊ ဖောင့်နှင့် ဓာတ်ပုံများဖြင့် ဖြည့်စွက်ထားခြင်း။ ပြီးစီးနေပုံရသော်လည်း နှိပ်၍မရသေးပေ။"],
  ["Prototype", "စမ်းသပ်ပုံစံ (Prototype)", "The mockup wired up so it can be clicked through and tested.", "မော့ခ်အပ်ကို အပြန်အလှန် နှိပ်ကြည့်၍ ရအောင် ချိတ်ဆက်ထားခြင်းဖြစ်ပြီး လက်တွေ့ စမ်းသပ်နိုင်သည်။"],
  ["Responsive design", "မျက်နှာပြင်လိုက် တုံ့ပြန်ပုံစံ", "One layout that reflows to fit any screen, rather than separate designs per device.", "စက်ပစ္စည်းတစ်ခုစီအတွက် ဒီဇိုင်းသီးသန့် မဟုတ်ဘဲ မည်သည့် မျက်နှာပြင်နှင့်မဆို အလိုအလျောက် ကိုက်ညီအောင် ပြန်စီပေးသည့် Layout တစ်ခုတည်း ဖန်တီးခြင်း။"],
  ["Accessible design", "အားလုံး အသုံးပြုနိုင်သော ဒီဇိုင်း", "Usable with low vision, colour blindness, a screen reader or keyboard only. Contrast is the first thing to check.", "အမြင်အာရုံ အားနည်းသူ၊ အရောင်မခွဲခြားနိုင်သူ၊ Screen reader သို့မဟုတ် ကီးဘုတ်တစ်ခုတည်း သုံးစွဲသူများပါ အဆင်ပြေစေရန် ဖန်တီးခြင်း။ Contrast အရောင်ကွဲပြားမှုကို ပထမဆုံး စစ်ဆေးရမည်။"]
];

export const VOCAB = [
  ["hierarchy", "အဆင့်အတန်း စီစဉ်မှု (Hierarchy)", "What the eye reaches first, second, third.", "မျက်လုံးက မည်သည့်အရာကို ပထမ၊ ဒုတိယ၊ တတိယ အစဉ်လိုက် မြင်တွေ့မလဲ ဆိုသည့် စီစဉ်မှု။"],
  ["contrast", "အရောင်ကွဲပြားမှု (Contrast)", "Difference that makes something readable or important.", "ဖတ်ရှုရ လွယ်ကူစေရန် သို့မဟုတ် အရေးကြီးကြောင်း ပေါ်လွင်စေရန် ကွဲပြားခြားနားစေခြင်း။"],
  ["whitespace", "နေရာလွတ် (Whitespace)", "Empty room. Never wasted space.", "ဒီဇိုင်းကြားရှိ နေရာလွတ်။ အလဟဿ စွန့်ပစ်ထားသော နေရာမဟုတ်ပေ။"],
  ["alignment", "အနားစွန်း ညှိယူမှု (Alignment)", "Shared invisible edges between elements.", "ဒီဇိုင်း အစိတ်အပိုင်းများအကြား တူညီသော မမြင်ရသည့် အနားစွန်းများ ညှိယူခြင်း။"],
  ["proximity", "နီးကပ်မှု (Proximity)", "Things placed near each other read as related.", "အရာများကို နီးကပ်စွာ ထားရှိပါက ဆက်စပ်မှုရှိသည်ဟု မျက်လုံးက အလိုအလျောက် မှတ်ယူသည်။"],
  ["repetition", "ထပ်မံသုံးစွဲမှု (Repetition)", "The same treatment reused until it feels like a system.", "တူညီသော ပုံစံကို ထပ်ခါထပ်ခါ သုံးစွဲခြင်းဖြင့် စနစ်တစ်ခုကဲ့သို့ ခံစားရစေခြင်း။"],
  ["scale", "အချိုးအစား အရွယ်အစား (Scale)", "Relative size used to signal importance.", "အရေးကြီးမှုကို ပြသရန် အသုံးပြုသော နှိုင်းယှဉ် အချိုးအစား အရွယ်အစား။"],
  ["rhythm", "စည်းချက် (Rhythm)", "Repeating spacing that gives a page a pulse.", "ထပ်မံပါဝင်သော အကွာအဝေးများက စာမျက်နှာကို စည်းချက်ညီသော သက်ဝင်လှုပ်ရှားမှု ပေးစွမ်းသည်။"],
  ["grid", "ဂရစ် ကွက်စနစ် (Grid)", "The column structure everything snaps to.", "အရာအားလုံး နေရာကျနစွာ ကပ်ညှိရမည့် ကော်လံ ဖွဲ့စည်းပုံ။"],
  ["balance", "ချိန်ခွင်လျှာ ညီမျှမှု (Balance)", "Visual weight spread evenly, or deliberately not.", "မြင်ကွင်း အလေးချိန်ကို ညီညာစွာ ထားရှိခြင်း သို့မဟုတ် တမင်တကာ မညီမညာ ထားရှိခြင်း။"],
  ["affordance", "သုံးပုံပြ သဲလွန်စ (Affordance)", "A control that looks like what it does.", "မည်သို့ လုပ်ဆောင်သည်ကို ကြည့်ရုံမျှဖြင့် သိရှိနိုင်သော ခလုတ် သို့မဟုတ် ထိန်းချုပ်မှု။"],
  ["gestalt", "အုပ်စုမြင်ခြင်း သဘောတရား (Gestalt)", "How the eye groups shapes into wholes automatically.", "မျက်လုံးက ပုံသဏ္ဌာန်များကို အလိုအလျောက် အုပ်စုဖွဲ့၍ ပေါင်းစည်းမြင်တွေ့သည့် သဘောတရား။"]
];

export const COLOR = [
  [
    "Complementary",
    "ဆန့်ကျင်ဘက် အရောင်များ (Complementary)",
    "Opposite hues on the wheel - the strongest contrast a palette can produce.",
    "အရောင်စက်ဝိုင်းပေါ်တွင် ဆန့်ကျင်ဘက်ရှိ အရောင်များ - ပါလက်တစ်ခု ဖန်တီးနိုင်သမျှ အပြင်းထန်ဆုံး Contrast။",
    ["#1B44D8", "#D8831B"]
  ],
  [
    "Analogous",
    "အိမ်နီးချင်း အရောင်များ (Analogous)",
    "Three hues sitting side by side on the wheel - naturally calm, low tension.",
    "အရောင်စက်ဝိုင်းပေါ်တွင် အနီးကပ် ယှဉ်တွဲနေသော အရောင် သုံးမျိုး - သဘာဝအတိုင်း ငြိမ်သက်ပြီး တင်းမာမှု နည်းသည်။",
    ["#1B44D8", "#1B8FD8", "#1BD8C4"]
  ],
  [
    "Triadic",
    "သုံးထောင့်ဖြာ အရောင်များ (Triadic)",
    "Three hues spaced evenly around the wheel - vivid, but one has to lead.",
    "အရောင်စက်ဝိုင်း ပတ်လည်တွင် အကွာအဝေးညီညီ ထားရှိသော အရောင် သုံးမျိုး - တောက်ပသော်လည်း တစ်မျိုးက ဦးဆောင်ပေးရမည်။",
    ["#D81B44", "#44D81B", "#1B44D8"]
  ],
  [
    "Monochromatic",
    "အရောင်တစ်မျိုးတည်း (Monochromatic)",
    "One hue in several tints and shades - safe, sometimes flat.",
    "အရောင်တစ်မျိုးတည်းကို အရင့်အဖျော့ အမျိုးမျိုးဖြင့် သုံးစွဲခြင်း - စိတ်ချရသော်လည်း တစ်ခါတစ်ရံ ပြားချပ်နေတတ်သည်။",
    ["#0B1F70", "#1B44D8", "#7F97EC"]
  ],
  [
    "60-30-10 rule",
    "၆၀-၃၀-၁၀ စည်းမျဉ်း",
    "Dominant, secondary, accent, in that ratio - keeps a palette from fighting itself.",
    "ပင်မအရောင်၊ ဒုတိယအရောင်၊ ပေါ်လွင်ရောင်ကို ဤအချိုးအစားအတိုင်း သုံးစွဲခြင်း - ပါလက်တစ်ခုကို မိမိကိုယ်တိုင် မတိုက်ခိုက်အောင် ထိန်းပေးသည်။",
    ["#DFE5F0", "#4B5871", "#1B44D8"]
  ],
  [
    "Warm vs cool",
    "နွေးရောင် နှင့် အေးရောင် (Warm vs Cool)",
    "Red/orange/yellow feel close, blue/green/purple feel distant - useful for depth and mood.",
    "အနီ/လိမ္မော်/အဝါရောင်များသည် နီးကပ်နေသကဲ့သို့ ခံစားရပြီး အပြာ/အစိမ်း/ခရမ်းရောင်များသည် ဝေးလံနေသကဲ့သို့ ခံစားရသည် - အနက်တိမ်နှင့် စိတ်ခံစားမှုအတွက် အသုံးဝင်သည်။",
    ["#D8631B", "#1B8FD8"]
  ],
  [
    "Contrast ratio",
    "Contrast အချိုးအစား",
    "Body text needs 4.5:1 against its background to pass WCAG AA - check it, don't guess it.",
    "စာကိုယ်စာသားသည် နောက်ခံနှင့် ၄.၅:၁ Contrast ရှိမှသာ WCAG AA စံချိန်ကို ဖြတ်နိုင်သည် - မှန်းဆမနေဘဲ စစ်ဆေးရမည်။"
  ],
  [
    "Colour psychology",
    "အရောင် စိတ်ပညာ (Colour Psychology)",
    "Blue reads as trust, red as urgency, green as growth - real, but weaker than context and culture.",
    "အပြာရောင်ကို ယုံကြည်မှုဟု၊ အနီရောင်ကို အရေးပေါ်ဟု၊ အစိမ်းရောင်ကို ကြီးထွားမှုဟု ခံစားရတတ်သည် - အမှန်ဖြစ်သော်လည်း အခြေအနေနှင့် ယဉ်ကျေးမှုထက် အားနည်းသည်။"
  ]
];

export const ALIGN = [
  [
    "Flush left, ragged right",
    "ဘယ်ဘက်ညီ၊ ညာဘက်လွတ် (Flush Left)",
    "Centred text works for a headline, never for a paragraph - the eye loses the edge it needs to return to.",
    "ခေါင်းစဉ်အတွက် အလယ်ညှိ စာသား သုံးနိုင်သော်လည်း စာပိုဒ်တွင် မသုံးသင့်ပါ - မျက်လုံး ပြန်ရောက်ရမည့် အနားစွန်း ပျောက်သွားသည်။"
  ],
  [
    "8px spacing grid",
    "၈px အကွာအဝေး Grid",
    "Every margin and padding a multiple of 8 (or 4) - it reads as intentional even when no one can say why.",
    "Margin နှင့် Padding အားလုံးကို ၈ (သို့) ၄ ၏ အဆများဖြင့် ထားရှိပါ - အကြောင်းရင်း ရှင်းမပြနိုင်သော်လည်း တမင်ထားရှိသည်ဟု ခံစားရစေသည်။"
  ],
  [
    "Optical over mathematical",
    "မျက်စိအညှိသည် ဂဏန်းအညှိထက် အရေးကြီးသည်",
    "A circle or triangle needs to sit slightly past the edge a square stops at, or it looks smaller.",
    "စက်ဝိုင်း သို့မဟုတ် တြိဂံသည် လေးထောင့်ရပ်သော အနားစွန်းထက် အနည်းငယ် ကျော်၍ ထားမှသာ အရွယ်အစား တူညီပုံ ပေါ်လိမ့်မည်။"
  ],
  [
    "Proximity over borders",
    "ဘောင်ထက် နီးကပ်မှုကို သုံး",
    "Related fields read as related when spaced closer together - reach for a border only after spacing fails.",
    "ဆက်စပ်သော အကွက်များကို ပိုနီးကပ်အောင် ထားလိုက်လျှင် ဆက်စပ်မှု ပေါ်လွင်သည် - Border ကို အကွာအဝေးဖြင့် မအောင်မြင်မှသာ သုံးပါ။"
  ],
  [
    "One primary action",
    "အဓိက လုပ်ဆောင်ချက် တစ်ခုတည်း",
    "If every button is emphasised, none of them are.",
    "ခလုတ်တိုင်းကို အလေးပေးထားလျှင် ဘယ်ခလုတ်ကိုမှ အလေးမထားသလို ဖြစ်သွားသည်။"
  ],
  [
    "Baseline grid",
    "Baseline Grid အညှိ",
    "Text across columns should land on the same horizontal lines, or the page feels unsteady.",
    "ကော်လံများ တစ်လျှောက် စာသားများသည် အလျားလိုက်မျဉ်း တစ်ခုတည်းတွင် ကျရောက်မှသာ စာမျက်နှာ တည်ငြိမ်သည်ဟု ခံစားရမည်။"
  ],
  [
    "44px touch targets",
    "44px အနည်းဆုံး Touch Target",
    "Anything tappable needs room for a fingertip, not a cursor.",
    "နှိပ်နိုင်သော အရာတိုင်းသည် Cursor အတွက် မဟုတ်ဘဲ လက်ချောင်းထိပ်အတွက် နေရာ လိုအပ်သည်။"
  ],
  [
    "F-pattern vs Z-pattern",
    "F ပုံစံ vs Z ပုံစံ စကင်ဖတ်ခြင်း",
    "Eye-tracking shows two dominant scan shapes - F for text-heavy pages, Z for simple landing pages.",
    "မျက်လုံး Tracking လေ့လာမှုများအရ ပင်မ ဖတ်ရှုပုံစံ နှစ်မျိုးရှိသည် - စာများသော စာမျက်နှာအတွက် F ပုံစံ၊ ရိုးရှင်းသော Landing Page အတွက် Z ပုံစံ။"
  ]
];

export const COMBOS = [
  {
    n: "SaaS Dashboard",
    mn: "SaaS ဒက်ရှ်ဘုတ်",
    plat: "web",
    colors: ["#F4F6FA", "#121A2B", "#1B44D8"],
    head: "Space Grotesk",
    body: "Inter",
    radius: 8,
    e: "A near-white ground, near-black text and a single blue accent - keeps a data-dense screen calm instead of busy.",
    m: "အဖြူနီးပါး နောက်ခံ၊ အနက်နီးပါး စာသားနှင့် အပြာရောင် ပေါ်လွင်ချက် တစ်ခုတည်း - Data များနှင့် ပြည့်နှက်နေသော မျက်နှာပြင်ကို ရှုပ်ထွေးစေမည့်အစား ငြိမ်သက်စေသည်။",
    rec: "Ask for: background #F4F6FA, ink text #121A2B, one blue accent #1B44D8. Headings in Space Grotesk, body in Inter. 8px corner radius, tight and consistent spacing.",
    recM: "တောင်းဆိုရန် - Background #F4F6FA၊ Ink စာသား #121A2B၊ အပြာရောင် Accent #1B44D8 တစ်ခုတည်း။ ခေါင်းစဉ်များအတွက် Space Grotesk၊ Body အတွက် Inter သုံးပါ။ 8px ထောင့်ကွေးနှင့် တင်းကျပ်သော အကွာအဝေးဖြင့် စီစဉ်ပါ။"
  },
  {
    n: "Marketing Landing Page",
    mn: "မားကတ်တင်း Landing Page",
    plat: "web",
    colors: ["#FFFFFF", "#111318", "#7C3AED"],
    head: "Sora",
    body: "Inter",
    radius: 14,
    e: "A bold display heading sells the pitch in one glance; a plain workhorse body keeps the proof underneath it legible.",
    m: "ရဲရင့်သော ခေါင်းစဉ်ဖောင့်က တစ်ကြည့်ချင်းဖြင့် စိတ်ဆွဲဆောင်ပြီး ရိုးရှင်းသော Body ဖောင့်က အောက်ခြေ အထောက်အထားများကို ဖတ်ရလွယ်အောင် ထိန်းပေးသည်။",
    rec: "Ask for: white background #FFFFFF, near-black text #111318, purple accent #7C3AED. Headings in Sora (bold), body in Inter. 14px radius, generous whitespace, one big hero statement.",
    recM: "တောင်းဆိုရန် - အဖြူရောင် Background #FFFFFF၊ အနက်နီးပါး စာသား #111318၊ ခရမ်းရောင် Accent #7C3AED။ ခေါင်းစဉ်များအတွက် Sora (Bold)၊ Body အတွက် Inter သုံးပါ။ 14px ထောင့်ကွေးနှင့် ဗလာနေရာ ကျယ်ကျယ်ချန်ပြီး Hero စာကြောင်းကြီးတစ်ကြောင်း ထားပါ။"
  },
  {
    n: "E-commerce Storefront",
    mn: "E-commerce ဆိုင်ခန်း",
    plat: "web",
    colors: ["#FAF6F0", "#2A2A2A", "#C1502E"],
    head: "Fraunces",
    body: "Inter",
    radius: 10,
    e: "A serif heading signals craft and quality; a plain sans body keeps product specs fast to scan.",
    m: "Serif ခေါင်းစဉ်ဖောင့်က လက်မှုပညာဆန်မှုနှင့် အရည်အသွေးကို ဖော်ပြပြီး Sans Body ဖောင့်က ကုန်ပစ္စည်း အချက်အလက်များကို လျင်မြန်စွာ ဖတ်ရှုနိုင်စေသည်။",
    rec: "Ask for: cream background #FAF6F0, charcoal text #2A2A2A, terracotta accent #C1502E. Headings in Fraunces (serif), body in Inter. 10px radius, product-grid friendly spacing.",
    recM: "တောင်းဆိုရန် - ခရင်မ်ရောင် Background #FAF6F0၊ ခေါင်းလောင်းရောင် စာသား #2A2A2A၊ Terracotta Accent #C1502E။ ခေါင်းစဉ်များအတွက် Fraunces Serif ဖောင့်၊ Body အတွက် Inter သုံးပါ။ 10px ထောင့်ကွေးနှင့် ကုန်ပစ္စည်း Grid အတွက် သင့်တော်သော အကွာအဝေး။"
  },
  {
    n: "Portfolio / Personal site",
    mn: "ပို့ဖိုလီယို / ကိုယ်ပိုင် ဝဘ်ဆိုက်",
    plat: "web",
    colors: ["#F7F5F2", "#1A1A1A", "#D8831B"],
    head: "Instrument Serif",
    body: "IBM Plex Mono",
    radius: 4,
    e: "A serif/mono pairing reads as edited and considered, not templated - keep the mono for labels and metadata, not paragraphs.",
    m: "Serif + Mono ပေါင်းစပ်မှုသည် Template တစ်ခုလို မဟုတ်ဘဲ စနစ်တကျ တည်းဖြတ်ထားသလို ခံစားရစေသည် - Mono ကို Label နှင့် Metadata အတွက်သာ ထားပါ၊ စာပိုဒ်များအတွက် မသုံးပါနှင့်။",
    rec: "Ask for: off-white background #F7F5F2, ink text #1A1A1A, one personal accent (here #D8831B). Headings in Instrument Serif italic, labels/metadata in IBM Plex Mono. 4px radius, editorial spacing.",
    recM: "တောင်းဆိုရန် - အဖြူနီးပါး Background #F7F5F2၊ Ink စာသား #1A1A1A၊ ကိုယ်ပိုင် Accent တစ်ခု (ဥပမာ #D8831B)။ ခေါင်းစဉ်များအတွက် Instrument Serif Italic၊ Label/Metadata အတွက် IBM Plex Mono သုံးပါ။ 4px ထောင့်ကွေးနှင့် Editorial စတိုင် အကွာအဝေး။"
  },
  {
    n: "Fintech Mobile App",
    mn: "Fintech မိုဘိုင်းအက်ပ်",
    plat: "mobile",
    colors: ["#0B1F4D", "#FFFFFF", "#17C3A2"],
    head: "Inter",
    body: "Inter",
    radius: 16,
    e: "One type family end to end keeps a small screen calm; the mint accent signals growth without shouting.",
    m: "အစအဆုံး Font Family တစ်မျိုးတည်း သုံးခြင်းက မျက်နှာပြင်သေးသေးလေးကို ငြိမ်သက်စေပြီး Mint အရောင် ပေါ်လွင်ချက်က ဆူညံသလို မဟုတ်ဘဲ ကြီးထွားမှုကို ညွှန်ပြသည်။",
    rec: "Ask for: navy background #0B1F4D, white text, mint accent #17C3A2. Inter for both headings and body (semibold headings). 16px radius on cards, generous tap-target spacing.",
    recM: "တောင်းဆိုရန် - Navy Background #0B1F4D၊ အဖြူရောင် စာသား၊ Mint Accent #17C3A2။ ခေါင်းစဉ်နှင့် Body နှစ်ခုလုံးအတွက် Inter (ခေါင်းစဉ်ကို Semibold) သုံးပါ။ ကတ်ပြားများကို 16px ထောင့်ကွေးဖြင့် နှိပ်ရလွယ်သော အကွာအဝေး ထားပါ။"
  },
  {
    n: "Health & Wellness App",
    mn: "ကျန်းမာရေးနှင့် Wellness အက်ပ်",
    plat: "mobile",
    colors: ["#7FA98C", "#FBF7F0", "#F4845F"],
    head: "Nunito",
    body: "Nunito",
    radius: 20,
    e: "Rounded letterforms read as gentle rather than clinical - important when the content is about someone's body or mind.",
    m: "အနားကွေးသော စာလုံးပုံစံများသည် ဆေးဝါးဆန်သည့်အစား နူးညံ့သိမ်မွေ့စွာ ခံစားရစေသည် - ကိုယ်ခန္ဓာ သို့မဟုတ် စိတ်ပိုင်းဆိုင်ရာ အကြောင်းအရာများအတွက် အရေးကြီးသည်။",
    rec: "Ask for: sage background #7FA98C, cream surface #FBF7F0, coral accent #F4845F. Nunito for both headings and body. 20px radius, soft rounded cards, plenty of breathing room.",
    recM: "တောင်းဆိုရန် - Sage Background #7FA98C၊ ခရင်မ်ရောင် Surface #FBF7F0၊ Coral Accent #F4845F။ ခေါင်းစဉ်နှင့် Body နှစ်ခုလုံးအတွက် Nunito သုံးပါ။ 20px ထောင့်ကွေးနှင့် ပျော့ပျောင်းသော ကတ်ပြားများ၊ လွတ်လပ်စွာ အသက်ရှူနိုင်သော နေရာများ ထားပါ။"
  },
  {
    n: "Food Delivery App",
    mn: "အစားအသောက် ပို့ဆောင်ရေး အက်ပ်",
    plat: "mobile",
    colors: ["#E23744", "#2A2A2A", "#FFC93C"],
    head: "Poppins",
    body: "Inter",
    radius: 14,
    e: "A geometric sans headline reads fast on a thumb-sized card; the warm red-and-yellow pairing is a proven appetite trigger.",
    m: "Geometric Sans ခေါင်းစဉ်ဖောင့်က လက်မလောက်သာသော ကတ်ပြားပေါ်တွင် မြန်ဆန်စွာ ဖတ်နိုင်ပြီး နွေးထွေးသော အနီ-အဝါ ပေါင်းစပ်မှုသည် စားချင်စိတ် ဖြစ်စေကြောင်း သက်သေပြထားသည်။",
    rec: "Ask for: white surface, charcoal text #2A2A2A, red #E23744 and yellow #FFC93C accents. Poppins for headings, Inter for body. 14px radius, bold appetite-driving imagery.",
    recM: "တောင်းဆိုရန် - အဖြူရောင် Surface၊ ခေါင်းလောင်းရောင် စာသား #2A2A2A၊ အနီ #E23744 နှင့် အဝါ #FFC93C Accent များ။ ခေါင်းစဉ်များအတွက် Poppins၊ Body အတွက် Inter သုံးပါ။ 14px ထောင့်ကွေးနှင့် စားချင်စဖွယ် ပုံရိပ်များ ထင်ရှားစွာ ထားပါ။"
  },
  {
    n: "Developer Tool",
    mn: "Developer Tool",
    plat: "both",
    colors: ["#0D1117", "#C9D1D9", "#3FB950"],
    head: "JetBrains Mono",
    body: "Inter",
    radius: 6,
    e: "Mono signals \"built for engineers\" - reserve it for labels and code, and let a plain sans carry the paragraphs.",
    m: "Mono ဖောင့်သည် \"အင်ဂျင်နီယာများအတွက် တည်ဆောက်ထား\" ဟု အချက်ပြသည် - Label နှင့် Code များအတွက်သာ သုံးပြီး စာပိုဒ်များကို Sans ဖောင့်ဖြင့် ထားပါ။",
    rec: "Ask for: near-black background #0D1117, light grey text #C9D1D9, green accent #3FB950. JetBrains Mono for labels/code, Inter for body copy. 6px radius, dense and information-first.",
    recM: "တောင်းဆိုရန် - အနက်နီးပါး Background #0D1117၊ မီးခိုးရောင် စာသား #C9D1D9၊ အစိမ်းရောင် Accent #3FB950။ Label/Code အတွက် JetBrains Mono၊ Body အတွက် Inter သုံးပါ။ 6px ထောင့်ကွေးနှင့် သတင်းအချက်အလက် သိပ်သည်းသော Layout။"
  },
  {
    n: "Kids Learning App",
    mn: "ကလေးများအတွက် သင်ယူရေး အက်ပ်",
    plat: "mobile",
    colors: ["#E63946", "#457B9D", "#F1C40F"],
    head: "Baloo 2",
    body: "Nunito",
    radius: 24,
    e: "High saturation and chunky, rounded letterforms read as playful and stay legible for early readers.",
    m: "အရောင် ပြင်းထန်မှုနှင့် ထူထဲအနားကွေးသော စာလုံးပုံစံများသည် ကစားချင်စဖွယ် ခံစားရစေပြီး စာစတင်ဖတ်နေသူများအတွက်ပါ ဖတ်ရလွယ်ကူသည်။",
    rec: "Ask for: white background, red/blue/yellow primaries (#E63946 / #457B9D / #F1C40F). Baloo 2 for headings, Nunito for body. 24px radius, oversized tappable buttons.",
    recM: "တောင်းဆိုရန် - အဖြူရောင် Background၊ အနီ/အပြာ/အဝါ ပင်မအရောင်များ (#E63946/#457B9D/#F1C40F)။ ခေါင်းစဉ်များအတွက် Baloo 2၊ Body အတွက် Nunito သုံးပါ။ 24px ထောင့်ကွေးနှင့် ကြီးမားသော နှိပ်ရလွယ်သည့် ခလုတ်များ။"
  },
  {
    n: "Editorial / News site",
    mn: "သတင်းစာ / Editorial ဝဘ်ဆိုက်",
    plat: "web",
    colors: ["#FFFFFF", "#111111", "#B3261E"],
    head: "Source Serif 4",
    body: "Source Sans 3",
    radius: 0,
    e: "The classic serif-heading, sans-body split mirrors print and keeps long-form reading comfortable for an hour, not a minute.",
    m: "ရိုးရာ Serif ခေါင်းစဉ် + Sans Body ခွဲခြားမှုသည် ပုံနှိပ်စာအုပ်ဆန်ပြီး တစ်မိနစ်သာမက တစ်နာရီလုံး ဖတ်ရှုနေရလည်း အဆင်ပြေစေသည်။",
    rec: "Ask for: white background, near-black text #111111, restrained red accent #B3261E. Source Serif 4 for headings, Source Sans 3 for body. Square (0px) corners, classic print-style columns.",
    recM: "တောင်းဆိုရန် - အဖြူရောင် Background၊ အနက်နီးပါး စာသား #111111၊ ထိန်းညှိထားသော အနီရောင် Accent #B3261E။ ခေါင်းစဉ်များအတွက် Source Serif 4၊ Body အတွက် Source Sans 3 သုံးပါ။ ထောင့်မှန် (0px) နှင့် ရိုးရာ ပုံနှိပ်စတိုင် ကော်လံများ။"
  }
];

export const LIBRARIES = [
  {
    n: "Aceternity UI",
    url: "https://ui.aceternity.com",
    fe: "Hero sections, backgrounds, 3D effects",
    fm: "Hero ကဏ္ဍများ၊ နောက်ခံများ၊ 3D အထူးပြုလုပ်ချက်များ",
    se: "Very flashy",
    sm: "အလွန် တောက်ပြောင်ဆန်းသစ်သည်"
  },
  {
    n: "Magic UI",
    url: "https://magicui.design",
    fe: "Animated marketing UI",
    fm: "လှုပ်ရှားမှုပါဝင်သော မားကတ်တင်း UI များ",
    se: "Polished",
    sm: "သန့်ရှင်းသပ်ရပ်သည်"
  },
  {
    n: "21st.dev",
    url: "https://21st.dev",
    fe: "Huge component marketplace",
    fm: "အကြီးမားဆုံး Component ဈေးကွက်",
    se: "Many styles",
    sm: "စတိုင် အမျိုးအစားစုံလင်သည်"
  },
  {
    n: "Cult UI",
    url: "https://www.cult-ui.com",
    fe: "Modern interactive components",
    fm: "ခေတ်မီ အပြန်အလှန် တုံ့ပြန်နိုင်သော Component များ",
    se: "Clean + animated",
    sm: "သန့်ရှင်းသည် + လှုပ်ရှားမှုပါဝင်သည်"
  },
  {
    n: "Motion Primitives",
    url: "https://motion-primitives.com",
    fe: "Text/hover/transitions",
    fm: "စာသား/Hover/အသွင်ပြောင်း လှုပ်ရှားမှုများ",
    se: "Minimal",
    sm: "လိုရင်းတိုရှင်း ရိုးရှင်းသည်"
  },
  {
    n: "Animata",
    url: "https://animata.design",
    fe: "Micro-interactions",
    fm: "အသေးစား အပြန်အလှန် တုံ့ပြန်မှုများ (Micro-interactions)",
    se: "Lightweight",
    sm: "ပေါ့ပါးသွက်လက်သည်"
  },
  {
    n: "Origin UI",
    url: "https://originui.com",
    fe: "General UI components",
    fm: "အထွေထွေ UI Component များ",
    se: "Clean/app UI",
    sm: "သန့်ရှင်းသော အက်ပ် UI"
  },
  {
    n: "Kokonut UI",
    url: "https://kokonutui.com",
    fe: "Animated backgrounds + AI UI",
    fm: "လှုပ်ရှားနေသော နောက်ခံများ + AI UI",
    se: "Modern",
    sm: "ခေတ်မီဆန်းသစ်သည်"
  },
  {
    n: "ReUI",
    url: "https://reui.io",
    fe: "Large shadcn component collection",
    fm: "ကြီးမားသော shadcn component စုစည်းမှု",
    se: "Professional",
    sm: "ပရော်ဖက်ရှင်နယ် ဆန်သည်"
  }
];

export const UI = {
  en: {
    kick: "Visual reference",
    kick2: "30 specimens / 4 families",
    title: "Design Style Swatchbook",
    lede: "Style names are easier to remember when you have seen them. Every swatch below renders the <strong>same four elements</strong> - a small label, the word <em>Studio</em>, one line of copy, one button - in a different style. The content never changes; only the treatment does.",
    anat: ["<b>Swatch</b> - the style, drawn", "<b>Date</b> - when it was current", "<b>Tell</b> - how to recognise it"],
    hint: "Tap any card to read the full explanation",
    open: "Full detail",
    lblWhat: "What it is",
    lblTell: "How to spot it",
    lblWhere: "Where you see it",
    close: "Close",
    method: "Method words",
    methodP: "Often mixed in with the list above, but these are not looks at all - they describe how the work gets done.",
    vocabH: "The vocabulary underneath",
    vocabP: "Every style above is built from the same handful of ideas. When a layout feels wrong, one of these is usually the reason.",
    libH: "Component libraries",
    libP: "Nine places to borrow ready-made pieces from instead of building every button by hand - each with its own personality.",
    visit: "Visit",
    tabStyles: "Styles",
    tabColor: "Color",
    tabPrinciples: "Principles",
    tabResources: "Resources",
    colorH: "Colour theory",
    colorP: "The handful of relationships a colour wheel actually gives you - the rest is taste.",
    alignH: "Layout & alignment",
    alignP: "Practical placement rules, not definitions - reach for one of these when a layout looks right but somehow isn't.",
    tabCombos: "Combos",
    combosH: "Colour + font combinations",
    combosP: "Ready-made colour, type and platform pairings for real product types - a starting point, not a rule.",
    platWeb: "Website",
    platMobile: "Mobile app",
    platBoth: "Web + mobile",
    headLbl: "Heading",
    bodyLbl: "Body",
    recLbl: "How to ask for it",
    closer: "<b>If you only remember ten:</b> Traditional, Minimalism, Maximalism, Skeuomorphism, Flat, Material, Neumorphism, Glassmorphism, Neo-brutalism, Bento. Those cover almost everything a client or a designer will actually say out loud.",
    sig: "30 specimens<br>4 families<br>rendered in CSS"
  },
  my: {
    kick: "မြင်သာသော အကိုးအကား",
    kick2: "နမူနာ ၃၀ / အမျိုးအစား ၄ အုပ်စု",
    title: "ဒီဇိုင်းစတိုင် နမူနာစာအုပ်",
    lede: "ဒီဇိုင်းစတိုင် နာမည်များကို တစ်ကြိမ်မြင်တွေ့ဖူးပါက မှတ်မိရန် ပိုမိုလွယ်ကူပါသည်။ အောက်ပါ နမူနာတိုင်းတွင် <strong>တူညီသော အစိတ်အပိုင်း ၄ ခု</strong> - စာတန်းသေးသေး တစ်ခု၊ <em>Studio</em> ဆိုသော စကားလုံး၊ စာကြောင်းတစ်ကြောင်းနှင့် ခလုတ်တစ်ခု - ကို စတိုင်တစ်မျိုးစီဖြင့် ပုံဖော်ထားပါသည်။ အကြောင်းအရာသည် မပြောင်းလဲဘဲ ဒီဇိုင်းပုံစံ သက်သက်သာ ပြောင်းလဲသွားခြင်း ဖြစ်ပါသည်။",
    anat: ["<b>နမူနာ</b> - ဒီဇိုင်းပုံစံ ပုံဖော်ချက်", "<b>ခုနှစ်</b> - ခေတ်စားခဲ့သော ကာလ", "<b>မှတ်ရန်</b> - မည်သို့ မှတ်မိနိုင်မည်နည်း"],
    hint: "အသေးစိတ် ဖတ်ရှုရန် ကတ်တစ်ခုခုကို နှိပ်ပါ",
    open: "အသေးစိတ် ဖတ်ရန်",
    lblWhat: "ဘာလဲ",
    lblTell: "မည်သို့ မှတ်မိနိုင်မည်နည်း",
    lblWhere: "မည်သည့်နေရာတွင် တွေ့ရသနည်း",
    close: "ပိတ်မည်",
    method: "လုပ်ငန်းစဉ် ဝေါဟာရများ",
    methodP: "အထက်ပါ စာရင်းနှင့် ရောနှောလေ့ရှိသော်လည်း ဒါများသည် အသွင်အပြင်များ မဟုတ်ကြပါ - အလုပ်ကို မည်သို့ လုပ်ဆောင်ရမည်ဆိုသည်ကို ဖော်ပြခြင်း ဖြစ်ပါသည်။",
    vocabH: "အခြေခံ ဒီဇိုင်း ဝေါဟာရများ",
    vocabP: "အထက်ပါ စတိုင်အားလုံးကို ဒီအခြေခံ သဘောတရား အနည်းငယ်မှပင် တည်ဆောက်ထားခြင်း ဖြစ်သည်။ Layout တစ်ခု လွဲမှားနေသည်ဟု ခံစားရပါက ဒီအချက်များထဲမှ တစ်ခုခု လွဲနေခြင်း ကြောင့်ဖြစ်သည်။",
    libH: "Component Library များ",
    libP: "ခလုတ်တစ်ခုစီကို ကိုယ်တိုင် ပြုလုပ်နေမည့်အစား အသင့်ပြုလုပ်ထားသော အပိုင်းများကို ငှားရမ်းသုံးစွဲနိုင်သည့် နေရာ ၉ ခု - တစ်ခုစီတွင် သီးသန့် ပင်ကိုယ်ဟန် ရှိကြသည်။",
    visit: "ဝင်ရောက်ကြည့်ရှုရန်",
    tabStyles: "ပုံစံများ",
    tabColor: "အရောင်",
    tabPrinciples: "အခြေခံမူများ",
    tabResources: "အရင်းအမြစ်များ",
    colorH: "အရောင် သီအိုရီ",
    colorP: "အရောင်စက်ဝိုင်း တစ်ခုက အမှန်တကယ် ပေးနိုင်သော ဆက်စပ်မှု အနည်းငယ် - ကျန်တာမှာ ကိုယ်ပိုင် အကြိုက်သာ ဖြစ်သည်။",
    alignH: "အပြင်အဆင် နှင့် အညှိထားမှု",
    alignP: "အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ မဟုတ်ဘဲ လက်တွေ့ သုံးနိုင်သော နေရာချထားမှု စည်းမျဉ်းများ - Layout တစ်ခု မှန်ပုံပေါ်သော်လည်း တစ်ခုခု မှားနေသည်ဟု ခံစားရပါက ဒါများကို သုံးကြည့်ပါ။",
    tabCombos: "ပေါင်းစပ်မှုများ",
    combosH: "အရောင် + ဖောင့် ပေါင်းစပ်မှုများ",
    combosP: "လက်တွေ့ ထုတ်ကုန်အမျိုးအစားများအတွက် အသင့်ပြင်ဆင်ထားသော အရောင်၊ ဖောင့်နှင့် ပလက်ဖောင်း ပေါင်းစပ်မှုများ - စည်းမျဉ်း မဟုတ်ဘဲ စတင်ရန် အစချက်တစ်ခုသာ ဖြစ်သည်။",
    platWeb: "ဝဘ်ဆိုက်",
    platMobile: "မိုဘိုင်းအက်ပ်",
    platBoth: "ဝဘ် + မိုဘိုင်း",
    headLbl: "ခေါင်းစဉ်ဖောင့်",
    bodyLbl: "Body ဖောင့်",
    recLbl: "ဘယ်လို တောင်းဆိုရမလဲ",
    closer: "<b>၁၀ ခုမျှသာ မှတ်သားမည်ဆိုပါက -</b> Traditional, Minimalism, Maximalism, Skeuomorphism, Flat, Material, Neumorphism, Glassmorphism, Neo-brutalism, Bento တို့ဖြစ်ပါသည်။ ဒါများသည် အပ်နှံသူ သို့မဟုတ် ဒီဇိုင်နာတစ်ဦး ပြောဆိုမည့် စတိုင်အများစုကို လွှမ်းခြုံနိုင်ပါသည်။",
    sig: "နမူနာ ၃၀<br>အုပ်စု ၄ မျိုး<br>CSS ဖြင့် ဖန်တီးထားသည်"
  }
};