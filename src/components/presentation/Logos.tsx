export function NuageLogo({ width = 160 }: { width?: number }) {
  const h = Math.round(width * 0.38);
  return (
    <svg width={width} height={h} viewBox="0 0 400 152" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 120 L10 20 L52 120 L52 20" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M72 20 L72 90 Q72 120 100 120 Q128 120 128 90 L128 20" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <g transform="translate(148, 14)">
        <polygon points="36,0 72,106 0,106" stroke="white" strokeWidth="4.5" fill="none" strokeLinejoin="round"/>
        <line x1="14" y1="62" x2="58" y2="62" stroke="white" strokeWidth="3.5" opacity="0.9"/>
        <line x1="18" y1="73" x2="54" y2="73" stroke="white" strokeWidth="3" opacity="0.75"/>
        <line x1="22" y1="84" x2="50" y2="84" stroke="white" strokeWidth="2.5" opacity="0.6"/>
        <line x1="26" y1="95" x2="46" y2="95" stroke="white" strokeWidth="2" opacity="0.45"/>
      </g>
      <path d="M252 50 Q232 20 210 20 Q182 20 182 70 Q182 120 210 120 Q232 120 252 100 L252 75 L228 75" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M270 20 L270 120 M270 20 L320 20 M270 70 L308 70 M270 120 L320 120" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <text x="272" y="148" fontFamily="Georgia, serif" fontSize="18" fill="white" opacity="0.55" fontStyle="italic">IT's everywhere.</text>
    </svg>
  );
}

export function AwsPartnerLogo({ width = 260 }: { width?: number }) {
  const h = Math.round(width * 0.38);
  return (
    <svg width={width} height={h} viewBox="0 0 520 198" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="90" fontFamily="Amazon Ember, Arial, sans-serif" fontWeight="900" fontSize="88" fill="white" letterSpacing="-2">aws</text>
      <path d="M12 118 Q90 158 178 130" stroke="#FF9900" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M168 122 L182 130 L170 140" stroke="#FF9900" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="196" y="72" fontFamily="Arial, sans-serif" fontSize="22" fill="white" opacity="0.85">partner</text>
      <text x="196" y="100" fontFamily="Arial, sans-serif" fontSize="22" fill="white" opacity="0.85">network</text>
      <line x1="310" y1="30" x2="310" y2="168" stroke="white" strokeWidth="1.5" opacity="0.4"/>
      <text x="326" y="62" fontFamily="Arial, sans-serif" fontSize="20" fill="white" opacity="0.7">Advanced</text>
      <text x="326" y="100" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="white">Consulting</text>
      <text x="326" y="136" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="white">Partner</text>
    </svg>
  );
}

export function AwsLogo({ width = 80 }: { width?: number }) {
  const h = Math.round(width * 0.62);
  return (
    <svg width={width} height={h} viewBox="0 0 100 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="38" fontFamily="Amazon Ember, Arial, sans-serif" fontWeight="900" fontSize="40" fill="white" letterSpacing="-1">aws</text>
      <path d="M8 50 Q50 68 88 52" stroke="#FF9900" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
      <path d="M82 47 L91 52 L82 57" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
