export type ProductCategory =
  | "Rockwool Insulation"
  | "Fiber Glasswool Insulation"
  | "Elastomeric Nitrile Rubber Insulation, NBR"
  | "XLPE Crosslinked Polyethylene Foam"
  | "Ceramic Fiber"
  | "Refractory Materials"
  | "Passive Fire Protection"
  | "Ancillary Materials";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  specs: string[];
  applications: string[];
};

export type ApplicationGroup = {
  name: string;
  image: string;
  summary: string;
  items: string[];
};

export const company = {
  name: "Aarvi Industrial Materials",
  tagline: "A reliable supplier of industrial and commercial insulation materials",
  nature: "Stockist, distributor, supplier, trader, and exporter",
  established: "2015",
  experience: "20+",
  warehouse: "5000 sq. ft.",
  address: "105/5, Bailappanapalya, Tumkur Road, Madavara, Bangalore - 560073, Karnataka, India",
  contactPerson: "Ravikumar H, Manager",
  phone: "+91 9916834400",
  phonePlain: "919916834400",
  email: "aarviindustrial@gmail.com",
  gst: "29BXZPR0781C1ZT",
  logo: "/assets/workbook/home-page-01-r001-c001.jpeg",
};

export const whatsappQuote =
  "https://wa.me/919916834400?text=Hello%20Aarvi%20Industrial%20Materials%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20insulation%20materials.";

export const customers = [
  "Mangalore Refineries and Petrochemicals",
  "Jindal Vijaynagar Steel",
  "The Ugar Sugar Works Ltd.",
  "Athani Farmers Sugar Factory Ltd.",
  "Associated Cement Companies",
];

export const industries = [
  "Power",
  "Clean energy",
  "Nuclear",
  "Petrochemicals",
  "Oil and gas",
  "Offshore and onshore",
  "Construction",
  "Cement",
  "Steel",
  "Textiles",
  "Pharmaceuticals",
  "Fertilizers",
  "Chemicals",
  "Distilleries",
  "Sugar",
  "Ship building",
  "Marine",
  "Paper and pulp",
  "Dairy",
  "Fire prevention and protection",
];

export const benefits = [
  "Ready availability",
  "Trusted vendor sourcing",
  "Technical product guidance",
  "Timely deliveries",
  "Economical pricing",
  "Long-term customer relationships",
];

export const categoryCards: Array<{
  name: ProductCategory;
  image: string;
  description: string;
}> = [
  {
    name: "Rockwool Insulation",
    image: "/assets/workbook/rw-01-r008-c008.jpeg",
    description: "Non-combustible stone wool materials for thermal, acoustic, and fire protection applications.",
  },
  {
    name: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-01-r009-c009.jpeg",
    description: "Lightweight resilient glasswool rolls, boards, ducts, tissues, loose wool, and cloth.",
  },
  {
    name: "Elastomeric Nitrile Rubber Insulation, NBR",
    image: "/assets/workbook/nbr-01-r002-c010.jpeg",
    description: "Closed-cell flexible elastomeric foam sheets and tubes for HVAC and process insulation.",
  },
  {
    name: "XLPE Crosslinked Polyethylene Foam",
    image: "/assets/workbook/xlpe-01-r004-c009.jpeg",
    description: "Chemically crosslinked closed-cell foam for ducts, pipes, under deck, textile, and building use.",
  },
  {
    name: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Blankets, boards, bulk fiber, ropes, tapes, and vacuum formed shapes for high-temperature service.",
  },
  {
    name: "Refractory Materials",
    image: "/assets/workbook/ref-01-r003-c005.jpeg",
    description: "Refractory bricks and castables for furnaces and lining requirements.",
  },
  {
    name: "Passive Fire Protection",
    image: "/assets/workbook/pfp-01-r003-c008.jpeg",
    description: "Intumescent coatings, cementitious fireproofing, and fire stop materials for structural protection.",
  },
  {
    name: "Ancillary Materials",
    image: "/assets/workbook/home-page-08-r016-c017.jpeg",
    description: "Jacketing, binding wire, screws, adhesives, foil tapes, perforated sheets, and coating materials.",
  },
];

