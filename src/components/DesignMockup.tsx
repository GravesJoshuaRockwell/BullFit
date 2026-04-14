"use client";

interface DesignMockupProps {
  id: string;
  name: string;
}

export function DesignMockup({ id, name }: DesignMockupProps) {
  const mockups: { [key: string]: React.ReactNode } = {
    // Women's Swimwear
    "W-SW-01": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black bikini top */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#000" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#000" />
        {/* Red trim */}
        <path d="M 50 80 Q 70 60 90 80" stroke="#DC2626" strokeWidth="3" fill="none" />
        <path d="M 110 80 Q 130 60 150 80" stroke="#DC2626" strokeWidth="3" fill="none" />
        {/* Bull logo on bottom right */}
        <text x="140" y="180" fontSize="24" fill="#DC2626" fontWeight="bold">⚔️</text>
        {/* Bikini bottom */}
        <rect x="60" y="130" width="80" height="70" rx="5" fill="#000" />
        <rect x="65" y="135" width="70" height="15" fill="#DC2626" opacity="0.3" />
      </svg>
    ),
    "W-SW-02": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Burnt orange top */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#B45309" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#B45309" />
        {/* Darker orange accent */}
        <ellipse cx="70" cy="100" rx="30" ry="25" fill="#92400E" opacity="0.6" />
        <ellipse cx="130" cy="100" rx="30" ry="25" fill="#92400E" opacity="0.6" />
        {/* High-waist bottom */}
        <rect x="50" y="130" width="100" height="80" rx="5" fill="#B45309" />
        <rect x="50" y="130" width="100" height="20" fill="#92400E" />
      </svg>
    ),
    "W-SW-03": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black one-piece */}
        <path d="M 60 60 Q 100 50 140 60 L 130 220 Q 100 230 70 220 Z" fill="#000" />
        {/* Oval cutout back (shown as lighter area) */}
        <ellipse cx="100" cy="140" rx="25" ry="40" fill="#333" />
        {/* Red accent line */}
        <line x1="60" y1="100" x2="140" y2="100" stroke="#DC2626" strokeWidth="2" />
      </svg>
    ),
    "W-SW-04": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Coral base */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#F97316" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#F97316" />
        {/* Botanical print pattern */}
        <circle cx="60" cy="70" r="8" fill="#10B981" opacity="0.7" />
        <circle cx="85" cy="85" r="6" fill="#10B981" opacity="0.7" />
        <circle cx="140" cy="75" r="8" fill="#10B981" opacity="0.7" />
        {/* Bottom */}
        <rect x="50" y="130" width="100" height="80" rx="5" fill="#F97316" />
        <circle cx="70" cy="150" r="7" fill="#10B981" opacity="0.7" />
        <circle cx="130" cy="165" r="7" fill="#10B981" opacity="0.7" />
      </svg>
    ),
    "W-SW-05": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* White-on-white camo pattern */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#F5F5F5" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#F5F5F5" />
        {/* Camo shapes */}
        <path d="M 50 70 Q 60 65 70 75" stroke="#E5E5E5" strokeWidth="4" fill="none" />
        <path d="M 110 85 Q 125 80 135 95" stroke="#E5E5E5" strokeWidth="4" fill="none" />
        {/* Red ties */}
        <line x1="50" y1="95" x2="70" y2="100" stroke="#DC2626" strokeWidth="2" />
        <line x1="130" y1="100" x2="150" y2="95" stroke="#DC2626" strokeWidth="2" />
        {/* Bottom */}
        <rect x="50" y="130" width="100" height="80" rx="5" fill="#F5F5F5" />
      </svg>
    ),
    "W-SW-06": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Neon blue top */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#0EA5E9" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#0EA5E9" />
        {/* Neon coral accent */}
        <ellipse cx="70" cy="100" rx="25" ry="30" fill="#FF6B6B" opacity="0.8" />
        <ellipse cx="130" cy="100" rx="25" ry="30" fill="#FF6B6B" opacity="0.8" />
        {/* Neon lime trim */}
        <rect x="50" y="125" width="100" height="8" fill="#CCFF00" />
        {/* Ribbed bottom */}
        <rect x="50" y="138" width="100" height="75" rx="5" fill="#0EA5E9" />
        <line x1="60" y1="145" x2="140" y2="145" stroke="#FF6B6B" strokeWidth="2" opacity="0.5" />
        <line x1="60" y1="160" x2="140" y2="160" stroke="#FF6B6B" strokeWidth="2" opacity="0.5" />
      </svg>
    ),

    // Women's Gym
    "W-GYM-01": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Sports bra - black */}
        <ellipse cx="70" cy="70" rx="32" ry="40" fill="#000" />
        <ellipse cx="130" cy="70" rx="32" ry="40" fill="#000" />
        {/* Red repeat pattern */}
        <circle cx="60" cy="60" r="3" fill="#DC2626" />
        <circle cx="85" cy="65" r="3" fill="#DC2626" />
        <circle cx="120" cy="60" r="3" fill="#DC2626" />
        <circle cx="140" cy="70" r="3" fill="#DC2626" />
        {/* Legging - black with red accent */}
        <rect x="55" y="115" width="90" height="100" rx="5" fill="#000" />
        <rect x="55" y="115" width="90" height="20" fill="#DC2626" opacity="0.5" />
      </svg>
    ),
    "W-GYM-02": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black legging */}
        <rect x="50" y="60" width="100" height="150" rx="8" fill="#000" />
        {/* Lightning bolt pattern */}
        <path d="M 100 80 L 110 110 L 95 110 L 115 150 L 90 130 L 105 100 Z" fill="#FFD700" opacity="0.8" />
        <path d="M 75 120 L 85 150 L 70 140 L 90 180 Z" fill="#FFD700" opacity="0.6" />
      </svg>
    ),
    "W-GYM-03": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black sports bra */}
        <ellipse cx="70" cy="80" rx="35" ry="45" fill="#000" />
        <ellipse cx="130" cy="80" rx="35" ry="45" fill="#000" />
        {/* Mesh side panels (shown as lighter area) */}
        <rect x="40" y="70" width="15" height="60" fill="#444" opacity="0.6" />
        <rect x="145" y="70" width="15" height="60" fill="#444" opacity="0.6" />
        {/* Mesh pattern */}
        <circle cx="47" cy="80" r="2" fill="#888" />
        <circle cx="47" cy="95" r="2" fill="#888" />
        <circle cx="152" cy="85" r="2" fill="#888" />
      </svg>
    ),
    "W-GYM-04": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Tan/beige crop */}
        <path d="M 60 70 Q 100 50 140 70 L 135 150 Q 100 160 65 150 Z" fill="#C4A57B" />
        {/* Camo pattern */}
        <path d="M 70 80 Q 75 85 80 82" stroke="#92400E" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 110 90 Q 118 88 120 95" stroke="#92400E" strokeWidth="2" fill="none" opacity="0.6" />
      </svg>
    ),
    "W-GYM-05": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Coral biker shorts */}
        <rect x="55" y="120" width="90" height="90" rx="5" fill="#F97316" />
        {/* Botanical print match */}
        <circle cx="75" cy="140" r="6" fill="#10B981" opacity="0.7" />
        <circle cx="130" cy="165" r="6" fill="#10B981" opacity="0.7" />
      </svg>
    ),
    "W-GYM-06": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* White legging */}
        <rect x="50" y="80" width="100" height="120" rx="5" fill="#F5F5F5" />
        {/* White sports bra */}
        <ellipse cx="70" cy="60" rx="32" ry="35" fill="#F5F5F5" />
        <ellipse cx="130" cy="60" rx="32" ry="35" fill="#F5F5F5" />
        {/* Tonal camo pattern */}
        <path d="M 60 70 Q 70 68 80 75" stroke="#E5E5E5" strokeWidth="2" fill="none" />
        {/* Jacket outline */}
        <rect x="40" y="75" width="25" height="100" rx="3" fill="none" stroke="#E5E5E5" strokeWidth="2" />
        <rect x="135" y="75" width="25" height="100" rx="3" fill="none" stroke="#E5E5E5" strokeWidth="2" />
      </svg>
    ),

    // Men's Gym Shorts
    "M-GYM-01": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black shorts with red trim */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#000" />
        <line x1="55" y1="135" x2="145" y2="135" stroke="#DC2626" strokeWidth="2" />
        {/* Waistband */}
        <rect x="55" y="115" width="90" height="8" fill="#C7C7C7" />
      </svg>
    ),
    "M-GYM-02": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black shorts */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#000" />
        {/* Gold lightning pattern */}
        <path d="M 80 130 L 90 160 L 75 150 L 95 190" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.9" />
        <path d="M 120 140 L 130 170 L 110 160 L 135 200" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.9" />
      </svg>
    ),
    "M-GYM-03": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Camo shorts */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#4B5563" />
        {/* Skull camo pattern */}
        <circle cx="85" cy="150" r="12" fill="#2D3748" opacity="0.8" />
        <circle cx="115" cy="160" r="12" fill="#2D3748" opacity="0.8" />
        <path d="M 70 155 L 75 160 L 65 160 Z" fill="#2D3748" />
      </svg>
    ),
    "M-GYM-04": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Minimal black shorts */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#000" />
        {/* Subtle tonal logo area */}
        <circle cx="100" cy="155" r="8" fill="#333" />
      </svg>
    ),
    "M-GYM-05": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Heather gray casual shorts */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#A1A1A1" />
        {/* BullFit branding area */}
        <text x="100" y="160" fontSize="14" fill="#4B5563" fontWeight="bold" textAnchor="middle">
          BullFit
        </text>
      </svg>
    ),
    "M-GYM-06": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Navy base */}
        <rect x="55" y="120" width="90" height="80" rx="5" fill="#001F3F" />
        {/* Galaxy/nebula gradient effect */}
        <defs>
          <radialGradient id="nebula">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#1F2937" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="150" rx="35" ry="30" fill="url(#nebula)" opacity="0.7" />
        <circle cx="75" cy="140" r="4" fill="#60A5FA" />
        <circle cx="125" cy="160" r="3" fill="#34D399" />
      </svg>
    ),

    // Men's Swim Shorts
    "M-SW-01": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black swim trunks */}
        <rect x="50" y="110" width="100" height="100" rx="8" fill="#000" />
        {/* Bull repeat pattern (tonal) */}
        <text x="70" y="145" fontSize="16" fill="#333" opacity="0.5">
          ⚔️
        </text>
        <text x="115" y="175" fontSize="16" fill="#333" opacity="0.5">
          ⚔️
        </text>
        {/* Waistband */}
        <rect x="50" y="105" width="100" height="8" fill="#666" />
      </svg>
    ),
    "M-SW-02": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Pink/aqua/white color block */}
        <rect x="50" y="110" width="50" height="100" rx="8" fill="#EC4899" />
        <rect x="100" y="110" width="50" height="100" rx="8" fill="#06B6D4" />
        {/* White accent stripe */}
        <line x1="50" y1="130" x2="150" y2="130" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    ),
    "M-SW-03": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Tropical print base */}
        <rect x="50" y="110" width="100" height="100" rx="8" fill="#10B981" />
        {/* Tropical flowers/pattern */}
        <circle cx="75" cy="135" r="8" fill="#FCA5A5" />
        <circle cx="125" cy="150" r="8" fill="#FCA5A5" />
        <path d="M 90 160 L 95 170 L 85 175 Z" fill="#F59E0B" />
        <path d="M 110 140 L 115 150 L 105 155 Z" fill="#F59E0B" />
      </svg>
    ),
    "M-SW-04": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Warrior art panel (left) */}
        <rect x="50" y="110" width="50" height="100" rx="8" fill="#4B2C20" />
        <path d="M 60 130 L 75 150 L 65 165 Z" fill="#D97706" opacity="0.7" />
        {/* Solid black (right) */}
        <rect x="100" y="110" width="50" height="100" rx="8" fill="#000" />
      </svg>
    ),
    "M-SW-05": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Clean minimal design */}
        <rect x="50" y="110" width="100" height="100" rx="8" fill="#1F2937" />
        {/* Simple logo area */}
        <rect x="85" y="145" width="30" height="30" rx="3" fill="#6B7280" opacity="0.6" />
      </svg>
    ),
    "M-SW-06": (
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <rect width="200" height="300" fill="#1a1a1a" />
        {/* Black with lightning pattern */}
        <rect x="50" y="110" width="100" height="100" rx="8" fill="#000" />
        {/* Lightning bolts */}
        <path d="M 85 130 L 95 160 L 80 150 L 100 190" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M 120 140 L 130 170 L 110 160 L 135 200" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.8" />
      </svg>
    ),
  };

  return (
    <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded border border-gray-700 overflow-hidden">
      {mockups[id] || (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <span className="text-4xl">👕</span>
        </div>
      )}
    </div>
  );
}
