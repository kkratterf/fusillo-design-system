// Import core
// Import customs
import tokens from '../tokens/tokens.js';

export const TokensSpace = () => (
  <>
    {
      <table>
        <thead>
          <tr>
            <th align="left">Token and description</th>
            <th align="right">
              <span className="pr-4">Value</span>
            </th>
            <th className="hidden sm:table-cell" align="left">
              Preview
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens.Tokens.Light.Space).map(
            ([tokenName, tokenInfo]) => (
              <tr key={tokenName}>
                <td className="w-full">
                  <div className="cell-tokens-name">
                    <code className="font-medium">{tokenName}</code>
                    <div className="cell-description-tokens">
                      {tokenInfo.description}
                    </div>
                  </div>
                </td>
                <td align="right">
                  <div className="cell-value-scale">{tokenInfo.value}</div>
                </td>
                <td className="hidden sm:table-cell">
                  <div
                    className="cell-preview-space"
                    style={{ width: tokenInfo.value }}
                  ></div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    }
  </>
);