export const products: Product[] = [
  {
    slug: "rockwool-slabs",
    name: "Rockwool Slabs",
    category: "Rockwool Insulation",
    image: "/assets/workbook/rw-01-r008-c008.jpeg",
    description:
      "Resin-bonded slabs made from long fine fibers spun from molten natural rock and bonded with thermosetting resin.",
    specs: [
      "Facing: Plain, aluminum foil, or FSK",
      "Standard: IS 8183",
      "Maximum service temperature: 750 Deg C",
      "Density: 48, 64, 96, and 144 kg/m3",
      "Thickness: 25, 50, 75, and 100 mm",
      "Size: 500 x 1000 mm",
    ],
    applications: ["Building insulation", "Industrial insulation", "Fire protection", "Acoustic insulation"],
  },
  {
    slug: "rockwool-building-rolls",
    name: "Rockwool Building Rolls",
    category: "Rockwool Insulation",
    image: "/assets/workbook/rw-02-r022-c009.jpeg",
    description:
      "Rockwool fibers bonded with thermosetting resin and laminated on one side with FSK or aluminum foil.",
    specs: [
      "Facing: Aluminum foil or FSK",
      "Density: 48-64 kg/m3",
      "Thickness: 50-100 mm",
      "Sizes: 1100 x 6000 mm and 1100 x 10000 mm",
    ],
    applications: ["Roof insulation", "Metal building insulation", "Building envelope insulation"],
  },
  {
    slug: "lrb-rockwool-mattresses",
    name: "LRB Rockwool Mattresses",
    category: "Rockwool Insulation",
    image: "/assets/workbook/rw-03-r036-c010.png",
    description:
      "Lightly resin-bonded rockwool mattresses stitched on galvanized wire mesh for demanding industrial use.",
    specs: [
      "Facing: Hexagonal SS or GI wire mesh",
      "Standards: IS 8183:1993, BS 3958 Part 3, ASTM C592-80",
      "Maximum service temperature: 750 Deg C",
      "Density: 100, 120, 128, 144, and 150 kg/m3",
      "Thickness: 25, 40, 50, 60, 65, 75, and 100 mm",
      "Size: 1.640 x 1.220 m",
    ],
    applications: ["High-pressure steam pipes", "Reactors", "Furnaces", "Industrial insulation"],
  },
  {
    slug: "rockwool-pipe-sections",
    name: "Rockwool Pipe Sections",
    category: "Rockwool Insulation",
    image: "/assets/workbook/rw-04-r051-c007.jpeg",
    description:
      "Preformed pipe sections made from rock fibers and thermosetting resins for hot and cold service lines.",
    specs: [
      "Facing: Plain",
      "Standard: IS 9842:1994",
      "Maximum service temperature: 750 Deg C",
      "Density: 144 kg/m3",
      "Thickness: 25-100 mm",
      "Pipe ID: 21.3-355.6 mm",
      "Length: 1000 mm",
    ],
    applications: ["Piping insulation", "Steam lines", "Water lines", "Commercial complexes"],
  },
  {
    slug: "loose-mineral-wool",
    name: "Loose Mineral Wool",
    category: "Rockwool Insulation",
    image: "/assets/workbook/rw-05-r068-c006.png",
    description:
      "High-temperature insulating fibers processed from selected natural rock for severe service conditions.",
    specs: ["Standard: IS 3677", "Maximum service temperature: 750 Deg C", "Density: 80 kg/m3", "Packing: 40 kg bags"],
    applications: ["Cavity filling", "Equipment insulation", "High-temperature insulation"],
  },
  {
    slug: "fiber-glasswool-rolls",
    name: "Fiber Glasswool Rolls",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-01-r009-c009.jpeg",
    description:
      "Flexible blanket insulation composed of fine inorganic glass fibers bonded with fire-retardant resin.",
    specs: [
      "Facing: Plain, aluminum foil, FSK, or WMP",
      "Standard: IS 8183",
      "Maximum service temperature: 250 Deg C",
      "Density: 12, 16, 20, 24, 32, 40, and 48 kg/m3",
      "Thickness: 12, 25, 40, 50, 65, and 75 mm",
      "Width: 1.2 m",
      "Length: 7.5, 10, 15, 20, 25, and 30 m",
    ],
    applications: ["HVAC insulation", "Roof insulation", "Acoustic insulation"],
  },
  {
    slug: "fiber-glasswool-boards",
    name: "Fiber Glasswool Boards",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-02-r024-c010.jpeg",
    description:
      "Semi-rigid rectangular boards formed from stable glass fibers bonded with heat-resistant thermosetting resin.",
    specs: [
      "Facing: Plain, aluminum foil, FSK, WMP, or black glass cloth",
      "Standards: IS 8183:93 / IS 3144:90",
      "Maximum service temperature: 250 Deg C",
      "Density: 32, 40, 48, and 64 kg/m3",
      "Thickness: 12, 25, 40, 50, 65, and 75 mm",
      "Size: 0.6 x 1.2 m",
    ],
    applications: ["Wall insulation", "HVAC insulation", "Acoustic panels"],
  },
  {
    slug: "fiber-glasswool-acoustic-board",
    name: "Fiber Glasswool Acoustic Board",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-03-r039-c010.jpeg",
    description:
      "High-density glasswool board laminated with black glass cloth for sound absorption and aluminum foil as a vapor barrier.",
    specs: [
      "Facing: Top aluminum foil and bottom black glass cloth",
      "Standards: IS 8183:93 / IS 3144:90",
      "Density: 70-80 kg/m3",
      "Thickness: 25 and 50 mm",
      "Size: 2.50 x 1.20 m",
    ],
    applications: ["Acoustic ducts", "Sound attenuation", "Building interiors"],
  },
  {
    slug: "insulated-flexible-duct",
    name: "Insulated Flexible Duct",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-04-r053-c010.jpeg",
    description:
      "Flexible insulated ducting for air conditioning and ventilation systems in commercial, institutional, and industrial spaces.",
    specs: [
      "Service temperature: 0 to 90 Deg C",
      "Insulation material: Fiber glasswool",
      "Insulation thickness: 25 mm",
      "Insulation density: 16 kg/m3",
      "Standard length: 7.62 m (25 ft)",
      "Sizes: 4-20 inches / 100-500 mm",
    ],
    applications: ["Air conditioning", "Ventilation", "Hotels", "Hospitals", "Offices"],
  },
  {
    slug: "rp-tissue",
    name: "RP Tissue",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-05-r068-c009.jpeg",
    description:
      "Lightweight non-woven fiberglass veil made with E-glass fibers for waterproofing, insulation facing, and acoustic duct lining.",
    specs: ["Color: White or black", "Thickness: 35, 45, and 100 GSM", "Roll size: 1 m x 300 m"],
    applications: ["Insulation facing", "Waterproofing", "Acoustic duct lining"],
  },
  {
    slug: "loose-glasswool",
    name: "Loose Glasswool",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-06-r084-c008.jpeg",
    description:
      "Loose glass wool produced from silica sand for insulating cavities of irregular dimensions.",
    specs: [
      "Maximum service temperature: 250 Deg C",
      "Loose density: 80 kg/m3",
      "Color: White",
      "Packing: HDPE bags, 25 kg per bag",
    ],
    applications: ["Equipment insulation", "Tank insulation", "Pipeline insulation", "Oven insulation"],
  },
  {
    slug: "fiber-glass-cloth",
    name: "Fiber Glass Cloth",
    category: "Fiber Glasswool Insulation",
    image: "/assets/workbook/gw-07-r099-c008.jpeg",
    description:
      "Durable woven fiberglass textile used as a heat insulating material and asbestos cloth substitute.",
    specs: ["Colors: White, red, blue, or green", "Thickness: 7 mil / 0.18 mm", "Roll size: 1 m x 100 m", "Specification: 200 GSM"],
    applications: ["Heat insulation", "Fire resistance", "Industrial textile applications"],
  },
  {
    slug: "nitrile-rubber-insulation-sheets",
    name: "Nitrile Rubber Insulation Sheets",
    category: "Elastomeric Nitrile Rubber Insulation, NBR",
    image: "/assets/workbook/nbr-01-r002-c010.jpeg",
    description:
      "Closed-cell flexible elastomeric foam made from nitrile rubber with low thermal conductivity and high vapor diffusion resistance.",
    specs: ["CFC/HCFC free", "Dust free and fiber free", "Energy-saving insulation", "High water vapor diffusion resistance"],
    applications: ["HVAC", "Construction", "Pharma", "Hotels", "Hospitals", "Cold storage"],
  },
  {
    slug: "nitrile-rubber-insulation-tubes",
    name: "Nitrile Rubber Insulation Tubes",
    category: "Elastomeric Nitrile Rubber Insulation, NBR",
    image: "/assets/workbook/nbr-02-r018-c010.jpeg",
    description:
      "Closed-cell nitrile rubber foam tubes designed for thermal insulation, condensation control, and UV protection.",
    specs: ["Low thermal conductivity", "High water vapor resistance", "Suitable for pipes, ducts, vessels, and process equipment"],
    applications: ["HVAC pipes", "Industrial pipes", "Condensation control", "Process equipment"],
  },
  {
    slug: "open-cell-acoustic-nitrile-rubber-sheets",
    name: "Open Cell Acoustic Nitrile Rubber Sheets",
    category: "Elastomeric Nitrile Rubber Insulation, NBR",
    image: "/assets/workbook/nbr-03-r036-c010.jpeg",
    description:
      "Lightweight acoustic insulation sheets for absorbing and controlling unwanted noise across a wide frequency range.",
    specs: ["Sound attenuation", "Moisture resistance", "Durable long-term performance", "Comfort-focused acoustic control"],
    applications: ["HVAC acoustic treatment", "Industrial noise control", "Building comfort"],
  },
  {
    slug: "xlpe-insulation-sheets",
    name: "XLPE Insulation Sheets",
    category: "XLPE Crosslinked Polyethylene Foam",
    image: "/assets/workbook/xlpe-01-r004-c009.jpeg",
    description:
      "Chemically crosslinked closed-cell polyolefin foam for thermal and acoustic insulation in HVAC, textile, and building sectors.",
    specs: ["Closed-cell polyolefin foam", "Thermal and acoustic insulation", "Designed for HVAC and under deck use"],
    applications: ["HVAC ducts", "Under deck insulation", "Building insulation", "Textile applications"],
  },
  {
    slug: "xlpe-insulation-tubes",
    name: "XLPE Insulation Tubes",
    category: "XLPE Crosslinked Polyethylene Foam",
    image: "/assets/workbook/xlpe-02-r014-c001.jpeg",
    description:
      "Closed-cell XLPE tube insulation for pipe insulation and energy-efficient building service applications.",
    specs: ["Crosslinked polyethylene foam", "Closed-cell structure", "Pipe insulation use", "Acoustic and thermal benefits"],
    applications: ["Pipe insulation", "HVAC services", "Building systems"],
  },
  {
    slug: "ceramic-fiber-blanket",
    name: "Ceramic Fiber Blanket",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Ceramic fiber blanket for high-temperature insulation and furnace-related thermal protection.",
    specs: ["High-temperature insulation material", "Available as blanket format", "Part of ceramic fiber product range"],
    applications: ["Furnaces", "Ovens", "Thermal lining"],
  },
  {
    slug: "ceramic-fiber-boards",
    name: "Ceramic Fiber Boards",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Ceramic fiber boards for rigid high-temperature insulation requirements.",
    specs: ["Rigid board format", "High-temperature insulation", "Ceramic fiber construction"],
    applications: ["Furnace panels", "Heat shields", "Industrial insulation"],
  },
  {
    slug: "ceramic-fiber-bulk",
    name: "Ceramic Fiber Bulk",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Bulk ceramic fiber for filling and thermal insulation uses.",
    specs: ["Bulk fiber format", "High-temperature thermal protection", "Flexible filling applications"],
    applications: ["Cavity filling", "Equipment insulation", "Furnace service"],
  },
  {
    slug: "ceramic-fiber-rope",
    name: "Ceramic Fiber Rope",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Ceramic fiber rope for sealing and high-temperature insulation use.",
    specs: ["Rope format", "Thermal sealing use", "Ceramic fiber material"],
    applications: ["Sealing", "Furnace doors", "High-temperature joints"],
  },
  {
    slug: "ceramic-fiber-tapes",
    name: "Ceramic Fiber Tapes",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Ceramic fiber tapes for wrapping, lining, and high-temperature insulation tasks.",
    specs: ["Tape format", "High-temperature insulation", "Flexible wrapping use"],
    applications: ["Pipe wrapping", "Thermal joints", "Industrial insulation"],
  },
  {
    slug: "ceramic-fiber-vacuum-formed-shapes",
    name: "Ceramic Fiber Vacuum Formed Shapes",
    category: "Ceramic Fiber",
    image: "/assets/workbook/cf-01-r003-c005.jpeg",
    description: "Vacuum formed ceramic fiber shapes for specialized thermal insulation requirements.",
    specs: ["Vacuum formed shape format", "Ceramic fiber construction", "Custom thermal protection use"],
    applications: ["Furnaces", "Industrial equipment", "Special insulation shapes"],
  },
  {
    slug: "refractory-bricks",
    name: "Refractory Bricks",
    category: "Refractory Materials",
    image: "/assets/workbook/ref-01-r003-c005.jpeg",
    description: "Refractory bricks for furnace brick lining and other heat-resistant masonry requirements.",
    specs: ["Brick format", "For furnace lining", "Refractory material range"],
    applications: ["Furnace brick lining", "High-temperature masonry", "Refractory lining"],
  },
  {
    slug: "refractory-castables",
    name: "Refractory Castables",
    category: "Refractory Materials",
    image: "/assets/workbook/ref-02-r003-c010.jpeg",
    description: "Refractory castables for furnace castable lining and shaped heat-resistant lining work.",
    specs: ["Castable format", "For refractory lining", "Suitable for furnace service"],
    applications: ["Furnace castable lining", "Industrial refractory work", "Thermal lining"],
  },
  {
    slug: "intumescent-fireproofing-paints",
    name: "Intumescent Fireproofing Paints",
    category: "Passive Fire Protection",
    image: "/assets/workbook/pfp-02-r008-c001.jpeg",
    description: "Intumescent fireproofing coatings for passive fire protection of structural steel.",
    specs: ["Passive fire protection material", "Coating format", "For structural steel fireproofing"],
    applications: ["Structural steel", "Fireproofing", "Building fire protection"],
  },
  {
    slug: "cementitious-fireproofing",
    name: "Cementitious Fireproofing",
    category: "Passive Fire Protection",
    image: "/assets/workbook/pfp-01-r003-c008.jpeg",
    description: "Cementitious fireproofing materials for passive protection of structural steel.",
    specs: ["Cementitious system", "Passive fire protection", "Structural steel use"],
    applications: ["Structural steel", "Fireproofing", "Industrial and building projects"],
  },
  {
    slug: "fire-stop-materials",
    name: "Fire Stop Materials",
    category: "Passive Fire Protection",
    image: "/assets/workbook/pfp-03-r023-c002.png",
    description: "Fire stop materials for sealing openings and supporting fire stopping applications in buildings.",
    specs: ["Fire stopping use", "Passive fire protection range", "Opening and penetration sealing"],
    applications: ["Building fire stopping", "Service penetrations", "Fire prevention and protection"],
  },
  {
    slug: "aluminum-jacketing-aluminium-coil",
    name: "Aluminum Jacketing / Aluminium Coil",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-08-r016-c017.jpeg",
    description: "Aluminum jacketing and coils used as ancillary materials for insulation cladding and protection.",
    specs: ["Ancillary insulation material", "Cladding and jacketing use", "Aluminum / aluminium coil format"],
    applications: ["Pipe cladding", "Equipment jacketing", "Insulation protection"],
  },
  {
    slug: "gi-binding-wire",
    name: "GI Binding Wire",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-10-r017-c011.jpeg",
    description: "Galvanized iron binding wire for securing insulation materials and related cladding assemblies.",
    specs: ["GI wire", "Binding and fixing use", "Ancillary installation material"],
    applications: ["Insulation fixing", "Cladding support", "Industrial insulation work"],
  },
  {
    slug: "self-tapping-screws",
    name: "Self Tapping Screws",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-08-r016-c017.jpeg",
    description: "Self tapping screws for insulation jacketing and ancillary installation needs.",
    specs: ["Fastener material", "Self tapping format", "Used with jacketing and sheets"],
    applications: ["Cladding fixing", "Insulation installation", "Sheet fastening"],
  },
  {
    slug: "synthetic-rubberized-adhesives",
    name: "Synthetic Rubberized Adhesives",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-04-r016-c029.jpeg",
    description: "Synthetic rubberized adhesives for bonding insulation products and ancillary materials.",
    specs: ["Adhesive material", "Rubberized formulation", "For insulation bonding"],
    applications: ["Nitrile insulation", "XLPE foam", "General insulation bonding"],
  },
  {
    slug: "self-adhesive-aluminum-tapes",
    name: "Self Adhesive Aluminum Tapes",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-15-r082-c006.jpeg",
    description: "Self adhesive aluminum tapes for sealing joints and finishing insulation assemblies.",
    specs: ["Self adhesive tape", "Aluminum facing", "Joint sealing use"],
    applications: ["Duct insulation", "Foil-faced insulation", "Joint sealing"],
  },
  {
    slug: "perforated-aluminum-sheets",
    name: "Perforated Aluminum Sheets",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-08-r016-c017.jpeg",
    description: "Perforated aluminum sheets used with insulation systems and protective finishes.",
    specs: ["Perforated sheet format", "Aluminum material", "Ancillary insulation range"],
    applications: ["Protective finishes", "Cladding work", "Insulation systems"],
  },
  {
    slug: "fsk-laminated-aluminum-foil-rolls",
    name: "FSK Laminated Aluminum Foil Rolls",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-16-r082-c010.jpeg",
    description: "FSK laminated aluminum foil rolls for facing, vapor barrier, and insulation finishing uses.",
    specs: ["FSK laminated foil", "Roll format", "Facing and vapor barrier use"],
    applications: ["Glasswool facing", "Rockwool facing", "Duct insulation"],
  },
  {
    slug: "salikote-paint",
    name: "Salikote Paint",
    category: "Ancillary Materials",
    image: "/assets/workbook/home-page-08-r016-c017.jpeg",
    description: "Salikote paint for insulation and ancillary finishing requirements.",
    specs: ["Paint material", "Ancillary finishing product", "Used with insulation assemblies"],
    applications: ["Insulation finishing", "Protective coating", "Industrial maintenance"],
  },
];

