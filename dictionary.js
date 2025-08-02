aaa cons()
  const dictionary = [
  {
    word: "axon",
    meaning: "একটি স্নায়ুকোষের প্রসারিত অংশ যা বিদ্যুৎ সংকেত পরিবহন করে।",
    breakdown: "a- (অক্ষ) + -xon (অঞ্চল)",
    example: "অ্যাক্সন স্নায়ুকোষের দেহ থেকে সংকেত দূরে পাঠায়।"
  },
  {
    word: "dendrite",
    meaning: "স্নায়ুকোষের শাখা যা তথ্য গ্রহণ করে।",
    breakdown: "dendro- (গাছ) + -ite (ছোট অংশ)",
    example: "ডেনড্রাইট স্নায়ুকোষের দেহের দিকে সংকেত বহন করে।"
  },
  {
    word: "enzyme",
    meaning: "একটি জৈব রাসায়নিক যা বিক্রিয়াকে ত্বরান্বিত করে।",
    breakdown: "en- (ভিতরে) + zyme (খামির)",
    example: "এনজাইম হজম প্রক্রিয়ায় খাদ্য ভাঙতে সাহায্য করে।"
  },
  {
    word: "cerebrum",
    meaning: "মস্তিষ্কের সবচেয়ে বড় অংশ, চিন্তাভাবনা ও স্মৃতির জন্য দায়ী।",
    breakdown: "cerebr- (মস্তিষ্ক) + -um (কাঠামো)",
    example: "সেরিব্রাম হাঁটা-চলার মতো ইচ্ছাকৃত কাজ নিয়ন্ত্রণ করে।"
  },
  {
    word: "cerebellum",
    meaning: "মস্তিষ্কের পিছনের অংশ, ভারসাম্য ও সমন্বয় নিয়ন্ত্রণ করে।",
    breakdown: "cerebr- (মস্তিষ্ক) + -ellum (ছোট)",
    example: "সেরিবেলাম পেশির গতিবিধি সমন্বয় করতে সাহায্য করে।"
  },
  {
    word: "brainstem",
    meaning: "মস্তিষ্ক ও মেরুদণ্ডের সংযোগকারী অংশ, শ্বাস-প্রশ্বাস নিয়ন্ত্রণ করে।",
    breakdown: "brain (মস্তিষ্ক) + stem (কাণ্ড)",
    example: "ব্রেনস্টেম হৃদস্পন্দন ও শ্বাস-প্রশ্বাস নিয়ন্ত্রণ করে।"
  },
  {
    word: "frontal lobe",
    meaning: "মস্তিষ্কের সম্মুখভাগ, সিদ্ধান্ত গ্রহণ ও ব্যক্তিত্বের জন্য দায়ী।",
    breakdown: "front- (সামনে) + lobe (বিভাগ)",
    example: "ফ্রন্টাল লোব পরিকল্পনা ও যুক্তিতে জড়িত।"
  },
  {
    word: "parietal lobe",
    meaning: "মস্তিষ্কের উপরের অংশ, স্পর্শ ও চাপ সংবেদনের জন্য দায়ী।",
    breakdown: "pariet- (দেয়াল) + lobe (বিভাগ)",
    example: "প্যারাইটাল লোব সংবেদনশীল তথ্য প্রক্রিয়া করে।"
  },
  {
    word: "temporal lobe",
    meaning: "মস্তিষ্কের পাশের অংশ, শ্রবণ ও স্মৃতির জন্য দায়ী।",
    breakdown: "tempor- (পাশ/সময়) + lobe (বিভাগ)",
    example: "টেম্পোরাল লোব ভাষা বোঝার কাজে সাহায্য করে।"
  },{ word: "occipital lobe",
    meaning: "মস্তিষ্কের পিছনের অংশ, দৃষ্টি প্রক্রিয়াকরণের জন্য দায়ী।",
    breakdown: "occipit- (মাথার পিছন) + lobe (বিভাগ)",
    example: "অক্সিপিটাল লোব দৃশ্য তথ্য প্রক্রিয়া করে।",
  },
  {
    word: "skull",
    meaning: "মাথার হাড়ের কাঠামো, যা মস্তিষ্ককে রক্ষা করে।",
    breakdown: "skull (মাথার খুলি)",
    example: "মাথার খুলি মস্তিষ্ককে আঘাত থেকে রক্ষা করে।"
  },
  {
    word: "cranium",
    meaning: "মাথার খুলির উপরের অংশ, মস্তিষ্কের আবরণ।",
    breakdown: "crani- (মাথার খুলি) + -um (কাঠামো)",
    example: "ক্রেনিয়াম মস্তিষ্ককে নিরাপদে আবৃত করে।"
  },
  {
    word: "mandible",
    meaning: "নিচের চোয়ালের হাড়, দাঁত ধারণ করে।",
    breakdown: "mand- (চিবানো) + -ible (সক্ষম)",
    example: "ম্যান্ডিবল চিবানোর সময় নড়াচড়া করে।"
  },
  {
    word: "maxilla",
    meaning: "উপরের চোয়ালের হাড়, দাঁত ধারণ করে।",
    breakdown: "maxill- (চোয়াল) + -a (কাঠামো)",
    example: "ম্যাক্সিলা উপরের দাঁত সমর্থন করে।"
  },
  {
    word: "sinus",
    meaning: "মুখের হাড়ের ফাঁপা গহ্বর, শ্বাস-প্রশ্বাসে সহায়তা করে।",
    breakdown: "sinus (গহ্বর)",
    example: "সাইনাস ঠান্ডা লাগলে বন্ধ হয়ে যেতে পারে।"
  },
  {
    word: "retina",
    meaning: "চোখের পিছনের স্তর, আলো সংবেদন করে।",
    breakdown: "retin- (জাল) + -a (কাঠামো)",
    example: "রেটিনা আলোকে স্নায়বিক সংকেতে রূপান্তরিত করে।"
  },
  {
    word: "cornea",
    meaning: "চোখের স্বচ্ছ সামনের স্তর, আলো ফোকাস করে।",
    breakdown: "corn- (শিং) + -ea (স্তর)",
    example: "কর্নিয়া আলোকে রেটিনার উপর ফোকাস করতে সাহায্য করে।"
  },
  {
    word: "iris",
    meaning: "চোখের রঙিন অংশ, পিউপিলের আকার নিয়ন্ত্রণ করে।",
    breakdown: "iris (রংধনু)",
    example: "আইরিস উজ্জ্বল আলোতে পিউপিলের আকার সামঞ্জস্য করে।"
  },
  {
    word: "pupil",
    meaning: "চোখের কালো কেন্দ্র, যেখান দিয়ে আলো প্রবেশ করে।",
    breakdown: "pupil (ছোট পুতুল)",
    example: "পিউপিল কম আলোতে প্রসারিত হয়।"
  },
  {
    word: "lens",
    meaning: "চোখের স্বচ্ছ অংশ, আলো ফোকাস করে।",
    breakdown: "lens (মসুর আকৃতির)",
    example: "লেন্স রেটিনার উপর ছবি ফোকাস করতে সাহায্য করে।"
  },
  {
    word: "optic nerve",
    meaning: "চোখ থেকে মস্তিষ্কে দৃষ্টি তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "optic (দৃষ্টি) + nerve (স্নায়ু)",
    example: "অপটিক নার্ভ দৃশ্য সংকেত বহন করে।"
  },
  {
    word: "sclera",
    meaning: "চোখের সাদা বাইরের স্তর, যা চোখকে আকৃতি দেয়।",
    breakdown: "scler- (কঠিন) + -a (কাঠামো)",
    example: "স্ক্লেরা চোখের অভ্যন্তরীণ অংশগুলো রক্ষা করে।"
  },
  {
    word: "cochlea",
    meaning: "কানের অভ্যন্তরীণ অংশ, শব্দ তরঙ্গ সংবেদন করে।",
    breakdown: "cochlea (শামুক আকৃতির)",
    example: "ককলিয়া শব্দ তরঙ্গকে সংকেতে রূপান্তরিত করে।"
  },
  {
    word: "eardrum",
    meaning: "কানের ঝিল্লি, শব্দ কম্পন গ্রহণ করে।",
    breakdown: "ear (কান) + drum (ঢাক)",
    example: "কানের ঝিল্লি শব্দ তরঙ্গে কম্পিত হয়।"
  },
  {
    word: "ossicles",
    meaning: "কানের ক্ষুদ্র হাড়, শব্দ কম্পন পরিবহন করে।",
    breakdown: "oss- (হাড়) + -icle (ছোট)",
    example: "ওসিকলস শব্দ কম্পন বাড়িয়ে দেয়।"
  },
  {
    word: "eustachian tube",
    meaning: "কান ও গলার মধ্যে সংযোগকারী নল, চাপ নিয়ন্ত্রণ করে।",
    breakdown: "Eustachian (শারীরবিদের নামে) + tube (নল)",
    example: "ইউস্টেশিয়ান টিউব কানের চাপ সমান করে।"
  },
  {
    word: "auditory nerve",
    meaning: "কান থেকে মস্তিষ্কে শব্দ তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "audit- (শোনা) + nerve (স্নায়ু)",
    example: "অডিটরি নার্ভ শব্দ সংকেত পাঠায়।"
  },
  {
    word: "nasal cavity",
    meaning: "নাকের অভ্যন্তরীণ গহ্বর, শ্বাস-প্রশ্বাসে সহায়তা করে।",
    breakdown: "nasal (নাক) + cavity (গহ্বর)",
    example: "নাসার গহ্বর ফুসফুসে পৌঁছানোর আগে বাতাস ফিল্টার করে।"
  },
  {
    word: "septum",
    meaning: "নাকের মধ্যবর্তী দেয়াল, নাসারন্ধ্রকে পৃথক করে।",
    breakdown: "sept- (দেয়াল) + -um (কাঠামো)",
    example: "বিকৃত সেপ্টাম শ্বাস-প্রশ্বাসে সমস্যা সৃষ্টি করতে পারে।"
  },
  {
    word: "turbinate",
    meaning: "নাকের অভ্যন্তরে হাড়ের কাঠামো, বাতাস ফিল্টার করে।",
    breakdown: "turbin- (ঘূর্ণায়মান) + -ate (কাঠামো)",
    example: "টারবিনেট শ্বাস নেওয়া বাতাস গরম ও আর্দ্র করে।"
  },
  {
    word: "tongue",
    meaning: "জিহ্বা, স্বাদ গ্রহণ ও কথা বলায় সহায়তা করে।",
    breakdown: "tongue (জিহ্বা)",
    example: "জিহ্বা মিষ্টি বা টকের মতো স্বাদ শনাক্ত করে।"
  },
  {
    word: "salivary gland",
    meaning: "লালা উৎপাদনকারী গ্রন্থি, হজমে সহায়তা করে।",
    breakdown: "saliv- (লালা) + gland (গ্রন্থি)",
    example: "লালাগ্রন্থি হজমে সাহায্য করতে লালা উৎপন্ন করে।"
  },
  {
    word: "palate",
    meaning: "মুখের উপরের অংশ, নরম ও শক্ত অংশ নিয়ে গঠিত।",
    breakdown: "palat- (ছাদ) + -e (কাঠামো)",
    example: "তালু মুখকে নাসার গহ্বর থেকে পৃথক করে।"
  },
  {
    word: "uvula",
    meaning: "মুখের পিছনে ঝুলন্ত মাংসপিণ্ড, গিলতে সহায়তা করে।",
    breakdown: "uvula (ছোট আঙ্গুর)",
    example: "ইউভুলা খাদ্যকে নাসার গহ্বরে প্রবেশ করতে বাধা দেয়।"
  },
  {
    word: "tonsil",
    meaning: "গলার পিছনে লিম্ফয়েড টিস্যু, রোগ প্রতিরোধে সহায়তা করে।",
    breakdown: "tonsil (লিম্ফয়েড টিস্যু)",
    example: "টনসিল গলায় সংক্রমণের বিরুদ্ধে লড়াই করে।"
  },
  {
    word: "pharynx",
    meaning: "গলার অংশ, খাদ্য ও বাতাস পরিবহন করে।",
    breakdown: "pharynx (গলা)",
    example: "ফ্যারিঙ্কস খাদ্যকে খাদ্যনালীতে পাঠায়।"
  },
  {
    word: "larynx",
    meaning: "কণ্ঠনালী, কথা বলার জন্য দায়ী।",
    breakdown: "larynx (কণ্ঠনালী)",
    example: "কণ্ঠনালী কথা বলার জন্য শব্দ উৎপন্ন করে।"
  },
  {
    word: "vocal cords",
    meaning: "কণ্ঠনালীর মধ্যে ঝিল্লি, শব্দ উৎপন্ন করে।",
    breakdown: "vocal (কণ্ঠ) + cords (তন্তু)",
    example: "ভোকাল কর্ড শব্দ উৎপন্ন করতে কম্পিত হয়।"
  },
  {
    word: "thyroid cartilage",
    meaning: "কণ্ঠনালীর হাড়, কণ্ঠনালীকে রক্ষা করে।",
    breakdown: "thyroid (ঢাল) + cartilage (তরুণাস্থি)",
    example: "থাইরয়েড কার্টিলেজ অ্যাডামস অ্যাপল গঠন করে।"
  },
  {
    word: "scalp",
    meaning: "মাথার ত্বক, চুল গজানোর স্থান।",
    breakdown: "scalp (মাথার ত্বক)",
    example: "মাথার ত্বক মাথার খুলি রক্ষা করে এবং চুল সমর্থন করে।"
  },
  {
    word: "hair follicle",
    meaning: "চুলের মূল, যেখান থেকে চুল গজায়।",
    breakdown: "hair (চুল) + follicle (ছোট থলি)",
    example: "চুলের ফলিকল মাথার ত্বকে চুল উৎপন্ন করে।"
  },
  {
    word: "sebaceous gland",
    meaning: "ত্বকের তেল নিঃসরণকারী গ্রন্থি।",
    breakdown: "sebac- (তেল) + gland (গ্রন্থি)",
    example: "সেবেসিয়াস গ্রন্থি মাথার ত্বককে আর্দ্র রাখে।"
  },
  {
    word: "axon",
    meaning: "একটি স্নায়ুকোষের প্রসারিত অংশ যা বিদ্যুৎ সংকেত পরিবহন করে।",
    breakdown: "a- (অক্ষ) + -xon (অঞ্চল)",
    example: "অ্যাক্সন স্নায়ুকোষের দেহ থেকে সংকেত দূরে পাঠায়।"
  },
  {
    word: "dendrite",
    meaning: "স্নায়ুকোষের শাখা যা তথ্য গ্রহণ করে।",
    breakdown: "dendro- (গাছ) + -ite (ছোট অংশ)",
    example: "ডেনড্রাইট স্নায়ুকোষের দেহের দিকে সংকেত বহন করে।"
  },
  {
    word: "enzyme",
    meaning: "একটি জৈব রাসায়নিক যা বিক্রিয়াকে ত্বরান্বিত করে।",
    breakdown: "en- (ভিতরে) + zyme (খামির)",
    example: "এনজাইম হজম প্রক্রিয়ায় খাদ্য ভাঙতে সাহায্য করে।"
  },
  {
    word: "eardrum",
    meaning: "কানের ঝিল্লি, যা শব্দ কম্পন গ্রহণ করে।",
    breakdown: "ear (কান) + drum (ঢাক)",
    example: "কানের ঝিল্লি শব্দ তরঙ্গে কম্পিত হয়।"
  },
  {
    word: "cochlea",
    meaning: "কানের অভ্যন্তরীণ অংশ, যা শব্দ তরঙ্গ সংবেদন করে।",
    breakdown: "cochlea (শামুক আকৃতির)",
    example: "ককলিয়া শব্দ তরঙ্গকে স্নায়বিক সংকেতে রূপান্তর করে।"
  },
  {
    word: "ossicles",
    meaning: "কানের তিনটি ক্ষুদ্র হাড়, যা শব্দ কম্পন পরিবহন করে।",
    breakdown: "oss- (হাড়) + -icle (ছোট)",
    example: "ওসিকলস শব্দ কম্পন বাড়িয়ে দেয়।"
  },
  {
    word: "malleus",
    meaning: "কানের হাড়, যা eardrum থেকে শব্দ পরিবহন করে।",
    breakdown: "malleus (হাতুড়ি)",
    example: "ম্যালিউস eardrum এর কম্পন গ্রহণ করে।"
  },
  {
    word: "incus",
    meaning: "কানের হাড়, যা malleus থেকে শব্দ পরিবহন করে।",
    breakdown: "incus (নখ)",
    example: "ইনকাস শব্দ কম্পন incus থেকে stapes-এ পাঠায়।"
  },
  {
    word: "stapes",
    meaning: "কানের হাড়, যা cochlea-তে শব্দ পরিবহন করে।",
    breakdown: "stapes (খুঁটি)",
    example: "স্টেপেস cochlea-তে কম্পন প্রেরণ করে।"
  },
  {
    word: "eustachianTube",
    meaning: "কান ও গলার মধ্যে সংযোগকারী নল, যা চাপ নিয়ন্ত্রণ করে।",
    breakdown: "Eustachian (শারীরবিদের নামে) + tube (নল)",
    example: "ইউস্টেশিয়ান টিউব কানের চাপ সমান করে।"
  },
  {
    word: "auditoryNerve",
    meaning: "কান থেকে মস্তিষ্কে শব্দ তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "audit- (শোনা) + nerve (স্নায়ু)",
    example: "অডিটরি নার্ভ শব্দ সংকেত মস্তিষ্কে পাঠায়।"
  },
  {
    word: "outerEar",
    meaning: "কানের বাইরের অংশ, যা শব্দ সংগ্রহ করে।",
    breakdown: "outer (বাইরের) + ear (কান)",
    example: "আউটার ইয়ার শব্দকে eardrum-এ পরিচালনা করে।"
  },
  {
    word: "middleEar",
    meaning: "কানের মধ্যবর্তী অংশ, যেখানে ossicles অবস্থিত।",
    breakdown: "middle (মাঝের) + ear (কান)",
    example: "মিডল ইয়ারে শব্দ কম্পন বাড়ে।"
  },
  {
    word: "innerEar",
    meaning: "কানের অভ্যন্তরীণ অংশ, যেখানে cochlea ও ভারসাম্য প্রক্রিয়া হয়।",
    breakdown: "inner (অভ্যন্তরীণ) + ear (কান)",
    example: "ইনার ইয়ার শব্দ ও ভারসাম্য নিয়ন্ত্রণ করে।"
  },
  {
    word: "pinna",
    meaning: "কানের বাইরের কার্টিলেজ, যা শব্দ দিক নির্দেশ করে।",
    breakdown: "pinna (ফ্ল্যাপ)",
    example: "পিনা শব্দকে একত্রিত করে।"
  },
  {
    word: "tympanicMembrane",
    meaning: "eardrum-এর প্রযুক্তিগত নাম, শব্দ কম্পন গ্রহণ করে।",
    breakdown: "tympanic (ঢাকের মতো) + membrane (ঝিল্লি)",
    example: "টিম্পানিক মেমব্রেন শব্দ তরঙ্গ গ্রহণ করে।"
  },
  {
    word: "semicircularCanals",
    meaning: "কানের অংশ, যা ভারসাম্য নিয়ন্ত্রণ করে।",
    breakdown: "semi- (অর্ধেক) + circular (গোলাকার) + canals (নালী)",
    example: "সেমিসারকুলার ক্যানালস মাথার গতি ট্র্যাক করে।"
  },
  {
    word: "vestibularSystem",
    meaning: "কানের অংশ, যা ভারসাম্য ও স্থান চেতনা নিয়ন্ত্রণ করে।",
    breakdown: "vestibular (ভারসাম্য) + system (পদ্ধতি)",
    example: "ভেস্টিবুলার সিস্টেম হাঁটার সময় সাহায্য করে।"
  },
  {
    word: "utricle",
    meaning: "কানের অংশ, যা জোর ও গতি সংবেদন করে।",
    breakdown: "utricle (ছোট থলি)",
    example: "ইউট্রিকল মাথার সরণ টের পায়।"
  },
  {
    word: "saccule",
    meaning: "কানের অংশ, যা উল্লম্ব গতি সংবেদন করে।",
    breakdown: "saccule (ছোট থলি)",
    example: "স্যাকুল উল্লম্ব গতি পরিমাপ করে।"
  },
  {
    word: "otolith",
    meaning: "কানের ক্যালসিয়াম ক্রিস্টাল, যা গতি সংবেদন করে।",
    breakdown: "oto- (কান) + lith (পাথর)",
    example: "ওটোলিথ ভারসাম্যে সাহায্য করে।"
  },
  {
    word: "auditoryCanal",
    meaning: "কানের বাইরে থেকে eardrum-এর মধ্যে সংযোগকারী নালী।",
    breakdown: "auditory (শ্রবণ) + canal (নালী)",
    example: "অডিটরি ক্যানাল শব্দকে eardrum-এ পাঠায়।"
  },
  {
    word: "cerumen",
    meaning: "কানের মোম, যা কানকে সুরক্ষা দেয়।",
    breakdown: "cerumen (কানের মোম)",
    example: "সেরুমেন কানের ভিতরে ধুলো প্রতিরোধ করে।"
  },
  {
    word: "tinnitus",
    meaning: "কানে শব্দ শোনার সমস্যা, যেমন ঝিঁঝি শব্দ।",
    breakdown: "tinnitus (ঝিঁঝি শব্দ)",
    example: "টিনিটাস কানে অপ্রত্যাশিত শব্দ তৈরি করে।"
  },
  {
    word: "hearingLoss",
    meaning: "শ্রবণ ক্ষমতার হ্রাস, যা শব্দ শোনার ক্ষতি করে।",
    breakdown: "hearing (শোনা) + loss (হার)",
    example: "হিয়ারিং লস বয়সের সাথে বাড়তে পারে।"
  },
  {
    word: "otoscope",
    meaning: "যন্ত্র, যা কান পরীক্ষা করে।",
    breakdown: "oto- (কান) + scope (দেখা)",
    example: "ওটোস্কোপে ডাক্তার কানের ভিতর দেখে।"
  },
  {
    word: "audiogram",
    meaning: "শ্রবণ ক্ষমতা পরীক্ষার ফলাফলের চিত্র।",
    breakdown: "audio- (শব্দ) + gram (লেখা)",
    example: "অডিওগ্রাম শ্রবণ ক্ষতির মাত্রা দেখায়।"
  },
  {
    word: "audiologist",
    meaning: "শ্রবণ বিশেষজ্ঞ, যিনি কানের সমস্যা চিকিৎসা করেন।",
    breakdown: "audio- (শব্দ) + logist (বিশেষজ্ঞ)",
    example: "অডিওলজিস্ট শ্রবণ সহায়তা সরবরাহ করেন।"
  },
  {
    word: "earwax",
    meaning: "কানের মোম, যা কানের স্বাস্থ্য রক্ষা করে।",
    breakdown: "ear (কান) + wax (মোম)",
    example: "ইয়ারওয়্যাক্স কানকে পরিষ্কার রাখে।"
  },
  {
    word: "vertigo",
    meaning: "কানের সমস্যা থেকে ঘোরাঘুরি অনুভূতি।",
    breakdown: "vertigo (ঘোর)",
    example: "ভার্টিগো মাথা ঘোরার কারণ হতে পারে।"
  },
  {
    word: "mastoid",
    meaning: "কানের পিছনের হাড়, যা সংক্রমণ হতে পারে।",
    breakdown: "mastoid (স্তনাকৃতি)",
    example: "ম্যাস্টয়েডে সংক্রমণ ব্যথা দিতে পারে।"
  },
  {
    word: "labyrinth",
    meaning: "কানের জটিল গঠন, যা শ্রবণ ও ভারসাম্য নিয়ন্ত্রণ করে।",
    breakdown: "labyrinth (ঘুরঘুটি পথ)",
    example: "ল্যাবিরিন্থ শব্দ ও ভারসাম্য প্রক্রিয়া করে।"
  },
  {
    word: "perilymph",
    meaning: "কানের তরল, যা শব্দ কম্পন পরিবহন করে।",
    breakdown: "peri- (চারপাশে) + lymph (তরল)",
    example: "পেরিলিম্ফ cochlea-তে কম্পন স্থানান্তর করে।"
  },
  {
    word: "endolymph",
    meaning: "কানের অভ্যন্তরীণ তরল, যা ভারসাম্য নিয়ন্ত্রণে সাহায্য করে।",
    breakdown: "endo- (ভিতরে) + lymph (তরল)",
    example: "এন্ডোলিম্ফ ভারসাম্যের জন্য গুরুত্বপূর্ণ।"
  },
  {
    word: "acoustic",
    meaning: "শব্দের সাথে সম্পর্কিত, বিশেষ করে কানে।",
    breakdown: "acoustic (শব্দ)",
    example: "অ্যাকোস্টিক তরঙ্গ শ্রবণে সাহায্য করে।"
  },
  {
    word: "otitis",
    meaning: "কানের সংক্রমণ, যা ব্যথা সৃষ্টি করে।",
    breakdown: "oto- (কান) + -itis (বীমারি)",
    example: "ওটাইটিস শিশুদের মধ্যে সাধারণ।"
  },
  {
    word: "cholesteatoma",
    meaning: "কানে অস্বাভাবিক ত্বক বৃদ্ধি, যা ক্ষতি করতে পারে।",
    breakdown: "chole- (প্রস্ত) + steat- (চর্বি) + -oma (বৃদ্ধি)",
    example: "কোলেস্টিয়াটোমা কানের হাড়ে ক্ষতি করতে পারে।"
  },
  {
    word: "otosclerosis",
    meaning: "কানের হাড়ের অস্বাভাবিক কঠিনতা, যা শ্রবণ কমায়।",
    breakdown: "oto- (কান) + scler- (কঠিন) + -osis (অবস্থা)",
    example: "ওটোস্ক্লেরোসিস শ্রবণ ক্ষতি সৃষ্টি করে।"
  },
  {
    word: "hearingAid",
    meaning: "যন্ত্র, যা শ্রবণ ক্ষতি পূরণ করে।",
    breakdown: "hearing (শোনা) + aid (সাহায্য)",
    example: "হিয়ারিং এড শব্দ বাড়িয়ে দেয়।"
  },
  {
    word: "decibel",
    meaning: "শব্দের তীব্রতা মাপার একক।",
    breakdown: "decibel (শব্দ একক)",
    example: "ডেসিবেল ০ থেকে ১২০ পর্যন্ত পরিমাপ করে।"
  },
  {
    word: "frequency",
    meaning: "শব্দ তরঙ্গের ঘনত্ব, যা পিচ নির্ধারণ করে।",
    breakdown: "frequency (ঘনত্ব)",
    example: "ফ্রিকোয়েন্সি উচ্চ পিচ তৈরি করে।"
  },
  {
    word: "pitch",
    meaning: "শব্দের উচ্চতা বা নিম্নতা।",
    breakdown: "pitch (স্বর)",
    example: "পিচ গানের সুর নির্ধারণ করে।"
  },
  {
    word: "amplitude",
    meaning: "শব্দ তরঙ্গের তীব্রতা, যা ভলিউম নির্ধারণ করে।",
    breakdown: "amplitude (আমানত)",
    example: "অ্যামপ্লিচুড বেশি হলে শব্দ জোরালো হয়।"
  },
  {
    word: "soundWave",
    meaning: "শব্দের তরঙ্গ, যা কানে গ্রহণ করা হয়।",
    breakdown: "sound (শব্দ) + wave (তরঙ্গ)",
    example: "সাউন্ড ওয়েভ কানে শ্রবণ হয়।"
  },
  {
    word: "resonance",
    meaning: "শব্দের প্রতিধ্বনি, যা শ্রবণে প্রভাব ফেলে।",
    breakdown: "resonance (প্রতিধ্বনি)",
    example: "রেজোন্যান্স কানে শব্দ বাড়ায়।"
  },
  {
    word: "earInfection",
    meaning: "কানে সংক্রমণ, যা ব্যথা ও শ্রবণ ক্ষতি করতে পারে।",
    breakdown: "ear (কান) + infection (সংক্রমণ)",
    example: "ইয়ার ইনফেকশন ঔষধে চিকিৎসা করা যায়।"
  },
  {
    word: "perforation",
    meaning: "eardrum-এর ফুটো, যা শ্রবণে সমস্যা সৃষ্টি করে।",
    breakdown: "perforation (ফুটো)",
    example: "পারফরেশন শ্রবণ ক্ষতি ঘটাতে পারে।"
  },
  {
    word: "ototoxicity",
    meaning: "ঔষধ বা রাসায়নিক যা কানের ক্ষতি করে।",
    breakdown: "oto- (কান) + toxicity (বিষাক্ততা)",
    example: "ওটোটক্সিসিটি কানের স্নায়ু নষ্ট করতে পারে।"
  },
  {
    word: "audiometry",
    meaning: "শ্রবণ ক্ষমতা পরীক্ষার পদ্ধতি।",
    breakdown: "audio- (শব্দ) + metry (মাপ)",
    example: "অডিওমেট্রি শ্রবণ পরীক্ষা করে।"
  },
  {
    word: "impedance",
    meaning: "শব্দ তরঙ্গের প্রতিরোধ, যা শ্রবণ প্রভাবিত করে।",
    breakdown: "impedance (প্রতিরোধ)",
    example: "ইম্পিডেন্স শব্দ সংক্রমণে বাধা দেয়।"
  },
  {
    word: "abaxial",
    meaning: "বিশেষ করে পौধার পাতার নিম্নভাগের দিকে অবস্থিত।",
    breakdown: "ab- (দূরে) + axial (অক্ষ)",
    example: "অ্যাব্যাক্সিয়াল পৃষ্ঠে সাধারণত স্টোমাটা থাকে।"
  },
  {
    word: "abductor",
    meaning: "একটি পেশি যা অঙ্গকে কেন্দ্র থেকে দূরে সরায়।",
    breakdown: "ab- (দূরে) + ductor (নিয়ে যাওয়া)",
    example: "অ্যাবডাকটর পেশি হাতকে বাইরে সরায়।"
  },
  {
    word: "abnormal",
    meaning: "স্বাভাবিক থেকে বিচ্যুত অবস্থা।",
    breakdown: "ab- (দূরে) + normal (স্বাভাবিক)",
    example: "অ্যাবনরমাল কোষগুলো রোগের লক্ষণ হতে পারে।"
  },
  {
    word: "absorb",
    meaning: "পরিবেশ থেকে পদার্থ শোষণ করা।",
    breakdown: "ab- (ভিতরে) + sorb (শোষণ)",
    example: "অ্যাবসর্ভ করা হয় কোষ দ্বারা পুষ্টি গ্রহণে।"
  },
  {
    word: "abscission",
    meaning: "পাতা বা ফলের বিচ্ছেদ, যা গাছ থেকে পড়ে।",
    breakdown: "ab- (দূরে) + scission (কাটা)",
    example: "অ্যাবসিশন শরত্কালে ঘটে।"
  },
  {
    word: "absorption",
    meaning: "পদার্থ শোষণের প্রক্রিয়া।",
    breakdown: "ab- (ভিতরে) + sorption (শোষণ)",
    example: "অ্যাবসোর্পশন আহারনালীতে ঘটে।"
  },
  {
    word: "abstinence",
    meaning: "কোনো পদার্থ বা ক্রিয়া থেকে বিরত থাকা।",
    breakdown: "ab- (দূরে) + stinence (থাকা)",
    example: "অ্যাবসটিনেন্স শরীরের জন্য উপকারী হতে পারে।"
  },
  {
    word: "abyssal",
    meaning: "সমুদ্রের গভীরতম অঞ্চলের সাথে সম্পর্কিত।",
    breakdown: "abyss- (গভীর) + -al (সম্পর্কিত)",
    example: "অ্যাবিসাল অঞ্চলে আলো পৌঁছায় না।"
  },
  {
    word: "acantho",
    meaning: "কাঁটা বা কণ্টকের সাথে সম্পর্কিত।",
    breakdown: "acanth- (কাঁটা) + -o (সম্পর্ক)",
    example: "অ্যাকান্থো ফিশের শরীরে কাঁটা থাকে।"
  },
  {
    word: "acclimation",
    meaning: "পরিবেশে অভ্যস্ত হওয়ার প্রক্রিয়া।",
    breakdown: "ac- (প্রতি) + climation (অভ্যাস)",
    example: "অ্যাকলিমেশন উচ্চ অক্সিজেনে সাহায্য করে।"
  },
  {
    word: "accumbens",
    meaning: "মস্তিষ্কের অংশ, যা পুরস্কার নিয়ন্ত্রণ করে।",
    breakdown: "ac- (প্রতি) + cumbens (শায়িত)",
    example: "অ্যাকাম্বেন্স ডোপামিনের সাথে সম্পর্কিত।"
  },
  {
    word: "acellular",
    meaning: "কোষবিহীন অবস্থা।",
    breakdown: "a- (না) + cellular (কোষযুক্ত)",
    example: "অ্যাসেলুলার টিস্যু ব্যাকটিরিয়ায় পাওয়া যায়।"
  },
  {
    word: "acidic",
    meaning: "অম্লযুক্ত বা pH মান কম।",
    breakdown: "acid- (অম্ল) + -ic (সম্পর্কিত)",
    example: "অ্যাসিডিক মাটি কিছু উদ্ভিদের জন্য উপযোগী।"
  },
  {
    word: "acinar",
    meaning: "গ্রন্থির কোষের স্তর, যা স্রাব নিঃসরণ করে।",
    breakdown: "acin- (কোষ) + -ar (সম্পর্কিত)",
    example: "অ্যাসিনার কোষ লালা উৎপন্ন করে।"
  },
  {
    word: "acquired",
    meaning: "পরিবেশ বা অভিজ্ঞতা থেকে প্রাপ্ত।",
    breakdown: "ac- (প্রতি) + quired (লাভ)",
    example: "অ্যাকুয়ারড প্রতিরক্ষা রোগ প্রতিরোধে সাহায্য করে।"
  },
  {
    word: "actin",
    meaning: "পেশির সংকোচনে সাহায্যকারী প্রোটিন।",
    breakdown: "act- (ক্রিয়া) + -in (প্রোটিন)",
    example: "অ্যাকটিন মায়োসিনের সাথে কাজ করে।"
  },
  {
    word: "action",
    meaning: "কোষ বা অঙ্গের কার্যকলাপ।",
    breakdown: "act- (ক্রিয়া) + -ion (প্রক্রিয়া)",
    example: "অ্যাকশন পটাসিয়াম আয়নের মাধ্যমে ঘটে।"
  },
  {
    word: "active",
    meaning: "ক্রিয়াশীল বা গতিশীল অবস্থা।",
    breakdown: "act- (ক্রিয়া) + -ive (সম্পন্ন)",
    example: "অ্যাকটিভ ট্রান্সপোর্ট শক্তি প্রয়োজন করে।"
  },
  {
    word: "adaxial",
    meaning: "পাতার উপরের দিকের অংশ, যা সাধারণত আলোর দিকে।",
    breakdown: "ad- (প্রতি) + axial (অক্ষ)",
    example: "অ্যাড্যাক্সিয়াল পৃষ্ঠে ক্লোরোফিল বেশি থাকে।"
  },
  {
    word: "adductor",
    meaning: "পেশি যা অঙ্গকে কেন্দ্রের দিকে আকর্ষণ করে।",
    breakdown: "ad- (প্রতি) + ductor (নিয়ে যাওয়া)",
    example: "অ্যাডাকটর পেশি হাতকে ভিতরে সরায়।"
  },
  {
    word: "adenine",
    meaning: "ডিএনএ ও আরএনএ-র একটি নাইট্রোজেন বেস।",
    breakdown: "aden- (গ্রন্থি) + -ine (পদার্থ)",
    example: "অ্যাডেনিন থাইমিনের সাথে জোড়া লাগে।"
  },
  {
    word: "adenoma",
    meaning: "গ্রন্থির কোষে সৃষ্ট টিউমার।",
    breakdown: "aden- (গ্রন্থি) + -oma (বৃদ্ধি)",
    example: "অ্যাডিনোমা সাধারণত অ harmless।"
  },
  {
    word: "adipose",
    meaning: "চর্বি সংরক্ষণকারী টিস্যু।",
    breakdown: "adip- (চর্বি) + -ose (পূর্ণ)",
    example: "অ্যাডিপোস টিস্যু শীত থেকে রক্ষা করে।"
  },
  {
    word: "adrenal",
    meaning: "অতিরিক্ত কিডনির উপরে অবস্থিত গ্রন্থি।",
    breakdown: "ad- (প্রতি) + renal (কিডনি)",
    example: "অ্যাড্রিনাল গ্রন্থি হরমোন নিঃসরণ করে।"
  },
  {
    word: "aerobic",
    meaning: "অক্সিজেনের উপস্থিতিতে ঘটে এমন প্রক্রিয়া।",
    breakdown: "aero- (বায়ু) + -bic (জীবন)",
    example: "অ্যারোবিক শ্বাস-প্রশ্বাসে শক্তি তৈরি করে।"
  },
  {
    word: "aesthesia",
    meaning: "সংবেদন বা অনুভূতির ক্ষমতা।",
    breakdown: "aesth- (অনুভূতি) + -ia (অবস্থা)",
    example: "অ্যাস্থেসিয়া ত্বক দ্বারা টের পাওয়া যায়।"
  },
  {
    word: "afferent",
    meaning: "কেন্দ্রের দিকে সংকেত বহনকারী।",
    breakdown: "af- (প্রতি) + ferent (বহন)",
    example: "অ্যাফারেন্ট নার্ভ সংবেদন পাঠায়।"
  },
  {
    word: "agglomeration",
    meaning: "কোষ বা পদার্থের সমাবেশ।",
    breakdown: "ag- (প্রতি) + glomer- (গোলক) + -ation (প্রক্রিয়া)",
    example: "অ্যাগ্লোমারেশন কোষে ঘনীভূত হয়।"
  },
  {
    word: "agonist",
    meaning: "যে পেশি প্রধান ক্রিয়া সম্পাদন করে।",
    breakdown: "ag- (ক্রিয়া) + -ist (কর্তা)",
    example: "অ্যাগোনিস্ট পেশি হাত তুলতে সাহায্য করে।"
  },
  {
    word: "albino",
    meaning: "রঙহীনতা বা পিগমেন্টের অভাব।",
    breakdown: "albin- (সাদা) + -o (অবস্থা)",
    example: "অ্যালবিনো প্রাণীদের চামড়া সাদা হয়।"
  },
  {
    word: "alimentary",
    meaning: "খাদ্যনালী বা পाचনের সাথে সম্পর্কিত।",
    breakdown: "aliment- (খাদ্য) + -ary (সম্পর্কিত)",
    example: "অ্যালিমেন্টারি ক্যানাল খাদ্য পাচন করে।"
  },
  {
    word: "allantois",
    meaning: "ভ্রূণে তরল ভর্তি স্তর, যা শ্বাসে সাহায্য করে।",
    breakdown: "allant- (ডিম্বকোষ) + -ois (স্তর)",
    example: "অ্যালান্টয়িস পাখির ডিমে দেখা যায়।"
  },
  {
    word: "alveolar",
    meaning: "ফুসফুসের ছোট কোষিকা বা দাঁতের সোকেট।",
    breakdown: "alveol- (ছোট গহ্বর) + -ar (সম্পর্কিত)",
    example: "অ্যালভিওলার কোষে অক্সিজেন বিনিময় হয়।"
  },
  {
    word: "amniotic",
    meaning: "ভ্রূণকে আবৃতকারী তরলের সাথে সম্পর্কিত।",
    breakdown: "amni- (ভ্রূণ) + -otic (সম্পর্কিত)",
    example: "অ্যামনিওটিক তরল ভ্রূণকে রক্ষা করে।"
  },
  {
    word: "amphibian",
    meaning: "জল ও স্থল উভয় জীবনযাপনকারী প্রাণী।",
    breakdown: "amphi- (দ্বৈত) + bian (জীবন)",
    example: "অ্যামফিবিয়ান যেমন পঙ্গপাল।"
  },
  {
    word: "anabolic",
    meaning: "শরীরে পদার্থ সংশ্লেষণের প্রক্রিয়া।",
    breakdown: "ana- (উপরে) + bol- (হওয়া) + -ic (সম্পর্কিত)",
    example: "অ্যানাবলিক প্রক্রিয়া মাংস বৃদ্ধি করে।"
  },
  {
    word: "anaerobic",
    meaning: "অক্সিজেনের অভাবে ঘটে এমন প্রক্রিয়া।",
    breakdown: "an- (না) + aero- (বায়ু) + -bic (জীবন)",
    example: "অ্যানায়ারোবিক শ্বাস ব্যাকটিরিয়ায় দেখা যায়।"
  },
  {
    word: "anaphase",
    meaning: "কোষ বিভাজনের একটি পর্যায়, যেখানে ক্রোমোজোম ভাগ হয়।",
    breakdown: "ana- (উপরে) + phase (পর্যায়)",
    example: "অ্যানাফেজে ক্রোমোজোম দুই দিকে চলে যায়।"
  },
  {
    word: "anatomy",
    meaning: "শরীরের গঠনের অধ্যয়ন।",
    breakdown: "ana- (উপরে) + tomy (কাটা)",
    example: "অ্যানাটমি মানুষের হাড় জানতে সাহায্য করে।"
  },
  {
    word: "androgen",
    meaning: "পুরুষ হরমোন, যা লিঙ্গ বৈশিষ্ট্য তৈরি করে।",
    breakdown: "andr- (পুরুষ) + -gen (জন্ম)",
    example: "অ্যানড্রোজেন দাড়ি বৃদ্ধি করে।"
  },
  {
    word: "anemia",
    meaning: "রক্তে হিমোগ্লোবিনের অভাব।",
    breakdown: "an- (না) + emia (রক্ত)",
    example: "অ্যানেমিয়া দুর্বলতা সৃষ্টি করে।"
  },
  {
    word: "angiosperm",
    meaning: "বীজ যা উদ্ভিদের ভিতরে সংরক্ষিত থাকে।",
    breakdown: "angio- (বাহ্য) + sperm (বীজ)",
    example: "অ্যাঞ্জিওস্পার্ম ফুলের উদ্ভিদ।"
  },
  {
    word: "antecedent",
    meaning: "পূর্ববর্তী বা পূর্বপুরুষের সাথে সম্পর্কিত।",
    breakdown: "ante- (পূর্বে) + cedent (যাওয়া)",
    example: "অ্যান্টিসিডেন্ট জিনগুলো উত্তরপুরুষে প্রভাব ফেলে।"
  },
  {
    word: "anterior",
    meaning: "শরীরের সামনের দিকে অবস্থিত।",
    breakdown: "ante- (পূর্বে) + -ior (সম্পর্কিত)",
    example: "অ্যান্টিরিয়র অংশ মুখের দিকে।"
  },
  {
    word: "anthozoan",
    meaning: "সমুদ্রী প্রাণী যেমন প্রবাল।",
    breakdown: "antho- (ফুল) + zoan (প্রাণী)",
    example: "অ্যান্থোজোয়ান প্রবাল প্রাচীর তৈরি করে।"
  },
  {
    word: "antibody",
    meaning: "রোগ প্রতিরোধে সাহায্যকারী প্রোটিন।",
    breakdown: "anti- (বিরুদ্ধে) + body (শরীর)",
    example: "অ্যান্টিবডি ভাইরাস নিষ্ক্রিয় করে।"
  },
  {
    word: "antigen",
    meaning: "প্রতিরক্ষা ব্যবস্থাকে উদ্দীপিত করা পদার্থ।",
    breakdown: "anti- (বিরুদ্ধে) + gen (জন্ম)",
    example: "অ্যান্টিজেন টিকায় ব্যবহৃত হয়।"
  },
  {
    word: "antitoxin",
    meaning: "বিষাক্ত পদার্থ নিষ্ক্রিয়কারী পদার্থ।",
    breakdown: "anti- (বিরুদ্ধে) + toxin (বিষ)",
    example: "অ্যান্টিটক্সিন সাপের বিষ নির্মূল করে।"
  },
  {
    word: "aortic",
    meaning: "হৃৎপিণ্ড থেকে রক্ত বহনকারী প্রধান ধমনীর সাথে সম্পর্কিত।",
    breakdown: "aort- (ধমনী) + -ic (সম্পর্কিত)",
    example: "অ্যাওর্টিক ভাল্ভ রক্ত প্রবাহ নিয়ন্ত্রণ করে।"
  },
  {
    word: "apical",
    meaning: "কোনো অঙ্গের শীর্ষবিন্দুতে অবস্থিত।",
    breakdown: "apex- (শীর্ষ) + -al (সম্পর্কিত)",
    example: "অ্যাপিকাল কোষ উদ্ভিদে বৃদ্ধি ঘটায়।"
  },
  {
    word: "apocrine",
    meaning: "স্রাব নিঃসরণে অংশ বিচ্ছিন্ন করা গ্রন্থি।",
    breakdown: "apo- (দূরে) + crine (স্রাব)",
    example: "অ্যাপোক্রিন গ্রন্থি ঘাম নিঃসরণ করে।"
  },
  {
    word: "appendage",
    meaning: "শরীরের সাথে সংযুক্ত অতিরিক্ত অঙ্গ।",
    breakdown: "append- (সংযুক্ত) + -age (অবস্থা)",
    example: "অ্যাপেনডেজ যেমন হাত বা পা।"
  },
  {
    word: "aquatic",
    meaning: "জলজীবী বা জলের সাথে সম্পর্কিত।",
    breakdown: "aqua- (জল) + -ic (সম্পর্কিত)",
    example: "অ্যাকোয়াটিক উদ্�bhিদ জলে বেঁচে থাকে।"
  },
  {
    word: "arboreal",
    meaning: "গাছের উপর বসবাসকারী।",
    breakdown: "arbor- (গাছ) + -eal (সম্পর্কিত)",
    example: "অ্যার্বোরিয়াল প্রাণী যেমন বানর।"
  },
  {
    word: "archegonium",
    meaning: "উদ্�bhিদে নারী প্রজনন অঙ্গ।",
    breakdown: "arch- (প্রাচীন) + gon- (জন্ম) + -ium (কাঠামো)",
    example: "অ্যারকেগোনিয়াম মসৃণ উদ্�bhিদে পাওয়া যায়।"
  },
  {
    word: "arteriole",
    meaning: "ছোট ধমনী, যা শিরায় রক্ত পাঠায়।",
    breakdown: "arteri- (ধমনী) + -ole (ছোট)",
    example: "অ্যার্টিরিওল রক্তচাপ নিয়ন্ত্রণে সাহায্য করে।"
  },
  {
    word: "arthro",
    meaning: "সন্ধি বা জয়েন্টের সাথে সম্পর্কিত।",
    breakdown: "arthr- (সন্ধি) + -o (সম্পর্ক)",
    example: "অ্যার্থ্রোপডের সন্ধি সঙ্গঠিত।"
  },
  {
    word: "articulate",
    meaning: "সন্ধি বা জয়েন্টে সংযুক্ত।",
    breakdown: "arti- (সন্ধি) + -culate (সংযোগ)",
    example: "অ্যারটিকুলেট হাড় গতি সহজ করে।"
  },
  {
    word: "asexual",
    meaning: "লিঙ্গবিহীন প্রজনন।",
    breakdown: "a- (না) + sexual (লিঙ্গ)",
    example: "অ্যাসেক্সুয়াল প্রজনন কোষ বিভাজনে ঘটে।"
  },
  {
    word: "aspirate",
    meaning: "বায়ু বা তরল শোষণ করা।",
    breakdown: "aspir- (শ্বাস) + -ate (করণ)",
    example: "অ্যাসপিরেট ফুসফুসে বায়ু প্রবেশ করে।"
  },
  {
    word: "assimilation",
    meaning: "পরিবেশ থেকে পুষ্টি শোষণ ও ব্যবহার।",
    breakdown: "as- (প্রতি) + simil- (সম্মিলন) + -ation (প্রক্রিয়া)",
    example: "অ্যাসিমিলেশন উদ্�bhিদে ফটোচিন্থেসিসে ঘটে।"
  },
  {
    word: "atrophy",
    meaning: "অঙ্গের ক্ষয় বা দুর্বলতা।",
    breakdown: "a- (না) + trophy (পুষ্টি)",
    example: "অ্যাট্রফি পেশিতে ব্যায়ামের অভাবে ঘটে।"
  },
  {
    word: "autoimmune",
    meaning: "শরীরের প্রতিরক্ষা ব্যবস্থা নিজের কোষে আক্রমণ করে।",
    breakdown: "auto- (স্ব) + immune (প্রতিরক্ষা)",
    example: "অ্যাটোইমিউন রোগ যেমন রিউমাটয়েড আর্থ্রাইটিস।"
  },
  {
    word: "autonomic",
    meaning: "স্ব-নিয়ন্ত্রিত, যেমন স্নায়ুতন্ত্র।",
    breakdown: "auto- (স্ব) + nomic (নিয়ন্ত্রণ)",
    example: "অ্যাটোনমিক সিস্টেম হৃদস্পন্দন নিয়ন্ত্রণ করে।"
  },
  {
    word: "autotroph",
    meaning: "স্ব-পুষ্টি উৎপাদক প্রাণী।",
    breakdown: "auto- (স্ব) + troph (পুষ্টি)",
    example: "অ্যাটোট্রফ উদ্�bhিদ ফটোচিন্থেসিসে খাদ্য তৈরি করে।"
  },
  {
    word: "axial",
    meaning: "শরীরের প্রধান অক্ষ বা মেরুদণ্ডের সাথে সম্পর্কিত।",
    breakdown: "axis- (অক্ষ) + -al (সম্পর্কিত)",
    example: "অ্যাক্সিয়াল কাঠামো মেরুদণ্ডে দেখা যায়।"
  },
  {
    word: "axillary",
    meaning: "কক্ষভাগ বা হাতের তলার সাথে সম্পর্কিত।",
    breakdown: "axill- (কক্ষ) + -ary (সম্পর্কিত)",
    example: "অ্যাক্সিলারি গ্রন্থি ঘাম নিঃসরণ করে।"
  },
  {
    word: "bacterial",
    meaning: "ব্যাকটিরিয়ার সাথে সম্পর্কিত।",
    breakdown: "bacteri- (ব্যাকটিরিয়া) + -al (সম্পর্কিত)",
    example: "ব্যাকটিরিয়াল সংক্রমণ চিকিৎসা প্রয়োজন।"
  },
  {
    word: "basal",
    meaning: "কোনো গঠনের ভিত্তি বা নিচের অংশ।",
    breakdown: "bas- (ভিত্তি) + -al (সম্পর্কিত)",
    example: "বেসাল স্তরে কোষ জন্মায়।"
  },
  {
    word: "bicarbonate",
    meaning: "রক্তে pH ভারসাম্য রক্ষাকারী পদার্থ।",
    breakdown: "bi- (দ্বৈত) + carbonate (কার্বন যৌগ)",
    example: "বাইকার্বোনেট শ্বাসের মাধ্যমে নিয়ন্ত্রিত হয়।"
  },
  {
    word: "biceps",
    meaning: "দুটি মাথা বিশিষ্ট পেশি।",
    breakdown: "bi- (দুই) + ceps (মাথা)",
    example: "বাইসেপস হাতের উপরের পেশি।"
  },
  {
    word: "bilateral",
    meaning: "দ্বিপাক্ষিক বা দুই পক্ষে সমান।",
    breakdown: "bi- (দুই) + lateral (পক্ষ)",
    example: "বাইল্যাটারাল সিমেট্রি মানুষে দেখা যায়।"
  },
  {
    word: "bile",
    meaning: "যকৃত থেকে নিঃসৃত পিজবিশিষ্ট তরল।",
    breakdown: "bil- (পীত) + -e (পদার্থ)",
    example: "বাইল হজমে সাহায্য করে।"
  },
  {
    word: "binocular",
    meaning: "দুটি চোখ ব্যবহার করে দৃষ্টি।",
    breakdown: "bi- (দুই) + ocular (চোখ)",
    example: "বিনকুলার দৃষ্টি গভীরতা দেখায়।"
  },
  {
    word: "bioaccumulation",
    meaning: "পরিবেশ থেকে পদার্থ সঞ্চয়।",
    breakdown: "bio- (জীব) + accumulation (সঞ্চয়)",
    example: "বায়োকামুলেশন মাছের মাংসে ঘটে।"
  },
  {
    word: "biodegradable",
    meaning: "জৈবিকভাবে ভাঙা যায় এমন।",
    breakdown: "bio- (জীব) + degrad- (ভাঙা) + -able (সম্ভব)",
    example: "বায়োডিগ্রেডেবল প্লাস্টিক পরিবেশবান্ধব।"
  },
  {
    word: "bioluminescence",
    meaning: "জীবনযন্ত্রণার আলোক উৎসরণ।",
    breakdown: "bio- (জীব) + luminescence (আলোক)",
    example: "বায়োলুমিনেসেন্স আগ্নেয়গিরির কাছে দেখা যায়।"
  },
  {
    word: "blastocyst",
    meaning: "ভ্রূণের প্রাথমিক পর্যায়ের কোষিকা।",
    breakdown: "blast- (আদি) + cyst (থলি)",
    example: "ব্লাস্টোসিস্ট গর্ভাবস্থায় গড়ে ওঠে।"
  },
  {
    word: "bronchial",
    meaning: "শ্বাসনালীর সাথে সম্পর্কিত।",
    breakdown: "bronch- (শ্বাসনালী) + -ial (সম্পর্কিত)",
    example: "ব্রঞ্চিয়াল টিউব শ্বাসকে পরিচালনা করে।"
  },
  {
    word: "buccal",
    meaning: "গাল বা মুখের ভিতরের সাথে সম্পর্কিত।",
    breakdown: "bucc- (গাল) + -al (সম্পর্কিত)",
    example: "বাকাল মুখোশ্থ প্রক্রিয়া ঘটে।"
  },
  {
    word: "calcification",
    meaning: "ক্যালসিয়াম জমা হওয়ার প্রক্রিয়া।",
    breakdown: "calc- (ক্যালসিয়াম) + -ification (করণ)",
    example: "ক্যালসিফিকেশন হাড়ে শক্তি দেয়।"
  },
  {
    word: "caloric",
    meaning: "তাপ বা শক্তির সাথে সম্পর্কিত।",
    breakdown: "calor- (তাপ) + -ic (সম্পর্কিত)",
    example: "ক্যালোরিক মান খাদ্যে শক্তি নির্ধারণ করে।"
  },
  {
    word: "canaliculus",
    meaning: "ছোট নালী, যা পদার্থ পরিবহন করে।",
    breakdown: "canal- (নালী) + -iculus (ছোট)",
    example: "ক্যানালিকুলাস হাড়ে রক্ত সরবরাহ করে।"
  },
  {
    word: "capillary",
    meaning: "খুব ছোট রক্তনালী।",
    breakdown: "capill- (চুল) + -ary (সম্পর্কিত)",
    example: "ক্যাপিলারি অক্সিজেন বিনিময়ে সাহায্য করে।"
  },
  {
    word: "carbamino",
    meaning: "কার্বন ডাই অক্সাইডের সাথে সংযুক্ত হেমোগ্লোবিন।",
    breakdown: "carb- (কার্বন) + amino (অ্যামিনো)",
    example: "কার্বামিনো সংযোগ শ্বাসে গুরুত্বপূর্ণ।"
  },
  {
    word: "cardiac",
    meaning: "হৃৎপিণ্ডের সাথে সম্পর্কিত।",
    breakdown: "cardi- (হৃদয়) + -ac (সম্পর্কিত)",
    example: "কার্ডিয়াক মাংসপেশি হৃদস্পন্দন করে।"
  },
  {
    word: "carnivore",
    meaning: "মাংসভোজী প্রাণী।",
    breakdown: "carn- (মাংস) + vore (খাওয়া)",
    example: "কার্নিভোর যেমন সিংহ।"
  },
  {
    word: "cartilage",
    meaning: "নরম হাড় বা শক্ত টিস্যু।",
    breakdown: "cartil- (গ্রাস্তি) + -age (অবস্থা)",
    example: "কার্টিলেজ নাকের গঠনে সাহায্য করে।"
  },
  {
    word: "catabolic",
    meaning: "পদার্থ ভাঙার প্রক্রিয়া।",
    breakdown: "cata- (নিচে) + bol- (হওয়া) + -ic (সম্পর্কিত)",
    example: "ক্যাটাবলিক প্রক্রিয়া শক্তি মুক্ত করে।"
  },
  {
    word: "catalyst",
    meaning: "প্রতিক্রিয়াকে ত্বরান্বিত করা পদার্থ।",
    breakdown: "cata- (নিচে) + lyst (মুক্ত করা)",
    example: "ক্যাটালিস্ট এনজাইম হিসেবে কাজ করে।"
  },
  {
    word: "cation",
    meaning: "ধনাত্মক চার্জযুক্ত আয়ন।",
    breakdown: "cat- (নিচে) + ion (আয়ন)",
    example: "ক্যাটায়ন কোষে চলাচল করে।"
  },
  {
    word: "caudal",
    meaning: "শরীরের পশ্চাৎভাগের দিকে।",
    breakdown: "caud- (পুচ্ছ) + -al (সম্পর্কিত)",
    example: "কডাল অংশ মাছের লেজে।"
  },
  {
    word: "cecum",
    meaning: "আহারনালীর শেষের ছোট পকেট।",
    breakdown: "cec- (বৃত্ত) + -um (কাঠামো)",
    example: "সিসাম খাদ্য পচনের জন্য ব্যবহৃত হয়।"
  },
  {
    word: "cellulase",
    meaning: "সেলুলোজ ভাঙার এনজাইম।",
    breakdown: "cellul- (কোষ) + -ase (এনজাইম)",
    example: "সেলুলেস ব্যাকটিরিয়ায় পাওয়া যায়।"
  },
  {
    word: "centriole",
    meaning: "কোষ বিভাজনে সাহায্যকারী কাঠামো।",
    breakdown: "centr- (কেন্দ্র) + -iole (ছোট)",
    example: "সেন্ট্রিওল মাইটোসিসে গুরুত্বপূর্ণ।"
  },
  {
    word: "cephalic",
    meaning: "মাথার সাথে সম্পর্কিত।",
    breakdown: "cephal- (মাথা) + -ic (সম্পর্কিত)",
    example: "সেফালিক অঞ্চল মস্তিষ্ক ধরে।"
  },
  {
    word: "cerebral",
    meaning: "মস্তিষ্কের সাথে সম্পর্কিত।",
    breakdown: "cerebr- (মস্তিষ্ক) + -al (সম্পর্কিত)",
    example: "সেরিব্রাল কর্টেক্স চিন্তা করে।"
  },
  {
    word: "cervical",
    meaning: "গ্রীবা বা ঘাড়ের সাথে সম্পর্কিত।",
    breakdown: "cervic- (গ্রীবা) + -al (সম্পর্কিত)",
    example: "সার্ভিকাল মেরুদণ্ড সংরক্ষণ করে।"
  },
  {
    word: "chemoreceptor",
    meaning: "রাসায়নিক সংবেদনকারী কোষ।",
    breakdown: "chemo- (রাসায়নিক) + receptor (গ্রাহক)",
    example: "কেমোরিসেপটর গন্ধ টের পায়।"
  },
  {
    word: "chitin",
    meaning: "আঁশযুক্ত প্রাণীর বাহ্যিক কঠিন স্তর।",
    breakdown: "chit- (আঁশ) + -in (পদার্থ)",
    example: "চাইটিন কীটের খোলায় থাকে।"
  },
  {
    word: "chlorophyll",
    meaning: "আলো শোষণকারী সবুজ রঙের পদার্থ।",
    breakdown: "chloro- (সবুজ) + phyll (পত্র)",
    example: "ক্লোরোফিল ফটোচিন্থেসিসে ব্যবহৃত হয়।"
  },
  {
    word: "cholinergic",
    meaning: "এসিটাইলকোলিনের সাথে সম্পর্কিত।",
    breakdown: "cholin- (কোলিন) + -ergic (কার্যকর)",
    example: "কোলিনার্জিক নার্ভ সংক্রমণে কাজ করে।"
  },
  {
    word: "chromatin",
    meaning: "কোষে ডিএনএ ধারণকারী পদার্থ।",
    breakdown: "chrom- (রঙ) + -atin (পদার্থ)",
    example: "ক্রোমাটিন কোষ বিভাজনে গুরুত্বপূর্ণ।"
  },
  {
    word: "chyme",
    meaning: "আংশিক পাচিত খাদ্য।",
    breakdown: "chym- (রস) + -e (পদার্থ)",
    example: "কাইম আহারনালীতে পরিচালিত হয়।"
  },
  {
    word: "ciliary",
    meaning: "পরিচলনকারী কেশ বা চোখের স্তরের সাথে সম্পর্কিত।",
    breakdown: "cilia- (কেশ) + -ary (সম্পর্কিত)",
    example: "সিলিয়ারি গতি কোষে সাহায্য করে।"
  },
  {
    word: "circadian",
    meaning: "২৪ ঘণ্টার জৈবিক চক্র।",
    breakdown: "circa- (আনুমানিক) + dian (দিন)",
    example: "সার্কাডিয়ান রিদম ঘুম নিয়ন্ত্রণ করে।"
  },
  {
    word: "cirrhosis",
    meaning: "যকৃতের কঠিনতা।",
    breakdown: "cirrh- (হলুদ) + -osis (অবস্থা)",
    example: "সির্রোসিস মদ্যপানে ঘটে।"
  },
  {
    word: "clavicle",
    meaning: "কাঁধের হাড়।",
    breakdown: "clav- (কী) + -icle (ছোট)",
    example: "ক্ল্যাভিকল কাঁধের গঠনে সাহায্য করে।"
  },
  {
    word: "cochlear",
    meaning: "কানের cochlea-র সাথে সম্পর্কিত।",
    breakdown: "cochlea- (শামুক) + -ar (সম্পর্কিত)",
    example: "কোক্লিয়ার প্রক্রিয়া শব্দ শোনায়।"
  },
  {
    word: "collagen",
    meaning: "ডিনার টিস্যুকে শক্ত করে দিয়ে পদার্থ।",
    breakdown: "colla- (আঠা) + -gen (জন্ম)",
    example: "কল্যাজেন চামড়ায় পাওয়া যায়।"
  },
  {
    word: "colloid",
    meaning: "দ্রবণে স্থিত পদার্থের মিশ্রণ।",
    breakdown: "col- (আঠা) + -oid (সদৃশ)",
    example: "কলয়েড কোষে পুষ্টি পরিবহন করে।"
  },
  {
    word: "commensal",
    meaning: "একজন প্রাণী অন্যের সাথে সহাবস্থান করে।",
    breakdown: "com- (সাথে) + mensal (টেবিল)",
    example: "কমেন্সাল সম্পর্ক গাছ ও কীটে দেখা যায়।"
  },
  {
    word: "congenital",
    meaning: "জন্মগত বা জন্ম থেকে থাকা।",
    breakdown: "con- (সাথে) + gen- (জন্ম) + -al (সম্পর্কিত)",
    example: "কংজেনিটাল রোগ শিশুতে দেখা যায়।"
  },
  {
    word: "conjugation",
    meaning: "কোষের মধ্যে জিন স্থানান্তর।",
    breakdown: "con- (সাথে) + jug- (যোগ) + -ation (প্রক্রিয়া)",
    example: "কনজুগেশন ব্যাকটিরিয়ায় ঘটে।"
  },
  {
    word: "contractile",
    meaning: "সংকোচনক্ষম বা সংকুচিত হতে পারে এমন।",
    breakdown: "contract- (সংকোচন) + -ile (সম্ভব)",
    example: "কনট্রাকটাইল পেশি গতি সৃষ্টি করে।"
  },
  {
    word: "corneal",
    meaning: "চোখের কর্নিয়ার সাথে সম্পর্কিত।",
    breakdown: "corne- (শিং) + -al (সম্পর্কিত)",
    example: "কর্নিয়াল স্তর আলো ফোকাস করে।"
  },
  {
    word: "coronary",
    meaning: "হৃৎপিণ্ডকে রক্ত সরবরাহকারী ধমনীর সাথে সম্পর্কিত।",
    breakdown: "coron- (মুকুট) + -ary (সম্পর্কিত)",
    example: "কোরোনারি ধমনী ব্লক হলে হৃদরোগ হয়।"
  },
  {
    word: "cortex",
    meaning: "কোনো অঙ্গের বাইরের স্তর।",
    breakdown: "cort- (বর্ক) + -ex (স্তর)",
    example: "কর্টেক্স মস্তিষ্কের চিন্তা কেন্দ্র।"
  },
  {
    word: "costal",
    meaning: "অস্থিরঙ্গ বা পাঁজরের সাথে সম্পর্কিত।",
    breakdown: "cost- (অস্থি) + -al (সম্পর্কিত)",
    example: "কোস্টাল হাড় শ্বাসনালী রক্ষা করে।"
  },
  {
    word: "cranial",
    meaning: "মাথার খুলির সাথে সম্পর্কিত।",
    breakdown: "crani- (খুলি) + -al (সম্পর্কিত)",
    example: "ক্রেনিয়াল নার্ভ মস্তিষ্ক থেকে বেরোয়।"
  },
  {
    word: "cretaceous",
    meaning: "চকের সাথে সম্পর্কিত বা শ্বেতাভ।",
    breakdown: "cret- (চক) + -aceous (সম্পর্কিত)",
    example: "ক্রেটেসাস যুগে ডাইনোসর বেঁচে ছিল।"
  },
  {
    word: "crista",
    meaning: "কোষের মধ্যে ভাঁজযুক্ত কাঠামো।",
    breakdown: "crist- (ভাঁজ) + -a (কাঠামো)",
    example: "ক্রিস্টা মাইটোকন্ড্রিয়ায় শক্তি তৈরি করে।"
  },
  {
    word: "cutaneous",
    meaning: "ত্বকের সাথে সম্পর্কিত।",
    breakdown: "cut- (চামড়া) + -aneous (সম্পর্কিত)",
    example: "কিউটেনিয়াস সংবেদন ত্বকে টের পাওয়া যায়।"
  },
  {
    word: "cyanosis",
    meaning: "রক্তে অক্সিজেন কম থাকায় নীলাভ রঙ।",
    breakdown: "cyano- (নীল) + -osis (অবস্থা)",
    example: "সায়ানোসিস শীতকালে দেখা যায়।"
  },
  {
    word: "cyclosis",
    meaning: "কোষের ভিতরে প্রবাহিত প্রক্রিয়া।",
    breakdown: "cycl- (চক্র) + -osis (প্রক্রিয়া)",
    example: "সাইক্লোসিস কোষে পুষ্টি বহন করে।"
  },
  {
    word: "cyst",
    meaning: "কোষে তরল ভর্তি বেলব",
    breakdown: "cyst- (থলি) + -t (কাঠামো)",
    example: "সিস্ট কোষে অস্বাভাবিক বৃদ্ধি হয়।"
  },
  {
    word: "cytokinesis",
    meaning: "কোষ বিভাজনের শেষ পর্যায়।",
    breakdown: "cyto- (কোষ) + kinesis (ভাগ)",
    example: "সাইটোকাইনেসিস দুটি কোষ তৈরি করে।"
  },
  {
    word: "cytoplasm",
    meaning: "কোষের ভিতরের তরল পদার্থ।",
    breakdown: "cyto- (কোষ) + plasm (আকৃতি)",
    example: "সাইটোপ্লাজমে অঙ্গানু বর্তমান।"
  },
  {
    word: "cytosine",
    meaning: "ডিএনএ-র একটি নাইট্রোজেন বেস।",
    breakdown: "cyto- (কোষ) + -sine (পদার্থ)",
    example: "সাইটোসিন গুয়ানিনের সাথে জোড়া লাগে।"
  },
  {
    word: "deamination",
    meaning: "অ্যামিনো গ্রুপের বিচ্ছেদ।",
    breakdown: "de- (বিচ্ছেদ) + amin- (অ্যামিনো) + -ation (প্রক্রিয়া)",
    example: "ডিএমিনেশন লিভারে ঘটে।"
  },
  {
    word: "decomposition",
    meaning: "জৈবিক পদার্থের ভাঙন।",
    breakdown: "de- (বিচ্ছেদ) + composition (গঠন)",
    example: "ডিকম্পোজিশন মৃত উদ্�bhিদে দেখা যায়।"
  },
  {
    word: "deforestation",
    meaning: "বন উজাড় করা।",
    breakdown: "de- (বিচ্ছেদ) + forest- (বন) + -ation (প্রক্রিয়া)",
    example: "ডিফরেস্টেশন পরিবেশে ক্ষতি করে।"
  },
  {
    word: "dehydration",
    meaning: "জলের অভাব বা অপসারণ।",
    breakdown: "de- (অপসারণ) + hydr- (জল) + -ation (প্রক্রিয়া)",
    example: "ডিহাইড্রেশন শরীরে দুর্বলতা সৃষ্টি করে।"
  },
  {
    word: "denature",
    meaning: "প্রোটিনের গঠন ভাঙা।",
    breakdown: "de- (বিচ্ছেদ) + nature (স্বাভাবিকতা)",
    example: "ডিনেচার প্রোটিন তাপে ঘটে।"
  },
  {
    word: "dendritic",
    meaning: "শাখা যুক্ত বা ডেনড্রাইটের সাথে সম্পর্কিত।",
    breakdown: "dendr- (শাখা) + -itic (সম্পর্কিত)",
    example: "ডেনড্রিটিক কোষ সংকেত গ্রহণ করে।"
  },
  {
    word: "dermis",
    meaning: "ত্বকের মাঝের স্তর।",
    breakdown: "derm- (চামড়া) + -is (স্তর)",
    example: "ডার্মিস ত্বকের শক্তি দেয়।"
  },
  {
    word: "diabetes",
    meaning: "রক্তে চিনির অতিরিক্ততা।",
    breakdown: "dia- (মধ্য দিয়ে) + betes (প্রবাহ)",
    example: "ডায়াবেটিস ইনসুলিনের অভাবে ঘটে।"
  },
  {
    word: "diaphragm",
    meaning: "শ্বাসনালীকে পৃথককারী পেশি।",
    breakdown: "dia- (মধ্য দিয়ে) + phragm (বেড়া)",
    example: "ডায়াফ্রাম শ্বাস নিতে সাহায্য করে।"
  },
  {
    word: "diastole",
    meaning: "হৃৎপিণ্ডের বিস্তার পর্যায়।",
    breakdown: "dia- (মধ্য দিয়ে) + stole (প্রসারণ)",
    example: "ডায়াস্টোল হৃদয়ের বিশ্রাম কাল।"
  },
  {
    word: "dichotomous",
    meaning: "দ্বিভাজিত বা দুই পথে বিভক্ত।",
    breakdown: "dicho- (দ্বৈত) + tom- (কাটা) + -ous (সম্পন্ন)",
    example: "ডিকটমাস উদ্�bhিদ শাখা দুই ভাগে ভাগ হয়।"
  },
  {
    word: "dicotyledon",
    meaning: "দুটি কোটিলিডন বিশিষ্ট উদ্�bhিদ।",
    breakdown: "di- (দুই) + cotyl- (কোটিলিডন) + -edon (পত্র)",
    example: "ডিকোটাইলিডন ফুলের উদ্�bhিদ।"
  },
  {
    word: "diencephalon",
    meaning: "মস্তিষ্কের মধ্যবর্তী অংশ।",
    breakdown: "di- (মধ্যে) + encephal- (মস্তিষ্ক) + -on (কাঠামো)",
    example: "ডায়েনসেফালন থ্যালামাস ধরে।"
  },
  {
    word: "differentiation",
    meaning: "কোষের বিশেষীকরণ প্রক্রিয়া।",
    breakdown: "di- (মধ্যে) + fer- (বহন) + -ation (প্রক্রিয়া)",
    example: "ডিফারেনশিয়েশন কোষের কাজ নির্ধারণ করে।"
  },
  {
    word: "diffusion",
    meaning: "পদার্থের প্রাকৃতিক প্রবাহ।",
    breakdown: "di- (মধ্যে) + fusion (মিশ্রণ)",
    example: "ডিফিউশন কোষে পুষ্টি প্রবেশ করে।"
  },
  {
    word: "digestion",
    meaning: "খাদ্য পাচনের প্রক্রিয়া।",
    breakdown: "di- (মধ্যে) + gest- (বহন) + -ion (প্রক্রিয়া)",
    example: "ডাইজেশন স্টমাকে ঘটে।"
  },
  {
    word: "dipeptide",
    meaning: "দুটি অ্যামিনো অ্যাসিডের সংযোগ।",
    breakdown: "di- (দুই) + peptide (পেপটাইড)",
    example: "ডাইপেপটাইড প্রোটিন ভাঙার পর তৈরি হয়।"
  },
  {
    word: "diploid",
    meaning: "দুটি সেট ক্রোমোজোম বিশিষ্ট।",
    breakdown: "di- (দুই) + ploid (গুণ)",
    example: "ডিপ্লয়েড কোষ মানুষে পাওয়া যায়।"
  },
  {
    word: "disaccharide",
    meaning: "দুটি শর্করার সংযোগ।",
    breakdown: "di- (দুই) + sacchar- (শর্করা) + -ide (যৌগ)",
    example: "ডাইস্যাকারাইড যেমন সুক্রোস।"
  },
  {
    word: "dissection",
    meaning: "শরীরের অঙ্গ ভাগ করার প্রক্রিয়া।",
    breakdown: "dis- (বিচ্ছেদ) + sect- (কাটা) + -ion (প্রক্রিয়া)",
    example: "ডিসেকশন শারীরবৃত্তিতে ব্যবহৃত হয়।"
  },
  {
    word: "distal",
    meaning: "কেন্দ্র থেকে দূরে অবস্থিত।",
    breakdown: "dist- (দূর) + -al (সম্পর্কিত)",
    example: "ডিস্টাল অংশ হাতের আঙ্গুলে।"
  },
  {
    word: "dorsal",
    meaning: "শরীরের পৃষ্ঠভাগে অবস্থিত।",
    breakdown: "dors- (পৃষ্ঠ) + -al (সম্পর্কিত)",
    example: "ডোর্সাল ফিন মাছের পিঠে।"
  },
  {
    word: "duodenum",
    meaning: "আহারনালীর প্রথম অংশ।",
    breakdown: "duo- (দুই) + denum (দশ)",
    example: "ডিউডেনাম খাদ্য পাচন করে।"
  },
  {
    word: "ectoderm",
    meaning: "ভ্রূণের বাইরের স্তর।",
    breakdown: "ecto- (বাইরে) + derm (চামড়া)",
    example: "এক্টোডার্ম চামড়া তৈরি করে।"
  },
  {
    word: "ectoparasite",
    meaning: "বাইরে থেকে জীবের উপর জীবিকা করা পরজীবী।",
    breakdown: "ecto- (বাইরে) + para- (পাশে) + site (খাওয়া)",
    example: "এক্টোপ্যারাসাইট যেমন মশা।"
  },
  {
    word: "ectotherm",
    meaning: "বাইরের তাপ নিয়ন্ত্রিত প্রাণী।",
    breakdown: "ecto- (বাইরে) + therm (তাপ)",
    example: "এক্টোথার্ম যেমন সাপ।"
  },
  {
    word: "edema",
    meaning: "শরীরে অতিরিক্ত তরল সঞ্চয়।",
    breakdown: "ed- (পানি) + -ema (সঞ্চয়)",
    example: "এডিমা পায়ে ফোলা সৃষ্টি করে।"
  },
  {
    word: "effector",
    meaning: "প্রতিক্রিয়া সৃষ্টিকারী অঙ্গ।",
    breakdown: "ef- (বাহির) + fector (করণ)",
    example: "ইফেক্টর পেশি হিসেবে কাজ করে।"
  },
  {
    word: "efferent",
    meaning: "কেন্দ্র থেকে বাহিরে সংকেত বহনকারী।",
    breakdown: "ef- (বাহির) + ferent (বহন)",
    example: "ইফারেন্ট নার্ভ সংকেত পাঠায়।"
  },
  {
    word: "ejaculation",
    meaning: "শুক্রাণু নিঃসরণ।",
    breakdown: "e- (বাহির) + jacul- (ফেলা) + -ation (প্রক্রিয়া)",
    example: "ইজাকুলেশন প্রজননে গুরুত্বপূর্ণ।"
  },
  {
    word: "elastin",
    meaning: "ত্বকের লবণাকার প্রোটিন।",
    breakdown: "elast- (লবণাকার) + -in (প্রোটিন)",
    example: "ইলাস্টিন চামড়াকে নমনীয় করে।"
  },
  {
    word: "electrocardiogram",
    meaning: "হৃৎপিণ্ডের বিদ্যুৎ ক্রিয়া রেকর্ড।",
    breakdown: "electro- (বিদ্যুৎ) + cardio- (হৃদয়) + gram (লেখা)",
    example: "ইলেক্ট্রোকার্ডিওগ্রাম হৃদয় পরীক্ষায় ব্যবহৃত।"
  },
  {
    word: "electrolyte",
    meaning: "বিদ্যুৎ পরিবাহী পদার্থ।",
    breakdown: "electro- (বিদ্যুৎ) + lyte (পরিবাহী)",
    example: "ইলেক্ট্রোলাইট রক্তে সামঞ্জস্য করে।"
  },
  {
    word: "embolism",
    meaning: "রক্তনালীতে রক্ত সঞ্চয়।",
    breakdown: "em- (ভিতরে) + bol- (ফেলা) + -ism (অবস্থা)",
    example: "এম্বোলিজম হৃদয়ে বাধা সৃষ্টি করে।"
  },
  {
    word: "emulsion",
    meaning: "দুটি তরলের মিশ্রণ।",
    breakdown: "em- (ভিতরে) + ulsion (মিশ্রণ)",
    example: "এমালশন দুধে দেখা যায়।"
  },
  {
    word: "encephalitis",
    meaning: "মস্তিষ্কের সংক্রমণ।",
    breakdown: "encephal- (মস্তিষ্ক) + -itis (বীমারি)",
    example: "এনসেফালাইটিস জ্বর সৃষ্টি করে।"
  },
  {
    word: "endemic",
    meaning: "নির্দিষ্ট এলাকায় সীমাবদ্ধ রোগ।",
    breakdown: "en- (ভিতরে) + dem- (লোক) + -ic (সম্পর্কিত)",
    example: "এন্ডেমিক রোগ গ্রামে দেখা যায়।"
  },
  {
    word: "endocrine",
    meaning: "সরাসরি রক্তে হরমোন নিঃসরণকারী গ্রন্থি।",
    breakdown: "endo- (ভিতরে) + crine (স্রাব)",
    example: "এন্ডোক্রাইন গ্রন্থি ডায়াবেটিস নিয়ন্ত্রণ করে।"
  },
  {
    word: "endocytosis",
    meaning: "কোষের ভিতরে পদার্থ গ্রহণ।",
    breakdown: "endo- (ভিতরে) + cyt- (কোষ) + -osis (প্রক্রিয়া)",
    example: "এন্ডোসাইটোসিস পুষ্টি গ্রহণে সাহায্য করে।"
  },
  {
    word: "endometrium",
    meaning: "গর্ভাশয়ের ভিতরের স্তর।",
    breakdown: "endo- (ভিতরে) + metr- (মাতৃ) + -ium (কাঠামো)",
    example: "এন্ডোমেট্রিয়াম গর্ভধারণে গুরুত্বপূর্ণ।"
  },
  {
    word: "endoplasmic",
    meaning: "কোষের ভিতরের প্লাজমার সাথে সম্পর্কিত।",
    breakdown: "endo- (ভিতরে) + plasm- (আকৃতি) + -ic (সম্পর্কিত)",
    example: "এন্ডোপ্লাজমিক রিকুলাম প্রোটিন তৈরি করে।"
  },
  {
    word: "endoskeleton",
    meaning: "শরীরের ভিতরের হাড়ের কাঠামো।",
    breakdown: "endo- (ভিতরে) + skeleton (হাড়)",
    example: "এন্ডোস্কেলিটন মানুষে পাওয়া যায়।"
  },
  {
    word: "endospore",
    meaning: "কোষের ভিতরে তৈরি সংরক্ষণ কোষ।",
    breakdown: "endo- (ভিতরে) + spore (বীজ)",
    example: "এন্ডোস্পোর ব্যাকটিরিয়া বাঁচায়।"
  },
  {
    word: "endothelium",
    meaning: "রক্তনালীর ভিতরের স্তর।",
    breakdown: "endo- (ভিতরে) + thel- (নরম) + -ium (কাঠামো)",
    example: "এন্ডোথেলিয়াম রক্ত প্রবাহ সহজ করে।"
  },
  {
    word: "energy",
    meaning: "কোষের কার্যকলাপে ব্যবহৃত শক্তি।",
    breakdown: "en- (ভিতরে) + erg- (কাজ) + -y (অবস্থা)",
    example: "এনার্জি এটিপি থেকে আসে।"
  },
  {
    word: "enteric",
    meaning: "আহারনালীর সাথে সম্পর্কিত।",
    breakdown: "enter- (আহার) + -ic (সম্পর্কিত)",
    example: "এন্টেরিক ব্যাকটিরিয়া খাদ্যে থাকে।"
  },
  {
    word: "enzyme",
    meaning: "বিক্রিয়াকে ত্বরান্বিতকারী জৈবিক উৎকর্ষ।",
    breakdown: "en- (ভিতরে) + zyme (খামির)",
    example: "এনজাইম হজমে সাহায্য করে।"
  },
  {
    word: "eosinophil",
    meaning: "রক্তে ইওসিন ধরে নেওয়া কোষ।",
    breakdown: "eo- (সকাল) + sin- (লাল) + -phil (প্রেম)",
    example: "ইওসিনোফিল এলার্জিতে কাজ করে।"
  },
  {
    word: "ephemeral",
    meaning: "ক্ষণস্থায়ী জীবনযাপন।",
    breakdown: "epi- (উপরে) + hem- (দিন) + -al (সম্পর্কিত)",
    example: "এফিমারাল উদ্�bhিদ শীতকালে ফোটে।"
  },
  {
    word: "epicarp",
    meaning: "ফলের বাইরের স্তর।",
    breakdown: "epi- (উপরে) + carp (ফল)",
    example: "এপিকার্প ফলের রক্ষা করে।"
  },
  {
    word: "epidemic",
    meaning: "বিস্তৃত এলাকায় ছড়িয়ে পড়া রোগ।",
    breakdown: "epi- (উপরে) + dem- (লোক) + -ic (সম্পর্কিত)",
    example: "এপিডেমিক যেমন ফ্লু।"
  },
  {
    word: "epidermis",
    meaning: "ত্বকের বাইরের স্তর।",
    breakdown: "epi- (উপরে) + derm- (চামড়া) + -is (স্তর)",
    example: "এপিডার্মিস রক্ষা করে।"
  },
  {
    word: "epiglottis",
    meaning: "শ্বাসনালীকে খাদ্য থেকে পৃথককারী ঝিল্লি।",
    breakdown: "epi- (উপরে) + glott- (গলা) + -is (কাঠামো)",
    example: "এপিগ্লটিস গিলতে সাহায্য করে।"
  },
  {
    word: "epinephrine",
    meaning: "অ্যাড্রিনালিন হরমোন।",
    breakdown: "epi- (উপরে) + nephr- (কিডনি) + -ine (পদার্থ)",
    example: "এপিনেফ্রিন ভয়ে নিঃসরণ হয়।"
  },
  {
    word: "epiphysis",
    meaning: "হাড়ের শেষ প্রান্ত।",
    breakdown: "epi- (উপরে) + physis (বৃদ্ধি)",
    example: "এপিফিসিস হাড়ের দৈর্ঘ্য বাড়ায়।"
  },
  {
    word: "epithelium",
    meaning: "অঙ্গের বাইরের কোষ স্তর।",
    breakdown: "epi- (উপরে) + thel- (নরম) + -ium (কাঠামো)",
    example: "এপিথেলিয়াম ত্বকে থাকে।"
  },
  {
    word: "erythrocyte",
    meaning: "লাল রক্ত কোষ।",
    breakdown: "erythr- (লাল) + cyte (কোষ)",
    example: "এরিথ্রোসাইট অক্সিজেন বহন করে।"
  },
  {
    word: "esophagus",
    meaning: "খাদ্যকে পেটে নিয়ে যায় এমন নালী।",
    breakdown: "eso- (ভিতরে) + phag- (খাওয়া) + -us (কাঠামো)",
    example: "এসোফাগাস গিলতে সাহায্য করে।"
  },
  {
    word: "estrogen",
    meaning: "নারী হরমোন যা লিঙ্গ বৈশিষ্ট্য তৈরি করে।",
    breakdown: "estr- (উত্স) + -gen (জন্ম)",
    example: "এস্ট্রোজেন গর্ভাবস্থায় গুরুত্বপূর্ণ।"
  },
  {
    word: "eukaryote",
    meaning: "নিউক্লিয়াস বিশিষ্ট কোষ।",
    breakdown: "eu- (ভালো) + kary- (নিউক্লিয়াস) + -ote (জীব)",
    example: "ইউক্যারিওট কোষ মানুষে পাওয়া যায়।"
  },
  {
    word: "euphoria",
    meaning: "উচ্চ সুখ বা উত্তেজনা।",
    breakdown: "eu- (ভালো) + phor- (বহন)",
    example: "ইউফোরিয়া ডোপামিনের কারণে ঘটে।"
  },
  {
    word: "evolution",
    meaning: "জীবের ধীর গতিতে পরিবর্তন।",
    breakdown: "e- (বাহির) + vol- (গড়া) + -tion (প্রক্রিয়া)",
    example: "ইভোলিউশন প্রজাতি সৃষ্টি করে।"
  },
  {
    word: "excretion",
    meaning: "কচ্ছপ বা অপশিষ্ট পদার্থ নিঃসরণ।",
    breakdown: "ex- (বাহির) + cret- (পৃথক) + -ion (প্রক্রিয়া)",
    example: "এক্সক্রেশন কিডনি দ্বারা ঘটে।"
  },
  {
    word: "exocrine",
    meaning: "বাহিরে স্রাব নিঃসরণকারী গ্রন্থি।",
    breakdown: "exo- (বাহির) + crine (স্রাব)",
    example: "এক্সোক্রাইন গ্রন্থি লালা নিঃসরণ করে।"
  },
  {
    word: "exocytosis",
    meaning: "কোষ থেকে পদার্থ নিঃসরণ।",
    breakdown: "exo- (বাহির) + cyt- (কোষ) + -osis (প্রক্রিয়া)",
    example: "এক্সোসাইটোসিস হরমোন নিঃসরণে সাহায্য করে।"
  },
  {
    word: "exoskeleton",
    meaning: "শরীরের বাইরের হাড়ের কাঠামো।",
    breakdown: "exo- (বাহির) + skeleton (হাড়)",
    example: "এক্সোস্কেলিটন কীটে থাকে।"
  },
  {
    word: "expiration",
    meaning: "শ্বাস ফেলার প্রক্রিয়া।",
    breakdown: "ex- (বাহির) + spir- (শ্বাস) + -ation (প্রক্রিয়া)",
    example: "এক্সপায়ারেশন ফুসফুসে ঘটে।"
  },
  {
    word: "extensor",
    meaning: "পেশি যা অঙ্গকে প্রসারিত করে।",
    breakdown: "ex- (বাহির) + tensor (প্রসারণ)",
    example: "এক্সটেনসর পায়ের প্রসারণে সাহায্য করে।"
  },
  {
    word: "extracellular",
    meaning: "কোষের বাইরে অবস্থিত।",
    breakdown: "extra- (বাইরে) + cellular (কোষযুক্ত)",
    example: "এক্সট্রাসেলুলার তরল রক্তে থাকে।"
  },
  {
    word: "facilitation",
    meaning: "ক্রিয়াকে সহজ করা।",
    breakdown: "facil- (সহজ) + -ation (প্রক্রিয়া)",
    example: "ফ্যাসিলিটেশন নার্ভ সংক্রমণে সাহায্য করে।"
  },
  {
    word: "fascia",
    meaning: "মাংসপেশির স্তর।",
    breakdown: "fasc- (বন্ধন) + -ia (কাঠামো)",
    example: "ফ্যাসিয়া পেশিকে সমর্থন দেয়।"
  },
  {
    word: "fermentation",
    meaning: "অক্সিজেনবিহীন শক্তি উৎপাদন।",
    breakdown: "ferment- (কর্ষণ) + -ation (প্রক্রিয়া)",
    example: "ফার্মেন্টেশন দই তৈরিতে ব্যবহৃত হয়।"
  },
  {
    word: "fibrin",
    meaning: "রক্ত জমাট বাঁধার প্রোটিন।",
    breakdown: "fibr- (ফাইবার) + -in (প্রোটিন)",
    example: "ফাইব্রিন কাটা জায়গায় জমে।"
  },
  {
    word: "filament",
    meaning: "লম্বা পাতলা কাঠামো।",
    breakdown: "fil- (ধাগা) + -ament (কাঠামো)",
    example: "ফিলামেন্ট ফুলের মধ্যে থাকে।"
  },
  {
    word: "flagellum",
    meaning: "কোষের গতি সহায়ক চাবুকাকৃতি।",
    breakdown: "flagell- (চাবুক) + -um (কাঠামো)",
    example: "ফ্ল্যাজেলাম ব্যাকটিরিয়ায় পাওয়া যায়।"
  },
  {
    word: "flexor",
    meaning: "পেশি যা অঙ্গকে বাঁকায়।",
    breakdown: "flex- (বাঁকা) + -or (কর্তা)",
    example: "ফ্লেক্সর হাত বাঁকাতে সাহায্য করে।"
  },
  {
    word: "flora",
    meaning: "নির্দিষ্ট এলাকার উদ্�bhিদ সমষ্টি।",
    breakdown: "flor- (ফুল) + -a (সমষ্টি)",
    example: "ফ্লোরা বনের উদ্�bhিদ।"
  },
  {
    word: "follicle",
    meaning: "চুল বা ডিম্বাণু ধারণকারী কোষিকা।",
    breakdown: "foll- (থলি) + -icle (ছোট)",
    example: "ফলিকল চুলের বৃদ্ধিতে সাহায্য করে।"
  },
  {
    word: "foramen",
    meaning: "হাড়ে ছিদ্র।",
    breakdown: "for- (ছিদ্র) + -amen (কাঠামো)",
    example: "ফোরামেন নার্ভ পাঠায়।"
  },
  {
    word: "fossa",
    meaning: "হাড়ে গভীর গর্ত।",
    breakdown: "foss- (খানা) + -a (কাঠামো)",
    example: "ফোসা মস্তিষ্কের ভিতরে থাকে।"
  },
  {
    word: "frond",
    meaning: "উদ্�bhিদের পত্রের শাখা।",
    breakdown: "frond- (পত্র) + -d (কাঠামো)",
    example: "ফ্রন্ড পার্ণমূল উদ্�bhিদে থাকে।"
  },
  {
    word: "fungus",
    meaning: "একধরনের জীব যা মাটিতে বৃদ্ধি পায়।",
    breakdown: "fung- (গুঁড়ো) + -us (কাঠামো)",
    example: "ফাংগাস মাশরুম হিসেবে পরিচিত।"
  },
  {
    word: "gamete",
    meaning: "প্রজননকারী কোষ।",
    breakdown: "gam- (বিয়ে) + -ete (কোষ)",
    example: "গ্যামিট শুক্রাণু ও ডিম্বাণু।"
  },
  {
    word: "ganglion",
    meaning: "স্নায়ু কোষের সমষ্টি।",
    breakdown: "gangli- (গ্রন্থি) + -on (কাঠামো)",
    example: "গ্যাংলিয়ন মস্তিষ্কে থাকে।"
  },
  {
    word: "gastric",
    meaning: "পেটের সাথে সম্পর্কিত।",
    breakdown: "gastr- (পেট) + -ic (সম্পর্কিত)",
    example: "গ্যাস্ট্রিক অ্যাসিড হজমে সাহায্য করে।"
  },
  {
    word: "gene",
    meaning: "জিনগত তথ্য ধারণকারী ইউনিট।",
    breakdown: "gen- (জন্ম) + -e (একক)",
    example: "জিন চোখের রঙ নির্ধারণ করে।"
  },
  {
    word: "genotype",
    meaning: "জিনের বৈশিষ্ট্য।",
    breakdown: "geno- (জিন) + -type (ধরন)",
    example: "জিনোটাইপ ডিএনএ-তে থাকে।"
  },
  {
    word: "germinate",
    meaning: "বীজ থেকে উদ্�bhিদ তৈরি।",
    breakdown: "germ- (আদি) + -inate (করণ)",
    example: "জার্মিনেট শীতের পরে ঘটে।"
  },
  {
    word: "gestation",
    meaning: "গর্ভাবস্থা।",
    breakdown: "gest- (বহন) + -ation (প্রক্রিয়া)",
    example: "জেস্টেশন মানুষে ৯ মাস।"
  },
  {
    word: "gland",
    meaning: "স্রাব নিঃসরণকারী অঙ্গ।",
    breakdown: "gland- (আঠা) + -d (কাঠামো)",
    example: "গ্ল্যান্ড হরমোন তৈরি করে।"
  },
  {
    word: "glial",
    meaning: "স্নায়ু কোষকে সমর্থনকারী কোষ।",
    breakdown: "glia- (গ্লু) + -al (সম্পর্কিত)",
    example: "গ্লিয়াল কোষ মস্তিষ্কে থাকে।"
  },
  {
    word: "glomerulus",
    meaning: "কিডনির ছোট গোলাকার কাঠামো।",
    breakdown: "glomer- (গোলক) + -ulus (ছোট)",
    example: "গ্লোমেরুলাস রক্ত পরিশোধ করে।"
  },
  {
    word: "glucagon",
    meaning: "রক্তে চিনি বাড়ায় এমন হরমোন।",
    breakdown: "gluc- (শর্করা) + -agon (উৎসাহ)",
    example: "গ্লুকাগন ডায়াবেটিসে ব্যবহৃত হয়।"
  },
  {
    word: "glucose",
    meaning: "সরল শর্করা।",
    breakdown: "gluc- (শর্করা) + -ose (পদার্থ)",
    example: "গ্লুকোজ শক্তি উৎপাদনে ব্যবহৃত হয়।"
  },
  {
    word: "glycogen",
    meaning: "চিনির সঞ্চয়কারী পলিস্যাকারাইড।",
    breakdown: "glyco- (শর্করা) + -gen (জন্ম)",
    example: "গ্লাইকোজেন যকৃতে জমে।"
  },
  {
    word: "glycolysis",
    meaning: "শর্করার ভাঙন প্রক্রিয়া।",
    breakdown: "glyco- (শর্করা) + lysis (ভাঙা)",
    example: "গ্লাইকোলিসিস শক্তি তৈরি করে।"
  },
  {
    word: "gonad",
    meaning: "প্রজনন গ্রন্থি।",
    breakdown: "gon- (জন্ম) + -ad (কাঠামো)",
    example: "গোনাড টেস্টিস ও ডিম্বাশয়।"
  },
  {
    word: "granule",
    meaning: "ছোট কণিকা।",
    breakdown: "gran- (কণা) + -ule (ছোট)",
    example: "গ্র্যানুল সেলে থাকে।"
  },
  {
    word: "gravitropism",
    meaning: "গুরুত্বাকর্ষণের প্রতি উদ্�bhিদের প্রতিক্রিয়া।",
    breakdown: "gravi- (গুরুত্ব) + trop- (প্রতিক্রিয়া) + -ism (অবস্থা)",
    example: "গ্র্যাভিট্রোপিজম শিকড় নিচে যায়।"
  },
  {
    word: "gustatory",
    meaning: "স্বাদ সংবেদনের সাথে সম্পর্কিত।",
    breakdown: "gust- (স্বাদ) + -atory (সম্পর্কিত)",
    example: "গাস্টেটরি কোষ জিভে থাকে।"
  },
  {
    word: "gymnosperm",
    meaning: "উন্মুক্ত বীজ বিশিষ্ট উদ্�bhিদ।",
    breakdown: "gymno- (নগ্ন) + sperm (বীজ)",
    example: "জিমনোস্পার্ম যেমন পাইন।"
  },
  {
    word: "haemoglobin",
    meaning: "রক্তে অক্সিজেন বহনকারী প্রোটিন।",
    breakdown: "haemo- (রক্ত) + globin (গোলক)",
    example: "হিমোগ্লোবিন লাল রক্ত কোষে থাকে।"
  },
  {
    word: "haploid",
    meaning: "একটি সেট ক্রোমোজোম বিশিষ্ট।",
    breakdown: "haplo- (এক) + -oid (ধরন)",
    example: "হ্যাপ্লয়েড কোষ গ্যামিটে থাকে।"
  },
  {
    word: "helicase",
    meaning: "ডিএনএ উন্মোচনকারী এনজাইম।",
    breakdown: "heli- (চক্র) + -ase (এনজাইম)",
    example: "হেলিকেস জিন প্রতিলিপি তৈরিতে সাহায্য করে।"
  },
  {
    word: "hematoma",
    meaning: "রক্ত সঞ্চয়কারী ফোলা।",
    breakdown: "hema- (রক্ত) + -oma (বৃদ্ধি)",
    example: "হিমাটোমা আঘাতে দেখা যায়।"
  },
  {
    word: "hemiplegia",
    meaning: "শরীরের অর্ধেক অঙ্গের পক্ষাঘাত।",
    breakdown: "hemi- (অর্ধেক) + plegia (পক্ষাঘাত)",
    example: "হেমিপ্লেজিয়া মস্তিষ্কের ক্ষতিতে ঘটে।"
  },
  {
    word: "hemoglobin",
    meaning: "রক্তে অক্সিজেন বহনকারী প্রোটিন।",
    breakdown: "hemo- (রক্ত) + globin (গোলক)",
    example: "হিমোগ্লোবিন লাল রক্ত কোষে থাকে।"
  },
  {
    word: "hepatic",
    meaning: "যকৃতের সাথে সম্পর্কিত।",
    breakdown: "hepat- (যকৃত) + -ic (সম্পর্কিত)",
    example: "হেপাটিক কোষ হজমে সাহায্য করে।"
  },
  {
    word: "herbivore",
    meaning: "গাছপত্রভোজী প্রাণী।",
    breakdown: "herbi- (গাছ) + vore (খাওয়া)",
    example: "হার্বিভোর যেমন গরু।"
  },
  {
    word: "heterotroph",
    meaning: "অন্য উৎস থেকে পুষ্টি গ্রহণকারী জীব।",
    breakdown: "hetero- (অন্য) + troph (পুষ্টি)",
    example: "হেটেরোট্রফ মানুষ।"
  },
  {
    word: "histamine",
    meaning: "এলার্জির কারণকারী রাসায়নিক।",
    breakdown: "hist- (টিস্যু) + -amine (অ্যামিনো)",
    example: "হিস্টামিন ছাইফোঁড়ায় বেড়ে যায়।"
  },
  {
    word: "homeostasis",
    meaning: "শরীরের ভিতরের সামঞ্জস্য।",
    breakdown: "homeo- (সমান) + stasis (থাকা)",
    example: "হোমিওস্টেসিস তাপ নিয়ন্ত্রণ করে।"
  },
  {
    word: "homologous",
    meaning: "সমরূপ বা সাধারণ উৎস থেকে আগত।",
    breakdown: "homo- (সম) + log- (শব্দ) + -ous (সম্পন্ন)",
    example: "হোমোলগাস অঙ্গ মানুষ ও বানরে দেখা যায়।"
  },
  {
    word: "hormone",
    meaning: "শরীরে রাসায়নিক সংকেতকারী পদার্থ।",
    breakdown: "horm- (উত্তেজনা) + -one (পদার্থ)",
    example: "হরমোন বৃদ্ধিতে সাহায্য করে।"
  },
  {
    word: "humoral",
    meaning: "রক্তপ্রবাহে প্রতিরক্ষা।",
    breakdown: "humor- (তরল) + -al (সম্পর্কিত)",
    example: "হিউমোরাল প্রতিরক্ষা এন্টিবডি দ্বারা।"
  },
  {
    word: "hybrid",
    meaning: "দুটি প্রজাতির সংমিশ্রণ।",
    breakdown: "hybr- (মিশ্র) + -id (অবস্থা)",
    example: "হাইব্রিড উদ্�bhিদ শক্তিশালী হয়।"
  },
  {
    word: "hydrolysis",
    meaning: "জলের মাধ্যমে ভাঙন।",
    breakdown: "hydro- (জল) + lysis (ভাঙা)",
    example: "হাইড্রোলিসিস হজমে ঘটে।"
  },
  {
    word: "hyperplasia",
    meaning: "কোষ সংখ্যা বৃদ্ধি।",
    breakdown: "hyper- (বেশি) + plas- (আকৃতি) + -ia (অবস্থা)",
    example: "হাইপারপ্লেসিয়া টিউমারে ঘটে।"
  },
  {
    word: "hypertension",
    meaning: "রক্তচাপের বৃদ্ধি।",
    breakdown: "hyper- (বেশি) + tens- (চাপ) + -ion (অবস্থা)",
    example: "হাইপারটেনশন হৃদয়ে ক্ষতি করে।"
  },
  {
    word: "hypodermis",
    meaning: "ত্বকের নিচের স্তর।",
    breakdown: "hypo- (নিচে) + derm- (চামড়া) + -is (স্তর)",
    example: "হাইপোডার্মিস চর্বি ধরে।"
  },
  {
    word: "hypoglycemia",
    meaning: "রক্তে চিনির কমতি।",
    breakdown: "hypo- (নিচে) + glyc- (শর্করা) + -emia (রক্ত)",
    example: "হাইপোগ্লাইসেমিয়া মাথা ঘোরায়।"
  },
  {
    word: "hypothalamus",
    meaning: "মস্তিষ্কের নিচের নিয়ন্ত্রক অংশ।",
    breakdown: "hypo- (নিচে) + thal- (চ্যাম্বার) + -amus (কাঠামো)",
    example: "হাইপোথ্যালামাস তাপ নিয়ন্ত্রণ করে।"
  },
  {
    word: "hypoxia",
    meaning: "অক্সিজেনের অভাব।",
    breakdown: "hypo- (নিচে) + ox- (অক্সিজেন) + -ia (অবস্থা)",
    example: "হাইপক্সিয়া উচ্চতায় ঘটে।"
  },
  {
    word: "ileum",
    meaning: "আহারনালীর শেষের অংশ।",
    breakdown: "il- (মোচড়) + -eum (কাঠামো)",
    example: "ইলিয়াম পুষ্টি শোষণ করে।"
  },
  {
    word: "immunity",
    meaning: "রোগ প্রতিরোধ ক্ষমতা।",
    breakdown: "im- (ভিতরে) + mun- (সুরক্ষা) + -ity (অবস্থা)",
    example: "ইমিউনিটি টিকায় বাড়ে।"
  },
  {
    word: "implantation",
    meaning: "ভ্রূণের গর্ভাশয়ে সংযোগ।",
    breakdown: "im- (ভিতরে) + plant- (লাগানো) + -ation (প্রক্রিয়া)",
    example: "ইমপ্লান্টেশন গর্ভধারণের প্রথম ধাপ।"
  },
  {
    word: "incisor",
    meaning: "দাঁতের সামনের কাটার দাঁত।",
    breakdown: "in- (ভিতরে) + cis- (কাটা) + -or (কর্তা)",
    example: "ইনসাইজর খাদ্য কাটে।"
  },
  {
    word: "infarct",
    meaning: "টিস্যুর মৃত্যু রক্ত সরবরাহের অভাবে।",
    breakdown: "in- (ভিতরে) + farct- (ভাঙা)",
    example: "ইনফার্কট হৃদয়ে হয়।"
  },
  {
    word: "infection",
    meaning: "জীবাণু দ্বারা আক্রমণ।",
    breakdown: "in- (ভিতরে) + fect- (করা) + -ion (প্রক্রিয়া)",
    example: "ইনফেকশন জ্বর সৃষ্টি করে।"
  },
  {
    word: "inflammation",
    meaning: "টিস্যুর ফোলা বা লালতা।",
    breakdown: "in- (ভিতরে) + flamm- (জ্বলা) + -ation (প্রক্রিয়া)",
    example: "ইনফ্লেমেশন আঘাতে ঘটে।"
  },
  {
    word: "ingestion",
    meaning: "খাদ্য গ্রহণ।",
    breakdown: "in- (ভিতরে) + gest- (বহন) + -ion (প্রক্রিয়া)",
    example: "ইনজেশন মুখ দিয়ে ঘটে।"
  },
  {
    word: "innate",
    meaning: "জন্মগত বা প্রাকৃতিক।",
    breakdown: "in- (ভিতরে) + nat- (জন্ম)",
    example: "ইনেট প্রতিরক্ষা জন্ম থেকে থাকে।"
  },
  {
    word: "insertion",
    meaning: "পেশির সংযোগ স্থান।",
    breakdown: "in- (ভিতরে) + sert- (ঢোকানো) + -ion (প্রক্রিয়া)",
    example: "ইনসারশন হাড়ে ঘটে।"
  },
  {
    word: "insulin",
    meaning: "রক্তে চিনি নিয়ন্ত্রক হরমোন।",
    breakdown: "insul- (দ্বীপ) + -in (পদার্থ)",
    example: "ইন্সুলিন ডায়াবেটিসে ব্যবহৃত হয়।"
  },
  {
    word: "integration",
    meaning: "স্নায়ু সংকেতের সমন্বয়।",
    breakdown: "in- (ভিতরে) + tegr- (একত্র) + -ation (প্রক্রিয়া)",
    example: "ইন্টিগ্রেশন মস্তিষ্কে ঘটে।"
  },
  {
    word: "intercostal",
    meaning: "অস্থিরঙ্গের মধ্যে অবস্থিত।",
    breakdown: "inter- (মধ্যে) + cost- (অস্থি) + -al (সম্পর্কিত)",
    example: "ইন্টারকোস্টাল পেশি শ্বাস নিতে সাহায্য করে।"
  },
  {
    word: "interferon",
    meaning: "ভাইরাস প্রতিরোধকারী প্রোটিন।",
    breakdown: "inter- (মধ্যে) + fer- (বহন) + -on (পদার্থ)",
    example: "ইন্টারফেরন ইমিউন সিস্টেমে কাজ করে।"
  },
  {
    word: "interneuron",
    meaning: "স্নায়ুতন্ত্রের মধ্যবর্তী কোষ।",
    breakdown: "inter- (মধ্যে) + neuron (স্নায়ু)",
    example: "ইন্টারনিউরন সংকেত প্রেরণ করে।"
  },
  {
    word: "intracellular",
    meaning: "কোষের ভিতরে অবস্থিত।",
    breakdown: "intra- (ভিতরে) + cellular (কোষযুক্ত)",
    example: "ইন্ট্রাসেলুলার তরল কোষে থাকে।"
  },
  {
    word: "invertebrate",
    meaning: "মেরুদণ্ডবিহীন প্রাণী।",
    breakdown: "in- (না) + vertebr- (মেরুদণ্ড) + -ate (অবস্থা)",
    example: "ইনভার্টিব্রেট যেমন কৃমি।"
  },
  {
    word: "ionize",
    meaning: "আয়ন তৈরি করা।",
    breakdown: "ion- (আয়ন) + -ize (করণ)",
    example: "আয়নাইজ শক্তি দ্বারা ঘটে।"
  },
  {
    word: "iris",
    meaning: "চোখের রঙিন অংশ।",
    breakdown: "ir- (বৃত্ত) + -is (কাঠামো)",
    example: "ইরিস আলো নিয়ন্ত্রণ করে।"
  },
  {
    word: "isotonic",
    meaning: "সমান চাপ বিশিষ্ট।",
    breakdown: "iso- (সমান) + ton- (চাপ) + -ic (সম্পর্কিত)",
    example: "আইসোটনিক দ্রবণ কোষে সামঞ্জস্য করে।"
  },
  {
    word: "jejunum",
    meaning: "আহারনালীর মধ্যবর্তী অংশ।",
    breakdown: "jej- (খালি) + -unum (কাঠামো)",
    example: "জেজুনাম পুষ্টি শোষণ করে।"
  },
  {
    word: "keratin",
    meaning: "ত্বক ও নখের শক্ত প্রোটিন।",
    breakdown: "kerat- (শিং) + -in (প্রোটিন)",
    example: "কেরাটিন চুলে থাকে।"
  },
  {
    word: "ketone",
    meaning: "চিনি ভাঙার ফলাফল।",
    breakdown: "ket- (জ্বলা) + -one (পদার্থ)",
    example: "কেটোন ডায়াবেটিসে বেড়ে যায়।"
  },
  {
    word: "kilocalorie",
    meaning: "খাদ্যে শক্তির একক।",
    breakdown: "kilo- (হাজার) + calorie (শক্তি)",
    example: "কিলোক্যালোরি খাদ্যে মাপা হয়।"
  },
  {
    word: "kinetochore",
    meaning: "ক্রোমোজোমের কেন্দ্রীয় কাঠামো।",
    breakdown: "kineto- (গতি) + -chore (কেন্দ্র)",
    example: "কিনেটোকোর মাইটোসিসে সাহায্য করে।"
  },
  {
    word: "lacteal",
    meaning: "দুধের সাথে সম্পর্কিত বা শ্বেত রক্তনালী।",
    breakdown: "lact- (দুধ) + -eal (সম্পর্কিত)",
    example: "ল্যাক্টিয়াল চর্বি শোষণ করে।"
  },
  {
    word: "lactic",
    meaning: "দুধ বা ল্যাকটিক অ্যাসিডের সাথে সম্পর্কিত।",
    breakdown: "lact- (দুধ) + -ic (সম্পর্কিত)",
    example: "ল্যাকটিক অ্যাসিড ব্যায়ামে তৈরি হয়।"
  },
  {
    word: "lamella",
    meaning: "পাতলা স্তর।",
    breakdown: "lamell- (পাতলা) + -a (কাঠামো)",
    example: "ল্যামেলা হাড়ে থাকে।"
  },
  {
    word: "larva",
    meaning: "প্রজনন পর্বের প্রাথমিক অবস্থা।",
    breakdown: "larv- (ঝিল্লি) + -a (অবস্থা)",
    example: "লার্ভা মাছলিঙ্গের প্রথম পর্যায়।"
  },
  {
    word: "larynx",
    meaning: "গলার কাঠামো যা শব্দ তৈরি করে।",
    breakdown: "laryn- (গলা) + -x (কাঠামো)",
    example: "ল্যারিঙ্কস গানের সুর নির্ধারণ করে।"
  },
  {
    word: "leukemia",
    meaning: "শ্বেত রক্ত কোষের অতিরিক্ততা।",
    breakdown: "leuk- (সাদা) + -emia (রক্ত)",
    example: "লিউকেমিয়া ক্যানসারের এক ধরন।"
  },
  {
    word: "ligament",
    meaning: "হাড়ের মধ্যে সংযোগকারী টিস্যু।",
    breakdown: "lig- (বাঁধন) + -ament (কাঠামো)",
    example: "লিগামেন্ট হাঁটার সময় সাহায্য করে।"
  },
  {
    word: "lipid",
    meaning: "চর্বি বিশিষ্ট পদার্থ।",
    breakdown: "lip- (চর্বি) + -id (পদার্থ)",
    example: "লিপিড কোষে শক্তি সঞ্চয় করে।"
  },
  {
    word: "locus",
    meaning: "জিনের নির্দিষ্ট স্থান।",
    breakdown: "loc- (স্থান) + -us (কাঠামো)",
    example: "লোকাস ডিএনএ-তে থাকে।"
  },
  {
    word: "lumbar",
    meaning: "কটিদেশের সাথে সম্পর্কিত।",
    breakdown: "lumb- (কটি) + -ar (সম্পর্কিত)",
    example: "লাম্বার অঞ্চল মেরুদণ্ডে।"
  },
  {
    word: "lymph",
    meaning: "রক্তের তরল উপাদান।",
    breakdown: "lymp- (পানি) + -h (পদার্থ)",
    example: "লিম্ফ ইমিউন সিস্টেমে কাজ করে।"
  },
  {
    word: "lymphocyte",
    meaning: "শ্বেত রক্ত কোষের এক ধরন।",
    breakdown: "lymph- (লিম্ফ) + -cyte (কোষ)",
    example: "লিম্ফোসাইট রোগ প্রতিরোধ করে।"
  },
  {
    word: "lysis",
    meaning: "কোষের ভাঙন।",
    breakdown: "lys- (ভাঙা) + -is (প্রক্রিয়া)",
    example: "লাইসিস ব্যাকটিরিয়ায় ঘটে।"
  },
  {
    word: "macrophage",
    meaning: "বড় কোষ যা জীবাণু গ্রাস করে।",
    breakdown: "macro- (বড়) + phag- (খাওয়া)",
    example: "ম্যাক্রোফেজ ইমিউন সিস্টেমে সাহায্য করে।"
  },
  {
    word: "mammary",
    meaning: "স্তনের সাথে সম্পর্কিত।",
    breakdown: "mamm- (স্তন) + -ary (সম্পর্কিত)",
    example: "ম্যামারি গ্রন্থি দুধ নিঃসরণ করে।"
  },
  {
    word: "mandible",
    meaning: "নিম্নচোয়ালের হাড়।",
    breakdown: "mand- (চিবানো) + -ible (কাঠামো)",
    example: "ম্যান্ডিবল খাদ্য চিবায়।"
  },
  {
    word: "mastication",
    meaning: "খাদ্য চিবানো।",
    breakdown: "mast- (চিবানো) + -ication (প্রক্রিয়া)",
    example: "ম্যাস্টিকেশন হজমে সাহায্য করে।"
  },
  {
    word: "maxilla",
    meaning: "উচ্চচোয়ালের হাড়।",
    breakdown: "maxill- (আড়) + -a (কাঠামো)",
    example: "ম্যাক্সিলা দাঁত ধরে।"
  },
  {
    word: "meiosis",
    meaning: "কোষ বিভাজনের গ্যামিট তৈরি প্রক্রিয়া।",
    breakdown: "mei- (কম) + -osis (প্রক্রিয়া)",
    example: "মিওসিস হ্যাপ্লয়েড কোষ তৈরি করে।"
  },
  {
    word: "melanin",
    meaning: "চামড়ার রঙকারী পিগমেন্ট।",
    breakdown: "melan- (কালো) + -in (পদার্থ)",
    example: "মেলানিন সূর্য থেকে রক্ষা করে।"
  },
  {
    word: "menopause",
    meaning: "ঋতুস্রাবের সমাপ্তি।",
    breakdown: "meno- (মাসিক) + pause (বিরতি)",
    example: "মেনোপজ বয়সে ঘটে।"
  },
  {
    word: "mesentery",
    meaning: "আহারনালীকে সমর্থনকারী টিস্যু।",
    breakdown: "mes- (মাঝ) + enter- (আহার) + -y (কাঠামো)",
    example: "মেসেন্টারি রক্তনালী ধরে।"
  },
  {
    word: "metabolism",
    meaning: "শরীরের রাসায়নিক প্রক্রিয়া।",
    breakdown: "meta- (পরিবর্তন) + bol- (হওয়া) + -ism (অবস্থা)",
    example: "মেটাবলিজম শক্তি তৈরি করে।"
  },
  {
    word: "metacarpal",
    meaning: "হাতের হাড়ের সাথে সম্পর্কিত।",
    breakdown: "meta- (পরে) + carp- (কবজি) + -al (সম্পর্কিত)",
    example: "মেটাকার্পাল হাতের গঠনে সাহায্য করে।"
  },
  {
    word: "metamorphosis",
    meaning: "জীবের আকৃতি পরিবর্তন।",
    breakdown: "meta- (পরিবর্তন) + morph- (আকৃতি) + -osis (প্রক্রিয়া)",
    example: "মেটামর্ফোসিস পোকায় ঘটে।"
  },
  {
    word: "metaphase",
    meaning: "কোষ বিভাজনের মাঝের পর্যায়।",
    breakdown: "meta- (মাঝে) + phase (পর্যায়)",
    example: "মেটাফেজে ক্রোমোজোম সারিবদ্ধ হয়।"
  },
  {
    word: "microbe",
    meaning: "খুব ছোট জীব।",
    breakdown: "micro- (ছোট) + -be (জীব)",
    example: "মাইক্রোব ব্যাকটিরিয়া।"
  },
  {
    word: "microfilament",
    meaning: "কোষের ছোট ফাইবার।",
    breakdown: "micro- (ছোট) + filament (ফাইবার)",
    example: "মাইক্রোফিলামেন্ট গতিতে সাহায্য করে।"
  },
  {
    word: "micropyle",
    meaning: "বীজের ছোট ফুটো।",
    breakdown: "micro- (ছোট) + pyle (দরজা)",
    example: "মাইক্রোপাইল জল প্রবেশ করে।"
  },
  {
    word: "mitochondrion",
    meaning: "শক্তি উৎপাদনকারী কোষাঙ্গ।",
    breakdown: "mito- (ধাগা) + chondr- (কণা) + -ion (কাঠামো)",
    example: "মাইটোকন্ড্রিয়ন শক্তি তৈরি করে।"
  },
  {
    word: "mitosis",
    meaning: "কোষ বিভাজনের প্রক্রিয়া।",
    breakdown: "mit- (ধাগা) + -osis (প্রক্রিয়া)",
    example: "মাইটোসিস কোষ বৃদ্ধিতে সাহায্য করে।"
  },
  {
    word: "monocotyledon",
    meaning: "একটি কোটিলিডন বিশিষ্ট উদ্�bhিদ।",
    breakdown: "mono- (এক) + cotyl- (কোটিলিডন) + -edon (পত্র)",
    example: "মনোকোটাইলিডন যেমন ঘাস।"
  },
  {
    word: "monocyte",
    meaning: "এক ধরনের শ্বেত রক্ত কোষ।",
    breakdown: "mono- (এক) + cyte (কোষ)",
    example: "মনোসাইট ইমিউন সিস্টেমে কাজ করে।"
  },
  {
    word: "morphogenesis",
    meaning: "আকৃতি গঠনের প্রক্রিয়া।",
    breakdown: "morph- (আকৃতি) + genesis (জন্ম)",
    example: "মর্ফোজেনেসিস ভ্রূণে ঘটে।"
  },
  {
    word: "motility",
    meaning: "গতিশীলতা।",
    breakdown: "mot- (গতি) + -ility (অবস্থা)",
    example: "মোটিলিটি স্পার্মে দেখা যায়।"
  },
  {
    word: "mucosa",
    meaning: "শ্লৈষ্মিক স্তর।",
    breakdown: "muc- (শ্লৈষ্মিক) + -osa (কাঠামো)",
    example: "মুকোসা মুখে থাকে।"
  },
  {
    word: "multicellular",
    meaning: "অনেক কোষ বিশিষ্ট।",
    breakdown: "multi- (অনেক) + cellular (কোষযুক্ত)",
    example: "মাল্টিসেলুলার জীব মানুষ।"
  },
  {
    word: "muscle",
    meaning: "গতি সৃষ্টিকারী টিস্যু।",
    breakdown: "musc- (মাংস) + -le (কাঠামো)",
    example: "মাসল হাঁটতে সাহায্য করে।"
  },
  {
    word: "mutation",
    meaning: "জিনে পরিবর্তন।",
    breakdown: "mut- (পরিবর্তন) + -ation (প্রক্রিয়া)",
    example: "মিউটেশন নতুন প্রজাতি তৈরি করে।"
  },
  {
    word: "myelin",
    meaning: "স্নায়ুকে সংরক্ষককারী স্তর।",
    breakdown: "myel- (মজ্জা) + -in (পদার্থ)",
    example: "মাইলিন সংকেত দ্রুত করে।"
  },
  {
    word: "myocardium",
    meaning: "হৃৎপিণ্ডের মাংসপেশি।",
    breakdown: "myo- (মাংস) + cardi- (হৃদয়) + -um (কাঠামো)",
    example: "মাইওকার্ডিয়াম হৃদস্পন্দন করে।"
  },
  {
    word: "myoglobin",
    meaning: "মাংসপেশিতে অক্সিজেন সঞ্চয়কারী প্রোটিন।",
    breakdown: "myo- (মাংস) + globin (গোলক)",
    example: "মাইওগ্লোবিন ব্যায়ামে কাজ করে।"
  },
  {
    word: "myosin",
    meaning: "মাংসপেশির প্রোটিন।",
    breakdown: "myo- (মাংস) + -in (প্রোটিন)",
    example: "মাইওসিন সংকোচনে সাহায্য করে।"
  },
  {
    word: "narcotic",
    meaning: "মস্তিষ্ককে প্রভাবিত করা পদার্থ।",
    breakdown: "narc- (নিদ্রা) + -otic (সম্পর্কিত)",
    example: "নারকোটিক ঔষধ হিসেবে ব্যবহৃত হয়।"
  },
  {
    word: "nasal",
    meaning: "নাকের সাথে সম্পর্কিত।",
    breakdown: "nas- (নাক) + -al (সম্পর্কিত)",
    example: "নেসাল প্যাসেজ শ্বাস নেয়।"
  },
  {
    word: "nephron",
    meaning: "কিডনির ফিল্টারিং ইউনিট।",
    breakdown: "nephr- (কিডনি) + -on (কাঠামো)",
    example: "নেফ্রন মূত্র তৈরি করে।"
  },
  {
    word: "neural",
    meaning: "স্নায়ুর সাথে সম্পর্কিত।",
    breakdown: "neur- (স্নায়ু) + -al (সম্পর্কিত)",
    example: "নিউরাল সিগনাল মস্তিষ্কে যায়।"
  },
  {
    word: "neuron",
    meaning: "স্নায়ু কোষ।",
    breakdown: "neur- (স্নায়ু) + -on (কাঠামো)",
    example: "নিউরন সংকেত বহন করে।"
  },
  {
    word: "neurotransmitter",
    meaning: "স্নায়ু সংকেত স্থানান্তরকারী রাসায়নিক।",
    breakdown: "neuro- (স্নায়ু) + trans- (অতিক্রম) + mitter (প্রেরক)",
    example: "নিউরোট্রান্সমিটার মেসেঞ্জার হিসেবে কাজ করে।"
  },
  {
    word: "nocturnal",
    meaning: "রাত্রিকালীন।",
    breakdown: "noct- (রাত) + -urnal (সম্পর্কিত)",
    example: "নকটার্নাল প্রাণী যেমন ব্যাঘ্র।"
  },
  {
    word: "nodule",
    meaning: "ছোট গোলাকার কাঠামো।",
    breakdown: "nod- (গোলক) + -ule (ছোট)",
    example: "নডুল শিকড়ে থাকে।"
  },
  {
    word: "nucleotide",
    meaning: "ডিএনএ-র বেস ইউনিট।",
    breakdown: "nucle- (নিউক্লিয়াস) + -otide (একক)",
    example: "নিউক্লিওটাইড জিন তৈরি করে।"
  },
  {
    word: "nucleus",
    meaning: "কোষের নিয়ন্ত্রক কেন্দ্র।",
    breakdown: "nucle- (কেন্দ্র) + -us (কাঠামো)",
    example: "নিউক্লিয়াস ডিএনএ ধরে।"
  },
  {
    word: "nutrient",
    meaning: "শরীরের জন্য প্রয়োজনীয় পদার্থ।",
    breakdown: "nutr- (পুষ্টি) + -ient (ধারক)",
    example: "নিউট্রিয়েন্ট উদ্�bhিদে থাকে।"
  },
  {
    word: "occlusion",
    meaning: "রক্তনালীর বন্ধ।",
    breakdown: "oc- (বন্ধ) + clus- (বন্ধ) + -ion (প্রক্রিয়া)",
    example: "অক্লুশন হৃদয়ে সমস্যা সৃষ্টি করে।"
  },
  {
    word: "olfactory",
    meaning: "গন্ধ সংবেদনের সাথে সম্পর্কিত।",
    breakdown: "olfact- (গন্ধ) + -ory (সম্পর্কিত)",
    example: "অলফ্যাকটরি নার্ভ গন্ধ টের পায়।"
  },
  {
    word: "ommatidium",
    meaning: "কীটের চোখের ছোট ইউনিট।",
    breakdown: "ommat- (চোখ) + -idium (ছোট)",
    example: "ওমাটিডিয়াম মাছি চোখে থাকে।"
  },
  {
    word: "oocyte",
    meaning: "ডিম্বাণু কোষ।",
    breakdown: "oo- (ডিম) + -cyte (কোষ)",
    example: "ওসাইট গর্ভধারণে ব্যবহৃত হয়।"
  },
  {
    word: "oogenesis",
    meaning: "ডিম্বাণু তৈরির প্রক্রিয়া।",
    breakdown: "oo- (ডিম) + genesis (জন্ম)",
    example: "ওজেনেসিস ডিম্বাশয়ে ঘটে।"
  },
  {
    word: "ophthalmic",
    meaning: "চোখের সাথে সম্পর্কিত।",
    breakdown: "ophthalm- (চোখ) + -ic (সম্পর্কিত)",
    example: "অফথালমিক নার্ভ চোখে কাজ করে।"
  },
  {
    word: "optic",
    meaning: "দৃষ্টির সাথে সম্পর্কিত।",
    breakdown: "opt- (দৃষ্টি) + -ic (সম্পর্কিত)",
    example: "অপটিক নার্ভ আলো টের পায়।"
  },
  {
    word: "oral",
    meaning: "মুখের সাথে সম্পর্কিত।",
    breakdown: "or- (মুখ) + -al (সম্পর্কিত)",
    example: "ওরাল ক্যাভিটি খাদ্য গ্রহণ করে।"
  },
  {
    word: "orbicular",
    meaning: "গোলাকার।",
    breakdown: "orb- (বৃত্ত) + -icular (সম্পর্কিত)",
    example: "অরবিকুলার মাংসপেশি চোখ ঘোরায়।"
  },
  {
    word: "organelle",
    meaning: "কোষের অভ্যন্তরীণ কাঠামো।",
    breakdown: "organ- (অঙ্গ) + -elle (ছোট)",
    example: "অর্গ্যানেল মাইটোকন্ড্রিয়া।"
  },
  {
    word: "osmosis",
    meaning: "জলের প্রাকৃতিক প্রবাহ।",
    breakdown: "osmo- (ধাক্কা) + -osis (প্রক্রিয়া)",
    example: "অসমোসিস কোষে জল সরবরাহ করে।"
  },
  {
    word: "ossification",
    meaning: "হাড় গঠনের প্রক্রিয়া।",
    breakdown: "ossi- (হাড়) + -fication (করণ)",
    example: "অসিফিকেশন বয়সে ঘটে।"
  },
  {
    word: "osteoblast",
    meaning: "হাড় তৈরিকারী কোষ।",
    breakdown: "osteo- (হাড়) + blast (জন্ম)",
    example: "অস্টিওব্লাস্ট হাড় বৃদ্ধি করে।"
  },
  {
    word: "osteoclast",
    meaning: "হাড় ভাঙার কোষ।",
    breakdown: "osteo- (হাড়) + clast (ভাঙা)",
    example: "অস্টিওক্লাস্ট হাড় পুনর্গঠন করে।"
  },
  {
    word: "ovary",
    meaning: "ডিম্বাণু তৈরি গ্রন্থি।",
    breakdown: "ov- (ডিম) + -ary (সম্পর্কিত)",
    example: "অভারি গর্ভধারণে সাহায্য করে।"
  },
  {
    word: "ovulation",
    meaning: "ডিম্বাণু নিঃসরণ।",
    breakdown: "ov- (ডিম) + -ulation (প্রক্রিয়া)",
    example: "ওভুলেশন মাসিক চক্রে ঘটে।"
  },
  {
    word: "oxidation",
    meaning: "অক্সিজেনের সাথে প্রতিক্রিয়া।",
    breakdown: "ox- (অক্সিজেন) + -idation (প্রক্রিয়া)",
    example: "অক্সিডেশন শক্তি মুক্ত করে।"
  },
  {
    word: "palate",
    meaning: "মুখের ছাদ।",
    breakdown: "palat- (আকাশ) + -e (কাঠামো)",
    example: "প্যালেট স্বাদ নির্ধারণে সাহায্য করে।"
  },
  {
    word: "pancreas",
    meaning: "হজম ও হরমোন নিঃসরণকারী গ্রন্থি।",
    breakdown: "pan- (সব) + creas (মাংস)",
    example: "প্যানক্রিয়াস ইন্সুলিন তৈরি করে।"
  },
  {
    word: "paranasal",
    meaning: "নাকের পাশের সিনাস।",
    breakdown: "para- (পাশে) + nas- (নাক) + -al (সম্পর্কিত)",
    example: "প্যারানেসাল সিনাস বায়ু পরিশোধ করে।"
  },
  {
    word: "parasite",
    meaning: "অন্য জীবের উপর নির্ভরশীল জীব।",
    breakdown: "para- (পাশে) + site (খাওয়া)",
    example: "প্যারাসাইট যেমন পিঁপড়া।"
  },
  {
    word: "parathyroid",
    meaning: "প্যারাথাইরয়েড গ্রন্থি।",
    breakdown: "para- (পাশে) + thyroid (থাইরয়েড)",
    example: "প্যারাথাইরয়েড ক্যালসিয়াম নিয়ন্ত্রণ করে।"
  },
  {
    word: "patella",
    meaning: "হাঁটুর হাড়।",
    breakdown: "patell- (পাত্র) + -a (কাঠামো)",
    example: "প্যাটেলা হাঁটুতে থাকে।"
  },
  {
    word: "pectoral",
    meaning: "বক্ষের সাথে সম্পর্কিত।",
    breakdown: "pect- (বক্ষ) + -oral (সম্পর্কিত)",
    example: "পেকটোরাল মাংসপেশি বাহু তুলে।"
  },
  {
    word: "pelvic",
    meaning: "নাড়ির সাথে সম্পর্কিত।",
    breakdown: "pelv- (নাড়ি) + -ic (সম্পর্কিত)",
    example: "পেলভিক হাড় শিশু ধরে।"
  },
  {
    word: "penis",
    meaning: "পুরুষ প্রজনন অঙ্গ।",
    breakdown: "pen- (অগ্রভাগ) + -is (কাঠামো)",
    example: "পেনিস প্রজননে ব্যবহৃত হয়।"
  },
  {
    word: "pepsin",
    meaning: "প্রোটিন ভাঙার এনজাইম।",
    breakdown: "peps- (হজম) + -in (পদার্থ)",
    example: "পেপসিন পেটে কাজ করে।"
  },
  {
    word: "perforation",
    meaning: "ছিদ্র তৈরি।",
    breakdown: "per- (মধ্য দিয়ে) + for- (ছিদ্র) + -ation (প্রক্রিয়া)",
    example: "পারফোরেশন ইয়ারড্রামে ঘটে।"
  },
  {
    word: "pericardium",
    meaning: "হৃৎপিণ্ডকে আবৃতকারী স্তর।",
    breakdown: "peri- (চারপাশে) + cardi- (হৃদয়) + -ium (কাঠামো)",
    example: "পেরিকার্ডিয়াম হৃদয় রক্ষা করে।"
  },
  {
    word: "peristalsis",
    meaning: "আহারনালীর সংকোচন।",
    breakdown: "peri- (চারপাশে) + stal- (সংকোচন) + -sis (প্রক্রিয়া)",
    example: "পেরিস্টালসিস খাদ্য সরায়।"
  },
  {
    word: "peritoneum",
    meaning: "পেটের ভিতরের স্তর।",
    breakdown: "peri- (চারপাশে) + tone- (তান) + -um (কাঠামো)",
    example: "পেরিটোনিয়াম অঙ্গ রক্ষা করে।"
  },
  {
    word: "permeability",
    meaning: "পদার্থ প্রবেশের ক্ষমতা।",
    breakdown: "perm- (প্রবাহ) + -ability (ক্ষমতা)",
    example: "পার্মিয়াবিলিটি কোষে জল প্রবেশ করে।"
  },
  {
    word: "phagocytosis",
    meaning: "কোষ দ্বারা পদার্থ গ্রাস।",
    breakdown: "phago- (খাওয়া) + cyt- (কোষ) + -osis (প্রক্রিয়া)",
    example: "ফ্যাগোসাইটোসিস ইমিউন সিস্টেমে ঘটে।"
  },
  {
    word: "pharynx",
    meaning: "গলার পিছনের কাঠামো।",
    breakdown: "pharyng- (গলা) + -x (কাঠামো)",
    example: "ফ্যারিঙ্কস শ্বাস ও খাদ্য পথ।"
  },
  {
    word: "phenotype",
    meaning: "জিনের বাইরের বৈশিষ্ট্য।",
    breakdown: "pheno- (প্রকাশ) + -type (ধরন)",
    example: "ফিনোটাইপ চুলের রঙ।"
  },
  {
    word: "pheromone",
    meaning: "প্রজনন সংকেতকারী রাসায়নিক।",
    breakdown: "pher- (বহন) + -mone (পদার্থ)",
    example: "ফেরোমোন মৌমাছিতে ব্যবহৃত হয়।"
  },
  {
    word: "phloem",
    meaning: "উদ্�bhিদে পুষ্টি পরিবহনকারী টিস্যু।",
    breakdown: "phlo- (বহন) + -em (কাঠামো)",
    example: "ফ্লোইম শক্তি বহন করে।"
  },
  {
    word: "phosphate",
    meaning: "ফসফরাস যৌগ।",
    breakdown: "phosph- (ফসফরাস) + -ate (যৌগ)",
    example: "ফসফেট ডিএনএ-তে থাকে।"
  },
  {
    word: "photoperiod",
    meaning: "আলোর সময়কাল।",
    breakdown: "photo- (আলো) + period (সময়)",
    example: "ফটোপিরিয়ড ফুল ফোটায়।"
  },
  {
    word: "photosynthesis",
    meaning: "আলো দ্বারা খাদ্য তৈরি।",
    breakdown: "photo- (আলো) + synthesis (সংশ্লেষণ)",
    example: "ফটোচিন্থেসিস উদ্�bhিদে ঘটে।"
  },
  {
    word: "phytoplankton",
    meaning: "জলীয় উদ্�bhিদ প্ল্যাঙ্কটন।",
    breakdown: "phyto- (উদ্�bhিদ) + plankton (ভাসমান)",
    example: "ফাইটোপ্ল্যাঙ্কটন অক্সিজেন তৈরি করে।"
  },
  {
    word: "pinnate",
    meaning: "পত্রের শাখা যুক্ত।",
    breakdown: "pinn- (পাখা) + -ate (অবস্থা)",
    example: "পিনেট পাতা গাছে থাকে।"
  },
  {
    word: "pituitary",
    meaning: "মস্তিষ্কের নিচে থাকা গ্রন্থি।",
    breakdown: "pituit- (ঘড়ি) + -ary (সম্পর্কিত)",
    example: "পিটুইটারি হরমোন নিয়ন্ত্রণ করে।"
  },
  {
    word: "placenta",
    meaning: "ভ্রূণকে পুষ্টি সরবরাহকারী অঙ্গ।",
    breakdown: "plac- (পাত্র) + -enta (কাঠামো)",
    example: "প্ল্যাসেন্টা গর্ভাবস্থায় গুরুত্বপূর্ণ।"
  },
  {
    word: "plasma",
    meaning: "রক্তের তরল অংশ।",
    breakdown: "plasm- (আকৃতি) + -a (কাঠামো)",
    example: "প্লাজমা রক্তে থাকে।"
  },
  {
    word: "platelet",
    meaning: "রক্ত জমাট বাঁধার কোষ।",
    breakdown: "plate- (পাত) + -let (ছোট)",
    example: "প্লেটলেট কাটা সারে।"
  },
  {
    word: "pleura",
    meaning: "ফুসফুসকে আবৃতকারী স্তর।",
    breakdown: "pleur- (পাশ) + -a (কাঠামো)",
    example: "প্লুরা শ্বাস নিতে সাহায্য করে।"
  },
  {
    word: "pneumonia",
    meaning: "ফুসফুসের সংক্রমণ।",
    breakdown: "pneumo- (শ্বাস) + -ia (অবস্থা)",
    example: "নিউমোনিয়া জ্বর সৃষ্টি করে।"
  },
  {
    word: "pollen",
    meaning: "ফুলের প্রজনন উপাদান।",
    breakdown: "poll- (ধুলো) + -en (পদার্থ)",
    example: "পলেন মৌমাছি দ্বারা বহন করা হয়।"
  },
  {
    "word": "Hemoglobin",
    "meaning": "হিমোগ্লোবিন",
    "breakdown": "হেমো (Hemo: রক্ত থেকে) + গ্লোবিন (Globin: প্রোটিনের একটি শ্রেণি), মানে রক্তে অক্সিজেন পরিবহনকারী প্রোটিন যা লোহিত লৌহ (Iron) ধরে।",
    "example": "হিমোগ্লোবিন রক্তকে লাল রঙ দেয় এবং অক্সিজেন বহন করে।"
  },
  {
    "word": "Mitochondria",
    "meaning": "মাইটোকন্ড্রিয়া",
    "breakdown": "মাইটো (Mito: সুতো, কারণ এর আকৃতি) + চন্দ্র (Chondrion: কণিকা), মানে কোষের শক্তি উৎপাদনকারী সুতোর মতো কণিকা।",
    "example": "মাইটোকন্ড্রিয়া কোষে ATP তৈরি করে।"
  },
  {
    "word": "Endoplasmic Reticulum",
    "meaning": "এন্ডোপ্লাজমিক রেটিকুলাম",
    "breakdown": "এন্ডো (Endo: ভিতরে) + প্লাজম (Plasm: কোষরস) + রেটিকুলাম (Reticulum: জাল), মানে কোষের ভিতরের জালের মতো গঠন যা প্রোটিন ও লিপিড তৈরি করে।",
    "example": "এন্ডোপ্লাজমিক রেটিকুলাম প্রোটিন পরিবহন করে।"
  },
  {
    "word": "Golgi Apparatus",
    "meaning": "গোলজি যন্ত্র",
    "breakdown": "গোলজি (Golgi: বিজ্ঞানী ক্যামিলো গোলজির নামে) + অ্যাপারেটাস (Apparatus: যন্ত্র), মানে কোষে প্রোটিন প্যাকেজিং ও পরিবহনের জন্য গোলজি কর্তৃক আবিষ্কৃত যন্ত্র।",
    "example": "গোলজি যন্ত্র প্রোটিনকে সঠিক জায়গায় পাঠায়।"
  },
  {
    "word": "Lysosome",
    "meaning": "লাইসোজোম",
    "breakdown": "লাইসো (Lyso: ভাঙ্গা) + সোম (Som: শরীর), মানে কোষের ভিতরে বর্জ্য ভাঙার জন্য দায়ী শরীর।",
    "example": "লাইসোজোম ব্যাকটেরিয়াকে ধ্বংস করে।"
  },
  {
    "word": "Ribosome",
    "meaning": "রাইবোজোম",
    "breakdown": "রাইবো (Ribo: RNA থেকে) + সোম (Som: শরীর), মানে RNA-এর সাহায্যে প্রোটিন তৈরির জন্য কোষের শরীর।",
    "example": "রাইবোজোম প্রোটিন সংশ্লেষণে কাজ করে।"
  },
  {
    "word": "Cytoskeleton",
    "meaning": "সাইটোস্কেলেটন",
    "breakdown": "সাইটো (Cyto: কোষ) + স্কেলেটন (Skeleton: কাঠামো), মানে কোষের ভিতরের কঠিন কাঠামোর মতো গঠন।",
    "example": "সাইটোস্কেলেটন কোষের আকৃতি ধরে রাখে।"
  },
  {
    "word": "Microfilament",
    "meaning": "মাইক্রোফিলামেন্ট",
    "breakdown": "মাইক্রো (Micro: ছোট) + ফিলামেন্ট (Filament: সুতো), মানে কোষের ভিতরে ছোট সুতোর মতো কাঠামো।",
    "example": "মাইক্রোফিলামেন্ট গতিবিধিতে সাহায্য করে।"
  },
  {
    "word": "Microtubule",
    "meaning": "মাইক্রোটিউবুল",
    "breakdown": "মাইক্রো (Micro: ছোট) + টিউবুল (Tubule: নালী), মানে কোষের ছোট নালীর মতো কাঠামো।",
    "example": "মাইক্রোটিউবুল কোষ বিভাজনে কাজ করে।"
  },
  {
    "word": "Centriole",
    "meaning": "সেন্ট্রিওল",
    "breakdown": "সেন্ট্রি (Centri: কেন্দ্র) + ওল (Ole: ছোট কণা), মানে কোষ বিভাজনে কেন্দ্রীয় কণা।",
    "example": "সেন্ট্রিওল মাইটোসিসে সাহায্য করে।"
  },
  {
    "word": "Chromosome",
    "meaning": "ক্রোমোজোম",
    "breakdown": "ক্রোমো (Chromo: রঙ) + সোম (Som: শরীর), মানে রঙিন শরীর যা জিন ধরে।",
    "example": "ক্রোমোজোম জিনের বাহক।"
  },
  {
    "word": "Centromere",
    "meaning": "সেন্ট্রোমিয়ার",
    "breakdown": "সেন্ট্রো (Centro: কেন্দ্র) + মিয়ার (Mere: অংশ), মানে ক্রোমোজোমের কেন্দ্রীয় বিন্দু।",
    "example": "সেন্ট্রোমিয়ার ক্রোমোজোম ভাগ করে।"
  },
  {
    "word": "Telomere",
    "meaning": "টেলোমিয়ার",
    "breakdown": "টেলো (Telo: শেষ) + মিয়ার (Mere: অংশ), মানে ক্রোমোজোমের শেষ প্রান্ত।",
    "example": "টেলোমিয়ার কোষের বার্ধক্য নির্ধারণ করে।"
  },
  {
    "word": "Histone",
    "meaning": "হিস্টোন",
    "breakdown": "হিস্টো (Histo: কোষ) + ওন (One: প্রোটিন), মানে কোষে DNA জড়ানোর প্রোটিন।",
    "example": "হিস্টোন DNA-কে সংরক্ষণ করে।"
  },
  {
    "word": "Nucleolus",
    "meaning": "নিউক্লিয়োলাস",
    "breakdown": "নিউক্লি (Nuclei: নিউক্লিয়াস) + ওলাস (Olus: ছোট), মানে নিউক্লিয়াসের ছোট অংশ।",
    "example": "নিউক্লিয়োলাস rRNA তৈরি করে।"
  },
  {
    "word": "Peroxisome",
    "meaning": "পারক্সিসোম",
    "breakdown": "পারক্সি (Peroxi: হাইড্রোজেন পারক্সাইড) + সোম (Som: শরীর), মানে হাইড্রোজেন পারক্সাইড ভাঙার শরীর।",
    "example": "পারক্সিসোম বিষাক্ত পদার্থ ধ্বংস করে।"
  },
  {
    "word": "Vacuole",
    "meaning": "ভ্যাকুওল",
    "breakdown": "ভ্যাকু (Vacu: খালি) + ওল (Ole: কণা), মানে কোষের খালি কণা।",
    "example": "ভ্যাকুওল পানি সঞ্চয় করে।"
  },
  {
    "word": "Cytoplasm",
    "meaning": "সাইটোপ্লাজম",
    "breakdown": "সাইটো (Cyto: কোষ) + প্লাজম (Plasm: তরল), মানে কোষের ভিতরের তরল অংশ।",
    "example": "সাইটোপ্লাজমে রাসায়নিক প্রতিক্রিয়া হয়।"
  },
  {
    "word": "Nucleus",
    "meaning": "নিউক্লিয়াস",
    "breakdown": "নিউ (Nu: কেন্দ্র) + ক্লিয়াস (Cleus: গোলক), মানে কোষের কেন্দ্রীয় গোলক।",
    "example": "নিউক্লিয়াস জিন ধরে।"
  },
  {
    "word": "Cell Membrane",
    "meaning": "কোষের ঝিল্লি",
    "breakdown": "সেল (Cell: কোষ) + মেম্ব্রেন (Membrane: ঝিল্লি), মানে কোষকে ঘিরে রাখা ঝিল্লি।",
    "example": "কোষের ঝিল্লি পদার্থ প্রবেশ নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Phospholipid",
    "meaning": "ফসফোলিপিড",
    "breakdown": "ফসফো (Phospho: ফসফরাস) + লিপিড (Lipid: চর্বি), মানে ফসফরাসযুক্ত চর্বি যা ঝিল্লি তৈরি করে।",
    "example": "ফসফোলিপিড কোষের ঝিল্লি গঠন করে।"
  },
  {
    "word": "Glycolysis",
    "meaning": "গ্লাইকোলিসিস",
    "breakdown": "গ্লাইকো (Glyco: গ্লুকোজ) + লিসিস (Lysis: ভাঙ্গা), মানে গ্লুকোজ ভাঙার প্রক্রিয়া।",
    "example": "গ্লাইকোলিসিস শক্তি উৎপাদন শুরু করে।"
  },
  {
    "word": "Krebs Cycle",
    "meaning": "ক্রেবস চক্র",
    "breakdown": "ক্রেবস (Krebs: বিজ্ঞানী হ্যান্স ক্রেবসের নামে) + সাইকেল (Cycle: চক্র), মানে শক্তি উৎপাদনের চক্রীয় প্রক্রিয়া।",
    "example": "ক্রেবস চক্র মাইটোকন্ড্রিয়ায় হয়।"
  },
  {
    "word": "Electron Transport Chain",
    "meaning": "ইলেকট্রন পরিবহন শৃঙ্খলা",
    "breakdown": "ইলেকট্রন (Electron: ইলেকট্রন) + ট্রান্সপোর্ট (Transport: পরিবহন) + চেইন (Chain: শৃঙ্খলা), মানে ইলেকট্রন পরিবহনের শৃঙ্খলা।",
    "example": "ইলেকট্রন পরিবহন শৃঙ্খলা ATP তৈরি করে।"
  },
  {
    "word": "Oxidative Phosphorylation",
    "meaning": "অক্সিডেটিভ ফসফোরিলেশন",
    "breakdown": "অক্সিডেটিভ (Oxidative: অক্সিজেন সহ) + ফসফোরিলেশন (Phosphorylation: ফসফেট যোগ), মানে অক্সিজেন সহ ফসফেট যোগের প্রক্রিয়া।",
    "example": "অক্সিডেটিভ ফসফোরিলেশন শক্তি উৎপাদনে গুরুত্বপূর্ণ।"
  },
  {
    "word": "Adenosine Triphosphate",
    "meaning": "এডিনোসিন ট্রাইফসফেট",
    "breakdown": "এডিনোসিন (Adenosine: নিউক্লিওটাইড) + ট্রাই (Tri: তিন) + ফসফেট (Phosphate: ফসফরাস যৌগ), মানে তিন ফসফেটযুক্ত শক্তি মাধ্যম।",
    "example": "ATP শক্তির প্রধান উৎস।"
  },
  {
    "word": "Deoxyribonucleic Acid",
    "meaning": "ডিওক্সিরাইবোনিউক্লিক অ্যাসিড",
    "breakdown": "ডিওক্সি (Deoxy: অক্সিজেন ছাড়া) + রাইবো (Ribo: শর্করা) + নিউক্লিক (Nucleic: নিউক্লিয়াস) + অ্যাসিড (Acid: অ্যাসিড), মানে নিউক্লিয়াসে থাকা জৈবিক অ্যাসিড।",
    "example": "DNA জিনের বাহক।"
  },
  {
    "word": "Ribonucleic Acid",
    "meaning": "রাইবোনিউক্লিক অ্যাসিড",
    "breakdown": "রাইবো (Ribo: শর্করা) + নিউক্লিক (Nucleic: নিউক্লিয়াস) + অ্যাসিড (Acid: অ্যাসিড), মানে প্রোটিন সংশ্লেষণে ব্যবহৃত অ্যাসিড।",
    "example": "RNA প্রোটিন তৈরিতে সাহায্য করে।"
  },
  {
    "word": "Messenger RNA",
    "meaning": "মেসেঞ্জার RNA",
    "breakdown": "মেসেঞ্জার (Messenger: বার্তাবাহক) + RNA (Ribonucleic Acid: রাইবোনিউক্লিক অ্যাসিড), মানে জিন থেকে প্রোটিন তৈরির বার্তা বাহক।",
    "example": "mRNA জিনের নির্দেশ পাঠায়।"
  },
  {
    "word": "Transfer RNA",
    "meaning": "ট্রান্সফার RNA",
    "breakdown": "ট্রান্সফার (Transfer: স্থানান্তর) + RNA (Ribonucleic Acid: রাইবোনিউক্লিক অ্যাসিড), মানে অ্যামিনো অ্যাসিড স্থানান্তরকারী।",
    "example": "tRNA অ্যামিনো অ্যাসিড জোড়া লাগায়।"
  },
  {
    "word": "Ribosomal RNA",
    "meaning": "রাইবোজোমাল RNA",
    "breakdown": "রাইবোজোমাল (Ribosomal: রাইবোজোম সংক্রান্ত) + RNA (Ribonucleic Acid: রাইবোনিউক্লিক অ্যাসিড), মানে রাইবোজোমের গঠনে ব্যবহৃত RNA।",
    "example": "rRNA রাইবোজোমকে স্থিতিশীল করে।"
  },
  {
    "word": "Codon",
    "meaning": "কোডন",
    "breakdown": "কোড (Code: কোড) + ওন (On: অংশ), মানে জিনের কোডিং একক।",
    "example": "কোডন অ্যামিনো অ্যাসিড নির্ধারণ করে।"
  },
  {
    "word": "Anticodon",
    "meaning": "অ্যান্টিকোডন",
    "breakdown": "অ্যান্টি (Anti: বিপরীত) + কোডন (Codon: কোড), মানে tRNA-এর কোডের বিপরীত অংশ।",
    "example": "অ্যান্টিকোডন mRNA-এর সাথে মিলে।"
  },
  {
    "word": "Transcription",
    "meaning": "ট্রান্সক্রিপশন",
    "breakdown": "ট্রান্স (Trans: পার) + স্ক্রিপশন (Scription: লেখা), মানে DNA থেকে RNA-তে লেখা।",
    "example": "ট্রান্সক্রিপশন জিন এক্সপ্রেশন শুরু করে।"
  },
  {
    "word": "Translation",
    "meaning": "ট্রান্সলেশন",
    "breakdown": "ট্রান্স (Trans: পার) + লেশন (Lation: রূপান্তর), মানে RNA থেকে প্রোটিনে রূপান্তর।",
    "example": "ট্রান্সলেশন প্রোটিন তৈরি করে।"
  },
  {
    "word": "Polymerase",
    "meaning": "পলিমারেজ",
    "breakdown": "পলি (Poly: অনেক) + মার (Mer: একক) + এজ (Ase: এনজাইম), মানে অনেক একক জোড়ার এনজাইম।",
    "example": "পলিমারেজ DNA প্রতিলিপি তৈরি করে।"
  },
  {
    "word": "Helicase",
    "meaning": "হেলিকেজ",
    "breakdown": "হেলিক (Helic: সর্পিল) + এজ (Ase: এনজাইম), মানে DNA-এর সর্পিল খোলার এনজাইম।",
    "example": "হেলিকেজ DNA প্রতিলিপিতে কাজ করে।"
  },
  {
    "word": "Ligase",
    "meaning": "লাইগেজ",
    "breakdown": "লিগ (Lig: বাঁধা) + এজ (Ase: এনজাইম), মানে DNA-এর অংশ বাঁধার এনজাইম।",
    "example": "লাইগেজ DNA মেরামত করে।"
  },
  {
    "word": "Mutagen",
    "meaning": "মিউটাজেন",
    "breakdown": "মিউট (Mut: পরিবর্তন) + জেন (Gen: উৎপত্তি), মানে জিনে পরিবর্তনকারী।",
    "example": "মিউটাজেন ক্যান্সার ঝুঁকি বাড়ায়।"
  },
  {
    "word": "Carcinogen",
    "meaning": "কারসিনোজেন",
    "breakdown": "কারসিনো (Carcino: ক্যান্সার) + জেন (Gen: উৎপত্তি), মানে ক্যান্সারকারী পদার্থ।",
    "example": "কারসিনোজেন ধূমপানে পাওয়া যায়।"
  },
  {
    "word": "Oncogene",
    "meaning": "অনকোজিন",
    "breakdown": "অনকো (Onco: টিউমার) + জিন (Gene: জিন), মানে টিউমার সৃষ্টিকারী জিন।",
    "example": "অনকোজিন ক্যান্সারে সক্রিয় হয়।"
  },
  {
    "word": "Tumor Suppressor",
    "meaning": "টিউমার দমনকারী",
    "breakdown": "টিউমার (Tumor: টিউমার) + সাপ্রেসর (Suppressor: দমনকারী), মানে টিউমার বাধা দেয়।",
    "example": "টিউমার দমনকারী জিন ক্যান্সার রোধ করে।"
  },
  {
    "word": "Apoptosis",
    "meaning": "অ্যাপোপটোসিস",
    "breakdown": "অ্যাপো (Apo: দূরে) + পটোসিস (Ptosis: পড়া), মানে কোষের নিয়ন্ত্রিত মৃত্যু।",
    "example": "অ্যাপোপটোসিস ক্যান্সার রোধে সাহায্য করে।"
  },
  {
    "word": "Necrosis",
    "meaning": "নেক্রোসিস",
    "breakdown": "নেক্রো (Necro: মৃত) + সিস (Sis: প্রক্রিয়া), মানে কোষের অস্বাভাবিক মৃত্যু।",
    "example": "নেক্রোসিস আঘাতে হয়।"
  },
  {
    "word": "Phagocytosis",
    "meaning": "ফ্যাগোসাইটোসিস",
    "breakdown": "ফ্যাগো (Phago: খাওয়া) + সাইটো (Cyto: কোষ) + সিস (Sis: প্রক্রিয়া), মানে কোষ দ্বারা খাওয়ার প্রক্রিয়া।",
    "example": "ফ্যাগোসাইটোসিস ব্যাকটেরিয়া ধ্বংস করে।"
  },
  {
    "word": "Pinocytosis",
    "meaning": "পিনোসাইটোসিস",
    "breakdown": "পিনো (Pino: পান করা) + সাইটো (Cyto: কোষ) + সিস (Sis: প্রক্রিয়া), মানে কোষের তরল গ্রহণ।",
    "example": "পিনোসাইটোসিস কোষে পানি নেয়।"
  },
  {
    "word": "Receptor",
    "meaning": "রিসেপ্টর",
    "breakdown": "রি (Re: পুনরায়) + সেপ্টর (Ceptor: গ্রহণকারী), মানে সংকেত গ্রহণকারী।",
    "example": "রিসেপ্টর হরমোন ধরে।"
  },
  {
    "word": "Ligand",
    "meaning": "লিগ্যান্ড",
    "breakdown": "লিগ (Lig: বাঁধা) + অ্যান্ড (And: সংযোগ), মানে রিসেপ্টরের সাথে বাঁধা পদার্থ।",
    "example": "লিগ্যান্ড হরমোন হতে পারে।"
  },
  {
    "word": "Enzyme",
    "meaning": "এনজাইম",
    "breakdown": "এন (En: ভিতরে) + জাইম (Zyme: খমির), মানে প্রতিক্রিয়া দ্রুতকারী প্রোটিন।",
    "example": "এনজাইম খাদ্য পাচনে সাহায্য করে।"
  },
  {
    "word": "Substrate",
    "meaning": "সাবস্ট্রেট",
    "breakdown": "সাব (Sub: নিচে) + স্ট্রেট (Strat: স্তর), মানে এনজাইমের কাজের নিচের স্তর।",
    "example": "সাবস্ট্রেট এনজাইমের উপর কাজ করে।"
  },
  {
    "word": "Active Site",
    "meaning": "সক্রিয় স্থান",
    "breakdown": "অ্যাকটিভ (Active: সক্রিয়) + সাইট (Site: স্থান), মানে এনজাইমের কাজের স্থান।",
    "example": "সক্রিয় স্থানে সাবস্ট্রেট বাঁধে।"
  },
  {
    "word": "Catalyst",
    "meaning": "ক্যাটালিস্ট",
    "breakdown": "ক্যাটা (Cata: নিচে) + লিস্ট (List: মুক্তি), মানে প্রতিক্রিয়াকে ত্বরান্বিতকারী।",
    "example": "ক্যাটালিস্ট রাসায়নিক প্রক্রিয়া দ্রুত করে।"
  },
  {
    "word": "Coenzyme",
    "meaning": "কো-এনজাইম",
    "breakdown": "কো (Co: সহ) + এনজাইম (Enzyme: এনজাইম), মানে এনজাইমের সহকারী।",
    "example": "কো-এনজাইম ভিটামিন থেকে আসে।"
  },
  {
    "word": "Inhibitor",
    "meaning": "ইনহিবিটর",
    "breakdown": "ইন (In: ভিতরে) + হিবিট (Hibit: বাধা), মানে প্রতিক্রিয়া বাধা দেয়।",
    "example": "ইনহিবিটর এনজাইম বন্ধ করে।"
  },
  {
    "word": "Allosteric",
    "meaning": "অ্যালোস্টেরিক",
    "breakdown": "অ্যালো (Allo: অন্য) + স্টেরিক (Steric: আকৃতি), মানে অন্য আকৃতিতে কাজ করে।",
    "example": "অ্যালোস্টেরিক সাইট এনজাইম নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Feedback Inhibition",
    "meaning": "ফিডব্যাক প্রতিরোধ",
    "breakdown": "ফিডব্যাক (Feedback: পিছনে প্রতিক্রিয়া) + ইনহিবিশন (Inhibition: বাধা), মানে প্রক্রিয়ার পিছনে বাধা।",
    "example": "ফিডব্যাক প্রতিরোধ মেটাবলিজম নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Homeostasis",
    "meaning": "হোমিওস্ট্যাসিস",
    "breakdown": "হোমিও (Homeo: একই) + স্ট্যাসিস (Stasis: অবস্থা), মানে শরীরের একই অবস্থা রক্ষা।",
    "example": "হোমিওস্ট্যাসিস তাপ নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Thermoregulation",
    "meaning": "তাপ নিয়ন্ত্রণ",
    "breakdown": "থার্মো (Thermo: তাপ) + রেগুলেশন (Regulation: নিয়ন্ত্রণ), মানে তাপের নিয়ন্ত্রণ।",
    "example": "থার্মোরেগুলেশন ঘামে হয়।"
  },
  {
    "word": "Osmoregulation",
    "meaning": "ওসমোরেগুলেশন",
    "breakdown": "ওসমো (Osm: অসম্মিশ্রণ) + রেগুলেশন (Regulation: নিয়ন্ত্রণ), মানে পানি ও লবণের নিয়ন্ত্রণ।",
    "example": "ওসমোরেগুলেশন কিডনি দ্বারা হয়।"
  },
  {
    "word": "Glomerulus",
    "meaning": "গ্লোমেরুলাস",
    "breakdown": "গ্লোম (Glom: গোলক) + ইরুলাস (Erulus: ছোট), মানে কিডনির ছোট গোলক।",
    "example": "গ্লোমেরুলাস রক্ত পরিশোধ করে।"
  },
  {
    "word": "Bowman’s Capsule",
    "meaning": "বোম্যানস ক্যাপসুল",
    "breakdown": "বোম্যান (Bowman: বিজ্ঞানী) + ক্যাপসুল (Capsule: আবরণ), মানে কিডনির চিকন্ত্র আবরণ।",
    "example": "বোম্যানস ক্যাপসুল মূত্র তৈরি করে।"
  },
  {
    "word": "Loop of Henle",
    "meaning": "হেনলের লুপ",
    "breakdown": "হেনল (Henle: বিজ্ঞানী) + লুপ (Loop: লুপ), মানে কিডনির লুপাকার গঠন।",
    "example": "হেনলের লুপ পানি শোষণ করে।"
  },
  {
    "word": "Proximal Tubule",
    "meaning": "প্রক্সিমাল টিউবুল",
    "breakdown": "প্রক্সিমাল (Proximal: নিকটবর্তী) + টিউবুল (Tubule: নালী), মানে কিডনির নিকটবর্তী নালী।",
    "example": "প্রক্সিমাল টিউবুল পুষ্টি ফিরিয়ে নেয়।"
  },
  {
    "word": "Distal Tubule",
    "meaning": "ডিস্টাল টিউবুল",
    "breakdown": "ডিস্টাল (Distal: দূরবর্তী) + টিউবুল (Tubule: নালী), মানে কিডনির দূরবর্তী নালী।",
    "example": "ডিস্টাল টিউবুল লবণ নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Collecting Duct",
    "meaning": "সংগ্রহ নালী",
    "breakdown": "কলেক্টিং (Collecting: সংগ্রহ) + ডাক্ট (Duct: নালী), মানে মূত্র সংগ্রহের নালী।",
    "example": "সংগ্রহ নালী মূত্র জমা করে।"
  },
  {
    "word": "Renin-Angiotensin System",
    "meaning": "রেনিন-অ্যাঞ্জিওটেনসিন ব্যবস্থা",
    "breakdown": "রেনিন (Renin: এনজাইম) + অ্যাঞ্জিওটেনসিন (Angiotensin: হরমোন) + সিস্টেম (System: ব্যবস্থা), মানে রক্তচাপ নিয়ন্ত্রণ ব্যবস্থা।",
    "example": "রেনিন-অ্যাঞ্জিওটেনসিন ব্যবস্থা রক্তচাপ বাড়ায়।"
  },
  {
    "word": "Aldosterone",
    "meaning": "অ্যালডোস্টেরন",
    "breakdown": "অ্যালডো (Aldo: অ্যালডিহাইড) + স্টেরন (Sterone: স্টেরয়েড), মানে কিডনি দ্বারা নিয়ন্ত্রিত স্টেরয়েড হরমোন।",
    "example": "অ্যালডোস্টেরন পানি ধরে রাখে।"
  },
  {
    "word": "Antidiuretic Hormone",
    "meaning": "অ্যান্টিডিউরেটিক হরমোন",
    "breakdown": "অ্যান্টি (Anti: বিরুদ্ধ) + ডিউরেটিক (Diuretic: মূত্রবর্ধক) + হরমোন (Hormone: হরমোন), মানে মূত্র কমানোর হরমোন।",
    "example": "অ্যান্টিডিউরেটিক হরমোন পানি শোষণ বাড়ায়।"
  },
  {
    "word": "Erythropoietin",
    "meaning": "এরিথ্রোপয়েটিন",
    "breakdown": "এরিথ্রো (Erythro: লাল) + পয়েটিন (Poietin: উৎপাদন), মানে লাল রক্তকণিকা উৎপাদনকারী।",
    "example": "এরিথ্রোপয়েটিন কিডনি থেকে আসে।"
  },
  {
    "word": "Calcitonin",
    "meaning": "ক্যালসিটোনিন",
    "breakdown": "ক্যালসি (Calci: ক্যালসিয়াম) + টোনিন (Tonin: নিয়ন্ত্রণ), মানে ক্যালসিয়াম নিয়ন্ত্রক।",
    "example": "ক্যালসিটোনিন হাড়ে ক্যালসিয়াম জমা করে।"
  },
  {
    "word": "Parathyroid Hormone",
    "meaning": "প্যারাথাইরয়েড হরমোন",
    "breakdown": "প্যারা (Para: পাশে) + থাইরয়েড (Thyroid: গ্রন্থি) + হরমোন (Hormone: হরমোন), মানে থাইরয়েডের পাশের হরমোন।",
    "example": "প্যারাথাইরয়েড হরমোন ক্যালসিয়াম মুক্ত করে।"
  },
  {
    "word": "Osteoblast",
    "meaning": "ওস্টিওব্লাস্ট",
    "breakdown": "ওস্টিও (Osteo: হাড়) + ব্লাস্ট (Blast: গঠন), মানে হাড় গঠনকারী কোষ।",
    "example": "ওস্টিওব্লাস্ট হাড় বাড়ায়।"
  },
  {
    "word": "Osteoclast",
    "meaning": "ওস্টিওক্লাস্ট",
    "breakdown": "ওস্টিও (Osteo: হাড়) + ক্লাস্ট (Clast: ভাঙ্গা), মানে হাড় ভাঙার কোষ।",
    "example": "ওস্টিওক্লাস্ট হাড় পুনর্গঠন করে।"
  },
  {
    "word": "Chondrocyte",
    "meaning": "কন্ড্রোসাইট",
    "breakdown": "কন্ড্রো (Chondro: কার্টিলেজ) + সাইট (Cyte: কোষ), মানে কার্টিলেজের কোষ।",
    "example": "কন্ড্রোসাইট কার্টিলেজ তৈরি করে।"
  },
  {
    "word": "Synovial Fluid",
    "meaning": "সিনোভিয়াল তরল",
    "breakdown": "সিনোভিয়াল (Synovial: সন্ধি সংক্রান্ত) + ফ্লুইড (Fluid: তরল), মানে সন্ধির তরল।",
    "example": "সিনোভিয়াল তরল সন্ধি স্থিতিশীল করে।"
  },
  {
    "word": "Myofibril",
    "meaning": "মায়োফাইব্রিল",
    "breakdown": "মায়ো (Myo: পেশি) + ফাইব্রিল (Fibril: সূক্ষ্ম সুতো), মানে পেশির সূক্ষ্ম সুতো।",
    "example": "মায়োফাইব্রিল পেশির সংকোচনে কাজ করে।"
  },
  {
    "word": "Sarcomere",
    "meaning": "সারকোমিয়ার",
    "breakdown": "সারকো (Sarco: মাংস) + মিয়ার (Mere: অংশ), মানে পেশির মাংসী অংশ।",
    "example": "সারকোমিয়ার পেশির সংকোচন একক।"
  },
  {
    "word": "Actin",
    "meaning": "অ্যাকটিন",
    "breakdown": "অ্যাক্ট (Act: ক্রিয়া) + ইন (In: প্রোটিন), মানে পেশির ক্রিয়াকারী প্রোটিন।",
    "example": "অ্যাকটিন পেশি সংকোচনে সাহায্য করে।"
  },
  {
    "word": "Myosin",
    "meaning": "মায়োসিন",
    "breakdown": "মায়ো (Myo: পেশি) + সিন (Sin: প্রোটিন), মানে পেশির প্রধান প্রোটিন।",
    "example": "মায়োসিন পেশির শক্তি দেয়।"
  },
  {
    "word": "Troponin",
    "meaning": "ট্রোপোনিন",
    "breakdown": "ট্রোপো (Tropo: পরিবর্তন) + নিন (Nin: প্রোটিন), মানে পেশির পরিবর্তনকারী প্রোটিন।",
    "example": "ট্রোপোনিন পেশি সংকোচন নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Tropomyosin",
    "meaning": "ট্রোপোমায়োসিন",
    "breakdown": "ট্রোপো (Tropo: পরিবর্তন) + মায়ো (Myo: পেশি) + সিন (Sin: প্রোটিন), মানে পেশির পরিবর্তনকারী প্রোটিন।",
    "example": "ট্রোপোমায়োসিন অ্যাকটিনকে আবৃত করে।"
  },
  {
    "word": "Calcium Ion",
    "meaning": "ক্যালসিয়াম আয়ন",
    "breakdown": "ক্যালসিয়াম (Calcium: খনিজ) + আয়ন (Ion: চার্জযুক্ত কণা), মানে পেশি সংকোচনে ব্যবহৃত চার্জযুক্ত কণা।",
    "example": "ক্যালসিয়াম আয়ন পেশি চালায়।"
  },
  {
    "word": "Neuromuscular Junction",
    "meaning": "নিউরোমাসকুলার সংযোগ",
    "breakdown": "নিউরো (Neuro: স্নায়ু) + মাসকুলার (Muscular: পেশি) + জাংশন (Junction: সংযোগ), মানে স্নায়ু ও পেশির সংযোগস্থল।",
    "example": "নিউরোমাসকুলার সংযোগ সংকেত পাঠায়।"
  },
  {
    "word": "Acetylcholine",
    "meaning": "অ্যাসিটাইলকোলিন",
    "breakdown": "অ্যাসিটাইল (Acetyl: অ্যাসিটিক অ্যাসিড) + কোলিন (Choline: নিউরোট্রান্সমিটার), মানে স্নায়ু সংকেতকারী পদার্থ।",
    "example": "অ্যাসিটাইলকোলিন পেশি সক্রিয় করে।"
  },
  {
    "word": "Synaptic Cleft",
    "meaning": "সিন্যাপটিক ফাঁক",
    "breakdown": "সিন্যাপটিক (Synaptic: সিন্যাপস সংক্রান্ত) + ক্লেফট (Cleft: ফাঁক), মানে নিউরনের ফাঁক।",
    "example": "সিন্যাপটিক ফাঁকে সংকেত পাঠানো হয়।"
  },
  {
    "word": "Neurotransmitter",
    "meaning": "নিউরোট্রান্সমিটার",
    "breakdown": "নিউরো (Neuro: স্নায়ু) + ট্রান্স (Trans: পার) + মিটার (Mitter: প্রেরক), মানে স্নায়ু সংকেত প্রেরক।",
    "example": "নিউরোট্রান্সমিটার মস্তিষ্কে কাজ করে।"
  },
  {
    "word": "Dopamine",
    "meaning": "ডোপামিন",
    "breakdown": "ডোপা (Dopa: অ্যামিনো অ্যাসিড) + অ্যামিন (Amine: নিউরোট্রান্সমিটার), মানে আনন্দ সংকেতকারী।",
    "example": "ডোপামিন সুখের অনুভূতি দেয়।"
  },
  {
    "word": "Serotonin",
    "meaning": "সেরোটোনিন",
    "breakdown": "সেরো (Sero: সিরাম) + টোনিন (Tonin: নিয়ন্ত্রণ), মানে মানসিক স্থিতিশীলতার নিয়ন্ত্রক।",
    "example": "সেরোটোনিন মানসিক শান্তি দেয়।"
  },
  {
    "word": "Norepinephrine",
    "meaning": "নরেপিনেফ্রিন",
    "breakdown": "নর (Nor: সাধারণ) + এপিনেফ্রিন (Epinephrine: অ্যাড্রিনালিন), মানে স্ট্রেস সংকেতকারী।",
    "example": "নরেপিনেফ্রিন হৃৎস্পন্দন বাড়ায়।"
  },
  {
    "word": "Epinephrine",
    "meaning": "এপিনেফ্রিন",
    "breakdown": "এপি (Epi: উপর) + নেফ্রিন (Nephron: কিডনি), মানে অ্যাড্রিনাল গ্রন্থি থেকে আসা হরমোন।",
    "example": "এপিনেফ্রিন স্ট্রেসে কাজ করে।"
  },
  {
    "word": "Glucocorticoid",
    "meaning": "গ্লুকোকর্টিকয়েড",
    "breakdown": "গ্লুকো (Gluco: গ্লুকোজ) + কর্টিক (Cortic: কর্টেক্স) + ওয়েড (Oid: মতো), মানে গ্লুকোজ নিয়ন্ত্রক হরমোন।",
    "example": "গ্লুকোকর্টিকয়েড স্ট্রেসে বাড়ে।"
  },
  {
    "word": "Mineralocorticoid",
    "meaning": "মিনারেলোকর্টিকয়েড",
    "breakdown": "মিনারেল (Mineral: খনিজ) + কর্টিক (Cortic: কর্টেক্স) + ওয়েড (Oid: মতো), মানে লবণ নিয়ন্ত্রক হরমোন।",
    "example": "মিনারেলোকর্টিকয়েড পানি ধরে।"
  },
  {
    "word": "Thyroxine",
    "meaning": "থাইরক্সিন",
    "breakdown": "থাইর (Thyr: থাইরয়েড) + অক্সিন (Oxin: অক্সিজেনযুক্ত), মানে থাইরয়েড হরমোন।",
    "example": "থাইরক্সিন বৃদ্ধি নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Triiodothyronine",
    "meaning": "ট্রাইআইডোথাইরোনিন",
    "breakdown": "ট্রাই (Tri: তিন) + আইডো (Iodo: আইডিন) + থাইরোনিন (Thyronine: থাইরয়েড), মানে তিন আইডিনযুক্ত হরমোন।",
    "example": "ট্রাইআইডোথাইরোনিন চযাবিকা বাড়ায়।"
  },
  {
    "word": "Oxytocin",
    "meaning": "অক্সিটোসিন",
    "breakdown": "অক্সি (Oxy: দ্রুত) + টোসিন (Tocin: জন্ম), মানে জন্ম সহায়ক হরমোন।",
    "example": "অক্সিটোসিন প্রসবে সাহায্য করে।"
  },
  {
    "word": "Vasopressin",
    "meaning": "ভাসোপ্রেসিন",
    "breakdown": "ভাসো (Vaso: রক্তনালী) + প্রেসিন (Pressin: চাপ), মানে রক্তচাপ বাড়ানোর হরমোন।",
    "example": "ভাসোপ্রেসিন পানি শোষণ বাড়ায়।"
  },
  {
    "word": "Melatonin",
    "meaning": "মেলাটোনিন",
    "breakdown": "মেলা (Mela: কালো) + টোনিন (Tonin: নিয়ন্ত্রণ), মানে ঘুম নিয়ন্ত্রক।",
    "example": "মেলাটোনিন রাতে বাড়ে।"
  },
  {
    "word": "Prolactin",
    "meaning": "প্রোল্যাকটিন",
    "breakdown": "প্রো (Pro: পূর্ব) + ল্যাকটিন (Lactin: দুগ্ধ), মানে দুগ্ধ উৎপাদনের পূর্ব হরমোন।",
    "example": "প্রোল্যাকটিন দুধ তৈরি করে।"
  },
  {
    "word": "Follicle Stimulating Hormone",
    "meaning": "ফলিকল উদ্দীপক হরমোন",
    "breakdown": "ফলিকল (Follicle: ডিম্বাশয়) + স্টিমুলেটিং (Stimulating: উদ্দীপক) + হরমোন (Hormone: হরমোন), মানে ডিম্বাশয় উদ্দীপক।",
    "example": "ফলিকল উদ্দীপক হরমোন প্রজননে কাজ করে।"
  },
  {
    "word": "Luteinizing Hormone",
    "meaning": "লিউটিনাইজিং হরমোন",
    "breakdown": "লিউটিন (Lutein: হলুদ) + আইজিং (Izing: করা) + হরমোন (Hormone: হরমোন), মানে ডিম্বাণু প্রক্রিয়াকারী।",
    "example": "লিউটিনাইজিং হরমোন ডিম্বাণু মুক্ত করে।"
  },
  {
    "word": "Estrogen",
    "meaning": "এস্ট্রোজেন",
    "breakdown": "এস্ট্রা (Estra: স্টেরয়েড) + জেন (Gen: উৎপাদন), মানে মহিলা হরমোন।",
    "example": "এস্ট্রোজেন গর্ভাবস্থায় কাজ করে।"
  },
  {
    "word": "Progesterone",
    "meaning": "প্রোজেস্টেরন",
    "breakdown": "প্রো (Pro: পূর্ব) + জেস্ট (Gest: গর্ভ) + এরন (Erone: হরমোন), মানে গর্ভ ধরে রাখার হরমোন।",
    "example": "প্রোজেস্টেরন গর্ভে সাহায্য করে।"
  },
  {
    "word": "Testosterone",
    "meaning": "টেস্টোস্টেরন",
    "breakdown": "টেস্টো (Testo: টেস্টিস) + স্টেরন (Sterone: স্টেরয়েড), মানে পুরুষ হরমোন।",
    "example": "টেস্টোস্টেরন পুরুষের বৃদ্ধি নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Spermatogenesis",
    "meaning": "স্পার্মাটোজেনেসিস",
    "breakdown": "স্পার্মাটো (Spermato: শুক্রাণু) + জেনেসিস (Genesis: উৎপত্তি), মানে শুক্রাণু উৎপাদন।",
    "example": "স্পার্মাটোজেনেসিস অণ্ডকোষে হয়।"
  },
  {
    "word": "Oogenesis",
    "meaning": "ওজেনেসিস",
    "breakdown": "ওও (Ovo: ডিম্ব) + জেনেসিস (Genesis: উৎপত্তি), মানে ডিম্বাণু উৎপাদন।",
    "example": "ওজেনেসিস ডিম্বাশয়ে হয়।"
  },
  {
    "word": "Zygote",
    "meaning": "জাইগোট",
    "breakdown": "জাইগ (Zygo: যোগ) + ওট (Ote: কোষ), মানে শুক্রাণু ও ডিম্বাণুর যোগ।",
    "example": "জাইগোট গর্ভাবস্থা শুরু করে।"
  },
  {
    "word": "Blastocyst",
    "meaning": "ব্লাস্টোসিস্ট",
    "breakdown": "ব্লাস্ট (Blast: গঠন) + সিস্ট (Cyst: কোষ), মানে প্রাথমিক ভ্রূণ কোষ।",
    "example": "ব্লাস্টোসিস্ট গর্ভে লাগে।"
  },
  {
    "word": "Gastrulation",
    "meaning": "গ্যাসট্রুলেশন",
    "breakdown": "গ্যাস্ট্রো (Gastro: পেট) + লেশন (Lation: রূপান্তর), মানে ভ্রূণের পেট গঠন।",
    "example": "গ্যাসট্রুলেশন ভ্রূণের শরীর তৈরি করে।"
  },
  {
    "word": "Neurulation",
    "meaning": "নিউরুলেশন",
    "breakdown": "নিউরো (Neuro: স্নায়ু) + লেশন (Lation: রূপান্তর), মানে স্নায়ু তন্ত্রের গঠন।",
    "example": "নিউরুলেশন মস্তিষ্ক তৈরি করে।"
  },
  {
    "word": "Placenta",
    "meaning": "প্ল্যাসেন্টা",
    "breakdown": "প্ল্যাস (Plas: সমতল) + সেন্টা (Centa: সংযোগ), মানে মা ও ভ্রূণের সংযোগস্থল।",
    "example": "প্ল্যাসেন্টা পুষ্টি পরিবহন করে।"
  },
  {
    "word": "Amniotic Fluid",
    "meaning": "অ্যামনিয়টিক তরল",
    "breakdown": "অ্যামনি (Amnio: ভ্রূণ স্তর) + টিক (Tic: সংক্রান্ত) + ফ্লুইড (Fluid: তরল), মানে ভ্রূণের সুরক্ষা তরল।",
    "example": "অ্যামনিয়টিক তরল ভ্রূণকে সুরক্ষা দেয়।"
  },
  {
    "word": "Umbilical Cord",
    "meaning": "নাভি সূত্র",
    "breakdown": "আম্বিলিকাল (Umbilical: নাভি সংক্রান্ত) + কর্ড (Cord: সূত্র), মানে ভ্রূণের পুষ্টি সূত্র।",
    "example": "নাভি সূত্র মায়ের রক্ত দিতে সাহায্য করে।"
  },
  {
    "word": "Fetal Circulation",
    "meaning": "ভ্রূণ সঞ্চালন",
    "breakdown": "ফেটাল (Fetal: ভ্রূণ) + সারকুলেশন (Circulation: সঞ্চালন), মানে ভ্রূণের রক্ত প্রবাহ।",
    "example": "ভ্রূণ সঞ্চালন প্ল্যাসেন্টা দিয়ে হয়।"
  },
  {
    "word": "Ductus Arteriosus",
    "meaning": "ডাকটাস আর্টেরিওসাস",
    "breakdown": "ডাকটাস (Ductus: নালী) + আর্টেরিও (Arterio: ধমনি) + সাস (Sus: অবস্থা), মানে ভ্রূণের ধমনি নালী।",
    "example": "ডাকটাস আর্টেরিওসাস জন্মের পর বন্ধ হয়।"
  },
  {
    "word": "Foramen Ovale",
    "meaning": "ফোরামেন ওভালে",
    "breakdown": "ফোরামেন (Foramen: ফুটো) + ওভালে (Ovale: গোল), মানে হৃৎপিণ্ডের গোল ফুটো।",
    "example": "ফোরামেন ওভালে ভ্রূণে রক্ত প্রবাহ করে।"
  },
  {
    "word": "Pulmonary Circulation",
    "meaning": "ফুসফুস সঞ্চালন",
    "breakdown": "পালমোনারি (Pulmonary: ফুসফুস) + সারকুলেশন (Circulation: সঞ্চালন), মানে ফুসফুসের রক্ত প্রবাহ।",
    "example": "ফুসফুস সঞ্চালন অক্সিজেন যোগ করে।"
  },
  {
    "word": "Systemic Circulation",
    "meaning": "সিস্টেমিক সঞ্চালন",
    "breakdown": "সিস্টেমিক (Systemic: শরীরব্যাপী) + সারকুলেশন (Circulation: সঞ্চালন), মানে শরীরব্যাপী রক্ত প্রবাহ।",
    "example": "সিস্টেমিক সঞ্চালন পুষ্টি বহন করে।"
  },
  {
    "word": "Aorta",
    "meaning": "অর্টা",
    "breakdown": "অর্ট (Aort: উত্থান) + আ (A: প্রধান), মানে হৃৎপিণ্ড থেকে বড় ধমনী।",
    "example": "অর্টা শরীরে রক্ত বিতরণ করে।"
  },
  {
    "word": "Ventricle",
    "meaning": "হৃৎকোষ",
    "breakdown": "ভেন্ট্রিক (Ventric: পেট) + আল (Al: ছোট), মানে হৃৎপিণ্ডের পেটের মতো কোষ।",
    "example": "হৃৎকোষ রক্ত পাম্প করে।"
  },
  {
    "word": "Atrium",
    "meaning": "আত্রিয়াম",
    "breakdown": "আত্রি (Atri: প্রবেশ) + আম (Am: কক্ষ), মানে হৃৎপিণ্ডের প্রবেশ কক্ষ।",
    "example": "আত্রিয়াম রক্ত সংগ্রহ করে।"
  },
  {
    "word": "Myocardium",
    "meaning": "মায়োকার্ডিয়াম",
    "breakdown": "মায়ো (Myo: পেশি) + কার্ডি (Cardi: হৃৎ) + ইয়াম (Ium: কাঠামো), মানে হৃৎপিণ্ডের পেশি কাঠামো।",
    "example": "মায়োকার্ডিয়াম ধড়ফড় করে।"
  },
  {
    "word": "Pericardium",
    "meaning": "পেরিকার্ডিয়াম",
    "breakdown": "পেরি (Peri: চারপাশে) + কার্ডি (Cardi: হৃৎ) + ইয়াম (Ium: কাঠামো), মানে হৃৎপিণ্ডের চারপাশের আবরণ।",
    "example": "পেরিকার্ডিয়াম হৃৎপিণ্ড সুরক্ষিত করে।"
  },
  {
    "word": "Endocardium",
    "meaning": "এন্ডোকার্ডিয়াম",
    "breakdown": "এন্ডো (Endo: ভিতরে) + কার্ডি (Cardi: হৃৎ) + ইয়াম (Ium: কাঠামো), মানে হৃৎপিণ্ডের ভিতরের কাঠামো।",
    "example": "এন্ডোকার্ডিয়াম রক্তের সাথে সংযোগ করে।"
  },
  {
    "word": "Tricuspid Valve",
    "meaning": "ট্রাইকাসপিড ভালভ",
    "breakdown": "ট্রাই (Tri: তিন) + কাসপিড (Cusp: কোণ) + ভালভ (Valve: বন্ধনী), মানে তিন কোণের হৃৎ ভালভ।",
    "example": "ট্রাইকাসপিড ভালভ রক্ত প্রবাহ নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Mitral Valve",
    "meaning": "মিট্রাল ভালভ",
    "breakdown": "মিট্রাল (Mitral: মিটারের মতো) + ভালভ (Valve: বন্ধনী), মানে হৃৎপিণ্ডের দ্বি-কোণ ভালভ।",
    "example": "মিট্রাল ভালভ রক্ত ফিরে যাওয়া রোধ করে।"
  },
  {
    "word": "Pulmonary Artery",
    "meaning": "ফুসফুস ধমনি",
    "breakdown": "পালমোনারি (Pulmonary: ফুসফুস) + আর্টারি (Artery: ধমনি), মানে ফুসফুসে যাওয়া ধমনি।",
    "example": "ফুসফুস ধমনি অক্সিজেন-হীন রক্ত বহন করে।"
  },
  {
    "word": "Pulmonary Vein",
    "meaning": "ফুসফুস শিরা",
    "breakdown": "পালমোনারি (Pulmonary: ফুসফুস) + ভেইন (Vein: শিরা), মানে ফুসফুস থেকে আসা শিরা।",
    "example": "ফুসফুস শিরা অক্সিজেনযুক্ত রক্ত নিয়ে আসে।"
  },
  {
    "word": "Coronary Artery",
    "meaning": "করোনারি ধমনি",
    "breakdown": "করোনারি (Coronary: মুকুটের মতো) + আর্টারি (Artery: ধমনি), মানে হৃৎপিণ্ডকে ঘিরে ধমনি।",
    "example": "করোনারি ধমনি হৃৎপিণ্ডকে পুষ্টি দেয়।"
  },
  {
    "word": "Bradycardia",
    "meaning": "ব্র্যাডিকার্ডিয়া",
    "breakdown": "ব্র্যাডি (Brady: ধীর) + কার্ডি (Cardi: হৃৎ) + ইয়া (Ia: অবস্থা), মানে হৃৎস্পন্দন কম।",
    "example": "ব্র্যাডিকার্ডিয়া ক্লান্তি ডেকে আনে।"
  },
  {
    "word": "Tachycardia",
    "meaning": "টাকিকার্ডিয়া",
    "breakdown": "টাকি (Tachy: দ্রুত) + কার্ডি (Cardi: হৃৎ) + ইয়া (Ia: অবস্থা), মানে হৃৎস্পন্দন বেশি।",
    "example": "টাকিকার্ডিয়া স্ট্রেসে হয়।"
  },
  {
    "word": "Myocardial Infarction",
    "meaning": "মায়োকার্ডিয়াল ইনফার্কশন",
    "breakdown": "মায়ো (Myo: পেশি) + কার্ডি (Cardi: হৃৎ) + ইয়াল (Ial: সংক্রান্ত) + ইনফার্ক (Infarct: মৃত) + শন (Shun: প্রক্রিয়া), মানে হৃৎপিণ্ডের পেশি মৃত্যু।",
    "example": "মায়োকার্ডিয়াল ইনফার্কশন হার্ট অ্যাটাক।"
  },
  {
    "word": "Angina",
    "meaning": "অ্যাঞ্জিনা",
    "breakdown": "অ্যাঞ্জি (Angi: রক্তনালী) + ইনা (Ina: ব্যথা), মানে বুকের ব্যথা।",
    "example": "অ্যাঞ্জিনা রক্তনালী বন্ধে হয়।"
  },
  {
    "word": "Atherosclerosis",
    "meaning": "অ্যাথেরোস্ক্লেরোসিস",
    "breakdown": "অ্যাথেরো (Athero: চর্বি) + স্ক্লেরো (Sclero: কঠিন) + ওসিস (Osis: অবস্থা), মানে রক্তনালীতে চর্বি জমা।",
    "example": "অ্যাথেরোস্ক্লেরোসিস হৃদরোগ ডেকে আনে।"
  },
  {
    "word": "Thrombosis",
    "meaning": "থ্রম্বোসিস",
    "breakdown": "থ্রম্বো (Thrombo: জমাট) + ওসিস (Osis: অবস্থা), মানে রক্ত জমাট বাঁধা।",
    "example": "থ্রম্বোসিস রক্তনালী বন্ধ করে।"
  },
  {
    "word": "Embolism",
    "meaning": "এম্বোলিজম",
    "breakdown": "এম্বো (Embo: বস্তু) + লিজম (Lism: প্রক্রিয়া), মানে রক্তনালীতে বাধা সৃষ্টি।",
    "example": "এম্বোলিজম হার্ট অ্যাটাকে ডেকে আনতে পারে।"
  },
  {
    "word": "Hemorrhage",
    "meaning": "হেমোরেজ",
    "breakdown": "হেমো (Hemo: রক্ত) + রেজ (Rhage: প্রবাহ), মানে রক্ত প্রবাহ বা রক্তক্ষরণ।",
    "example": "হেমোরেজ আঘাতে হয়।"
  },
  {
    "word": "Anemia",
    "meaning": "অ্যানিমিয়া",
    "breakdown": "অ্যান (An: অভাব) + ইমিয়া (Emia: রক্ত), মানে রক্তের অভাব।",
    "example": "অ্যানিমিয়া ক্লান্তি সৃষ্টি করে।"
  },
  {
    "word": "Leukemia",
    "meaning": "লিউকেমিয়া",
    "breakdown": "লিউকো (Leuko: সাদা) + ইমিয়া (Emia: রক্ত), মানে সাদা রক্তকণিকার বৃদ্ধি।",
    "example": "লিউকেমিয়া ক্যান্সারের একটি রূপ।"
  },
  {
    "word": "Thrombocyte",
    "meaning": "থ্রম্বোসাইট",
    "breakdown": "থ্রম্বো (Thrombo: জমাট) + সাইট (Cyte: কোষ), মানে রক্ত জমাট বাঁধার কোষ।",
    "example": "থ্রম্বোসাইট রক্তস্রাব থামায়।"
  },
  {
    "word": "Erythrocyte",
    "meaning": "এরিথ্রোসাইট",
    "breakdown": "এরিথ্রো (Erythro: লাল) + সাইট (Cyte: কোষ), মানে লাল রক্তকণিকা।",
    "example": "এরিথ্রোসাইট অক্সিজেন বহন করে।"
  },
  {
    "word": "Leukocyte",
    "meaning": "লিউকোসাইট",
    "breakdown": "লিউকো (Leuko: সাদা) + সাইট (Cyte: কোষ), মানে সাদা রক্তকণিকা।",
    "example": "লিউকোসাইট রোগ প্রতিরোধ করে।"
  },
  {
    "word": "Plasma",
    "meaning": "প্লাজমা",
    "breakdown": "প্লাস (Plas: তরল) + মা (Ma: মাধ্যম), মানে রক্তের তরল অংশ।",
    "example": "প্লাজমা পুষ্টি বহন করে।"
  },
  {
    "word": "Serum",
    "meaning": "সিরাম",
    "breakdown": "সের (Ser: তরল) + আম (Um: অংশ), মানে রক্তের তরল ভাগ।",
    "example": "সিরাম টিকায় ব্যবহৃত হয়।"
  },
  {
    "word": "Fibrin",
    "meaning": "ফাইব্রিন",
    "breakdown": "ফাইব্র (Fibr: সুতো) + ইন (In: প্রোটিন), মানে রক্ত জমাটের সুতো।",
    "example": "ফাইব্রিন রক্তস্রাব থামায়।"
  },
  {
    "word": "Albumin",
    "meaning": "অ্যালবুমিন",
    "breakdown": "অ্যালব (Alb: সাদা) + উমিন (Umin: প্রোটিন), মানে রক্তে থাকা সাদা প্রোটিন।",
    "example": "অ্যালবুমিন পানি ভরে রাখে।"
  },
  {
    "word": "Globulin",
    "meaning": "গ্লোবুলিন",
    "breakdown": "গ্লোব (Glob: গোল) + উলিন (Ulin: প্রোটিন), মানে গোলাকার প্রোটিন।",
    "example": "গ্লোবুলিন প্রতিরক্ষায় কাজ করে।"
  },
  {
    "word": "Immunoglobulin",
    "meaning": "ইমিউনোগ্লোবুলিন",
    "breakdown": "ইমিউনো (Immuno: প্রতিরক্ষা) + গ্লোবুলিন (Globulin: প্রোটিন), মানে প্রতিরক্ষা প্রোটিন।",
    "example": "ইমিউনোগ্লোবুলিন অ্যান্টিবডি হিসেবে কাজ করে।"
  },
  {
    "word": "Antibody",
    "meaning": "অ্যান্টিবডি",
    "breakdown": "অ্যান্টি (Anti: বিরুদ্ধ) + বডি (Body: শরীর), মানে রোগ বিরোধী।",
    "example": "অ্যান্টিবডি ভাইরাস ধ্বংস করে।"
  },
  {
    "word": "Antigen",
    "meaning": "অ্যান্টিজেন",
    "breakdown": "অ্যান্টি (Anti: বিরুদ্ধ) + জেন (Gen: উৎপাদন), মানে প্রতিরক্ষা উৎপাদক।",
    "example": "অ্যান্টিজেন টিকায় থাকে।"
  },
  {
    "word": "Lymphocyte",
    "meaning": "লিম্ফোসাইট",
    "breakdown": "লিম্ফো (Lympho: লিম্ফ) + সাইট (Cyte: কোষ), মানে লিম্ফ কোষ।",
    "example": "লিম্ফোসাইট প্রতিরক্ষায় সাহায্য করে।"
  },
  {
    "word": "Macrophage",
    "meaning": "ম্যাক্রোফেজ",
    "breakdown": "ম্যাক্রো (Macro: বড়) + ফেজ (Phage: খাওয়া), মানে বড় খাওয়ার কোষ।",
    "example": "ম্যাক্রোফেজ ব্যাকটেরিয়া খায়।"
  },
  {
    "word": "Neutrophil",
    "meaning": "নিউট্রোফিল",
    "breakdown": "নিউট্রো (Neutro: নিরপেক্ষ) + ফিল (Phil: প্রেম), মানে নিরপেক্ষ কোষ।",
    "example": "নিউট্রোফিল সংক্রমণ রোধ করে।"
  },
  {
    "word": "Eosinophil",
    "meaning": "ইওসিনোফিল",
    "breakdown": "ইওসিন (Eosino: গোলাপী) + ফিল (Phil: প্রেম), মানে গোলাপী কোষ।",
    "example": "ইওসিনোফিল অ্যালার্জিতে কাজ করে।"
  },
  {
    "word": "Basophil",
    "meaning": "বেসোফিল",
    "breakdown": "বেসো (Baso: ভিতরে) + ফিল (Phil: প্রেম), মানে ভিতরে প্রবেশকারী কোষ।",
    "example": "বেসোফিল অ্যালার্জি প্রতিক্রিয়ায় কাজ করে।"
  },
  {
    "word": "Thymus",
    "meaning": "থাইমাস",
    "breakdown": "থাই (Thy: গ্রন্থি) + মাস (Mus: ছোট), মানে প্রতিরক্ষা গ্রন্থি।",
    "example": "থাইমাস T-কোষ তৈরি করে।"
  },
  {
    "word": "Spleen",
    "meaning": "স্প্লিন",
    "breakdown": "স্প্ল (Spl: ছড়ানো) + ইন (In: অংশ), মানে রক্ত পরিশোধক।",
    "example": "স্প্লিন পুরানো রক্তকণিকা ধ্বংস করে।"
  },
  {
    "word": "Lymph Node",
    "meaning": "লিম্ফ নোড",
    "breakdown": "লিম্ফ (Lymph: লিম্ফ) + নোড (Node: গ্রন্থি), মানে লিম্ফ গ্রন্থি।",
    "example": "লিম্ফ নোড প্রতিরক্ষা বাড়ায়।"
  },
  {
    "word": "Tonsil",
    "meaning": "টনসিল",
    "breakdown": "টন (Ton: গলা) + সিল (Sil: সংযোগ), মানে গলার প্রতিরক্ষা কোষ।",
    "example": "টনসিল সংক্রমণ রোধ করে।"
  },
  {
    "word": "Peyer’s Patches",
    "meaning": "পেয়ার্স প্যাচেস",
    "breakdown": "পেয়ার্স (Peyer: বিজ্ঞানী) + প্যাচেস (Patches: দাগ), মানে আঁতের প্রতিরক্ষা দাগ।",
    "example": "পেয়ার্স প্যাচেস ব্যাকটেরিয়া ধ্বংস করে।"
  },
  {
    "word": "Mucosa",
    "meaning": "মিউকোসা",
    "breakdown": "মিউক (Muc: শ্লৈষ্মিক) + ওসা (Osa: স্তর), মানে শ্লৈষ্মিক স্তর।",
    "example": "মিউকোসা পেটে সুরক্ষা দেয়।"
  },
  {
    "word": "Gastrointestinal",
    "meaning": "গ্যাস্ট্রোইনটেস্টাইনাল",
    "breakdown": "গ্যাস্ট্রো (Gastro: পেট) + ইনটেস্টাইন (Intestine: আঁত) + আল (Al: সংক্রান্ত), মানে পেট ও আঁতের সংক্রান্ত।",
    "example": "গ্যাস্ট্রোইনটেস্টাইনাল ব্যবস্থা খাদ্য পায়।"
  },
  {
    "word": "Esophagus",
    "meaning": "ইসোফ্যাগাস",
    "breakdown": "ইসো (Iso: সমান) + ফ্যাগাস (Phagus: খাওয়া), মানে খাদ্য নালী।",
    "example": "ইসোফ্যাগাস খাদ্য পেটে নিয়ে যায়।"
  },
  {
    "word": "Stomach",
    "meaning": "পেট",
    "breakdown": "স্টো (Sto: ধরা) + মাক (Mach: মাংস), মানে খাদ্য ধরে রাখা অংশ।",
    "example": "পেট খাদ্য পচন করে।"
  },
  {
    "word": "Gastric Juice",
    "meaning": "গ্যাস্ট্রিক রস",
    "breakdown": "গ্যাস্ট্রিক (Gastric: পেটের) + জুস (Juice: রস), মানে পেটের রস।",
    "example": "গ্যাস্ট্রিক রস প্রোটিন ভাঙে।"
  },
  {
    "word": "Pepsin",
    "meaning": "পেপসিন",
    "breakdown": "পেপ (Pep: পাচন) + সিন (Sin: এনজাইম), মানে পেটের এনজাইম।",
    "example": "পেপসিন প্রোটিন পচন করে।"
  },
  {
    "word": "Hydrochloric Acid",
    "meaning": "হাইড্রোক্লোরিক অ্যাসিড",
    "breakdown": "হাইড্রো (Hydro: পানি) + ক্লোরিক (Chloric: ক্লোরিন) + অ্যাসিড (Acid: অ্যাসিড), মানে পেটের অ্যাসিড।",
    "example": "হাইড্রোক্লোরিক অ্যাসিড জীবাণু মারে।"
  },
  {
    "word": "Duodenum",
    "meaning": "ডিউডেনাম",
    "breakdown": "ডিউও (Duo: দুই) + ডেনাম (Denum: আঁতের অংশ), মানে দ্বিতীয় আঁতের অংশ।",
    "example": "ডিউডেনাম খাদ্য মিশ্রণ করে।"
  },
  {
    "word": "Jejunum",
    "meaning": "জেজুনাম",
    "breakdown": "জেজু (Jeju: খালি) + নাম (Num: অংশ), মানে মাঝের আঁতের অংশ।",
    "example": "জেজুনাম পুষ্টি শোষণ করে।"
  },
  {
    "word": "Ileum",
    "meaning": "আইলিয়াম",
    "breakdown": "আইল (Ile: শেষ) + ইয়াম (Ium: অংশ), মানে ছোট আঁতের শেষ অংশ।",
    "example": "আইলিয়াম ভিটামিন শোষণ করে।"
  },
  {
    "word": "Cecum",
    "meaning": "সিসাম",
    "breakdown": "সি (Ce: ছোট) + কাম (Cum: বাক্স), মানে বড় আঁতের শুরু।",
    "example": "সিসাম খাদ্য সংরক্ষণ করে।"
  },
  {
    "word": "Colon",
    "meaning": "কোলন",
    "breakdown": "কোল (Col: বড়) + অন (On: অংশ), মানে বড় আঁতের অংশ।",
    "example": "কোলন পানি শোষণ করে।"
  },
  {
    "word": "Rectum",
    "meaning": "রেক্টাম",
    "breakdown": "রেক (Rect: সরাসরি) + টাম (Tam: স্থান), মানে সরাসরি মল নির্গমন স্থান।",
    "example": "রেক্টাম মল সংরক্ষণ করে।"
  },
  {
    "word": "Anus",
    "meaning": "অ্যানাস",
    "breakdown": "অ্যান (An: শেষ) + আস (Us: প্রান্ত), মানে মল নির্গমন প্রান্ত।",
    "example": "অ্যানাস মল বের করে।"
  },
  {
    "word": "Bile",
    "meaning": "পিত্ত",
    "breakdown": "বাইল (Bile: হলুদ), মানে হজমে সাহায্যকারী তরল।",
    "example": "পিত্ত চর্বি ভাঙে।"
  },
  {
    "word": "Liver",
    "meaning": "যকৃত",
    "breakdown": "লিভ (Liv: জীবন) + আর (Er: অংশ), মানে জীবনের অংশ।",
    "example": "যকৃত পিত্ত তৈরি করে।"
  },
  {
    "word": "Gallbladder",
    "meaning": "পিত্তথলি",
    "breakdown": "গাল (Gall: পিত্ত) + ব্ল্যাডার (Bladder: থলি), মানে পিত্ত সংরক্ষণ থলি।",
    "example": "পিত্তথলি পিত্ত সঞ্চয় করে।"
  },
  {
    "word": "Pancreas",
    "meaning": "প্যানক্রিয়াস",
    "breakdown": "প্যান (Pan: সব) + ক্রিয়াস (Creas: মাংস), মানে সব প্রকার এনজাইম তৈরি করা অংশ।",
    "example": "প্যানক্রিয়াস ইনসুলিন তৈরি করে।"
  },
  {
    "word": "Insulin",
    "meaning": "ইনসুলিন",
    "breakdown": "ইন (In: ভিতরে) + সুলিন (Sulin: চিনি), মানে চিনি নিয়ন্ত্রক।",
    "example": "ইনসুলিন ডায়াবেটিস নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Glucagon",
    "meaning": "গ্লুকাগন",
    "breakdown": "গ্লুকো (Gluco: গ্লুকোজ) + অ্যাগন (Agon: বৃদ্ধি), মানে গ্লুকোজ বাড়ানোর হরমোন।",
    "example": "গ্লুকাগন রক্তে চিনি বাড়ায়।"
  },
  {
    "word": "Amylase",
    "meaning": "অ্যামিলেজ",
    "breakdown": "অ্যামিল (Amyl: শর্করা) + এজ (Ase: এনজাইম), মানে শর্করা ভাঙার এনজাইম।",
    "example": "অ্যামিলেজ কার্বোহাইড্রেট পচন করে।"
  },
  {
    "word": "Lipase",
    "meaning": "লিপেজ",
    "breakdown": "লিপ (Lip: চর্বি) + এজ (Ase: এনজাইম), মানে চর্বি ভাঙার এনজাইম।",
    "example": "লিপেজ চর্বি পচন করে।"
  },
  {
    "word": "Trypsin",
    "meaning": "ট্রিপসিন",
    "breakdown": "ট্রি (Tri: তিন) + পসিন (Psin: প্রোটিন), মানে প্রোটিন ভাঙার এনজাইম।",
    "example": "ট্রিপসিন প্রোটিন পচন করে।"
  },
  {
    "word": "Chyme",
    "meaning": "কাইম",
    "breakdown": "কাই (Chy: জলীয়) + ম (Me: মিশ্রণ), মানে পেটের খাদ্য মিশ্রণ।",
    "example": "কাইম ছোট আঁতে যায়।"
  },
  {
    "word": "Bolus",
    "meaning": "বোলাস",
    "breakdown": "বোল (Bol: গোল) + আস (Us: অংশ), মানে গোলাকার খাদ্য।",
    "example": "বোলাস গলা দিয়ে নামে।"
  },
  {
    "word": "Peristalsis",
    "meaning": "পেরিস্টালসিস",
    "breakdown": "পেরি (Peri: চারপাশে) + স্টাল (Stal: চাপ) + সিস (Sis: প্রক্রিয়া), মানে খাদ্য চাপার প্রক্রিয়া।",
    "example": "পেরিস্টালসিস খাদ্য সরায়।"
  },
  {
    "word": "Saliva",
    "meaning": "শ্লেষ্মা",
    "breakdown": "সাল (Sal: লালন) + ইভা (Iva: প্রবাহ), মানে মুখের তরল।",
    "example": "শ্লেষ্মা খাদ্য ভিজায়।"
  },
  {
    "word": "Pharynx",
    "meaning": "ফ্যারিনক্স",
    "breakdown": "ফ্যার (Phar: গলা) + ইংক্স (Inx: সংযোগ), মানে গলার সংযোগস্থল।",
    "example": "ফ্যারিনক্স খাদ্য ও বায়ু পথে যায়।"
  },
  {
    "word": "Larynx",
    "meaning": "ল্যারিঙ্ক্স",
    "breakdown": "ল্যার (Lar: গলা) + ইংক্স (Inx: সংযোগ), মানে কণ্ঠনালী।",
    "example": "ল্যারিঙ্ক্স কণ্ঠস্বর তৈরি করে।"
  },
  {
    "word": "Trachea",
    "meaning": "ট্রাকিয়া",
    "breakdown": "ট্রাক (Trach: শ্বাস) + ইয়া (Ia: নালী), মানে শ্বাস নালী।",
    "example": "ট্রাকিয়া বায়ু পরিবহন করে।"
  },
  {
    "word": "Bronchus",
    "meaning": "ব্রংকাস",
    "breakdown": "ব্রংক (Bronch: শ্বাস) + আস (Us: অংশ), মানে ফুসফুসের শাখা।",
    "example": "ব্রংকাস বায়ু প্রবাহ করে।"
  },
  {
    "word": "Alveoli",
    "meaning": "অ্যালভিওলি",
    "breakdown": "অ্যালভ (Alve: ছোট থলি) + ওলি (Oli: বহু), মানে ছোট থলির স্তর।",
    "example": "অ্যালভিওলি অক্সিজেন শোষণ করে।"
  },
  {
    "word": "Diaphragm",
    "meaning": "ডায়াফ্রাম",
    "breakdown": "ডায়া (Dia: মাঝখান) + ফ্রাম (Fram: দেয়াল), মানে শ্বাসের দেয়াল।",
    "example": "ডায়াফ্রাম শ্বাস নিতে সাহায্য করে।"
  },
  {
    "word": "Pleura",
    "meaning": "প্লিউরা",
    "breakdown": "প্লি (Pli: পাশ) + ইউরা (Ura: আবরণ), মানে ফুসফুসের আবরণ।",
    "example": "প্লিউরা ফুসফুস সুরক্ষিত করে।"
  },
  {
    "word": "Hemoglobin Saturation",
    "meaning": "হিমোগ্লোবিন পরিপূর্ণতা",
    "breakdown": "হিমোগ্লোবিন (Hemoglobin: রক্ত প্রোটিন) + স্যাচুরেশন (Saturation: পরিপূর্ণতা), মানে অক্সিজেন ভর।",
    "example": "হিমোগ্লোবিন পরিপূর্ণতা ফুসফুসে বাড়ে।"
  },
  {
    "word": "Respiration",
    "meaning": "শ্বাস-প্রশ্বাস",
    "breakdown": "রে (Re: পুনরায়) + স্পির (Spir: শ্বাস), মানে শ্বাস নেওয়া।",
    "example": "শ্বাস-প্রশ্বাস অক্সিজেন দেয়।"
  },
  {
    "word": "Ventilation",
    "meaning": "বায়ু প্রবাহ",
    "breakdown": "ভেন্ট (Vent: বাতাস) + এশন (Ation: প্রক্রিয়া), মানে বায়ু প্রবাহণ।",
    "example": "বায়ু প্রবাহ ফুসফুসে হয়।"
  },
  {
    "word": "Hypoxia",
    "meaning": "হাইপোক্সিয়া",
    "breakdown": "হাইপো (Hypo: কম) + অক্সিয়া (Oxia: অক্সিজেন), মানে অক্সিজেনের অভাব।",
    "example": "হাইপোক্সিয়া শ্বাসকষ্ট ডেকে আনে।"
  },
  {
    "word": "Hypercapnia",
    "meaning": "হাইপারক্যাপনিয়া",
    "breakdown": "হাইপার (Hyper: বেশি) + ক্যাপন (Capn: কার্বন ডাইঅক্সাইড) + ইয়া (Ia: অবস্থা), মানে কার্বন ডাইঅক্সাইড বেশি।",
    "example": "হাইপারক্যাপনিয়া শ্বাস বন্ধ করে।"
  },
  {
    "word": "Asthma",
    "meaning": "অ্যাস্থমা",
    "breakdown": "অ্যাস (Asth: শ্বাস) + মা (Ma: সমস্যা), মানে শ্বাসের সমস্যা।",
    "example": "অ্যাস্থমা হাঁপানি ডেকে আনে।"
  },
  {
    "word": "Bronchitis",
    "meaning": "ব্রংকাইটিস",
    "breakdown": "ব্রংক (Bronch: শ্বাস) + আইটিস (Itis: সংক্রমণ), মানে শ্বাসনালী সংক্রমণ।",
    "example": "ব্রংকাইটিস কাশি করে।"
  },
  {
    "word": "Pneumonia",
    "meaning": "নিউমোনিয়া",
    "breakdown": "নিউমো (Pneumo: ফুসফুস) + ইয়া (Ia: সংক্রমণ), মানে ফুসফুস সংক্রমণ।",
    "example": "নিউমোনিয়া জ্বর ডেকে আনে।"
  },
  {
    "word": "Tuberculosis",
    "meaning": "টিউবারকুলোসিস",
    "breakdown": "টিউবার (Tuberc: গোটা) + কুলো (Culo: ছোট) + ওসিস (Osis: রোগ), মানে ফুসফুসের গোটা রোগ।",
    "example": "টিউবারকুলোসিস সংক্রামক।"
  },
  {
    "word": "Emphysema",
    "meaning": "এমফিসেমা",
    "breakdown": "এম (Em: ভিতরে) + ফিস (Phis: ফোলা) + এমা (Ema: অবস্থা), মানে ফুসফুস ফোলানো।",
    "example": "এমফিসেমা শ্বাসকষ্ট করে।"
  },
  {
    "word": "Cilia",
    "meaning": "সিলিয়া",
    "breakdown": "সিল (Cil: ছোট চুল) + ইয়া (Ia: বহু), মানে ছোট চুলের স্তর।",
    "example": "সিলিয়া ধুলো বের করে।"
  },
  {
    "word": "Surfactant",
    "meaning": "সারফ্যাকট্যান্ট",
    "breakdown": "সার (Sur: উপর) + ফ্যাক (Fact: তৈরি) + ট্যান্ট (Tant: এজেন্ট), মানে ফুসফুসের তৈরি এজেন্ট।",
    "example": "সারফ্যাকট্যান্ট ফুসফুস খোলে।"
  },
  {
    "word": "Glottis",
    "meaning": "গ্লটিস",
    "breakdown": "গ্লো (Glo: গলা) + টিস (Tis: প্রান্ত), মানে গলার প্রান্ত।",
    "example": "গ্লটিস শ্বাস নিয়ন্ত্রণ করে।"
  },
  {
    "word": "Epiglottis",
    "meaning": "এপিগ্লটিস",
    "breakdown": "এপি (Epi: উপর) + গ্লটিস (Glottis: গলা), মানে গলার উপরের প্রান্ত।",
    "example": "এপিগ্লটিস খাদ্য পথ রক্ষা করে।"
  },
  {
    "word": "Nasal Cavity",
    "meaning": "নাকের গহ্বর",
    "breakdown": "নাসাল (Nasal: নাক) + ক্যাভিটি (Cavity: গহ্বর), মানে নাকের গহ্বর।",
    "example": "নাকের গহ্বর বায়ু ফিল্টার করে।"
  },
  {
    "word": "Phrenic Nerve",
    "meaning": "ফ্রেনিক স্নায়ু",
    "breakdown": "ফ্রেন (Phren: ডায়াফ্রাম) + ইক (Ic: সংক্রান্ত) + নার্ভ (Nerve: স্নায়ু), মানে ডায়াফ্রামের স্নায়ু।",
    "example": "ফ্রেনিক স্নায়ু শ্বাস চালায়।"
  },
  {
    "word": "Intercostal Muscle",
    "meaning": "ইন্টারকোস্টাল পেশি",
    "breakdown": "ইন্টার (Inter: মাঝে) + কোস্টাল (Costal: পাঁজর) + মাসকল (Muscle: পেশি), মানে পাঁজরের মাঝের পেশি।",
    "example": "ইন্টারকোস্টাল পেশি শ্বাসে সাহায্য করে।"
  },
  {
    "word": "Tidal Volume",
    "meaning": "টাইডাল ভলিউম",
    "breakdown": "টাইডাল (Tidal: স্রোত) + ভলিউম (Volume: পরিমাণ), মানে শ্বাসের স্বাভাবিক পরিমাণ।",
    "example": "টাইডাল ভলিউম শ্বাস গভীরতা নির্ধারণ করে।"
  },
  {
    "word": "Residual Volume",
    "meaning": "রেসিডুয়াল ভলিউম",
    "breakdown": "রেসিডুয়াল (Residual: অবশিষ্ট) + ভলিউম (Volume: পরিমাণ), মানে ফুসফুসে অবশিষ্ট বায়ু।",
    "example": "রেসিডুয়াল ভলিউম ফুসফুসে থাকে।"
  },
  {
    "word": "Vital Capacity",
    "meaning": "ভাইটাল ক্যাপাসিটি",
    "breakdown": "ভাইটাল (Vital: জীবন) + ক্যাপাসিটি (Capacity: ধারণ ক্ষমতা), মানে শ্বাসের সর্বোচ্চ ধারণ।",
    "example": "ভাইটাল ক্যাপাসিটি ফুসফুসের শক্তি নির্ধারণ করে।"
  },
  {
    "word": "Inspiration",
    "meaning": "অনুপ্রেরণা",
    "breakdown": "ইন (In: ভিতরে) + স্পির (Spir: শ্বাস), মানে শ্বাস গ্রহণ।",
    "example": "অনুপ্রেরণা ফুসফুসে বায়ু নেয়।"
  },
  {
    "word": "Expiration",
    "meaning": "নিঃশ্বাস",
    "breakdown": "এক্স (Ex: বাইরে) + স্পির (Spir: শ্বাস), মানে শ্বাস বের করা।",
    "example": "নিঃশ্বাস কার্বন ডাইঅক্সাইড ফেলে।"
  },
  {
    "word": "Pulmonary Edema",
    "meaning": "ফুসফুসের ফোলা",
    "breakdown": "পালমোনারি (Pulmonary: ফুসফুস) + এডিমা (Edema: ফোলা), মানে ফুসফুসে পানি জমা।",
    "example": "ফুসফুসের ফোলা শ্বাসকষ্ট করে।"
  },
  {
    "word": "Hemoptysis",
    "meaning": "হিমোপটিসিস",
    "breakdown": "হিমো (Hemo: রক্ত) + পটিস (Ptysis: উদগিরণ), মানে রক্ত উগরা।",
    "example": "হিমোপটিসিস ফুসফুসের রোগে হয়।"
  },
  {
    "word": "Cough Reflex",
    "meaning": "কাশির প্রতিক্রিয়া",
    "breakdown": "কাফ (Cough: কাশি) + রিফ্লেক্স (Reflex: প্রতিক্রিয়া), মানে কাশির প্রতিক্রিয়া।",
    "example": "কাশির প্রতিক্রিয়া ধুলো বের করে।"
  },
  {
    word: "Homo sapiens",
    meaning: "মানুষের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Homo (মানুষ) + Species: sapiens (বুদ্ধিমান)",
    example: "Homo sapiens হলো পৃথিবীর একমাত্র ভাষা-ব্যবহারকারী প্রজাতি।"
  },
  {
    word: "Oryza sativa",
    meaning: "ধানের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Oryza (ধান) + Species: sativa (চাষযোগ্য)",
    example: "বাংলাদেশের প্রধান খাদ্যশস্য Oryza sativa।"
  },
  {
    word: "Triticum aestivum",
    meaning: "গমের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Triticum (গম) + Species: aestivum (গ্রীষ্মকালীন)",
    example: "Triticum aestivum থেকে ময়দা প্রস্তুত হয়।"
  },
  {
    word: "Zea mays",
    meaning: "ভুট্টার বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Zea (শস্যজাতীয়) + Species: mays (ভুট্টা)",
    example: "Zea mays পপকর্ন তৈরিতে ব্যবহৃত হয়।"
  },
  {
    word: "Allium cepa",
    meaning: "পেঁয়াজের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Allium (লসুন জাতীয় উদ্ভিদ) + Species: cepa (পেঁয়াজ)",
    example: "Allium cepa রান্নায় ব্যবহৃত একটি গুরুত্বপূর্ণ উপাদান।"
  },
  {
    word: "Allium sativum",
    meaning: "রসুনের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Allium (লসুন জাতীয়) + Species: sativum (চাষযোগ্য)",
    example: "Allium sativum-এ অ্যান্টিব্যাকটেরিয়াল উপাদান থাকে।"
  },
  {
    word: "Mangifera indica",
    meaning: "আমের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Mangifera (আম জাতীয়) + Species: indica (ভারতীয়)",
    example: "Mangifera indica গ্রীষ্মকালীন ফল।"
  },
  {
    word: "Cocos nucifera",
    meaning: "নারিকেলের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Cocos (নারিকেল গাছ) + Species: nucifera (বাদাম বহনকারী)",
    example: "Cocos nucifera-র পানি পানের যোগ্য।"
  },
  {
    word: "Musa paradisiaca",
    meaning: "কলা গাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Musa (কলা) + Species: paradisiaca (স্বর্গীয়)",
    example: "Musa paradisiaca বাংলাদেশের জনপ্রিয় ফল।"
  },
  {
    word: "Arachis hypogaea",
    meaning: "বাদামের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Arachis (বাদাম জাতীয়) + Species: hypogaea (মাটির নিচে জন্মে)",
    example: "Arachis hypogaea থেকে তেল উৎপাদন হয়।"
  },
  {
    word: "Azadirachta indica",
    meaning: "নিম গাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Azadirachta (তিতকুটে গাছ) + Species: indica (ভারতীয়)",
    example: "Azadirachta indica-র পাতা ঔষধে ব্যবহৃত হয়।"
  },
  {
    word: "Ocimum sanctum",
    meaning: "তুলসী গাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Ocimum (তুলসী) + Species: sanctum (পবিত্র)",
    example: "Ocimum sanctum ধর্মীয় ও ঔষধি কাজে ব্যবহৃত হয়।"
  },
  {
    word: "Eucalyptus globulus",
    meaning: "ইউক্যালিপটাস গাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Eucalyptus (সুগন্ধযুক্ত গাছ) + Species: globulus (গোলাকার ফল)",
    example: "Eucalyptus globulus-এর পাতা কফ উপশমে ব্যবহৃত।"
  },
  {
    word: "Urtica dioica",
    meaning: "বিছুটি গাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Urtica (জ্বালাদার গাছ) + Species: dioica (পুরুষ-মহিলা আলাদা)",
    example: "Urtica dioica স্পর্শ করলে চুলকানি হয়।"
  },
  {
    word: "Acridotheres tristis",
    meaning: "শালিক পাখির বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Acridotheres (ঘাসফড়িংভোজী) + Species: tristis (গম্ভীর রঙের)",
    example: "Acridotheres tristis শহরাঞ্চলে বেশি দেখা যায়।"
  },
  {
    word: "Corvus splendens",
    meaning: "কাকের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Corvus (কাক) + Species: splendens (ঝকঝকে রঙের)",
    example: "Corvus splendens খুব বুদ্ধিমান পাখি।"
  },
  {
    word: "Rana tigrina",
    meaning: "ব্যাঙের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Rana (ব্যাঙ) + Species: tigrina (বাঘের মতো ছাপযুক্ত)",
    example: "Rana tigrina প্রধানত জলজ পরিবেশে থাকে।"
  },
  {
    word: "Felis domestica",
    meaning: "বিড়ালের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Felis (বিড়াল জাতীয়) + Species: domestica (গৃহপালিত)",
    example: "Felis domestica খুব জনপ্রিয় পোষা প্রাণী।"
  },
  {
    word: "Canis familiaris",
    meaning: "কুকুরের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Canis (কুকুর) + Species: familiaris (ঘরোয়া)",
    example: "Canis familiaris মানুষের বিশ্বস্ত বন্ধু।"
  },
  {
    word: "Bos indicus",
    meaning: "দেশি গরুর বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Bos (গরু) + Species: indicus (ভারতীয়)",
    example: "Bos indicus গ্রামীণ চাষে ব্যবহৃত হয়।"
  },
  {
    word: "Panthera tigris",
    meaning: "বাঘের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Panthera (বড় বিড়াল জাতীয়) + Species: tigris (বাঘ)",
    example: "Panthera tigris বাংলাদেশের জাতীয় প্রাণী।"
  },
  {
    word: "Panthera leo",
    meaning: "সিংহের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Panthera (বড় বিড়াল জাতীয়) + Species: leo (সিংহ)",
    example: "Panthera leo আফ্রিকায় বসবাস করে।"
  },
  {
    word: "Elephas maximus",
    meaning: "এশিয়ান হাতির বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Elephas (হাতি) + Species: maximus (বৃহৎ)",
    example: "Elephas maximus গোষ্ঠী করে চলে।"
  },
  {
    word: "Apis mellifera",
    meaning: "মৌমাছির বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Apis (মৌমাছি) + Species: mellifera (মধু বহনকারী)",
    example: "Apis mellifera মধু তৈরি করে।"
  },
  {
    word: "Anopheles gambiae",
    meaning: "ম্যালেরিয়া বাহক মশার বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Anopheles (মশা) + Species: gambiae (বিশেষ প্রজাতি)",
    example: "Anopheles gambiae ম্যালেরিয়ার জীবাণু বহন করে।"
  },
  {
    word: "Culex pipiens",
    meaning: "সাধারণ মশার বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Culex (মশা) + Species: pipiens (গুঞ্জনকারী)",
    example: "Culex pipiens ডেঙ্গু বা ম্যালেরিয়া বহন করে না।"
  },
  {
    word: "Pila globosa",
    meaning: "সামুদ্রিক শামুকের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Pila (শামুক) + Species: globosa (গোলাকার)",
    example: "Pila globosa জলজ পরিবেশে থাকে।"
  },
  {
    word: "Labeo rohita",
    meaning: "রুই মাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Labeo (মাছ) + Species: rohita (রুই)",
    example: "Labeo rohita বাংলাদেশে জনপ্রিয় মাছ।"
  },
  {
    word: "Catla catla",
    meaning: "কাতলা মাছের বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Catla (কাতলা) + Species: catla (একই)",
    example: "Catla catla বড় আকৃতির মাছ।"
  },
  {
    word: "Bacillus anthracis",
    meaning: "অ্যানথ্রাক্স ব্যাকটেরিয়ার বৈজ্ঞানিক নাম।",
    breakdown: "Genus: Bacillus (রড-আকৃতির) + Species: anthracis (অ্যানথ্রাক্স সৃষ্টিকারী)",
    example: "Bacillus anthracis খুব বিপজ্জনক ব্যাকটেরিয়া।"
  }
  ];
