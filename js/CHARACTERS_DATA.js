/* global MFF */
MFF.CHARACTERS.DATA =
{
"agent_13" :         {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Agent 13", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Sliding Kick", "Back flip attack", "Covering Fire", "Backup", "Extreme Diversion"],
                        "gears" : ["S.H.I.E.L.D. pistol", "S.H.I.E.L.D. body suit", "Tactical duty belt", "Security communication device"],
                        "immunities" : ["S/all/skill/4/100/2"]
                       },
                       "cacw" :
                       {
                        "name" : "Agent 13", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Sliding Kick", "Air Bullets", "Covering Fire", "Backup", "Extreme Diversion"],
                        "bonus" : ["Apply to: Self","Increase chain hit damage by 10% when you attack"],
                        "links" : ["anad/iron_fist", "anad/drax", "sw_future/hulk", "cacw/hawkeye", "modern/crossbones"],
                        "gears" : ["S.H.I.E.L.D. pistol", "Black vest", "Gray shirt", "Security communication device"],
                        "immunities" : ["S/all/skill/4/100/2"]
                       }
                      }
                     },
"agent_venom" :      {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "image_version" : 3.0,
                        "name" : "Agent Venom", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Symbiote restraint", "Venom lash", "Thorn shield", "Venom swing", "Symbiote rage"],
                        "gears" : ["Claws", "Space knight costume", "Venom symbiote", "Symbiotic shifting"],
                        "immunities" : ["S/invincible/skill/5/100/5"]
                       }
                      }
                     },
"ancient_one" :      {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Ancient One", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Mystic discharge", "Mystic energy", "Ancient cure", "Inner self", "Ancient enchantment"],
                        "gears" : ["Vishanti magic", "Ancient dress", "Ancient official hat", "Gold neck ornament"],
                        "immunities" : ["S/invincible/skill/4/100/5"]
                       },
                       "doc_strange" :
                       {
                        "name" : "Ancient One", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Mystic discharge", "Mystic energy", "Ancient cure", "Inner self", "Ancient enchantment"],
                        "bonus" : ["Apply to: Self", "Increase all debuffs effect by 15%", "Increase all buffs effect by 15%"],
                        "links" : ["cacw/black_panther", "anad/angela", "catws/captain_america", "sw_1872/bullseye", "maos/mockingbird"],
                        "gears" : ["Vishanti magic", "Ancient dress", "Belt of mentor", "Gold neck ornament"],
                        "immunities" : ["S/invincible/skill/4/100/5"]
                       }
                      }
                     },
"angela" :           {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Angela", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Angel's War Rage", "Blades of Ichor", "Sword blow", "Avenging angel", "Entangle"],
                        "gears" : ["Bladed bow", "Huntress armor", "Helm of angel", "Broad belt"]
                       },
                       "sw_1602" :
                       {
                        "name" : "Angela", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Angel's War Rage", "Blades of Ichor", "Sword blow", "Avenging angel", "Entangle"],
                        "bonus" : ["Apply to: Self", "20% damage boost against BLAST type"] ,
                        "links" : ["now/red_hulk", "anad/mockingbird", "anad/sister_grimm", "modern/daisy_johnson", "ll/loki"],
                        "gears" : ["Bladed bow", "Witch hunter armor", "Helm of the hunter", "Chain mail"]
                       },
                       "anad" :
                       {
                        "name" : "Angela", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Angel's War Rage", "Blades of Ichor", "Sword blow", "Avenging angel", "Entangle"],
                        "bonus" : ["Apply to: Self", "Increase fire damage by 10%"],
                        "links" : ["unworthy/thor", "capdoc/modok", "cacw/war_machine", "modern/crossbones", "maos/mockingbird"],
                        "gears" : ["Bladed bow", "Royal armor", "Horned crown", "Regal cloak"]
                       }
                      }
                     },
"ant_man" :          {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Ant-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Pym punch", "Speeding bullet", "Bug squash", "Flying rush", "Pym discs"],
                        "gears" : ["Pym particles", "Ant-man suit", "Cybernetic helmet", "Toolbot"]
                       },
                       "mam" :
                       {
                        "name" : "Ant-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Pym punch", "Speeding bullet", "Bug squash", "Flying rush", "Pym discs"],
                        "bonus" : ["Activation rate: when using MINIATURIZE buff", "Apply to: Self", "Dodge +5% (20 sec.)", "All attack +10% (20 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["spidoc/modok", "classic_70/ghost_rider", "armored/moon_knight", "anad/angela", "aaou_speed/ultron"],
                        "gears" : ["Pym particles", "Ant-man suit", "Cybernetic helmet", "Toolbot"]
                       },
                       "cacw" :
                       {
                        "name" : "Ant-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Pym punch", "Speeding bullet", "Bug squash", "Flying rush", "Size matters"],
                        "bonus" : ["Apply to: Self", "All attack +3%", "Immune to guard break"],
                        "links" : ["cacw/black_widow", "sa/star_lord", "sw_armor_wars/kingpin", "cacw/falcon", "cacw/winter_soldier"],
                        "gears" : ["Pym particles", "Ant-man suit", "Cybernetic helmet", "Toolbot"],
                        "immunities" : ["U/guard_break"]
                       }
                      }
                     },
"black_bolt" :       {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Black bolt", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Electron channeling", "Anti-gravitational dash", "Power word", "Brutal whisper", "Quasi-sonic scream"],
                        "gears" : ["Quasi-sonic scream", "Electron harnessing suit", "Electron channeling antenna", "Anti-gravitons"],
                        "immunities" : ["T2/all/skill/5/100/5"]
                       },
                       "anad" :
                       {
                        "name" : "Black bolt", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Electron channeling", "Anti-gravitational dash", "Power word", "Brutal whisper", "Quasi-sonic scream"],
                        "bonus" : ["Activation rate: when skill (normal attack excluded) is used", "Apply to: Self", "1 attacks activate guard break (3 sec.)", "Cooldown time 7 seconds"],
                        "links" : ["cacw/ant_man", "anad/yondu", "cacw/captain_america", "anad/black_cat", "cacw/falcon"],
                        "gears" : ["Quasi-sonic scream", "Aerial combat suit", "Electron channeling antenna", "Anti-gravitons"],
                        "immunities" : ["T2/all/skill/5/100/5"]
                       },
                       "iar" :
                       {
                        "name" : "Black bolt", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Electron channeling", "King's order", "Power word", "Brutal whisper", "Quasi-sonic scream"],
                        "bonus" : ["Activation rate: when skill (normal attack excluded) is used", "Apply to: Self", "Increase damage by 120% for 1 attack (5 sec.)", "Cooldown time 8 seconds"],
                        "links" : ["anad/black_bolt", "cacw/black_panther", "anad/black_cat", "aaou/iron_man", "wwh/hulk"],
                        "gears" : ["Quasi-sonic scream", "King's tuxedo", "Electron channeling antenna", "Anti-gravitons"],
                        "immunities" : ["T2/all/skill/5/100/5"]
                       }
                      }
                     },
"black_cat" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Black cat", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "vilain", "type" : "speed",
                        "skills" : ["Cat scratch", "Acrobatic kick", "Catlike reflex", "Cat hunt", "Cat lash"],
                        "gears" : ["Grappling hook", "Black cat costume", "Contact lenses", "Unique earrings"]
                       },
                       "claws" :
                       {
                        "name" : "Black cat", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "vilain", "type" : "speed",
                        "skills" : ["Cat scratch", "Acrobatic kick", "Catlike reflex", "Cat hunt", "Cat lash"],
                        "bonus" : ["Apply to: Self", "Increase chain hit damage by 5% when you attack"],
                        "links" : ["sw_red_skull/red_skull", "sw_zombies/elsa_bloodstone", "ati/war_machine", "cacw/winter_soldier", "prometheus/destroyer"],
                        "gears" : ["Grappling hook", "Black cat costume", "Black cat mask", "Unique earrings"]
                       },
                       "anad" :
                       {
                        "name" : "Black cat", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "vilain", "type" : "speed",
                        "skills" : ["Cat scratch", "Heel kick", "Lucky streak", "Nine lives", "Cat lash"],
                        "bonus" : ["Apply to: Self", "Increase chain hit damage by 3% when you attack", "Increased effect of misfortune skill"],
                        "links" : ["aaou/thor", "aaou/vision", "hda/hulkbuster", "anad/spider_man", "sw_zombies/venom"],
                        "gears" : ["Whip belt", "Black cat costume", "Contact lenses", "Unique earrings"]
                       }
                      }
                     },
"black_dwarf" :      {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Black dwarf", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Axe Lunge", "Executioner", "Axe Slam", "Wind Blade", "Eviscerator"],
                        "gears" : ["Black dwarf axe", "Black order pauldron", "Black battle shorts", "Battle mace"],
                        "immunities" : ["P/stun", "P/guard_break", "S/all/skill/1/100/3", "L/all_physical/hit/30/100/3"]
                       }
                      }
                     },
"black_panther" :    {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Black panther", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Energy spear", "Claw slash", "Energy dagger", "Essence of the panther", "Unseen predator"],
                        "gears" : ["Anti-metal claws", "Vibranium-weave uniform", "Vibranium boots", "Kimoyo card"],
                        "immunities" : ["S/all/skill/5/100/5"]
                       },
                       "cacw" :
                       {
                        "name" : "Black panther", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Energy spear", "Claw slash", "Energy dagger", "Essence of the panther", "Unseen predator"],
                        "bonus" : ["Increase bleed damage"],
                        "links" : ["ll/loki", "classic_70/ghost_rider", "dohk/daredevil", "anad/yondu", "sw_red_skull/red_skull"],
                        "gears" : ["Anti-metal claws", "Vibranium-weave uniform", "Vibranium boots", "Kimoyo card"],
                        "immunities" : ["S/all/skill/5/100/5"]
                       }
                      }
                     },
"black_widow" :      {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Black widow", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Widow's bite", "Acrobatic assault", "Infiltrator", "Systema", "Coup de grâce"],
                        "gears" : ["Black widow gauntlets", "Synthetic body suit", "Suction gloves", "Widow's line"]
                       },
                       "aaou" :
                       {
                        "name" : "Black widow", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Widow's bite", "Acrobatic assault", "Infiltrator", "Systema", "Coup de grâce"],
                        "bonus" : ["Activation rate: when dodging", "Apply to: Self", "Critical damage +25% (10 sec.)", "Critical rate +25% (10 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["cacw/captain_america", "unworthy/thor", "wj/punisher", "cacw/iron_man", "aaou_blast/ultron"],
                        "gears" : ["Black widow gauntlets", "Synthetic body suit", "Suction gloves", "Widow's line"]
                       },
                       "sw_2099" :
                       {
                        "name" : "Black widow", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Widow's bite", "Acrobatic assault", "Infiltrator", "Systema", "Coup de grâce"],
                        "bonus" : ["Activation rate: when dodging", "Apply to: Self", "Critical damage +20% (10 sec.)", "Critical rate +20% (10 sec.)", "Range increase for skill: Widow's bite", "Cooldown time 20 seconds"],
                        "links" : ["maosq/daisy_johnson", "sw_thors/groot", "sw_renew/spider_man", "doc_strange/ancient_one", "cacw/agent_13"],
                        "gears" : ["Widow's claw", "Stealth body suit", "Suction gloves", "Widow's goggle"]
                       },
                       "cacw" :
                       {
                        "name" : "Black widow", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Widow's bite", "Acrobatic assault", "Pistol strafe", "Systema", "Coup de grâce"],
                        "bonus" : ["Activation rate: when dodging", "Apply to: Self", "Critical damage +20% (10 sec.)", "Critical rate +20% (10 sec.)", "Add paralysis effect to Widow's bite skill", "Cooldown time 20 seconds"],
                        "links" : ["now/red_hulk", "ip/war_machine", "anad/daredevil", "spidoc/modok", "anad/malekith"],
                        "gears" : ["Black widow gauntlets", "Short trench coat", "Brown boots", "Widow's line"]
                       }
                      }
                     },
"blade" :            {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Blade", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Sword edge", "Sword of storm", "Catching weak point", "Blood haze", "Hemorrhage"],
                        "gears" : ["Titanium swords", "Kevlar armor", "Leather gloves", "Sunglasses"]
                       },
                       "classic_70" :
                       {
                        "name" : "Blade", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Sword edge", "Sword of storm", "Catching weak point", "Blood haze", "Hemorrhage"],
                        "bonus" : ["Skill Sword edge reduce enemies physical defense"],
                        "links" : ["cacw/winter_soldier", "dohk/daredevil", "aaou/thor", "sw_zombies/elsa_bloodstone", "sw_1872/bullseye"],
                        "gears" : ["Titanium swords", "Brown coat", "Leather gloves", "Goggles"]
                       }
                      }
                     },
"bullseye" :         {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Bullseye", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Trick of card", "Storm of sword", "Assassination", "Card storm", "Madness knife"],
                        "gears" : ["Shurikens", "Kevlar body armor", "Vibranium laced bones", "Throwing cards"]
                       },
                       "sw_1872" :
                       {
                        "name" : "Bullseye", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Trick of card", "Storm of sword", "Assassination", "Deadeye", "Madness knife"],
                        "bonus" : ["Apply to: Self", "Ignore dodge 50%"],
                        "links" : ["cacw/ant_man", "wj/punisher", "cacw/hawkeye", "websuit/silk", "ll/loki"],
                        "gears" : ["Revolver", "Western suit", "Vibranium laced bones", "Throwing cards"]
                       }
                      }
                     },
