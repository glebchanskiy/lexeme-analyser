export const mockResponse = {
  status: {
    code: "0",
    msg: "OK",
    credits: "1",
    remaining_credits: "79",
  },
  token_list: [
    {
      affected_by_negation: "no",
      endp: "94",
      id: "18",
      inip: "0",
      quote_level: "0",
      separation: "A",
      style: {
        isBold: "no",
        isItalics: "no",
        isTitle: "no",
        isUnderlined: "no",
      },
      token_list: [
        {
          affected_by_negation: "no",
          analysis_list: [
            {
              lemma: "*",
              origin: "SEG",
              original_form:
                "Spring Security provides support for username and password being provided through an HTML form",
              tag: "Z-----------",
              tag_info: "clause",
            },
          ],
          endp: "93",
          form: "Spring Security provides support for username and password being provided through an HTML form",
          id: "31",
          inip: "0",
          quote_level: "0",
          separation: "_",
          style: {
            isBold: "no",
            isItalics: "no",
            isTitle: "no",
            isUnderlined: "no",
          },
          token_list: [
            {
              affected_by_negation: "no",
              analysis_list: [
                {
                  lemma: "security",
                  origin: "SEG",
                  original_form: "Spring Security",
                  tag: "GN-S3S--",
                  tag_info: "phrase, nominal, singular, 3rd person, subject",
                },
              ],
              endp: "14",
              form: "Spring Security",
              head: "2",
              id: "22",
              inip: "0",
              normalized_form: "date@||s||||||||",
              quote_level: "0",
              separation: "_",
              style: {
                isBold: "no",
                isItalics: "no",
                isTitle: "no",
                isUnderlined: "no",
              },
              syntactic_tree_relation_list: [
                {
                  id: "3",
                  type: "isSubject",
                },
              ],
              token_list: [
                {
                  affected_by_negation: "no",
                  analysis_list: [
                    {
                      lemma: "spring",
                      origin: "SEG",
                      original_form: "spring",
                      sense_id_list: [
                        {
                          sense_id: "83f3a73906",
                        },
                      ],
                      tag: "ND-S-N4",
                      tag_info:
                        "noun, date, singular, medium-low frequency word",
                    },
                  ],
                  endp: "5",
                  form: "Spring",
                  id: "1",
                  inip: "0",
                  normalized_form: "date@||s||||||||",
                  quote_level: "0",
                  sense_list: [
                    {
                      form: "spring",
                      id: "83f3a73906",
                      info: "sementity/class=class@fiction=nonfiction@id=ODENTITY_TIMEX@type=Top>Timex\tsemld_list=http://en.wikipedia.org/wiki/SPRING|http://pt.wikipedia.org/wiki/SPRING|sumo:TimeInterval",
                    },
                  ],
                  separation: "_",
                  style: {
                    isBold: "no",
                    isItalics: "no",
                    isTitle: "no",
                    isUnderlined: "no",
                  },
                  topic_list: {
                    concept_list: [
                      {
                        form: "spring",
                        id: "83f3a73906",
                        sementity: {
                          class: "class",
                          fiction: "nonfiction",
                          id: "ODENTITY_TIMEX",
                          type: "Top>Timex",
                        },
                        semld_list: [
                          "http://en.wikipedia.org/wiki/SPRING",
                          "http://pt.wikipedia.org/wiki/SPRING",
                          "sumo:TimeInterval",
                        ],
                      },
                    ],
                  },
                },
                {
                  affected_by_negation: "no",
                  analysis_list: [
                    {
                      lemma: "security",
                      origin: "SEG",
                      original_form: "security",
                      sense_id_list: [
                        {
                          sense_id: "e0e15ffea3",
                        },
                      ],
                      tag: "NC-S-N6",
                      tag_info:
                        "noun, common, singular, medium-high frequency word",
                    },
                  ],
                  endp: "14",
                  form: "Security",
                  id: "2",
                  inip: "7",
                  quote_level: "0",
                  sense_list: [
                    {
                      form: "security",
                      id: "e0e15ffea3",
                      info: "sementity/class=class@fiction=nonfiction@id=ODENTITY_TOP@type=Top\tsemld_list=sumo:Entity",
                    },
                  ],
                  separation: "1",
                  style: {
                    isBold: "no",
                    isItalics: "no",
                    isTitle: "no",
                    isUnderlined: "no",
                  },
                  topic_list: {
                    concept_list: [
                      {
                        form: "security",
                        id: "e0e15ffea3",
                        sementity: {
                          class: "class",
                          fiction: "nonfiction",
                          id: "ODENTITY_TOP",
                          type: "Top",
                        },
                        semld_list: ["sumo:Entity"],
                      },
                    ],
                  },
                },
              ],
              type: "phrase",
            },
            {
              affected_by_negation: "no",
              analysis_list: [
                {
                  lemma: "provide",
                  origin: "SEG",
                  original_form: "provides",
                  sense_id_list: [
                    {
                      sense_id: "ODENTITY_LINGUISTIC_COMMUNICATION",
                    },
                    {
                      sense_id: "ODENTITY_CHANGE_OF_POSSESSION",
                    },
                    {
                      sense_id: "ODENTITY_INTENTIONAL_PROCESS",
                    },
                    {
                      sense_id: "ODENTITY_TRANSLOCATION",
                    },
                  ],
                  tag: "VI-S3PSA-N-N6",
                  tag_info:
                    "verb, indicative, singular, 3rd person, present, simple, active, medium-high frequency word",
                },
              ],
              endp: "23",
              form: "provides",
              id: "3",
              inip: "16",
              quote_level: "0",
              sense_list: [
                {
                  form: "provide",
                  id: "ODENTITY_CHANGE_OF_POSSESSION",
                  info: "sementity/id=ODENTITY_CHANGE_OF_POSSESSION@type=Top>Process>IntentionalProcess>SocialInteraction>ChangeOfPossession\tsemld_list=sumo:IntentionalProcess",
                },
                {
                  form: "provide",
                  id: "ODENTITY_INTENTIONAL_PROCESS",
                  info: "sementity/id=ODENTITY_INTENTIONAL_PROCESS@type=Top>Process>IntentionalProcess\tsemld_list=sumo:IntentionalProcess",
                },
                {
                  form: "provide",
                  id: "ODENTITY_LINGUISTIC_COMMUNICATION",
                  info: "sementity/id=ODENTITY_LINGUISTIC_COMMUNICATION@type=Top>Process>ContentBearingProcess>CommunicationProcess>LinguisticCommunication\tsemld_list=sumo:Entity",
                },
                {
                  form: "provide",
                  id: "ODENTITY_TRANSLOCATION",
                  info: "sementity/id=ODENTITY_TRANSLOCATION@type=Top>Process>Motion>Translocation\tsemld_list=sumo:Entity",
                },
              ],
              separation: "1",
              style: {
                isBold: "no",
                isItalics: "no",
                isTitle: "no",
                isUnderlined: "no",
              },
              syntactic_tree_relation_list: [
                {
                  id: "22",
                  type: "iof_isSubject",
                },
                {
                  id: "23",
                  type: "iof_isDirectObject",
                },
              ],
            },
            {
              affected_by_negation: "no",
              analysis_list: [
                {
                  lemma: "support",
                  origin: "SEG",
                  original_form: "support",
                  tag: "GN-S3D--",
                  tag_info:
                    "phrase, nominal, singular, 3rd person, direct object",
                },
              ],
              endp: "93",
              form: "support for username and password being provided through an HTML form",
              head: "4",
              id: "23",
              inip: "25",
              quote_level: "0",
              separation: "1",
              style: {
                isBold: "no",
                isItalics: "no",
                isTitle: "no",
                isUnderlined: "no",
              },
              syntactic_tree_relation_list: [
                {
                  id: "3",
                  type: "isDirectObject",
                },
              ],
              token_list: [
                {
                  affected_by_negation: "no",
                  analysis_list: [
                    {
                      lemma: "support",
                      origin: "SEG",
                      original_form: "support",
                      tag: "NC-S-N6",
                      tag_info:
                        "noun, common, singular, medium-high frequency word",
                    },
                  ],
                  endp: "31",
                  form: "support",
                  id: "4",
                  inip: "25",
                  quote_level: "0",
                  separation: "1",
                  style: {
                    isBold: "no",
                    isItalics: "no",
                    isTitle: "no",
                    isUnderlined: "no",
                  },
                },
                {
                  affected_by_negation: "no",
                  analysis_list: [
                    {
                      lemma: "for",
                      origin: "SEG",
                      original_form: "for username and password",
                      tag: "GY------",
                      tag_info: "phrase, prepositional",
                    },
                  ],
                  endp: "57",
                  form: "for username and password",
                  head: "5",
                  id: "29",
                  inip: "33",
                  quote_level: "0",
                  separation: "1",
                  style: {
                    isBold: "no",
                    isItalics: "no",
                    isTitle: "no",
                    isUnderlined: "no",
                  },
                  token_list: [
                    {
                      affected_by_negation: "no",
                      analysis_list: [
                        {
                          lemma: "for",
                          origin: "SEG",
                          original_form: "for",
                          tag: "YN5",
                          tag_info: "preposition, medium frequency word",
                        },
                      ],
                      endp: "35",
                      form: "for",
                      id: "5",
                      inip: "33",
                      quote_level: "0",
                      separation: "1",
                      style: {
                        isBold: "no",
                        isItalics: "no",
                        isTitle: "no",
                        isUnderlined: "no",
                      },
                    },
                    {
                      affected_by_negation: "no",
                      analysis_list: [
                        {
                          lemma: "*",
                          origin: "SEG",
                          original_form: "username and password",
                          tag: "GN-S3---",
                          tag_info: "phrase, nominal, singular, 3rd person",
                        },
                        {
                          lemma: "*",
                          origin: "SEG",
                          original_form: "username and password",
                          tag: "GN-P3---",
                          tag_info: "phrase, nominal, plural, 3rd person",
                        },
                      ],
                      endp: "57",
                      form: "username and password",
                      id: "28",
                      inip: "37",
                      quote_level: "0",
                      separation: "1",
                      style: {
                        isBold: "no",
                        isItalics: "no",
                        isTitle: "no",
                        isUnderlined: "no",
                      },
                      token_list: [
                        {
                          affected_by_negation: "no",
                          analysis_list: [
                            {
                              lemma: "username",
                              origin: "SEG",
                              original_form: "username",
                              tag: "GN-S3---",
                              tag_info: "phrase, nominal, singular, 3rd person",
                            },
                          ],
                          endp: "44",
                          form: "username",
                          head: "6",
                          id: "24",
                          inip: "37",
                          quote_level: "0",
                          separation: "1",
                          style: {
                            isBold: "no",
                            isItalics: "no",
                            isTitle: "no",
                            isUnderlined: "no",
                          },
                          token_list: [
                            {
                              affected_by_negation: "no",
                              analysis_list: [
                                {
                                  lemma: "username",
                                  origin: "SEG",
                                  original_form: "username",
                                  tag: "NC-S-N-",
                                  tag_info: "noun, common, singular",
                                },
                              ],
                              endp: "44",
                              form: "username",
                              id: "6",
                              inip: "37",
                              quote_level: "0",
                              separation: "1",
                              style: {
                                isBold: "no",
                                isItalics: "no",
                                isTitle: "no",
                                isUnderlined: "no",
                              },
                            },
                          ],
                          type: "phrase",
                        },
                        {
                          affected_by_negation: "no",
                          analysis_list: [
                            {
                              lemma: "and",
                              origin: "SEG",
                              original_form: "and",
                              tag: "CCYN9",
                              tag_info:
                                "conjunction, coordinated, copulative, maximum frequency word",
                            },
                          ],
                          endp: "48",
                          form: "and",
                          id: "7",
                          inip: "46",
                          quote_level: "0",
                          separation: "1",
                          style: {
                            isBold: "no",
                            isItalics: "no",
                            isTitle: "no",
                            isUnderlined: "no",
                          },
                        },
                        {
                          affected_by_negation: "no",
                          analysis_list: [
                            {
                              lemma: "password",
                              origin: "SEG",
                              original_form: "password",
                              tag: "GN-S3---",
                              tag_info: "phrase, nominal, singular, 3rd person",
                            },
                          ],
                          endp: "57",
                          form: "password",
                          head: "8",
                          id: "25",
                          inip: "50",
                          quote_level: "0",
                          separation: "1",
                          style: {
                            isBold: "no",
                            isItalics: "no",
                            isTitle: "no",
                            isUnderlined: "no",
                          },
                          token_list: [
                            {
                              affected_by_negation: "no",
                              analysis_list: [
                                {
                                  lemma: "password",
                                  origin: "SEG",
                                  original_form: "password",
                                  sense_id_list: [
                                    {
                                      sense_id: "c78ce5968b",
                                    },
                                  ],
                                  tag: "NC-S-N-",
                                  tag_info: "noun, common, singular",
                                },
                              ],
                              endp: "57",
                              form: "password",
                              id: "8",
                              inip: "50",
                              quote_level: "0",
                              sense_list: [
                                {
                                  form: "password",
                                  id: "c78ce5968b",
                                  info: "sementity/class=class@fiction=nonfiction@id=ODENTITY_TOP@type=Top\tsemld_list=sumo:Entity\tsemtheme_list/id=ODTHEME_INTERNET@type=Top>Technology>Internet",
                                },
                              ],
                              separation: "1",
                              style: {
                                isBold: "no",
                                isItalics: "no",
                                isTitle: "no",
                                isUnderlined: "no",
                              },
                              topic_list: {
                                concept_list: [
                                  {
                                    form: "password",
                                    id: "c78ce5968b",
                                    sementity: {
                                      class: "class",
                                      fiction: "nonfiction",
                                      id: "ODENTITY_TOP",
                                      type: "Top",
                                    },
                                    semld_list: ["sumo:Entity"],
                                    semtheme_list: [
                                      {
                                        id: "ODTHEME_INTERNET",
                                        type: "Top>Technology>Internet",
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                          type: "phrase",
                        },
                      ],
                      type: "phrase",
                    },
                  ],
                  type: "phrase",
                },
                {
                  affected_by_negation: "no",
                  analysis_list: [
                    {
                      lemma: "*",
                      origin: "SEG",
                      original_form: "being provided through an HTML form",
                      tag: "ZA----PP----",
                      tag_info: "clause, adjectival, participle, present",
                    },
                  ],
                  endp: "93",
                  form: "being provided through an HTML form",
                  id: "30",
                  inip: "59",
                  quote_level: "0",
                  separation: "1",
                  style: {
                    isBold: "no",
                    isItalics: "no",
                    isTitle: "no",
                    isUnderlined: "no",
                  },
                  token_list: [
                    {
                      affected_by_negation: "no",
                      analysis_list: [
                        {
                          lemma: "provide",
                          origin: "SEG",
                          original_form: "being provided",
                          tag: "VP---PSP-N-N9",
                          tag_info:
                            "verb, participle, present, simple, passive, maximum frequency word",
                        },
                      ],
                      endp: "72",
                      form: "being provided",
                      head: "9",
                      id: "17",
                      inip: "59",
                      quote_level: "0",
                      separation: "1",
                      style: {
                        isBold: "no",
                        isItalics: "no",
                        isTitle: "no",
                        isUnderlined: "no",
                      },
                      syntactic_tree_relation_list: [
                        {
                          id: "27",
                          type: "iof_isComplement",
                        },
                      ],
                      type: "multiword",
                    },
                    {
                      affected_by_negation: "no",
                      analysis_list: [
                        {
                          lemma: "through",
                          origin: "SEG",
                          original_form: "through an HTML form",
                          tag: "GY---C--",
                          tag_info: "phrase, prepositional, complement",
                        },
                      ],
                      endp: "93",
                      form: "through an HTML form",
                      head: "11",
                      id: "27",
                      inip: "74",
                      quote_level: "0",
                      separation: "1",
                      style: {
                        isBold: "no",
                        isItalics: "no",
                        isTitle: "no",
                        isUnderlined: "no",
                      },
                      syntactic_tree_relation_list: [
                        {
                          id: "17",
                          type: "isComplement",
                        },
                      ],
                      token_list: [
                        {
                          affected_by_negation: "no",
                          analysis_list: [
                            {
                              lemma: "through",
                              origin: "SEG",
                              original_form: "through",
                              tag: "YN5",
                              tag_info: "preposition, medium frequency word",
                            },
                          ],
                          endp: "80",
                          form: "through",
                          id: "11",
                          inip: "74",
                          quote_level: "0",
                          separation: "1",
                          style: {
                            isBold: "no",
                            isItalics: "no",
                            isTitle: "no",
                            isUnderlined: "no",
                          },
                        },
                        {
                          affected_by_negation: "no",
                          analysis_list: [
                            {
                              lemma: "form",
                              origin: "SEG",
                              original_form: "an HTML form",
                              tag: "GN-S3---",
                              tag_info: "phrase, nominal, singular, 3rd person",
                            },
                          ],
                          endp: "93",
                          form: "an HTML form",
                          head: "14",
                          id: "26",
                          inip: "82",
                          quote_level: "0",
                          separation: "1",
                          style: {
                            isBold: "no",
                            isItalics: "no",
                            isTitle: "no",
                            isUnderlined: "no",
                          },
                          token_list: [
                            {
                              affected_by_negation: "no",
                              analysis_list: [
                                {
                                  lemma: "an",
                                  origin: "SEG",
                                  original_form: "an",
                                  tag: "QD-SPN8",
                                  tag_info:
                                    "quantifier, determiner, singular, positive, very high frequency word",
                                },
                              ],
                              endp: "83",
                              form: "an",
                              id: "12",
                              inip: "82",
                              quote_level: "0",
                              separation: "1",
                              style: {
                                isBold: "no",
                                isItalics: "no",
                                isTitle: "no",
                                isUnderlined: "no",
                              },
                            },
                            {
                              affected_by_negation: "no",
                              analysis_list: [
                                {
                                  lemma: "HTML",
                                  origin: "SEG",
                                  original_form: "HTML",
                                  remission: "@Hypertext_Markup_Language",
                                  sense_id_list: [
                                    {
                                      sense_id: "2c505cce67",
                                    },
                                  ],
                                  tag: "NP-S-S-",
                                  tag_info: "noun, proper, singular, initials",
                                },
                                {
                                  lemma: "html",
                                  origin: "SEG",
                                  original_form: "html",
                                  sense_id_list: [
                                    {
                                      sense_id: "08da16f472",
                                    },
                                  ],
                                  tag: "NC-S-N-",
                                  tag_info: "noun, common, singular",
                                },
                              ],
                              endp: "88",
                              form: "HTML",
                              id: "13",
                              inip: "85",
                              quote_level: "0",
                              sense_list: [
                                {
                                  form: ".html",
                                  id: "08da16f472",
                                  info: "sementity/class=class@fiction=nonfiction@id=ODENTITY_TOP@type=Top\tsemld_list=sumo:Entity\tsemtheme_list/id=ODTHEME_COMPUTING@type=Top>Technology>Computing",
                                },
                                {
                                  form: "HTML",
                                  id: "2c505cce67",
                                  info: "sementity/class=class@fiction=nonfiction@id=ODENTITY_METHOD_SYSTEM@type=Top>OtherEntity>MethodSystem\tsemld_list=http://en.wikipedia.org/wiki/HTML|http://ar.wikipedia.org/wiki/لغة_ترميز_النص_الفائق|http://ca.wikipedia.org/wiki/Hyper_Text_Markup_Language|http://cs.wikipedia.org/wiki/HyperText_Markup_Language|http://da.wikipedia.org/wiki/HTML|http://de.wikipedia.org/wiki/Hypertext_Markup_Language|http://es.wikipedia.org/wiki/HTML|http://fi.wikipedia.org/wiki/HTML|http://fr.wikipedia.org/wiki/Hypertext_Markup_Language|http://he.wikipedia.org/wiki/HTML|http://hi.wikipedia.org/wiki/ऍचटीऍमऍल|http://id.wikipedia.org/wiki/HTML|http://it.wikipedia.org/wiki/HTML|http://ja.wikipedia.org/wiki/HyperText_Markup_Language|http://ko.wikipedia.org/wiki/HTML|http://nl.wikipedia.org/wiki/HyperText_Markup_Language|http://no.wikipedia.org/wiki/HTML|http://pl.wikipedia.org/wiki/HTML|http://pt.wikipedia.org/wiki/HTML|http://ro.wikipedia.org/wiki/HyperText_Markup_Language|http://ru.wikipedia.org/wiki/HTML|http://sv.wikipedia.org/wiki/HTML|http://tr.wikipedia.org/wiki/HTML|http://zh.wikipedia.org/wiki/HTML|http://d-nb.info/gnd/4373477-7|http://linked-web-apis.fit.cvut.cz/resource/html_format|http://linked-web-apis.fit.cvut.cz/resource/html_protocol|http://sw.cyc.com/concept/Mx4rvWVukJwpEbGdrcN5Y29ycA|http://www.w3.org/2006/03/wn/wn20/instances/synset-format-noun-1|sumo:MethodSystem\tsemtheme_list/id=ODTHEME_COMPUTING@type=Top>Technology>Computing",
                                  official_form: "Hypertext Markup Language",
                                },
                              ],
                              separation: "1",
                              style: {
                                isBold: "no",
                                isItalics: "no",
                                isTitle: "no",
                                isUnderlined: "no",
                              },
                              topic_list: {
                                concept_list: [
                                  {
                                    form: ".html",
                                    id: "08da16f472",
                                    sementity: {
                                      class: "class",
                                      fiction: "nonfiction",
                                      id: "ODENTITY_TOP",
                                      type: "Top",
                                    },
                                    semld_list: ["sumo:Entity"],
                                    semtheme_list: [
                                      {
                                        id: "ODTHEME_COMPUTING",
                                        type: "Top>Technology>Computing",
                                      },
                                    ],
                                  },
                                  {
                                    form: "HTML",
                                    id: "2c505cce67",
                                    official_form: "Hypertext Markup Language",
                                    sementity: {
                                      class: "class",
                                      fiction: "nonfiction",
                                      id: "ODENTITY_METHOD_SYSTEM",
                                      type: "Top>OtherEntity>MethodSystem",
                                    },
                                    semld_list: [
                                      "http://en.wikipedia.org/wiki/HTML",
                                      "http://ar.wikipedia.org/wiki/لغة_ترميز_النص_الفائق",
                                      "http://ca.wikipedia.org/wiki/Hyper_Text_Markup_Language",
                                      "http://cs.wikipedia.org/wiki/HyperText_Markup_Language",
                                      "http://da.wikipedia.org/wiki/HTML",
                                      "http://de.wikipedia.org/wiki/Hypertext_Markup_Language",
                                      "http://es.wikipedia.org/wiki/HTML",
                                      "http://fi.wikipedia.org/wiki/HTML",
                                      "http://fr.wikipedia.org/wiki/Hypertext_Markup_Language",
                                      "http://he.wikipedia.org/wiki/HTML",
                                      "http://hi.wikipedia.org/wiki/ऍचटीऍमऍल",
                                      "http://id.wikipedia.org/wiki/HTML",
                                      "http://it.wikipedia.org/wiki/HTML",
                                      "http://ja.wikipedia.org/wiki/HyperText_Markup_Language",
                                      "http://ko.wikipedia.org/wiki/HTML",
                                      "http://nl.wikipedia.org/wiki/HyperText_Markup_Language",
                                      "http://no.wikipedia.org/wiki/HTML",
                                      "http://pl.wikipedia.org/wiki/HTML",
                                      "http://pt.wikipedia.org/wiki/HTML",
                                      "http://ro.wikipedia.org/wiki/HyperText_Markup_Language",
                                      "http://ru.wikipedia.org/wiki/HTML",
                                      "http://sv.wikipedia.org/wiki/HTML",
                                      "http://tr.wikipedia.org/wiki/HTML",
                                      "http://zh.wikipedia.org/wiki/HTML",
                                      "http://d-nb.info/gnd/4373477-7",
                                      "http://linked-web-apis.fit.cvut.cz/resource/html_format",
                                      "http://linked-web-apis.fit.cvut.cz/resource/html_protocol",
                                      "http://sw.cyc.com/concept/Mx4rvWVukJwpEbGdrcN5Y29ycA",
                                      "http://www.w3.org/2006/03/wn/wn20/instances/synset-format-noun-1",
                                      "sumo:MethodSystem",
                                    ],
                                    semtheme_list: [
                                      {
                                        id: "ODTHEME_COMPUTING",
                                        type: "Top>Technology>Computing",
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                            {
                              affected_by_negation: "no",
                              analysis_list: [
                                {
                                  lemma: "form",
                                  origin: "SEG",
                                  original_form: "form",
                                  tag: "NC-S-N6",
                                  tag_info:
                                    "noun, common, singular, medium-high frequency word",
                                },
                              ],
                              endp: "93",
                              form: "form",
                              id: "14",
                              inip: "90",
                              quote_level: "0",
                              separation: "1",
                              style: {
                                isBold: "no",
                                isItalics: "no",
                                isTitle: "no",
                                isUnderlined: "no",
                              },
                            },
                          ],
                          type: "phrase",
                        },
                      ],
                      type: "phrase",
                    },
                  ],
                  type: "phrase",
                },
              ],
              type: "phrase",
            },
          ],
          topic_list: {
            relation_list: [
              {
                complement_list: [
                  {
                    form: "support for username and password being provided through an HTML form",
                    type: "isDirectObject",
                  },
                ],
                degree: "1",
                endp: "93",
                form: "Spring Security provides support for username and password being provided through an HTML form.",
                inip: "0",
                subject: {
                  form: "Spring Security",
                  lemma_list: ["security"],
                  sense_id_list: ["e0e15ffea3"],
                },
                verb: {
                  form: "provides",
                  lemma_list: ["provide"],
                  sense_id_list: [
                    "ODENTITY_CHANGE_OF_POSSESSION",
                    "ODENTITY_INTENTIONAL_PROCESS",
                    "ODENTITY_LINGUISTIC_COMMUNICATION",
                    "ODENTITY_TRANSLOCATION",
                  ],
                },
              },
            ],
          },
          type: "phrase",
        },
        {
          affected_by_negation: "no",
          analysis_list: [
            {
              lemma: ".",
              origin: "SEG",
              original_form: ".",
              tag: "1D--",
              tag_info: "punctuation, other",
            },
          ],
          endp: "94",
          form: ".",
          id: "15",
          inip: "94",
          quote_level: "0",
          separation: "A",
          style: {
            isBold: "no",
            isItalics: "no",
            isTitle: "no",
            isUnderlined: "no",
          },
        },
      ],
      type: "sentence",
    },
  ],
}
