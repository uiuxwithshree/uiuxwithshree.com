export default function TornEdge({ bgColor = 'white' }: { bgColor?: string }) {
  /*
    Place this at the bottom of Hero section.
    Hero section MUST have:
      - `relative` class (already has it)
      - `overflow-visible` instead of overflow-hidden
    
    translateY(98%) pushes it below the hero boundary so it
    overlaps the next section — real torn page illusion.
  */
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 z-30 w-full"
      style={{ transform: 'translateY(98%)' }}
    >
      <svg
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 'clamp(50px, 7vw, 90px)' }}
      >
        <defs>
          <filter id="torn-shadow" x="-5%" y="-80%" width="110%" height="250%">
            <feDropShadow dx="0" dy="-4" stdDeviation="5" floodColor="rgba(0,0,0,0.09)" />
          </filter>
        </defs>

        {/*
          Cubic bezier curves with asymmetric control points —
          no two bumps are the same size or rhythm, mimicking real torn paper.
          Fills all the way to y=90 to cover everything below the tear.
        */}
        <path
          filter="url(#torn-shadow)"
          fill={bgColor}
          d="
            M0,52
            C15,44 22,62 38,48
            C50,37 58,55 74,42
            C88,31 96,58 114,44
            C126,34 136,62 154,46
            C168,33 176,54 196,40
            C210,29 220,60 238,45
            C252,33 260,56 278,41
            C294,28 302,58 322,43
            C336,31 346,62 366,46
            C380,33 390,56 408,40
            C424,26 432,60 452,44
            C466,31 476,57 494,41
            C510,27 518,60 538,44
            C554,30 562,57 580,42
            C596,28 606,61 626,44
            C640,30 650,59 670,43
            C686,29 694,58 714,42
            C730,27 740,62 760,44
            C774,29 784,60 804,43
            C820,28 830,61 850,44
            C864,30 874,58 894,42
            C910,27 920,62 940,45
            C954,31 964,58 982,42
            C998,27 1008,60 1028,43
            C1042,28 1052,62 1072,45
            C1088,30 1096,57 1116,41
            C1132,27 1142,61 1162,44
            C1176,30 1186,58 1204,41
            C1220,26 1230,60 1250,43
            C1264,29 1274,62 1294,46
            C1308,32 1318,58 1336,42
            C1350,28 1362,60 1380,44
            C1394,31 1412,56 1440,46
            L1440,90 L0,90 Z
          "
        />
      </svg>
    </div>
  )
}