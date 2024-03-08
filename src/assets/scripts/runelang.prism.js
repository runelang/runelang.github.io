(function (Prism) {
  Prism.languages.runelang = {
    comment: /\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
    function: {
      pattern: /(\bRitual\s+)[\w_]+/,
      lookbehind: true,
    },
    keyword:
      /\b(?:Quest|Odyssey|Vigil|Flagstone|Runestone|Countstone|elsewise|begin|end|returneth)\b/,
    boolean: /\b(?:Truth|Falsehood)\b/,
    operator: {
      pattern:
        /is written as|\bmatches\b|\bis\b|\bfrom\b|\bto\b|\band\b|\bor\b|\+\+|--|!=|<=|>=|==|&&|\|\||\?\:|[-+*/%<=>]/,
      lookbehind: false,
      greedy: true,
    },
    punctuation: /[{}[\];(),.:]/,
    variable: {
      pattern: /(\b(?:Flagstone|Runestone|Countstone)\s+)[\w_]+/,
      lookbehind: true,
    },
    number: /\b\d+(?:\.\d+)?\b/,
  };
})(Prism);
