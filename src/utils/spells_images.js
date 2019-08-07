const spells = [
  {
    name: "Accio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/99/Accio_cup.gif/revision/latest/scale-to-width-down/350?cb=20160520023137"
  },
  {
    name: "Age Line",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/0/05/AgeLine_WB_F4_GobletSurroundedByAgeLine_Illust_100615_Land.jpg/revision/latest/scale-to-width-down/350?cb=20161122081741"
  },
  {
    name: "Aguamenti",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e4/Aguamenti_PM.png/revision/latest/scale-to-width-down/349?cb=20161227030850"
  },
  {
    name: "Alarte Ascendare",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/c/c4/Alarte_Ascendare.gif/revision/latest/scale-to-width-down/350?cb=20190402152136"
  },
  {
    name: "Alohomora",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/0/0e/Alohomora.gif/revision/latest?cb=20140811055322"
  },
  {
    name: "Anteoculatia",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/0/04/Anteoculatia.png/revision/latest?cb=20120926202030"
  },
  {
    name: "Aparecium",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/0/02/Aparecium.jpg/revision/latest?cb=20180801200919"
  },
  {
    name: "Apparate",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/1/11/20110819-js-apparition.gif/revision/latest?cb=20110819093308"
  },
  {
    name: "Arania Exumai",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Tumblr_lvjimk76Q71qgt0vro6_250.gif/revision/latest?cb=20140406021650"
  },
  {
    name: "Aqua Eructo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/20/Aqua_Eructo.PNG/revision/latest/scale-to-width-down/350?cb=20090523111134"
  },
  {
    name: "Arresto Momentum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/81/Wandless_magic.gif/revision/latest?cb=20140818012650"
  },
  {
    name: "Ascendio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f0/Tumblr_lvya0rfkNa1qgt0vro8_r1_250.gif/revision/latest?cb=20140422140044"
  },
  {
    name: "Avada Kedavra",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/78/Avada-Kedavra.gif/revision/latest?cb=20180412031022"
  },
  {
    name: "Avifors",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/96/Avifors.jpg/revision/latest?cb=20090904212154"
  },
  {
    name: "Avis",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/5c/Avis.jpg/revision/latest/scale-to-width-down/350?cb=20170208044910"
  },
  {
    name: "Bombarda",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/8b/Bombarda_POA_2.gif/revision/latest?cb=20110816174245"
  },
  {
    name: "Bombarda Maxima",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/66/Bombarda_Maxima_2.gif/revision/latest?cb=20110816173323"
  },
  {
    name: "Carpe Retractum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/ea/Carpe.jpg/revision/latest/scale-to-width-down/350?cb=20090805135038"
  },
  {
    name: "Cistem Aperio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/93/Cistemaperio.gif/revision/latest?cb=20160514092313"
  },
  {
    name: "Colloportus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/a0/Colloportus.gif/revision/latest?cb=20130718001205"
  },
  {
    name: "Colloshoo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/3/3f/Colloshoo.jpg/revision/latest?cb=20120506225600"
  },
  {
    name: "Colovaria",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/46/PS_House_Cup_winner_updated.gif/revision/latest?cb=20140718153211"
  },
  {
    name: "Confringo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e1/Tumblr_n0oob0xVtb1qa3emao5_250.gif/revision/latest?cb=20140306195438"
  },
  {
    name: "Confundus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/NewtConfundus.gif/revision/latest/scale-to-width-down/350?cb=20190506173714"
  },
  {
    name: "Crucio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/9c/Voldemort_crucio_harry.gif/revision/latest/scale-to-width-down/350?cb=20170730184619"
  },
  {
    name: "Defodio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f5/GougingSpell.png/revision/latest?cb=20121119025318"
  },
  {
    name: "Densaugeo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/3/3e/DensaugeoPottermore.png/revision/latest?cb=20161211072132"
  },
  {
    name: "Deprimo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/65/Deprimo.gif/revision/latest?cb=20150904001811"
  },
  {
    name: "Depulso",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/db/Depulso.jpg/revision/latest/scale-to-width-down/350?cb=20090805133605"
  },
  {
    name: "Descendo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/89/Descendo.png/revision/latest/scale-to-width-down/350?cb=20130813023625"
  },
  {
    name: "Diffindo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/ff/DiffindoCrop250.gif/revision/latest?cb=20121202215152"
  },
  {
    name: "Diminuendo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/8c/Diminuendo_1.gif/revision/latest?cb=20130807021732"
  },
  {
    name: "Dissendium",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/b/bf/Dissendium.gif/revision/latest?cb=20120822131717"
  },
  {
    name: "Disillusionment",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Disillusionment_Charm.png/revision/latest?cb=20130627145144"
  },
  {
    name: "Duro",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f9/HM_y3_Duro.png/revision/latest?cb=20180602235448"
  },
  {
    name: "Engorgio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/82/Tumblr_n012qfgajR1rzvuwqo6_r1_250.gif/revision/latest?cb=20140409000423"
  },
  {
    name: "Episkey",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/4a/Episkey.gif/revision/latest/scale-to-width-down/350?cb=20100624101332"
  },
  {
    name: "Epoximise",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/7a/Epoximise.jpg/revision/latest?cb=20100109022645"
  },
  {
    name: "Erecto",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/2c/Ereto1.gif/revision/latest?cb=20140714182639"
  },
  {
    name: "Evanesco",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/ab/HM_y4_Evanesco.png/revision/latest?cb=20180922010433"
  },
  {
    name: "Everte Statum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/7f/Everte_Statum.gif/revision/latest/scale-to-width-down/350?cb=20190402151706"
  },
  {
    name: "Expecto Patronum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/fe/Patronus_PM_SilverStagPatronus_MomentIllust.jpg/revision/latest/scale-to-width-down/350?cb=20170314002945"
  },
  {
    name: "Expelliarmus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/67/Snape_disarms_Lockhart.gif/revision/latest/scale-to-width-down/350?cb=20190402120234"
  },
  {
    name: "Expulso",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Expulso.JPG/revision/latest/scale-to-width-down/350?cb=20110622210811"
  },
  {
    name: "Fianto Duri",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/95/DH2_Protego_Maxima%2C_Fianto_Duri%2C_Repello_Inimicum.gif/revision/latest/scale-to-width-down/350?cb=20190227212751"
  },
  {
    name: "Fiendfyre",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/1/18/Harry_and_Draco.png/revision/latest/scale-to-width-down/349?cb=20170204081554"
  },
  {
    name: "Finestra",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/d1/Finestra.gif/revision/latest/scale-to-width-down/350?cb=20190325030012"
  },
  {
    name: "Finite",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/c/c4/Finite_Incantatem.gif/revision/latest?cb=20130224094815"
  },
  {
    name: "Flagrate",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/9e/I_am_Lord_Voldemort.gif/revision/latest/scale-to-width-down/350?cb=20190227225113"
  },
  {
    name: "Flipendo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/4b/Flipendo.jpg/revision/latest?cb=20080620175901"
  },
  {
    name: "Fumos",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/2d/SS.png/revision/latest/scale-to-width-down/350?cb=20150109202630"
  },
  {
    name: "Furnunculus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f4/Furnunculus.png/revision/latest?cb=20140116223259"
  },
  {
    name: "Geminio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/5f/Gemino_Curse.gif/revision/latest/scale-to-width-down/350?cb=20111013021404"
  },
  {
    name: "Harmonia Nectere Passus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/3/3c/Harmonia_Nectere_Passus.JPG/revision/latest/scale-to-width-down/350?cb=20091118083703"
  },
  {
    name: "Homenum Revelio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/1/1d/Homenum_reveilo.gif/revision/latest?cb=20140811060337"
  },
  {
    name: "Horcrux",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/57/The_Horcruxex.png/revision/latest/scale-to-width-down/350?cb=20161126081048"
  },
  {
    name: "Illegibilus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e8/Illegibilus.jpg/revision/latest?cb=20090908113713"
  },
  {
    name: "Immobulus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/c/c1/Immobulus.gif/revision/latest/scale-to-width-down/350?cb=20090622140624"
  },
  {
    name: "Impedimenta",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Impedimenta_Jinx.jpg/revision/latest/scale-to-width-down/350?cb=20110917200551"
  },
  {
    name: "Imperio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/8c/Imperio1.gif/revision/latest?cb=20140811032614"
  },
  {
    name: "Incarcerous",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/0/05/Incarcerous.gif/revision/latest/scale-to-width-down/350?cb=20160822065707"
  },
  {
    name: "Incendio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/70/DH1_Hermione_Incendio_Slytherin%27s_Locket.gif/revision/latest?cb=20140605151006"
  },
  {
    name: "Lacarnum Inflamarae",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/54/Lacarnum_Inflamarae.gif/revision/latest?cb=20140206141553"
  },
  {
    name: "Langlock",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f2/Langlock.png/revision/latest?cb=20160508191819"
  },
  {
    name: "Levicorpus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/43/Levicorpus1.gif/revision/latest/scale-to-width-down/350?cb=20160616233048"
  },
  {
    name: "Liberacorpus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/a0/Liberacorpus.png/revision/latest?cb=20160508192423"
  },
  {
    name: "Locomotor Mortis",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/ad/Tumblr_lpbbhrrQXr1qbteqxo1_250.gif/revision/latest?cb=20140512182230"
  },
  {
    name: "Lumos",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/43/Wand-lighting_charm.gif/revision/latest?cb=20140912023113"
  },
  {
    name: "Lumos Maxima",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/3/32/20110806-js-hppoz-lumos-maxima.gif/revision/latest?cb=20110816230425"
  },
  {
    name: "Lumos Solem",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/77/Lumos_Solem.gif/revision/latest/scale-to-width-down/350?cb=20190402142857"
  },
  {
    name: "Meteolojinx Recanto",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/70/MeteolojinxRecanto.png/revision/latest/scale-to-width-down/350?cb=20130105030354"
  },
  {
    name: "Mimblewimble",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/dc/Mimblewimble.jpg/revision/latest/scale-to-width-down/332?cb=20141122213512"
  },
  {
    name: "Mobiliarbus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/1/1f/Mobilarbus.gif/revision/latest?cb=20150905195003"
  },
  {
    name: "Mobilicorpus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f6/Mobilicorpus.JPG/revision/latest/scale-to-width-down/350?cb=20110628133511"
  },
  {
    name: "Nox",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/ed/SnapeNox.gif/revision/latest?cb=20130718010454"
  },
  {
    name: "Oculus Reparo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/45/Tumblr_moug6ikKtQ1rfvrjbo2_250.gif/revision/latest?cb=20140621012110"
  },
  {
    name: "Obliviate",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/a2/Tumblr_mxadblpgUv1rwhxhro5_r1_250.gif/revision/latest?cb=20140622032247"
  },
  {
    name: "Oppugno",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/46/Undesirable_Number_One_posters.gif/revision/latest?cb=20110825093818"
  },
  {
    name: "Orchideous",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/fc/Orchideous.gif/revision/latest?cb=20181108004336"
  },
  {
    name: "Periculum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/44/GOF_Harry_Periculum_third_task.gif/revision/latest/scale-to-width-down/350?cb=20190227203954"
  },
  {
    name: "Petrificus Totalus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/6e/HermionePetrificusTotalus.gif/revision/latest/scale-to-width-down/350?cb=20190402133139"
  },
  {
    name: "Piertotum Locomotor",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/5b/Tumblr_ltfomiNjNT1qa9jn1o2_250.gif/revision/latest/scale-to-width-down/350?cb=20160822060753"
  },
  {
    name: "Point Me",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/a8/FourPointSpell.jpg/revision/latest?cb=20110526171152"
  },
  {
    name: "Portus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/b/b3/The_Goblet_of_Fire_Triwizard_cup_Portkey.jpg/revision/latest?cb=20090216183748"
  },
  {
    name: "Priori Incantatem",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/67/Priori_Incantatem_Pottermore.png/revision/latest/scale-to-width-down/350?cb=20161206050104"
  },
  {
    name: "Prior Incantato",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/6/67/Priori_Incantatem_Pottermore.png/revision/latest/scale-to-width-down/350?cb=20161206050104"
  },
  {
    name: "Protego",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/78/DH2_Kingsley_Shacklebolt_Protego.gif/revision/latest/scale-to-width-down/350?cb=20110430124100"
  },
  {
    name: "Protego Totalum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/de/Hermionemafalda.jpg/revision/latest/scale-to-width-down/350?cb=20100723092821"
  },
  {
    name: "Reducio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/1/1f/HM_y2_Reducio.png/revision/latest?cb=20180602085902"
  },
  {
    name: "Reducto",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/4/45/OOTP_DA_Ginny_Reducto.gif/revision/latest/scale-to-width-down/350?cb=20190227211710"
  },
  {
    name: "Relashio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e2/Relashio.gif/revision/latest?cb=20140626191630"
  },
  {
    name: "Reparo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/ad/Tumblr_mzt0t30LMG1qetk8mo3_250.gif/revision/latest?cb=20140306221146"
  },
  {
    name: "Repello Muggletum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/de/Hermionemafalda.jpg/revision/latest/scale-to-width-down/350?cb=20100723092821"
  },
  {
    name: "Repello Inimicum",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/95/DH2_Protego_Maxima%2C_Fianto_Duri%2C_Repello_Inimicum.gif/revision/latest/scale-to-width-down/350?cb=20190227212751"
  },
  {
    name: "Revelio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/8/81/Revelio.gif/revision/latest?cb=20180304003930"
  },
  {
    name: "Rictusempra",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Rictusempra.gif/revision/latest/scale-to-width-down/350?cb=20190402150937"
  },
  {
    name: "Riddikulus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/d7/Snape_boggart.gif/revision/latest?cb=20140416074637"
  },
  {
    name: "Salvio Hexia",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/25/SalvioHexia.gif/revision/latest?cb=20140622032509"
  },
  {
    name: "Scourgify",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/9/94/HM_y4_Scourgify.png/revision/latest?cb=20181008002339"
  },
  {
    name: "Sectumsempra",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/3/3a/Sectumempra_Curse.gif/revision/latest/scale-to-width-down/350?cb=20151211212618"
  },
  {
    name: "Serpensortia",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/d/d1/Serpensortia.gif/revision/latest?cb=20161121222648"
  },
  {
    name: "Silencio",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Silencio.png/revision/latest?cb=20130823032051"
  },
  {
    name: "Slugulus Eructo",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/a4/Slugulus.png/revision/latest/scale-to-width-down/350?cb=20161218225344"
  },
  {
    name: "Sonorus",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/29/Sonorous_GOF_Dumbledore_1.jpg/revision/latest/scale-to-width-down/350?cb=20091024215730"
  },
  {
    name: "Stinging Jinx",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Deathly_Hallows_-_Stinging_Hex.gif/revision/latest?cb=20140811170637"
  },
  {
    name: "Stupefy",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/7/73/DH1_Harry_as_Albert_Runcorn_stunning_Umbridge.gif/revision/latest?cb=20180827041418"
  },
  {
    name: "Switching Spell",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Switching_Spell.JPG/revision/latest?cb=20180802003031"
  },
  {
    name: "Tarantallegra",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e6/Tarantallegra.gif/revision/latest?cb=20110816014208"
  },
  {
    name: "Unbreakable Vow",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/2/2c/Unbreakable_Vow.jpg/revision/latest/scale-to-width-down/350?cb=20090523234232"
  },
  {
    name: "Vulnera Sanentur",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Healing_spell.gif/revision/latest/scale-to-width-down/350?cb=20170731030606"
  },
  {
    name: "Wingardium Leviosa",
    imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/e/eb/Tumblr_m4rfvme2VS1qg1krko3_250.gif/revision/latest?cb=20140313201003"
  }
]

export default spells;