export const applications: ApplicationGroup[] = [
  {
    name: "Building Insulation",
    image: "/assets/workbook/building-ins-01-r001-c006.jpeg",
    summary:
      "Thermal and acoustic protection for roofs, envelopes, dry walls, facades, ceilings, soffits, and metal buildings.",
    items: [
      "Roof insulation",
      "Cavity wall insulation",
      "Building envelope insulation",
      "Under deck insulation",
      "Dry wall insulation",
      "Ceiling / soffit",
      "Facade insulation",
      "Metal building insulation",
    ],
  },
  {
    name: "HVAC Insulation",
    image: "/assets/workbook/gw-04-r053-c010.jpeg",
    summary: "Duct, tank, chiller pipe, and hot water insulation for commercial, institutional, and process facilities.",
    items: ["Duct insulation", "Tank insulation", "Chiller pipe insulation", "Hot water insulation"],
  },
  {
    name: "Industrial Insulation",
    image: "/assets/workbook/rw-03-r036-c010.png",
    summary: "Insulation for equipment, piping, ovens, furnaces, and severe service industrial systems.",
    items: ["Insulation of equipment", "Insulation of piping", "Ovens and furnace insulation"],
  },
  {
    name: "Refractory Lining",
    image: "/assets/workbook/ref-02-r003-c010.jpeg",
    summary: "Furnace brick and castable lining materials for high-temperature refractory applications.",
    items: ["Furnace brick lining", "Furnace castable lining"],
  },
  {
    name: "Passive Fire Protection",
    image: "/assets/workbook/pfp-05-r038-c002.jpeg",
    summary: "Fireproofing and fire stopping solutions for structural steel and building service penetrations.",
    items: [
      "Fireproofing of structural steel, intumescent",
      "Fireproofing of structural steel, cementitious",
      "Fire stopping application in buildings",
    ],
  },
];

