//正则 (..PO:........)

const cellTree = [
  {
    lable: "Calli",
    opened: "false",
    tissue: "Calli",
    children: [
      { lable: "Initiation stage", opened: "false", tissue: "Calli" },
      { lable: "Division stage", opened: "false", tissue: "Calli" },
      {
        lable: "Formation stage",
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
        lable: "Guard cell",
        opened: "false",
        tissue: "Cotyledon",
        children: [
          { lable: "Guard mother cell", opened: "false", tissue: "Cotyledon" },
          { lable: "Young guard cell", opened: "false", tissue: "Cotyledon" },
          { lable: "Meristemoid", opened: "false", tissue: "Cotyledon" },
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
      { lable: "Mesophyll cell", opened: "false", tissue: "Cotyledon" },
      { lable: "Leaf pavement cell", opened: "false", tissue: "Cotyledon" },
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
          { lable: "Filament", opened: "false", tissue: "Flower" },
          { lable: "Ovary replum", opened: "false", tissue: "Flower" },
          { lable: "Petal vascular system", opened: "false", tissue: "Flower" },
          { lable: "Style", opened: "false", tissue: "Flower" },
          {
            lable: "Valve margins of pistils",
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
          { lable: "Cambium cell", opened: "false", tissue: "Flower" },
          { lable: "Flower meristem", opened: "false", tissue: "Flower" },
          { lable: "Mesophyll cell", opened: "false", tissue: "Flower" },
          { lable: "Phloem", opened: "false", tissue: "Flower" },
          { lable: "Xylem parenchyma", opened: "false", tissue: "Flower" },
        ],
      },
      {
        lable: "Flower",
        opened: "false",
        tissue: "Flower",
        children: [
          {
            lable: "Anther",
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
            lable: "Carpel",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Early carpel", opened: "false", tissue: "Flower" },
            ],
          },
          {
            lable: "Floral epidermis",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Trichome", opened: "false", tissue: "Flower" },
            ],
          },
          {
            lable: "Flower vascular system",
            opened: "false",
            tissue: "Flower",
          },
          {
            lable: "Inflorescence",
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
          { lable: "Mesophyll cell", opened: "false", tissue: "Flower" },
          {
            lable: "Meristem",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Flower meristem", opened: "false", tissue: "Flower" },
              {
                lable: "Inflorescence meristem",
                opened: "false",
                tissue: "Flower",
              },
            ],
          },
          {
            lable: "Pistil",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Stigma", opened: "false", tissue: "Flower" },
              {
                lable: "Plant ovary",
                opened: "false",
                tissue: "Flower",
                children: [
                  {
                    lable: "Plant ovary ovule",
                    opened: "false",
                    tissue: "Flower",
                    children: [
                      {
                        lable: "Female gametophyte",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "Antipodal cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Embryo apical cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Embryo basal cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Embryo sac central cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Embryo sac egg cell",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Synergid",
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
                            lable: "Plant egg cell",
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
                        lable: "Integument",
                        opened: "false",
                        tissue: "Flower",
                        children: [
                          {
                            lable: "Outer integument",
                            opened: "false",
                            tissue: "Flower",
                          },
                          {
                            lable: "Inner integument",
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
            lable: "Stamen",
            opened: "false",
            tissue: "Flower",
            children: [
              {
                lable: "Pollen",
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
            lable: "Perianth",
            opened: "false",
            tissue: "Flower",
            children: [
              { lable: "Early perianth", opened: "false", tissue: "Flower" },
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
        lable: "Lateral root",
        opened: "false",
        tissue: "Root",
        children: [
          {
            lable: "Epidermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Non-hair root epidermal cell",
                opened: "false",
                tissue: "Root",
              },
              { lable: "Trichoblast", opened: "false", tissue: "Root" },
            ],
          },
          {
            lable: "Lateral root cap",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Proximal lateral root cap",
                opened: "false",
                tissue: "Root",
              },
              { lable: "Columella", opened: "false", tissue: "Root" },
            ],
          },
          {
            lable: "Lateral root primordium",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Young lateral root primordium",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Pericyclic lateral root primordium",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "Pericycle cell",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Phloem pole pericycle cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Xylem pole pericycle cell",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "Phloem",
            opened: "false",
            tissue: "Root",
            children: [
              { lable: "Companion cell", opened: "false", tissue: "Root" },
              { lable: "Protophloem", opened: "false", tissue: "Root" },
              {
                lable: "Protophloem-like cell",
                opened: "false",
                tissue: "Root",
              },
            ],
          },
          {
            lable: "Quiescent center",
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
          { lable: "Root cortex", opened: "false", tissue: "Root" },
          {
            lable: "Root endodermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable:
                  "Endodermis and lateral root primordia responding endodermis",
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
          { lable: "Root lateral meristem", opened: "false", tissue: "Root" },
          { lable: "Root procambium", opened: "false", tissue: "Root" },
          {
            lable: "Root stele",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Xylem",
                opened: "false",
                tissue: "Root",
                children: [
                  { lable: "Protoxylem", opened: "false", tissue: "Root" },
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
          { lable: "Cambium", opened: "false", tissue: "Root" },
          { lable: "Stem cell niche", opened: "false", tissue: "Root" },
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
                    lable: "Pericycle cell",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "Phloem pole pericycle cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "Xylem pole pericycle cell",
                        opened: "false",
                        tissue: "Root",
                      },
                    ],
                  },
                  {
                    lable: "Root vascular system",
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
                            lable: "Protoxylem",
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
                            lable: "Metaxylem",
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
                            lable: "Companion cell",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Metaphloem & Companion cell",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Protophloem",
                            opened: "false",
                            tissue: "Root",
                          },
                          {
                            lable: "Sieve element",
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
              {
                lable: "Meristem trichoblast",
                opened: "false",
                tissue: "Root",
              },
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
                  {
                    lable: "Vascular Initial",
                    opened: "false",
                    tissue: "Root",
                  },
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
                    lable: "Root apical meristem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "Root procambium",
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
          { lable: "Photosynthetic cell", opened: "false", tissue: "Root" },
          {
            lable: "Root cap",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Columella root cap cell",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Proximal columella",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "Distal columella",
                    opened: "false",
                    tissue: "Root",
                  },
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
            lable: "Root epidermis",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Non-hair root epidermal cell",
                opened: "false",
                tissue: "Root",
              },
              {
                lable: "Root hair",
                opened: "false",
                tissue: "Root",
                children: [
                  { lable: "Trichoblast", opened: "false", tissue: "Root" },
                  { lable: "Early root hair", opened: "false", tissue: "Root" },
                  {
                    lable: "Mature root hair",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
            ],
          },
          {
            lable: "Root stele",
            opened: "false",
            tissue: "Root",
            children: [
              {
                lable: "Pericycle cell",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Phloem pole pericycle cell",
                    opened: "false",
                    tissue: "Root",
                  },
                ],
              },
              {
                lable: "Root vascular system",
                opened: "false",
                tissue: "Root",
                children: [
                  {
                    lable: "Vasculature and columella",
                    opened: "false",
                    tissue: "Root",
                  },
                  {
                    lable: "Xylem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "Protoxylem",
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
                      { lable: "Metaxylem", opened: "false", tissue: "Root" },
                    ],
                  },
                  {
                    lable: "Phloem",
                    opened: "false",
                    tissue: "Root",
                    children: [
                      {
                        lable: "Companion cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      {
                        lable: "Metaphloem & Companion cell",
                        opened: "false",
                        tissue: "Root",
                      },
                      { lable: "Protophloem", opened: "false", tissue: "Root" },
                      {
                        lable: "Sieve element",
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
          { lable: "Guard cell", opened: "false", tissue: "Leaf" },
          { lable: "Mesophyll cell", opened: "false", tissue: "Leaf" },
          { lable: "Vascular system", opened: "false", tissue: "Leaf" },
        ],
      },
      {
        lable: "Leaf epidermis",
        opened: "false",
        tissue: "Leaf",
        children: [
          {
            lable: "Leaf pavement cell",
            opened: "false",
            tissue: "Leaf",
            children: [
              {
                lable: "Leaf abaxial pavement cell",
                opened: "false",
                tissue: "Leaf",
              },
              {
                lable: "Leaf adaxial pavement cell",
                opened: "false",
                tissue: "Leaf",
              },
            ],
          },
          { lable: "Leaf trichome", opened: "false", tissue: "Leaf" },
          {
            lable: "Leaf guard cell",
            opened: "false",
            tissue: "Leaf",
            children: [
              { lable: "Guard mother cell", opened: "false", tissue: "Leaf" },
              { lable: "Young guard cell", opened: "false", tissue: "Leaf" },
            ],
          },
          { lable: "Stomatal initial cell", opened: "false", tissue: "Leaf" },
          { lable: "Hydathode", opened: "false", tissue: "Leaf" },
          { lable: "Meristemoid mother cell", opened: "false", tissue: "Leaf" },
        ],
      },
      {
        lable: "Leaf vascular system",
        opened: "false",
        tissue: "Leaf",
        children: [
          {
            lable: "Phloem",
            opened: "false",
            tissue: "Leaf",
            children: [
              { lable: "Companion cell", opened: "false", tissue: "Leaf" },
              { lable: "Phloem parenchyma", opened: "false", tissue: "Leaf" },
              { lable: "Protophloem", opened: "false", tissue: "Leaf" },
              { lable: "Sieve element", opened: "false", tissue: "Leaf" },
            ],
          },
          { lable: "Xylem", opened: "false", tissue: "Leaf" },
        ],
      },
      { lable: "Meristem", opened: "false", tissue: "Leaf" },
      {
        lable: "Mesophyll cell",
        opened: "false",
        tissue: "Leaf",
        children: [
          { lable: "Palisade mesophyll cell", opened: "false", tissue: "Leaf" },
          { lable: "Spongy mesophyll cell", opened: "false", tissue: "Leaf" },
        ],
      },
      { lable: "Myrosinase cell", opened: "false", tissue: "Leaf" },
      { lable: "Initial cell", opened: "false", tissue: "Leaf" },
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
            lable: "Protoderm",
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
        lable: "Endosperm",
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
              { lable: "Chalazal cyst", opened: "false", tissue: "Seed" },
            ],
          },
          {
            lable: "Micropylar endosperm",
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
                lable:
                  "Endosperm at linear cotyledon and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
          {
            lable: "Peripheral endosperm",
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
                lable:
                  "Peripheral endosperm at the globular stage of development",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable: "Potential peripheral",
                opened: "false",
                tissue: "Seed",
              },
            ],
          },
        ],
      },
      { lable: "Flavonol-synthesizing", opened: "false", tissue: "Seed" },
      { lable: "Ovary placenta", opened: "false", tissue: "Seed" },
      { lable: "Ovule primordium", opened: "false", tissue: "Seed" },
      { lable: "PA-synthesizing endothelium", opened: "false", tissue: "Seed" },
      {
        lable: "Seed coat",
        opened: "false",
        tissue: "Seed",
        children: [
          { lable: "Chalazal seed coat", opened: "false", tissue: "Seed" },
          {
            lable: "Developing seed coat",
            opened: "false",
            tissue: "Seed",
            children: [
              {
                lable: "Seed coat at globular and maturation green stages",
                opened: "false",
                tissue: "Seed",
              },
              {
                lable:
                  "Seed coat at linear cotyledon and maturation green stages",
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
            lable: "Seed coat anatomy",
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
              { lable: "Seed coat epidermis", opened: "false", tissue: "Seed" },
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
      { lable: "Seed funicle", opened: "false", tissue: "Seed" },
      {
        lable: "Plant embryo",
        opened: "false",
        tissue: "Seed",
        children: [
          { lable: "Embryo root", opened: "false", tissue: "Seed" },
          { lable: "Plant embryo cotyledon", opened: "false", tissue: "Seed" },
        ],
      },
      { lable: "Procambium", opened: "false", tissue: "Seed" },
      {
        lable: "Vascular strands of siliques",
        opened: "false",
        tissue: "Seed",
      },
    ],
  },
  {
    lable: "Shoot",
    opened: "false",
    tissue: "Shoot",
    children: [
      {
        lable: "Shoot apex",
        opened: "false",
        tissue: "Shoot",
        children: [
          { lable: "Epidermis", opened: "false", tissue: "Shoot" },
          { lable: "Sub-epidermis", opened: "false", tissue: "Shoot" },
          {
            lable: "Shoot system",
            opened: "false",
            tissue: "Shoot",
            children: [
              {
                lable: "Shoot system vascular system",
                opened: "false",
                tissue: "Shoot",
              },
            ],
          },
          {
            lable: "Stoma",
            opened: "false",
            tissue: "Shoot",
            children: [
              { lable: "Companion cell", opened: "false", tissue: "Shoot" },
              { lable: "Guard cell", opened: "false", tissue: "Shoot" },
            ],
          },
          { lable: "Mesophyll cell", opened: "false", tissue: "Shoot" },
          { lable: "Proliferating cell", opened: "false", tissue: "Shoot" },
          {
            lable: "Shoot meristem",
            opened: "false",
            tissue: "Shoot",
            children: [
              {
                lable: "Shoot apical meristem",
                opened: "false",
                tissue: "Shoot",
                children: [
                  {
                    lable: "Shoot meristematic apical cell",
                    opened: "false",
                    tissue: "Shoot",
                  },
                  { lable: "Central zone", opened: "false", tissue: "Shoot" },
                  {
                    lable: "Vascular leaf founder cell",
                    opened: "false",
                    tissue: "Shoot",
                  },
                ],
              },
              {
                lable: "Vascular leaf primordium",
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
                lable: "Floral organ primordium",
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
              { lable: "Meristematic cell", opened: "false", tissue: "Shoot" },
            ],
          },
          { lable: "Phloem", opened: "false", tissue: "Shoot" },
          { lable: "Quiescent center", opened: "false", tissue: "Shoot" },
          { lable: "Young flower", opened: "false", tissue: "Shoot" },
        ],
      },
      {
        lable: "Shoot",
        opened: "false",
        tissue: "Shoot",
        children: [
          { lable: "Bundle sheath cell", opened: "false", tissue: "Shoot" },
          { lable: "Mesophyll cell", opened: "false", tissue: "Shoot" },
          { lable: "Myrosin cell", opened: "false", tissue: "Shoot" },
          { lable: "Parenchyma", opened: "false", tissue: "Shoot" },
          { lable: "Proliferating cell", opened: "false", tissue: "Shoot" },
          { lable: "Root procambium", opened: "false", tissue: "Shoot" },
          { lable: "Shoot apical meristem", opened: "false", tissue: "Shoot" },
          { lable: "Shoot epidermal cell", opened: "false", tissue: "Shoot" },
          { lable: "Stressed cell", opened: "false", tissue: "Shoot" },
        ],
      },
    ],
  },
];
export { cellTree };
