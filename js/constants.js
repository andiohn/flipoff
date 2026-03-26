export const GRID_COLS = 22;
export const GRID_ROWS = 5;

export const SCRAMBLE_DURATION = 800;
export const FLIP_DURATION = 300;
export const STAGGER_DELAY = 25;
export const TOTAL_TRANSITION = 3800;
export const MESSAGE_INTERVAL = 4000;

export const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-!?\'/: ';

export const SCRAMBLE_COLORS = [
  '#00AAFF', '#00FFCC', '#AA00FF',
  '#FF2D00', '#FFCC00', '#FFFFFF'
];

export const ACCENT_COLORS = [
  '#00FF7F', '#FF4D00', '#AA00FF',
  '#00AAFF', '#00FFCC'
];

export const MESSAGES = [
  ['', 'TRUST IN THE', 'LORD WITH ALL', 'YOUR HEART.', '- PROV 3:5'],
  ['', 'HE RESTORES', 'MY SOUL.', '', '- PSALM 23:3'],
  ['THE LORD IS MY', 'SHEPHERD; I', 'HAVE ALL THAT', 'I NEED.', '- PSALM 23:1'],
  ['', 'I CAN DO', 'EVERYTHING', 'THROUGH CHRIST.', '- PHIL 4:13'],
  ['', 'GOD IS LOVE.', '', '', '- 1 JOHN 4:8'],
  ['', 'BE STRONG', 'AND BRAVE.', 'DO NOT FEAR.', '- JOSHUA 1:9'],
  ['YOUR WORD IS', 'A LAMP TO', 'GUIDE MY FEET', 'AND A LIGHT.', '- PSALM 119:105'],
  ['', 'PRAY WITHOUT', 'CEASING.', '', '- 1 THESS 5:17'],
  ['', 'THE LORD IS', 'GOOD, A STRONG', 'REFUGE.', '- NAHUM 1:7'],
  ['', 'KIND WORDS', 'ARE LIKE', 'HONEY.', '- PROV 16:24'],
  ['', 'BE STILL, AND', 'KNOW THAT', 'I AM GOD.', '- PSALM 46:10'],
  ['', 'GOD IS OUR', 'REFUGE AND', 'STRENGTH.', '- PSALM 46:1'],
  ['', 'LOVE YOUR', 'NEIGHBOR AS', 'YOURSELF.', '- MATT 22:39'],
  ['', 'FOR THIS IS', 'HOW GOD LOVED', 'THE WORLD.', '- JOHN 3:16'],
  ['', 'THE JOY OF THE', 'LORD IS YOUR', 'STRENGTH.', '- NEH 8:10'],
  ['', 'PEACE BE', 'WITH YOU.', '', '- JOHN 20:19'],
  ['', 'THE TRUTH', 'WILL SET', 'YOU FREE.', '- JOHN 8:32'],
  ['', 'ALWAYS BE', 'FULL OF JOY', 'IN THE LORD.', '- PHIL 4:4'],
  ['', 'MY HELP COMES', 'FROM THE', 'LORD.', '- PSALM 121:2'],
  ['', 'AS FOR GOD,', 'HIS WAY IS', 'PERFECT.', '- PSALM 18:30'],
  ['', 'DO NOT BE', 'AFRAID, FOR', 'I AM WITH YOU.', '- GEN 26:24'],
  ['', 'A GENTLE', 'ANSWER DEFLECTS', 'ANGER.', '- PROV 15:1'],
  ['', 'HE CARES FOR', 'YOU.', '', '- 1 PETER 5:7'],
  ['', 'THE LORD IS', 'MY LIGHT AND', 'SALVATION.', '- PSALM 27:1'],
  ['HIS MERCIES', 'BEGIN AFRESH', 'EACH MORNING.', '', '- LAM 3:23'],
  ['', 'DO TO OTHERS', 'AS YOU WOULD', 'HAVE THEM DO.', '- LUKE 6:31'],
  ['', 'MAY HIS', 'GRACE BE', 'WITH YOU.', '- COL 4:18'],
  ['', 'WE WALK BY', 'FAITH, NOT', 'BY SIGHT.', '- 2 COR 5:7'],
  ['', 'LOVE NEVER', 'FAILS.', '', '- 1 COR 13:8'],
  ['', 'FOR THE WAGES', 'OF SIN IS', 'DEATH.', '- ROMANS 6:23'],
  ['', 'THY WILL', 'BE DONE.', '', '- MATT 6:10'],
  ['', 'TASTE AND SEE', 'THAT THE', 'LORD IS GOOD.', '- PSALM 34:8'],
  ['', 'COMMIT YOUR', 'ACTIONS TO', 'THE LORD.', '- PROV 16:3'],
  ['', 'HE HAS MADE', 'EVERYTHING', 'BEAUTIFUL.', '- ECCL 3:11'],
  ['', 'THE LORD IS', 'MY ROCK AND', 'MY FORTRESS.', '- PSALM 18:2'],
  ['', 'BELIEVE IN', 'THE LORD', 'JESUS.', '- ACTS 16:31'],
  ['', 'MY GRACE IS', 'ALL YOU', 'NEED.', '- 2 COR 12:9'],
  ['', 'LET ALL YOU DO', 'BE DONE', 'IN LOVE.', '- 1 COR 16:14'],
  ['', 'KEEP ON', 'ASKING AND', 'YOU WILL GET.', '- MATT 7:7'],
  ['', 'YOU ARE THE', 'LIGHT OF THE', 'WORLD.', '- MATT 5:14'],
  ['O LORD, OUR', 'LORD, HOW', 'MAJESTIC IS', 'YOUR NAME.', '- PSALM 8:1'],
  ['', 'NOTHING IS', 'IMPOSSIBLE', 'WITH GOD.', '- LUKE 1:37'],
  ['', 'EVERY GOOD', 'GIFT COMES', 'FROM ABOVE.', '- JAMES 1:17'],
  ['', 'GIVE THANKS', 'TO THE LORD,', 'FOR HE IS GOOD.', '- PSALM 106:1'],
  ['DON’T WORRY', 'ABOUT ANYTHING;', 'PRAY ABOUT', 'EVERYTHING.', '- PHIL 4:6'],
  ['', 'I AM THE WAY,', 'THE TRUTH,', 'AND THE LIFE.', '- JOHN 14:6'],
  ['', 'BUT THE LORD', 'WATCHES OVER', 'THE GODLY.', '- PSALM 1:6'],
  ['', 'YOU ARE MY', 'STRENGTH AND', 'MY SHIELD.', '- PSALM 28:7'],
  ['', 'THE LORD', 'IS MY', 'SHEPHERD.', '- PSALM 23:1'],
  ['', 'FOR GOD IS', 'WITH YOU', 'WHEREVER YOU GO', '- JOSHUA 1:9'],
  ['', 'GOD IS OUR', 'REFUGE AND', 'STRENGTH.', '- PSALM 46:1'],
  ['DON’T BE AFRAID', 'FOR I AM WITH', 'YOU. DO NOT', 'BE DISMAYED.', '- ISAIAH 41:10'],
  ['', 'SEEK THE LORD', 'AND HIS', 'STRENGTH.', '- 1 CHRON 16:11'],
  ['', 'FAITH COMES', 'BY HEARING', 'THE WORD.', '- ROMANS 10:17'],
  ['', 'LET YOUR', 'GOOD DEEDS', 'SHINE OUT.', '- MATT 5:16'],
  ['', 'CLOTHE YOUR-', 'SELVES WITH', 'HUMILITY.', '- 1 PETER 5:5'],
  ['', 'WE WILL SERVE', 'THE LORD.', '', '- JOSHUA 24:15'],
  ['', 'CREATE IN ME', 'A CLEAN HEART,', 'O GOD.', '- PSALM 51:10'],
  ['', 'CHRIST HAS', 'SET US', 'FREE.', '- GAL 5:1'],
  ['', 'THE WORD OF', 'THE LORD', 'LASTS FOREVER.', '- 1 PETER 1:25']
];
