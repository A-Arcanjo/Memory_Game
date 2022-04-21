/*APP[context provider](Parent);


Views
    / /                        |                         \                                                      Components:
                                                                                                                   
                   HOME                        SCORES                       DISCOVER                       INFO(Children)         => 1) Navigation
    |                            |                              |                            | (GrandChildren)    => 2) EasyMode / HardMode[context consumer]
EasyMode / HardMode                   Form                 DinosaursHistory            Rules(How to play the game)(GrandChildren)    => 3) RandomColor[context consumer]
(GrandChildren) => 4) ShuffleCards[context consumer]
(GrandChildren) => 4) Start[context consumer]
(GrandChildren) => 4) SaveScore(Form)[context consumer]
*/