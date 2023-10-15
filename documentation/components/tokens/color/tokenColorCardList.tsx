import React from 'react';
import tokens from '../../../../design-tokens/export/tokens-light.js';
import tokensDark from '../../../../design-tokens/export/tokens-dark.js';
import TokenCard from './tokenColorCard.js';

interface TokenInfo {
  value: string;
  description: string;
  original: {
    value: string;
  };
}

function TokenCardList({ token }: { token: Record<string, TokenInfo> }) {
  return (
    <div className="token__grid">
      {Object.entries(token).map(([tokenName, tokenInfo]) => (
        <TokenCard
          key={tokenName}
          name={tokenName}
          value={tokenInfo.value}
          origin={tokenInfo.original.value}
          description={tokenInfo.description}
        />
      ))}
    </div>
  );
}


/* BACKGROUND */

export function TokenCardListBackgroundNeutral() {
  const backgroundNeutral = tokens.Tokens.Light.Color.Background.Neutral;
  return <TokenCardList token={backgroundNeutral} />;
}

export function TokenCardListBackgroundNeutralDark() {
  const backgroundNeutral = tokensDark.Tokens.Dark.Color.Background.Neutral;
  return <TokenCardList token={backgroundNeutral} />;
}

export function TokenCardListBackgroundBrand() {
  const backgroundBrand = tokens.Tokens.Light.Color.Background.Brand;
  return (
    <TokenCardList token={backgroundBrand} />
  );
}

export function TokenCardListBackgroundBrandDark() {
  const backgroundBrand = tokensDark.Tokens.Dark.Color.Background.Brand;
  return <TokenCardList token={backgroundBrand} />;
}

export function TokenCardListBackgroundDanger() {
  const backgroundDanger = tokens.Tokens.Light.Color.Background.Danger;
  return <TokenCardList token={backgroundDanger} />;
}

export function TokenCardListBackgroundDangerDark() {
  const backgroundDanger = tokensDark.Tokens.Dark.Color.Background.Danger;
  return <TokenCardList token={backgroundDanger} />;
}

export function TokenCardListBackgroundWarning() {
  const backgroundWarning = tokens.Tokens.Light.Color.Background.Warning;
  return <TokenCardList token={backgroundWarning} />;
}

export function TokenCardListBackgroundWarningDark() {
  const backgroundWarning = tokensDark.Tokens.Dark.Color.Background.Warning;
  return <TokenCardList token={backgroundWarning} />;
}

export function TokenCardListBackgroundSuccess() {
  const backgroundSuccess = tokens.Tokens.Light.Color.Background.Success;
  return <TokenCardList token={backgroundSuccess} />;
}

export function TokenCardListBackgroundSuccessDark() {
  const backgroundSuccess = tokensDark.Tokens.Dark.Color.Background.Success;
  return <TokenCardList token={backgroundSuccess} />;
}

export function TokenCardListBackgroundInfo() {
  const backgroundInfo = tokens.Tokens.Light.Color.Background.Info;
  return <TokenCardList token={backgroundInfo} />;
}

export function TokenCardListBackgroundInfoDark() {
  const backgroundInfo = tokensDark.Tokens.Dark.Color.Background.Info;
  return <TokenCardList token={backgroundInfo} />;
}

export function TokenCardListBackgroundDiscovery() {
  const backgroundDiscovery = tokens.Tokens.Light.Color.Background.Discovery;
  return <TokenCardList token={backgroundDiscovery} />;
}

export function TokenCardListBackgroundDiscoveryDark() {
  const backgroundDiscovery = tokensDark.Tokens.Dark.Color.Background.Discovery;
  return <TokenCardList token={backgroundDiscovery} />;
}




/* TEXT */

export function TokenCardListTextNeutral() {
  const textNeutral = tokens.Tokens.Light.Color.Text.Neutral;
  return <TokenCardList token={textNeutral} />;
}

export function TokenCardListTextNeutralDark() {
  const textNeutral = tokensDark.Tokens.Dark.Color.Text.Neutral;
  return <TokenCardList token={textNeutral} />;
}

export function TokenCardListTextBrand() {
  const textBrand = tokens.Tokens.Light.Color.Text.Brand;
  return <TokenCardList token={textBrand} />;
}

export function TokenCardListTextBrandDark() {
  const textBrand = tokensDark.Tokens.Dark.Color.Text.Brand;
  return <TokenCardList token={textBrand} />;
}

export function TokenCardListTextDanger() {
  const textDanger = tokens.Tokens.Light.Color.Text.Danger;
  return <TokenCardList token={textDanger} />;
}

export function TokenCardListTextDangerDark() {
  const textDanger = tokensDark.Tokens.Dark.Color.Text.Danger;
  return <TokenCardList token={textDanger} />;
}

export function TokenCardListTextWarning() {
  const textWarning = tokens.Tokens.Light.Color.Text.Warning;
  return <TokenCardList token={textWarning} />;
}

export function TokenCardListTextWarningDark() {
  const textWarning = tokensDark.Tokens.Dark.Color.Text.Warning;
  return <TokenCardList token={textWarning} />;
}

export function TokenCardListTextSuccess() {
  const textSuccess = tokens.Tokens.Light.Color.Text.Success;
  return <TokenCardList token={textSuccess} />;
}

export function TokenCardListTextSuccessDark() {
  const textSuccess = tokensDark.Tokens.Dark.Color.Text.Success;
  return <TokenCardList token={textSuccess} />;
}

export function TokenCardListTextInfo() {
  const textInfo = tokens.Tokens.Light.Color.Text.Info;
  return <TokenCardList token={textInfo} />;
}

export function TokenCardListTextInfoDark() {
  const textInfo = tokensDark.Tokens.Dark.Color.Text.Info;
  return <TokenCardList token={textInfo} />;
}