"captain_america" :  {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Ready for battle", "Shield strike", "Heroic fury"],
                        "gears" : ["Vibranium shield", "Kevlar-titanium uniform", "Helmet", "Utility belt"]
                       },
                       "aaou" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Ready for battle", "Shield strike", "Heroic fury"],
                        "bonus" : ["Activation rate: 25% when hit", "Apply to: Self", "Immune to all damage (5 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["sw_red_skull/red_skull", "now/captain_america", "now/squirrel_girl", "classic_70/blade", "sw_2099/captain_america"],
                        "gears" : ["Vibranium shield", "Kevlar-titanium uniform", "Helmet", "Utility belt"],
                        "immunities" : ["U/all/hit/25/100/5"]
                       },
                       "sw_2099" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Ready for battle", "Shield strike", "Heroic fury"],
                        "bonus" : ["Activation rate: 15% when hit", "Apply to: Self", "Immune to all damage (5 sec.)", "More ricochet for skill: Shield throw", "Cooldown time 20 seconds"],
                        "links" : ["anad/spider_man", "aaou/black_widow", "sw_2099/black_widow", "sw_1602/angela", "sw_armor_wars/kingpin"],
                        "gears" : ["Vibranium shield", "Alchemax bodysuit", "Mask", "Light wings"],
                        "immunities" : ["U/all/hit/15/100/5"]
                       },
                       "catws" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Ready for battle", "Shield strike", "Heroic fury"],
                        "bonus" : ["Activation rate: 25% when hit", "Apply to: Self", "Immune to all damage (5 sec.)", "Add guard break effect on skill: Valor", "Cooldown time 20 seconds"],
                        "links" : ["anad/gamora", "iar/ghost_rider", "anad/wasp", "sw_thors/groot", "ms_marvel/captain_marvel"],
                        "gears" : ["Vibranium shield", "Field armor", "Helmet", "Utility belt"],
                        "immunities" : ["U/all/hit/25/100/5"]
                       },
                       "cacw" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Ready for battle", "Shield strike", "Heroic fury"],
                        "bonus" : ["Activation rate: 25% when hit", "Apply to: Self", "Immune to all damage (5 sec.)", "Add guard break effect on skill: Valor", "When using Ready for battle, summon Winter solder", "Cooldown time 20 seconds"],
                        "links" : ["anad/wasp", "cacw/falcon", "cacw/black_panther", "annihilation/ronan", "cacw/iron_man"],
                        "gears" : ["Vibranium shield", "Kevlar-titanium uniform", "Helmet", "Utility belt"],
                        "immunities" : ["U/all/hit/25/100/5"]
                       },
                       "now" :
                       {
                        "name" : "Captain america", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shield throw", "Valor", "Shield of valor", "Shield strike", "Heroic fury"],
                        "bonus" : ["Activation rate: 45% when hit", "Apply to: Self", "Immune to all damage (3 sec.)", "Add guard break effect on skill: Valor", "Cooldown time 7 seconds"],
                        "links" : ["armored/moon_knight", "modern/daisy_johnson", "ssm/octopus", "anad/luke_cage", "cacw/iron_man"],
                        "gears" : ["Vibranium shield", "Kevlar-titanium uniform", "Helmet", "Utility belt"],
                        "immunities" : ["U/all/hit/45/100/3"]
                       }
                      }
                     },
"captain_marvel" :   {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Captain marvel", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Mighty straight", "Backflip blast", "Photon blast", "Binary explosion", "Radiant form"],
                        "gears" : ["Binary power", "Captain Marvel costume", "Battle boots", "Red fabric belt"],
                        "immunities" : ["S/all/skill/4/100/5"]
                       },
                       "sw_carol_corp" :
                       {
                        "name" : "Captain marvel", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Mighty straight", "Backflip blast", "Photon blast", "Binary explosion", "Radiant form"],
                        "bonus" : ["Add guard break effect on skill: Mighty straight", "7 seconds increase to duration of Radiant form"],
                        "links" : ["aaou/iron_man", "cacw/war_machine", "sw_thors/groot", "aaou/vision", "sw_future/hulk"],
                        "gears" : ["Binary power", "Captain Marvel costume", "Battle boots", "Red fabric belt"],
                        "immunities" : ["S/all/skill/4/100/5"]
                       },
                       "ms_marvel" :
                       {
                        "name" : "Captain marvel", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Mighty straight", "Backflip blast", "Photon blast", "Binary explosion", "Radiant form"],
                        "bonus" : ["Add 1 extra hit attack to the Backflip blast skill", "3 second increase to duration of Radiant form"],
                        "links" : ["ultimate/green_goblin", "aaou/iron_man", "cacw/iron_man", "capdoc/modok", "sw_2099/captain_america"],
                        "gears" : ["Binary power", "Combat suit", "Combar boots", "Red fabric belt"],
                        "immunities" : ["S/all/skill/4/100/5"]
                       }
                      }
                     },
"carnage" :          {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Carnage", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Weapon Manipulation", "Devouring Maniac", "Camouflage Strike", "Carnage Strike", "Insanity Strike"],
                        "gears" : ["Claws", "Carnage symbiote", "Detachable weapon", "Insanity"],
                        "immunities" : ["T2/invincible/skill/5/100/6"]
                       }
                      }
                     },
"clea" :             {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Clea", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "vilain", "type" : "universal",
                        "skills" : ["Mystic radiance", "Mystic dragon", "Mystic shuffle", "Mystic storm", "Mystic mirage"],
                        "gears" : ["Flames of the faltine", "Violet shoulder pad", "Black pattern pants", "Violet gloves"]
                       }
                      }
                     },
"corvus_glaive" :    {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Corvus glaive", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Boogeyman", "Pain Wheel", "Piercing Strike", "Deadly Charge", "Peek-a-boo"],
                        "gears" : ["Corvus' halberd", "Black hood", "Black battle pants", "Black gauntlets"]
                       }
                      }
                     },
"crossbones" :       {
                      "uniform" : "cacw",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "cacw" :
                       {
                        "name" : "Crossbones", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Gauntlet punch", "Hitman", "Air combo", "Specialist", "Air strike"],
                        "gears" : ["Mechanical enhancement gloves", "Cross chest protectors", "Skull mask", "Grenade launcher"]
                       },
                       "modern" :
                       {
                        "name" : "Crossbones", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Gauntlet punch", "Mercenary stash", "Air combo", "Specialist", "Light'em up"],
                        "bonus" : ["Apply to: Self", "Increase critical rate by 15%"],
                        "links" : ["anad/black_cat", "cacw/black_panther", "anad/gamora", "now/yellow_jacket", "anad/iron_fist"],
                        "gears" : ["Battle dagger", "Cross chest protectors", "Skull mask", "Grenade launcher"]
                       }
                      }
                     },
"crystal" :          {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Crystal", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Cyclone", "Flame manipulation", "Waterspout", "Elemental fusion", "Veil of the Earth"],
                        "gears" : ["Manipulate the elements", "Combat whole body tights", "Belt of harmony", "Inhuman genes"]
                       }
                      }
                     },
"daisy_johnson" :    {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Daisy Johnson", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Pulse punch", "A real stunner", "More bang for your punch", "Vibrations", "Quake"],
                        "gears" : ["Vibration manipulation ability", "S.H.I.E.L.D. tactical gear", "Power-inhibiting gloves", "Inhuman genes"]
                       },
                       "modern" :
                       {
                        "name" : "Quake", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Pulse punch", "A real stunner", "More bang for your punch", "Vibrations", "Quake"],
                        "bonus" : ["Apply to: Self", "Mind damage immune"],
                        "links" : ["claws/black_cat", "wj/punisher", "aaou/captain_america", "classic_70/ghost_rider", "ultimate/green_goblin"],
                        "gears" : ["Vibration manipulation ability", "S.H.I.E.L.D. suit", "Special metal gloves", "Inhuman genes"],
                        "immunities" : ["U/mind"]
                       },
                       "maosq" :
                       {
                        "name" : "Daisy Johnson", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Pulse punch", "A real stunner", "More bang for your punch", "Vibrations", "Quake"],
                        "bonus" : ["Additional strike for skill: More bang for your punch"],
                        "links" : ["anad/black_bolt", "cacw/captain_america", "aaou_speed/ultron", "sa/star_lord", "anad/sister_grimm"],
                        "gears" : ["Vibration manipulation ability", "S.H.I.E.L.D. tactical gear", "Power-inhibiting gloves", "Inhuman genes"]
                       }
                      }
                     },
"daredevil" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Daredevil", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Billy club shot", "Blind strike", "Club swing", "Staff splash", "Blind sided"],
                        "gears" : ["Billy club", "Red costume", "Horned mask", "Sunglasses"]
                       },
                       "dohk" :
                       {
                        "name" : "Daredevil", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Billy club shot", "Blind strike", "Club swing", "Staff splash", "Blind sided"],
                        "bonus" : ["Activation rate: when enemies are within 3m range", "Apply to: Enemy", "Blind (5 sec.)", "20% chance for melee enemy to miss"],
                        "links" : ["anca/falcon", "capdoc/modok", "websuit/silk", "aaou/thor", "classic/nebula"],
                        "gears" : ["Billy club", "Enhanced red armor", "Horned mask", "Sunglasses"]
                       },
                       "anad" :
                       {
                        "name" : "Daredevil", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Billy club shot", "Blind strike", "Billy club", "Staff splash", "Blind sided"],
                        "bonus" : ["Activation rate: when dodging", "Apply to: Self", "All speed +20% (10 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["aaou/iron_man", "aaou/hawkeye", "sw_zombies/venom", "doc_strange/mordo", "anca/falcon"],
                        "gears" : ["Billy club", "Black costume", "Horned mask", "Sunglasses"]
                       }
                      }
                     },
"deathlok" :         {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Deathlok", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Tactical shoot-out", "Covering fire", "S.H.I.E.L.D. soldier", "Upgraded missile", "Perfect shot"],
                        "gears" : ["Forearm rocket launcher", "Internal prostheses", "Ballistic armor", "Centipede device"]
                       },
                       "modern" :
                       {
                        "name" : "Deathlok", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Tactical shoot-out", "Covering fire", "S.H.I.E.L.D. soldier", "Upgraded missile", "Perfect shot"],
                        "bonus" : ["Activation rate: 10% when attacking", "Physical attack 30% physical damage", "Cooldown time 10 seconds"],
                        "links" : ["sa/star_lord", "aaou_combat/ultron", "sw_renew/spider_man", "aaou/iron_man", "aaou/captain_america"],
                        "gears" : ["M4A1 carbine", "Internal prostheses", "Cybernetic leg", "Broken helmet"]
                       }
                      }
                     },
"destroyer" :        {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Destroyer", "attackBase" : "energy", "species" : "creature", "gender" : "neutral", "side" : "neutral", "type" : "universal",
                        "skills" : ["Disintegration beam", "Crush", "Electromagnetic wave", "Obliteration wave", "Asgardian armament"],
                        "gears" : ["Destroyer helmet", "Unknown metal plates", "Odin's enchantment", "Strength of the All-father"]
                       },
                       "prometheus" :
                       {
                        "name" : "Destroyer", "attackBase" : "energy", "species" : "creature", "gender" : "neutral", "side" : "neutral", "type" : "universal",
                        "skills" : ["Disintegration beam", "Crush", "Electromagnetic wave", "Obliteration wave", "Asgardian armament"],
                        "bonus" : ["Activation rate: 30% when attacking", "Apply to: Self", "Increase damage by 170% for 2 times. (10 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["mam/ant_man", "now/captain_america", "aaou_blast/ultron", "hda/hulkbuster", "cacw/black_panther"],
                        "gears" : ["Destroyer helm", "Asgardian metal plates", "Power source", "Strength of the All-father"]
                       }
                      }
                     },
"doctor_strange" :  {
                      "uniform" : "anad",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Doctor Strange", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Crimson bands of Cyttorak", "Demons of Denak", "Eye of Agamotto", "All-seeing eye", "Sorcerer supreme"],
                        "gears" : ["Vishanti magic", "Blue tunic", "Cloak of levitation", "Eye of Agamotto"],
                        "immunities" : ["S/all/skill/5/100/7"]
                       },
                       "doc_strange" :
                       {
                        "name" : "Doctor Strange", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Crimson bands of Cyttorak", "Demons of Denak", "Eye of Agamotto", "All-seeing eye", "Sorcerer supreme"],
                        "bonus" : ["Activation rate: when Demons of Denak skill is used", "Apply to: Self", "Max HP recovery 8% (1 sec.)", "Reflect 40% of incoming damage (50% of max attack power) (5 sec.)", "Cooldown time 1 second"],
                        "links" : ["an/she_hulk", "ca/winter_soldier", "modern/deathlok", "ultimate/green_goblin", "claws/black_cat"],
                        "gears" : ["Vishanti magic", "Blue tunic", "Cloak of levitation", "Eye of Agamotto"],
                        "immunities" : ["S/all/skill/5/100/7"]
                       }
                      }
                     },
