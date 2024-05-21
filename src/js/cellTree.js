//正则 (..PO:........)

const cellTree = [
  {
    lable: "Calli",
    opened: "false",
    tissue: "Calli",
    children: [
      { lable: "initiation stage", opened: "false", tissue: "Calli" },
      { lable: "division stage", opened: "false", tissue: "Calli" },
      {
        lable: "formation stage",
        opened: "false",
        tissue: "Calli",
        children: [
          { lable: "Epidermis-like cell", opened: "false", tissue: "Calli" },
          {
            lable: "Explant vasculature and callus founder cell",
            opened: "false",
            tissue: "Calli",
          },
          {
            lable: "Lateral root cap like cell",
            opened: "false",
            tissue: "Calli",
          },
          {
            lable: "Quiescent center-like cell",
            opened: "false",
            tissue: "Calli",
          },
          {
            lable: "Vascular-initial-like cell",
            opened: "false",
            tissue: "Calli",
          },
          {
            lable: "Explant vasculature and callus founder cell",
            opened: "false",
            tissue: "Calli",
          },
        ],
      },
    ],
  },
  {
    lable: "Cotyledon",
    opened: "false",
    tissue: "Cotyledon",
    children: [
      {
        lable: "guard cell",
        opened: "false",
        tissue: "Cotyledon",
        children: [
          {
            lable: "guard mother cell",
            opened: "false",
            tissue: "Cotyledon",
          },
          { lable: "Young guard cell", opened: "false", tissue: "Cotyledon" },
          { lable: "meristemoid", opened: "false", tissue: "Cotyledon" },
          {
            lable: "Meristemoid mother cell",
            opened: "false",
            tissue: "Cotyledon",
          },
          {
            lable: "Early-stage meristemoid",
            opened: "false",
            tissue: "Cotyledon",
          },
          {
            lable: "Late-stage meristemoid",
            opened: "false",
            tissue: "Cotyledon",
          },
        ],
      },
      {
        lable: "mesophyll cell",
        opened: "false",
        tissue: "Cotyledon",
      },
      {
        lable: "leaf pavement cell",
        opened: "false",
        tissue: "Cotyledon",
      },
      { lable: "Reprogrammed cell", opened: "false", tissue: "Cotyledon" },
      { lable: "Vascular stem cell", opened: "false", tissue: "Cotyledon" },
    ],
  },
  {
    lable: "Flower",
    opened: "false",
    tissue: "Flower",
    children: [
      {
        lable: "Floral bud",
        opened: "false",
        tissue: "Flower",
        children: [
          { lable: "Anther", opened: "false", tissue: "Flower" },
          { lable: "filament", opened: "false", tissue: "Flower" },
          {
            lable: "ovary replum",
            opened: "false",
            tissue: "Flower",
          },
          {
            lable: "petal vascular system",
            opened: "false",
            tissue: "Flower",
          },
          { lable: "style", opened: "false", tissue: "Flower" },
          {
            lable: "valve margins of pistils",
            opened: "false",
            tissue: "Flower",
          },
        ],
      },
      {
        lable: "Floral meristem",
        opened: "false",
        tissue: "Flower",
        children: [
          { lable: "Cortex", opened: "false", tissue: "Flower" },
          { lable: "Dividing cell", opened: "false", tissue: "Flower" },
          { lable: "Epidermis", opened: "false", tissue: "Flower" },
          { lable: "cambium cell", opened: "false", tissue: "Flower" },
          {
            lable: "flower meristem",
            opened: "false",
            tissue: "Flower",
          },
          {
            lable: "mesophyll cell",
            opened: "false",
            tissue: "Flower",
          },
          { lable: "phloem", opened: "false", tissue: "Flower" },
          { lable: "Xylem parenchyma ", opened: "false", tissue: "Flower" },
        ],
      },
      {
        lable: "flower",
        opened: "false",
        tissue: "Flower",
        children: [
          {
            lable: "anther",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Early anther", opened: "false", tissue: "Flower" },
              {
                lable: "Intermediate anther",
                opened: "false",
                tissue: "Flower",
              },
              { lable: "Late anther", opened: "false", tissue: "Flower" },
            ],
          },
          {
            lable: "carpel",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "early carpel", opened: "false", tissue: "Flower" },
            ],
          },
          {
            lable: "floral epidermis",
            opened: "false",
            tissue: "Flower",
            children: [{ lable: "Trichome", opened: "false", tissue: "Flower" }],
          },
          {
            lable: "flower vascular system",
            opened: "false",
            tissue: "Flower",
          },
          {
            lable: "inflorescence",
            opened: "false",
            tissue: "Flower",
            children: [
              {
                lable: "Inflorescence stem cambium",
                opened: "false",
                tissue: "Flower",
              },
            ],
          },
          {
            lable: "mesophyll cell",
            opened: "false",
            tissue: "Flower",
          },
          {
            lable: "meristem",
            opened: "false",
            tissue: "Flower",
            children: [
              {
                lable: "flower meristem",
                opened: "false",
                tissue: "Flower",
              },
              {
                lable: "inflorescence meristem",
                opened: "false",
                tissue: "Flower",
              },
            ],
          },
          {
            lable: "pistil",
            opened: "false",
            tissue: "Flower",
            children: [
              {
                lable: "stigma",
                opened: "false",
                tissue: "Flower",
              },
              {
                lable: "plant ovary",
                opened: "false",
                tissue: "Flower",
                children: [
                  {
                    lable: "plant ovary ovule",
                    opened: "false",
                    tissue: "Flower",
                    children: [
                      {
                        lable: "Female gametophyte",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "antipodal cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "embryo apical cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "embryo basal cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "embryo sac central cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "embryo sac egg cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "synergid",
                            opened: "false",
                            tissue: "Flower",
                          },
                        ],
                      },
                      {
                        lable: "Female gametic cell",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "Central cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "plant egg cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Synergid cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                        ],
                      },
                      {
                        lable: "integument",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "outer integument",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "inner integument",
                            opened: "false",
                            tissue: "Flower",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    lable: "Central cell",
                    opened: "false",
                    tissue: "Flower",
                    children: [
                      {
                        lable: "Central cell from the tetraploid",
                        opened: "false",
                        tissue: "Flower",
                      },
                    ],
                  },
                  {
                    lable: "Egg cell",
                    opened: "false",
                    tissue: "Flower",
                    children: [
                      {
                        lable: "Egg cell in the diploid",
                        opened: "false",
                        tissue: "Flower",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            lable: "stamen",
            opened: "false",
            tissue: "Flower",
            children: [
              {
                lable: "pollen",
                opened: "false",
                tissue: "Flower",
                children: [
                  {
                    lable: "Pollen grains",
                    opened: "false",
                    tissue: "Flower",
                    children: [
                      {
                        lable: "Developing male gametophytes",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "Generative nuclei",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Microspore nuclei",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Sperm nuclei",
                            opened: "false",
                            tissue: "Flower",
                          },
                          { lable: "Trans", opened: "false", tissue: "Flower" },
                          {
                            lable: "Vegetative nuclei",
                            opened: "false",
                            tissue: "Flower",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            lable: "perianth",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "early perianth", opened: "false", tissue: "Flower" },
            ],
          },
        ],
      },
    ],
  },
  {
    lable: "Root",
    opened: "false",
    tissue: "Root",
    children: [
      {
        lable: "lateral root",
        opened: "false",
        tissue: "Root",
        children: [
          {
            lable: "Epidermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "non-hair root epidermal cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "trichoblast",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "lateral root cap",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Proximal lateral root cap",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "columella",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "lateral root primordium",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Young lateral root primordium",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "pericyclic lateral root primordium",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "pericycle cell",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "phloem pole pericycle cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "xylem pole pericycle cell",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "phloem",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "companion cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "protophloem",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Protophloem-like cell",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "quiescent center",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Quiescent center transitioning cell",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          { lable: "root cortex", opened: "false", tissue: "Root" },
          {
            lable: "root endodermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Endodermis and lateral root primordia responding endodermis",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Lateral root primordia responding endodermis",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "root lateral meristem",
            opened: "false",
            tissue: "Root",
          },
          {
            lable: "root procambium",
            opened: "false",
            tissue: "Root",
          },
          {
            lable: "root stele",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "xylem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "protoxylem",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
            ],
          },
          { lable: "Vascular-like cell", opened: "false", tissue: "Root" },
        ],
      },
      {
        lable: "Root",
        opened: "false",
        tissue: "Root",
        children: [
          { lable: "cambium", opened: "false", tissue: "Root" },
          { lable: "stem cell niche", opened: "false", tissue: "Root" },
          { lable: "Dividing cell", opened: "false", tissue: "Root" },
          {
            lable: "Elongation zone",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Elongation atrichoblast",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Elongation trichoblast",
                opened: "false",
                tissue: "Root",
              },
              { lable: "Elongation cortex", opened: "false", tissue: "Root" },
              {
                lable: "Elongation endodermis",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Elongation stele",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "pericycle cell",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "phloem pole pericycle cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "xylem pole pericycle cell",
                        opened: "false",
                        tissue: "Root",
                      },
                    ],
                  },
                  {
                    lable: "root vascular system",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "Vasculature and columella",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "Elongation xylem",
                        opened: "false",
                        tissue: "Root",
                        children: [
                          {
                            lable: "protoxylem",
                            opened: "false",
                            tissue: "Root",
                            children: [
                              {
                                lable: "Protoxylem-like mixed",
                                opened: "false",
                                tissue: "Root",
                              },
                              {
                                lable: "Protoxylem-like primary",
                                opened: "false",
                                tissue: "Root",
                              },
                            ],
                          },
                          {
                            lable: "metaxylem",
                            opened: "false",
                            tissue: "Root",
                          },
                        ],
                      },
                      {
                        lable: "Elongation phloem",
                        opened: "false",
                        tissue: "Root",
                        children: [
                          {
                            lable: "companion cell",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Metaphloem & Companion cell",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "protophloem",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "sieve element",
                            opened: "false",
                            tissue: "Root",
                            children: [
                              {
                                lable: "Metaphloem sieve element",
                                opened: "false",
                                tissue: "Root",
                              },
                              {
                                lable: "Protophloem sieve element",
                                opened: "false",
                                tissue: "Root",
                              },
                              {
                                lable: "Early SE",
                                opened: "false",
                                tissue: "Root",
                              },
                              {
                                lable: "Late SE",
                                opened: "false",
                                tissue: "Root",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                lable: "Elongation procambium",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "Maturation zone",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Maturation atrichoblast",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Maturation trichoblast",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Maturation cortex",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Maturation endodermis",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "Maturation phloem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Maturation Metaphloem",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "Maturation protophloem",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "Maturation xylem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Maturation protoxylem",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "Maturation procambium",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Maturation phloem pole pericycle",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Maturation xylem pole pericycle",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "Meristem zone",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Meristem atrichoblast",
                opened: "false",
                tissue: "Root",
              },
              { lable: "Meristem trichoblast", opened: "false", tissue: "Root" },
              {
                lable: "Meristem cortex",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Meristem endocortex",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              { lable: "Meristem endodermis", opened: "false", tissue: "Root" },
              {
                lable: "Meristem phloem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Meristem protophloem",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "Meristem Metaphloem",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "Meristem xylem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Meristem protoxylem",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "Meristem metaxylem",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              { lable: "Meristem procambium", opened: "false", tissue: "Root" },
              {
                lable: "Meristem quiescent center",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Initial",
                opened: "false",
                tissue: "Root",
                children: [
                  { lable: "Vascular Initial", opened: "false", tissue: "Root" },
                ],
              },
              {
                lable: "Meristem phloem pole pericycle",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Meristem xylem pole pericycle",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Root meristem",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Proximal meristem",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "root apical meristem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "root procambium",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "Transit amplifying cell",
                        opened: "false",
                        tissue: "Root",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            lable: "photosynthetic cell",
            opened: "false",
            tissue: "Root",
          },
          {
            lable: "root cap",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "columella root cap cell",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Proximal columella",
                    opened: "false",
                    tissue: "Root",
                  },
                  { lable: "Distal columella", opened: "false", tissue: "Root" },
                ],
              },
              {
                lable: "Distal lateral root cap",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "root epidermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "non-hair root epidermal cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "root hair",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "trichoblast",
                    opened: "false",
                    tissue: "Root",
                  },
                  { lable: "Early root hair", opened: "false", tissue: "Root" },
                  { lable: "Mature root hair", opened: "false", tissue: "Root" },
                ],
              },
            ],
          },
          {
            lable: "root stele",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "pericycle cell",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "phloem pole pericycle cell",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "root vascular system",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Vasculature and columella",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "xylem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "protoxylem",
                        opened: "false",
                        tissue: "Root",
                        children: [
                          {
                            lable: "Protoxylem-like mixed",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Protoxylem-like primary",
                            opened: "false",
                            tissue: "Root",
                          },
                        ],
                      },
                      {
                        lable: "metaxylem",
                        opened: "false",
                        tissue: "Root",
                      },
                    ],
                  },
                  {
                    lable: "phloem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "companion cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "Metaphloem & Companion cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "protophloem",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "sieve element",
                        opened: "false",
                        tissue: "Root",
                        children: [
                          {
                            lable: "Metaphloem sieve element",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Protophloem sieve element",
                            opened: "false",
                            tissue: "Root",
                          },
                          { lable: "Early SE", opened: "false", tissue: "Root" },
                          { lable: "Late SE", opened: "false", tissue: "Root" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    lable: "Leaf",
    opened: "false",
    tissue: "Leaf",
    children: [
      {
        lable: "Aerial tissue",
        opened: "false",
        tissue: "Leaf",
        children: [
          { lable: "guard cell", opened: "false", tissue: "Leaf" },
          {
            lable: "mesophyll cell",
            opened: "false",
            tissue: "Leaf",
          },
          {
            lable: "vascular system",
            opened: "false",
            tissue: "Leaf",
          },
        ],
      },
      {
        lable: "leaf epidermis",
        opened: "false",
        tissue: "Leaf",
        children: [
          {
            lable: "leaf pavement cell",
            opened: "false",
            tissue: "Leaf",
            children: [
              {
                lable: "leaf abaxial pavement cell",
                opened: "false",
                tissue: "Leaf",
              },
              {
                lable: "leaf adaxial pavement cell",
                opened: "false",
                tissue: "Leaf",
              },
            ],
          },
          {
            lable: "leaf trichome",
            opened: "false",
            tissue: "Leaf",
          },
          {
            lable: "leaf guard cell",
            opened: "false",
            tissue: "Leaf",
            children: [
              {
                lable: "guard mother cell",
                opened: "false",
                tissue: "Leaf",
              },
              { lable: "Young guard cell", opened: "false", tissue: "Leaf" },
            ],
          },
          {
            lable: "stomatal initial cell",
            opened: "false",
            tissue: "Leaf",
          },
          { lable: "hydathode", opened: "false", tissue: "Leaf" },
          { lable: "Meristemoid mother cell", opened: "false", tissue: "Leaf" },
        ],
      },
      {
        lable: "leaf vascular system",
        opened: "false",
        tissue: "Leaf",
        children: [
          {
            lable: "phloem",
            opened: "false",
            tissue: "Leaf",
            children: [
              {
                lable: "companion cell",
                opened: "false",
                tissue: "Leaf",
              },
              { lable: "Phloem parenchyma", opened: "false", tissue: "Leaf" },
              {
                lable: "protophloem",
                opened: "false",
                tissue: "Leaf",
              },
              {
                lable: "sieve element",
                opened: "false",
                tissue: "Leaf",
              },
            ],
          },
          { lable: "xylem", opened: "false", tissue: "Leaf" },
        ],
      },
      { lable: "Meristem", opened: "false", tissue: "Leaf" },
      {
        lable: "mesophyll cell",
        opened: "false",
        tissue: "Leaf",
        children: [
          {
            lable: "palisade mesophyll cell",
            opened: "false",
            tissue: "Leaf",
          },
          {
            lable: "spongy mesophyll cell",
            opened: "false",
            tissue: "Leaf",
          },
        ],
      },
      { lable: "Myrosinase cell", opened: "false", tissue: "Leaf" },
      { lable: "initial cell", opened: "false", tissue: "Leaf" },
      { lable: "Senescing cell", opened: "false", tissue: "Leaf" },
    ],
  },
  {
    lable: "Seed",
    opened: "false",
    tissue: "Seed",
    children: [
      {
        lable: "Embryo",
        opened: "false",
        tissue: "Seed",
        children: [
          { lable: "Columella initial", opened: "false", tissue: "Seed" },
          {
            lable: "Dividing cell",
            opened: "false",
            tissue: "Seed",
            children: [
              { lable: "Dividing inner", opened: "false", tissue: "Seed" },
              { lable: "Dividing outer", opened: "false", tissue: "Seed" },
            ],
          },
          {
            lable: "protoderm",
            opened: "false",
            tissue: "Seed",
            children: [
              { lable: "Lower protoderm", opened: "false", tissue: "Seed" },
              { lable: "Upper protoderm", opened: "false", tissue: "Seed" },
            ],
          },
          { lable: "Shoot meristem initial", opened: "false", tissue: "Seed" },
          { lable: "Vascular initial", opened: "false", tissue: "Seed" },
        ],
      },
      {
        lable: "Chalaza",
        opened: "false",
        tissue: "Seed",
        children: [
          {
            lable: "Chalaza at the globular stage",
            opened: "false",
            tissue: "Seed",
          },
        ],
      },
      {
        lable: "endosperm",
        opened: "false",
        tissue: "Seed",
        children: [
          {
            lable: "Chalazal endosperm",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Chalazal endosperm at globular and early heart stages",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Chalazal endosperm at preglobular stage",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Chalazal endosperm nodule-like",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Chalazal endosperm nodules",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "chalazal cyst",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
          {
            lable: "micropylar endosperm",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Endosperm at globular and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Endosperm at globular stage of the embryo",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Endosperm at linear cotyledon and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
          {
            lable: "peripheral endosperm",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Early S-phase peripheral",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Energy-generating peripheral endosperm",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Late S-phase peripheral endosperm",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "M-phase peripheral endosperm",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Peripheral endosperm at the globular stage of development",
                opened: "false",
                tissue: "Seed",
              },
              { lable: "Potential peripheral", opened: "false", tissue: "Seed" },
            ],
          },
        ],
      },
      { lable: "Flavonol-synthesizing", opened: "false", tissue: "Seed" },
      { lable: "ovary placenta", opened: "false", tissue: "Seed" },
      {
        lable: "ovule primordium",
        opened: "false",
        tissue: "Seed",
      },
      { lable: "PA-synthesizing endothelium", opened: "false", tissue: "Seed" },
      {
        lable: "seed coat",
        opened: "false",
        tissue: "Seed",
        children: [
          { lable: "Chalazal seed coat", opened: "false", tissue: "Seed" },
          {
            lable: "developing seed coat",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Seed coat at globular and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Seed coat at linear cotyledon and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
          { lable: "Interfascicular fibers", opened: "false", tissue: "Seed" },
          { lable: "Mature green seed coat", opened: "false", tissue: "Seed" },
          {
            lable: "Photosynthetically active seed coat",
            opened: "false",
            tissue: "Seed",
          },
          {
            lable: "seed coat anatomy",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Seed coat endothelium",
                opened: "false",
                tissue: "Seed",
                children: [
                  {
                    lable: "Young endothelium cell",
                    opened: "false",
                    tissue: "Seed",
                  },
                ],
              },
              {
                lable: "seed coat epidermis",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Testa outer integument layer 1",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
          {
            lable: "Seed coat of young siliques",
            opened: "false",
            tissue: "Seed",
          },
        ],
      },
      { lable: "seed funicle", opened: "false", tissue: "Seed" },
      {
        lable: "plant embryo",
        opened: "false",
        tissue: "Seed",
        children: [
          { lable: "embryo root", opened: "false", tissue: "Seed" },
          {
            lable: "plant embryo cotyledon",
            opened: "false",
            tissue: "Seed",
          },
        ],
      },
      { lable: "procambium", opened: "false", tissue: "Seed" },
      { lable: "Vascular strands of siliques", opened: "false", tissue: "Seed" },
    ],
  },
  {
    lable: "Shoot",
    opened: "false",
    tissue: "Shoot",
    children: [
      {
        lable: "shoot apex",
        opened: "false",
        tissue: "Shoot",
        children: [
          { lable: "Epidermis", opened: "false", tissue: "Shoot" },
          { lable: "Sub-epidermis", opened: "false", tissue: "Shoot" },
          {
            lable: "shoot system",
            opened: "false",
            tissue: "Shoot",
            children: [
              {
                lable: "shoot system vascular system",
                opened: "false",
                tissue: "Shoot",
              },
            ],
          },
          {
            lable: "stoma",
            opened: "false",
            tissue: "Shoot",
            children: [
              {
                lable: "companion cell",
                opened: "false",
                tissue: "Shoot",
              },
              {
                lable: "guard cell",
                opened: "false",
                tissue: "Shoot",
              },
            ],
          },
          {
            lable: "mesophyll cell",
            opened: "false",
            tissue: "Shoot",
          },
          { lable: "Proliferating cell", opened: "false", tissue: "Shoot" },
          {
            lable: "shoot meristem",
            opened: "false",
            tissue: "Shoot",
            children: [
              {
                lable: "shoot apical meristem",
                opened: "false",
                tissue: "Shoot",
                children: [
                  {
                    lable: "shoot meristematic apical cell",
                    opened: "false",
                    tissue: "Shoot",
                  },
                  {
                    lable: "central zone",
                    opened: "false",
                    tissue: "Shoot",
                  },
                  {
                    lable: "vascular leaf founder cell",
                    opened: "false",
                    tissue: "Shoot",
                  },
                ],
              },
              {
                lable: "vascular leaf primordium",
                opened: "false",
                tissue: "Shoot",
                children: [
                  {
                    lable: "Protoderm of leaf primordium",
                    opened: "false",
                    tissue: "Shoot",
                  },
                  {
                    lable: "Young leaf primordium",
                    opened: "false",
                    tissue: "Shoot",
                  },
                ],
              },
              {
                lable: "Carpel margin meristem",
                opened: "false",
                tissue: "Shoot",
              },
              {
                lable: "floral organ primordium",
                opened: "false",
                tissue: "Shoot",
                children: [
                  {
                    lable: "Protoderm of floral organ primordium",
                    opened: "false",
                    tissue: "Shoot",
                  },
                ],
              },
              {
                lable: "meristematic cell",
                opened: "false",
                tissue: "Shoot",
              },
            ],
          },
          { lable: "phloem", opened: "false", tissue: "Shoot" },
          {
            lable: "quiescent center",
            opened: "false",
            tissue: "Shoot",
          },
          { lable: "Young flower", opened: "false", tissue: "Shoot" },
        ],
      },
      {
        lable: "shoot",
        opened: "false",
        tissue: "Shoot",
        children: [
          {
            lable: "bundle sheath cell",
            opened: "false",
            tissue: "Shoot",
          },
          {
            lable: "mesophyll cell",
            opened: "false",
            tissue: "Shoot",
          },
          {
            lable: "myrosin cell",
            opened: "false",
            tissue: "Shoot",
          },
          { lable: "Parenchyma", opened: "false", tissue: "Shoot" },
          { lable: "Proliferating cell", opened: "false", tissue: "Shoot" },
          {
            lable: "root procambium",
            opened: "false",
            tissue: "Shoot",
          },
          {
            lable: "shoot apical meristem",
            opened: "false",
            tissue: "Shoot",
          },
          {
            lable: "shoot epidermal cell",
            opened: "false",
            tissue: "Shoot",
          },
          { lable: "Stressed cell", opened: "false", tissue: "Shoot" },
        ],
      },
    ],
  },
];
export { cellTree };