export function TokenCardListTextDiscovery() {
  const textDiscovery = tokens.Tokens.Light.Color.Text.Discovery;
  return <TokenCardList token={textDiscovery} />;
}

export function TokenCardListTextDiscoveryDark() {
  const textDiscovery = tokensDark.Tokens.Dark.Color.Text.Discovery;
  return <TokenCardList token={textDiscovery} />;
}




/* BORDER */

export function TokenCardListBorderNeutral() {
  const borderNeutral = tokens.Tokens.Light.Color.Border.Neutral;
  return <TokenCardList token={borderNeutral} />;
}

export function TokenCardListBorderNeutralDark() {
  const borderNeutral = tokensDark.Tokens.Dark.Color.Border.Neutral;
  return <TokenCardList token={borderNeutral} />;
}

export function TokenCardListBorderBrand() {
  const borderBrand = tokens.Tokens.Light.Color.Border.Brand;
  return <TokenCardList token={borderBrand} />;
}

export function TokenCardListBorderBrandDark() {
  const borderBrand = tokensDark.Tokens.Dark.Color.Border.Brand;
  return <TokenCardList token={borderBrand} />;
}

export function TokenCardListBorderDanger() {
  const borderDanger = tokens.Tokens.Light.Color.Border.Danger;
  return <TokenCardList token={borderDanger} />;
}

export function TokenCardListBorderDangerDark() {
  const borderDanger = tokensDark.Tokens.Dark.Color.Border.Danger;
  return <TokenCardList token={borderDanger} />;
}

export function TokenCardListBorderWarning() {
  const borderWarning = tokens.Tokens.Light.Color.Border.Warning;
  return <TokenCardList token={borderWarning} />;
}

export function TokenCardListBorderWarningDark() {
  const borderWarning = tokensDark.Tokens.Dark.Color.Border.Warning;
  return <TokenCardList token={borderWarning} />;
}

export function TokenCardListBorderSuccess() {
  const borderSuccess = tokens.Tokens.Light.Color.Border.Success;
  return <TokenCardList token={borderSuccess} />;
}

export function TokenCardListBorderSuccessDark() {
  const borderSuccess = tokensDark.Tokens.Dark.Color.Border.Success;
  return <TokenCardList token={borderSuccess} />;
}

export function TokenCardListBorderInfo() {
  const borderInfo = tokens.Tokens.Light.Color.Border.Info;
  return <TokenCardList token={borderInfo} />;
}

export function TokenCardListBorderInfoDark() {
  const borderInfo = tokensDark.Tokens.Dark.Color.Border.Info;
  return <TokenCardList token={borderInfo} />;
}

export function TokenCardListBorderDiscovery() {
  const borderDiscovery = tokens.Tokens.Light.Color.Border.Discovery;
  return <TokenCardList token={borderDiscovery} />;
}

export function TokenCardListBorderDiscoveryDark() {
  const borderDiscovery = tokensDark.Tokens.Dark.Color.Border.Discovery;
  return <TokenCardList token={borderDiscovery} />;
}




/* ICON */

export function TokenCardListIconNeutral() {
  const iconNeutral = tokens.Tokens.Light.Color.Icon.Neutral;
  return <TokenCardList token={iconNeutral} />;
}

export function TokenCardListIconNeutralDark() {
  const iconNeutral = tokensDark.Tokens.Dark.Color.Icon.Neutral;
  return <TokenCardList token={iconNeutral} />;
}

export function TokenCardListIconBrand() {
  const iconBrand = tokens.Tokens.Light.Color.Icon.Brand;
  return <TokenCardList token={iconBrand} />;
}

export function TokenCardListIconBrandDark() {
  const iconBrand = tokensDark.Tokens.Dark.Color.Icon.Brand;
  return <TokenCardList token={iconBrand} />;
}

export function TokenCardListIconDanger() {
  const iconDanger = tokens.Tokens.Light.Color.Icon.Danger;
  return <TokenCardList token={iconDanger} />;
}

export function TokenCardListIconDangerDark() {
  const iconDanger = tokensDark.Tokens.Dark.Color.Icon.Danger;
  return <TokenCardList token={iconDanger} />;
}

export function TokenCardListIconWarning() {
  const iconWarning = tokens.Tokens.Light.Color.Icon.Warning;
  return <TokenCardList token={iconWarning} />;
}

export function TokenCardListIconWarningDark() {
  const iconWarning = tokensDark.Tokens.Dark.Color.Icon.Warning;
  return <TokenCardList token={iconWarning} />;
}

export function TokenCardListIconSuccess() {
  const iconSuccess = tokens.Tokens.Light.Color.Icon.Success;
  return <TokenCardList token={iconSuccess} />;
}

export function TokenCardListIconSuccessDark() {
  const iconSuccess = tokensDark.Tokens.Dark.Color.Icon.Success;
  return <TokenCardList token={iconSuccess} />;
}

export function TokenCardListIconInfo() {
  const iconInfo = tokens.Tokens.Light.Color.Icon.Info;
  return <TokenCardList token={iconInfo} />;
}

export function TokenCardListIconInfoDark() {
  const iconInfo = tokensDark.Tokens.Dark.Color.Icon.Info;
  return <TokenCardList token={iconInfo} />;
}

export function TokenCardListIconDiscovery() {
  const iconDiscovery = tokens.Tokens.Light.Color.Icon.Discovery;
  return <TokenCardList token={iconDiscovery} />;
}

export function TokenCardListIconDiscoveryDark() {
  const iconDiscovery = tokensDark.Tokens.Dark.Color.Icon.Discovery;
  return <TokenCardList token={iconDiscovery} />;
}