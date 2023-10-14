import React from 'react';
import colors from '../../../../design-tokens/export/foundations.js';
import ColorCard from './colorCard.tsx';

interface ColorInfo {
  value: string;
}

function ColorCardList({ color }: { color: Record<string, ColorInfo> }) {
  return (
    <div className='color__grid'>
      {Object.entries(color).map(([colorName, colorInfo]) => (
        <ColorCard key={colorName} name={colorName} value={colorInfo.value} />
      ))}
    </div>
  );
}

export function ColorCardListBrand() {
  const brand = colors.Foundations.Color.Brand;
  return (
    <ColorCardList color={brand} />
  );
}

export function ColorCardListNeutral() {
  const neutral = colors.Foundations.Color.Neutral;
  return <ColorCardList color={neutral} />;
}

export function ColorCardListRed() {
  const red = colors.Foundations.Color.Red;
  return <ColorCardList color={red} />;
}

export function ColorCardListOrange() {
  const orange = colors.Foundations.Color.Orange;
  return <ColorCardList color={orange} />;
}

export function ColorCardListAmber() {
  const amber = colors.Foundations.Color.Amber;
  return <ColorCardList color={amber} />;
}

export function ColorCardListYellow() {
  const yellow = colors.Foundations.Color.Yellow;
  return <ColorCardList color={yellow} />;
}

export function ColorCardListLime() {
  const lime = colors.Foundations.Color.Lime;
  return <ColorCardList color={lime} />;
}

export function ColorCardListGreen() {
  const green = colors.Foundations.Color.Green;
  return <ColorCardList color={green} />;
}

export function ColorCardListEmerald() {
  const emerald = colors.Foundations.Color.Emerald;
  return <ColorCardList color={emerald} />;
}

export function ColorCardListTeal() {
  const teal = colors.Foundations.Color.Teal;
  return <ColorCardList color={teal} />;
}

export function ColorCardListCyan() {
  const cyan = colors.Foundations.Color.Cyan;
  return <ColorCardList color={cyan} />;
}

export function ColorCardListSky() {
  const sky = colors.Foundations.Color.Sky;
  return <ColorCardList color={sky} />;
}

export function ColorCardListBlue() {
  const blue = colors.Foundations.Color.Blue;
  return <ColorCardList color={blue} />;
}

export function ColorCardListIndigo() {
  const indigo = colors.Foundations.Color.Indigo;
  return <ColorCardList color={indigo} />;
}

export function ColorCardListViolet() {
  const violet = colors.Foundations.Color.Violet;
  return <ColorCardList color={violet} />;
}

export function ColorCardListPurple() {
  const purple = colors.Foundations.Color.Purple;
  return <ColorCardList color={purple} />;
}

export function ColorCardListFuchsia() {
  const fuchsia = colors.Foundations.Color.Fuchsia;
  return <ColorCardList color={fuchsia} />;
}

export function ColorCardListPink() {
  const pink = colors.Foundations.Color.Pink;
  return <ColorCardList color={pink} />;
}

export function ColorCardListRose() {
  const rose = colors.Foundations.Color.Rose;
  return <ColorCardList color={rose} />;
}




