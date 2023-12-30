// Import core
// Import customs
import tokens from '@/docs/tokens/tokens.js';

export const TokensColor = ({ type, color }) => (
  <>
    {
      <table>
        <thead>
          <tr>
            <th align="left">Token and description</th>
            <th align="left">Light</th>
            <th align="left">Dark</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens.Tokens.Light.Color[type][color]).map(
            ([tokenName, tokenLightInfo]) => {
              const tokenDarkInfo =
                tokens.Tokens.Dark.Color[type][color][tokenName];
              return (
                <tr key={tokenName}>
                  <td className="w-full">
                    <div className="cell-tokens-name">
                      <code className="font-medium">{tokenName}</code>
                      <div className="cell-description-tokens">
                        {tokenLightInfo.description}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cell-tokens">
                      <div
                        className="cell-preview-tokens nx-border nx-border-gray-300 dark:nx-border-gray-600"
                        style={{ backgroundColor: tokenLightInfo.value }}
                      ></div>
                      <div className="cell-token-tokens">
                        <code>{`${tokenLightInfo.original.value
                          .split('.')
                          .pop()
                          .slice(0, -1)}`}</code>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cell-tokens">
                      <div
                        className="cell-preview-tokens nx-border nx-border-gray-300 dark:nx-border-gray-600"
                        style={{ backgroundColor: tokenDarkInfo.value }}
                      ></div>
                      <div className="cell-token-tokens">
                        <code>{`${tokenDarkInfo.original.value
                          .split('.')
                          .pop()
                          .slice(0, -1)}`}</code>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    }
  </>
);
