// Car data array
const cars = [
    { name: "Toyota Chaser",        rarity: 1, rarityLabel: "(1)", raritySymbol: "普", description: "A legendary X-chassis sedan delivering turbocharged precision for spirited drift battles." },
    { name: "Civic Type R (Any)",     rarity: 1, rarityLabel: "(1)", raritySymbol: "普", description: "A masterclass in performance with high-revving intensity and precision-tuned handling." },
    { name: "Nissan Pike Cars",       rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "A collection of limited-edition retro masterpieces with quirky vintage styling." },
    { name: "Toyota Starlet Glanza",  rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Compact yet feisty, bursting with turbocharged energy and agile dynamics." },
    { name: "Mazda Cosmo",            rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "An icon of luxury and innovation, fusing advanced tech with rare rotary power." },
    { name: "Nissan Skyline R32",     rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Nicknamed 'Godzilla,' this '90s icon features a turbocharged RB engine and legendary AWD." },
    { name: "Toyota AE111 Levin",     rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Precision-engineered for racing enthusiasts with a nimble 4A-GE engine." },
    { name: "Nissan Laurel C33",      rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "An understated gem offering robust performance and a supple chassis." },
    { name: "Toyota Century",         rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "The pinnacle of Japanese luxury with timeless elegance and meticulous craftsmanship." },
    { name: "Mazda RX-7 FD",         rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "A rotary masterpiece with sleek curves and twin-turbo performance." },
    { name: "Subaru Impreza GC8",     rarity: 1, rarityLabel: "(1)", raritySymbol: "普", description: "A rally-bred icon combining turbocharged boxer power with proven AWD." },
    { name: "Nissan 300ZX (Z32)",     rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "A tech-forward '90s sports coupe pairing a twin-turbo V6 with advanced HICAS steering." },
    { name: "Toyota AE86 Trueno",     rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "Iconic and agile, igniting the drifting revolution with its lightweight frame." },
    { name: "Toyota Soarer",          rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "A harmonious blend of luxury and performance with refined styling and potent turbo options." },
    { name: "Mitsubishi Lancer Evo IV–VI", rarity: 1, rarityLabel: "(1)", raritySymbol: "普", description: "A rally titan channeling turbocharged fury with cutting-edge AWD technology." },
    { name: "Mitsubishi FTO/GTO",     rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Contrasting thrills: nimble FTO and powerful GTO deliver dynamic performance with unique character." },
    { name: "Nissan Silvia S14",      rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "A drifting legend with a potent SR20DET engine and impeccable balance." },
    { name: "Nissan Stagea",          rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "A versatile wagon blending Skyline heritage with turbocharged performance and AWD grip." },
    { name: "Toyota Sera",            rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "Boldly futuristic with butterfly doors and a glass canopy, an avant-garde marvel on wheels." },
    { name: "Subaru SVX",             rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "A visionary grand tourer featuring a rare flat-six and innovative window design." },
    { name: "Autozam AZ-1",           rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "A pocket-sized dynamo with a mid-engine layout and iconic gullwing doors." },
    { name: "Honda Beat",             rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Compact and charismatic, delivering engaging mid-engine performance in a featherlight Kei package." },
    { name: "Suzuki Cappuccino",      rarity: 2, rarityLabel: "(2)", raritySymbol: "珍", description: "Delightfully nimble, capturing the Kei spirit with turbocharged energy and impeccable balance." },
    { name: "Daihatsu Copen",         rarity: 1, rarityLabel: "(1)", raritySymbol: "普", description: "Charming and urban—a Kei convertible with a retractable hardtop for stylish escapes." },
    { name: "Daihatsu Midget",        rarity: 3, rarityLabel: "(3)", raritySymbol: "希", description: "Unconventional and quirky—a mini Kei pickup with utilitarian charm." }
  ];
  
  // Rank thresholds with colors and settings.
  // Lower ranks use distinct dark gray/bluish tones; higher ranks are golden.
  const rankThresholds = [
    { rank: "F",  max: 5,   mainColor: "#2f4f4f", accentColor: "#3f5f5f", symbol: "F", duration: 20 },
    { rank: "E",  max: 10,  mainColor: "#1e3a5f", accentColor: "#2e4a6f", symbol: "E", duration: 20 },
    { rank: "D",  max: 20,  mainColor: "#2c3e50", accentColor: "#3c4e60", symbol: "D", duration: 20 },
    { rank: "C",  max: 39,  mainColor: "#4b0082", accentColor: "#5a0090", symbol: "C", duration: 15 },
    { rank: "B",  max: 100, mainColor: "#008000", accentColor: "#009000", symbol: "B", duration: 10 },
    { rank: "A",  max: 253, mainColor: "#0000ff", accentColor: "#0000ee", symbol: "A", duration: 7 },
    { rank: "S",  max: 639, mainColor: "#ffd700", accentColor: "#ffc107", symbol: "S", duration: 5 },
    { rank: "SS", max: 796, mainColor: "#ffd700", accentColor: "#ffc107", symbol: "SS", duration: 3 }
  ];
  