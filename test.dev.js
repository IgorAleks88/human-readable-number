"use strict";

var assert = require('assert');

var toReadable = require('./src');

it('Should return \'zero\' when 0 given', function () {
  var readable = toReadable(0);
  assert.equal(readable, 'zero');
});
it('Should return \'one\' when 1 given', function () {
  var readable = toReadable(1);
  assert.equal(readable, 'one');
});
it('Should return \'two\' when 2 given', function () {
  var readable = toReadable(2);
  assert.equal(readable, 'two');
});
it('Should return \'three\' when 3 given', function () {
  var readable = toReadable(3);
  assert.equal(readable, 'three');
});
it('Should return \'four\' when 4 given', function () {
  var readable = toReadable(4);
  assert.equal(readable, 'four');
});
it('Should return \'five\' when 5 given', function () {
  var readable = toReadable(5);
  assert.equal(readable, 'five');
});
it('Should return \'six\' when 6 given', function () {
  var readable = toReadable(6);
  assert.equal(readable, 'six');
});
it('Should return \'seven\' when 7 given', function () {
  var readable = toReadable(7);
  assert.equal(readable, 'seven');
});
it('Should return \'eight\' when 8 given', function () {
  var readable = toReadable(8);
  assert.equal(readable, 'eight');
});
it('Should return \'nine\' when 9 given', function () {
  var readable = toReadable(9);
  assert.equal(readable, 'nine');
});
it('Should return \'ten\' when 10 given', function () {
  var readable = toReadable(10);
  assert.equal(readable, 'ten');
});
it('Should return \'eleven\' when 11 given', function () {
  var readable = toReadable(11);
  assert.equal(readable, 'eleven');
});
it('Should return \'twelve\' when 12 given', function () {
  var readable = toReadable(12);
  assert.equal(readable, 'twelve');
});
it('Should return \'thirteen\' when 13 given', function () {
  var readable = toReadable(13);
  assert.equal(readable, 'thirteen');
});
it('Should return \'fourteen\' when 14 given', function () {
  var readable = toReadable(14);
  assert.equal(readable, 'fourteen');
});
it('Should return \'fifteen\' when 15 given', function () {
  var readable = toReadable(15);
  assert.equal(readable, 'fifteen');
});
it('Should return \'sixteen\' when 16 given', function () {
  var readable = toReadable(16);
  assert.equal(readable, 'sixteen');
});
it('Should return \'seventeen\' when 17 given', function () {
  var readable = toReadable(17);
  assert.equal(readable, 'seventeen');
});
it('Should return \'eighteen\' when 18 given', function () {
  var readable = toReadable(18);
  assert.equal(readable, 'eighteen');
});
it('Should return \'nineteen\' when 19 given', function () {
  var readable = toReadable(19);
  assert.equal(readable, 'nineteen');
});
it('Should return \'twenty\' when 20 given', function () {
  var readable = toReadable(20);
  assert.equal(readable, 'twenty');
});
it('Should return \'twenty one\' when 21 given', function () {
  var readable = toReadable(21);
  assert.equal(readable, 'twenty one');
});
it('Should return \'twenty two\' when 22 given', function () {
  var readable = toReadable(22);
  assert.equal(readable, 'twenty two');
});
it('Should return \'twenty three\' when 23 given', function () {
  var readable = toReadable(23);
  assert.equal(readable, 'twenty three');
});
it('Should return \'twenty four\' when 24 given', function () {
  var readable = toReadable(24);
  assert.equal(readable, 'twenty four');
});
it('Should return \'twenty five\' when 25 given', function () {
  var readable = toReadable(25);
  assert.equal(readable, 'twenty five');
});
it('Should return \'twenty six\' when 26 given', function () {
  var readable = toReadable(26);
  assert.equal(readable, 'twenty six');
});
it('Should return \'twenty seven\' when 27 given', function () {
  var readable = toReadable(27);
  assert.equal(readable, 'twenty seven');
});
it('Should return \'twenty eight\' when 28 given', function () {
  var readable = toReadable(28);
  assert.equal(readable, 'twenty eight');
});
it('Should return \'twenty nine\' when 29 given', function () {
  var readable = toReadable(29);
  assert.equal(readable, 'twenty nine');
});
it('Should return \'thirty\' when 30 given', function () {
  var readable = toReadable(30);
  assert.equal(readable, 'thirty');
});
it('Should return \'thirty one\' when 31 given', function () {
  var readable = toReadable(31);
  assert.equal(readable, 'thirty one');
});
it('Should return \'thirty two\' when 32 given', function () {
  var readable = toReadable(32);
  assert.equal(readable, 'thirty two');
});
it('Should return \'thirty three\' when 33 given', function () {
  var readable = toReadable(33);
  assert.equal(readable, 'thirty three');
});
it('Should return \'thirty four\' when 34 given', function () {
  var readable = toReadable(34);
  assert.equal(readable, 'thirty four');
});
it('Should return \'thirty five\' when 35 given', function () {
  var readable = toReadable(35);
  assert.equal(readable, 'thirty five');
});
it('Should return \'thirty six\' when 36 given', function () {
  var readable = toReadable(36);
  assert.equal(readable, 'thirty six');
});
it('Should return \'thirty seven\' when 37 given', function () {
  var readable = toReadable(37);
  assert.equal(readable, 'thirty seven');
});
it('Should return \'thirty eight\' when 38 given', function () {
  var readable = toReadable(38);
  assert.equal(readable, 'thirty eight');
});
it('Should return \'thirty nine\' when 39 given', function () {
  var readable = toReadable(39);
  assert.equal(readable, 'thirty nine');
});
it('Should return \'forty\' when 40 given', function () {
  var readable = toReadable(40);
  assert.equal(readable, 'forty');
});
it('Should return \'forty one\' when 41 given', function () {
  var readable = toReadable(41);
  assert.equal(readable, 'forty one');
});
it('Should return \'forty two\' when 42 given', function () {
  var readable = toReadable(42);
  assert.equal(readable, 'forty two');
});
it('Should return \'forty three\' when 43 given', function () {
  var readable = toReadable(43);
  assert.equal(readable, 'forty three');
});
it('Should return \'forty four\' when 44 given', function () {
  var readable = toReadable(44);
  assert.equal(readable, 'forty four');
});
it('Should return \'forty five\' when 45 given', function () {
  var readable = toReadable(45);
  assert.equal(readable, 'forty five');
});
it('Should return \'forty six\' when 46 given', function () {
  var readable = toReadable(46);
  assert.equal(readable, 'forty six');
});
it('Should return \'forty seven\' when 47 given', function () {
  var readable = toReadable(47);
  assert.equal(readable, 'forty seven');
});
it('Should return \'forty eight\' when 48 given', function () {
  var readable = toReadable(48);
  assert.equal(readable, 'forty eight');
});
it('Should return \'forty nine\' when 49 given', function () {
  var readable = toReadable(49);
  assert.equal(readable, 'forty nine');
});
it('Should return \'fifty\' when 50 given', function () {
  var readable = toReadable(50);
  assert.equal(readable, 'fifty');
});
it('Should return \'fifty one\' when 51 given', function () {
  var readable = toReadable(51);
  assert.equal(readable, 'fifty one');
});
it('Should return \'fifty two\' when 52 given', function () {
  var readable = toReadable(52);
  assert.equal(readable, 'fifty two');
});
it('Should return \'fifty three\' when 53 given', function () {
  var readable = toReadable(53);
  assert.equal(readable, 'fifty three');
});
it('Should return \'fifty four\' when 54 given', function () {
  var readable = toReadable(54);
  assert.equal(readable, 'fifty four');
});
it('Should return \'fifty five\' when 55 given', function () {
  var readable = toReadable(55);
  assert.equal(readable, 'fifty five');
});
it('Should return \'fifty six\' when 56 given', function () {
  var readable = toReadable(56);
  assert.equal(readable, 'fifty six');
});
it('Should return \'fifty seven\' when 57 given', function () {
  var readable = toReadable(57);
  assert.equal(readable, 'fifty seven');
});
it('Should return \'fifty eight\' when 58 given', function () {
  var readable = toReadable(58);
  assert.equal(readable, 'fifty eight');
});
it('Should return \'fifty nine\' when 59 given', function () {
  var readable = toReadable(59);
  assert.equal(readable, 'fifty nine');
});
it('Should return \'sixty\' when 60 given', function () {
  var readable = toReadable(60);
  assert.equal(readable, 'sixty');
});
it('Should return \'sixty one\' when 61 given', function () {
  var readable = toReadable(61);
  assert.equal(readable, 'sixty one');
});
it('Should return \'sixty two\' when 62 given', function () {
  var readable = toReadable(62);
  assert.equal(readable, 'sixty two');
});
it('Should return \'sixty three\' when 63 given', function () {
  var readable = toReadable(63);
  assert.equal(readable, 'sixty three');
});
it('Should return \'sixty four\' when 64 given', function () {
  var readable = toReadable(64);
  assert.equal(readable, 'sixty four');
});
it('Should return \'sixty five\' when 65 given', function () {
  var readable = toReadable(65);
  assert.equal(readable, 'sixty five');
});
it('Should return \'sixty six\' when 66 given', function () {
  var readable = toReadable(66);
  assert.equal(readable, 'sixty six');
});
it('Should return \'sixty seven\' when 67 given', function () {
  var readable = toReadable(67);
  assert.equal(readable, 'sixty seven');
});
it('Should return \'sixty eight\' when 68 given', function () {
  var readable = toReadable(68);
  assert.equal(readable, 'sixty eight');
});
it('Should return \'sixty nine\' when 69 given', function () {
  var readable = toReadable(69);
  assert.equal(readable, 'sixty nine');
});
it('Should return \'seventy\' when 70 given', function () {
  var readable = toReadable(70);
  assert.equal(readable, 'seventy');
});
it('Should return \'seventy one\' when 71 given', function () {
  var readable = toReadable(71);
  assert.equal(readable, 'seventy one');
});
it('Should return \'seventy two\' when 72 given', function () {
  var readable = toReadable(72);
  assert.equal(readable, 'seventy two');
});
it('Should return \'seventy three\' when 73 given', function () {
  var readable = toReadable(73);
  assert.equal(readable, 'seventy three');
});
it('Should return \'seventy four\' when 74 given', function () {
  var readable = toReadable(74);
  assert.equal(readable, 'seventy four');
});
it('Should return \'seventy five\' when 75 given', function () {
  var readable = toReadable(75);
  assert.equal(readable, 'seventy five');
});
it('Should return \'seventy six\' when 76 given', function () {
  var readable = toReadable(76);
  assert.equal(readable, 'seventy six');
});
it('Should return \'seventy seven\' when 77 given', function () {
  var readable = toReadable(77);
  assert.equal(readable, 'seventy seven');
});
it('Should return \'seventy eight\' when 78 given', function () {
  var readable = toReadable(78);
  assert.equal(readable, 'seventy eight');
});
it('Should return \'seventy nine\' when 79 given', function () {
  var readable = toReadable(79);
  assert.equal(readable, 'seventy nine');
});
it('Should return \'eighty\' when 80 given', function () {
  var readable = toReadable(80);
  assert.equal(readable, 'eighty');
});
it('Should return \'eighty one\' when 81 given', function () {
  var readable = toReadable(81);
  assert.equal(readable, 'eighty one');
});
it('Should return \'eighty two\' when 82 given', function () {
  var readable = toReadable(82);
  assert.equal(readable, 'eighty two');
});
it('Should return \'eighty three\' when 83 given', function () {
  var readable = toReadable(83);
  assert.equal(readable, 'eighty three');
});
it('Should return \'eighty four\' when 84 given', function () {
  var readable = toReadable(84);
  assert.equal(readable, 'eighty four');
});
it('Should return \'eighty five\' when 85 given', function () {
  var readable = toReadable(85);
  assert.equal(readable, 'eighty five');
});
it('Should return \'eighty six\' when 86 given', function () {
  var readable = toReadable(86);
  assert.equal(readable, 'eighty six');
});
it('Should return \'eighty seven\' when 87 given', function () {
  var readable = toReadable(87);
  assert.equal(readable, 'eighty seven');
});
it('Should return \'eighty eight\' when 88 given', function () {
  var readable = toReadable(88);
  assert.equal(readable, 'eighty eight');
});
it('Should return \'eighty nine\' when 89 given', function () {
  var readable = toReadable(89);
  assert.equal(readable, 'eighty nine');
});
it('Should return \'ninety\' when 90 given', function () {
  var readable = toReadable(90);
  assert.equal(readable, 'ninety');
});
it('Should return \'ninety one\' when 91 given', function () {
  var readable = toReadable(91);
  assert.equal(readable, 'ninety one');
});
it('Should return \'ninety two\' when 92 given', function () {
  var readable = toReadable(92);
  assert.equal(readable, 'ninety two');
});
it('Should return \'ninety three\' when 93 given', function () {
  var readable = toReadable(93);
  assert.equal(readable, 'ninety three');
});
it('Should return \'ninety four\' when 94 given', function () {
  var readable = toReadable(94);
  assert.equal(readable, 'ninety four');
});
it('Should return \'ninety five\' when 95 given', function () {
  var readable = toReadable(95);
  assert.equal(readable, 'ninety five');
});
it('Should return \'ninety six\' when 96 given', function () {
  var readable = toReadable(96);
  assert.equal(readable, 'ninety six');
});
it('Should return \'ninety seven\' when 97 given', function () {
  var readable = toReadable(97);
  assert.equal(readable, 'ninety seven');
});
it('Should return \'ninety eight\' when 98 given', function () {
  var readable = toReadable(98);
  assert.equal(readable, 'ninety eight');
});
it('Should return \'ninety nine\' when 99 given', function () {
  var readable = toReadable(99);
  assert.equal(readable, 'ninety nine');
});
it('Should return \'one hundred\' when 100 given', function () {
  var readable = toReadable(100);
  assert.equal(readable, 'one hundred');
});
it('Should return \'one hundred one\' when 101 given', function () {
  var readable = toReadable(101);
  assert.equal(readable, 'one hundred one');
});
it('Should return \'one hundred two\' when 102 given', function () {
  var readable = toReadable(102);
  assert.equal(readable, 'one hundred two');
});
it('Should return \'one hundred three\' when 103 given', function () {
  var readable = toReadable(103);
  assert.equal(readable, 'one hundred three');
});
it('Should return \'one hundred four\' when 104 given', function () {
  var readable = toReadable(104);
  assert.equal(readable, 'one hundred four');
});
it('Should return \'one hundred five\' when 105 given', function () {
  var readable = toReadable(105);
  assert.equal(readable, 'one hundred five');
});
it('Should return \'one hundred six\' when 106 given', function () {
  var readable = toReadable(106);
  assert.equal(readable, 'one hundred six');
});
it('Should return \'one hundred seven\' when 107 given', function () {
  var readable = toReadable(107);
  assert.equal(readable, 'one hundred seven');
});
it('Should return \'one hundred eight\' when 108 given', function () {
  var readable = toReadable(108);
  assert.equal(readable, 'one hundred eight');
});
it('Should return \'one hundred nine\' when 109 given', function () {
  var readable = toReadable(109);
  assert.equal(readable, 'one hundred nine');
});
it('Should return \'one hundred ten\' when 110 given', function () {
  var readable = toReadable(110);
  assert.equal(readable, 'one hundred ten');
});
it('Should return \'one hundred eleven\' when 111 given', function () {
  var readable = toReadable(111);
  assert.equal(readable, 'one hundred eleven');
});
it('Should return \'one hundred twelve\' when 112 given', function () {
  var readable = toReadable(112);
  assert.equal(readable, 'one hundred twelve');
});
it('Should return \'one hundred thirteen\' when 113 given', function () {
  var readable = toReadable(113);
  assert.equal(readable, 'one hundred thirteen');
});
it('Should return \'one hundred fourteen\' when 114 given', function () {
  var readable = toReadable(114);
  assert.equal(readable, 'one hundred fourteen');
});
it('Should return \'one hundred fifteen\' when 115 given', function () {
  var readable = toReadable(115);
  assert.equal(readable, 'one hundred fifteen');
});
it('Should return \'one hundred sixteen\' when 116 given', function () {
  var readable = toReadable(116);
  assert.equal(readable, 'one hundred sixteen');
});
it('Should return \'one hundred seventeen\' when 117 given', function () {
  var readable = toReadable(117);
  assert.equal(readable, 'one hundred seventeen');
});
it('Should return \'one hundred eighteen\' when 118 given', function () {
  var readable = toReadable(118);
  assert.equal(readable, 'one hundred eighteen');
});
it('Should return \'one hundred nineteen\' when 119 given', function () {
  var readable = toReadable(119);
  assert.equal(readable, 'one hundred nineteen');
});
it('Should return \'one hundred twenty\' when 120 given', function () {
  var readable = toReadable(120);
  assert.equal(readable, 'one hundred twenty');
});
it('Should return \'one hundred twenty one\' when 121 given', function () {
  var readable = toReadable(121);
  assert.equal(readable, 'one hundred twenty one');
});
it('Should return \'one hundred twenty two\' when 122 given', function () {
  var readable = toReadable(122);
  assert.equal(readable, 'one hundred twenty two');
});
it('Should return \'one hundred twenty three\' when 123 given', function () {
  var readable = toReadable(123);
  assert.equal(readable, 'one hundred twenty three');
});
it('Should return \'one hundred twenty four\' when 124 given', function () {
  var readable = toReadable(124);
  assert.equal(readable, 'one hundred twenty four');
});
it('Should return \'one hundred twenty five\' when 125 given', function () {
  var readable = toReadable(125);
  assert.equal(readable, 'one hundred twenty five');
});
it('Should return \'one hundred twenty six\' when 126 given', function () {
  var readable = toReadable(126);
  assert.equal(readable, 'one hundred twenty six');
});
it('Should return \'one hundred twenty seven\' when 127 given', function () {
  var readable = toReadable(127);
  assert.equal(readable, 'one hundred twenty seven');
});
it('Should return \'one hundred twenty eight\' when 128 given', function () {
  var readable = toReadable(128);
  assert.equal(readable, 'one hundred twenty eight');
});
it('Should return \'one hundred twenty nine\' when 129 given', function () {
  var readable = toReadable(129);
  assert.equal(readable, 'one hundred twenty nine');
});
it('Should return \'one hundred thirty\' when 130 given', function () {
  var readable = toReadable(130);
  assert.equal(readable, 'one hundred thirty');
});
it('Should return \'one hundred thirty one\' when 131 given', function () {
  var readable = toReadable(131);
  assert.equal(readable, 'one hundred thirty one');
});
it('Should return \'one hundred thirty two\' when 132 given', function () {
  var readable = toReadable(132);
  assert.equal(readable, 'one hundred thirty two');
});
it('Should return \'one hundred thirty three\' when 133 given', function () {
  var readable = toReadable(133);
  assert.equal(readable, 'one hundred thirty three');
});
it('Should return \'one hundred thirty four\' when 134 given', function () {
  var readable = toReadable(134);
  assert.equal(readable, 'one hundred thirty four');
});
it('Should return \'one hundred thirty five\' when 135 given', function () {
  var readable = toReadable(135);
  assert.equal(readable, 'one hundred thirty five');
});
it('Should return \'one hundred thirty six\' when 136 given', function () {
  var readable = toReadable(136);
  assert.equal(readable, 'one hundred thirty six');
});
it('Should return \'one hundred thirty seven\' when 137 given', function () {
  var readable = toReadable(137);
  assert.equal(readable, 'one hundred thirty seven');
});
it('Should return \'one hundred thirty eight\' when 138 given', function () {
  var readable = toReadable(138);
  assert.equal(readable, 'one hundred thirty eight');
});
it('Should return \'one hundred thirty nine\' when 139 given', function () {
  var readable = toReadable(139);
  assert.equal(readable, 'one hundred thirty nine');
});
it('Should return \'one hundred forty\' when 140 given', function () {
  var readable = toReadable(140);
  assert.equal(readable, 'one hundred forty');
});
it('Should return \'one hundred forty one\' when 141 given', function () {
  var readable = toReadable(141);
  assert.equal(readable, 'one hundred forty one');
});
it('Should return \'one hundred forty two\' when 142 given', function () {
  var readable = toReadable(142);
  assert.equal(readable, 'one hundred forty two');
});
it('Should return \'one hundred forty three\' when 143 given', function () {
  var readable = toReadable(143);
  assert.equal(readable, 'one hundred forty three');
});
it('Should return \'one hundred forty four\' when 144 given', function () {
  var readable = toReadable(144);
  assert.equal(readable, 'one hundred forty four');
});
it('Should return \'one hundred forty five\' when 145 given', function () {
  var readable = toReadable(145);
  assert.equal(readable, 'one hundred forty five');
});
it('Should return \'one hundred forty six\' when 146 given', function () {
  var readable = toReadable(146);
  assert.equal(readable, 'one hundred forty six');
});
it('Should return \'one hundred forty seven\' when 147 given', function () {
  var readable = toReadable(147);
  assert.equal(readable, 'one hundred forty seven');
});
it('Should return \'one hundred forty eight\' when 148 given', function () {
  var readable = toReadable(148);
  assert.equal(readable, 'one hundred forty eight');
});
it('Should return \'one hundred forty nine\' when 149 given', function () {
  var readable = toReadable(149);
  assert.equal(readable, 'one hundred forty nine');
});
it('Should return \'one hundred fifty\' when 150 given', function () {
  var readable = toReadable(150);
  assert.equal(readable, 'one hundred fifty');
});
it('Should return \'one hundred fifty one\' when 151 given', function () {
  var readable = toReadable(151);
  assert.equal(readable, 'one hundred fifty one');
});
it('Should return \'one hundred fifty two\' when 152 given', function () {
  var readable = toReadable(152);
  assert.equal(readable, 'one hundred fifty two');
});
it('Should return \'one hundred fifty three\' when 153 given', function () {
  var readable = toReadable(153);
  assert.equal(readable, 'one hundred fifty three');
});
it('Should return \'one hundred fifty four\' when 154 given', function () {
  var readable = toReadable(154);
  assert.equal(readable, 'one hundred fifty four');
});
it('Should return \'one hundred fifty five\' when 155 given', function () {
  var readable = toReadable(155);
  assert.equal(readable, 'one hundred fifty five');
});
it('Should return \'one hundred fifty six\' when 156 given', function () {
  var readable = toReadable(156);
  assert.equal(readable, 'one hundred fifty six');
});
it('Should return \'one hundred fifty seven\' when 157 given', function () {
  var readable = toReadable(157);
  assert.equal(readable, 'one hundred fifty seven');
});
it('Should return \'one hundred fifty eight\' when 158 given', function () {
  var readable = toReadable(158);
  assert.equal(readable, 'one hundred fifty eight');
});
it('Should return \'one hundred fifty nine\' when 159 given', function () {
  var readable = toReadable(159);
  assert.equal(readable, 'one hundred fifty nine');
});
it('Should return \'one hundred sixty\' when 160 given', function () {
  var readable = toReadable(160);
  assert.equal(readable, 'one hundred sixty');
});
it('Should return \'one hundred sixty one\' when 161 given', function () {
  var readable = toReadable(161);
  assert.equal(readable, 'one hundred sixty one');
});
it('Should return \'one hundred sixty two\' when 162 given', function () {
  var readable = toReadable(162);
  assert.equal(readable, 'one hundred sixty two');
});
it('Should return \'one hundred sixty three\' when 163 given', function () {
  var readable = toReadable(163);
  assert.equal(readable, 'one hundred sixty three');
});
it('Should return \'one hundred sixty four\' when 164 given', function () {
  var readable = toReadable(164);
  assert.equal(readable, 'one hundred sixty four');
});
it('Should return \'one hundred sixty five\' when 165 given', function () {
  var readable = toReadable(165);
  assert.equal(readable, 'one hundred sixty five');
});
it('Should return \'one hundred sixty six\' when 166 given', function () {
  var readable = toReadable(166);
  assert.equal(readable, 'one hundred sixty six');
});
it('Should return \'one hundred sixty seven\' when 167 given', function () {
  var readable = toReadable(167);
  assert.equal(readable, 'one hundred sixty seven');
});
it('Should return \'one hundred sixty eight\' when 168 given', function () {
  var readable = toReadable(168);
  assert.equal(readable, 'one hundred sixty eight');
});
it('Should return \'one hundred sixty nine\' when 169 given', function () {
  var readable = toReadable(169);
  assert.equal(readable, 'one hundred sixty nine');
});
it('Should return \'one hundred seventy\' when 170 given', function () {
  var readable = toReadable(170);
  assert.equal(readable, 'one hundred seventy');
});
it('Should return \'one hundred seventy one\' when 171 given', function () {
  var readable = toReadable(171);
  assert.equal(readable, 'one hundred seventy one');
});
it('Should return \'one hundred seventy two\' when 172 given', function () {
  var readable = toReadable(172);
  assert.equal(readable, 'one hundred seventy two');
});
it('Should return \'one hundred seventy three\' when 173 given', function () {
  var readable = toReadable(173);
  assert.equal(readable, 'one hundred seventy three');
});
it('Should return \'one hundred seventy four\' when 174 given', function () {
  var readable = toReadable(174);
  assert.equal(readable, 'one hundred seventy four');
});
it('Should return \'one hundred seventy five\' when 175 given', function () {
  var readable = toReadable(175);
  assert.equal(readable, 'one hundred seventy five');
});
it('Should return \'one hundred seventy six\' when 176 given', function () {
  var readable = toReadable(176);
  assert.equal(readable, 'one hundred seventy six');
});
it('Should return \'one hundred seventy seven\' when 177 given', function () {
  var readable = toReadable(177);
  assert.equal(readable, 'one hundred seventy seven');
});
it('Should return \'one hundred seventy eight\' when 178 given', function () {
  var readable = toReadable(178);
  assert.equal(readable, 'one hundred seventy eight');
});
it('Should return \'one hundred seventy nine\' when 179 given', function () {
  var readable = toReadable(179);
  assert.equal(readable, 'one hundred seventy nine');
});
it('Should return \'one hundred eighty\' when 180 given', function () {
  var readable = toReadable(180);
  assert.equal(readable, 'one hundred eighty');
});
it('Should return \'one hundred eighty one\' when 181 given', function () {
  var readable = toReadable(181);
  assert.equal(readable, 'one hundred eighty one');
});
it('Should return \'one hundred eighty two\' when 182 given', function () {
  var readable = toReadable(182);
  assert.equal(readable, 'one hundred eighty two');
});
it('Should return \'one hundred eighty three\' when 183 given', function () {
  var readable = toReadable(183);
  assert.equal(readable, 'one hundred eighty three');
});
it('Should return \'one hundred eighty four\' when 184 given', function () {
  var readable = toReadable(184);
  assert.equal(readable, 'one hundred eighty four');
});
it('Should return \'one hundred eighty five\' when 185 given', function () {
  var readable = toReadable(185);
  assert.equal(readable, 'one hundred eighty five');
});
it('Should return \'one hundred eighty six\' when 186 given', function () {
  var readable = toReadable(186);
  assert.equal(readable, 'one hundred eighty six');
});
it('Should return \'one hundred eighty seven\' when 187 given', function () {
  var readable = toReadable(187);
  assert.equal(readable, 'one hundred eighty seven');
});
it('Should return \'one hundred eighty eight\' when 188 given', function () {
  var readable = toReadable(188);
  assert.equal(readable, 'one hundred eighty eight');
});
it('Should return \'one hundred eighty nine\' when 189 given', function () {
  var readable = toReadable(189);
  assert.equal(readable, 'one hundred eighty nine');
});
it('Should return \'one hundred ninety\' when 190 given', function () {
  var readable = toReadable(190);
  assert.equal(readable, 'one hundred ninety');
});
it('Should return \'one hundred ninety one\' when 191 given', function () {
  var readable = toReadable(191);
  assert.equal(readable, 'one hundred ninety one');
});
it('Should return \'one hundred ninety two\' when 192 given', function () {
  var readable = toReadable(192);
  assert.equal(readable, 'one hundred ninety two');
});
it('Should return \'one hundred ninety three\' when 193 given', function () {
  var readable = toReadable(193);
  assert.equal(readable, 'one hundred ninety three');
});
it('Should return \'one hundred ninety four\' when 194 given', function () {
  var readable = toReadable(194);
  assert.equal(readable, 'one hundred ninety four');
});
it('Should return \'one hundred ninety five\' when 195 given', function () {
  var readable = toReadable(195);
  assert.equal(readable, 'one hundred ninety five');
});
it('Should return \'one hundred ninety six\' when 196 given', function () {
  var readable = toReadable(196);
  assert.equal(readable, 'one hundred ninety six');
});
it('Should return \'one hundred ninety seven\' when 197 given', function () {
  var readable = toReadable(197);
  assert.equal(readable, 'one hundred ninety seven');
});
it('Should return \'one hundred ninety eight\' when 198 given', function () {
  var readable = toReadable(198);
  assert.equal(readable, 'one hundred ninety eight');
});
it('Should return \'one hundred ninety nine\' when 199 given', function () {
  var readable = toReadable(199);
  assert.equal(readable, 'one hundred ninety nine');
});
it('Should return \'two hundred\' when 200 given', function () {
  var readable = toReadable(200);
  assert.equal(readable, 'two hundred');
});
it('Should return \'two hundred one\' when 201 given', function () {
  var readable = toReadable(201);
  assert.equal(readable, 'two hundred one');
});
it('Should return \'two hundred two\' when 202 given', function () {
  var readable = toReadable(202);
  assert.equal(readable, 'two hundred two');
});
it('Should return \'two hundred three\' when 203 given', function () {
  var readable = toReadable(203);
  assert.equal(readable, 'two hundred three');
});
it('Should return \'two hundred four\' when 204 given', function () {
  var readable = toReadable(204);
  assert.equal(readable, 'two hundred four');
});
it('Should return \'two hundred five\' when 205 given', function () {
  var readable = toReadable(205);
  assert.equal(readable, 'two hundred five');
});
it('Should return \'two hundred six\' when 206 given', function () {
  var readable = toReadable(206);
  assert.equal(readable, 'two hundred six');
});
it('Should return \'two hundred seven\' when 207 given', function () {
  var readable = toReadable(207);
  assert.equal(readable, 'two hundred seven');
});
it('Should return \'two hundred eight\' when 208 given', function () {
  var readable = toReadable(208);
  assert.equal(readable, 'two hundred eight');
});
it('Should return \'two hundred nine\' when 209 given', function () {
  var readable = toReadable(209);
  assert.equal(readable, 'two hundred nine');
});
it('Should return \'two hundred ten\' when 210 given', function () {
  var readable = toReadable(210);
  assert.equal(readable, 'two hundred ten');
});
it('Should return \'two hundred eleven\' when 211 given', function () {
  var readable = toReadable(211);
  assert.equal(readable, 'two hundred eleven');
});
it('Should return \'two hundred twelve\' when 212 given', function () {
  var readable = toReadable(212);
  assert.equal(readable, 'two hundred twelve');
});
it('Should return \'two hundred thirteen\' when 213 given', function () {
  var readable = toReadable(213);
  assert.equal(readable, 'two hundred thirteen');
});
it('Should return \'two hundred fourteen\' when 214 given', function () {
  var readable = toReadable(214);
  assert.equal(readable, 'two hundred fourteen');
});
it('Should return \'two hundred fifteen\' when 215 given', function () {
  var readable = toReadable(215);
  assert.equal(readable, 'two hundred fifteen');
});
it('Should return \'two hundred sixteen\' when 216 given', function () {
  var readable = toReadable(216);
  assert.equal(readable, 'two hundred sixteen');
});
it('Should return \'two hundred seventeen\' when 217 given', function () {
  var readable = toReadable(217);
  assert.equal(readable, 'two hundred seventeen');
});
it('Should return \'two hundred eighteen\' when 218 given', function () {
  var readable = toReadable(218);
  assert.equal(readable, 'two hundred eighteen');
});
it('Should return \'two hundred nineteen\' when 219 given', function () {
  var readable = toReadable(219);
  assert.equal(readable, 'two hundred nineteen');
});
it('Should return \'two hundred twenty\' when 220 given', function () {
  var readable = toReadable(220);
  assert.equal(readable, 'two hundred twenty');
});
it('Should return \'two hundred twenty one\' when 221 given', function () {
  var readable = toReadable(221);
  assert.equal(readable, 'two hundred twenty one');
});
it('Should return \'two hundred twenty two\' when 222 given', function () {
  var readable = toReadable(222);
  assert.equal(readable, 'two hundred twenty two');
});
it('Should return \'two hundred twenty three\' when 223 given', function () {
  var readable = toReadable(223);
  assert.equal(readable, 'two hundred twenty three');
});
it('Should return \'two hundred twenty four\' when 224 given', function () {
  var readable = toReadable(224);
  assert.equal(readable, 'two hundred twenty four');
});
it('Should return \'two hundred twenty five\' when 225 given', function () {
  var readable = toReadable(225);
  assert.equal(readable, 'two hundred twenty five');
});
it('Should return \'two hundred twenty six\' when 226 given', function () {
  var readable = toReadable(226);
  assert.equal(readable, 'two hundred twenty six');
});
it('Should return \'two hundred twenty seven\' when 227 given', function () {
  var readable = toReadable(227);
  assert.equal(readable, 'two hundred twenty seven');
});
it('Should return \'two hundred twenty eight\' when 228 given', function () {
  var readable = toReadable(228);
  assert.equal(readable, 'two hundred twenty eight');
});
it('Should return \'two hundred twenty nine\' when 229 given', function () {
  var readable = toReadable(229);
  assert.equal(readable, 'two hundred twenty nine');
});
it('Should return \'two hundred thirty\' when 230 given', function () {
  var readable = toReadable(230);
  assert.equal(readable, 'two hundred thirty');
});
it('Should return \'two hundred thirty one\' when 231 given', function () {
  var readable = toReadable(231);
  assert.equal(readable, 'two hundred thirty one');
});
it('Should return \'two hundred thirty two\' when 232 given', function () {
  var readable = toReadable(232);
  assert.equal(readable, 'two hundred thirty two');
});
it('Should return \'two hundred thirty three\' when 233 given', function () {
  var readable = toReadable(233);
  assert.equal(readable, 'two hundred thirty three');
});
it('Should return \'two hundred thirty four\' when 234 given', function () {
  var readable = toReadable(234);
  assert.equal(readable, 'two hundred thirty four');
});
it('Should return \'two hundred thirty five\' when 235 given', function () {
  var readable = toReadable(235);
  assert.equal(readable, 'two hundred thirty five');
});
it('Should return \'two hundred thirty six\' when 236 given', function () {
  var readable = toReadable(236);
  assert.equal(readable, 'two hundred thirty six');
});
it('Should return \'two hundred thirty seven\' when 237 given', function () {
  var readable = toReadable(237);
  assert.equal(readable, 'two hundred thirty seven');
});
it('Should return \'two hundred thirty eight\' when 238 given', function () {
  var readable = toReadable(238);
  assert.equal(readable, 'two hundred thirty eight');
});
it('Should return \'two hundred thirty nine\' when 239 given', function () {
  var readable = toReadable(239);
  assert.equal(readable, 'two hundred thirty nine');
});
it('Should return \'two hundred forty\' when 240 given', function () {
  var readable = toReadable(240);
  assert.equal(readable, 'two hundred forty');
});
it('Should return \'two hundred forty one\' when 241 given', function () {
  var readable = toReadable(241);
  assert.equal(readable, 'two hundred forty one');
});
it('Should return \'two hundred forty two\' when 242 given', function () {
  var readable = toReadable(242);
  assert.equal(readable, 'two hundred forty two');
});
it('Should return \'two hundred forty three\' when 243 given', function () {
  var readable = toReadable(243);
  assert.equal(readable, 'two hundred forty three');
});
it('Should return \'two hundred forty four\' when 244 given', function () {
  var readable = toReadable(244);
  assert.equal(readable, 'two hundred forty four');
});
it('Should return \'two hundred forty five\' when 245 given', function () {
  var readable = toReadable(245);
  assert.equal(readable, 'two hundred forty five');
});
it('Should return \'two hundred forty six\' when 246 given', function () {
  var readable = toReadable(246);
  assert.equal(readable, 'two hundred forty six');
});
it('Should return \'two hundred forty seven\' when 247 given', function () {
  var readable = toReadable(247);
  assert.equal(readable, 'two hundred forty seven');
});
it('Should return \'two hundred forty eight\' when 248 given', function () {
  var readable = toReadable(248);
  assert.equal(readable, 'two hundred forty eight');
});
it('Should return \'two hundred forty nine\' when 249 given', function () {
  var readable = toReadable(249);
  assert.equal(readable, 'two hundred forty nine');
});
it('Should return \'two hundred fifty\' when 250 given', function () {
  var readable = toReadable(250);
  assert.equal(readable, 'two hundred fifty');
});
it('Should return \'two hundred fifty one\' when 251 given', function () {
  var readable = toReadable(251);
  assert.equal(readable, 'two hundred fifty one');
});
it('Should return \'two hundred fifty two\' when 252 given', function () {
  var readable = toReadable(252);
  assert.equal(readable, 'two hundred fifty two');
});
it('Should return \'two hundred fifty three\' when 253 given', function () {
  var readable = toReadable(253);
  assert.equal(readable, 'two hundred fifty three');
});
it('Should return \'two hundred fifty four\' when 254 given', function () {
  var readable = toReadable(254);
  assert.equal(readable, 'two hundred fifty four');
});
it('Should return \'two hundred fifty five\' when 255 given', function () {
  var readable = toReadable(255);
  assert.equal(readable, 'two hundred fifty five');
});
it('Should return \'two hundred fifty six\' when 256 given', function () {
  var readable = toReadable(256);
  assert.equal(readable, 'two hundred fifty six');
});
it('Should return \'two hundred fifty seven\' when 257 given', function () {
  var readable = toReadable(257);
  assert.equal(readable, 'two hundred fifty seven');
});
it('Should return \'two hundred fifty eight\' when 258 given', function () {
  var readable = toReadable(258);
  assert.equal(readable, 'two hundred fifty eight');
});
it('Should return \'two hundred fifty nine\' when 259 given', function () {
  var readable = toReadable(259);
  assert.equal(readable, 'two hundred fifty nine');
});
it('Should return \'two hundred sixty\' when 260 given', function () {
  var readable = toReadable(260);
  assert.equal(readable, 'two hundred sixty');
});
it('Should return \'two hundred sixty one\' when 261 given', function () {
  var readable = toReadable(261);
  assert.equal(readable, 'two hundred sixty one');
});
it('Should return \'two hundred sixty two\' when 262 given', function () {
  var readable = toReadable(262);
  assert.equal(readable, 'two hundred sixty two');
});
it('Should return \'two hundred sixty three\' when 263 given', function () {
  var readable = toReadable(263);
  assert.equal(readable, 'two hundred sixty three');
});
it('Should return \'two hundred sixty four\' when 264 given', function () {
  var readable = toReadable(264);
  assert.equal(readable, 'two hundred sixty four');
});
it('Should return \'two hundred sixty five\' when 265 given', function () {
  var readable = toReadable(265);
  assert.equal(readable, 'two hundred sixty five');
});
it('Should return \'two hundred sixty six\' when 266 given', function () {
  var readable = toReadable(266);
  assert.equal(readable, 'two hundred sixty six');
});
it('Should return \'two hundred sixty seven\' when 267 given', function () {
  var readable = toReadable(267);
  assert.equal(readable, 'two hundred sixty seven');
});
it('Should return \'two hundred sixty eight\' when 268 given', function () {
  var readable = toReadable(268);
  assert.equal(readable, 'two hundred sixty eight');
});
it('Should return \'two hundred sixty nine\' when 269 given', function () {
  var readable = toReadable(269);
  assert.equal(readable, 'two hundred sixty nine');
});
it('Should return \'two hundred seventy\' when 270 given', function () {
  var readable = toReadable(270);
  assert.equal(readable, 'two hundred seventy');
});
it('Should return \'two hundred seventy one\' when 271 given', function () {
  var readable = toReadable(271);
  assert.equal(readable, 'two hundred seventy one');
});
it('Should return \'two hundred seventy two\' when 272 given', function () {
  var readable = toReadable(272);
  assert.equal(readable, 'two hundred seventy two');
});
it('Should return \'two hundred seventy three\' when 273 given', function () {
  var readable = toReadable(273);
  assert.equal(readable, 'two hundred seventy three');
});
it('Should return \'two hundred seventy four\' when 274 given', function () {
  var readable = toReadable(274);
  assert.equal(readable, 'two hundred seventy four');
});
it('Should return \'two hundred seventy five\' when 275 given', function () {
  var readable = toReadable(275);
  assert.equal(readable, 'two hundred seventy five');
});
it('Should return \'two hundred seventy six\' when 276 given', function () {
  var readable = toReadable(276);
  assert.equal(readable, 'two hundred seventy six');
});
it('Should return \'two hundred seventy seven\' when 277 given', function () {
  var readable = toReadable(277);
  assert.equal(readable, 'two hundred seventy seven');
});
it('Should return \'two hundred seventy eight\' when 278 given', function () {
  var readable = toReadable(278);
  assert.equal(readable, 'two hundred seventy eight');
});
it('Should return \'two hundred seventy nine\' when 279 given', function () {
  var readable = toReadable(279);
  assert.equal(readable, 'two hundred seventy nine');
});
it('Should return \'two hundred eighty\' when 280 given', function () {
  var readable = toReadable(280);
  assert.equal(readable, 'two hundred eighty');
});
it('Should return \'two hundred eighty one\' when 281 given', function () {
  var readable = toReadable(281);
  assert.equal(readable, 'two hundred eighty one');
});
it('Should return \'two hundred eighty two\' when 282 given', function () {
  var readable = toReadable(282);
  assert.equal(readable, 'two hundred eighty two');
});
it('Should return \'two hundred eighty three\' when 283 given', function () {
  var readable = toReadable(283);
  assert.equal(readable, 'two hundred eighty three');
});
it('Should return \'two hundred eighty four\' when 284 given', function () {
  var readable = toReadable(284);
  assert.equal(readable, 'two hundred eighty four');
});
it('Should return \'two hundred eighty five\' when 285 given', function () {
  var readable = toReadable(285);
  assert.equal(readable, 'two hundred eighty five');
});
it('Should return \'two hundred eighty six\' when 286 given', function () {
  var readable = toReadable(286);
  assert.equal(readable, 'two hundred eighty six');
});
it('Should return \'two hundred eighty seven\' when 287 given', function () {
  var readable = toReadable(287);
  assert.equal(readable, 'two hundred eighty seven');
});
it('Should return \'two hundred eighty eight\' when 288 given', function () {
  var readable = toReadable(288);
  assert.equal(readable, 'two hundred eighty eight');
});
it('Should return \'two hundred eighty nine\' when 289 given', function () {
  var readable = toReadable(289);
  assert.equal(readable, 'two hundred eighty nine');
});
it('Should return \'two hundred ninety\' when 290 given', function () {
  var readable = toReadable(290);
  assert.equal(readable, 'two hundred ninety');
});
it('Should return \'two hundred ninety one\' when 291 given', function () {
  var readable = toReadable(291);
  assert.equal(readable, 'two hundred ninety one');
});
it('Should return \'two hundred ninety two\' when 292 given', function () {
  var readable = toReadable(292);
  assert.equal(readable, 'two hundred ninety two');
});
it('Should return \'two hundred ninety three\' when 293 given', function () {
  var readable = toReadable(293);
  assert.equal(readable, 'two hundred ninety three');
});
it('Should return \'two hundred ninety four\' when 294 given', function () {
  var readable = toReadable(294);
  assert.equal(readable, 'two hundred ninety four');
});
it('Should return \'two hundred ninety five\' when 295 given', function () {
  var readable = toReadable(295);
  assert.equal(readable, 'two hundred ninety five');
});
it('Should return \'two hundred ninety six\' when 296 given', function () {
  var readable = toReadable(296);
  assert.equal(readable, 'two hundred ninety six');
});
it('Should return \'two hundred ninety seven\' when 297 given', function () {
  var readable = toReadable(297);
  assert.equal(readable, 'two hundred ninety seven');
});
it('Should return \'two hundred ninety eight\' when 298 given', function () {
  var readable = toReadable(298);
  assert.equal(readable, 'two hundred ninety eight');
});
it('Should return \'two hundred ninety nine\' when 299 given', function () {
  var readable = toReadable(299);
  assert.equal(readable, 'two hundred ninety nine');
});
it('Should return \'three hundred\' when 300 given', function () {
  var readable = toReadable(300);
  assert.equal(readable, 'three hundred');
});
it('Should return \'three hundred one\' when 301 given', function () {
  var readable = toReadable(301);
  assert.equal(readable, 'three hundred one');
});
it('Should return \'three hundred two\' when 302 given', function () {
  var readable = toReadable(302);
  assert.equal(readable, 'three hundred two');
});
it('Should return \'three hundred three\' when 303 given', function () {
  var readable = toReadable(303);
  assert.equal(readable, 'three hundred three');
});
it('Should return \'three hundred four\' when 304 given', function () {
  var readable = toReadable(304);
  assert.equal(readable, 'three hundred four');
});
it('Should return \'three hundred five\' when 305 given', function () {
  var readable = toReadable(305);
  assert.equal(readable, 'three hundred five');
});
it('Should return \'three hundred six\' when 306 given', function () {
  var readable = toReadable(306);
  assert.equal(readable, 'three hundred six');
});
it('Should return \'three hundred seven\' when 307 given', function () {
  var readable = toReadable(307);
  assert.equal(readable, 'three hundred seven');
});
it('Should return \'three hundred eight\' when 308 given', function () {
  var readable = toReadable(308);
  assert.equal(readable, 'three hundred eight');
});
it('Should return \'three hundred nine\' when 309 given', function () {
  var readable = toReadable(309);
  assert.equal(readable, 'three hundred nine');
});
it('Should return \'three hundred ten\' when 310 given', function () {
  var readable = toReadable(310);
  assert.equal(readable, 'three hundred ten');
});
it('Should return \'three hundred eleven\' when 311 given', function () {
  var readable = toReadable(311);
  assert.equal(readable, 'three hundred eleven');
});
it('Should return \'three hundred twelve\' when 312 given', function () {
  var readable = toReadable(312);
  assert.equal(readable, 'three hundred twelve');
});
it('Should return \'three hundred thirteen\' when 313 given', function () {
  var readable = toReadable(313);
  assert.equal(readable, 'three hundred thirteen');
});
it('Should return \'three hundred fourteen\' when 314 given', function () {
  var readable = toReadable(314);
  assert.equal(readable, 'three hundred fourteen');
});
it('Should return \'three hundred fifteen\' when 315 given', function () {
  var readable = toReadable(315);
  assert.equal(readable, 'three hundred fifteen');
});
it('Should return \'three hundred sixteen\' when 316 given', function () {
  var readable = toReadable(316);
  assert.equal(readable, 'three hundred sixteen');
});
it('Should return \'three hundred seventeen\' when 317 given', function () {
  var readable = toReadable(317);
  assert.equal(readable, 'three hundred seventeen');
});
it('Should return \'three hundred eighteen\' when 318 given', function () {
  var readable = toReadable(318);
  assert.equal(readable, 'three hundred eighteen');
});
it('Should return \'three hundred nineteen\' when 319 given', function () {
  var readable = toReadable(319);
  assert.equal(readable, 'three hundred nineteen');
});
it('Should return \'three hundred twenty\' when 320 given', function () {
  var readable = toReadable(320);
  assert.equal(readable, 'three hundred twenty');
});
it('Should return \'three hundred twenty one\' when 321 given', function () {
  var readable = toReadable(321);
  assert.equal(readable, 'three hundred twenty one');
});
it('Should return \'three hundred twenty two\' when 322 given', function () {
  var readable = toReadable(322);
  assert.equal(readable, 'three hundred twenty two');
});
it('Should return \'three hundred twenty three\' when 323 given', function () {
  var readable = toReadable(323);
  assert.equal(readable, 'three hundred twenty three');
});
it('Should return \'three hundred twenty four\' when 324 given', function () {
  var readable = toReadable(324);
  assert.equal(readable, 'three hundred twenty four');
});
it('Should return \'three hundred twenty five\' when 325 given', function () {
  var readable = toReadable(325);
  assert.equal(readable, 'three hundred twenty five');
});
it('Should return \'three hundred twenty six\' when 326 given', function () {
  var readable = toReadable(326);
  assert.equal(readable, 'three hundred twenty six');
});
it('Should return \'three hundred twenty seven\' when 327 given', function () {
  var readable = toReadable(327);
  assert.equal(readable, 'three hundred twenty seven');
});
it('Should return \'three hundred twenty eight\' when 328 given', function () {
  var readable = toReadable(328);
  assert.equal(readable, 'three hundred twenty eight');
});
it('Should return \'three hundred twenty nine\' when 329 given', function () {
  var readable = toReadable(329);
  assert.equal(readable, 'three hundred twenty nine');
});
it('Should return \'three hundred thirty\' when 330 given', function () {
  var readable = toReadable(330);
  assert.equal(readable, 'three hundred thirty');
});
it('Should return \'three hundred thirty one\' when 331 given', function () {
  var readable = toReadable(331);
  assert.equal(readable, 'three hundred thirty one');
});
it('Should return \'three hundred thirty two\' when 332 given', function () {
  var readable = toReadable(332);
  assert.equal(readable, 'three hundred thirty two');
});
it('Should return \'three hundred thirty three\' when 333 given', function () {
  var readable = toReadable(333);
  assert.equal(readable, 'three hundred thirty three');
});
it('Should return \'three hundred thirty four\' when 334 given', function () {
  var readable = toReadable(334);
  assert.equal(readable, 'three hundred thirty four');
});
it('Should return \'three hundred thirty five\' when 335 given', function () {
  var readable = toReadable(335);
  assert.equal(readable, 'three hundred thirty five');
});
it('Should return \'three hundred thirty six\' when 336 given', function () {
  var readable = toReadable(336);
  assert.equal(readable, 'three hundred thirty six');
});
it('Should return \'three hundred thirty seven\' when 337 given', function () {
  var readable = toReadable(337);
  assert.equal(readable, 'three hundred thirty seven');
});
it('Should return \'three hundred thirty eight\' when 338 given', function () {
  var readable = toReadable(338);
  assert.equal(readable, 'three hundred thirty eight');
});
it('Should return \'three hundred thirty nine\' when 339 given', function () {
  var readable = toReadable(339);
  assert.equal(readable, 'three hundred thirty nine');
});
it('Should return \'three hundred forty\' when 340 given', function () {
  var readable = toReadable(340);
  assert.equal(readable, 'three hundred forty');
});
it('Should return \'three hundred forty one\' when 341 given', function () {
  var readable = toReadable(341);
  assert.equal(readable, 'three hundred forty one');
});
it('Should return \'three hundred forty two\' when 342 given', function () {
  var readable = toReadable(342);
  assert.equal(readable, 'three hundred forty two');
});
it('Should return \'three hundred forty three\' when 343 given', function () {
  var readable = toReadable(343);
  assert.equal(readable, 'three hundred forty three');
});
it('Should return \'three hundred forty four\' when 344 given', function () {
  var readable = toReadable(344);
  assert.equal(readable, 'three hundred forty four');
});
it('Should return \'three hundred forty five\' when 345 given', function () {
  var readable = toReadable(345);
  assert.equal(readable, 'three hundred forty five');
});
it('Should return \'three hundred forty six\' when 346 given', function () {
  var readable = toReadable(346);
  assert.equal(readable, 'three hundred forty six');
});
it('Should return \'three hundred forty seven\' when 347 given', function () {
  var readable = toReadable(347);
  assert.equal(readable, 'three hundred forty seven');
});
it('Should return \'three hundred forty eight\' when 348 given', function () {
  var readable = toReadable(348);
  assert.equal(readable, 'three hundred forty eight');
});
it('Should return \'three hundred forty nine\' when 349 given', function () {
  var readable = toReadable(349);
  assert.equal(readable, 'three hundred forty nine');
});
it('Should return \'three hundred fifty\' when 350 given', function () {
  var readable = toReadable(350);
  assert.equal(readable, 'three hundred fifty');
});
it('Should return \'three hundred fifty one\' when 351 given', function () {
  var readable = toReadable(351);
  assert.equal(readable, 'three hundred fifty one');
});
it('Should return \'three hundred fifty two\' when 352 given', function () {
  var readable = toReadable(352);
  assert.equal(readable, 'three hundred fifty two');
});
it('Should return \'three hundred fifty three\' when 353 given', function () {
  var readable = toReadable(353);
  assert.equal(readable, 'three hundred fifty three');
});
it('Should return \'three hundred fifty four\' when 354 given', function () {
  var readable = toReadable(354);
  assert.equal(readable, 'three hundred fifty four');
});
it('Should return \'three hundred fifty five\' when 355 given', function () {
  var readable = toReadable(355);
  assert.equal(readable, 'three hundred fifty five');
});
it('Should return \'three hundred fifty six\' when 356 given', function () {
  var readable = toReadable(356);
  assert.equal(readable, 'three hundred fifty six');
});
it('Should return \'three hundred fifty seven\' when 357 given', function () {
  var readable = toReadable(357);
  assert.equal(readable, 'three hundred fifty seven');
});
it('Should return \'three hundred fifty eight\' when 358 given', function () {
  var readable = toReadable(358);
  assert.equal(readable, 'three hundred fifty eight');
});
it('Should return \'three hundred fifty nine\' when 359 given', function () {
  var readable = toReadable(359);
  assert.equal(readable, 'three hundred fifty nine');
});
it('Should return \'three hundred sixty\' when 360 given', function () {
  var readable = toReadable(360);
  assert.equal(readable, 'three hundred sixty');
});
it('Should return \'three hundred sixty one\' when 361 given', function () {
  var readable = toReadable(361);
  assert.equal(readable, 'three hundred sixty one');
});
it('Should return \'three hundred sixty two\' when 362 given', function () {
  var readable = toReadable(362);
  assert.equal(readable, 'three hundred sixty two');
});
it('Should return \'three hundred sixty three\' when 363 given', function () {
  var readable = toReadable(363);
  assert.equal(readable, 'three hundred sixty three');
});
it('Should return \'three hundred sixty four\' when 364 given', function () {
  var readable = toReadable(364);
  assert.equal(readable, 'three hundred sixty four');
});
it('Should return \'three hundred sixty five\' when 365 given', function () {
  var readable = toReadable(365);
  assert.equal(readable, 'three hundred sixty five');
});
it('Should return \'three hundred sixty six\' when 366 given', function () {
  var readable = toReadable(366);
  assert.equal(readable, 'three hundred sixty six');
});
it('Should return \'three hundred sixty seven\' when 367 given', function () {
  var readable = toReadable(367);
  assert.equal(readable, 'three hundred sixty seven');
});
it('Should return \'three hundred sixty eight\' when 368 given', function () {
  var readable = toReadable(368);
  assert.equal(readable, 'three hundred sixty eight');
});
it('Should return \'three hundred sixty nine\' when 369 given', function () {
  var readable = toReadable(369);
  assert.equal(readable, 'three hundred sixty nine');
});
it('Should return \'three hundred seventy\' when 370 given', function () {
  var readable = toReadable(370);
  assert.equal(readable, 'three hundred seventy');
});
it('Should return \'three hundred seventy one\' when 371 given', function () {
  var readable = toReadable(371);
  assert.equal(readable, 'three hundred seventy one');
});
it('Should return \'three hundred seventy two\' when 372 given', function () {
  var readable = toReadable(372);
  assert.equal(readable, 'three hundred seventy two');
});
it('Should return \'three hundred seventy three\' when 373 given', function () {
  var readable = toReadable(373);
  assert.equal(readable, 'three hundred seventy three');
});
it('Should return \'three hundred seventy four\' when 374 given', function () {
  var readable = toReadable(374);
  assert.equal(readable, 'three hundred seventy four');
});
it('Should return \'three hundred seventy five\' when 375 given', function () {
  var readable = toReadable(375);
  assert.equal(readable, 'three hundred seventy five');
});
it('Should return \'three hundred seventy six\' when 376 given', function () {
  var readable = toReadable(376);
  assert.equal(readable, 'three hundred seventy six');
});
it('Should return \'three hundred seventy seven\' when 377 given', function () {
  var readable = toReadable(377);
  assert.equal(readable, 'three hundred seventy seven');
});
it('Should return \'three hundred seventy eight\' when 378 given', function () {
  var readable = toReadable(378);
  assert.equal(readable, 'three hundred seventy eight');
});
it('Should return \'three hundred seventy nine\' when 379 given', function () {
  var readable = toReadable(379);
  assert.equal(readable, 'three hundred seventy nine');
});
it('Should return \'three hundred eighty\' when 380 given', function () {
  var readable = toReadable(380);
  assert.equal(readable, 'three hundred eighty');
});
it('Should return \'three hundred eighty one\' when 381 given', function () {
  var readable = toReadable(381);
  assert.equal(readable, 'three hundred eighty one');
});
it('Should return \'three hundred eighty two\' when 382 given', function () {
  var readable = toReadable(382);
  assert.equal(readable, 'three hundred eighty two');
});
it('Should return \'three hundred eighty three\' when 383 given', function () {
  var readable = toReadable(383);
  assert.equal(readable, 'three hundred eighty three');
});
it('Should return \'three hundred eighty four\' when 384 given', function () {
  var readable = toReadable(384);
  assert.equal(readable, 'three hundred eighty four');
});
it('Should return \'three hundred eighty five\' when 385 given', function () {
  var readable = toReadable(385);
  assert.equal(readable, 'three hundred eighty five');
});
it('Should return \'three hundred eighty six\' when 386 given', function () {
  var readable = toReadable(386);
  assert.equal(readable, 'three hundred eighty six');
});
it('Should return \'three hundred eighty seven\' when 387 given', function () {
  var readable = toReadable(387);
  assert.equal(readable, 'three hundred eighty seven');
});
it('Should return \'three hundred eighty eight\' when 388 given', function () {
  var readable = toReadable(388);
  assert.equal(readable, 'three hundred eighty eight');
});
it('Should return \'three hundred eighty nine\' when 389 given', function () {
  var readable = toReadable(389);
  assert.equal(readable, 'three hundred eighty nine');
});
it('Should return \'three hundred ninety\' when 390 given', function () {
  var readable = toReadable(390);
  assert.equal(readable, 'three hundred ninety');
});
it('Should return \'three hundred ninety one\' when 391 given', function () {
  var readable = toReadable(391);
  assert.equal(readable, 'three hundred ninety one');
});
it('Should return \'three hundred ninety two\' when 392 given', function () {
  var readable = toReadable(392);
  assert.equal(readable, 'three hundred ninety two');
});
it('Should return \'three hundred ninety three\' when 393 given', function () {
  var readable = toReadable(393);
  assert.equal(readable, 'three hundred ninety three');
});
it('Should return \'three hundred ninety four\' when 394 given', function () {
  var readable = toReadable(394);
  assert.equal(readable, 'three hundred ninety four');
});
it('Should return \'three hundred ninety five\' when 395 given', function () {
  var readable = toReadable(395);
  assert.equal(readable, 'three hundred ninety five');
});
it('Should return \'three hundred ninety six\' when 396 given', function () {
  var readable = toReadable(396);
  assert.equal(readable, 'three hundred ninety six');
});
it('Should return \'three hundred ninety seven\' when 397 given', function () {
  var readable = toReadable(397);
  assert.equal(readable, 'three hundred ninety seven');
});
it('Should return \'three hundred ninety eight\' when 398 given', function () {
  var readable = toReadable(398);
  assert.equal(readable, 'three hundred ninety eight');
});
it('Should return \'three hundred ninety nine\' when 399 given', function () {
  var readable = toReadable(399);
  assert.equal(readable, 'three hundred ninety nine');
});
it('Should return \'four hundred\' when 400 given', function () {
  var readable = toReadable(400);
  assert.equal(readable, 'four hundred');
});
it('Should return \'four hundred one\' when 401 given', function () {
  var readable = toReadable(401);
  assert.equal(readable, 'four hundred one');
});
it('Should return \'four hundred two\' when 402 given', function () {
  var readable = toReadable(402);
  assert.equal(readable, 'four hundred two');
});
it('Should return \'four hundred three\' when 403 given', function () {
  var readable = toReadable(403);
  assert.equal(readable, 'four hundred three');
});
it('Should return \'four hundred four\' when 404 given', function () {
  var readable = toReadable(404);
  assert.equal(readable, 'four hundred four');
});
it('Should return \'four hundred five\' when 405 given', function () {
  var readable = toReadable(405);
  assert.equal(readable, 'four hundred five');
});
it('Should return \'four hundred six\' when 406 given', function () {
  var readable = toReadable(406);
  assert.equal(readable, 'four hundred six');
});
it('Should return \'four hundred seven\' when 407 given', function () {
  var readable = toReadable(407);
  assert.equal(readable, 'four hundred seven');
});
it('Should return \'four hundred eight\' when 408 given', function () {
  var readable = toReadable(408);
  assert.equal(readable, 'four hundred eight');
});
it('Should return \'four hundred nine\' when 409 given', function () {
  var readable = toReadable(409);
  assert.equal(readable, 'four hundred nine');
});
it('Should return \'four hundred ten\' when 410 given', function () {
  var readable = toReadable(410);
  assert.equal(readable, 'four hundred ten');
});
it('Should return \'four hundred eleven\' when 411 given', function () {
  var readable = toReadable(411);
  assert.equal(readable, 'four hundred eleven');
});
it('Should return \'four hundred twelve\' when 412 given', function () {
  var readable = toReadable(412);
  assert.equal(readable, 'four hundred twelve');
});
it('Should return \'four hundred thirteen\' when 413 given', function () {
  var readable = toReadable(413);
  assert.equal(readable, 'four hundred thirteen');
});
it('Should return \'four hundred fourteen\' when 414 given', function () {
  var readable = toReadable(414);
  assert.equal(readable, 'four hundred fourteen');
});
it('Should return \'four hundred fifteen\' when 415 given', function () {
  var readable = toReadable(415);
  assert.equal(readable, 'four hundred fifteen');
});
it('Should return \'four hundred sixteen\' when 416 given', function () {
  var readable = toReadable(416);
  assert.equal(readable, 'four hundred sixteen');
});
it('Should return \'four hundred seventeen\' when 417 given', function () {
  var readable = toReadable(417);
  assert.equal(readable, 'four hundred seventeen');
});
it('Should return \'four hundred eighteen\' when 418 given', function () {
  var readable = toReadable(418);
  assert.equal(readable, 'four hundred eighteen');
});
it('Should return \'four hundred nineteen\' when 419 given', function () {
  var readable = toReadable(419);
  assert.equal(readable, 'four hundred nineteen');
});
it('Should return \'four hundred twenty\' when 420 given', function () {
  var readable = toReadable(420);
  assert.equal(readable, 'four hundred twenty');
});
it('Should return \'four hundred twenty one\' when 421 given', function () {
  var readable = toReadable(421);
  assert.equal(readable, 'four hundred twenty one');
});
it('Should return \'four hundred twenty two\' when 422 given', function () {
  var readable = toReadable(422);
  assert.equal(readable, 'four hundred twenty two');
});
it('Should return \'four hundred twenty three\' when 423 given', function () {
  var readable = toReadable(423);
  assert.equal(readable, 'four hundred twenty three');
});
it('Should return \'four hundred twenty four\' when 424 given', function () {
  var readable = toReadable(424);
  assert.equal(readable, 'four hundred twenty four');
});
it('Should return \'four hundred twenty five\' when 425 given', function () {
  var readable = toReadable(425);
  assert.equal(readable, 'four hundred twenty five');
});
it('Should return \'four hundred twenty six\' when 426 given', function () {
  var readable = toReadable(426);
  assert.equal(readable, 'four hundred twenty six');
});
it('Should return \'four hundred twenty seven\' when 427 given', function () {
  var readable = toReadable(427);
  assert.equal(readable, 'four hundred twenty seven');
});
it('Should return \'four hundred twenty eight\' when 428 given', function () {
  var readable = toReadable(428);
  assert.equal(readable, 'four hundred twenty eight');
});
it('Should return \'four hundred twenty nine\' when 429 given', function () {
  var readable = toReadable(429);
  assert.equal(readable, 'four hundred twenty nine');
});
it('Should return \'four hundred thirty\' when 430 given', function () {
  var readable = toReadable(430);
  assert.equal(readable, 'four hundred thirty');
});
it('Should return \'four hundred thirty one\' when 431 given', function () {
  var readable = toReadable(431);
  assert.equal(readable, 'four hundred thirty one');
});
it('Should return \'four hundred thirty two\' when 432 given', function () {
  var readable = toReadable(432);
  assert.equal(readable, 'four hundred thirty two');
});
it('Should return \'four hundred thirty three\' when 433 given', function () {
  var readable = toReadable(433);
  assert.equal(readable, 'four hundred thirty three');
});
it('Should return \'four hundred thirty four\' when 434 given', function () {
  var readable = toReadable(434);
  assert.equal(readable, 'four hundred thirty four');
});
it('Should return \'four hundred thirty five\' when 435 given', function () {
  var readable = toReadable(435);
  assert.equal(readable, 'four hundred thirty five');
});
it('Should return \'four hundred thirty six\' when 436 given', function () {
  var readable = toReadable(436);
  assert.equal(readable, 'four hundred thirty six');
});
it('Should return \'four hundred thirty seven\' when 437 given', function () {
  var readable = toReadable(437);
  assert.equal(readable, 'four hundred thirty seven');
});
it('Should return \'four hundred thirty eight\' when 438 given', function () {
  var readable = toReadable(438);
  assert.equal(readable, 'four hundred thirty eight');
});
it('Should return \'four hundred thirty nine\' when 439 given', function () {
  var readable = toReadable(439);
  assert.equal(readable, 'four hundred thirty nine');
});
it('Should return \'four hundred forty\' when 440 given', function () {
  var readable = toReadable(440);
  assert.equal(readable, 'four hundred forty');
});
it('Should return \'four hundred forty one\' when 441 given', function () {
  var readable = toReadable(441);
  assert.equal(readable, 'four hundred forty one');
});
it('Should return \'four hundred forty two\' when 442 given', function () {
  var readable = toReadable(442);
  assert.equal(readable, 'four hundred forty two');
});
it('Should return \'four hundred forty three\' when 443 given', function () {
  var readable = toReadable(443);
  assert.equal(readable, 'four hundred forty three');
});
it('Should return \'four hundred forty four\' when 444 given', function () {
  var readable = toReadable(444);
  assert.equal(readable, 'four hundred forty four');
});
it('Should return \'four hundred forty five\' when 445 given', function () {
  var readable = toReadable(445);
  assert.equal(readable, 'four hundred forty five');
});
it('Should return \'four hundred forty six\' when 446 given', function () {
  var readable = toReadable(446);
  assert.equal(readable, 'four hundred forty six');
});
it('Should return \'four hundred forty seven\' when 447 given', function () {
  var readable = toReadable(447);
  assert.equal(readable, 'four hundred forty seven');
});
it('Should return \'four hundred forty eight\' when 448 given', function () {
  var readable = toReadable(448);
  assert.equal(readable, 'four hundred forty eight');
});
it('Should return \'four hundred forty nine\' when 449 given', function () {
  var readable = toReadable(449);
  assert.equal(readable, 'four hundred forty nine');
});
it('Should return \'four hundred fifty\' when 450 given', function () {
  var readable = toReadable(450);
  assert.equal(readable, 'four hundred fifty');
});
it('Should return \'four hundred fifty one\' when 451 given', function () {
  var readable = toReadable(451);
  assert.equal(readable, 'four hundred fifty one');
});
it('Should return \'four hundred fifty two\' when 452 given', function () {
  var readable = toReadable(452);
  assert.equal(readable, 'four hundred fifty two');
});
it('Should return \'four hundred fifty three\' when 453 given', function () {
  var readable = toReadable(453);
  assert.equal(readable, 'four hundred fifty three');
});
it('Should return \'four hundred fifty four\' when 454 given', function () {
  var readable = toReadable(454);
  assert.equal(readable, 'four hundred fifty four');
});
it('Should return \'four hundred fifty five\' when 455 given', function () {
  var readable = toReadable(455);
  assert.equal(readable, 'four hundred fifty five');
});
it('Should return \'four hundred fifty six\' when 456 given', function () {
  var readable = toReadable(456);
  assert.equal(readable, 'four hundred fifty six');
});
it('Should return \'four hundred fifty seven\' when 457 given', function () {
  var readable = toReadable(457);
  assert.equal(readable, 'four hundred fifty seven');
});
it('Should return \'four hundred fifty eight\' when 458 given', function () {
  var readable = toReadable(458);
  assert.equal(readable, 'four hundred fifty eight');
});
it('Should return \'four hundred fifty nine\' when 459 given', function () {
  var readable = toReadable(459);
  assert.equal(readable, 'four hundred fifty nine');
});
it('Should return \'four hundred sixty\' when 460 given', function () {
  var readable = toReadable(460);
  assert.equal(readable, 'four hundred sixty');
});
it('Should return \'four hundred sixty one\' when 461 given', function () {
  var readable = toReadable(461);
  assert.equal(readable, 'four hundred sixty one');
});
it('Should return \'four hundred sixty two\' when 462 given', function () {
  var readable = toReadable(462);
  assert.equal(readable, 'four hundred sixty two');
});
it('Should return \'four hundred sixty three\' when 463 given', function () {
  var readable = toReadable(463);
  assert.equal(readable, 'four hundred sixty three');
});
it('Should return \'four hundred sixty four\' when 464 given', function () {
  var readable = toReadable(464);
  assert.equal(readable, 'four hundred sixty four');
});
it('Should return \'four hundred sixty five\' when 465 given', function () {
  var readable = toReadable(465);
  assert.equal(readable, 'four hundred sixty five');
});
it('Should return \'four hundred sixty six\' when 466 given', function () {
  var readable = toReadable(466);
  assert.equal(readable, 'four hundred sixty six');
});
it('Should return \'four hundred sixty seven\' when 467 given', function () {
  var readable = toReadable(467);
  assert.equal(readable, 'four hundred sixty seven');
});
it('Should return \'four hundred sixty eight\' when 468 given', function () {
  var readable = toReadable(468);
  assert.equal(readable, 'four hundred sixty eight');
});
it('Should return \'four hundred sixty nine\' when 469 given', function () {
  var readable = toReadable(469);
  assert.equal(readable, 'four hundred sixty nine');
});
it('Should return \'four hundred seventy\' when 470 given', function () {
  var readable = toReadable(470);
  assert.equal(readable, 'four hundred seventy');
});
it('Should return \'four hundred seventy one\' when 471 given', function () {
  var readable = toReadable(471);
  assert.equal(readable, 'four hundred seventy one');
});
it('Should return \'four hundred seventy two\' when 472 given', function () {
  var readable = toReadable(472);
  assert.equal(readable, 'four hundred seventy two');
});
it('Should return \'four hundred seventy three\' when 473 given', function () {
  var readable = toReadable(473);
  assert.equal(readable, 'four hundred seventy three');
});
it('Should return \'four hundred seventy four\' when 474 given', function () {
  var readable = toReadable(474);
  assert.equal(readable, 'four hundred seventy four');
});
it('Should return \'four hundred seventy five\' when 475 given', function () {
  var readable = toReadable(475);
  assert.equal(readable, 'four hundred seventy five');
});
it('Should return \'four hundred seventy six\' when 476 given', function () {
  var readable = toReadable(476);
  assert.equal(readable, 'four hundred seventy six');
});
it('Should return \'four hundred seventy seven\' when 477 given', function () {
  var readable = toReadable(477);
  assert.equal(readable, 'four hundred seventy seven');
});
it('Should return \'four hundred seventy eight\' when 478 given', function () {
  var readable = toReadable(478);
  assert.equal(readable, 'four hundred seventy eight');
});
it('Should return \'four hundred seventy nine\' when 479 given', function () {
  var readable = toReadable(479);
  assert.equal(readable, 'four hundred seventy nine');
});
it('Should return \'four hundred eighty\' when 480 given', function () {
  var readable = toReadable(480);
  assert.equal(readable, 'four hundred eighty');
});
it('Should return \'four hundred eighty one\' when 481 given', function () {
  var readable = toReadable(481);
  assert.equal(readable, 'four hundred eighty one');
});
it('Should return \'four hundred eighty two\' when 482 given', function () {
  var readable = toReadable(482);
  assert.equal(readable, 'four hundred eighty two');
});
it('Should return \'four hundred eighty three\' when 483 given', function () {
  var readable = toReadable(483);
  assert.equal(readable, 'four hundred eighty three');
});
it('Should return \'four hundred eighty four\' when 484 given', function () {
  var readable = toReadable(484);
  assert.equal(readable, 'four hundred eighty four');
});
it('Should return \'four hundred eighty five\' when 485 given', function () {
  var readable = toReadable(485);
  assert.equal(readable, 'four hundred eighty five');
});
it('Should return \'four hundred eighty six\' when 486 given', function () {
  var readable = toReadable(486);
  assert.equal(readable, 'four hundred eighty six');
});
it('Should return \'four hundred eighty seven\' when 487 given', function () {
  var readable = toReadable(487);
  assert.equal(readable, 'four hundred eighty seven');
});
it('Should return \'four hundred eighty eight\' when 488 given', function () {
  var readable = toReadable(488);
  assert.equal(readable, 'four hundred eighty eight');
});
it('Should return \'four hundred eighty nine\' when 489 given', function () {
  var readable = toReadable(489);
  assert.equal(readable, 'four hundred eighty nine');
});
it('Should return \'four hundred ninety\' when 490 given', function () {
  var readable = toReadable(490);
  assert.equal(readable, 'four hundred ninety');
});
it('Should return \'four hundred ninety one\' when 491 given', function () {
  var readable = toReadable(491);
  assert.equal(readable, 'four hundred ninety one');
});
it('Should return \'four hundred ninety two\' when 492 given', function () {
  var readable = toReadable(492);
  assert.equal(readable, 'four hundred ninety two');
});
it('Should return \'four hundred ninety three\' when 493 given', function () {
  var readable = toReadable(493);
  assert.equal(readable, 'four hundred ninety three');
});
it('Should return \'four hundred ninety four\' when 494 given', function () {
  var readable = toReadable(494);
  assert.equal(readable, 'four hundred ninety four');
});
it('Should return \'four hundred ninety five\' when 495 given', function () {
  var readable = toReadable(495);
  assert.equal(readable, 'four hundred ninety five');
});
it('Should return \'four hundred ninety six\' when 496 given', function () {
  var readable = toReadable(496);
  assert.equal(readable, 'four hundred ninety six');
});
it('Should return \'four hundred ninety seven\' when 497 given', function () {
  var readable = toReadable(497);
  assert.equal(readable, 'four hundred ninety seven');
});
it('Should return \'four hundred ninety eight\' when 498 given', function () {
  var readable = toReadable(498);
  assert.equal(readable, 'four hundred ninety eight');
});
it('Should return \'four hundred ninety nine\' when 499 given', function () {
  var readable = toReadable(499);
  assert.equal(readable, 'four hundred ninety nine');
});
it('Should return \'five hundred\' when 500 given', function () {
  var readable = toReadable(500);
  assert.equal(readable, 'five hundred');
});
it('Should return \'five hundred one\' when 501 given', function () {
  var readable = toReadable(501);
  assert.equal(readable, 'five hundred one');
});
it('Should return \'five hundred two\' when 502 given', function () {
  var readable = toReadable(502);
  assert.equal(readable, 'five hundred two');
});
it('Should return \'five hundred three\' when 503 given', function () {
  var readable = toReadable(503);
  assert.equal(readable, 'five hundred three');
});
it('Should return \'five hundred four\' when 504 given', function () {
  var readable = toReadable(504);
  assert.equal(readable, 'five hundred four');
});
it('Should return \'five hundred five\' when 505 given', function () {
  var readable = toReadable(505);
  assert.equal(readable, 'five hundred five');
});
it('Should return \'five hundred six\' when 506 given', function () {
  var readable = toReadable(506);
  assert.equal(readable, 'five hundred six');
});
it('Should return \'five hundred seven\' when 507 given', function () {
  var readable = toReadable(507);
  assert.equal(readable, 'five hundred seven');
});
it('Should return \'five hundred eight\' when 508 given', function () {
  var readable = toReadable(508);
  assert.equal(readable, 'five hundred eight');
});
it('Should return \'five hundred nine\' when 509 given', function () {
  var readable = toReadable(509);
  assert.equal(readable, 'five hundred nine');
});
it('Should return \'five hundred ten\' when 510 given', function () {
  var readable = toReadable(510);
  assert.equal(readable, 'five hundred ten');
});
it('Should return \'five hundred eleven\' when 511 given', function () {
  var readable = toReadable(511);
  assert.equal(readable, 'five hundred eleven');
});
it('Should return \'five hundred twelve\' when 512 given', function () {
  var readable = toReadable(512);
  assert.equal(readable, 'five hundred twelve');
});
it('Should return \'five hundred thirteen\' when 513 given', function () {
  var readable = toReadable(513);
  assert.equal(readable, 'five hundred thirteen');
});
it('Should return \'five hundred fourteen\' when 514 given', function () {
  var readable = toReadable(514);
  assert.equal(readable, 'five hundred fourteen');
});
it('Should return \'five hundred fifteen\' when 515 given', function () {
  var readable = toReadable(515);
  assert.equal(readable, 'five hundred fifteen');
});
it('Should return \'five hundred sixteen\' when 516 given', function () {
  var readable = toReadable(516);
  assert.equal(readable, 'five hundred sixteen');
});
it('Should return \'five hundred seventeen\' when 517 given', function () {
  var readable = toReadable(517);
  assert.equal(readable, 'five hundred seventeen');
});
it('Should return \'five hundred eighteen\' when 518 given', function () {
  var readable = toReadable(518);
  assert.equal(readable, 'five hundred eighteen');
});
it('Should return \'five hundred nineteen\' when 519 given', function () {
  var readable = toReadable(519);
  assert.equal(readable, 'five hundred nineteen');
});
it('Should return \'five hundred twenty\' when 520 given', function () {
  var readable = toReadable(520);
  assert.equal(readable, 'five hundred twenty');
});
it('Should return \'five hundred twenty one\' when 521 given', function () {
  var readable = toReadable(521);
  assert.equal(readable, 'five hundred twenty one');
});
it('Should return \'five hundred twenty two\' when 522 given', function () {
  var readable = toReadable(522);
  assert.equal(readable, 'five hundred twenty two');
});
it('Should return \'five hundred twenty three\' when 523 given', function () {
  var readable = toReadable(523);
  assert.equal(readable, 'five hundred twenty three');
});
it('Should return \'five hundred twenty four\' when 524 given', function () {
  var readable = toReadable(524);
  assert.equal(readable, 'five hundred twenty four');
});
it('Should return \'five hundred twenty five\' when 525 given', function () {
  var readable = toReadable(525);
  assert.equal(readable, 'five hundred twenty five');
});
it('Should return \'five hundred twenty six\' when 526 given', function () {
  var readable = toReadable(526);
  assert.equal(readable, 'five hundred twenty six');
});
it('Should return \'five hundred twenty seven\' when 527 given', function () {
  var readable = toReadable(527);
  assert.equal(readable, 'five hundred twenty seven');
});
it('Should return \'five hundred twenty eight\' when 528 given', function () {
  var readable = toReadable(528);
  assert.equal(readable, 'five hundred twenty eight');
});
it('Should return \'five hundred twenty nine\' when 529 given', function () {
  var readable = toReadable(529);
  assert.equal(readable, 'five hundred twenty nine');
});
it('Should return \'five hundred thirty\' when 530 given', function () {
  var readable = toReadable(530);
  assert.equal(readable, 'five hundred thirty');
});
it('Should return \'five hundred thirty one\' when 531 given', function () {
  var readable = toReadable(531);
  assert.equal(readable, 'five hundred thirty one');
});
it('Should return \'five hundred thirty two\' when 532 given', function () {
  var readable = toReadable(532);
  assert.equal(readable, 'five hundred thirty two');
});
it('Should return \'five hundred thirty three\' when 533 given', function () {
  var readable = toReadable(533);
  assert.equal(readable, 'five hundred thirty three');
});
it('Should return \'five hundred thirty four\' when 534 given', function () {
  var readable = toReadable(534);
  assert.equal(readable, 'five hundred thirty four');
});
it('Should return \'five hundred thirty five\' when 535 given', function () {
  var readable = toReadable(535);
  assert.equal(readable, 'five hundred thirty five');
});
it('Should return \'five hundred thirty six\' when 536 given', function () {
  var readable = toReadable(536);
  assert.equal(readable, 'five hundred thirty six');
});
it('Should return \'five hundred thirty seven\' when 537 given', function () {
  var readable = toReadable(537);
  assert.equal(readable, 'five hundred thirty seven');
});
it('Should return \'five hundred thirty eight\' when 538 given', function () {
  var readable = toReadable(538);
  assert.equal(readable, 'five hundred thirty eight');
});
it('Should return \'five hundred thirty nine\' when 539 given', function () {
  var readable = toReadable(539);
  assert.equal(readable, 'five hundred thirty nine');
});
it('Should return \'five hundred forty\' when 540 given', function () {
  var readable = toReadable(540);
  assert.equal(readable, 'five hundred forty');
});
it('Should return \'five hundred forty one\' when 541 given', function () {
  var readable = toReadable(541);
  assert.equal(readable, 'five hundred forty one');
});
it('Should return \'five hundred forty two\' when 542 given', function () {
  var readable = toReadable(542);
  assert.equal(readable, 'five hundred forty two');
});
it('Should return \'five hundred forty three\' when 543 given', function () {
  var readable = toReadable(543);
  assert.equal(readable, 'five hundred forty three');
});
it('Should return \'five hundred forty four\' when 544 given', function () {
  var readable = toReadable(544);
  assert.equal(readable, 'five hundred forty four');
});
it('Should return \'five hundred forty five\' when 545 given', function () {
  var readable = toReadable(545);
  assert.equal(readable, 'five hundred forty five');
});
it('Should return \'five hundred forty six\' when 546 given', function () {
  var readable = toReadable(546);
  assert.equal(readable, 'five hundred forty six');
});
it('Should return \'five hundred forty seven\' when 547 given', function () {
  var readable = toReadable(547);
  assert.equal(readable, 'five hundred forty seven');
});
it('Should return \'five hundred forty eight\' when 548 given', function () {
  var readable = toReadable(548);
  assert.equal(readable, 'five hundred forty eight');
});
it('Should return \'five hundred forty nine\' when 549 given', function () {
  var readable = toReadable(549);
  assert.equal(readable, 'five hundred forty nine');
});
it('Should return \'five hundred fifty\' when 550 given', function () {
  var readable = toReadable(550);
  assert.equal(readable, 'five hundred fifty');
});
it('Should return \'five hundred fifty one\' when 551 given', function () {
  var readable = toReadable(551);
  assert.equal(readable, 'five hundred fifty one');
});
it('Should return \'five hundred fifty two\' when 552 given', function () {
  var readable = toReadable(552);
  assert.equal(readable, 'five hundred fifty two');
});
it('Should return \'five hundred fifty three\' when 553 given', function () {
  var readable = toReadable(553);
  assert.equal(readable, 'five hundred fifty three');
});
it('Should return \'five hundred fifty four\' when 554 given', function () {
  var readable = toReadable(554);
  assert.equal(readable, 'five hundred fifty four');
});
it('Should return \'five hundred fifty five\' when 555 given', function () {
  var readable = toReadable(555);
  assert.equal(readable, 'five hundred fifty five');
});
it('Should return \'five hundred fifty six\' when 556 given', function () {
  var readable = toReadable(556);
  assert.equal(readable, 'five hundred fifty six');
});
it('Should return \'five hundred fifty seven\' when 557 given', function () {
  var readable = toReadable(557);
  assert.equal(readable, 'five hundred fifty seven');
});
it('Should return \'five hundred fifty eight\' when 558 given', function () {
  var readable = toReadable(558);
  assert.equal(readable, 'five hundred fifty eight');
});
it('Should return \'five hundred fifty nine\' when 559 given', function () {
  var readable = toReadable(559);
  assert.equal(readable, 'five hundred fifty nine');
});
it('Should return \'five hundred sixty\' when 560 given', function () {
  var readable = toReadable(560);
  assert.equal(readable, 'five hundred sixty');
});
it('Should return \'five hundred sixty one\' when 561 given', function () {
  var readable = toReadable(561);
  assert.equal(readable, 'five hundred sixty one');
});
it('Should return \'five hundred sixty two\' when 562 given', function () {
  var readable = toReadable(562);
  assert.equal(readable, 'five hundred sixty two');
});
it('Should return \'five hundred sixty three\' when 563 given', function () {
  var readable = toReadable(563);
  assert.equal(readable, 'five hundred sixty three');
});
it('Should return \'five hundred sixty four\' when 564 given', function () {
  var readable = toReadable(564);
  assert.equal(readable, 'five hundred sixty four');
});
it('Should return \'five hundred sixty five\' when 565 given', function () {
  var readable = toReadable(565);
  assert.equal(readable, 'five hundred sixty five');
});
it('Should return \'five hundred sixty six\' when 566 given', function () {
  var readable = toReadable(566);
  assert.equal(readable, 'five hundred sixty six');
});
it('Should return \'five hundred sixty seven\' when 567 given', function () {
  var readable = toReadable(567);
  assert.equal(readable, 'five hundred sixty seven');
});
it('Should return \'five hundred sixty eight\' when 568 given', function () {
  var readable = toReadable(568);
  assert.equal(readable, 'five hundred sixty eight');
});
it('Should return \'five hundred sixty nine\' when 569 given', function () {
  var readable = toReadable(569);
  assert.equal(readable, 'five hundred sixty nine');
});
it('Should return \'five hundred seventy\' when 570 given', function () {
  var readable = toReadable(570);
  assert.equal(readable, 'five hundred seventy');
});
it('Should return \'five hundred seventy one\' when 571 given', function () {
  var readable = toReadable(571);
  assert.equal(readable, 'five hundred seventy one');
});
it('Should return \'five hundred seventy two\' when 572 given', function () {
  var readable = toReadable(572);
  assert.equal(readable, 'five hundred seventy two');
});
it('Should return \'five hundred seventy three\' when 573 given', function () {
  var readable = toReadable(573);
  assert.equal(readable, 'five hundred seventy three');
});
it('Should return \'five hundred seventy four\' when 574 given', function () {
  var readable = toReadable(574);
  assert.equal(readable, 'five hundred seventy four');
});
it('Should return \'five hundred seventy five\' when 575 given', function () {
  var readable = toReadable(575);
  assert.equal(readable, 'five hundred seventy five');
});
it('Should return \'five hundred seventy six\' when 576 given', function () {
  var readable = toReadable(576);
  assert.equal(readable, 'five hundred seventy six');
});
it('Should return \'five hundred seventy seven\' when 577 given', function () {
  var readable = toReadable(577);
  assert.equal(readable, 'five hundred seventy seven');
});
it('Should return \'five hundred seventy eight\' when 578 given', function () {
  var readable = toReadable(578);
  assert.equal(readable, 'five hundred seventy eight');
});
it('Should return \'five hundred seventy nine\' when 579 given', function () {
  var readable = toReadable(579);
  assert.equal(readable, 'five hundred seventy nine');
});
it('Should return \'five hundred eighty\' when 580 given', function () {
  var readable = toReadable(580);
  assert.equal(readable, 'five hundred eighty');
});
it('Should return \'five hundred eighty one\' when 581 given', function () {
  var readable = toReadable(581);
  assert.equal(readable, 'five hundred eighty one');
});
it('Should return \'five hundred eighty two\' when 582 given', function () {
  var readable = toReadable(582);
  assert.equal(readable, 'five hundred eighty two');
});
it('Should return \'five hundred eighty three\' when 583 given', function () {
  var readable = toReadable(583);
  assert.equal(readable, 'five hundred eighty three');
});
it('Should return \'five hundred eighty four\' when 584 given', function () {
  var readable = toReadable(584);
  assert.equal(readable, 'five hundred eighty four');
});
it('Should return \'five hundred eighty five\' when 585 given', function () {
  var readable = toReadable(585);
  assert.equal(readable, 'five hundred eighty five');
});
it('Should return \'five hundred eighty six\' when 586 given', function () {
  var readable = toReadable(586);
  assert.equal(readable, 'five hundred eighty six');
});
it('Should return \'five hundred eighty seven\' when 587 given', function () {
  var readable = toReadable(587);
  assert.equal(readable, 'five hundred eighty seven');
});
it('Should return \'five hundred eighty eight\' when 588 given', function () {
  var readable = toReadable(588);
  assert.equal(readable, 'five hundred eighty eight');
});
it('Should return \'five hundred eighty nine\' when 589 given', function () {
  var readable = toReadable(589);
  assert.equal(readable, 'five hundred eighty nine');
});
it('Should return \'five hundred ninety\' when 590 given', function () {
  var readable = toReadable(590);
  assert.equal(readable, 'five hundred ninety');
});
it('Should return \'five hundred ninety one\' when 591 given', function () {
  var readable = toReadable(591);
  assert.equal(readable, 'five hundred ninety one');
});
it('Should return \'five hundred ninety two\' when 592 given', function () {
  var readable = toReadable(592);
  assert.equal(readable, 'five hundred ninety two');
});
it('Should return \'five hundred ninety three\' when 593 given', function () {
  var readable = toReadable(593);
  assert.equal(readable, 'five hundred ninety three');
});
it('Should return \'five hundred ninety four\' when 594 given', function () {
  var readable = toReadable(594);
  assert.equal(readable, 'five hundred ninety four');
});
it('Should return \'five hundred ninety five\' when 595 given', function () {
  var readable = toReadable(595);
  assert.equal(readable, 'five hundred ninety five');
});
it('Should return \'five hundred ninety six\' when 596 given', function () {
  var readable = toReadable(596);
  assert.equal(readable, 'five hundred ninety six');
});
it('Should return \'five hundred ninety seven\' when 597 given', function () {
  var readable = toReadable(597);
  assert.equal(readable, 'five hundred ninety seven');
});
it('Should return \'five hundred ninety eight\' when 598 given', function () {
  var readable = toReadable(598);
  assert.equal(readable, 'five hundred ninety eight');
});
it('Should return \'five hundred ninety nine\' when 599 given', function () {
  var readable = toReadable(599);
  assert.equal(readable, 'five hundred ninety nine');
});
it('Should return \'six hundred\' when 600 given', function () {
  var readable = toReadable(600);
  assert.equal(readable, 'six hundred');
});
it('Should return \'six hundred one\' when 601 given', function () {
  var readable = toReadable(601);
  assert.equal(readable, 'six hundred one');
});
it('Should return \'six hundred two\' when 602 given', function () {
  var readable = toReadable(602);
  assert.equal(readable, 'six hundred two');
});
it('Should return \'six hundred three\' when 603 given', function () {
  var readable = toReadable(603);
  assert.equal(readable, 'six hundred three');
});
it('Should return \'six hundred four\' when 604 given', function () {
  var readable = toReadable(604);
  assert.equal(readable, 'six hundred four');
});
it('Should return \'six hundred five\' when 605 given', function () {
  var readable = toReadable(605);
  assert.equal(readable, 'six hundred five');
});
it('Should return \'six hundred six\' when 606 given', function () {
  var readable = toReadable(606);
  assert.equal(readable, 'six hundred six');
});
it('Should return \'six hundred seven\' when 607 given', function () {
  var readable = toReadable(607);
  assert.equal(readable, 'six hundred seven');
});
it('Should return \'six hundred eight\' when 608 given', function () {
  var readable = toReadable(608);
  assert.equal(readable, 'six hundred eight');
});
it('Should return \'six hundred nine\' when 609 given', function () {
  var readable = toReadable(609);
  assert.equal(readable, 'six hundred nine');
});
it('Should return \'six hundred ten\' when 610 given', function () {
  var readable = toReadable(610);
  assert.equal(readable, 'six hundred ten');
});
it('Should return \'six hundred eleven\' when 611 given', function () {
  var readable = toReadable(611);
  assert.equal(readable, 'six hundred eleven');
});
it('Should return \'six hundred twelve\' when 612 given', function () {
  var readable = toReadable(612);
  assert.equal(readable, 'six hundred twelve');
});
it('Should return \'six hundred thirteen\' when 613 given', function () {
  var readable = toReadable(613);
  assert.equal(readable, 'six hundred thirteen');
});
it('Should return \'six hundred fourteen\' when 614 given', function () {
  var readable = toReadable(614);
  assert.equal(readable, 'six hundred fourteen');
});
it('Should return \'six hundred fifteen\' when 615 given', function () {
  var readable = toReadable(615);
  assert.equal(readable, 'six hundred fifteen');
});
it('Should return \'six hundred sixteen\' when 616 given', function () {
  var readable = toReadable(616);
  assert.equal(readable, 'six hundred sixteen');
});
it('Should return \'six hundred seventeen\' when 617 given', function () {
  var readable = toReadable(617);
  assert.equal(readable, 'six hundred seventeen');
});
it('Should return \'six hundred eighteen\' when 618 given', function () {
  var readable = toReadable(618);
  assert.equal(readable, 'six hundred eighteen');
});
it('Should return \'six hundred nineteen\' when 619 given', function () {
  var readable = toReadable(619);
  assert.equal(readable, 'six hundred nineteen');
});
it('Should return \'six hundred twenty\' when 620 given', function () {
  var readable = toReadable(620);
  assert.equal(readable, 'six hundred twenty');
});
it('Should return \'six hundred twenty one\' when 621 given', function () {
  var readable = toReadable(621);
  assert.equal(readable, 'six hundred twenty one');
});
it('Should return \'six hundred twenty two\' when 622 given', function () {
  var readable = toReadable(622);
  assert.equal(readable, 'six hundred twenty two');
});
it('Should return \'six hundred twenty three\' when 623 given', function () {
  var readable = toReadable(623);
  assert.equal(readable, 'six hundred twenty three');
});
it('Should return \'six hundred twenty four\' when 624 given', function () {
  var readable = toReadable(624);
  assert.equal(readable, 'six hundred twenty four');
});
it('Should return \'six hundred twenty five\' when 625 given', function () {
  var readable = toReadable(625);
  assert.equal(readable, 'six hundred twenty five');
});
it('Should return \'six hundred twenty six\' when 626 given', function () {
  var readable = toReadable(626);
  assert.equal(readable, 'six hundred twenty six');
});
it('Should return \'six hundred twenty seven\' when 627 given', function () {
  var readable = toReadable(627);
  assert.equal(readable, 'six hundred twenty seven');
});
it('Should return \'six hundred twenty eight\' when 628 given', function () {
  var readable = toReadable(628);
  assert.equal(readable, 'six hundred twenty eight');
});
it('Should return \'six hundred twenty nine\' when 629 given', function () {
  var readable = toReadable(629);
  assert.equal(readable, 'six hundred twenty nine');
});
it('Should return \'six hundred thirty\' when 630 given', function () {
  var readable = toReadable(630);
  assert.equal(readable, 'six hundred thirty');
});
it('Should return \'six hundred thirty one\' when 631 given', function () {
  var readable = toReadable(631);
  assert.equal(readable, 'six hundred thirty one');
});
it('Should return \'six hundred thirty two\' when 632 given', function () {
  var readable = toReadable(632);
  assert.equal(readable, 'six hundred thirty two');
});
it('Should return \'six hundred thirty three\' when 633 given', function () {
  var readable = toReadable(633);
  assert.equal(readable, 'six hundred thirty three');
});
it('Should return \'six hundred thirty four\' when 634 given', function () {
  var readable = toReadable(634);
  assert.equal(readable, 'six hundred thirty four');
});
it('Should return \'six hundred thirty five\' when 635 given', function () {
  var readable = toReadable(635);
  assert.equal(readable, 'six hundred thirty five');
});
it('Should return \'six hundred thirty six\' when 636 given', function () {
  var readable = toReadable(636);
  assert.equal(readable, 'six hundred thirty six');
});
it('Should return \'six hundred thirty seven\' when 637 given', function () {
  var readable = toReadable(637);
  assert.equal(readable, 'six hundred thirty seven');
});
it('Should return \'six hundred thirty eight\' when 638 given', function () {
  var readable = toReadable(638);
  assert.equal(readable, 'six hundred thirty eight');
});
it('Should return \'six hundred thirty nine\' when 639 given', function () {
  var readable = toReadable(639);
  assert.equal(readable, 'six hundred thirty nine');
});
it('Should return \'six hundred forty\' when 640 given', function () {
  var readable = toReadable(640);
  assert.equal(readable, 'six hundred forty');
});
it('Should return \'six hundred forty one\' when 641 given', function () {
  var readable = toReadable(641);
  assert.equal(readable, 'six hundred forty one');
});
it('Should return \'six hundred forty two\' when 642 given', function () {
  var readable = toReadable(642);
  assert.equal(readable, 'six hundred forty two');
});
it('Should return \'six hundred forty three\' when 643 given', function () {
  var readable = toReadable(643);
  assert.equal(readable, 'six hundred forty three');
});
it('Should return \'six hundred forty four\' when 644 given', function () {
  var readable = toReadable(644);
  assert.equal(readable, 'six hundred forty four');
});
it('Should return \'six hundred forty five\' when 645 given', function () {
  var readable = toReadable(645);
  assert.equal(readable, 'six hundred forty five');
});
it('Should return \'six hundred forty six\' when 646 given', function () {
  var readable = toReadable(646);
  assert.equal(readable, 'six hundred forty six');
});
it('Should return \'six hundred forty seven\' when 647 given', function () {
  var readable = toReadable(647);
  assert.equal(readable, 'six hundred forty seven');
});
it('Should return \'six hundred forty eight\' when 648 given', function () {
  var readable = toReadable(648);
  assert.equal(readable, 'six hundred forty eight');
});
it('Should return \'six hundred forty nine\' when 649 given', function () {
  var readable = toReadable(649);
  assert.equal(readable, 'six hundred forty nine');
});
it('Should return \'six hundred fifty\' when 650 given', function () {
  var readable = toReadable(650);
  assert.equal(readable, 'six hundred fifty');
});
it('Should return \'six hundred fifty one\' when 651 given', function () {
  var readable = toReadable(651);
  assert.equal(readable, 'six hundred fifty one');
});
it('Should return \'six hundred fifty two\' when 652 given', function () {
  var readable = toReadable(652);
  assert.equal(readable, 'six hundred fifty two');
});
it('Should return \'six hundred fifty three\' when 653 given', function () {
  var readable = toReadable(653);
  assert.equal(readable, 'six hundred fifty three');
});
it('Should return \'six hundred fifty four\' when 654 given', function () {
  var readable = toReadable(654);
  assert.equal(readable, 'six hundred fifty four');
});
it('Should return \'six hundred fifty five\' when 655 given', function () {
  var readable = toReadable(655);
  assert.equal(readable, 'six hundred fifty five');
});
it('Should return \'six hundred fifty six\' when 656 given', function () {
  var readable = toReadable(656);
  assert.equal(readable, 'six hundred fifty six');
});
it('Should return \'six hundred fifty seven\' when 657 given', function () {
  var readable = toReadable(657);
  assert.equal(readable, 'six hundred fifty seven');
});
it('Should return \'six hundred fifty eight\' when 658 given', function () {
  var readable = toReadable(658);
  assert.equal(readable, 'six hundred fifty eight');
});
it('Should return \'six hundred fifty nine\' when 659 given', function () {
  var readable = toReadable(659);
  assert.equal(readable, 'six hundred fifty nine');
});
it('Should return \'six hundred sixty\' when 660 given', function () {
  var readable = toReadable(660);
  assert.equal(readable, 'six hundred sixty');
});
it('Should return \'six hundred sixty one\' when 661 given', function () {
  var readable = toReadable(661);
  assert.equal(readable, 'six hundred sixty one');
});
it('Should return \'six hundred sixty two\' when 662 given', function () {
  var readable = toReadable(662);
  assert.equal(readable, 'six hundred sixty two');
});
it('Should return \'six hundred sixty three\' when 663 given', function () {
  var readable = toReadable(663);
  assert.equal(readable, 'six hundred sixty three');
});
it('Should return \'six hundred sixty four\' when 664 given', function () {
  var readable = toReadable(664);
  assert.equal(readable, 'six hundred sixty four');
});
it('Should return \'six hundred sixty five\' when 665 given', function () {
  var readable = toReadable(665);
  assert.equal(readable, 'six hundred sixty five');
});
it('Should return \'six hundred sixty six\' when 666 given', function () {
  var readable = toReadable(666);
  assert.equal(readable, 'six hundred sixty six');
});
it('Should return \'six hundred sixty seven\' when 667 given', function () {
  var readable = toReadable(667);
  assert.equal(readable, 'six hundred sixty seven');
});
it('Should return \'six hundred sixty eight\' when 668 given', function () {
  var readable = toReadable(668);
  assert.equal(readable, 'six hundred sixty eight');
});
it('Should return \'six hundred sixty nine\' when 669 given', function () {
  var readable = toReadable(669);
  assert.equal(readable, 'six hundred sixty nine');
});
it('Should return \'six hundred seventy\' when 670 given', function () {
  var readable = toReadable(670);
  assert.equal(readable, 'six hundred seventy');
});
it('Should return \'six hundred seventy one\' when 671 given', function () {
  var readable = toReadable(671);
  assert.equal(readable, 'six hundred seventy one');
});
it('Should return \'six hundred seventy two\' when 672 given', function () {
  var readable = toReadable(672);
  assert.equal(readable, 'six hundred seventy two');
});
it('Should return \'six hundred seventy three\' when 673 given', function () {
  var readable = toReadable(673);
  assert.equal(readable, 'six hundred seventy three');
});
it('Should return \'six hundred seventy four\' when 674 given', function () {
  var readable = toReadable(674);
  assert.equal(readable, 'six hundred seventy four');
});
it('Should return \'six hundred seventy five\' when 675 given', function () {
  var readable = toReadable(675);
  assert.equal(readable, 'six hundred seventy five');
});
it('Should return \'six hundred seventy six\' when 676 given', function () {
  var readable = toReadable(676);
  assert.equal(readable, 'six hundred seventy six');
});
it('Should return \'six hundred seventy seven\' when 677 given', function () {
  var readable = toReadable(677);
  assert.equal(readable, 'six hundred seventy seven');
});
it('Should return \'six hundred seventy eight\' when 678 given', function () {
  var readable = toReadable(678);
  assert.equal(readable, 'six hundred seventy eight');
});
it('Should return \'six hundred seventy nine\' when 679 given', function () {
  var readable = toReadable(679);
  assert.equal(readable, 'six hundred seventy nine');
});
it('Should return \'six hundred eighty\' when 680 given', function () {
  var readable = toReadable(680);
  assert.equal(readable, 'six hundred eighty');
});
it('Should return \'six hundred eighty one\' when 681 given', function () {
  var readable = toReadable(681);
  assert.equal(readable, 'six hundred eighty one');
});
it('Should return \'six hundred eighty two\' when 682 given', function () {
  var readable = toReadable(682);
  assert.equal(readable, 'six hundred eighty two');
});
it('Should return \'six hundred eighty three\' when 683 given', function () {
  var readable = toReadable(683);
  assert.equal(readable, 'six hundred eighty three');
});
it('Should return \'six hundred eighty four\' when 684 given', function () {
  var readable = toReadable(684);
  assert.equal(readable, 'six hundred eighty four');
});
it('Should return \'six hundred eighty five\' when 685 given', function () {
  var readable = toReadable(685);
  assert.equal(readable, 'six hundred eighty five');
});
it('Should return \'six hundred eighty six\' when 686 given', function () {
  var readable = toReadable(686);
  assert.equal(readable, 'six hundred eighty six');
});
it('Should return \'six hundred eighty seven\' when 687 given', function () {
  var readable = toReadable(687);
  assert.equal(readable, 'six hundred eighty seven');
});
it('Should return \'six hundred eighty eight\' when 688 given', function () {
  var readable = toReadable(688);
  assert.equal(readable, 'six hundred eighty eight');
});
it('Should return \'six hundred eighty nine\' when 689 given', function () {
  var readable = toReadable(689);
  assert.equal(readable, 'six hundred eighty nine');
});
it('Should return \'six hundred ninety\' when 690 given', function () {
  var readable = toReadable(690);
  assert.equal(readable, 'six hundred ninety');
});
it('Should return \'six hundred ninety one\' when 691 given', function () {
  var readable = toReadable(691);
  assert.equal(readable, 'six hundred ninety one');
});
it('Should return \'six hundred ninety two\' when 692 given', function () {
  var readable = toReadable(692);
  assert.equal(readable, 'six hundred ninety two');
});
it('Should return \'six hundred ninety three\' when 693 given', function () {
  var readable = toReadable(693);
  assert.equal(readable, 'six hundred ninety three');
});
it('Should return \'six hundred ninety four\' when 694 given', function () {
  var readable = toReadable(694);
  assert.equal(readable, 'six hundred ninety four');
});
it('Should return \'six hundred ninety five\' when 695 given', function () {
  var readable = toReadable(695);
  assert.equal(readable, 'six hundred ninety five');
});
it('Should return \'six hundred ninety six\' when 696 given', function () {
  var readable = toReadable(696);
  assert.equal(readable, 'six hundred ninety six');
});
it('Should return \'six hundred ninety seven\' when 697 given', function () {
  var readable = toReadable(697);
  assert.equal(readable, 'six hundred ninety seven');
});
it('Should return \'six hundred ninety eight\' when 698 given', function () {
  var readable = toReadable(698);
  assert.equal(readable, 'six hundred ninety eight');
});
it('Should return \'six hundred ninety nine\' when 699 given', function () {
  var readable = toReadable(699);
  assert.equal(readable, 'six hundred ninety nine');
});
it('Should return \'seven hundred\' when 700 given', function () {
  var readable = toReadable(700);
  assert.equal(readable, 'seven hundred');
});
it('Should return \'seven hundred one\' when 701 given', function () {
  var readable = toReadable(701);
  assert.equal(readable, 'seven hundred one');
});
it('Should return \'seven hundred two\' when 702 given', function () {
  var readable = toReadable(702);
  assert.equal(readable, 'seven hundred two');
});
it('Should return \'seven hundred three\' when 703 given', function () {
  var readable = toReadable(703);
  assert.equal(readable, 'seven hundred three');
});
it('Should return \'seven hundred four\' when 704 given', function () {
  var readable = toReadable(704);
  assert.equal(readable, 'seven hundred four');
});
it('Should return \'seven hundred five\' when 705 given', function () {
  var readable = toReadable(705);
  assert.equal(readable, 'seven hundred five');
});
it('Should return \'seven hundred six\' when 706 given', function () {
  var readable = toReadable(706);
  assert.equal(readable, 'seven hundred six');
});
it('Should return \'seven hundred seven\' when 707 given', function () {
  var readable = toReadable(707);
  assert.equal(readable, 'seven hundred seven');
});
it('Should return \'seven hundred eight\' when 708 given', function () {
  var readable = toReadable(708);
  assert.equal(readable, 'seven hundred eight');
});
it('Should return \'seven hundred nine\' when 709 given', function () {
  var readable = toReadable(709);
  assert.equal(readable, 'seven hundred nine');
});
it('Should return \'seven hundred ten\' when 710 given', function () {
  var readable = toReadable(710);
  assert.equal(readable, 'seven hundred ten');
});
it('Should return \'seven hundred eleven\' when 711 given', function () {
  var readable = toReadable(711);
  assert.equal(readable, 'seven hundred eleven');
});
it('Should return \'seven hundred twelve\' when 712 given', function () {
  var readable = toReadable(712);
  assert.equal(readable, 'seven hundred twelve');
});
it('Should return \'seven hundred thirteen\' when 713 given', function () {
  var readable = toReadable(713);
  assert.equal(readable, 'seven hundred thirteen');
});
it('Should return \'seven hundred fourteen\' when 714 given', function () {
  var readable = toReadable(714);
  assert.equal(readable, 'seven hundred fourteen');
});
it('Should return \'seven hundred fifteen\' when 715 given', function () {
  var readable = toReadable(715);
  assert.equal(readable, 'seven hundred fifteen');
});
it('Should return \'seven hundred sixteen\' when 716 given', function () {
  var readable = toReadable(716);
  assert.equal(readable, 'seven hundred sixteen');
});
it('Should return \'seven hundred seventeen\' when 717 given', function () {
  var readable = toReadable(717);
  assert.equal(readable, 'seven hundred seventeen');
});
it('Should return \'seven hundred eighteen\' when 718 given', function () {
  var readable = toReadable(718);
  assert.equal(readable, 'seven hundred eighteen');
});
it('Should return \'seven hundred nineteen\' when 719 given', function () {
  var readable = toReadable(719);
  assert.equal(readable, 'seven hundred nineteen');
});
it('Should return \'seven hundred twenty\' when 720 given', function () {
  var readable = toReadable(720);
  assert.equal(readable, 'seven hundred twenty');
});
it('Should return \'seven hundred twenty one\' when 721 given', function () {
  var readable = toReadable(721);
  assert.equal(readable, 'seven hundred twenty one');
});
it('Should return \'seven hundred twenty two\' when 722 given', function () {
  var readable = toReadable(722);
  assert.equal(readable, 'seven hundred twenty two');
});
it('Should return \'seven hundred twenty three\' when 723 given', function () {
  var readable = toReadable(723);
  assert.equal(readable, 'seven hundred twenty three');
});
it('Should return \'seven hundred twenty four\' when 724 given', function () {
  var readable = toReadable(724);
  assert.equal(readable, 'seven hundred twenty four');
});
it('Should return \'seven hundred twenty five\' when 725 given', function () {
  var readable = toReadable(725);
  assert.equal(readable, 'seven hundred twenty five');
});
it('Should return \'seven hundred twenty six\' when 726 given', function () {
  var readable = toReadable(726);
  assert.equal(readable, 'seven hundred twenty six');
});
it('Should return \'seven hundred twenty seven\' when 727 given', function () {
  var readable = toReadable(727);
  assert.equal(readable, 'seven hundred twenty seven');
});
it('Should return \'seven hundred twenty eight\' when 728 given', function () {
  var readable = toReadable(728);
  assert.equal(readable, 'seven hundred twenty eight');
});
it('Should return \'seven hundred twenty nine\' when 729 given', function () {
  var readable = toReadable(729);
  assert.equal(readable, 'seven hundred twenty nine');
});
it('Should return \'seven hundred thirty\' when 730 given', function () {
  var readable = toReadable(730);
  assert.equal(readable, 'seven hundred thirty');
});
it('Should return \'seven hundred thirty one\' when 731 given', function () {
  var readable = toReadable(731);
  assert.equal(readable, 'seven hundred thirty one');
});
it('Should return \'seven hundred thirty two\' when 732 given', function () {
  var readable = toReadable(732);
  assert.equal(readable, 'seven hundred thirty two');
});
it('Should return \'seven hundred thirty three\' when 733 given', function () {
  var readable = toReadable(733);
  assert.equal(readable, 'seven hundred thirty three');
});
it('Should return \'seven hundred thirty four\' when 734 given', function () {
  var readable = toReadable(734);
  assert.equal(readable, 'seven hundred thirty four');
});
it('Should return \'seven hundred thirty five\' when 735 given', function () {
  var readable = toReadable(735);
  assert.equal(readable, 'seven hundred thirty five');
});
it('Should return \'seven hundred thirty six\' when 736 given', function () {
  var readable = toReadable(736);
  assert.equal(readable, 'seven hundred thirty six');
});
it('Should return \'seven hundred thirty seven\' when 737 given', function () {
  var readable = toReadable(737);
  assert.equal(readable, 'seven hundred thirty seven');
});
it('Should return \'seven hundred thirty eight\' when 738 given', function () {
  var readable = toReadable(738);
  assert.equal(readable, 'seven hundred thirty eight');
});
it('Should return \'seven hundred thirty nine\' when 739 given', function () {
  var readable = toReadable(739);
  assert.equal(readable, 'seven hundred thirty nine');
});
it('Should return \'seven hundred forty\' when 740 given', function () {
  var readable = toReadable(740);
  assert.equal(readable, 'seven hundred forty');
});
it('Should return \'seven hundred forty one\' when 741 given', function () {
  var readable = toReadable(741);
  assert.equal(readable, 'seven hundred forty one');
});
it('Should return \'seven hundred forty two\' when 742 given', function () {
  var readable = toReadable(742);
  assert.equal(readable, 'seven hundred forty two');
});
it('Should return \'seven hundred forty three\' when 743 given', function () {
  var readable = toReadable(743);
  assert.equal(readable, 'seven hundred forty three');
});
it('Should return \'seven hundred forty four\' when 744 given', function () {
  var readable = toReadable(744);
  assert.equal(readable, 'seven hundred forty four');
});
it('Should return \'seven hundred forty five\' when 745 given', function () {
  var readable = toReadable(745);
  assert.equal(readable, 'seven hundred forty five');
});
it('Should return \'seven hundred forty six\' when 746 given', function () {
  var readable = toReadable(746);
  assert.equal(readable, 'seven hundred forty six');
});
it('Should return \'seven hundred forty seven\' when 747 given', function () {
  var readable = toReadable(747);
  assert.equal(readable, 'seven hundred forty seven');
});
it('Should return \'seven hundred forty eight\' when 748 given', function () {
  var readable = toReadable(748);
  assert.equal(readable, 'seven hundred forty eight');
});
it('Should return \'seven hundred forty nine\' when 749 given', function () {
  var readable = toReadable(749);
  assert.equal(readable, 'seven hundred forty nine');
});
it('Should return \'seven hundred fifty\' when 750 given', function () {
  var readable = toReadable(750);
  assert.equal(readable, 'seven hundred fifty');
});
it('Should return \'seven hundred fifty one\' when 751 given', function () {
  var readable = toReadable(751);
  assert.equal(readable, 'seven hundred fifty one');
});
it('Should return \'seven hundred fifty two\' when 752 given', function () {
  var readable = toReadable(752);
  assert.equal(readable, 'seven hundred fifty two');
});
it('Should return \'seven hundred fifty three\' when 753 given', function () {
  var readable = toReadable(753);
  assert.equal(readable, 'seven hundred fifty three');
});
it('Should return \'seven hundred fifty four\' when 754 given', function () {
  var readable = toReadable(754);
  assert.equal(readable, 'seven hundred fifty four');
});
it('Should return \'seven hundred fifty five\' when 755 given', function () {
  var readable = toReadable(755);
  assert.equal(readable, 'seven hundred fifty five');
});
it('Should return \'seven hundred fifty six\' when 756 given', function () {
  var readable = toReadable(756);
  assert.equal(readable, 'seven hundred fifty six');
});
it('Should return \'seven hundred fifty seven\' when 757 given', function () {
  var readable = toReadable(757);
  assert.equal(readable, 'seven hundred fifty seven');
});
it('Should return \'seven hundred fifty eight\' when 758 given', function () {
  var readable = toReadable(758);
  assert.equal(readable, 'seven hundred fifty eight');
});
it('Should return \'seven hundred fifty nine\' when 759 given', function () {
  var readable = toReadable(759);
  assert.equal(readable, 'seven hundred fifty nine');
});
it('Should return \'seven hundred sixty\' when 760 given', function () {
  var readable = toReadable(760);
  assert.equal(readable, 'seven hundred sixty');
});
it('Should return \'seven hundred sixty one\' when 761 given', function () {
  var readable = toReadable(761);
  assert.equal(readable, 'seven hundred sixty one');
});
it('Should return \'seven hundred sixty two\' when 762 given', function () {
  var readable = toReadable(762);
  assert.equal(readable, 'seven hundred sixty two');
});
it('Should return \'seven hundred sixty three\' when 763 given', function () {
  var readable = toReadable(763);
  assert.equal(readable, 'seven hundred sixty three');
});
it('Should return \'seven hundred sixty four\' when 764 given', function () {
  var readable = toReadable(764);
  assert.equal(readable, 'seven hundred sixty four');
});
it('Should return \'seven hundred sixty five\' when 765 given', function () {
  var readable = toReadable(765);
  assert.equal(readable, 'seven hundred sixty five');
});
it('Should return \'seven hundred sixty six\' when 766 given', function () {
  var readable = toReadable(766);
  assert.equal(readable, 'seven hundred sixty six');
});
it('Should return \'seven hundred sixty seven\' when 767 given', function () {
  var readable = toReadable(767);
  assert.equal(readable, 'seven hundred sixty seven');
});
it('Should return \'seven hundred sixty eight\' when 768 given', function () {
  var readable = toReadable(768);
  assert.equal(readable, 'seven hundred sixty eight');
});
it('Should return \'seven hundred sixty nine\' when 769 given', function () {
  var readable = toReadable(769);
  assert.equal(readable, 'seven hundred sixty nine');
});
it('Should return \'seven hundred seventy\' when 770 given', function () {
  var readable = toReadable(770);
  assert.equal(readable, 'seven hundred seventy');
});
it('Should return \'seven hundred seventy one\' when 771 given', function () {
  var readable = toReadable(771);
  assert.equal(readable, 'seven hundred seventy one');
});
it('Should return \'seven hundred seventy two\' when 772 given', function () {
  var readable = toReadable(772);
  assert.equal(readable, 'seven hundred seventy two');
});
it('Should return \'seven hundred seventy three\' when 773 given', function () {
  var readable = toReadable(773);
  assert.equal(readable, 'seven hundred seventy three');
});
it('Should return \'seven hundred seventy four\' when 774 given', function () {
  var readable = toReadable(774);
  assert.equal(readable, 'seven hundred seventy four');
});
it('Should return \'seven hundred seventy five\' when 775 given', function () {
  var readable = toReadable(775);
  assert.equal(readable, 'seven hundred seventy five');
});
it('Should return \'seven hundred seventy six\' when 776 given', function () {
  var readable = toReadable(776);
  assert.equal(readable, 'seven hundred seventy six');
});
it('Should return \'seven hundred seventy seven\' when 777 given', function () {
  var readable = toReadable(777);
  assert.equal(readable, 'seven hundred seventy seven');
});
it('Should return \'seven hundred seventy eight\' when 778 given', function () {
  var readable = toReadable(778);
  assert.equal(readable, 'seven hundred seventy eight');
});
it('Should return \'seven hundred seventy nine\' when 779 given', function () {
  var readable = toReadable(779);
  assert.equal(readable, 'seven hundred seventy nine');
});
it('Should return \'seven hundred eighty\' when 780 given', function () {
  var readable = toReadable(780);
  assert.equal(readable, 'seven hundred eighty');
});
it('Should return \'seven hundred eighty one\' when 781 given', function () {
  var readable = toReadable(781);
  assert.equal(readable, 'seven hundred eighty one');
});
it('Should return \'seven hundred eighty two\' when 782 given', function () {
  var readable = toReadable(782);
  assert.equal(readable, 'seven hundred eighty two');
});
it('Should return \'seven hundred eighty three\' when 783 given', function () {
  var readable = toReadable(783);
  assert.equal(readable, 'seven hundred eighty three');
});
it('Should return \'seven hundred eighty four\' when 784 given', function () {
  var readable = toReadable(784);
  assert.equal(readable, 'seven hundred eighty four');
});
it('Should return \'seven hundred eighty five\' when 785 given', function () {
  var readable = toReadable(785);
  assert.equal(readable, 'seven hundred eighty five');
});
it('Should return \'seven hundred eighty six\' when 786 given', function () {
  var readable = toReadable(786);
  assert.equal(readable, 'seven hundred eighty six');
});
it('Should return \'seven hundred eighty seven\' when 787 given', function () {
  var readable = toReadable(787);
  assert.equal(readable, 'seven hundred eighty seven');
});
it('Should return \'seven hundred eighty eight\' when 788 given', function () {
  var readable = toReadable(788);
  assert.equal(readable, 'seven hundred eighty eight');
});
it('Should return \'seven hundred eighty nine\' when 789 given', function () {
  var readable = toReadable(789);
  assert.equal(readable, 'seven hundred eighty nine');
});
it('Should return \'seven hundred ninety\' when 790 given', function () {
  var readable = toReadable(790);
  assert.equal(readable, 'seven hundred ninety');
});
it('Should return \'seven hundred ninety one\' when 791 given', function () {
  var readable = toReadable(791);
  assert.equal(readable, 'seven hundred ninety one');
});
it('Should return \'seven hundred ninety two\' when 792 given', function () {
  var readable = toReadable(792);
  assert.equal(readable, 'seven hundred ninety two');
});
it('Should return \'seven hundred ninety three\' when 793 given', function () {
  var readable = toReadable(793);
  assert.equal(readable, 'seven hundred ninety three');
});
it('Should return \'seven hundred ninety four\' when 794 given', function () {
  var readable = toReadable(794);
  assert.equal(readable, 'seven hundred ninety four');
});
it('Should return \'seven hundred ninety five\' when 795 given', function () {
  var readable = toReadable(795);
  assert.equal(readable, 'seven hundred ninety five');
});
it('Should return \'seven hundred ninety six\' when 796 given', function () {
  var readable = toReadable(796);
  assert.equal(readable, 'seven hundred ninety six');
});
it('Should return \'seven hundred ninety seven\' when 797 given', function () {
  var readable = toReadable(797);
  assert.equal(readable, 'seven hundred ninety seven');
});
it('Should return \'seven hundred ninety eight\' when 798 given', function () {
  var readable = toReadable(798);
  assert.equal(readable, 'seven hundred ninety eight');
});
it('Should return \'seven hundred ninety nine\' when 799 given', function () {
  var readable = toReadable(799);
  assert.equal(readable, 'seven hundred ninety nine');
});
it('Should return \'eight hundred\' when 800 given', function () {
  var readable = toReadable(800);
  assert.equal(readable, 'eight hundred');
});
it('Should return \'eight hundred one\' when 801 given', function () {
  var readable = toReadable(801);
  assert.equal(readable, 'eight hundred one');
});
it('Should return \'eight hundred two\' when 802 given', function () {
  var readable = toReadable(802);
  assert.equal(readable, 'eight hundred two');
});
it('Should return \'eight hundred three\' when 803 given', function () {
  var readable = toReadable(803);
  assert.equal(readable, 'eight hundred three');
});
it('Should return \'eight hundred four\' when 804 given', function () {
  var readable = toReadable(804);
  assert.equal(readable, 'eight hundred four');
});
it('Should return \'eight hundred five\' when 805 given', function () {
  var readable = toReadable(805);
  assert.equal(readable, 'eight hundred five');
});
it('Should return \'eight hundred six\' when 806 given', function () {
  var readable = toReadable(806);
  assert.equal(readable, 'eight hundred six');
});
it('Should return \'eight hundred seven\' when 807 given', function () {
  var readable = toReadable(807);
  assert.equal(readable, 'eight hundred seven');
});
it('Should return \'eight hundred eight\' when 808 given', function () {
  var readable = toReadable(808);
  assert.equal(readable, 'eight hundred eight');
});
it('Should return \'eight hundred nine\' when 809 given', function () {
  var readable = toReadable(809);
  assert.equal(readable, 'eight hundred nine');
});
it('Should return \'eight hundred ten\' when 810 given', function () {
  var readable = toReadable(810);
  assert.equal(readable, 'eight hundred ten');
});
it('Should return \'eight hundred eleven\' when 811 given', function () {
  var readable = toReadable(811);
  assert.equal(readable, 'eight hundred eleven');
});
it('Should return \'eight hundred twelve\' when 812 given', function () {
  var readable = toReadable(812);
  assert.equal(readable, 'eight hundred twelve');
});
it('Should return \'eight hundred thirteen\' when 813 given', function () {
  var readable = toReadable(813);
  assert.equal(readable, 'eight hundred thirteen');
});
it('Should return \'eight hundred fourteen\' when 814 given', function () {
  var readable = toReadable(814);
  assert.equal(readable, 'eight hundred fourteen');
});
it('Should return \'eight hundred fifteen\' when 815 given', function () {
  var readable = toReadable(815);
  assert.equal(readable, 'eight hundred fifteen');
});
it('Should return \'eight hundred sixteen\' when 816 given', function () {
  var readable = toReadable(816);
  assert.equal(readable, 'eight hundred sixteen');
});
it('Should return \'eight hundred seventeen\' when 817 given', function () {
  var readable = toReadable(817);
  assert.equal(readable, 'eight hundred seventeen');
});
it('Should return \'eight hundred eighteen\' when 818 given', function () {
  var readable = toReadable(818);
  assert.equal(readable, 'eight hundred eighteen');
});
it('Should return \'eight hundred nineteen\' when 819 given', function () {
  var readable = toReadable(819);
  assert.equal(readable, 'eight hundred nineteen');
});
it('Should return \'eight hundred twenty\' when 820 given', function () {
  var readable = toReadable(820);
  assert.equal(readable, 'eight hundred twenty');
});
it('Should return \'eight hundred twenty one\' when 821 given', function () {
  var readable = toReadable(821);
  assert.equal(readable, 'eight hundred twenty one');
});
it('Should return \'eight hundred twenty two\' when 822 given', function () {
  var readable = toReadable(822);
  assert.equal(readable, 'eight hundred twenty two');
});
it('Should return \'eight hundred twenty three\' when 823 given', function () {
  var readable = toReadable(823);
  assert.equal(readable, 'eight hundred twenty three');
});
it('Should return \'eight hundred twenty four\' when 824 given', function () {
  var readable = toReadable(824);
  assert.equal(readable, 'eight hundred twenty four');
});
it('Should return \'eight hundred twenty five\' when 825 given', function () {
  var readable = toReadable(825);
  assert.equal(readable, 'eight hundred twenty five');
});
it('Should return \'eight hundred twenty six\' when 826 given', function () {
  var readable = toReadable(826);
  assert.equal(readable, 'eight hundred twenty six');
});
it('Should return \'eight hundred twenty seven\' when 827 given', function () {
  var readable = toReadable(827);
  assert.equal(readable, 'eight hundred twenty seven');
});
it('Should return \'eight hundred twenty eight\' when 828 given', function () {
  var readable = toReadable(828);
  assert.equal(readable, 'eight hundred twenty eight');
});
it('Should return \'eight hundred twenty nine\' when 829 given', function () {
  var readable = toReadable(829);
  assert.equal(readable, 'eight hundred twenty nine');
});
it('Should return \'eight hundred thirty\' when 830 given', function () {
  var readable = toReadable(830);
  assert.equal(readable, 'eight hundred thirty');
});
it('Should return \'eight hundred thirty one\' when 831 given', function () {
  var readable = toReadable(831);
  assert.equal(readable, 'eight hundred thirty one');
});
it('Should return \'eight hundred thirty two\' when 832 given', function () {
  var readable = toReadable(832);
  assert.equal(readable, 'eight hundred thirty two');
});
it('Should return \'eight hundred thirty three\' when 833 given', function () {
  var readable = toReadable(833);
  assert.equal(readable, 'eight hundred thirty three');
});
it('Should return \'eight hundred thirty four\' when 834 given', function () {
  var readable = toReadable(834);
  assert.equal(readable, 'eight hundred thirty four');
});
it('Should return \'eight hundred thirty five\' when 835 given', function () {
  var readable = toReadable(835);
  assert.equal(readable, 'eight hundred thirty five');
});
it('Should return \'eight hundred thirty six\' when 836 given', function () {
  var readable = toReadable(836);
  assert.equal(readable, 'eight hundred thirty six');
});
it('Should return \'eight hundred thirty seven\' when 837 given', function () {
  var readable = toReadable(837);
  assert.equal(readable, 'eight hundred thirty seven');
});
it('Should return \'eight hundred thirty eight\' when 838 given', function () {
  var readable = toReadable(838);
  assert.equal(readable, 'eight hundred thirty eight');
});
it('Should return \'eight hundred thirty nine\' when 839 given', function () {
  var readable = toReadable(839);
  assert.equal(readable, 'eight hundred thirty nine');
});
it('Should return \'eight hundred forty\' when 840 given', function () {
  var readable = toReadable(840);
  assert.equal(readable, 'eight hundred forty');
});
it('Should return \'eight hundred forty one\' when 841 given', function () {
  var readable = toReadable(841);
  assert.equal(readable, 'eight hundred forty one');
});
it('Should return \'eight hundred forty two\' when 842 given', function () {
  var readable = toReadable(842);
  assert.equal(readable, 'eight hundred forty two');
});
it('Should return \'eight hundred forty three\' when 843 given', function () {
  var readable = toReadable(843);
  assert.equal(readable, 'eight hundred forty three');
});
it('Should return \'eight hundred forty four\' when 844 given', function () {
  var readable = toReadable(844);
  assert.equal(readable, 'eight hundred forty four');
});
it('Should return \'eight hundred forty five\' when 845 given', function () {
  var readable = toReadable(845);
  assert.equal(readable, 'eight hundred forty five');
});
it('Should return \'eight hundred forty six\' when 846 given', function () {
  var readable = toReadable(846);
  assert.equal(readable, 'eight hundred forty six');
});
it('Should return \'eight hundred forty seven\' when 847 given', function () {
  var readable = toReadable(847);
  assert.equal(readable, 'eight hundred forty seven');
});
it('Should return \'eight hundred forty eight\' when 848 given', function () {
  var readable = toReadable(848);
  assert.equal(readable, 'eight hundred forty eight');
});
it('Should return \'eight hundred forty nine\' when 849 given', function () {
  var readable = toReadable(849);
  assert.equal(readable, 'eight hundred forty nine');
});
it('Should return \'eight hundred fifty\' when 850 given', function () {
  var readable = toReadable(850);
  assert.equal(readable, 'eight hundred fifty');
});
it('Should return \'eight hundred fifty one\' when 851 given', function () {
  var readable = toReadable(851);
  assert.equal(readable, 'eight hundred fifty one');
});
it('Should return \'eight hundred fifty two\' when 852 given', function () {
  var readable = toReadable(852);
  assert.equal(readable, 'eight hundred fifty two');
});
it('Should return \'eight hundred fifty three\' when 853 given', function () {
  var readable = toReadable(853);
  assert.equal(readable, 'eight hundred fifty three');
});
it('Should return \'eight hundred fifty four\' when 854 given', function () {
  var readable = toReadable(854);
  assert.equal(readable, 'eight hundred fifty four');
});
it('Should return \'eight hundred fifty five\' when 855 given', function () {
  var readable = toReadable(855);
  assert.equal(readable, 'eight hundred fifty five');
});
it('Should return \'eight hundred fifty six\' when 856 given', function () {
  var readable = toReadable(856);
  assert.equal(readable, 'eight hundred fifty six');
});
it('Should return \'eight hundred fifty seven\' when 857 given', function () {
  var readable = toReadable(857);
  assert.equal(readable, 'eight hundred fifty seven');
});
it('Should return \'eight hundred fifty eight\' when 858 given', function () {
  var readable = toReadable(858);
  assert.equal(readable, 'eight hundred fifty eight');
});
it('Should return \'eight hundred fifty nine\' when 859 given', function () {
  var readable = toReadable(859);
  assert.equal(readable, 'eight hundred fifty nine');
});
it('Should return \'eight hundred sixty\' when 860 given', function () {
  var readable = toReadable(860);
  assert.equal(readable, 'eight hundred sixty');
});
it('Should return \'eight hundred sixty one\' when 861 given', function () {
  var readable = toReadable(861);
  assert.equal(readable, 'eight hundred sixty one');
});
it('Should return \'eight hundred sixty two\' when 862 given', function () {
  var readable = toReadable(862);
  assert.equal(readable, 'eight hundred sixty two');
});
it('Should return \'eight hundred sixty three\' when 863 given', function () {
  var readable = toReadable(863);
  assert.equal(readable, 'eight hundred sixty three');
});
it('Should return \'eight hundred sixty four\' when 864 given', function () {
  var readable = toReadable(864);
  assert.equal(readable, 'eight hundred sixty four');
});
it('Should return \'eight hundred sixty five\' when 865 given', function () {
  var readable = toReadable(865);
  assert.equal(readable, 'eight hundred sixty five');
});
it('Should return \'eight hundred sixty six\' when 866 given', function () {
  var readable = toReadable(866);
  assert.equal(readable, 'eight hundred sixty six');
});
it('Should return \'eight hundred sixty seven\' when 867 given', function () {
  var readable = toReadable(867);
  assert.equal(readable, 'eight hundred sixty seven');
});
it('Should return \'eight hundred sixty eight\' when 868 given', function () {
  var readable = toReadable(868);
  assert.equal(readable, 'eight hundred sixty eight');
});
it('Should return \'eight hundred sixty nine\' when 869 given', function () {
  var readable = toReadable(869);
  assert.equal(readable, 'eight hundred sixty nine');
});
it('Should return \'eight hundred seventy\' when 870 given', function () {
  var readable = toReadable(870);
  assert.equal(readable, 'eight hundred seventy');
});
it('Should return \'eight hundred seventy one\' when 871 given', function () {
  var readable = toReadable(871);
  assert.equal(readable, 'eight hundred seventy one');
});
it('Should return \'eight hundred seventy two\' when 872 given', function () {
  var readable = toReadable(872);
  assert.equal(readable, 'eight hundred seventy two');
});
it('Should return \'eight hundred seventy three\' when 873 given', function () {
  var readable = toReadable(873);
  assert.equal(readable, 'eight hundred seventy three');
});
it('Should return \'eight hundred seventy four\' when 874 given', function () {
  var readable = toReadable(874);
  assert.equal(readable, 'eight hundred seventy four');
});
it('Should return \'eight hundred seventy five\' when 875 given', function () {
  var readable = toReadable(875);
  assert.equal(readable, 'eight hundred seventy five');
});
it('Should return \'eight hundred seventy six\' when 876 given', function () {
  var readable = toReadable(876);
  assert.equal(readable, 'eight hundred seventy six');
});
it('Should return \'eight hundred seventy seven\' when 877 given', function () {
  var readable = toReadable(877);
  assert.equal(readable, 'eight hundred seventy seven');
});
it('Should return \'eight hundred seventy eight\' when 878 given', function () {
  var readable = toReadable(878);
  assert.equal(readable, 'eight hundred seventy eight');
});
it('Should return \'eight hundred seventy nine\' when 879 given', function () {
  var readable = toReadable(879);
  assert.equal(readable, 'eight hundred seventy nine');
});
it('Should return \'eight hundred eighty\' when 880 given', function () {
  var readable = toReadable(880);
  assert.equal(readable, 'eight hundred eighty');
});
it('Should return \'eight hundred eighty one\' when 881 given', function () {
  var readable = toReadable(881);
  assert.equal(readable, 'eight hundred eighty one');
});
it('Should return \'eight hundred eighty two\' when 882 given', function () {
  var readable = toReadable(882);
  assert.equal(readable, 'eight hundred eighty two');
});
it('Should return \'eight hundred eighty three\' when 883 given', function () {
  var readable = toReadable(883);
  assert.equal(readable, 'eight hundred eighty three');
});
it('Should return \'eight hundred eighty four\' when 884 given', function () {
  var readable = toReadable(884);
  assert.equal(readable, 'eight hundred eighty four');
});
it('Should return \'eight hundred eighty five\' when 885 given', function () {
  var readable = toReadable(885);
  assert.equal(readable, 'eight hundred eighty five');
});
it('Should return \'eight hundred eighty six\' when 886 given', function () {
  var readable = toReadable(886);
  assert.equal(readable, 'eight hundred eighty six');
});
it('Should return \'eight hundred eighty seven\' when 887 given', function () {
  var readable = toReadable(887);
  assert.equal(readable, 'eight hundred eighty seven');
});
it('Should return \'eight hundred eighty eight\' when 888 given', function () {
  var readable = toReadable(888);
  assert.equal(readable, 'eight hundred eighty eight');
});
it('Should return \'eight hundred eighty nine\' when 889 given', function () {
  var readable = toReadable(889);
  assert.equal(readable, 'eight hundred eighty nine');
});
it('Should return \'eight hundred ninety\' when 890 given', function () {
  var readable = toReadable(890);
  assert.equal(readable, 'eight hundred ninety');
});
it('Should return \'eight hundred ninety one\' when 891 given', function () {
  var readable = toReadable(891);
  assert.equal(readable, 'eight hundred ninety one');
});
it('Should return \'eight hundred ninety two\' when 892 given', function () {
  var readable = toReadable(892);
  assert.equal(readable, 'eight hundred ninety two');
});
it('Should return \'eight hundred ninety three\' when 893 given', function () {
  var readable = toReadable(893);
  assert.equal(readable, 'eight hundred ninety three');
});
it('Should return \'eight hundred ninety four\' when 894 given', function () {
  var readable = toReadable(894);
  assert.equal(readable, 'eight hundred ninety four');
});
it('Should return \'eight hundred ninety five\' when 895 given', function () {
  var readable = toReadable(895);
  assert.equal(readable, 'eight hundred ninety five');
});
it('Should return \'eight hundred ninety six\' when 896 given', function () {
  var readable = toReadable(896);
  assert.equal(readable, 'eight hundred ninety six');
});
it('Should return \'eight hundred ninety seven\' when 897 given', function () {
  var readable = toReadable(897);
  assert.equal(readable, 'eight hundred ninety seven');
});
it('Should return \'eight hundred ninety eight\' when 898 given', function () {
  var readable = toReadable(898);
  assert.equal(readable, 'eight hundred ninety eight');
});
it('Should return \'eight hundred ninety nine\' when 899 given', function () {
  var readable = toReadable(899);
  assert.equal(readable, 'eight hundred ninety nine');
});
it('Should return \'nine hundred\' when 900 given', function () {
  var readable = toReadable(900);
  assert.equal(readable, 'nine hundred');
});
it('Should return \'nine hundred one\' when 901 given', function () {
  var readable = toReadable(901);
  assert.equal(readable, 'nine hundred one');
});
it('Should return \'nine hundred two\' when 902 given', function () {
  var readable = toReadable(902);
  assert.equal(readable, 'nine hundred two');
});
it('Should return \'nine hundred three\' when 903 given', function () {
  var readable = toReadable(903);
  assert.equal(readable, 'nine hundred three');
});
it('Should return \'nine hundred four\' when 904 given', function () {
  var readable = toReadable(904);
  assert.equal(readable, 'nine hundred four');
});
it('Should return \'nine hundred five\' when 905 given', function () {
  var readable = toReadable(905);
  assert.equal(readable, 'nine hundred five');
});
it('Should return \'nine hundred six\' when 906 given', function () {
  var readable = toReadable(906);
  assert.equal(readable, 'nine hundred six');
});
it('Should return \'nine hundred seven\' when 907 given', function () {
  var readable = toReadable(907);
  assert.equal(readable, 'nine hundred seven');
});
it('Should return \'nine hundred eight\' when 908 given', function () {
  var readable = toReadable(908);
  assert.equal(readable, 'nine hundred eight');
});
it('Should return \'nine hundred nine\' when 909 given', function () {
  var readable = toReadable(909);
  assert.equal(readable, 'nine hundred nine');
});
it('Should return \'nine hundred ten\' when 910 given', function () {
  var readable = toReadable(910);
  assert.equal(readable, 'nine hundred ten');
});
it('Should return \'nine hundred eleven\' when 911 given', function () {
  var readable = toReadable(911);
  assert.equal(readable, 'nine hundred eleven');
});
it('Should return \'nine hundred twelve\' when 912 given', function () {
  var readable = toReadable(912);
  assert.equal(readable, 'nine hundred twelve');
});
it('Should return \'nine hundred thirteen\' when 913 given', function () {
  var readable = toReadable(913);
  assert.equal(readable, 'nine hundred thirteen');
});
it('Should return \'nine hundred fourteen\' when 914 given', function () {
  var readable = toReadable(914);
  assert.equal(readable, 'nine hundred fourteen');
});
it('Should return \'nine hundred fifteen\' when 915 given', function () {
  var readable = toReadable(915);
  assert.equal(readable, 'nine hundred fifteen');
});
it('Should return \'nine hundred sixteen\' when 916 given', function () {
  var readable = toReadable(916);
  assert.equal(readable, 'nine hundred sixteen');
});
it('Should return \'nine hundred seventeen\' when 917 given', function () {
  var readable = toReadable(917);
  assert.equal(readable, 'nine hundred seventeen');
});
it('Should return \'nine hundred eighteen\' when 918 given', function () {
  var readable = toReadable(918);
  assert.equal(readable, 'nine hundred eighteen');
});
it('Should return \'nine hundred nineteen\' when 919 given', function () {
  var readable = toReadable(919);
  assert.equal(readable, 'nine hundred nineteen');
});
it('Should return \'nine hundred twenty\' when 920 given', function () {
  var readable = toReadable(920);
  assert.equal(readable, 'nine hundred twenty');
});
it('Should return \'nine hundred twenty one\' when 921 given', function () {
  var readable = toReadable(921);
  assert.equal(readable, 'nine hundred twenty one');
});
it('Should return \'nine hundred twenty two\' when 922 given', function () {
  var readable = toReadable(922);
  assert.equal(readable, 'nine hundred twenty two');
});
it('Should return \'nine hundred twenty three\' when 923 given', function () {
  var readable = toReadable(923);
  assert.equal(readable, 'nine hundred twenty three');
});
it('Should return \'nine hundred twenty four\' when 924 given', function () {
  var readable = toReadable(924);
  assert.equal(readable, 'nine hundred twenty four');
});
it('Should return \'nine hundred twenty five\' when 925 given', function () {
  var readable = toReadable(925);
  assert.equal(readable, 'nine hundred twenty five');
});
it('Should return \'nine hundred twenty six\' when 926 given', function () {
  var readable = toReadable(926);
  assert.equal(readable, 'nine hundred twenty six');
});
it('Should return \'nine hundred twenty seven\' when 927 given', function () {
  var readable = toReadable(927);
  assert.equal(readable, 'nine hundred twenty seven');
});
it('Should return \'nine hundred twenty eight\' when 928 given', function () {
  var readable = toReadable(928);
  assert.equal(readable, 'nine hundred twenty eight');
});
it('Should return \'nine hundred twenty nine\' when 929 given', function () {
  var readable = toReadable(929);
  assert.equal(readable, 'nine hundred twenty nine');
});
it('Should return \'nine hundred thirty\' when 930 given', function () {
  var readable = toReadable(930);
  assert.equal(readable, 'nine hundred thirty');
});
it('Should return \'nine hundred thirty one\' when 931 given', function () {
  var readable = toReadable(931);
  assert.equal(readable, 'nine hundred thirty one');
});
it('Should return \'nine hundred thirty two\' when 932 given', function () {
  var readable = toReadable(932);
  assert.equal(readable, 'nine hundred thirty two');
});
it('Should return \'nine hundred thirty three\' when 933 given', function () {
  var readable = toReadable(933);
  assert.equal(readable, 'nine hundred thirty three');
});
it('Should return \'nine hundred thirty four\' when 934 given', function () {
  var readable = toReadable(934);
  assert.equal(readable, 'nine hundred thirty four');
});
it('Should return \'nine hundred thirty five\' when 935 given', function () {
  var readable = toReadable(935);
  assert.equal(readable, 'nine hundred thirty five');
});
it('Should return \'nine hundred thirty six\' when 936 given', function () {
  var readable = toReadable(936);
  assert.equal(readable, 'nine hundred thirty six');
});
it('Should return \'nine hundred thirty seven\' when 937 given', function () {
  var readable = toReadable(937);
  assert.equal(readable, 'nine hundred thirty seven');
});
it('Should return \'nine hundred thirty eight\' when 938 given', function () {
  var readable = toReadable(938);
  assert.equal(readable, 'nine hundred thirty eight');
});
it('Should return \'nine hundred thirty nine\' when 939 given', function () {
  var readable = toReadable(939);
  assert.equal(readable, 'nine hundred thirty nine');
});
it('Should return \'nine hundred forty\' when 940 given', function () {
  var readable = toReadable(940);
  assert.equal(readable, 'nine hundred forty');
});
it('Should return \'nine hundred forty one\' when 941 given', function () {
  var readable = toReadable(941);
  assert.equal(readable, 'nine hundred forty one');
});
it('Should return \'nine hundred forty two\' when 942 given', function () {
  var readable = toReadable(942);
  assert.equal(readable, 'nine hundred forty two');
});
it('Should return \'nine hundred forty three\' when 943 given', function () {
  var readable = toReadable(943);
  assert.equal(readable, 'nine hundred forty three');
});
it('Should return \'nine hundred forty four\' when 944 given', function () {
  var readable = toReadable(944);
  assert.equal(readable, 'nine hundred forty four');
});
it('Should return \'nine hundred forty five\' when 945 given', function () {
  var readable = toReadable(945);
  assert.equal(readable, 'nine hundred forty five');
});
it('Should return \'nine hundred forty six\' when 946 given', function () {
  var readable = toReadable(946);
  assert.equal(readable, 'nine hundred forty six');
});
it('Should return \'nine hundred forty seven\' when 947 given', function () {
  var readable = toReadable(947);
  assert.equal(readable, 'nine hundred forty seven');
});
it('Should return \'nine hundred forty eight\' when 948 given', function () {
  var readable = toReadable(948);
  assert.equal(readable, 'nine hundred forty eight');
});
it('Should return \'nine hundred forty nine\' when 949 given', function () {
  var readable = toReadable(949);
  assert.equal(readable, 'nine hundred forty nine');
});
it('Should return \'nine hundred fifty\' when 950 given', function () {
  var readable = toReadable(950);
  assert.equal(readable, 'nine hundred fifty');
});
it('Should return \'nine hundred fifty one\' when 951 given', function () {
  var readable = toReadable(951);
  assert.equal(readable, 'nine hundred fifty one');
});
it('Should return \'nine hundred fifty two\' when 952 given', function () {
  var readable = toReadable(952);
  assert.equal(readable, 'nine hundred fifty two');
});
it('Should return \'nine hundred fifty three\' when 953 given', function () {
  var readable = toReadable(953);
  assert.equal(readable, 'nine hundred fifty three');
});
it('Should return \'nine hundred fifty four\' when 954 given', function () {
  var readable = toReadable(954);
  assert.equal(readable, 'nine hundred fifty four');
});
it('Should return \'nine hundred fifty five\' when 955 given', function () {
  var readable = toReadable(955);
  assert.equal(readable, 'nine hundred fifty five');
});
it('Should return \'nine hundred fifty six\' when 956 given', function () {
  var readable = toReadable(956);
  assert.equal(readable, 'nine hundred fifty six');
});
it('Should return \'nine hundred fifty seven\' when 957 given', function () {
  var readable = toReadable(957);
  assert.equal(readable, 'nine hundred fifty seven');
});
it('Should return \'nine hundred fifty eight\' when 958 given', function () {
  var readable = toReadable(958);
  assert.equal(readable, 'nine hundred fifty eight');
});
it('Should return \'nine hundred fifty nine\' when 959 given', function () {
  var readable = toReadable(959);
  assert.equal(readable, 'nine hundred fifty nine');
});
it('Should return \'nine hundred sixty\' when 960 given', function () {
  var readable = toReadable(960);
  assert.equal(readable, 'nine hundred sixty');
});
it('Should return \'nine hundred sixty one\' when 961 given', function () {
  var readable = toReadable(961);
  assert.equal(readable, 'nine hundred sixty one');
});
it('Should return \'nine hundred sixty two\' when 962 given', function () {
  var readable = toReadable(962);
  assert.equal(readable, 'nine hundred sixty two');
});
it('Should return \'nine hundred sixty three\' when 963 given', function () {
  var readable = toReadable(963);
  assert.equal(readable, 'nine hundred sixty three');
});
it('Should return \'nine hundred sixty four\' when 964 given', function () {
  var readable = toReadable(964);
  assert.equal(readable, 'nine hundred sixty four');
});
it('Should return \'nine hundred sixty five\' when 965 given', function () {
  var readable = toReadable(965);
  assert.equal(readable, 'nine hundred sixty five');
});
it('Should return \'nine hundred sixty six\' when 966 given', function () {
  var readable = toReadable(966);
  assert.equal(readable, 'nine hundred sixty six');
});
it('Should return \'nine hundred sixty seven\' when 967 given', function () {
  var readable = toReadable(967);
  assert.equal(readable, 'nine hundred sixty seven');
});
it('Should return \'nine hundred sixty eight\' when 968 given', function () {
  var readable = toReadable(968);
  assert.equal(readable, 'nine hundred sixty eight');
});
it('Should return \'nine hundred sixty nine\' when 969 given', function () {
  var readable = toReadable(969);
  assert.equal(readable, 'nine hundred sixty nine');
});
it('Should return \'nine hundred seventy\' when 970 given', function () {
  var readable = toReadable(970);
  assert.equal(readable, 'nine hundred seventy');
});
it('Should return \'nine hundred seventy one\' when 971 given', function () {
  var readable = toReadable(971);
  assert.equal(readable, 'nine hundred seventy one');
});
it('Should return \'nine hundred seventy two\' when 972 given', function () {
  var readable = toReadable(972);
  assert.equal(readable, 'nine hundred seventy two');
});
it('Should return \'nine hundred seventy three\' when 973 given', function () {
  var readable = toReadable(973);
  assert.equal(readable, 'nine hundred seventy three');
});
it('Should return \'nine hundred seventy four\' when 974 given', function () {
  var readable = toReadable(974);
  assert.equal(readable, 'nine hundred seventy four');
});
it('Should return \'nine hundred seventy five\' when 975 given', function () {
  var readable = toReadable(975);
  assert.equal(readable, 'nine hundred seventy five');
});
it('Should return \'nine hundred seventy six\' when 976 given', function () {
  var readable = toReadable(976);
  assert.equal(readable, 'nine hundred seventy six');
});
it('Should return \'nine hundred seventy seven\' when 977 given', function () {
  var readable = toReadable(977);
  assert.equal(readable, 'nine hundred seventy seven');
});
it('Should return \'nine hundred seventy eight\' when 978 given', function () {
  var readable = toReadable(978);
  assert.equal(readable, 'nine hundred seventy eight');
});
it('Should return \'nine hundred seventy nine\' when 979 given', function () {
  var readable = toReadable(979);
  assert.equal(readable, 'nine hundred seventy nine');
});
it('Should return \'nine hundred eighty\' when 980 given', function () {
  var readable = toReadable(980);
  assert.equal(readable, 'nine hundred eighty');
});
it('Should return \'nine hundred eighty one\' when 981 given', function () {
  var readable = toReadable(981);
  assert.equal(readable, 'nine hundred eighty one');
});
it('Should return \'nine hundred eighty two\' when 982 given', function () {
  var readable = toReadable(982);
  assert.equal(readable, 'nine hundred eighty two');
});
it('Should return \'nine hundred eighty three\' when 983 given', function () {
  var readable = toReadable(983);
  assert.equal(readable, 'nine hundred eighty three');
});
it('Should return \'nine hundred eighty four\' when 984 given', function () {
  var readable = toReadable(984);
  assert.equal(readable, 'nine hundred eighty four');
});
it('Should return \'nine hundred eighty five\' when 985 given', function () {
  var readable = toReadable(985);
  assert.equal(readable, 'nine hundred eighty five');
});
it('Should return \'nine hundred eighty six\' when 986 given', function () {
  var readable = toReadable(986);
  assert.equal(readable, 'nine hundred eighty six');
});
it('Should return \'nine hundred eighty seven\' when 987 given', function () {
  var readable = toReadable(987);
  assert.equal(readable, 'nine hundred eighty seven');
});
it('Should return \'nine hundred eighty eight\' when 988 given', function () {
  var readable = toReadable(988);
  assert.equal(readable, 'nine hundred eighty eight');
});
it('Should return \'nine hundred eighty nine\' when 989 given', function () {
  var readable = toReadable(989);
  assert.equal(readable, 'nine hundred eighty nine');
});
it('Should return \'nine hundred ninety\' when 990 given', function () {
  var readable = toReadable(990);
  assert.equal(readable, 'nine hundred ninety');
});
it('Should return \'nine hundred ninety one\' when 991 given', function () {
  var readable = toReadable(991);
  assert.equal(readable, 'nine hundred ninety one');
});
it('Should return \'nine hundred ninety two\' when 992 given', function () {
  var readable = toReadable(992);
  assert.equal(readable, 'nine hundred ninety two');
});
it('Should return \'nine hundred ninety three\' when 993 given', function () {
  var readable = toReadable(993);
  assert.equal(readable, 'nine hundred ninety three');
});
it('Should return \'nine hundred ninety four\' when 994 given', function () {
  var readable = toReadable(994);
  assert.equal(readable, 'nine hundred ninety four');
});
it('Should return \'nine hundred ninety five\' when 995 given', function () {
  var readable = toReadable(995);
  assert.equal(readable, 'nine hundred ninety five');
});
it('Should return \'nine hundred ninety six\' when 996 given', function () {
  var readable = toReadable(996);
  assert.equal(readable, 'nine hundred ninety six');
});
it('Should return \'nine hundred ninety seven\' when 997 given', function () {
  var readable = toReadable(997);
  assert.equal(readable, 'nine hundred ninety seven');
});
it('Should return \'nine hundred ninety eight\' when 998 given', function () {
  var readable = toReadable(998);
  assert.equal(readable, 'nine hundred ninety eight');
});
it('Should return \'nine hundred ninety nine\' when 999 given', function () {
  var readable = toReadable(999);
  assert.equal(readable, 'nine hundred ninety nine');
});