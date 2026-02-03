/**
 * Ender Code Theme
 *
 * Custom Shiki theme matching the site's warm color palette.
 * Colors correspond to CSS variables in global.css:
 *
 * --color-code-bg: #262420
 * --color-code-text: #f5f1eb
 * --color-code-comment: #78746e
 * --color-code-string: #e9a86c
 * --color-code-keyword: #e94d1f
 * --color-code-function: #f5f1eb
 * --color-code-variable: #d4d0ca
 * --color-code-punctuation: #a8a49e
 */
export const enderTheme = {
  name: 'ender-dark',
  type: 'dark' as const,
  colors: {
    'editor.background': '#262420',
    'editor.foreground': '#f5f1eb',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#78746e', fontStyle: 'italic' }
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#e9a86c' }
    },
    {
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: '#e94d1f' }
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#e94d1f' }
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#f5f1eb' }
    },
    {
      scope: ['variable', 'variable.other'],
      settings: { foreground: '#d4d0ca' }
    },
    {
      scope: ['entity.name.tag', 'support.class'],
      settings: { foreground: '#e94d1f' }
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#e9a86c' }
    },
    {
      scope: ['meta.property-name', 'support.type.property-name'],
      settings: { foreground: '#d4d0ca' }
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#a8a49e' }
    },
    {
      scope: ['source.shell', 'keyword.operator'],
      settings: { foreground: '#f5f1eb' }
    }
  ]
}

/**
 * Color tokens for use in React/other frameworks
 * that don't use Shiki but need matching colors
 */
export const codeColors = {
  bg: '#262420',
  text: '#f5f1eb',
  comment: '#78746e',
  string: '#e9a86c',
  keyword: '#e94d1f',
  function: '#f5f1eb',
  variable: '#d4d0ca',
  punctuation: '#a8a49e',
}