"dormammu" :        {
                      "uniform" : "classic",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Dormammu", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Lava extrusion", "Dread flame", "Deadly laser", "Flame shield", "Dark dimension"],
                        "gears" : ["Faltine magic", "Lord of darkness' battle armor", "Dread horn adornment", "Belt of chaos"]
                       }
                      }
                     },
"drax" :             {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Drax", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Dagger fall", "Takedown", "Cry for blood", "Obliterate", "Blade retribution"],
                        "gears" : ["Dual knives", "Impact-resistant carbon plating", "Combat boots with sheath", "Regenerative healing factor"],
                        "immunities" : ["T2/all/skill/3/100/2"]
                       },
                       "anad" :
                       {
                        "name" : "Drax", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Dagger fall", "Takedown", "Cry for blood", "Obliterate", "Blade retribution"],
                        "bonus" : ["Apply to: Self", "Defense penetration 10%"],
                        "links" : ["aaou_speed/ultron", "cacw/winter_soldier", "prometheus/destroyer", "modern/sif", "claws/black_cat"],
                        "gears" : ["Dual knives", "Impact-resistant carbon plating", "Combat boots with sheath", "Destroyer sword"],
                        "immunities" : ["T2/all/skill/3/100/2"]
                       }
                      }
                     },
"ebony_maw" :        {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Ebony maw", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Stone columns", "Stones storm", "Dark reinforcement", "Shadow attack", "Dark meteor"],
                        "gears" : ["Conspiracy", "Gold insignia", "Black pants", "Black order pattern"]
                       }
                      }
                     },
"elektra" :          {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Elektra", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Blood rush", "Harsh strike", "Throwing sais", "Silent ambush", "Red assassin"],
                        "gears" : ["Twin sais", "Red ninja suit", "Red bandana", "Assassin's instinct"]
                       },
                       "md" :
                       {
                        "name" : "Elektra", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Blood rush", "Harsh strike", "Throwing sais", "Silent ambush", "Red assassin"],
                        "bonus" : ["Activation rate: when skill Throwing sais is used", "Apply to: Self", "Increase critical damage by 15% (5 sec.)", "Increase all speeds by 10% (5 sec.)", "Cooldown time 2 seconds"],
                        "links" : ["md/punisher", "unleashed/elsa_bloodstone", "capdoc/modok", "doc_strange/mordo", "sw_future/hulk"],
                        "gears" : ["Twin sais", "Black ninja suit", "Red mask", "Assassin's instinct"]
                       }
                      }
                     },
"elsa_bloodstone" :  {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Elsa Bloodstone", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Bloodstone training", "Filled with hate", "Nowhere to hide", "No mercy", "No escape"],
                        "gears" : ["Hunting rifle", "Leather coat", "Enhanced tights", "Bloodstone choker"],
                        "immunities" : ["T2/all/skill/5/100/5"]
                       },
                       "sw_zombies" :
                       {
                        "name" : "Elsa Bloodstone", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Bloodstone training", "Filled with hate", "Nowhere to hide", "No mercy", "Red flame"],
                        "bonus" : ["Activation rate: 10% when attacking", "Apply to: Self", "Skill cooltime 35% (15 sec.)", "All attack +30% (15 sec.)", "All speed +8% (15 sec.)", "Critical rate +35% (15 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["websuit/silk", "ca/winter_soldier", "annihilation/ronan", "anad/rocket_raccoon", "cacw/war_machine"],
                        "gears" : ["Hunting rifle", "Trench coat", "S.H.I.E.L.D. enhanced tights", "Bloodstone"]
                       },
                       "unleashed" :
                       {
                        "name" : "Elsa Bloodstone", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Bloodstone training", "Retribution", "Nowhere to hide", "No mercy", "Force of Bloodstone"],
                        "bonus" : ["Activation rate: 10% when attacking", "Apply to: Self", "Skill cooltime 35% (15 sec.)", "All attack +30% (15 sec.)", "All speed +8% (15 sec.)", "Critical rate +35% (15 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["unleashed/hulk_cho", "sw_red_skull/red_skull", "anad/sister_grimm", "sw_1602/angela", "classic_70/blade"],
                        "gears" : ["Spell converting handgun", "Blue trench coat", "Tech pants", "Bloodstone choker"]
                       }
                      }
                     },
"enchantress" :      {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Enchantress", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "blast",
                        "skills" : ["Sorceress whip", "Maiden's farewell", "Sorceress sphere", "Fatal illusion", "Enchanted entrapment"],
                        "gears" : ["Asgard magic", "Charming dress", "Goddess attire", "Green long gloves"]
                       }
                      }
                     },
"falcon" :           {
                      "uniform" : "catws",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "catws" :
                       {
                        "name" : "Falcon", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Vertical descent", "Swoop", "Raptor strafe", "Sky-high", "Air superiority"],
                        "gears" : ["Submachine gun", "EXO-7 Falcon", "Jump boots", "Goggles"],
                        "immunities" : ["T2/all/hit/25/100/5"]
                       },
                       "anca" :
                       {
                        "name" : "Falcon", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Shield throw", "Swoop", "Raptor strafe", "Sky-high", "Air superiority"],
                        "bonus" : ["Activation Rate: 25% when attacking", "Physical attack 58% physical damage", "Cooldown time 5 seconds"],
                        "links" : ["iar/ghost_rider", "sw_future/hulk", "unworthy/thor", "anad/iron_fist", "cacw/ant_man"],
                        "gears" : ["Vibranium shield", "STARK's vibranium wing", "Jump boots", "Goggles"],
                        "immunities" : ["T2/all/hit/25/100/5"]
                       },
                       "cacw" :
                       {
                        "name" : "Falcon", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Vertical descent", "Swoop", "Raptor strafe", "Sky-high", "Air superiority"],
                        "bonus" : ["Activation Rate: 25% when attacking", "Physical attack 58% physical damage", "Cooldown time 5 seconds"],
                        "links" : ["cacw/black_panther", "modern2/giant_man", "cacw/agent_13", "aaou/black_widow", "cacw/iron_man"],
                        "gears" : ["Submachine gun", "EXO-7 Falcon", "Jump boots", "Goggles"],
                        "immunities" : ["T2/all/hit/25/100/5"]
                       }
                      }
                     },