export const job = {
  position: "Sales Executive, Outdoor",
  location: "Bangalore",
  qualification: "Any graduate",
  experience: "3-5 years in outdoor sales",
  salary: "15-20K",
  responsibilities: ["Visit customers", "Generate leads", "Send quotes", "Finalize orders", "Maintain client relationships"],
};

export const gallery = [
  { label: "Rockwool slabs", image: "/assets/workbook/home-page-13-r081-c001.jpeg" },
  { label: "Glasswool rolls", image: "/assets/workbook/home-page-14-r082-c004.jpeg" },
  { label: "Foil-faced insulation", image: "/assets/workbook/home-page-15-r082-c006.jpeg" },
  { label: "Bubble insulation", image: "/assets/workbook/home-page-16-r082-c010.jpeg" },
  { label: "Nitrile rubber rolls", image: "/assets/workbook/home-page-18-r082-c018.jpeg" },
  { label: "Loose mineral wool", image: "/assets/workbook/home-page-19-r081-c021.jpeg" },
  { label: "Ceramic fiber", image: "/assets/workbook/home-page-20-r081-c025.png" },
  { label: "LRB rockwool mattresses", image: "/assets/workbook/home-page-21-r081-c029.png" },
  { label: "Building insulation", image: "/assets/workbook/building-ins-02-r016-c006.jpeg" },
];
