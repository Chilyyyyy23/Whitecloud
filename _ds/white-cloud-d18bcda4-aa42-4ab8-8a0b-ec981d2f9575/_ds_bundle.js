/* @ds-bundle: {"format":4,"namespace":"WhiteCloudDesignSystem_d18bcd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Dot","sourcePath":"components/core/Dot.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tagline","sourcePath":"components/core/Tagline.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4dc8b233edb1","components/core/Button.jsx":"9fc33a44ac7f","components/core/Card.jsx":"d3f0663e33dc","components/core/Dot.jsx":"a557fdd62535","components/core/Logo.jsx":"5257def18f3a","components/core/SectionLabel.jsx":"29b73a29e556","components/core/Tagline.jsx":"e5beae181c2f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WhiteCloudDesignSystem_d18bcd = window.WhiteCloudDesignSystem_d18bcd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  color = 'blue',
  children
}) {
  const colorMap = {
    blue: {
      background: 'rgba(125,163,184,0.15)',
      color: '#5F8499'
    },
    grey: {
      background: 'rgba(92,103,112,0.10)',
      color: '#5C6770'
    },
    dark: {
      background: 'rgba(31,41,51,0.08)',
      color: '#1F2933'
    }
  };
  const c = colorMap[color] || colorMap.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: c.color,
      background: c.background,
      padding: '5px 12px',
      borderRadius: 999,
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'dark',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  disabled = false,
  children
}) {
  const sizeMap = {
    sm: {
      fontSize: 13,
      padding: '9px 22px'
    },
    md: {
      fontSize: 15,
      padding: '14px 30px'
    },
    lg: {
      fontSize: 16,
      padding: '18px 44px'
    }
  };
  const variantMap = {
    dark: {
      background: '#1F2933',
      color: '#FAFAF8',
      border: 'none'
    },
    light: {
      background: '#FAFAF8',
      color: '#1F2933',
      border: 'none'
    },
    ghost: {
      background: 'transparent',
      color: '#1F2933',
      border: '1px solid #1F2933'
    },
    'ghost-light': {
      background: 'transparent',
      color: '#FAFAF8',
      border: '1px solid rgba(250,250,248,0.35)'
    }
  };
  const s = sizeMap[size] || sizeMap.md;
  const v = variantMap[variant] || variantMap.dark;
  const baseStyle = {
    display: 'inline-block',
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontSize: s.fontSize,
    fontWeight: 500,
    padding: s.padding,
    borderRadius: 999,
    border: v.border || 'none',
    background: v.background,
    color: v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    lineHeight: 1,
    letterSpacing: '0.01em',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    transition: 'background 0.15s ease, opacity 0.15s ease'
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: rel,
      style: baseStyle
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: baseStyle
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  theme = 'light',
  padding = '40px 44px',
  children,
  style: extraStyle
}) {
  const themeMap = {
    light: {
      background: '#FAFAF8',
      border: '1px solid #E4E4DF'
    },
    dark: {
      background: '#1F2933',
      border: 'none'
    },
    cream: {
      background: '#F0EBE0',
      border: 'none'
    },
    'cream-light': {
      background: '#F3F1ED',
      border: 'none'
    },
    bg: {
      background: '#EDEBE6',
      border: 'none'
    }
  };
  const t = themeMap[theme] || themeMap.light;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.background,
      border: t.border,
      padding: padding,
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Dot.jsx
try { (() => {
function Dot({
  size = 5,
  color = '#7DA3B8'
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      width: size,
      height: size,
      background: color,
      borderRadius: '50%'
    }
  });
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dot.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const CLOUD_PATH = "M19.5 8.5C19.16 6.03 17.03 4.17 14.46 4.17C13.33 4.17 12.28 4.54 11.43 5.16C10.54 3.34 8.67 2.08 6.5 2.08C3.46 2.08 1 4.54 1 7.58C1 7.72 1.01 7.85 1.02 7.98C0.41 8.57 0.04 9.39 0.04 10.29C0.04 12.09 1.5 13.54 3.29 13.54H19.71C21.5 13.54 22.96 12.09 22.96 10.29C22.96 9.39 22.59 8.57 21.98 7.98Z";
function Logo({
  size = 44,
  theme = 'dark',
  showWordmark = true
}) {
  const isBlue = theme === 'blue';
  const isDark = theme === 'dark';
  const stroke = isBlue ? 'white' : '#7DA3B8';
  const fill = isBlue ? 'white' : '#7DA3B8';
  const fillOpacity = isBlue ? 0.28 : isDark ? 0.22 : 0.18;
  const wordmarkColor = isDark ? '#FAFAF8' : isBlue ? '#FAFAF8' : '#1F2933';
  const svgH = Math.round(size * (18 / 24));
  const gap = Math.round(size * 0.27);
  const fontSize = Math.round(size * 0.295);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: gap
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: svgH,
    viewBox: "0 0 24 18",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: CLOUD_PATH,
    stroke: stroke,
    strokeWidth: "0.85",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    fill: fill,
    fillOpacity: fillOpacity
  })), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: fontSize,
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: wordmarkColor,
      textTransform: 'uppercase',
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased'
    }
  }, "WHITE CLOUD"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  number = '01',
  label = '',
  theme = 'light'
}) {
  const dividerColor = theme === 'dark' ? '#2E3D4A' : '#E4E4DF';
  const labelColor = theme === 'dark' ? '#5C6770' : '#8A929B';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: 12,
      fontWeight: 600,
      color: '#5F8499',
      letterSpacing: '0.04em',
      lineHeight: 1
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 1,
      background: dividerColor,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: labelColor,
      textTransform: 'uppercase',
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased'
    }
  }, label));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tagline.jsx
try { (() => {
function Tagline({
  size = 22,
  theme = 'dark'
}) {
  const baseColor = theme === 'dark' ? '#8A929B' : '#5C6770';
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: size,
      fontWeight: 300,
      fontStyle: 'italic',
      color: baseColor,
      lineHeight: 1.3,
      WebkitFontSmoothing: 'antialiased'
    }
  }, "El est\xE1ndar", ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#7DA3B8'
    }
  }, "invisible."));
}
Object.assign(__ds_scope, { Tagline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tagline.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dot = __ds_scope.Dot;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tagline = __ds_scope.Tagline;

})();