"fandral" :          {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Fandral", "attackBase" : "physical`", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Dashing strike", "Handsome blade", "Side-step slice", "Dancing blade", "Fandral's formation"],
                        "gears" : ["Fimbuldraugr", "Dignified shirt", "Green long boots", "Belt of swordsman"]
                       }
                      }
                     },
"gamora" :           {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Gamora", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Dagger throw", "Death dealer", "Godslayer", "Spinning slash", "Slide n'slice"],
                        "gears" : ["God slayer", "Body suit", "Cybernetic skeleton", "Regeneration implant"]
                       },
                       "anad" :
                       {
                        "name" : "Gamora", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Dagger throw", "Death dealer", "Godslayer", "Spinning slash", "Slide n'slice"],
                        "bonus" : ["Increase bleed damage"],
                        "links" : ["dohk/daredevil", "catws/captain_america", "ssm/octopus", "cacw/hawkeye", "anad/daredevil"],
                        "gears" : ["God slayer", "Dire cloak", "Cybernetic skeleton", "Regeneration implant"]
                       },
                       "gg2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Gamora", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Dagger throw", "Death dealer", "Godslayer", "Spinning slash", "Slide n'slice"],
                        "bonus" : ["Apply to: Self", "30% ignore defense"],
                        // TODO : check ultron link
                        "links" : ["aaou/vision", "aaou_combat/ultron", "anad/mockingbird", "wj/punisher", "mlc/luke_cage"],
                        "gears" : ["God slayer", "Body suit", "Cybernetic skeleton", "Regeneration implant"]
                       }
                      }
                     },
"ghost_rider" :      {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Ghost rider", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Chains ablaze", "Highway to hell", "Hellfire", "Damnation chains", "Penance stare"],
                        "gears" : ["Hellfire chains", "Rider's jacket", "Motorcycle gloves", "Motorcycle"],
                        "immunities" : ["P/fire"]
                       },
                       "classic_70" :
                       {
                        "name" : "Ghost rider", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Chains ablaze", "Highway to hell", "Hellfire", "Damnation chains", "Penance stare"],
                        "bonus" : ["Energy attack 15% fire damage add fire damage 13", "Increase skill duration for Chains ablaze"],
                        "links" : ["maosq/daisy_johnson", "doc_strange/doctor_strange", "sw_thors/groot", "doc_strange/ancient_one", "annihilation/ronan"],
                        "gears" : ["Hellfire chains", "Rider's suit", "Motorcycle gloves", "Classic bike"],
                        "immunities" : ["P/fire"]
                       },
                       "iar" :
                       {
                        "name" : "Ghost rider", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Chains ablaze", "Getaway car", "Hellfire", "Damnation chains", "Hit and run"],
                        "bonus" : ["Energy attack 15% fire damage add fire damage 13", "Increase skill duration for Chains ablaze"],
                        "links" : ["modern/sif", "classic_70/ghost_rider", "ca/winter_soldier", "sw_1872/bullseye", "anad/yondu"],
                        "gears" : ["Hellfire chains", "Fedora", "Trench coat", "Drum magazine submachine gun"],
                        "immunities" : ["P/fire"]
                       }
                      }
                     },
"ghostrider_reyes" : {
                      "uniform" : "now",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "now" :
                       {
                        "name" : "Ghost rider - Robbie Reyes", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Chain lash", "Torque chain", "Demon bind", "Tire scorcher", "Hell racer"],
                        "gears" : ["Knife chain", "Racer jacket", "Racer pants", "Hell ride"],
                        "immunities" : ["P/fire/80"]
                       }
                      }
                     },
"giant_man" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Giant man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Jump kick", "Giant stomp", "Growing pains", "Crashing foot falls", "Giant jackhammer"],
                        "gears" : ["Pym particles", "Giant-man suit", "Cowl communicator", "Utility belt"],
                        "immunities" : ["S/all/skill/5/100/3"]
                       },
                       "modern2" :
                       {
                        "name" : "Goliath", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Jump kick", "Giant stomp", "Growing pains", "Crashing foot falls", "Giant jackhammer"],
                        "bonus" : ["Activation rate: when using Enlarge buff", "Apply to: Self", "All defense +10% (20 sec.)", "All attack +10% (20 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["aaou_combat/ultron", "unworthy/thor", "doc_strange/wong", "aaou/captain_america", "doc_strange/mordo"],
                        "gears" : ["Pym particles", "Goliath uniform", "Equipment straps", "Utility belt"],
                        "immunities" : ["S/all/skill/5/100/3"]
                       }
                      }
                     },
"green_goblin" :     {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Green goblin", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "speed",
                        "skills" : ["Pumpkin bombs", "Bag of tricks", "Pumpkin barrage", "Bombing run", "Aerial charge"],
                        "gears" : ["Pumpkin bombs", "Green goblin suit", "Goblin glider", "Bag of tricks"],
                        "immunities" : ["P/snare", "P/poison"]
                       },
                       "ultimate" :
                       {
                        "name" : "Green goblin", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Goblin's strike", "Fiery smash", "Fiery bolts", "Fiery quake", "Goblin's rage"],
                        "bonus" : ["Activation rate: 82% when hit", "Apply to: Self", "Immune to all damage (4 sec.)", "Cooldown time 8 seconds"],
                        "links" : ["aaou_combat/ultron", "aaou/iron_man", "aaou_speed/ultron", "anad/daredevil", "anad/mockingbird"],
                        "immunities" : ["P/snare", "P/poison", "S/all/skill/5/100/3", "U/all/hit/82/100/4"]
                       }
                      }
                     },
"groot" :            {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Groot", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Branch crunch", "Root swipe", "Spore", "Groot smash", "We are Groot!"],
                        "gears" : ["\"I am Groot!\"", "Limbs", "Regeneration", "Little flower pot"]
                       },
                       "sw_thors" :
                       {
                        "name" : "Groot", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Branch crunch", "Electrics roots", "Spore", "I am Thor", "We are Groot!"],
                        "bonus" : ["Apply to: Self", "Lightning damage immune"],
                        "links" : ["now/captain_america", "modern/sif", "doc_strange/wong", "an/she_hulk", "modern/daisy_johnson"],
                        "gears" : ["\"I am Thor!\"", "Limbs", "Leaves cape", "Little flower pot"],
                        "immunities" : ["U/lightning"]
                       },
                       "gg2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Groot", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Growth spurt", "Root swipe", "Blossoming sprout", "Troublemaker", "We are Groot!"],
                        "bonus" : ["Apply to: Self", "Increase recovery rate by 15%", "Increase dodge rate by 7%"],
                        "links" : ["cacw/captain_america", "now/squirrel_girl", "annihilation/ronan", "mif/iron_fist", "prometheus/destroyer"],
                        "gears" : ["\"I am Groot!\"", "Limbs", "Regeneration", "Little flower pot"]
                       },
                      }
                     },
"gwenpool" :         {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Gwenpool", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Katana kick", "Figure skate", "Bombs 'n bullets", "Bullet rain", "Gift special"],
                        "gears" : ["Twin swords", "Gwenpool suit", "Gwenpool mask", "Submachine gun"]
                       }
                      }
                     },
"gorgon" :           {
                      "uniform" : "warofking",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "warofking" :
                       {
                        "name" : "Gorgon", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Storming party", "Mace throw", "War cry", "Seismic shocks", "War stomp"],
                        "gears" : ["Gorgon's leg", "Steel headband", "War mace", "Inhuman genes"]
                       }
                      }
                     },
"hawkeye" :          {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Hawkeye", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Arrow barrage", "Sure shot", "Trick shot", "Piercing arrow", "Evasive shot"],
                        "gears" : ["Hawkeye's bow", "Armored suit", "Quick-release quiver", "Trick arrows"]
                       },
                       "aaou" :
                       {
                        "name" : "Hawkeye", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Arrow barrage", "Sure shot", "Trick shot", "Piercing arrow", "Evasive shot"],
                        "bonus" : ["Activation rate: when dealing critical attack", "Apply to: Enemy", "Stun (1 sec.)", "Cooldown time 5 seconds"],
                        "links" : ["anca/falcon", "doc_strange/ancient_one", "sw_zombies/elsa_bloodstone", "noir/punisher", "modern/lash"],
                        "gears" : ["Hawkeye's bow", "Armored suit", "Quick-release quiver", "Trick arrows"]
                       },
                       "cacw" :
                       {
                        "name" : "Hawkeye", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Arrow barrage", "Sure shot", "Trick shot", "Piercing arrow", "Evasive shot"],
                        "bonus" : ["Activation rate: when dealing critical attack", "Apply to: Enemy", "Stun (1 sec.)", "Increase the number of projectiles when using the Piercing arrow skill", "Cooldown time 5 seconds"],
                        "links" : ["aaou_combat/ultron", "cacw/winter_soldier", "aaou/captain_america", "unleashed/hulk_cho", "sw_thors/groot"],
                        "gears" : ["Hawkeye's bow", "Armored suit", "Quick-release quiver", "Trick arrows"]
                       }
                      }
                     },
"hawkeye_kate" :     {
                      "uniform" : "now",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "now" :
                       {
                        "name" : "Hawkeye - Kate Bishop", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Explosion shot", "Trick arrows", "Swift archer", "Last one-shot", "Fuse shot"],
                        "gears" : ["Hawkeye's bow", "Purple whole body tights", "Sunglasses", "Trick arrows"]
                       }
                      }
                     },
"hela" :             {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Hela", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "universal",
                        "skills" : ["Fires of Hel", "Nightsword stab", "Merciless Queen", "Nightsword's glow", "Goddess of death"],
                        "gears" : ["Death touch", "Royal armor", "Green cape", "Horned crown"]
                       }
                      }
                     },
"hellcat" :          {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Hellcat", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Cat's cradle", "Leaping cat", "Sharp claw", "Cat's grudge", "Fierce claw"],
                        "gears" : ["Steel alloy claws", "Cat suit", "Hellcat mask", "Grappling hook"]
                       }
                      }
                     },
"hellstrom" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Hellstrom", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Ring of fire", "Trident thrust", "Eternal punishment", "Cult following", "Fire burst"],
                        "gears" : ["Trident", "Red pants", "Gold wrist guard", "Satan's pattern"],
                        "immunities" : ["S/all/skill/5/100/5"]
                       }
                      }
                     },
"hogun" :            {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Hogun", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Grim dagger", "Iron mace", "Mace enchantment", "Iron fury", "Hogun's formation"],
                        "gears" : ["Hridgandr", "Horned helmet", "Blue scarf", "Sheath wrists guards"]
                       }
                      }
                     },
"hulk" :             {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Hulk", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Hulk charge", "Thunder clap", "Hulk smash", "Hulk stomp", "Hulk slam"],
                        "gears" : ["Rage", "Ripped pants", "Gamma radiation", "Dr. Banner glass"]
                       },
                       "sw_future" :
                       {
                        "name" : "Maestro", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Hulk charge", "Thunder clap", "Hulk smash", "Hulk stomp", "Hulk slam"],
                        "bonus" : ["Activation rate: 20% when attacking", "Physical attack 42% poison damage", "Cooldown time 10 seconds"],
                        "links" : ["modern/lash", "anad/malekith", "wwh/hulk", "modern/deathlok", "anad/drax"],
                        "gears" : ["Rage", "Maestro pants", "Gamma radiation", "Ornament necklace"]
                       },
                       "wwh" :
                       {
                        "name" : "Hulk", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Hulk charge", "Shield bash", "Lunge strike", "Raging charge", "Hulk slam"],
                        "bonus" : ["Apply to: Self", "Immune to guard break"],
                        // TODO : check if the linked uniform to ultron is the correct ultron uniform
                        "links" : ["aaou/hawkeye", "aaou/black_widow", "aaou_blast/ultron", "now/squirrel_girl", "aaou/thor"],
                        "gears" : ["Hulk blade", "Shoulder phase", "Gamma radiation", "Defender shield"],
                        "immunities" : ["U/guard_break"]
                       }
                      }
                     },
"hulk_cho" :         {
                      "uniform" : "tah",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "tah" :
                       {
                        "name" : "Hulk Cho", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Tornado punch", "Counter slam", "Meteor drop", "Gamma stomp", "Tectonic toss"],
                        "gears" : ["Raging fist", "Tech pants", "Gamma radiation", "Wristbands"]
                       },
                       "unleashed" :
                       {
                        "name" : "Hulk Cho", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Tornado punch", "Counter slam", "Chain collision", "Gamma stomp", "Gamma explosion"],
                        "bonus" : ["Apply to: Self", "Super armor, all defense +20%"],
                        "links" : ["armored/moon_knight", "doc_strange/ancient_one", "an/she_hulk", "anad/gamora", "cacw/falcon"],
                        "gears" : ["Raging fist", "Tech armor", "Gamma radiation", "Gamma compression cylinder"]
                       }
                      }
                     },
"hulkbuster" :       {
                      "uniform" : "aaou",
                      "tiers" : [1,2],
                      "uniforms" :
                      {
                       "aaou" :
                       {
                        "name" : "Hulkbuster - Mark 44", "attackBase" : "physical", "species" : "creature", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Repulsor smash", "Hydraulic boom", "Jet-assisted takedown", "Arc reactor burst", "Barrage strike"],
                        "gears" : ["Magno-hydraulic pseudo-muscilature", "Impact-resistant carbon plating", "Anchoring system", "Gamma radiation detector"],
                        "immunities" : ["P/all_physical/hit/25/100/10"]
                       },
                       "hda" :
                       {
                        "name" : "Hulkbuster - Mark 43", "attackBase" : "physical", "species" : "creature", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Bullet punch", "Hydraulic boom", "Jet-assisted takedown", "Arc reactor burst", "Barrage strike"],
                        "bonus" : ["Activation rate: 5% when attacking", "Apply to: Self", "Skill cooltime 50% (10 sec.)", "Cooldown time 20 seconds."],
                        "links" : ["ms_marvel/captain_marvel", "cacw/spider_man", "ssm/octopus", "anad/rocket_raccoon", "anad/drax"],
                        "gears" : ["Magno-hydraulic pseudo-muscilature", "Impact-resistant carbon plating", "Anchoring system", "Huge gatling gun"],
                        "immunities" : ["P/all_physical/hit/25/100/10"]
                       }
                      }
                     },
"hulkling" :         {
                      "uniform" : "na",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "na" :
                       {
                        "name" : "Hulkling", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Shape-shift slam", "Excelsior", "Shape-shift scrape", "Sky-dive swoop", "Ruler of the sword"],
                        "gears" : ["Shape-shifting", "Black sleeveless shirt", "Enhanced skin", "Excelsior"],
                        "immunities" : ["T2/all/hit/25/100/2"]
                       }
                      }
                     },
"hyperion" :         {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Hyperion", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Soaring Uppercut", "Heat Blast", "Sun God", "Solar Flare", "Atomic Vision"],
                        "gears" : ["Atomic vision", "Black compression shirt", "Atomic belt", "Golden cape"]
                       }
                      }
                     },
"inferno" :          {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Inferno", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Burning fist", "Incineration", "Blazing storm", "Ignition", "Volcano burst"],
                        "gears" : ["Pyrokinesis", "NASF uniform", "Flame proof gloves", "Inhuman genes"],
                        "immunities" : ["P/fire/100/rng/80", "S/all/skill/5/100/2"]
                       }
                      }
                     },
"iron_fist" :        {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Iron fist", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Chi of flying crane", "Pressure point jab", "K'un-Lun focus", "The iron fist", "Chi strike"],
                        "gears" : ["Heart of Shou-Lao", "K'un-Lun's uniform", "Golden mask", "Golden sash"]
                       },
                       "na" :
                       {
                        "name" : "Iron fist", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Chi of flying crane", "Pressure point jab", "K'un-Lun focus", "The iron fist", "Chi strike"],
                        "bonus" : ["Activation rate: when HP is below 30%", "Apply to: Self", "Max HP recovery 10%", "Invincible (5 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["sw_1602/angela", "claws/black_cat", "doc_strange/wong", "anad/black_cat", "cacw/black_widow"],
                        "gears" : ["Heart of Shou-Lao", "K'un-Lun's uniform", "Golden mask", "Golden sash"],
                        "immunities" : ["U/invincible/hpB/30/100/5"]
                       },
                       "anad" :
                       {
                        "name" : "Iron fist", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Chi of flying crane", "Pressure point jab", "K'un-Lun focus", "The iron fist", "Chi strike"],
                        "bonus" : ["Activation rate: when HP is below 30%", "Apply to: Self", "Max HP recovery 10%", "Invincible (5 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["anad/yondu", "sw_armor_wars/kingpin", "anad/black_bolt", "anad/malekith", "modern/lash"],
                        "gears" : ["Heart of Shou-Lao", "Purple track suit", "Golden mask", "Golden collar"],
                        "immunities" : ["U/invincible/hpB/30/100/5"]
                       },
                       "mif" :
                       {
                        "name" : "Iron fist", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Chi of flying crane", "Pressure point jab", "K'un-Lun focus", "The iron fist", "Immortal iron fist"],
                        "bonus" : ["Activation rate: when HP is below 30%", "Apply to: Self", "Max HP recovery 10%", "Invincible (5 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["mlc/luke_cage", "ca/winter_soldier", "karachi/ms_marvel", "sw_2099/black_widow", "ip/war_machine"],
                        "gears" : ["Iron fist", "Trained muscle", "Old pants", "Heart of Shou-Lao"],
                        "immunities" : ["U/invincible/hpB/30/100/5", "S/all/skill/2/100/3"]
                       }
                      }
                     },
"iron_man" :         {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Iron man", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Repulsor Blast", "Repulsor ray", "Unibeam", "Missile Barrage", "The One-Off"],
                        "gears" : ["Repulsors", "Iron man suit", "Arc reactor", "J.A.R.V.I.S."]
                       },
                       "aaou" :
                       {
                        "name" : "Iron man", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Repulsor Blast", "Repulsor ray", "Unibeam", "Missile Barrage", "The One-Off"],
                        "bonus" : ["Activation rate: 25% when hit", "Energy attack 66% physical damage", "Cooldown time 5 seconds"],
                        "links" : ["anad/wasp", "noir/punisher", "maosq/daisy_johnson", "anad/rocket_raccoon", "sw_renew/spider_man"],
                        "gears" : ["Repulsors", "Iron man suit", "Arc reactor", "J.A.R.V.I.S."]
                       },
                       "sw_2099" :
                       {
                        "name" : "Iron man", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Repulsor Blast", "Repulsor ray", "Unibeam", "Missile Barrage", "The One-Off"],
                        "bonus" : ["Fires more ammos with skill: Missile barrage"],
                        "links" : ["maos/daisy_johnson", "ca/winter_soldier", "sw_red_skull/red_skull", "wwh/hulk", "noir/punisher"],
                        "gears" : ["Repulsors", "2099 suit", "Arc reactor", "J.A.R.V.I.S."]
                       },
                       "cacw" :
                       {
                        "name" : "Iron man", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Repulsor Blast", "Crash landing", "Unibeam", "Missile Barrage", "The One-Off"],
                        "bonus" : ["Fires more ammos with skill: Missile barrage"],
                        "links" : ["sa/star_lord", "cacw/agent_13", "anad/iron_fist", "spidoc/modok", "classic/nebula"],
                        "gears" : ["Repulsors", "Iron man armor - Mark 46", "Arc reactor", "Friday"]
                       }
                      }
                     },
"ironheart" :        {
                      "uniform" : "now",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "now" :
                       {
                        "name" : "Ironheart", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Iron blade", "Air raid mode", "Ambush fire", "Barrage fire", "Prime cannon"],
                        "gears" : ["Repulsors", "Model-prime armor", "All-in-one tool set", "STARK A.I."],
                        "immunities" : ["S/all/skill/5/all/5"]
                       }
                      }
                     },
"jessica_jones" :    {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Jessica Jones", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Coming for you", "Bum-rush", "Smack down", "Powerhouse", "Collateral damage"],
                        "gears" : ["Black gloves", "Black leather jacket", "Jean pants", "Black boots"],
                        "immunities" : ["P/mind", "L/all_physical/hit/25/100/10"]
                       }
                      }
                     },
"kaecilius" :        {
                      "uniform" : "doc_strange",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "doc_strange" :
                       {
                        "name" : "Kaecilius", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Summon stone", "Falling rock", "Earth cutter", "Dagger summon", "Mystical avalanche"],
                        "gears" : ["Disciplinant's twin sickle", "Senior's clothes", "Twine belt", "Book of Cagliostro"],
                        "immunities" : ["P/all_physical/hit/25/100/10"]
                       }
                      }
                     },
"karnak" :           {
                      "uniform" : "warofking",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "warofking" :
                       {
                        "name" : "Karnak", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Side-splitter", "Gale", "Composure", "Charging strike", "Death chop"],
                        "gears" : ["Green knucle", "Inhuman priest's helmet", "Inhuman priest's top", "Green armguard"]
                       },
                       "anad" :
                       {
                        "name" : "Karnak", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Side-splitter", "Gale", "Wave of wisdom", "Charging strike", "Death chop"],
                        "bonus" : ["Activation rate: 35% when debuffed", "Apply to: Self", "Remove all debuffs (2 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["unleashed/elsa_bloodstone", "iar/black_bolt", "iar/ghost_rider", "anad/daredevil", "sw_2099/iron_man"],
                        "gears" : ["Slack bandage", "Frayed hood jacket", "Old cotton T-shirt", "Magister's tattoo"]
                       }
                      }
                     },
"kidkaiju" :         {
                      "uniform" : "unleashed",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "unleashed" :
                       {
                        "name" : "Kid Kaiju", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Fireclaw summon", "Slizzik summon", "Sketch up", "Tag-team titan", "Monter Mayhem"],
                        "gears" : ["Old pencil", "Costume hood jacket", "Orrgo T-shirt", "Sketchbook"]
                       }
                      }
                     },
"kingpin" :          {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Kingpin", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Stick shot", "Jump strike", "Knock-out", "Body slam", "Criminal mastermind"],
                        "gears" : ["The walking stick", "White suit", "Pure muscle", "Diamond stickpin"]
                       },
                       "sw_armor_wars" :
                       {
                        "name" : "Kingpin", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Blast barrage", "Jump strike", "Channeled beams", "Body slam", "Criminal mastermind"],
                        "bonus" : ["Activation rate: 10% when hit", "Apply to: Self", "Generate a physical shield with 20% of maximum health (10 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["now/red_hulk", "doc_strange/wong", "sw_2099/iron_man", "sw_future/hulk", "anad/daredevil"],
                        "gears" : ["High-powered blaster", "Kingpin's armor", "Pure muscle", "Arc reactor"]
                       }
                      }
                     },
"lash" :             {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Lash", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Found wanting", "Disintegrate", "Knock out", "Undeserving", "Cull the weak"],
                        "gears" : ["Energy conversion ability", "Black pants", "Wrist guards", "Inhuman genes"],
                        "immunities" : ["T2/all/skill/2/100/4"]
                       },
                       "modern" :
                       {
                        "name" : "Lash", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Found wanting", "Disintegrate", "Knock out", "Undeserving", "Cull the weak"],
                        "bonus" : ["Activation rate: 10% when attacking", "Energy attack 54% energy damage", "Cooldown time 10 seconds"],
                        "links" : ["anad/malekith", "aaou/captain_america", "sw_2099/iron_man", "sw_armor_wars/kingpin", "modern2/giant_man"],
                        "gears" : ["Energy conversion ability", "Black pants", "Wrist guards", "Inhuman genes"],
                        "immunities" : ["T2/all/skill/2/100/4"]
                       }
                      }
                     },
"lincoln_campbell" : {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Lincoln Campbell", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Electromagnetism", "Electro-blast", "Protective dome", "Magnetic repulsion", "Electrical field"],
                        "gears" : ["Electromagnetism", "Brown jacket", "Jeans", "Inhuman genes"]
                       }
                      }
                     },
"loki" :             {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Loki", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Scepter bolt", "Arcane blast", "Energy barrier", "Astral projection", "Mind games"],
                        "gears" : ["Chitauri scepter", "Asgardian pauldron", "Horned helmet", "Green cape"]
                       },
                       "ll" :
                       {
                        "name" : "Loki", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "universal",
                        "skills" : ["Scepter bolt", "Arcane blast", "Energy barrier", "Astral projection", "Mind games"],
                        "bonus" : ["Add freeze effect to Scepter bolt skill"],
                        "links" : ["hda/hulkbuster", "na/iron_fist", "sw_renew/spider_man", "anad/luke_cage", "sw_red_skull/red_skull"],
                        "gears" : ["Chitauri scepter", "Green dress", "Horned helmet", "Fur cloak"]
                       }
                      }
                     },
"luke_cage" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Luke Cage", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Dempsey roll", "Street style", "Screaming", "Sweet christmas", "Tactical offense"],
                        "gears" : ["Wristbands", "Yellow shirt", "Armored boots", "Accelerated healing factor"],
                        "immunities" : ["L/all_physical/hit/25/100/11"]
                       },
                       "anad" :
                       {
                        "name" : "Luke Cage", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Dempsey roll", "Street style", "Screaming", "Sweet christmas", "Tactical offense"],
                        "bonus" : ["Increase skill duration of Heroes for Hire, reduce cooldown time"],
                        "links" : ["aaou_combat/ultron", "now/captain_america", "ca/winter_soldier", "sw_2099/iron_man", "cacw/black_widow"],
                        "gears" : ["Steel skin", "Yellow dress shirt", "Tuxedo vest", "Accelerated healing factor"],
                        "immunities" : ["L/all_physical/hit/25/100/12"]
                       },
                       "mlc" :
                       {
                        "name" : "Luke Cage", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Dempsey roll", "Street style", "Backup call", "Sweet christmas", "Tactical offense"],
                        "bonus" : ["Increase skill duration of Heroes for Hire, reduce cooldown time", "Add guard break effect on skill Street style"],
                        "links" : ["mif/iron_fist", "anad/malekith", "ll/loki", "sw_renew/spider_man", "mam/ant_man"],
                        "gears" : ["Steel skin", "Zip-up hoodie", "Blue jeans", "Accelerated healing factor"],
                        "immunities" : ["L/all_physical/hit/25/100/12"]
                       }
                      }
                     },
"malekith" :         {
                      "uniform" : "ttdw",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "ttdw" :
                       {
                        "name" : "Malekith", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Aether bolt", "Shadow flurry", "Extinguish darkness", "Storm of the aether", "The accursed"],
                        "gears" : ["Aether", "Dark elven armor", "Svartafheim gauntlets", "Dark elven cape"]
                       },
                       "anad" :
                       {
                        "name" : "Malekith", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Aether bolt", "Shadow flurry", "Ether blade", "Storm of the aether", "The accursed"],
                        "bonus" : ["Activation rate: 12% when hit", "Apply to: Self", "Max HP recovery 10% (1 sec.)", "Cooldown time 7 seconds"],
                        "links" : ["cacw/falcon", "modern2/giant_man", "ati/war_machine", "unleashed/hulk_cho", "aaou/vision"],
                        "gears" : ["Aether", "Accursed suit", "Svartafheim armguard", "Dark elven shoulder plates"]
                       }
                      }
                     },
"maximus" :          {
                      "uniform" : "warofking",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "warofking" :
                       {
                        "name" : "Maximus", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Deadly invention", "Lunatic control", "Electric barrier", "Ultimate weapon", "Evil trick"],
                        "gears" : ["Drill gun", "Mad scientist's coat", "Metal suit", "Inhuman genes"]
                       }
                      }
                     },
"medusa" :           {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Medusa", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Hair drill", "Hair constrictor", "Hair blossom", "Split ends", "Queen's embrace"],
                        "gears" : ["Trichokinesis", "Queen's mask", "Medusa's belt", "Inhuman genes"],
                        "immunities" : ["S/all/skill/3/100/5"]
                       }
                      }
                     },
"mantis" :           {
                      "uniform" : "gg2",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Mantis", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Bursting buds", "Back leap", "Sensing danger", "Energy sawtooth", "Psychomancy"],
                        "gears" : ["Green arm pad", "Green top", "Green pants", "Antenna"]
                       }
                      }
                     },
"miles_morales" :    {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Spider-man : Miles Morales", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Foe flip", "Back bite", "Wild web", "Shock and awe", "Blasting burst"],
                        "gears" : ["Web-shooter", "Ultimate costume", "Ultimate spider mask", "Venom blasted"],
                        "immunities" : ["P/web"]
                       }
                      }
                     },
"misty_knight" :     {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Misty Knight", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Frost wave", "Freeze strike", "Spark burst", "Cold shoulder", "Bionic bomber"],
                        "gears" : ["Hand gun", "Black leather costume", "All-in-one waistband", "Bionic arm"]
                       }
                      }
                     },
"mockingbird" :      {
                      "uniform" : "ha",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "ha" :
                       {
                        "name" : "Mockingbird", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Twin stave attack", "Bo-staff kick", "Concentration", "Bo-staff strike", "Bo-staff take down"],
                        "gears" : ["Twin staves", "Bullet-proof suit", "Armored boots", "Night vision glasses"]
                       },
                       "maos" :
                       {
                        "name" : "Bobbi Morse", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Twin stave attack", "Bo-staff kick", "Concentration", "Bo-staff strike", "Bo-staff take down"],
                        "bonus" : ["Activate rate: 30% when attacking", "Apply to: Self", "1 attack activate guard break (2 sec.)", "Cooldown time 3 seconds"],
                        "links" : ["ati/war_machine", "unleashed/hulk_cho", "doc_strange/wong", "sw_2099/black_widow", "anad/luke_cage"],
                        "gears" : ["Twin staves", "Bullet-proof suit", "Armored boots", "Fingerless gloves"]
                       },
                       "anad" :
                       {
                        "name" : "Mockingbird", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Twin stave attack", "Bo-staff kick", "Baton throw", "Bo-staff barrage", "Bo-staff take down"],
                        "bonus" : ["Activate rate: 30% when attacking", "Apply to: Self", "1 attack activate guard break (2 sec.)", "Cooldown time 3 seconds"],
                        "links" : ["dohk/daredevil", "ip/war_machine", "maos/mockingbird", "now/red_hulk", "capdoc/modok"],
                        "gears" : ["Twin batons", "Mockingbird suit", "Armored boots", "Mockingbird mask"]
                       }
                      }
                     },
"modok" :            {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "M.O.D.O.K.", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Dominance of spirit", "Doomsday chair shot", "Impending doom", "Telekinetic force blast", "Head-on"],
                        "gears" : ["Power focus headband", "Doomsday chair", "Force fields barriers", "Psychic amplifier"],
                        "immunities" : ["P/charm", "P/snare"]
                       },
                       "spidoc" :
                       {
                        "name" : "M.O.D.O.K.", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Puppet master", "Pulling strings", "Designed to web", "Telekinetic force blast", "Head-on"],
                        "bonus" : ["Decrease enemies all speed with Regular attack"],
                        "links" : ["doc_strange/doctor_strange", "modern/lash", "ll/loki", "wwh/hulk", "aaou/vision"],
                        "gears" : ["Hige spider mask", "Doomsday chair", "Spider suit", "Psychic amplifier"],
                        "immunities" : ["P/charm", "P/snare"]
                       },
                       "capdoc" :
                       {
                        "name" : "M.O.D.O.K.", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Dominance of spirit", "Doomsday chair shot", "Impending doom", "Telekinetic force blast", "Head-on"],
                        "bonus" : ["Activation rate: 25% when hit", "Apply to: Self", "Immune to all damage (2 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["classic_70/blade", "ip/war_machine", "anad/daredevil", "iar/ghost_rider", "mam/ant_man"],
                        "gears" : ["Huge captain cowl", "Doomsday chair", "Captain america suit", "Vibranium shield"],
                        "immunities" : ["P/charm", "P/snare", "U/all/hit/25/100/2"]
                       }
                      }
                     },
"moon_girl" :        {
                      "uniform" : "now",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "now" :
                       {
                        "name" : "Moon Girl", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Air raid siren", "Taser punch", "Soda bomb", "Moon beam", "Bubble pop"],
                        "gears" : ["Spiring gloves", "Moon T-shirt", "Roller skates", "Soda bomb"]
                       }
                      }
                     },
"moon_knight" :      {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Moon knight", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Moon strike", "Crescent bommerang", "Staff slam", "Full moon", "Lunar eclipse"],
                        "gears" : ["Truncheon", "Chest armor", "Silver cloak", "Crescent dart"]
                       },
                       "armored" :
                       {
                        "name" : "Moon knight", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Midnight combo", "Crescent darts", "Staff slam", "Full moon", "Lunar eclipse"],
                        "bonus" : ["Increased no. of projectiles on Crescent dart skill"],
                        "links" : ["doc_strange/mordo", "websuit/silk", "sw_armor_wars/kingpin", "sw_1872/bullseye", "maosq/daisy_johnson"],
                        "gears" : ["Truncheon", "Chest armor", "Silver cloak", "Crescent dart"]
                       }
                      }
                     },
"mordo" :            {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Baron Mordo", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Energy sphere", "Energy whip", "Energy shock", "Seeking spear", "Flame pillar"],
                        "gears" : ["Black magic", "Green tight", "Black collar", "Mordo's belt"]
                       },
                       "doc_strange" :
                       {
                        "name" : "Mordo", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Serpent staff", "Chain staff", "Sacred staff", "Heaven strike", "Maelstrom staff"],
                        "bonus" : ["Activate rate: 10% when attacking", "Apply to: Self", "All speed +10% (10 sec.)", "Energy damage immune (5 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["aaou_blast/ultron", "aaou/black_widow", "ip/war_machine", "noir/punisher", "doc_strange/doctor_strange"],
                        "gears" : ["Metal staff", "Green uniform", "Braid belt", "Wrist guard band"],
                        "immunities" : ["U/all_energy/attack/10/100/5"]
                       }
                      }
                     },
"ms_marvel" :        {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Ms marvel - Kamala Khan", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Enlarge hook", "Shifting punch", "Morphing stomp", "Party smash", "Polymorph"],
                        "gears" : ["Morphogenesis", "Polymer suit", "Diamond mask", "Terrigen mist"]
                       },
                       "karachi" :
                       {
                        "name" : "Ms marvel - Kamala Khan", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Enlarge hook", "Shifting punch", "Morphing stomp", "Party smash", "Polymorph"],
                        "bonus" : ["Apply to: Self", "Increase all speeds by 10%", "Increase HP by 20%"],
                        "links" : ["now/captain_america", "unleashed/hulk_cho", "aaou/captain_america", "ms_marvel/captain_marvel", "capdoc/modok"],
                        "gears" : ["Morphogenesis", "Karachi costume", "Red bandana", "Terrigen mist"]
                       }
                      }
                     },
"nebula" :           {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Nebula", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "combat",
                        "skills" : ["Elegant kick", "Sudden strike", "Vicious spree", "Dagger dance", "Shooting star"],
                        "gears" : ["Electroshock batons", "Regeneration implant", "Cybernetic-enhancement", "Mechanical arm"]
                       },
                       "classic" :
                       {
                        "name" : "Nebula", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "combat",
                        "skills" : ["Elegant kick", "Sudden strike", "Vicious spree", "Dagger dance", "Shooting star"],
                        "bonus" : ["Add stun effect to skill Sudden strike"],
                        "links" : ["doc_strange/doctor_strange", "an/she_hulk", "sa/star_lord", "now/captain_america", "iar/ghost_rider"],
                        "gears" : ["Electroshock batons", "Regeneration implant", "Violet tights", "Wrist blasters"]
                       }
                      }
                     },
"octopus" :          {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Doctor Octopus", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Tentacle sling", "Rock throw", "Tentacle block", "Tentacle punch", "Armed and dangerous"],
                        "gears" : ["Tentacle harness", "Power suit", "Neural controller", "Sunglasses"]
                       },
                       "ssm" :
                       {
                        "name" : "Doctor Octopus", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Web caught", "Final embrace", "Spiderlings", "From the sky", "Arachnophobia"],
                        "bonus" : ["Activate rate: when dodging", "Apply to: Self", "Increase damage by 120% for 1 times (5 sec.)", "Cooldown time 8 seconds"],
                        "links" : ["doc_strange/mordo", "aaou/hawkeye", "ultimate/green_goblin", "anad/sister_grimm", "spidoc/modok"],
                        "gears" : ["Web-shooter", "Superior costume", "Mechanical spider-arms", "Spider-boots"]
                       }
                      }
                     },
"odin" :             {
                      "uniform" : "modern",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Odin", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["King slash", "Odin charge", "Asgardian barrier", "Odin's wrath", "Odinforce"],
                        "gears" : ["Odinsword", "Battle armor of the all-father", "Eye patch of Odin", "Odinforce"],
                        "immunities" : ["T2/cancel", "S/all/skill/5/100/3"]
                       }
                      }
                     },
"phil_coulson" :     {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Phil Coulson", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Coulson's revenge", "Harnessing the destroyer", "Agent Melinda May", "Coulson special", "The captain card"],
                        "gears" : ["Bambino", "Blue grey suit", "Bulletproof vest", "Captain america card collection"]
                       }
                      }
                     },
"proxima_midnight" : {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Proxima midnight", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "universal",
                        "skills" : ["Impact Blow", "Midnight Blow", "Velocity Strike", "Piercing Abyss", "Midnight Sky"],
                        "gears" : ["Collapsing star spear", "Black combat uniform", "Golden pauldron and gauntlet", "Proxima mask"]
                       }
                      }
                     },
"punisher" :         {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Punisher", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Grenade throw", "Flare", "Killer instinct", "Punish the guilty", "Incendiary rocket"],
                        "gears" : ["Grenade shotgun", "Kevlar uniform", "Combat boots", "Bandolier"]
                       },
                       "noir" :
                       {
                        "name" : "Punisher", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Grenade throw", "Flare", "Killer instinct", "Punish the guilty", "Incendiary rocket"],
                        "bonus" : ["Activation rate: when dealing critical attack", "Apply to: Self", "Physical attack +10% (20 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["sw_2099/captain_america", "classic/nebula", "anad/drax", "now/yellow_jacket", "aaou/black_widow"],
                        "gears" : ["Dual colt", "Skull mask", "Trench coat", "Gun holder suspenders"]
                       },
                       "wj" :
                       {
                        "name" : "Punisher", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Grenade throw", "Flare", "Perfect aim", "Rocket shower", "Incendiary rocket"],
                        "bonus" : ["Activation rate: when dealing critical attack", "Apply to: Self", "Physical attack +10% (20 sec.)", "Cooldown time 30 seconds"],
                        "links" : ["cacw/hawkeye", "ms_marvel/captain_marvel", "classic/nebula", "anca/falcon", "now/red_hulk"],
                        "gears" : ["Grenade launcher", "Kevlar-titanium uniform", "Captain punisher mask", "Bandolier"]
                       },
                       "md" :
                       {
                        "name" : "Punisher", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Grenade throw", "Flare", "Wild shot", "Rocket shower", "Smoke operation"],
                        "bonus" : ["Activation rate: 5% when attacking", "Apply to: Self", "Decrease skill cooldown by 30% (10 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["md/elektra", "anad/iron_fist", "iar/black_bolt", "modern/crossbones", "modern2/giant_man"],
                        "gears" : ["Hand gun", "Kevlar suit", "Combat boots", "Black leather jacket"]
                       }
                      }
                     },
"red_hulk" :         {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Red hulk", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Burning fury", "Hulk blast", "Irradiate", "Blazing leap", "Avalanche smash"],
                        "gears" : ["Gamma radiation emission", "Heat resistants pants", "Belching heat", "Rejuvenation"],
                        "immunities" : ["L/burn"]
                       },
                       "now" :
                       {
                        "name" : "Red hulk", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Burning fury", "Hulk blast", "Gunfire", "Blazing leap", "Avalanche smash"],
                        "bonus" : ["Activation rate: when hp is below 50%", "Apply to: Self", "Max hp recovery 15% (1 sec)", "Cooldown time 7 seconds"],
                        "links" : ["anad/wasp", "doc_strange/doctor_strange", "cacw/captain_america", "cacw/black_widow", "noir/punisher"],
                        "gears" : ["Gamma radiation emission", "U.S.A. shorts", "Ammunition belt", "Huge handgun"],
                        "immunities" : ["L/burn", "S/all/skill/2/100/3", "S/all/skill/3/100/3"]
                       }
                      }
                     },
"red_skull" :        {
                      "uniform" : "catfa",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "catfa" :
                       {
                        "name" : "Red skull", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Rapid fire", "Fatal blow", "Strategist", "Cosmic cube destruction", "Legion of Hydra"],
                        "gears" : ["Tesseract", "Black leather coat", "HYDRA belt", "Kevlar vest"]
                       },
                       "sw_red_skull" :
                       {
                        "name" : "Red skull", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "speed",
                        "skills" : ["Rifle shield", "Skull cyclone", "Quick draw", "Cosmic cube destruction", "Legion of Hydra"],
                        "bonus" : ["Activation rate: 30% when attacking", "Apply to: Self", "Deals 30% bleed damage every 1 sec. (3 sec.)", "All speed -10% (10 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["classic/nebula", "modern/sif", "sw_2099/captain_america", "cacw/spider_man", "sw_1602/angela"],
                        "gears" : ["Old sword", "Black hood", "Old pauldron", "Classic vibranium shield"]
                       }
                      }
                     },
"rocket_raccoon" :   {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Rocket racoon", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Heavy machine gun", "Covering fire", "Trip mine", "Ion cannon", "I've got a plan"],
                        "gears" : ["Laser cannon", "Orange battle suit", "Cybernetic skeleton", "Jet pack"]
                       },
                       "anad" :
                       {
                        "name" : "Rocket racoon", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Heavy machine gun", "Covering fire", "Trip mine", "Ion cannon", "I've got a plan"],
                        "bonus" : ["Increase number of mines"],
                        "links" : ["cacw/spider_man", "aaou/thor", "aaou_combat/ultron", "anad/mockingbird", "modern/crossbones"],
                        "gears" : ["Quad-plasma cannon", "Yellow battle suit", "Cybernetic skeleton", "Rocket-powered jet boots"]
                       },
                       "gg2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Rocket racoon", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Heavy machine gun", "Covering fire", "Trip mine", "Ion cannon", "I've got a plan"],
                        "bonus" : ["Actication rate: 20% chance when attacking", "Apply to: Self", "Recovers by 5% of max HP (1 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["md/punisher", "aaou/hawkeye", "ultimate/green_goblin", "sw_2099/captain_america", "anad/yondu"],
                        "gears" : ["Laser cannon", "Old battle suit", "Cybernetic skeleton", "Jet pack"]
                       }
                      }
                     },
"ronan" :            {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Ronan", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Tip the scales", "Universal weapon", "Arbitration", "Law enforcer", "Judgement call"],
                        "gears" : ["Universal weapon", "Kree armor", "Kree pauldron", "Protective shroud"]
                       },
                       "annihilation" :
                       {
                        "name" : "Ronan", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Hammer charge", "Universal weapon", "Merciless gavel", "Law enforcer", "Judgement call"],
                        "bonus" : ["Add stun effect to Hammer charge skill"],
                        "links" : ["now/yellow_jacket", "iar/ghost_rider", "websuit/silk", "anad/angela", "sw_future/hulk"],
                        "gears" : ["Universal weapon", "Kree armor", "Kree pauldron", "Protective shroud"]
                       }
                      }
                     },
"satana" :           {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Satana", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Dancing flame", "Flamethrower", "Little minion", "Fire barrier", "Succubus army"],
                        "gears" : ["Hellfire", "Black leather tight", "Red collar cape", "Succubus ornament"],
                        "immunities" : ["T2/all/attack/25/100/10"]
                       }
                      }
                     },
"sharon_rogers" :    {
                      "uniform" : "ca_75",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "ca_75" :
                       {
                        "name" : "Sharon Rogers", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Riposte strike", "Sky dragoon", "Javelin blast", "Paladin blast", "Freedom strike"],
                        "gears" : ["Energy blast lance", "Kevlar-titanium uniform", "Helmet", "Vibranium shield"],
                        "immunities" : ["S/all/skill/3/100/5"]
                       },
                       "starlight_armor" :
                       {
                        "image_version" : 3.0,
                        "name" : "Sharon Rogers", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Counter offensive", "Sky dragoon", "Energy beam", "Paladin blast", "Freedom strike"],
                        "gears" : ["Starlight lance", "Starlight armor", "Scouter", "Starlight shield"],
                        "links" : ["noir/punisher", "anad/angela", "anad/karnak", "anad/gamora", "modern/deathlok"],
                        "immunities" : ["S/all/skill/3/100/5"]
                       }
                      }
                     },
"shang_chi" :        {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Shang-Chi", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Nunchaku knockout", "Mystic clone", "Chi charge", "Mystic barrage", "Mystic army"],
                        "gears" : ["Nunchaku", "Red tights", "Gold shoes", "Metal bracelets"]
                       }
                      }
                     },
"she_hulk" :         {
                      "uniform" : "sw_a_force",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "sw_a_force" :
                       {
                        "name" : "She-hulk", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Opening statement", "Move to strike", "Cross examination", "Objection !", "Exhibit A"],
                        "gears" : ["Mighty gloves", "A-Force uniform", "Gamme-charger", "Legal documents"]
                       },
                       "an" :
                       {
                        "name" : "She-hulk", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Opening statement", "Move to strike", "Cross examination", "Objection !", "Exhibit A"],
                        "bonus" : ["Apply to: Self", "Immune to guard break", "Enhances effect of skill, \"Layer up\""],
                        "links" : ["cacw/black_widow", "ms_marvel/captain_marvel", "annihilation/ronan", "cacw/ant_man", "sw_2099/black_widow"],
                        "gears" : ["Mighty gloves", "All-new uniform", "Gamme-charger", "Legal documents"],
                        "immunities" : ["U/guard_break"]
                       }
                      }
                     },
"sif" :              {
                      "uniform" : "maos",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "maos" :
                       {
                        "name" : "Sif", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Sudden stab", "Combat strike", "Attack edge", "For glory !", "For honor!"],
                        "gears" : ["Sword and shield", "Asgardian armor", "Chain mail", "Gaiters"]
                       },
                       "modern" :
                       {
                        "name" : "Sif", "attackBase" : "physical", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Stunning slash", "Asgardian grace", "Attack edge", "Goddess of war", "For honor!"],
                        "bonus" : ["Apply to: Self", "All speed +10%"],
                        "links" : ["unleashed/hulk_cho", "sw_zombies/elsa_bloodstone", "modern/crossbones", "anad/gamora", "wwh/hulk"],
                        "gears" : ["Sword of Sif", "Asgardian armor", "Plumed cape", "Gaiters"],
                        "immunities" : ["S/all/skill/3/100/2"]
                       }
                      }
                     },
"silk" :             {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Silk", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Spider and fly", "Look behind you", "Shield smash", "Web rebound", "The yo-yo"],
                        "gears" : ["Organic web", "Red hood", "Silk costume", "Silk sense"],
                        "immunities" : ["P/web"]
                       },
                       "websuit" :
                       {
                        "name" : "Silk", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Spider and fly", "Look behind you", "Shield smash", "Silk spinner", "The yo-yo"],
                        "bonus" : ["Apply to: self", "2 sec increase to duration time of web"],
                        "links" : ["anad/wasp", "anad/iron_fist", "sw_zombies/venom", "anad/luke_cage", "anad/rocket_raccoon"],
                        "gears" : ["Organic web", "Web hood", "Web costume", "Silk sense"],
                        "immunities" : ["P/web"]
                       }
                      }
                     },
"sin" :              {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Sin", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "vilain", "type" : "speed",
                        "skills" : ["Pistol whip", "Strafe shot", "Rapid handgun", "Rocket launcher", "Eternal sin"],
                        "gears" : ["Hand gun", "Skeleton vest", "Black leather pants", "Rocket launcher"]
                       }
                      }
                     },
"singularity" :      {
                      "uniform" : "sw_a_force",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "sw_a_force" :
                       {
                        "name" : "Singularity", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Ablation", "Space fold", "Supernova", "Meteorite", "Dimensional tear"],
                        "gears" : ["Dimensional power", "Star field", "Cat collar bracelet", "Purple ribbon"],
                        "immunities" : ["P/guard_break", "P/paralyze", "P/stun"]
                       }
                      }
                     },
"sister_grimm" :     {
                      "uniform" : "sw_a_force",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "sw_a_force" :
                       {
                        "name" : "Sister Grimm", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Float on", "Punish", "Angry like a wolf", "Now you see me", "Rock and roll"],
                        "gears" : ["The staff of One", "Black dress", "Witch arm", "Blood offering"]
                       },
                       "anad" :
                       {
                        "name" : "Sister Grimm", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Float on", "Punish", "Avian fury", "Now you see me", "Rock and roll"],
                        "bonus" : ["Adds burn damage to skills, Float on, Punish, and Angry like a wolf"],
                        "links" : ["na/iron_fist", "anad/black_bolt", "anad/mockingbird", "maosq/daisy_johnson", "sw_renew/spider_man"],
                        "gears" : ["The staff of One", "Arcane garb", "Witch arm", "Blood offering"]
                       }
                      }
                     },
"songbird" :         {
                      "uniform" : "na",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "na" :
                       {
                        "name" : "Songbird", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Sonic wall", "Sonic flash", "Sonic shield", "Sonic armory", "Sonic maelstrom"],
                        "gears" : ["Sonic blast", "Flight suit", "White long boots", "Gold shoulder protector"]
                       }
                      }
                     },
"spider_gwen" :      {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Spider-Gwen", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Kick-tock", "Spin n'pin", "What goes up", "The blender", "One-two kick"],
                        "gears" : ["Web-shooter", "Hooded spider costume", "White mask", "Earphone"],
                        "immunities" : ["P/web"]
                       }
                      }
                     },
"spider_man" :       {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Spider-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Web shot", "Web swing kick", "Webslinger", "Web fling", "Wrecking web"],
                        "gears" : ["Web-shooter", "Classic costume", "Spider mask", "Utility belt"],
                        "immunities" : ["P/web", "P/snare", "P/stun"]
                       },
                       "sw_renew" :
                       {
                        "name" : "Spider-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Web shot", "Web swing kick", "Webslinger", "Web fling", "Wrecking web"],
                        "bonus" : ["Shoot more shots for skill: Web shot"],
                        "links" : ["cacw/hawkeye", "sw_2099/iron_man", "doc_strange/ancient_one", "modern/crossbones", "maos/mockingbird"],
                        "gears" : ["Web-shooter", "Black costume", "Black mask", "Utility belt"],
                        "immunities" : ["P/web", "P/snare", "P/stun"]
                       },
                       "anad" :
                       {
                        "name" : "Spider-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Web shot", "Web swing kick", "Webslinger", "Web fling", "Wrecking web"],
                        "bonus" : ["Web shot and Webslinger inflict shock damage"],
                        "links" : ["anad/sister_grimm", "ssm/octopus", "cacw/war_machine", "mam/ant_man", "cacw/spider_man"],
                        "gears" : ["Web-shooter", "Parker tech suit", "Spider mask", "Utility belt"],
                        "immunities" : ["P/web", "P/snare", "P/stun"]
                       },
                       "cacw" :
                       {
                        "name" : "Spider-man", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Web blast", "Web swing kick", "Webslinger", "Web fling", "Wrecking web"],
                        "bonus" : ["Spider web effect added to the Spider kick skill"],
                        "links" : ["unleashed/hulk_cho", "na/iron_fist", "cacw/agent_13", "sw_2099/black_widow", "prometheus/destroyer"],
                        "gears" : ["Web-shooter", "Classic costume", "Spider mask", "Utility belt"],
                        "immunities" : ["P/web", "P/snare", "P/stun"]
                       }
                      }
                     },
"squirrel_girl" :    {
                      "uniform" : "na",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "na" :
                       {
                        "name" : "Squirrel girl", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Squirrel bombs", "Scurry roll", "Tail whip", "Squirrel army", "Squirrel sidekick"],
                        "gears" : ["Bushy tail", "Brown jacket", "Orange jumpsuit", "Tippy toe"]
                       },
                       "now" :
                       {
                        "name" : "Squirrel girl", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "speed",
                        "skills" : ["Squirrel bombs", "Scurry roll", "Tail whip", "Squirrel army", "Squirrel sidekick"],
                        "bonus" : ["Activation rate: 20% when attacking", "Apply to: Self", "Increase damage by 110% for 1 time (5 sec.)", "Cooldown time 15 seconds"],
                        "links" : ["sw_2099/black_widow", "capdoc/modok", "modern/deathlok", "cacw/captain_america", "ll/loki"],
                        "gears" : ["Bushy tail", "U.S.A. scarf", "Red jumpsuit", "Tippy toe"]
                       }
                      }
                     },
"star_lord" :        {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Star Lord", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Gravity grenade", "Hadron enforcer", "I have a plan", "Power of orb", "Come and get it"],
                        "gears" : ["Quad blasters", "Helmet", "Jet boots", "Cassette player"]
                       },
                       "sa" :
                       {
                        "name" : "Star Lord", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Gravity grenade", "Star moves", "I have a plan", "Power of orb", "Come and get it"],
                        "bonus" : ["Apply to: Self", "Critical damage +15%"],
                        "links" : ["hda/hulkbuster", "cacw/spider_man", "sw_2099/iron_man", "classic_70/blade", "modern/daisy_johnson"],
                        "gears" : ["Quad blasters", "Space armor", "Jet boots", "Element gun"]
                       },
                       "gg2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Star Lord", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Gravity grenade", "Hadron enforcer", "I have a plan", "Power of orb", "Come and get it"],
                        "bonus" : ["Apply to: Self", "Increase dodge rate by 10%", "Enhances effect of skill \"Legendary outlaw\""],
                        "links" : ["classic/nebula", "karachi/ms_marvel", "maos/mockingbird", "ip/war_machine", "modern/sif"],
                        "gears" : ["Quad blasters", "Helmet", "Long coat", "Cassette player"]
                       }
                      }
                     },
"supergiant" :       {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Supergiant", "attackBase" : "energy", "species" : "alien", "gender" : "female", "side" : "vilain", "type" : "universal",
                        "skills" : ["Energy strike", "Mental trap", "Battle mentality", "Puppeteer", "Giant illusions"],
                        "gears" : ["Mind control", "White cloak", "Black order battle suite", "Black long boots"]
                       }
                      }
                     },
"thanos" :           {
                      "uniform" : "infinity",
                      "tiers" : [2],
                      "uniforms" :
                      {
                       "infinity" :
                       {
                        "name" : "Thanos", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Titan Punch", "Titan Beam", "Cosmic Shift", "Cosmic Rain", "Cosmic Drop"],
                        "gears" : ["Gold armguard", "Blue battle suit", "Gold chest armor", "Mad titan helmet"],
                        "immunities" : ["T2/invincible/skill/1/100/2", "P/all/hit/100/4", "S/all/skill/5/100/3"]
                       }
                      }
                     },
"thor" :             {
                      "uniform" : "avengers",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "avengers" :
                       {
                        "name" : "Thor", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Thunderstrike", "Hammer throw", "Call the lightning", "Battle rage", "Thundering maelstrom"],
                        "gears" : ["Mjolnir", "Battle armor", "Winged helmet", "Iron gauntlets"]
                       },
                       "aaou" :
                       {
                        "name" : "Thor", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Thunderstrike", "Hammer throw", "Call the lightning", "Battle rage", "Thundering maelstrom"],
                        "bonus" : ["Activation rate: 25% when hit", "Energy attack 80% lightning damage", "Cooldown time 5 seconds"],
                        "links" : ["sw_zombies/venom", "unworthy/thor", "modern/deathlok", "wj/punisher", "na/iron_fist"],
                        "gears" : ["Mjolnir", "Battle armor", "Winged helmet", "Iron gauntlets"]
                       },
                       "unworthy" :
                       {
                        "name" : "Thor", "attackBase" : "energy", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Thunder axe", "Thunder roar", "Call the lightning", "Celestial breaker", "Thundering maelstrom"],
                        "bonus" : ["Apply to: Self", "All damage received reduced by 15%"],
                        "links" : ["anad/black_bolt", "hda/hulkbuster", "anad/black_cat", "sw_1872/bullseye", "anad/malekith"],
                        "gears" : ["Ultimate Mjolnir", "Battle armor", "Red cape", "Uru arm"]
                       }
                      }
                     },
"thor_jane_foster" : {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Thor - Jane Foster", "attackBase" : "energy", "species" : "human" ,"gender" : "female", "side" : "hero", "type" : "universal",
                        "skills" : ["Thunderous wind", "Mjolnir's toss", "Mjolnir's rage", "Thor's rage", "Goddess of thunder"],
                        "gears" : ["Mjolnir", "Armor of thunderer", "Winged helmet", "Leather belt"]
                       }
                      }
                     },
"ulik" :             {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Ulik", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Knuckle pound", "Boulder toss", "Trolls's roar", "Knuckle barrage", "Troll stomp"],
                        "gears" : ["Pounders", "Rock-hard skin", "Troll knight armor", "Wild teeth"],
                        "immunities" : ["S/all_physical/skill/3/100/5"]
                       }
                      }
                     },
"ultron" :           {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Ultron", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Chest beam", "Robotic slam", "Encephalo-ray", "Electronic field", "No strings"],
                        "gears" : ["Concussion blasters", "Vibranium shell", "Small nuclear reactor", "Hive-mind technology"],
                        "immunities" : ["P/burn", "P/poison", "P/bleed"]
                       },
                       "aaou_blast" :
                       {
                        "name" : "Ultron prime", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Chest beam", "Robotic slam", "Encephalo-ray", "Electronic field", "No strings"],
                        "bonus" : ["Apply to: Self", "10% damage boost againt blast type", "10% incoming damage reduction from blast type"],
                        "links" : ["anad/angela", "annihilation/ronan", "anad/spider_man", "anad/gamora", "modern/daisy_johnson"],
                        "gears" : ["Concussion blasters", "Vibranium shell", "Small nuclear reactor", "Hive-mind technology"],
                        "immunities" : ["P/burn", "P/poison", "P/bleed"]
                       },
                       "aaou_combat" :
                       {
                        "name" : "Ultron mark 1", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Chest beam", "Robotic slam", "Encephalo-ray", "Electronic field", "No strings"],
                        "bonus" : ["Apply to: Self", "10% damage boost againt combat type", "10% incoming damage reduction from combat type"],
                        "links" : ["prometheus/destroyer", "catws/captain_america", "anad/black_cat", "ms_marvel/captain_marvel", "modern/daisy_johnson"],
                        "gears" : ["Concussion blasters", "Vibranium shell", "Small nuclear reactor", "Hive-mind technology"],
                        "immunities" : ["P/burn", "P/poison", "P/bleed"]
                       },
                       "aaou_speed" :
                       {
                        "name" : "Ultron mark 3", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "vilain", "type" : "universal",
                        "skills" : ["Chest beam", "Robotic slam", "Encephalo-ray", "Electronic field", "No strings"],
                        "bonus" : ["Apply to: Self", "10% damage boost againt speed type", "10% incoming damage reduction from speed type"],
                        "links" : ["wj/punisher", "wwh/hulk", "now/yellow_jacket", "modern/lash", "catws/captain_america"],
                        "gears" : ["Concussion blasters", "Vibranium shell", "Small nuclear reactor", "Hive-mind technology"],
                        "immunities" : ["P/burn", "P/poison", "P/bleed"]
                       }
                      }
                     },
"venom" :            {
                      "uniform" : "classic",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "classic" :
                       {
                        "name" : "Venom", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Symbiote surge", "Tendril spike", "Parastic shot", "Deadly maw", "Lethal Symbiosis"],
                        "gears" : ["Claws", "Poisonous fangs", "Prehensile tongue", "The hunger"]
                       },
                       "sw_zombies" :
                       {
                        "name" : "Venom", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "combat",
                        "skills" : ["Symbiote surge", "Tendril spike", "Parastic shot", "Deadly maw", "Lethal Symbiosis"],
                        "bonus" : ["Activation rate: 10% when hit", "Apply to: Self", "Super armor, all defense +5% (10 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["ultimate/green_goblin", "now/squirrel_girl", "anad/rocket_raccoon", "ati/war_machine", "aaou/hawkeye"],
                        "gears" : ["Claws", "Poisonous fangs", "Prehensile tongue", "The hunger"]
                       }
                      }
                     },
"vision" :           {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Vision", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Physical disruption", "Solar energy beam", "Density shift", "Microwave pulse", "Dimensional attack"],
                        "gears" : ["Solar energy", "Density alteration system", "Self-repair system", "Optical scanners"],
                        "immunities" : ["P/all_physical/hit/25/100/10", "T2/all/skill/3/100/4"]
                       },
                       "aaou" :
                       {
                        "name" : "Vision", "attackBase" : "energy", "species" : "creature", "gender" : "male", "side" : "hero", "type" : "universal",
                        "skills" : ["Physical disruption", "Solar energy beam", "Density shift", "Microwave pulse", "Dimensional attack"],
                        "bonus" : ["Apply to: Self", "Decrease debuff duration by 15%", "Increase all resistances by 15%"],
                        "links" : ["anad/black_bolt", "dohk/daredevil", "classic_70/ghost_rider", "now/yellow_jacket", "anad/mockingbird"],
                        "gears" : ["Solar energy", "Density alteration system", "Self-repair system", "Optical scanners"],
                        "immunities" : ["P/all_physical/hit/25/100/10", "T2/all/skill/3/100/4"]
                       }
                      }
                     },
"volstagg" :         {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Volstagg", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Valiant volley", "Valiant slash", "Voluminous blow", "Enormous eathquake", "Volstagg's formation"],
                        "gears" : ["Sword of Volstagg", "Voluminous shirts", "Plumed helmet", "Droop belt"],
                        "immunities" : ["S/all/skill/3/100/5"]
                       }
                      }
                     },
"war_machine" :      {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "War machine", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Suppression fire", "Armored clash", "Repulsor shot", "Minigun barrage", "Missile strafe"],
                        "gears" : ["Gatling gun", "War machine armor", "Power cells", "Heat seeking missiles"],
                        "immunities" : ["P/stun"]
                       },
                       "ip" :
                       {
                        "name" : "War machine", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Suppression fire", "Armored clash", "Repulsor shot", "Minigun barrage", "Missile strafe"],
                        "bonus" : ["Add stun effect to Armored clash skill"],
                        "links" : ["aaou/captain_america", "ssm/octopus", "now/squirrel_girl", "ati/war_machine", "classic_70/blade"],
                        "gears" : ["Gatling gun", "Iron patriot armor", "Power cells", "Heat seeking missiles"],
                        "immunities" : ["P/stun"]
                       },
                       "ati" :
                       {
                        "name" : "War machine", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Suppression fire", "Armored clash", "Repulsor shot", "Minigun barrage", "Missile strafe"],
                        "bonus" : ["Add stun effect to Armored clash skill"],
                        "links" : ["claws/black_cat", "aaou/iron_man", "anad/sister_grimm", "aaou/black_widow", "aaou/vision"],
                        "gears" : ["Combat cannon", "Assault armor", "Power cells", "Heat seeking missiles"],
                        "immunities" : ["P/stun"]
                       },
                       "cacw" :
                       {
                        "name" : "War machine", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Suppression fire", "Armored clash", "Repulsor shot", "Minigun barrage", "Heavy metal"],
                        "bonus" : ["Add stun effect to Armored clash skill"],
                        "links" : ["anad/luke_cage", "prometheus/destroyer", "sw_1602/angela", "modern/sif", "mam/ant_man"],
                        "gears" : ["Gatling gun", "War machine armor", "Power cells", "Heat seeking missiles"],
                        "immunities" : ["P/stun"]
                       }
                      }
                     },
"warwolf" :          {
                      "uniform" : "howling",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "howling" :
                       {
                        "name" : "Warworlf", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "combat",
                        "skills" : ["Vicious strike", "Bury them", "Ambush", "Blood frenzy", "Howl to Mars"],
                        "gears" : ["Mini gatling gun", "S.H.I.E.L.D. battle suit", "A.O.S. bandolier", "Tactical backpack"],
                        "immunities" : ["S/invincible/skill/5/100/1"]
                       }
                      }
                     },
"wasp" :             {
                      "uniform" : "modern",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "modern" :
                       {
                        "name" : "Wasp", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Disrupting shot", "Blinding flash", "Encouragement", "Target rush", "Swarm shield"],
                        "gears" : ["Wasp's sting", "Wasp uniform", "Implanted insect wings", "Pym particles"],
                        "immunities" : ["S/all/skill/5/100/14"]
                       },
                       "anad" :
                       {
                        "name" : "Wasp", "attackBase" : "energy", "species" : "human", "gender" : "female", "side" : "hero", "type" : "blast",
                        "skills" : ["Disrupting shot", "Blinding flash", "Encouragement", "Target rush", "Swarm shield"],
                        "bonus" : ["Activation rate: 5% when attacking", "Apply to: Self", "Apply to: Enemy", "Paralyze (2 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["na/iron_fist", "armored/moon_knight", "doc_strange/mordo", "classic_70/blade", "anad/drax"],
                        "gears" : ["Wasp's sting", "Wasp uniform", "Implanted insect wings", "Pym particles"],
                        "immunities" : ["S/all/skill/5/100/14"]
                       }
                      }
                     },
"whiplash" :         {
                      "uniform" : "mim2",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "mim2" :
                       {
                        "image_version" : 3.0,
                        "name" : "Whiplash", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Whip shot", "Cross slash", "Whip snare", "High voltage", "Whip storm"],
                        "gears" : ["Energy whip", "Modified suit", "Frayed pants", "Arc reactor"]
                       }
                      }
                     },
"white_tiger" :      {
                      "uniform" : "na",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "na" :
                       {
                        "name" : "White tiger", "attackBase" : "physical", "species" : "human", "gender" : "female", "side" : "hero", "type" : "combat",
                        "skills" : ["Tiger pounce", "Tiger spirit", "Amulet shield", "Tiger claw", "Tiger ambush"],
                        "gears" : ["Tiger claw", "White tights", "White tiger mask", "White tiger amulet"],
                        "immunities" : ["S/all/skill/3/100/5"]
                       }
                      }
                     },
"wiccan" :           {
                      "uniform" : "na",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "na" :
                       {
                        "name" : "Wiccan", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "hero", "type" : "blast",
                        "skills" : ["Spell bomb", "Spell concentration", "Dispel zone", "Kinetic chain", "Spell wave"],
                        "gears" : ["Reality warping", "Cosmic top", "Cosmic pants", "Red cape"]
                       }
                      }
                     },
"winter_soldier" :   {
                      "uniform" : "catws",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "catws" :
                       {
                        "name" : "Winter soldier", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Suppressing fire", "Bionic combat", "Sensory array", "Snarpshooter", "Explosive sabotage"],
                        "gears" : ["Rifle mount grenade launcher", "Tactical suit", "Cybernetic arm", "Black mask"]
                       },
                       "cacw" :
                       {
                        "name" : "Winter soldier", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Suppressing fire", "Bionic combat", "Sensory array", "Snarpshooter", "Explosive sabotage"],
                        "bonus" : ["Use Sensory array to summon Captain America and enhance the Sensory array skill"],
                        "links" : ["mam/ant_man", "modern2/giant_man", "aaou_combat/ultron", "cacw/ant_man", "aaou/hawkeye"],
                        "gears" : ["Rifle mount grenade launcher", "Combat vest", "Cybernetic arm", "Sniper rifle"]
                       },
                       "ca" :
                       {
                        "name" : "Winter soldier", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Winter shield", "Bionic combat", "Cover fire", "Shock value", "Explosive sabotage"],
                        "bonus" : ["Activation rate: when skill Cover fire is used", "Apply to: Self", "Immune to all damage (2 sec.)", "Cooldown time 1 second"],
                        "links" : ["armored/moon_knight", "anad/spider_man", "spidoc/modok", "anad/yondu", "sw_2099/captain_america"],
                        "gears" : ["Vibranium shield", "Kevlar-titanium uniform", "Cybernetic arm", "Automatic revolver"],
                        "immunities" : ["U/all/skill/3/100/2"]
                       }
                      }
                     },
"wong" :             {
                      "uniform" : "anad",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "anad" :
                       {
                        "name" : "Wong", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Wandering staff", "Scimitar spin", "Mystic shield", "Mystic wave", "Scimitar cyclone"],
                        "gears" : ["Runic staff", "Kamar-Taj uniform", "Gold fabric belt", "Scimitar"],
                        "immunities" : ["S/all/skill/3/100/5", "L/all/hit/25/100/12"]
                       },
                       "doc_strange" :
                       {
                        "name" : "Wong", "attackBase" : "physical", "species" : "human", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Wandering staff", "Scimitar spin", "Mystic shield", "Mystic wave", "Scimitar cyclone"],
                        "bonus" : ["Activation rate: 45% when dealing critical attack", "Apply to: Self", "Skill cooltime 50% (10 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["catws/captain_america", "ip/war_machine", "anad/angela", "aaou_speed/ultron", "an/she_hulk"],
                        "gears" : ["Runic staff", "Kamar-Taj uniform", "Fabric belt", "Scimitar"],
                        "immunities" : ["S/all/skill/3/100/5", "L/all/hit/25/100/12"]
                       }
                      }
                     },
"yellow_jacket" :    {
                      "uniform" : "mam",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "mam" :
                       {
                        "name" : "Yellow jacket", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Stinger", "Flying barrage", "Now you see me", "Swarm shot", "Laser burst"],
                        "gears" : ["Robotic arms", "Yellow jacket suit", "Yellow jacked helmet", "Pym particles"]
                       },
                       "now" :
                       {
                        "name" : "Yellow jacket", "attackBase" : "energy", "species" : "human", "gender" : "male", "side" : "vilain", "type" : "blast",
                        "skills" : ["Stinger", "Flying barrage", "Now you see me", "Swarm shot", "Laser burst"],
                        "bonus" : ["Apply to: Self", "25% damage increase to hero type"],
                        "links" : ["doc_strange/doctor_strange", "sw_zombies/elsa_bloodstone", "modern/deathlok", "cacw/war_machine", "anca/falcon"],
                        "gears" : ["Robotic arms", "Yellow jacket suit", "Yellow jacket helmet", "Pym particles"]
                       }
                      }
                     },
"yondu" :            {
                      "uniform" : "gg",
                      "tiers" : [1, 2],
                      "uniforms" :
                      {
                       "gg" :
                       {
                        "name" : "Yondu", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Leap kick", "Barrage of arrows", "Arrow call", "Yaka arrow", "Ravager strike"],
                        "gears" : ["Yaka arrow", "Ravager coat", "Alpha centauri vest", "Toy doll"],
                        "immunities" : ["S/all/skill/5/100/2"]
                       },
                       "anad" :
                       {
                        "name" : "Yondu", "attackBase" : "physical", "species" : "alien", "gender" : "male", "side" : "hero", "type" : "speed",
                        "skills" : ["Leap kick", "Ravager assault", "Quantum detonator", "Bounty hunter", "Ravager strike"],
                        "bonus" : ["Activation rate: 5% when attacking", "Apply to: Self", "Skill cooltime 50% (10 sec.)", "Cooldown time 20 seconds"],
                        "links" : ["cacw/agent_13", "anad/spider_man", "sw_zombies/venom", "sw_1602/angela", "modern2/giant_man"],
                        "gears" : ["Handgun blaster", "Black fur jacket", "Enhanced black pants", "Toy doll"],
                        "immunities" : ["S/all/skill/5/100/2"]
                       }
                      }
                     }
};