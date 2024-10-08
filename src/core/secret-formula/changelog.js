export const changelog = [
  /**
   * @template
   * {
   *  @property {Array: Number} date  Date of the release of the update, stored in order of year-month-date.
   *  @property {String} name         Name of the update entry. Optional.
   *  @property {Number} id           Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info  Text body of information for the entry.
   * }
   */
  {
    date: [2024, 5, 2],
    name: "Celebrate Android Reality Update",
    info: `
<i>Note: These changes are from base game, added to this mod on July 6, 2024.</i>
<br>
<br>
Congratulations for the release of Android Reality Update! In order to celebrate this big milestone, we implemented
some changes mainly based on the player comments and feedback from the Android version.
<br>
<br>
<b><i>Once again, thank you so much for playing Antimatter Dimensions!</i></b>
<br>
<br>
<b>Major things:</b><br>
<ul>
<li>Added newly joined Android testers in credits</li>
<li>Added a new perk</li>
</ul>
<br>
<b>Additional QoL and information:</b><br>
<ul>
<li>Study Presets now carry over when you start over, and Companion Glyph will not leave you too</li>
<li>Swapped cel2 and Perk shop unlocks</li>
<li>TS131 now has an additional effect</li>
<li>Enter key now works in autobuyer inputs to apply changes</li>
<li>Reward of achievement 118 now improves Sacrifice autobuyer</li>
<li>Glyph preset settings are now including/increased by default</li>
<li>Glyph recycle now checks the Glyph effects with Glyph level set in Reality autobuyer</li>
<li>Added a new cel7 upgrade mimicking EM40</li>
<li>Added a show all tabs button in tab modify modal</li>
<li>Added a display when Auto EC is disabled by requirement lock</li>
<li>Added an option to swap symbol and border colors on Glyphs</li>
<li>Added a functionality to change the visible resource on Modern UI</li>
<li>Added a new modal for adjusting exponent notation formatting more flexibly</li>
<li>Automator now ignores blackhole command while it is being disabled</li>
<li>EM1000 requirement is now Eternity in 5 seconds or less</li>
<li>Study tree will now automatically respec when exiting an EC</li>
<li>Disabled a rebuyable TP upgrade in cel7, because it caused confusion to many players</li>
<li>Rebalanced 3rd milestone of 5th bar due to the above upgrade deletion</li>
<li>Various minor text changes</li>
</ul>
<br>
<b>Minor UI Changes:</b><br>
<ul>
<li>Adjusted perk layouts for new DAB perk</li>
<li>Made Glyph sorting order consistent in showcase modal</li>
<li>Added light and dark Glyph rarity colorblind palettes</li>
<li>Adjusted various minor UI glitches</li>
</ul>
<br>
<b>Bugfixes:</b><br>
<ul>
<li>Fixed link to Synergism</li>
<li>Fixed tooltip in TD tab</li>
<li>Fixed offline progress bug</li>
<li>Fixed Glyph Rarity color bug in popup</li>
<li>Fixed automator pause command ticking wrongly</li>
<li>Fixed a NaN display bug with certain autobuyer inputs</li>
<li>Fixed some buggy behavior for saves without START perk</li>
<li>Fixed TS192 gave console error while it is being disabled</li>
<li>Fixed wording on cel7 dilation modal claiming that EP will not be gained</li>
<li>Fixed ! not being parsed properly when used in study strings in automator scripts</li>
<li>Fixed Max All TD button not behaving properly with an active Telemechanical Process lock</li>
<li>Fixed Effarig Glyphs in presets were messed up bug because of the internal format change</li>
<li>Fixed Glyph preset did not pick the highest level Glyphs while level:increased is selected</li>
<li>Fixed remnant count not being properly reset when entering cel7 dilation with animation on</li>
<li>Fixed EC TT cost being calculated incorrectly when using EC! functionality and tree respec simultaneously</li>
<li>Fixed constant data not being properly carried over on full completion and migrated data on saves
affected by this bug</li>
<li>Removed duplicated achievement page text on Design theme</li>
<li>Prevented offline progress from going above the 1e6 limit that the options menu has</li>
<li>Fixed tpyo of the century</li>
</ul>
<br>
`
  },
  {
    date: [2024, 6, 28],
    name: "It's done",
    info: `
    <b>Pelle is done. Enjoy!</b>
    <b>With this, the mod is content complete!</li>
    <br>
    <br>
    <b>New content:</b>
    <ul>
    <li>Row 18 achievements, totally new.</li>
    <li>Later stages of Pelle rebalanced.</li>
    </ul>
    <br>
    <br>
    <b>Other changes: </b>
    <ul>
    <li>31/8: Fixed some instances of Eternity Challenge completions not being properly rounded
    with Achievement 185 (thank you S34n for reporting!).</li>
    <li>Achievement 33 gives x2 ➜ x3 Infinities with Infinities longer than 30 seconds.</li>
    <li>19/7: Minor text fixes (thank you James103 for reporting!).</li>
    <li>Changed behavior of what h2p tab to show by default.</li>
    <li>Achievement 154 has a 10% ➜ 25% to give x2 Realities and Perk Points.</li>
    <li>11/7: Enhancement 55 is free.</li>
    <li>Enhancement 61 no longer increases Dilation bulk amounts, instead it increases AD's 
    autobuyer speed so that it's actually instantaneous instead of 0.05s.</li>
    <li>Enhancement 131 now boosts Infinities by x100,000.</li>
    <li>Added more information in the How to Play section for Enhancements and Cursed rows.</li>
    <li>10/7: There's now a dedicated How to Play section for Enhancements and Cursed rows.</li>
    <li>Minor text changes regarding Enhancements.</li>
    <li>6/7: Recent base game improvements have arrived! Look at the next Changelog entry (copied
    from base game) for details.</li>
    <li>29/6: Fixed multiplier tab entry for Antimatter Dimensions breaking with Continuum.</li>
    <li>Rifts now drain 3% ➜ 4% of their respective resource each second.</li>
    <li>Fixed power effects applied on Replicanti Galaxy cost messing with its autobuyer.</li>
    <li>Savefiles with Achievement 146 automatically unlock the ACHEH perk if not obtained.</li>
    </ul>
    `
  },
  {
    date: [2024, 4, 26],
    name: "Better late than never",
    info: `
    <b>It's time to finish this</b>
    <br>
    <br>
    <b>New content: Look at next entry</b>
    <br>
    <br>
    <b>Changes: </b>
    <ul>
    <li>28/4: Implemented recent base game improvements, including:
      <ul>
      <li>Updated credits</li>
      <li>Improved loading Glyph presets</li>
      <li>Improved recycling</li>
      <li>And fixed typos</li>
      </ul>
    </li>
    <li>26/4: Added indications for Achievements 47 and 133 to indicate how to unlock their Enhancements.</li>
    </ul>
    `
  },
  {
    date: [2023, 11, 30],
    name: "Have better life quality",
    info: `
    <b>A bunch of QoL before the Pelle update</b>
    <br>
    <br>
    <b>Changes: </b>
    <ul>
    <li>1/12: Curses are now saved in Enhancement presets!</li>
    <li>2/12: You can now lock enhancements, preventing most respec instances 
    (thank you Legendis for the suggestion).</li>
    <li>15/12: You can now link Glyph presets with Enhancement presets, loading both simultaneously.
    This is unlocked at Ra, with Effarig level 10.</li>
    <li>15/12: You can now see what Enhancements you had active in records. This includes V-Achievements.</li>
    <li>8/1: There's a new Secret Achievement 33.</li>
    <li>12/2: Implemented CURSE ROWS command.</li>
    <br>
    30/11
    <li>Slightly improved performance in the Achievements tab.</li>
    <li>Slightly improved performance when reading presets.</li>
    <li>When opening an edit Enhancement preset modal the preview now works correctly.</li>
    <li>Potentially fixed bug where you could prematurely see Eternity Challenges by pressing its button
    in the Time Study tree. Let me know if there's odd behaviour!</li>
    <li>Fixed Enhanced Achievement 136 preventing exiting Dilation through means other than the button at
    the Dilation tab.</li>
    <li>Achievement 42's effect scales slightly better.</li>
    <li>Massively improved performance in Multiplier Tab when viewing Antimatter Dimensions, 
    Infinity Dimensions and Time Dimensions.</li>
    1/12
    <li>Fixed Galaxies giving errors if you had Cursed Row 1 active while all Dimensions were disabled in
    Lai'tela's Reality (Thank you JamesM for reporting).</li>
    <li>Enhanced Achievement 67's base multiplier is now 1e250 ➜ 1e70, but now takes into account the square
    of the amount of Celestial Realities you have beaten.</li>
    <li>The 'Respec and Load' button in Enhancement presets now Enhances (and curses) Achievements right 
    before a Reality.</li>
    2/12
    <li>Fixed Enhancement preview not updating curses while typing.</li>
    <li>Fixed 'Respec and Load' buttons not working if there's an active curse.</li>
    <li>Fixed Galaxies giving errors if you had Cursed Row 2 active while all Dimensions were disabled in
    Lai'tela's Reality (Thank you FIQ and JamesM for this issue).</li>
    <li>Fixed Continuum Dimension Boosts not accounting for free Dimensions from Enhanced Achievement 53.</li>
    <li>Enhanced Achievement 133 no longer requires unlocking 4 Triad Studies, but it can't buy the 
    Reality Study anymore.</li>
    15/12
    <li>Added a 7th Enhancement preset slot.</li>
    <li>Respec and load functionality for Enhancement presets now works even if you can't Reality. In this case 
    it'd be the same as starting the Reality over.</li>
    7/1
    <li>Fixed Enhanced Achievement 121 only allowing 1 purchase without Enhanced Achievement 41 (Thank you 'HRH' for reporting).</li>
    <li>Standarized most Enhancements' minimum values to be x1000.</li>
    <li>Changed some Achievement and Enhancement descriptions to be shorter.</li>
    <li>Fixed Continous Dim Boosts breaking inside normal Challenge 10 (Thank you JamesM for reporting).</li>
    <li>Achievement 33 now gives x2 Infinities after 60 ➜ 30 seconds, and its description now says 
    when it's active (applies to 87 too).</li>
    8/1
    <li>There's an additional way to unlock Secret Achievement 34.</li>
    <li>Improved Achievement 76's image.</li>
    <li>Improved performance in Achievements tab.</li>
    16/1
    <li>Fixed a bug where you could respec the requirements of Enhancements while keeping it intact if you lock only them
    (Thank you 'HRH' for reporting).</li>
    <li>Locking an Enhancement with prerequisites now also automatically locks those prerequisites.</li>
    <li>Un-locking an Enhancement that others depend on will also un-lock those Enhancements.</li>
    <li>Fixed Enhanced Achievement 118 not calling the Sacrifice Autobuyer every tick (Thank you 'HRH' for reporting).</li>
    <li>Having Achievement 52 now makes autobuyers and manual actions buy 10 Dimensions as soon as 1 can be afforded.</li>
    <li>Enhanced Achievement 108 now makes sure you have at least 1.8e308 Replicanti ➜ your Replicanti cap without TS192.</li>
    18/1
    <li>Fixed Achievement 152 causing issues when you don't have 5 glyph slots (Thank you Lapis for reporting)
    (Hopefully this doesn't cause more bugs).</li>
    <li>Enhanced Achievement 135's effect is now raised by ^1.1.</li>
    12/2
    <li>Fixed ENHANCE LOAD ID 7 Automator command not working.</li>
    <li>Note: Individual Enhancement respecs in Automator won't be implemented as it's too niche and only 
    complicates the code. Ask me if you believe this feature is necessary.</li>
    14/2
    <li>Row 1 Enhancements no longer set their respective AD's initial cost to 1 AM.</li>
    <li>Enhanced Achievement 11 now reduces post-infinity cost scaling for ADs by -0.01 with the entire row ➜
    -0.0015 for every Enhancement in the row (a max of -0.012).</li>
    <li>Achievement 158 makes Black Hole upgrades no longer spend Reality Machines.</li>
    <li>Achievement 167 makes Reality Upgrades no longer spend Reality Machines.</li>
    <li>Fixed Ra's Reality setting Dimension Boosts to 0 (Thank you BsonHK for reporting!).</li>
    <li>Fixed the Fast Forward and Skip buttons for News ticker appearing above everything, including the credits 
    (Thank you Arphimigon for reporting!), and fixed their position in Aero theme (Thank you antitruth for reporting!)</li>
    17/2
    <li>Added a credits section for this mod.</li>
    <li>Fixed Infinity Challenge 1 unlocking earlier than intended (Thank you Jirachi93 for making me notice).</li>
    <li>Enhanced Achievement 54 now multiplies Reality gain by x10.</li>
    </ul>
    `
  },
  {
    date: [2023, 11, 29], 
    name: "Why are you cursing yourself?",
    info: `
    <b>Biggest update yet!!</b>
    <br>
    <b>Hard V, Imaginary upgrades and Lai'tela have been Rebalanced!</b>
    <br>
    <br>
    <b>New content: </b>
    <ul>
    <li>Introducing: 13 Cursed Achievement rows! They are unlocked with Hard V and used in a V-Achievement
    and some Imaginary unlocks. If used wisely they also allow for more Enhancements!</li>
    <li>New rewards for Achievements: 172, 173, 174, 176 and 177!</li>
    <li>32 new Enhanced effects for rows 10-13!</li>
    </ul>
    <br>
    <br>
    <b>Other changes: </b>
    <ul>
    <li>You can now individually respec Enhancements on Reality.</li>
    <li>Improved Enhanced Achievements visual.</li>
    <li>Updated How to play entry on Achievements.</li>
    </ul>
    <br>
    <br>
    Balance Changes:
    <ul>
    <li>All row 1 Enhancements, except 18, set their initial AM cost multiplier to x2.</li>
    <li>Achievement 23 and its Enhanced version scale slightly better.</li>
    <li>Enhanced Achievements 25 & 26 give +1 of their respective resource for every 1000 purchases.</li>
    <li>Achievement 28's multiplier is ~25% bigger, and its Enhanced version ~^1.04 bigger.</li>
    <li>Achievement 31 and its Enhanced version scale slightly better.</li>
    <li>Enhanced Achievement 33 gives ~x5.3 more Infinities.</li>
    <li>Enhanced Achievement 34's formula is changed. Different Dimensions have different weights.</li>
    <li>Enhanced Achievement 37 now also gives x5 Eternities.</li>
    <li>Enhanced Achievement 42 scales slightly better.</li>
    <li>Achievement 44 scales slightly better after 30 seconds.</li>
    <li>Enhanced Achievement 46 is better.</li>
    <li>Enhanced Achievements 53 and 66 now use your best total Galaxy amount this Reality.</li>
    <li>Enhanced Achievement 61 is free.</li>
    <li>Enhanced Achievement 63 gives x8 the cost of an Infinity Dimension.</li>
    <li>Enhanced Achievement 66 has a bigger multiplier (x16 ➜ x100).</li>
    <li>Achievement 76's normal effect is squared.</li>
    <li>Enhanced Achievement 78 is changed: It now makes you start with 10 Time Theorems (goes up to 1e50 with
    Enhanced Achievement 55).</li>
    <li>Enhanced Achievement 82 gives x2 as much IP per purchase.</li>
    <li>Enhanced Achievement 94 gives a much higher Infinity Power multiplier (1e260 ➜ 1e26000) and Replicanti
    speed (43.333 ➜ 260).</li>
    <li>Achievement 178 now gives more Galaxy strength 1% ➜ 2%.</li>
    <br>
    <li>Achievement 172 now also requires no Enhancements.</li>
    <li>Achievement 178 now requires 100,000 ➜ 108,000 Antimatter Galaxies.</li>
    <li>Teresa's Reality nerfs IP and EP more (^0.55 ➜ ^0.52).</li>
    <li>Effarig's stages are slightly harder.</li>
    <li>V-Achievements give less Enhancements (Every 2nd ➜ every 7th).</li>
    <li>V's "Young Boy" Achievements have higher goals, but Perk Points used are twice as effective.</li>
    <li>Pelle divides Antimatter Dimensions by /10 ➜ /32.</li>
    </ul>
    `
  },
  {
    date: [2023, 11, 3],
    name: "I don't want to Enhance",
    info: `
    <b>The Automator now supports Enhancing Achievements!</li>
    <br>
    <ul>
    <li>Added ENHANCE RESPEC command.</li>
    <li>Added ENHANCE LOAD command.</li>
    <li>Added ENHANCE ACHIEVEMENTS command.</li>
    <li>Added 'enhancements available' and 'total enhancements' as Automator currencies.</li>
    </ul>
    <br>
    <br>
    <b>Other changes: </b>
    <ul>
    <li>Changed Achievement 76. It's now called "One for Each Achievement", and unlocks after 144 hours 
    (6 days) instead of 8 days.</li>
    <li>Added a catchup entry for Achievement Enhancement and updated V's.</li>
    <li>Fixed the Fast Forward button not showing the correct icon when first created.</li>
    </ul>
    <br>
    `
  },
  {
    date: [2023, 10, 20],
    name: "I can see!",
    info: `
    <b>Enhancement presets have been improved!</b>
    <br>
    <br>
    <ul>
    <li>Editing presets now show you an ordered list of what Achievements the preset can Enhannce.</li>
    <li>Invalid IDs are now detected and can be automatically removed with the 'Fix preset' button.</li>
    <li>The 'Format Preset Text' button is improved.</li>
    <li>(21/10) Decimal values are now considered invalid IDs.</li>
    <li>(21/10) The edit preset modal now warns you if Achievements 57 or 88 are in the preset but not
    their requirements.</li>
    <li>(22/10) There's now a warning if the preset can't possibly Enhance all Achievements.</li>
    <li>(22/10) There's now a warning if there are duplicate numbers in the preset.</li>
    <li>(23/10) You can now use "Row 1" notation in presets.</li>
    <li>(24/10) You can now use "11-18" notation in presets.</li>
    <li>(27/10) There's now a visual preview of the Achievements the preset can Enhance.</li>
    </ul>
    <br>
    <br>
    <b>Other changes:</b>
    <ul>
    <li>(27/10) You can now hide only Achievement rows that are both completed and can't be Enhanced.</li>
    <li>(27/10) Fixed the Format Preset button writing "rows" as "row s".</li>
    <li>(24/10) Enhanced Achievement 21 is now affected by Time Study 31.</li>
    <li>(23/10) Added an option taht allows to pick Glyphs on mobile (thanks asaned!).</li>
    <li>(22/10) Reworked Achievement 38! It now reads 
    "8th Antimatter Dimensions are stronger the less sacrifices you have".</li>
    <li>(22/10) Removed Sacrifice behavior concerning old Achievement 38.</li>
    <li>(21/10) Enhancing Achievements 57 or 88 will automatically Enhance their required Achievements, and
    can't be Enhanced if this can't be done.</li>
    <li>(21/10) Skipping a news message now plays a little animation.</li>
    <li>(21/10) Achievement 155 now also disables the 5 second penalty after unpausing a Black Hole.</li>
    <li>Achievement 47 can no longer be Enhanced if you haven't unlocked Teresa.</li>
    <li>Enhanced Achievement 66 has a bigger multiplier per Galaxy (x10 ➜ x16).</li>
    </ul>
    <br>
    `
  },
  {
    date: [2023, 10, 18],
    name: "Happy V-Day",
    info: `
    <b>V, the Celestial of Achievements, has been reworked!</b>
    <br>
    <ul>
    <li>Most of the goals of V-Achievements have been modified to suit the addition of Enhanced Achievements.</li>
    <li>There are Enhanced effects for rows 5-9, unlocked through V-Achievements.</li>
    <li>V unlocks presets to Enhance Achievements after 1 V-Achievement. 
    They work similarly to Time Study presets, allowing for editing, exporting, importing, saving, loading and naming.</li>
    <li>Also here are row 16 rewards, for Achievements 161, 162 and 163.</li>
    <li>Achievement 168 is also buffed: 10% ➜ 15%.</li>
    </ul>
    <br>
    <br>
    <b>Other changes:</b>
    <ul>
    <li>The timers used for Achievements 44 and 124 reset more consistently.</li>
    <li>The game will remind you if you have Perks you can purchase.</li>
    </ul>
    <br>
    <br>
    <b>Post release changes:</b>
    <ul>
    <li>(19/10) Fully Enhancing row 1 Achievements now reduces post-infinity cost scaling of Antimatter Dimensions by -0.01.</li>
    <li>(19/10) Fixed Enhancement Presets not being initialized correctly after loading an older save (thanks Hexa!).</li>
    <li>(18/10) Fixed typo causing the game to give errors when buying single Tickspeed Upgrades.</li>
    <li>(18/10) Achievement 22 can now be Enhanced for free, meaning it won't count as an Enhanced Achievement.</li>
    `
  },
  {
    date: [2023, 10, 2],
    name: "HOW THE **** DOES TICKSPEED WORK",
    info: `
    <b>Another minor update, with some nice stuff</b>
    <br>
    <br>
    Changes:
    <ul>
    <li>The multiplier tab entry for "Base Tickspeed from Achievements" is now expandable.</li>
    <li>Very small power effects now show "<^1.001" instead of "^1.000".</li>
    <li>Fixed Reality Reminder telling you about Enhanced Achievements when you don't have them unlocked.</li>
    <li>Moved Achievement 155's new effect into Achievement 145.</li>
    <li>You can now Sacrifice if you have (the new) Achievement 145, and the effects of Achievement 23 
    would put you net-positive despite Achievement 38's effect.</li>
    <li>Buffed all the Achievements that give starting resources:
    <ul>
    <li>Achievement 21: 100 AM ➜ 200 AM.</li>
    <li>Achievement 37: 5000 AM ➜ 50,000 AM.</li>
    <li>Achievement 54: 5e5 AM ➜ 5e6 AM.</li>
    <li>Achievement 55: 5e10 AM ➜ 5e12 AM.</li>
    <li>Achievement 78: 5e25 AM ➜ 5e40 AM.</li>
    <li>Achievement 104: 5e25 IP ➜ 5e40 IP.</li>
    </ul>
    </li>
    </ul>
    <br>
    <br>
    Post release changes:
    <ul>
    <li>(16/10) Achievement 68's initial value is increased to x1.21, and grows a bit under 30% faster.</li>
    <li>(16/10) Fixed Achievement 146 having its effect be 100 times weaker than intended.</li>
    <li>(15/10) You can no longer hold Shift to see Enhancements if you don't have them unlocked.</li>
    <li>(15/10) Enhanced Achievement 42's effect is multiplied by 100, and now shows when it's inactive.</li>
    <li>(15/10) Fixed insta-completing Normal Challenges if you have more than 1.8e308 AM.</li>
    <li>(13/10) Enhanced Achievement 24's effect scales slightly better.</li>
    <li>(13/10) Achievement 108 is correctly buffed by Achievement 145.</li>
    <li>(13/10) Fixed Achievement 134 appearing in multiplier tab when it should be inactive.</li>
    <li>(13/10) Fixed Achievement 65's effect still becoming inactive after 3 minutes if you have Achievement 145.</li>
    <li>(13/10) Achievement 153's effect now only works in non-celestial Realities.</li>
    <li>(12/10) Cel-2's Reality is rebalanced:
    <ul>
    <li>Tickspeed is dilated way more (Starting value: ^0.7 ➜ ^0.36).</li>
    <li>Gamespeed and Dimensions are slightly more dilated (Starting value: ^0.25 ➜ ^0.24).</li>
    <li>This makes Effarig's first 2 layers no longer trivial by Achievement Enhancement, but it should
    be slightly faster still with the correct Glyph and Enhancements setup.</li>
    </ul>
    <li>(12/10) Fixed horrible crash if you attempted to run Normal Challenge 10 while inside Cel-3's reality.</li>
    <li>(11/10) Achievement 68's effect grows a bit over 3% faster and has a slightly higher starting value.</li>
    <li>(11/10) Reworded Enhanced Achievement 33 and Achievement 122 for better clarity.</li>
    <li>(11/10) Fixed Achievement 53's effect still being active if you only disable the AD autobuyers
    as a group but not AD8 individually.</li>
    <li>(10/10) Changed Achievement 71. Now reads "1st Antimatter Dimensions are stronger the longer you don't buy an 
    Antimatter Dimension or Tickspeed upgrade. Caps at 3 minutes." Its effect ranges from x2 to x20.</li>
    <li>(10/10) Buffed Achievement 93: x4 ➜ x6 IP.</li>
    <li>(10/10) Reworded Achievement 145 to avoid balance conflicts with "Replicative Rapidity".
    No changes were made to its current effects.</li>
    <li>(9/10) Achievement 98 now also affects Replicanti upgrades.</li>
    <li>(9/10) Fixed exploit allowing Achievement 122 to be unlocked with Achievement 53's 
    starting 8th AD.</li>
    <li>(7/10) Fixed some issues with the Replicanti timers.</li>
    <li>(5/10) Achievement 94 buffed! Now gives x2 ➜ x4.3333 Infinity Power, and also boosts 
    Replicanti speed by +43.3333% in the first +4.3333 minutes of Infinity (thanks Amity for the suggestion!).</li>
    <li>(5/10) Achievements 38, 94, 106 and 108 now show if their conditional effect is active 
    in their tooltip.</li>
    <li>(5/10) Fixed Enhanced Achievement 33 having a weird value the first frame of an Infinity.</li>
    <li>(3/10) Achievement 136 also resets Time Shards and Time Dimensions when exiting an
    Eternity Challenge.</li>
    <li>(3/10) Made Achievement 145 now affect offline Eternity gain.</li>
    </ul>
    `
  },
  {
    date: [2023, 10, 1],
    name: "Interlude",
    info: `
    <b>A minor update before the big one arrives</b>
    <br>
    <br>
    Changes:
    <ul>
    <li>Changed Achievement 23. It now reads "8th Antimatter Dimensions are stronger the first 
    15 seconds after a Dimensional Sacrifice."</li>
    <li>Similar changes to its Enhanced effect.</li>
    <li>Buffed Achievement 38 yet again (x8 ➜ x10).</li>
    <li>Achievement 106 now only takes into account purchased Replicanti Galaxies and not extra ones.</li>
    <li>Achievement 113 now always gives at least x2 Eternities.</li>
    <li>Achievement 155 now always maximizes temporal bonuses (like Achievements 23, 91 & 92), and bonuses
    based on fastest time (like Achievement 113 and Time Study 92).</li>
    <li>Timers in the Replicanti tab now take into account the effects of Achievements 106 and 108.</li>
    <li>Fixed a bug where pressing a hotkey for an Antimatter Dimension could buy more than you can afford 
    if you didn't have its respective row 1 Achievement.</li>
    </ul>
    <br>
    <br>
    Post release changes:
    <ul>
    <li>(1/10)The Infinity upgrade that gives IP based on fastest Infinity is now disabled in cel-2's reality.</li>
    </ul>
    `
  },
  {
    date: [2023, 9, 30],
    name: "Teresa ripoff",
    info: `
    <b>Introducing: Achievement Enhancement!</b>
    <br>
    Achievement Enhancement allows an Achievement Reward to be greatly strengthened. This feature is unlocked by buying
    a new perk: ACHEH.
    For now, only the first 4 rows of Achievements have an Enhanced reward, but there are more to come later.
    <br>
    This update covers content up to the 4th Celestial unlock, which means:
    <ul>
    <li>32 new Enhanced effects!</li>
    <li>New Rewards for Achievements: 53, 144, 152, 153, & 157.</li>
    <li>Reworked rewards for Achievements: 52, 64 & 72.</li>
    </ul>
    <br>
    <br>
    Other changes:
    <br>
    <ul>
    <li>Buffed Achievements: 
      <li>14, 15, 16, 17 & 18 (they reduce prices more),</li>
      <li>38 (multiplier is x5 ➜ x8), and</li>
      <li>68 (grows around 10% faster, and caps at e10 ➜ e15).</li></li>
    <li>Minor nerf to Achievement 23 (multiplier is x8 ➜ x6, but doesn't tick down the first 3 seconds).</li>
    <li>Made Achievement 115 no longer keep Dimension Boosts or Antimatter Galaxies if their autobuyers
    aren't on.</li>
    <li>Made Achievement tooltips not go outside their grid.</li>
    <li>Removed the star in the achievements that have a reward (every achievement row <=15 should have one).</li>
    </ul>
    <br>
    `
  },
  {
    date: [2023, 9, 22],
    name: "Pre-reality update",
    info: `
    All pre-reality content is complete!
    There'll be a little break between updates since I want to do an experiment. Later on I'll reveal more details!
    But for now, enjoy!
    <br>
    <br>
    <b>Achievement stuff</b>
    <ul>
    <li>Added new rewards to Achievements 135 and 136.</li>
    <li>Achievement 127 now also makes Time Dimensions no longer spend Eternity Points.</li>
    <li>Buffed Achievement 131 from 5% to 15%.</li>
    <li>Very slightly buffed Achievement 132: ^0.04 -> ^0.045.</li>
    </ul>
    <br>
    <br>
    <b>Post release stuff</b>
    <ul>
    <li>Improved Buy Max functionality for the IP multiplier, EP multiplier, IDs, and TDs, to take into account 
    wether or not they spend resources due to their respective Achievements (82, 98 and 127) (28/9).</li>
    <li>Fixed Time Dimensions not resetting when they should (25/9).</li>
    <li>Fixed a bug where Infinitying too fast for 60 seconds could prematurely unlock Achievement 124 (25/9).</li>
    <li>You can no longer Sacrifice if you'd end up net negative due to Achievement 38 (24/9).</li>
    <li>Fixed Achievement 38's effect not applying if you Sacrificed in a previous Dimension Boost (24/9).</li>
    <li>Simplified the Max All code for Time Dimensions when you have Achievement 127 (23/9).</li>
    <li>Fixed Achievement 108's 9 replicanti effect not working if you had Achievement 126 (23/9).</li>
    </ul>
    <br>
    <br>
    `
  },
  {
    date: [2023, 9, 21],
    name: "Row 12 update",
    info: `
    Hello row 12!
    <br>
    <br>
    <b>New stuff</b>
    <ul>
    <li>Added new rewards to Achievements: 121, 122, 123, 124, and 127.</li>
    </ul>
    <br>
    <br>
    <b>Other stuff</b>
    <ul>
    <li>Fixed multiplier tab showing extremely large Infinity Point amounts due to Achievement 103
    or Time Study 111.</li>
    </ul>
    <br>
    <br>
    `
  },
  {
    date: [2023, 9, 20],
    name: "Row 11 update",
    info: `
    Here are row 11 rewards!
    <br>
    <br>
    <b>New stuff</b>
    <ul>
    <li>Added new rewards to Achievements 112 and 115.</li>
    <li>Buffed Achievement 113 to give up to x5 eternities if you're fast enough.</li>
    </ul>
    <br>
    <br>
    <b>Other stuff</b>
    <ul>
    <li>Made the Replicanti Galaxy modal reflect Achievement 108's 9 replicanti effect.</li>
    </ul>
    <br>
    <br>
    `
  },
  {
    date: [2023, 9, 19],
    name: "Row 10 update",
    info: `
    Row 10 rewards have arrived!
    <br>
    <br>
    <b>New stuff</b>
    <ul>
    <li>Added new rewards to Achievements: 101, 102, 106, 107, and 108.</li>
    <li>Achievement 103 and Tme Study 111 now stack their effects.</li>
    </ul>
    <br>
    <br>
    <b>Other stuff</b>
    <ul>
    <li>Fixed the news ticker <i>"Don't mind me, just passing through."</i> going the wrong direction
    when using the fast forward button.</li>
    </ul>
    <br>
    <br>
    `
  },
  {
    date: [2023, 9, 15],
    name: "First public release",
    info: `
Hello! I'm Rangaz, the developer of the mod you are playing right now!
<br>
This is a modification of the game that adds a unique achievement reward to every single 
achievement that didn't have one, and also modifies or buffs many of the existing ones! The game is the same
otherwise.
<br>
<br>
<i>This mod is currently in development!</i>
<br>
So far, only the first 9 rows of achievements have been modified, which typically lasts up to unlocking Eternity.
I plan to finish this mod with ALL achievements rows finished, but for now enjoy.
<br>
<br>
<b>Changes:</b>
<li>Achievements with new rewards: 11, 12, 13, 14, 15, 16, 17, 18, 22, 24, 25, 26, 27, 33, 35, 38, 42, 44, 46, 47, 
51, 52, 53, 62, 63, 67, 77, 81, 82, 96, 97, 98.</li>
<li>Achievements with modified rewards: 23, 28, 31, 34, 36, 45, 48, 66, 68, 72, 83.</li>
<br>
`
  },
  /*
  {
    date: [2023, 7, 18],
    name: "Final Official Patch",
    info: `
All of the previous patches since "The Reality Update" have been with the goal of fixing commonly reported bugs and
implementing highly suggested features. However, this patch is planned to be the final official patch. There may be
a few minor patches from bugs/requests in response to this set of changes, but these will likely be fixed or added
as they come in. We may try to add more beyond that, but this is no longer a guarantee and future changes will
probably not have their own changelog entries.
<br>
<br>
<b><i>At this point, the official version of the game is largely considered to be complete.
Thank you so much for playing Antimatter Dimensions!</i></b>
<br>
<br>
<b>New things:</b><br>
<ul>
<li>Time Study import strings now allow you to immediately enter an Eternity Challenge on importing if the
string contains an EC and ends with a "!"</li>
<li>Added hotkeys for Dilation and Glyph respec on Armageddon</li>
<li>Shift-clicking the Reality button now forces the Glyph selection modal to show up regardless of your settings</li>
<li>Added 3 more perk layouts (Square, horizontal grid, and distance from START)</li>
<li>You can now toggle "upgrade locks" for some Reality and Imaginary upgrades, which will automatically prevent
any manual or automatic actions that would fail their unlock condition</li>
<li>Glyph Filter settings can now also be imported and exported as text</li>
<li>You can now tell your filter to immediately Reality (once available, if your autobuyer is on) if none of the
upcoming choices will be accepted by the filter</li>
<li>Added Space Theorems (current and total) as an Automator currency</li>
<li>Added the ability to disable offline time simulation when the game is suspended (due to being out of focus or
from device hibernation)</li>
<li>Added information related to save creation time on statistics tab</li>
<li>The game will now periodically perform automatic local backups, similar to the Android version of the game</li>
</ul>
<br>
<b>Additional QoL and information:</b><br>
<ul>
<li>The tutorial at the start of the game now also emphasizes the How To Play</li>
<li>Achievements with rewards now have an additional icon on their bottom-left corner</li>
<li>Infinity and Eternity autobuyers now have status text on their settings boxes which indicate when they will next
trigger a prestige when on "time" or "X highest" mode</li>
<li>Eternity Challenges now stay visible on the EC tab as long as you have unlocked them at some point on that Reality,
even if you unlock a different one afterwards without completing it first</li>
<li>Resource catchup modal is now slightly more detailed during the first few Realities</li>
<li>Upgrades affected by the EU2 perk now show more accurate cost text</li>
<li>You can no longer accidentally Reality without selecting a Glyph; the confirm option will not appear unless one
is selected. (Disabling the selection modal after unlocking sacrifice still lets the game choose randomly)</li>
<li>Recent Prestiges for Reality now displays iM when appropriate</li>
<li>Numerous How To Play entries have been updated or clarified to more accurately describe the game's features</li>
<li>Added more display options for Recent Prestiges tab</li>
<li>Many various minor text changes</li>
</ul>
<br>
<b>Minor UI Changes:</b><br>
<ul>
<li>Purchase count tooltips for Dimensions now pop out to the left side instead of above</li>
<li>Changed Break Infinity tab symbol on Modern UI</li>
<li>Time Study import modal now shows info an import image as a two-column layout to reduce the need to scroll</li>
<li>Clarified interactions with TS31 and other upgrades</li>
<li>Eternity Challenges now have a visual overlay to show how many completions they have</li>
<li>The Reality reset modal now warns you more firmly if you can otherwise Reality for rewards instead</li>
<li>Added an icon for recently unequipped Glyphs</li>
<li>Added an "auto" Glyph BG color mode which matches black/white Glyph backgrounds to your current Theme</li>
<li>Improved color contrast for different Glyph rarities and added decorative borders to Glyphs depending on their
rarity and/or type</li>
<li>Added a message modal to clarify why not all Glyphs could be unequipped in certain cases</li>
<li>Effarig Glyphs now show their effects in "celestial order"</li>
<li>All <i>inventory</i> Glyphs now also show reduced levels when global level nerfs are active</li>
<li>Cursed Glyphs can now also be made on cel4's tab</li>
<li>The glow for the Singularity milestone button can now be disabled</li>
</ul>
<br>
<b>Bugfixes:</b><br>
<ul>
<li>Fixed IP/EP rate display not updating properly when save slot is changed</li>
<li>Prevented Time Study presets from having duplicate names</li>
<li>Fixed Eternity button having incorrect styling below Infinite IP in dilation</li>
<li>Fixed poor Glyph uniformity behavior without START perk</li>
<li>Fixed some Glyph information being colored based on BG color instead of Theme color</li>
<li>Disabled automator undo/redo from functioning on tabs other than the editor</li>
<li>Fixed purchased music Glyphs getting turned into regular Glyphs when cosmetics are reset</li>
<li>Made Glyph preset loading more forgiving and less likely to fail to load presets</li>
<li>Fixed cel1 Reality RM record being incorrectly tracked in some cases</li>
<li>Fixed Glyph filter sometimes not comparing to rarity properly</li>
<li>Fixed cel7 Glyph slot not appearing/disappearing properly in certain cases</li>
<li>Fixed misalignment in cel6 icon (credit to @mrkrutaman for the fix)</li>
<li>Disabled IAP purchase for all Glyph Cosmetics when already purchased</li>
<li>Fixed Hibernation offline time not giving real-time resources</li>
<li>Hibernation offline simulation now properly uses offline time settings</li>
<li>Added a few missing notifications for hotkey presses</li>
<li>Made Standard notation format larger integers properly</li>
<li>Removed news ticker with broken link</li>
<li>Various more minor bugfixes</li>
</ul>
<br>
`
  },
  {
    date: [2023, 5, 25],
    name: "Multiplier Tab, Automator, and Major mechanics fixes",
    info: `
<b>Multiplier Tab:</b><br>
<ul>
<li>Added a tab for Replicanti speed multipliers</li>
<li>Power effects can now also be shown as an equivalent-value multiplier</li>
<li>AD tab now has special behavior within NC12</li>
<li>Made general categories (ie. "Achievements" or "Time Studies") still openable even with single entries</li>
<li>DT nerfs no longer apply to game speed within the multiplier tab</li>
<li>Entries referring to individual upgrades are now worded more consistently</li>
<li>Filled in a bunch of miscellaneous missing effects and fixed a few mislabeled effects</li>
</ul>
<br>

<b>Automator Features:</b><br>
<ul>
<li>Automator-related notifications in the top-right now have their own coloring</li>
<li>Constants now stay in a consistent order when refreshing the page</li>
<li>New scripts now have enforced unique names by default</li>
<li>NOTIFY command now also supports single-quotes, as well as mixtures of single/double quotes</li>
<li>Added buttons for deleting individual constants, and another button to delete all of them</li>
<li>Added undo/redo functionality</li>
<li>You can now import all your study presets into the automator as constants</li>
<li>Added WAIT functionality for next BH1/BH2 activation</li>
<li>Added STOP command to immediately halt script execution</li>
<li>You can now use the highest filter score out of your available Glyph options as a variable for
  comparisons</li>
</ul>
<br>

<b>Automator Bugfixes:</b><br>
<ul>
<li>Block-to-text conversion should be less aggressive on deleting errored lines</li>
<li>Fixed block editor wiping internal contents of all later blocks whenever block nesting changes</li>
<li>Fixed a bug which sometimes caused the automator to attempt to run errored scripts and crash the game</li>
<li>Fixed automator constants not being compared to built-in keywords correctly</li>
<li>Fixed execution skipping the first line whenever scripts restart due to a REALITY command</li>
<li>Fixed a few syntax coloring bugs in the Automator text editor</li>
<li>Fixed a bug which caused the automator to prevent some resources from being reset after full completions</li>
</ul>
<br>

<b>Game Mechanic fixes:</b><br>
<ul>
<li>Dark Energy no longer resets after Annihilation</li>
<li>Dooming is now prevented if you have less than 5 empty inventory slots</li>
<li>"Refine to cap, then sacrifice" mode now sacrifices when the related resource is still locked</li>
<li>Secret achievement 46 is now properly awarded if the condition is met while offline</li>
<li>Storing real time no longer prevents autobuyers from ticking</li>
<li>Fixed bugged modal and game crash when attempting to exit a Celestial Reality from the Glyph tab</li>
<li>IAP flag in speedruns is now updated more consistently</li>
<li>Fixed Reality button sometimes showing an incorrect projected RM value due to amplification</li>
<li>Fixed Black Holes getting stuck as permanently inactive in some cases</li>
<li>Fixed negative Glyph counts not being properly updated when using Glyph undo</li>
<li>Glyph purge modals now count identical Glyphs properly</li>
<li>Fixed Glyph purge modals sometimes not appearing</li>
<li>Fixed a poor interaction between the new Glyph RNG and negative seed values</li>
<li>Fixed Glyph RNG seed not advancing after amplified realities</li>
</ul>

<br><b>Other changes:</b><br>
<ul>
<li>Added confirmation option to hide Glyph purge modals which mass-sacrifice</li>
<li>Improved UI behavior when importing saves in certain conditions</li>
<li>Teresa's EU-start upgrade now applies retroactively</li>
<li>Offline ticks are now limited to a minimum of 33ms instead of 50ms</li>
<li>"Offline" progress due to device hibernation now gets simulated as if it were offline time
  instead of being applied as a single large tick</li>
<li>Offline/hibernation maximum time has been increased from 6 hours to 24 hours</li>
<li>Text references to Teresa's Perk Shop have been more standardized</li>
<li>Positioning for V's entries in navigation was adjusted to prevent text overlap</li>
<li>AMOLED themes now have proper theming on credits scroll</li>
<li>Fixed Achievement 142 not unlocking when unlocking the Black Hole</li>
<li>Fixed Reality Glyph cosmetics not handling colors properly</li>
<li>Exit Dilation modal no longer erroneously appears outside of Dilation</li>
<li>A handful of more minor text and typo fixes</li>
</ul>
<br>
`
  },
  {
    date: [2023, 4, 7],
    name: "Speedrunner and Glyph RNG",
    info: `
<b>Major Changes:</b><br>
<ul>
<li><b>Glyph RNG for Realities 2-21 has been completely overhauled.</b> The new RNG now attempts to give
you a much more even spread of effects during these Realities; for each group of 5 consecutive Realities,
you will now see every Glyph type exactly 4 times and every individual effect will always appear <i>at least once</i>
amongst those 4 choices.
</li>
<li>Two side effects of the above change: 2-effect glyphs are now a fair bit more common
(about 30% more common for replication and dilation and 140% more common for the other three) and the Glyph options for
your <i>current</i> Reality may have changed when first loading up this version of the game.</li>
<li>Starting a speedrun save now properly carries over all the other stats which would have normally carried over after
finishing the game</li>
<li>Previous speedrun records are now also stored in the save and can now be compared on a newly-added subtab</li>
<li>Glyph RNG seed can now be modified in-game during a speedrun, as long as you have not realitied yet</li>
<li>Credits page was updated to include people recently brought on for testing the Reality update on Android</li>
<li>The "Total Termination" upgrade now affects <i>all</i> Glyph types</li>
</ul>
<br>

<b>New QoL/features:</b><br>
<ul>
<li>Real time (in stats) is now paused after gaining the final achievement</li>
<li>Perk tree interactivity has been made generally more responsive</li>
<li>Added two new default perk tree layouts (an Android-version grid and \uE010)</li>
<li>Eternity autobuyer now only triggers at full completion count with ECB perk instead of immediately</li>
<li>Added a button to reset all individual Glyph cosmetics</li>
<li>Added a confirmation modal for exiting challenges using the header button</li>
<li>Shift-clicking the icon on the Glyph filter now bumps it to the next <i>lower</i> threshold</li>
<li>Glyph presets now have 2 additional slots (5 => 7)</li>
<li>Added time estimates for reaching max Replicanti and Dilated Time this Reality</li>
<li>Hovering over the dilation button now shows all time estimate tooltips at once</li>
<li>Clicking already-bought dilation studies now moves you over to the appropriate related tab</li>
<li>All progress-locked options now remain permanently modifiable after full game completions</li>
</ul>
<br>

<b>Improved UI/Layout:</b><br>
<ul>
<li>Speedrun time formatting now has 3 hour digits and suppresses END formatting on some subtabs</li>
<li>Improved autobuyer textbox contrast on some themes</li>
<li>Reality header in stats tab now shows cel7-related stats as well</li>
<li>Clarified how Relic Shard rarity boost and cursed Glyphs work</li>
<li>Added %/sec to ID8 when relevant</li>
<li>Added TT to offline progress entries</li>
<li>Added BH cost scaling to its H2P entry</li>
<li>Changed AD Dimension purchase buttons to be stylized like cel6 when Continuum is active</li>
<li>Improved light/dark TS contrast between buyable and bought states</li>
<li>Speedrun widget now takes up less screen space when collapsed</li>
<li>Other various minor text fixes</li>
</ul>
<br>

<b>Bugfixes:</b><br>
<ul>
<li>Fixed buggy Glyph set names from reskinned Companion Glyphs</li>
<li>Fixed broken external links in "About the game"</li>
<li>Fixed AD autobuyer settings being unmodifiable in some cases</li>
<li>Fixed some display bugs with fractional Infinity/Eternity count</li>
<li>Recent prestige tab now properly accounts for amplification</li>
<li>Fixed subtab switching when switching game saves</li>
<li>Fixed Replicanti estimate not accounting for update rate correctly in some cases</li>
<li>Fixed Transience of Information not calculating its RM requirement correctly</li>
<li>Various more minor bugfixes</li>
</ul>
`
  },
  {
    date: [2023, 2, 22],
    name: "Visuals and Code prep",
    info: `
<b>Big Changes:</b><br>
<ul>
<li>Cloud saving now only saves one slot at a time and does so every 10 minutes instead of every 5.
  <b>If you are using the Cloud, please back up your saves locally just in case. This was hard to thoroughly
  test and we don't want you to lose your saves.</b></li>
<li>Please update your theme to v10 for the best user experience (added a new secret theme)</li>
<li>Blobs now have color in the font file</li>
<li>Changed recent prestige page to be an organized table with more information</li>
<li>Multiversal effect should no longer cause a UI softlock if the game processes too slowly</li>
<li>Lots of changes on the backend and Github repository in preparation for making the game open-source</li>
</ul>
<br>

<b>New QoL/features:</b><br>
<ul>
<li>5xEP now always triggers before TD autobuyers</li>
<li>Added time and relic shard modes for auto-reality</li>
<li>Added tracking for total time across full game completions</li>
<li>Changed some default player properties to make poor game behavior less likely</li>
<li>Added an option to invert generated/total TT in study tab</li>
<li>Expanded info for optimizing prestige for resource/time</li>
<li>Added a new animation for inverted black holes</li>
</ul>
<br>

<b>Improved UI/Layout:</b><br>
<ul>
<li>Fixed option dropdown being blurry on some browsers</li>
<li>Fixed some numbers being formatted with the wrong number of decimal places or not using notation</li>
<li>Added text for unequippable glyphs in cel7</li>
<li>Further clarified game/real time behavior in various places</li>
<li>TS21 now shows its effect as a multiplier</li>
<li>Increased contrast on reality upgrade buttons</li>
<li>Made ACHNR perk behave more consistently</li>
<li>Updated some entries in the credits</li>
<li>Added max DT this reality</li>
<li>Fixed a lot of things not being visually disabled in cel7</li>
<li>Many more minor fixes</li>
</ul>
<br>

<b>Bugfixes:</b><br>
<ul>
</li><li>Fixed Modern sidebar resource rounding incorrectly
</li><li>Fixed automator errors on post-completion new games
</li><li>Fixed some news entry stats not being updated properly
</li><li>Fixed news repeat buffer not working
</li><li>Updated progress-locking conditions for some news messages
</li><li>Fixed edge cases for secret achievements 12 and 42
</li><li>Fixed cel5-3 memories having the wrong name in offline progress
</li><li>Fixed Dilated runs not giving EP or being tracked in records
</li><li>Fixed replicanti time being incorrect in cel7
</li><li>Fixed hotkeys allowing autobuyers to be changed even when locked
</li><li>Fixed Continuum H2P entry disappearing in cel7
</ul>
`
  },
  {
    date: [2023, 1, 26],
    name: "Timewall Reduction",
    info: `
<b>Balance Changes:</b><br>
<ul>
<li>EC4 infinity requirement scales slower (50M => 25M per tier)</li>
<li>EC11 goals have been reduced by e50 on all tiers</li>
<li>Improved visibility for cel3 hints (progress is now always visible and accumulates 10x faster)</li>
<li>Made BH auto-pulse always force charging at 99%, removed adjustability for charge rate</li>
<li>Momentum grows 2.5x faster</li>
<li>Reduced final singularity milestone (8e45 => 2.5e45)</li>
<li>Speedruns now also start with achievements 35 and 76</li>
</ul>
<br>

<b>New Quality-of-Life:</b><br>
<ul>
<li>Made TS tree import text persist between closing the modal</li>
<li>Added "Respec and load" buttons/options for TS loading</li>
<li>Added "Sort by Level" to glyph inventory</li>
<li>Auto-EC now holds (but doesn't complete) the next one when paused</li>
</ul>
<br>

<b>Bugfixes:</b><br>
<ul>
<li>Modern-Metro themes now have the correct AD color</li>
<li>Cloud save conflict option buttons now work properly</li>
<li>"Buy 10" multiplier now always shows</li>
<li>Crunch modal no longer shows up pre-break with hotkeys</li>
<li>Next EC rewards now show "Next:" even when capped</li>
<li>EC requirements no longer scale up after max completions</li>
<li>Fixed Companion Glyph still counting as a glyph in some cases (LE, nav, achievements)</li>
<li>Fixed black hole-related achievements not affecting displayed interval/duration</li>
<li>Cel5 times now account for storing real time</li>
<li>Cel6 text now updates properly after destabilization</li>
</ul>
<br>

<b>Minor Changes:</b><br>
<ul>
<li>Improved Cloud conflict detection (eternities in early eternity and max DT in dilation)</li>
<li>Added ability to hide Google info when Cloud saving</li>
<li>Added "Common Abbreviations" to H2P</li>
<li>Added max replicanti text</li>
<li>Reduced IP/min and EP/min hiding thresholds on prestige buttons</li>
<li>Added an outline for fully-completed EC studies</li>
<li>Added cel3 icon to cosmetics</li>
<li>Made paperclips less invisible</li>
<li>Fixed more minor typos and made many minor wording improvements</li>
</ul>
`
  },
  {
    date: [2023, 1, 9],
    name: "The Companion Glyph doesn't want to hurt you",
    info: `
<b>Mechanic Changes:</b><br>
<ul>
<li>Buffed Break Infinity passive infinity generation upgrade (Cap is now once per 100ms instead of
  165ms and is reached at a fastest of 50ms instead of 33ms)</li>
<li>Limited offline ticks to a minimum length of 50ms</li>
<li>The Companion Glyph no longer counts as a Glyph for the purposes of Glyph-based requirements</li>
</ul>
<br>

<b>Bugfixes:</b><br>
<ul>
<li>Fixed EM6 being disabled even if EM200/EM1000 are still locked</li>
<li>Fixed EM200 applying when auto-eternity is in the wrong mode</li>
<li>Made EU1 apply properly on-purchase</li>
<li>Made EU2 always check before EP-based autobuyers trigger</li>
<li>Fixed being able to enter cel7 while in another celestial reality</li>
<li>Fixed autobuyers being unmodifiable in early cel7</li>
<li>Fixed ECB using current IP instead of max IP</li>
<li>Cleared New! notifications upon loading different saves</li>
<li>Fixed IC5 erroneously applying C9 effect to tickspeed cost</li>
</ul>
<br>

<b>Text Changes:</b><br>
<ul>
<li>Added warning for lag in animated themes</li>
<li>Fixed incorrect text on references to the IP formula</li>
<li>Clarified ach156 only applying to generated TT</li>
<li>Updated some slightly out-of-date How To Play entries</li>
<li>Added additional info to Glyph Filter and Alchemy in H2P</li>
<li>Reworded DT mult from replicanti glyph effect to not use very small numbers</li>
<li>Improved Perk wording consistency</li>
<li>Fixed a few spots with unformatted and/or unblinded numbers</li>
<li>Fixed various punctuation inconsistencies</li>
<li>Made Big Crunch autobuyer always show interval, even if below update rate</li>
<li>Moved EC8 ID purchase count nearer to the top of the page</li>
<li>Added "approximately" to replicanti timer at low amounts</li>
<li>Made AG button text account for achievements which stop certain resources from being reset</li>
<li>Added text in a few places for capped upgrades/effects</li>
<li>Added news ticker suggestions up to Dec 26th, fixed some incorrect news tickers</li>
</ul>
`
  },
  {
    date: [2022, 12, 21],
    name: "First Post-release Patch",
    info: `
<b>Various Miscellaneous Changes:</b><br>
<ul>
<li>Fixed NC6 not actually spending lower dimensions when purchasing upgrades</li>
<li>Changed matter scale text ("If every antimatter were...") to only change once per second</li>
<li>Fixed some text overflow issues in IC3 and reality upgrades</li>
<li>Reworded reality reminder text</li>
<li>Fixed Alt-T hotkey not working before completing tickspeed challenge</li>
<li>Fixed glyph tooltips not appearing in a certain secret theme</li>
<li>Made clicking challenge header switch to the tab of the innermost challenge</li>
<li>Changed EU1 perk to apply to all forms of eternity gain, not just manual ones</li>
<li>Fixed some bugs related to achievement Bulked Up</li>
<li>Fixed various typos</li>
<li>Rolled back styling change for unpurchasable upgrades on dark themes</li>
<li>Fixed ID/TD multiplier tabs disappearing within EC11</li>
<li>Fixed a game crash when attempting to run empty or invalid automator scripts</li>
<li>Fixed a few bugs in celestial content</li>
</ul>
`
  },
  {
    date: [2022, 12, 17],
    name: "The Reality Update",
    info: `
<b>MAJOR STUFF:</b><br>
<ul>
<li>The Reality prestige layer.</li>
<li>Added Glyphs.</li>
<li>Added Reality Upgrades.</li>
<li>Added Perks.</li>
<li>Added an Automator.</li>
<li>Added a Black Hole.</li>
<li>Added Celestials.</li>
<li>Added a new Modern UI style. The Old UI style is still available as Classic UI.</li>
<li>Added modals to replace browser alerts, confirmations, and prompts.</li>
<li>Added a How to Play modal with much more detail compared to the old How to Play.</li>
<li>Added 5 new rows of achievements.</li>
<li>Added a Multiplier Breakdown subtab.</li>
<li>Added more Nicolas Cage.</li>
<li>Cloud saving is now available to everyone. This needs your Google account.</li>
<li>Shop tab is now available to everyone.</li>
<li>Redesigned overall UI styling.</li>
<li>\uE010</li>
<li>Rewrote the game UI using the Vue.js framework, significantly improving performance, stability,
  and code maintainability.</li>
<li>Added a speedrun mode.</li>
</ul>
<br>

Options and Accessibility:
<ul>
<li>Added a content summary modal to help players remember older game mechanics after a long time away.</li>
<li>Added more keyboard shortcuts.</li>
<li>Added more confirmations. (can be turned off in options)</li>
<li>Added animations for Eternity and Dilation. (can be turned off in options)</li>
<li>Added more community news and new AI news. (generated by AI using data from suggestions by community)</li>
<li>Added a tutorial glow effect and icon to some buttons when first starting the game.</li>
<li>Added a dropdown menu for easier selection of themes and notations.</li>
<li>Added secret number of secret themes, all of which are no longer case sentitive.</li>
<li>Unlocked secret themes are now permanently available to select from the dropdown.</li>
<li>Added more notations.</li>
<li>Added options to import and export saves from files.</li>
<li>Added a max all Infinity Dimensions button.</li>
<li>Added a button to minimize TT shop.</li>
<li>Added 3 more study tree save slots. (total of 6)</li>
<li>Added a blob.</li>
<li>Added the ability to edit existing study tree slots.</li>
<li>Added a modal for automatic selection of study tree paths when shift-clicking.</li>
<li>Added a line of text on the IC tab telling "All Infinity Challenges unlocked" when all ICs are unlocked.</li>
<li>Added a line of text on the EC tab telling that how many ECs are unlocked.</li>
<li>Added options for adjusting save frequency and displaying time since last save.</li>
<li>Added the ability to name your save file.</li>
<li>Entries in away progress can now be individually shown or hidden.</li>
<li>Added the ability to hide tabs and subtabs.</li>
<li>Added options for adjusting offline progress behavior.</li>
<li>Added an option to automatically switch tabs on some events.</li>
<li>Added options to adjust news ticker scroll speed and repetition.</li>
<li>Added IDs for Challenges and Achievements. (can be turned off in options)</li>
<li>Added more progress bar information. (EC goal, progress in Dilation until TP gain)</li>
<li>Added an option to turn off dynamic amount in autobuyers.</li>
<li>Added a display showing you what type of Infinity/Eternity/Reality you are in, such as Dilation or Challenges</li>
<li>You can now press other hotkeys while holding down a hotkey without interrupting the held hotkey.</li>
<li>Info displays are now visible by default. (can be turned off in options)</li>
<li>Improved import save modal by adding resouce information and offline progress mode selection.</li>
<li>Number input fields may now have input assistance depending on your browser. (such as up and down arrows
  on the side)</li>
<li>Resetting the game now requires inputting a specific phrase in order to prevent accidental resets.</li>
</ul>
<br>

Wording and Layout Changes:
<ul>
<li>Changed "Dimension Shift" to "Dimension Boost".</li>
<li>Changed "Infinitied stat" to "Infinities".</li>
<li>Changed "free galaxy" to "Tachyon Galaxy".</li>
<li>Tickspeed now displays as a X/sec rate instead of a very small fraction X/Y tick time.</li>
<li>Changed various texts for better clarity.</li>
<li>Moved Autobuyers subtab to a new Automation tab and added additional controls for other Autobuyers to the tab,
  such as Infinity Dimension and Replicanti autobuyers.</li>
<li>Added subsections in the Statistics subtab.</li>
<li>Footer links have been moved to the new How to Play and About the Game modals.</li>
<li>Changed some Achievement names and pictures.</li>
<li>Changed some secret Achievement name and requirements.</li>
<li>The cost of bought Infinity upgrades is now hidden.</li>
<li>The "BREAK INFINITY" button is now visible (but locked) even before Automated Big Crunch interval is 0.1s.</li>
<li>Improved text for post-break cost scaling upgrades.</li>
<li>The exit Challenge button is now hidden when the player is not in a challenge.</li>
<li>Eternity Challenges now show their current reward as well as the reward for the next completion.</li>
<li>Having Eternities no longer prevents the Infinity animation from playing.</li>
<li>Added colors to the Crunch/Eternity buttons when you have more than e50 of IP/EP; the color shows if you gain less
  (red), around same (white), or more (green) IP/EP than you currently have.</li>
<li>Moved study 33 to right side.</li>
<li>Changed "Normal Dimensions" to "Antimatter Dimensions".</li>
<li>Changed "Challenges" to "Normal Challenges".</li>
<li>Fixed some tpyos.</li>
</ul>
<br>

New Upgrades and Improved Technical Behavior:
<ul>
<li>Autobuyers are now unlockable before Infinity with antimatter, but can only be upgraded after completing their
  respective Challenges.</li>
<li>Added a new Infinity upgrade for 1e3 IP that gives you 50% of your best IP/min without using Max All,
  while offline.</li>
<li>Added a new Eternity milestone that gives you 25% of your best EP/min while offline.</li>
<li>Added another 2 new milestones that give you Infinities and Eternities while offline.</li>
<li>The "Infinity Point generation based on fastest Infinity" upgrade now takes all IP multipliers into account.</li>
<li>Tickspeed calculation is now dynamic, updating immediately instead of requiring an upgrade to be purchased.</li>
<li>You can buy multiple RG at once if you have enough replicanti; you are no longer limited to one per game tick.</li>
<li>Improved Time Dimension Max all behavior.</li>
<li>Normal and Infinity Challenges now give rewards after Big Crunch.</li>
<li>The Eternity autobuyer can now trigger when you have reached the EC goal, regardless of the settings.</li>
</ul>
<br>

Balance Changes:
<ul>
<li>NC10, 11, and 12 now unlock after 16 Infinities</li>
<li>Each Achievement grants an additional 1.03x multiplier to Antimatter Dimensions.</li>
<li>The Big Crunch Autobuyer's initial interval has been halved, requiring only half as much IP to max out, and
  other autobuyers have drastically lowered initial intervals.</li>
<li>The 500 IP Infinity upgrade now costs 300 IP.</li>
<li>Nicolas Cage.</li>
<li>The 20-eternities milestone was moved to 8-eternities.</li>
<li>Increased cost scaling for Time Dimensions after 1e6000.</li>
<li>TS 83 has been hard capped.</li>
<li>EC10 reward for less than 5 completions has been nerfed (reward at 5 completions is the same).</li>
<li>Lowered the Dilation unlock requirement from 13000 to 12900 total TT.</li>
<li>TP gain amount in Dilation is now calculated based on the highest AM reached.</li>
<li>Purchasing the study to unlock Dilation now requires a 23rd row study purchase.</li>
<li>Changed the condition of IC1 (now it just applies Challenge restrictions, instead of running them).</li>
<li>Changed the unlock conditions of IC2 (from 1e5000 to 1e10500) and IC6 (from 1e20000 to 1e22500).</li>
<li>Changed the goal of IC1 (from 1e850 to 1e650).</li>
<li>Changed the goal of IC5 (from 1e11111 to 1e16500).</li>
<li>Added reward to "I forgot to nerf that" (5% mult to 1st AD).</li>
<li>Added reward to "Is this safe?" (keep 1 RG on Infinity).</li>
<li>Added reward to "Eternities are the new Infinity" (gain x2 more Eternities).</li>
<li>Added reward to "This is what I have to do to get rid of you" (remove downside from TS 131 and 133).</li>
<li>Changed reward of "That's FAST!" (from 1000 to 5000).</li>
<li>Changed reward of "That's FASTER!" (from 2e5 to 5e5).</li>
<li>Changed reward of "Forever isn't that long" (from 1e10 to 5e10).</li>
<li>Changed reward of "Blink of an eye" (from 1e25 with dimension mult to 5e25).</li>
<li>Changed reward of "That wasn't an eternity" (from 2e25 to 5e25).</li>
<li>Changed requirement of "The Gods are pleased" (from x600 to x600 outside of NC8).</li>
<li>Changed requirement of "Daredevil" (from 2 to 3).</li>
<li>Changed requirement of "Blink of an eye" (from 200 ms to 250 ms).</li>
<li>Changed requirement of "Game design is my passion (Hevipelle did nothing wrong)" (from 10 sec to 15 sec).</li>
<li>Changed requirement of "MAXIMUM OVERDRIVE" (from 1e300 IP/min to 1e300 IP).</li>
<li>Changed requirement of "Eternities are the new Infinity" (from 200 ms to 250 ms).</li>
<li>Changed requirement of "Is this safe?" (from 30 minutes to 1 hour).</li>
<li>Changed requirement of "Like feasting" (from 1e100 to 1e90).</li>
<li>Changed requirement of "No ethical consumption" (from 5e9 to 2e9).</li>
<li>Changed requirement of "When will it be enough?" (from 1e20000 to 1e18000).</li>
<li>Changed requirement of "I never liked this infinity stuff anyway" (from 1e140000 to 1e200000).</li>
<li>Changed requirement of "Unique snowflakes" (from 630 to 569).</li>
<li>Changed requirement of "Now you're thinking with dilation!" (from 1e600 EP to 1e260000 AM).</li>
<li>Changed requirement of "This is what I have to do to get rid of you" (from 1e20000 to 1e26000).</li>
<li>Changed achievement 41 to "No DLC required", "buy 16 IU", "unlock 2 new IU".</li>
<li>Changed position of "Zero deaths" (from 43 to 64).</li>
<li>Changed position of "1 Million is a lot" (from 64 to 77).</li>
<li>Changed position of "How the antitables have turned" (from 77 to 43).</li>
<li>Swapped achievements 101 and 117.</li>
<li>Swapped achievements 113 and 124.</li>
<li>Lowered initial costs of post-break cost scaling upgrades (Tickspeed cost from 3e6 to 1e6,
  Dimension cost from 1e8 to 1e7).</li>
<li>NC7 was reworked to not have RNG.</li>
</ul>
<br>

Removed features:
<ul>
<li>Infinity is now non-fixable.</li>
<li>Removed autobuyer priority.</li>
<li>Removed production graph subtab.</li>
<li>Removed fungame.</li>
<li>Removed savefixer.</li>
<li>Removed some news.</li>
<li>Removed floating text from purchasing Dimensions.</li>
<li>Removed blob that caused game crash.</li>
</ul>
<br>

Bugfixes:
<ul>
<li>ID and replicanti autobuyer buttons are now hidden in EC8.</li>
<li>Fixed next Sacrifice multiplier not properly displaying NC8's effect.</li>
<li>Fixed a bug where IC5's cost increment was applied 2 times.</li>
<li>Fixed a bug where inverted themes were broken.</li>
<li>Fixed a bug where resetting the game unlocks a secret achievement.</li>
<li>Fixed a bug where ECs are showing wrong goals after their 5th completion.</li>
<li>Fixed a bug where non-antimatter galaxies weren't applying for tickspeed if your total galaxy count was less
  than 3.</li>
<li>Fixed a bug where you could produce more than infinite antimatter for 1 tick even if you had a fixed Infinity or
  were in a challenge.</li>
<li>Fixed a bug where formatted numbers on autobuyers wouldn't update properly when changing your notation.</li>
<li>Fixed a bug where Infinity Dimensions would automatically purchase upon unlocking them in EC8 while autobuyers were
  enabled.</li>
<li>Fixed a bug where the replicanti upgrade autobuyers would incorrectly display as off upon load/import.</li>
<li>Fixed a bug where the replicanti interval upgrade would say it would upgrade to a number below the max speed.</li>
<li>Fixed a bug where your Infinity Dimension mult would show as 0x if you had 0 infinity power.</li>
<li>Fixed a bug where you could complete EC4 with 1 more Infinity than was allowed, by using the autobuyer.</li>
<li>Fixed a bug where all non-Dimension Autobuyers didn't respect notation on the cost to reduce their interval.</li>
<li>Fixed a bug where the Achievement reward from "To infinity!" wasn't working.</li>
<li>Fixed a bug where the Sacrifice confirmation would show if you pressed the hotkey even when
  you can't Sacrifice.</li>
<li>Fixed a bug where the game saved notification would appear twice when importing a save.</li>
<li>Fixed a bug where the speed of the Tachyon Particle animation was affected your monitor's refresh rate. (if you have
  a 60hz monitor, it will be the same speed as it was before)</li>
<li>Fixed a bug where the Achievement unlock notification for unlocking "4.3333 minutes of Infinity" said
  "Minute of Infinity".</li>
<li>Fixed a bug where you could still Sacrifice after reaching Infinity.</li>
<li>Fixed a bug where your free tickspeed upgrade count would display as a negative number shortly after purchasing your
  first Time Dimension.</li>
<li>Fixed a bug where you were unable to purchase Dimensions if you had exactly their cost and their cost was below
  Infinity.</li>
<li>Fixed a bug where the "X%" text on the progress bar was left aligned rather than centered.</li>
<li>Fixed a bug where the Achievement image for "Blink of an eye" was a gif.</li>
<li>Fixed a bug where the Achievement unlock condition of "Yo dawg, I heard you liked infinities" was not checked
  correctly.</li>
<li>Fixed a bug where the formula for the displayed multiplier on TS11 was incorrect.</li>
<li>Fixed a bug where the Sacrifice and Dimension Boost Autobuyer would not honor Autobuyer interval.</li>
<li>Fixed a bug where the Reality link was just a video of some guy dancing.</li>
<li>Fixed a bunch of other bugs.</li>
`
  },
  {
    date: [2018, 6, 17],
    name: "This Update Sucks",
    info: `
<b>MAJOR STUFF:</b><br>
<ul>
<li>TIME DILATION</li>
<li>3 ROWS OF SECRET ACHIEVEMENTS</li>
<li>Added more Nicolas Cage.</li>
<li>1 new row of achievements.</li>
<li>Added 3 study tree save slots.</li>
<li>Greatly improved performance. (up to 5x in certain cases, ~3x in almost all cases)</li>
<li>Nerfed EC10 reward. ((infinities * EC10 completions * 0.000002+1) >
(infinities ^ 0.9 * EC10 completions * 0.000002+1))</li>
<li>Added even more Nicolas Cage.</li>
<li>Time study 11 has been capped at 1e2500 and now displays its current multiplier.</li>
<li>Time study 193 has been buffed, requires ~1012680 eternities to cap, rather than 1.5m, and is now capped at 1e13000
instead of ~1.81e12900/1.5m eternities. (1.02^x) > (1.03^x)</li>
<li>The second eternity upgrade has been buffed, and now soft caps at 100k, rather than 125k. The end result is very
slightly higher. ((x/300)^log4(2x)) > ((x/200)^log4(2x))</li>
<li>EC1 now requires 20k eternities per tier to unlock, down from 25k.</li>
<li>TD cost scaling has been increased after costs of 1e1300. (this is in addition to the current increase)</li>
<li>Added additional galaxy cost scaling after 800 galaxies.</li>
<li>Added a button to buy the maximum amount of eternity point multipliers at once.</li>
<li>Offline progress processes ~5x faster, and now simulates autobuyers. (please note that offline progress is still
capped at 1000 ticks, with additional ticks increasing the production of said 1000 ticks)</li>
<li>Added a new save file system that allows 3 different save files at once all with cloud save enabled, along with
a new cloud save UI.</li>
<li>Added an animation to visualize your multiplier gain when you purchase 10 of a dimension, dimension boost/shift,
or sacrifice.</li>
<li>Nicolas Cage.</li>
<li>Added an animation to big crunches. This will only trigger if you haven't eternitied, have a fastest infinity time
above 1 minute, and haven't broken infinity.</li>
<li>Added a button in the options menu to disable individual animations.</li>
<li>Added more news ticker entries</li>
</ul>
<br>
<b>Minor stuff:</b><br>
<ul>
<li>Reduced the space between the secondary eternity tab buttons.</li>
<li>The EC3 description now specifies that dimensional sacrifice is disabled.</li>
<li>Autobuyer inputs now support commas and notation on exponents.</li>
<li>When purchasing the EP or IP multipliers, autobuyer inputs will now always format the updated value above 1000.</li>
<li>The size and placement of the auto IP multiplier and auto RG toggles have been adjusted to fit with the other auto
toggles.</li>
<li>Total time played now increases at a normal rate inside EC12.</li>
<li>Fastest infinity time now updates normally inside EC12.</li>
<li>The time theorem purchasing background is now 20 pixels wider.</li>
<li>Changed the wording on time study 133 for clarity.</li>
<li>Added various missing periods to achievements.</li>
<li>Improved chart performance. (it's still pretty laggy if your settings are too high)</li>
<li>You can now purchase study 201 while you have EC11/12 bought, but you cannot purchase another path.</li>
<li>Purchasing study 131 no longer turns off your replicanti galaxy autobuyer, but instead displays it as disabled.</li>
<li>You can now purchase another split using shift while you have study 201.</li>
<li>You now purchase max galaxies manually by clicking or using the hotkey with more than 6 eternities.</li>
<li>You can now purchase single dimension boosts and galaxies by holding shift while purchasing.</li>
<li>ID8 will now display a rate of change after completing EC7 at least once.</li>
<li>Added an oxford comma to formatted time values.</li>
<li>Made the dimensional sacrifice button 40px wider to prevent the text overflowing.</li>
<li>Made the all tab eternity and infinity point displays 30px wider to prevent the text overflowing.</li>
<li>Moved the big crunch button up to prevent blocking the statistics and achievement tab buttons.</li>
<li>Moved the eternity and infinity buttons inwards to prevent the HTML layout jumping around.</li>
<li>Fixed the placement of certain footers.</li>
<li>Fixed a typo where a news ticker said "Dimesional Sacrifice" instead of "Dimensional Sacrifice"</li>
<li>Fixed a bug where TDs displayed a 2x multiplier per purchase when they actually gave a 4x multiplier.</li>
<li>Fixed a bug where study 51 wouldn't respect notation.</li>
<li>Fixed a bug where the infinity challenges tab would always show.</li>
<li>Fixed a bug where the auto RG toggle would jiggle left and right 1 pixel in certain cases.</li>
<li>Fixed a bug where the rate of change on the 7th dimension wouldn't take into account ID1 while in EC7.</li>
<li>Fixed a bug where EC12 displayed 0.1 seconds after 5 completions, but actually required 0.0 seconds.</li>
<li>Fixed a bug where tickspeed elements wouldn't hide correctly in certain cases.</li>
<li>Fixed a bug where bought eternity challenge unlock studies would show as gray in the dark theme rather than a deep
purple.</li>
<li>Fixed a bug where dimensions 5-8 would hide upon eternity even with the 30 eternity milestone.</li>
<li>Fixed a bug where popup colors weren't inverted in the inverted and inverted metro themes.</li>
<li>Fixed a bug where the eternity point amount wouldn't show when you imported a save with eternity points into a save
without them.</li>
<li>Fixed a bug where locked eternity challenges didn't have a hover effect in the dark metro theme.</li>
<li>Fixed a bug where popups weren't properly centered.</li>
<li>Fixed a bug where ID autobuyers would purchase IDs upon unlock even while disabled.</li>
<li>Fixed a bug where study tree branches drawn to row 22 were off-centered.</li>
<li>Fixed a bug where EP/min and IP/min peaks wouldn't update properly upon import.</li>
<li>Fixed a bug where infinity dimension autobuyers wouldn't hide properly upon import.</li>
<li>Fixed a bug where the IP multiplier autobuyer wouldn't hide properly upon import.</li>
<li>Fixed a bug where the option to change big crunch modes wouldn't hide properly upon import.</li>
<li>Fixed a bug where the max buy galaxy interval setting wouldn't hide properly upon import.</li>
<li>Fixed a bug where the RG autobuyer wouldn't hide properly upon import.</li>
<li>Fixed a bug where the eternity confirmation option wouldn't hide properly upon import.</li>
<li>Fixed a bug where the replicanti upgrade autobuyers wouldn't hide properly upon import.</li>
<li>Fixed a bug where your update rate wouldn't update upon import.</li>
<li>Fixed a bug where the chart line color wouldn't update properly upon import.</li>
<li>Fixed a bug where achievement images were being cut off by 4 pixels on the right and bottom sides.</li>
<li>Fixed a bug where "Yo dawg, I heard you liked infinities..." only required 1e300 times the previous infinity.</li>
<li>Fixed a bug where the auto sacrifice interval would still display as 0.10 seconds even with the
double autobuyer speed breaking infinity upgrade.</li>
<li>Fixed a bug where certain time studies were 1 pixel too far to the left or right.</li>
<li>Fixed a bug where studies 223 & 224 weren't taken into account when displaying antimatter galaxies as
distant antimatter galaxies.</li>
<li>Fixed a bug where study 227 would multiply your 4th time dimension production by 0
if you had no sacrifice bonus.</li>
<li>Fixed a bug where the game would say "You have 1 eternity points." rather than "You have 1 eternity point.".</li>
<li>Fixed a bug where popups would remain open after changing tabs.</li>
<li>Fixed a bug where you were able to select the achievement images by clicking and dragging over them.</li>
<li>Fixed a bug where studies 233 and 234 had the wrong classes assigned to them on load.</li>
</ul>
`
  },
  {
    date: [2018, 4, 1],
    name: "Fixed a Bug where there wasn't an Update",
    info: `
Huge thanks to Omsi for helping me a ton with this.<br><br>
<b>MAJOR STUFF:</b><br>
<ul>
<li>2 NEW ETERNITY CHALLENGES</li>
<li>12 NEW TIME STUDIES</li>
<li>Time study 132 has been buffed from a 30% bonus to a 40% bonus.</li>
<li>Added an achievement bonus for "Popular music": "Replicanti galaxies divide your replicanti by 1.79e308 instead of
resetting them to 1."</li>
<li>Added an achievement bonus for "IT'S OVER 9000": "Sacrifice doesn't reset your dimensions."</li>
<li>Added an achievement bonus for "Like feasting on a behind": "IP multiplier based on time spent this infinity."</li>
<li>Added an achievement bonus for "What do I have to do to get rid of you": "Time dimensions are multiplied by
the number of studies you have."</li>
<li>Added "Infinity" notation.</li>
<li>Added "Brackets" notation.</li>
<li>Added an import/export system for the time study tree.</li>
<li>Added an EP/min & peak EP/min display to the eternity button.</li>
<li>Added an eternity hotkey.</li>
<li>Added something to help you pick your theme.</li>
<li>Added a few more IAPs.</li>
<li>Reduced the cost of "Double IP gain from all sources" IAP from 50 ➜ 40</li>
</ul>
<br>
<b>Minor stuff:</b><br>
<ul>
<li>Added an option to not plot drops in production on the chart. (It will instead copy the newest data point)</li>
<li>Added displays for the current bonuses from time studies 71, 72, and 73.</li>
<li>Built up speed for 6 hours to do it in 0.5x A presses.</li>
<li>Changed study 72 to only work on the 4th infinity dimension, but doubled its power. (No effective change)</li>
<li>Alchemy 120 (Vivification) scaling decreased.</li>
<li>Fixed a bug where the buttons to purchase time studies wouldn't move in inverted themes on firefox.</li>
<li>Fixed a bug. Antman, you're good to go.</li>
<li>Fixed a bug that gave you the ability to set a custom name for your theme when using a secret theme.</li>
<li>Fixed BLJ. Shoutout to SimpleFlips.</li>
<li>Fixed a bug that caused purchasing the EP multiplier to require multiple clicks.</li>
<li>Removed the ghost from the game. Was annoying.</li>
<li>Fixed a bug that allowed you to earn "Long lasting relationship" in EC7.</li>
<li>Monkeys no longer eat humans, as intended.</li>
<li>Fixed a bug where the reward from EC7 could display -1.</li>
<li>Increased the drop rate of collector's pendant items by 20%.</li>
<li>Fixed a bug where the infinity requirement for EC4 could be less than 0.</li>
<li>Transcension gives less Ancient Souls.</li>
<li>Fixed a bug where the visual display for autobuyer bulk buy settings wouldn't update upon your first eternity.</li>
<li>Fixed the rickroll. Now it's properly not working.</li>
<li>Fixed a bug where the EP multiplier would break if its power exceeded 1.79e308.</li>
<li>Leeroy Jenkins' Battlecry now doesn't trigger Patches.</li>
<li>Fixed a bug where the confirmation for starting an infinity challenge would say you need to reach infinity.</li>
<li>Cursors now do circles around the cookie.</li>
<li>Fixed a bug where the offline progress popup would simply say "While you were away" if nothing happened.</li>
<li>Traction has been slightly increased to reduce unwanted drifts.</li>
<li>Fixed a bug that in rare cases would cause the offline progress popup to say you gained "NaNeInfinity" time shards
or infinity power.</li>
<li>Fixed a bug where the tickspeed visual display wouldn't update upon any form of reset.</li>
<li>Bugged a fix where eternity was dumb.</li>
<li>CS now makes notes go faster in mania.</li>
<li>Fixed a bug where replicanti were hidden but still unlocked if you eternitied for the 50th time
while they were locked.</li>
<li>Dirt is now more abundant.</li>
<li>Fixed a bug where the 1st dimension wasn't producing the 0th dimension.</li>
<li>Fixed a bug where The Nameless Ones were too easy.</li>
<li>Fixed a bug where in a specific case, 2 eternity challenges would appear as running at the same time.</li>
<li>Increased TukkunFCG YC rewards by 15%.</li>
<li>Added more space. SPAAAAAAACE</li>
<li>Fixed a bug where the eternity challenges tab would hide after refreshing with less than 1e2000 antimatter.</li>
<li>Fixed a bug where eternity challenges wouldn't update correctly upon import.</li>
<li>Fixed a bug where dimension display values wouldn't update in certain cases.</li>
<li>Portals are now not red.</li>
<li>Fixed a bug where the ON/OFF text on the challenge confirmation option wasn't capitalized upon load.</li>
<li>Reduced GRB's autokill threshold to 2500/2000 power/toughness.</li>
<li>Fixed a typo where the eternity confirmation option said "Eternity confimation".</li>
<li>Added bugs because Omsi wants more bugs to fix. Absolute legend, I'm telling you, the queen is legendary.</li>
<li>Fixed a typo where the reward for "That's faster!" said you started with 20000 antimatter, rather than 200000.</li>
<li>Added depression to your themes.</li>
<li>Fixed inconsistencies with the standard notation naming convention.</li>
<li>Tried to fix a bug where the game was bad but failed. The game is still bad.</li>
<li>Changed the wording on EC4 to say "X or less" rather than "less than X".
(It always worked this way, this is just a correction)</li>
<li>Made donkeys less fast, so you can actually catch them now.</li>
<li>Changed the wording on the EC2 reward to say "affects 1st Infinity Dimension" rather than
"affects Infinity Dimensions". (It always worked this way, this is just a correction)</li>
<li>Increased the base breeding speed of trimps by 10%.</li>
<li>You can now click through the footer and progress bar to access buttons that they are overlapping.
(This is for smaller screens)</li>
<li>Made periods longer.</li>
<li>Added loot boxes.</li>
<li>Removed loot boxes.</li>
<li>Added various missing periods to achievement descriptions.</li>
<li>Added a missing period to time spent in this eternity.</li>
Increased the price of creation count increases from 50 god power to 60.</li>
<li>Added a missing space to the "Autobuyers work twice as fast." upgrade.</li>
<li>Manually buying max dimension boosts no longer requires 10 eternities or more, and now only requires the bulk buy
dimension boosts breaking infinity upgrade.</li>
<li>Did a barrel roll.</li>
<li>Added more useless patch notes</li>
</ul>
`
  },
  {
    date: [2018, 2, 1],
    name: "Eternity Challenges",
    info: `
<ul>
<li>NEW TIME STUDIES</li>
<li>2 new achievement rows</li>
<li>Made certain news messages only show if you have reached certain levels of progression</li>
<li>Massively improved performance of calculating dimension costs thanks to SpectralFlame.
(Cuts cpu usage by up to 2/3 in late-game)</li>
<li>New news (get it?) ticker entries.</li>
<li>Added a production chart.</li>
<li>Added new statistics to replace the scale statistic after 1e100000 antimatter.</li>
<li>Added a new milestone for 30 eternities: "Start with all normal dimensions available for purchase".</li>
<li>Added an option to change the update rate of the game, ranging from 33ms to 200ms.
(before this, it was locked at 50ms)</li>
<li>The game now partially simulates offline progress, instead of estimating it.</li>
<li>Added 3 new eternity upgrades.</li>
<li>Added a reward to the "NEW DIMENSIONS???" achievement, "Your achievement bonus affects Infinity Dimensions."</li>
<li>Buffed time study 111. (10 ^ (log10(antimatter) / 290- 0.75)) > (10 ^ (log10(antimatter) / 285- 0.75))</li>
<li>Buffed time study 83. (1.0001^x) > (1.0004^x)</li>
<li>Nerfed eternity upgrade 1. ((x+1)^3) > (x+1)</li>
<li>Nerfed eternity upgrade 2. (x^log4(2x)) > ((x/300)^log4(2x) with harsher formula above 125,000)</li>
<li>Fixed a bunch of bugs and changed a bunch of things. (more detail below)</li>
<li>Added buy max buttons to Time Dimensions and Time Theorems.</li>
<li>Added a hotkey for replicanti galaxies. (R)</li><br>
<li>Nitty gritty:</li>
<li>Greatly improved the performance of calculating bonus tickspeed from time dimensions.</li>
<li>Replaced all references to soft resets with references to dimension boosts.</li>
<li>Made achievements update on import/hardreset.</li>
<li>Made the game take into account your infinity points gained on crunch for the purposes of
eternity point gain when you eternity.</li>
<li>The replicanti interval is now displayed after and reductions / increases.</li>
<li>Added missing periods to various achievements.</li>
<li>Made the bonus from time study 131 display next to max replicanti galaxies.</li>
<li>Added time dimensions to the info scale.</li>
<li>Changed the description of time study 31 to "Powers up bonuses that are based on your infinitied stat
(to the power of 4)" from "Powers up existing upgrades based on infinitied stat (to the power of 4)".</li>
<li>Changed the description of "MAXIMUM OVERDRIVE" to say "Big Crunch with X" instead of "Reach X".</li>
<li>Added "with reduced effect" to the description of time study 71, 72, and 73.</li>
<li>Changed the text on autobuy max dimension boosts to "Buy max dimboosts every X seconds:"
from "Max dimboost interval:". (To achieve parity with the autobuy max galaxies text)</li>
<li>Made the challenges button always show if you have more than 1 eternity.</li>
<li>Fixed centering issues with infinity and eternity upgrades.</li>
<li>Various minor changes to themes to improve consistency. (Too minute to list, even here)</li>
<li>Made the eternity autobuyer number multiply by 5 when you buy the eternity point multiplier.</li>
<li>Increased the requirement for "Is This Hell?". (5 > 6.66 seconds)</li>
<li>Reduced the starting replicanti interval upgrade cost. (1e160 > 1e140)</li>
<li>Galaxies are labeled "Distant Antimatter Galaxies" when the cost scaling starts. (At 100 galaxies)</li>
<li>Dimensions no longer produce anything after reaching challenge goal, or after reaching infinity with fixed infinity.
This is due to the c6 being abusable.</li>
<li>Made the 7 and 25 eternity milestones work much faster.</li>
<li>After unlocking bulk dimboosts, clicking dimension boost or pressing D will buy max dimension boosts.</li>
<li>Moved fake news, don't you dare to sleep, spreading cancer, and one for each dimension to rows 2, 3, 4,
and 7 respectively.</li>
<li>Added a visual display of how many galaxies/dim boosts you have next to the cost.</li>
<li>Added an explanation of hotkeys to the options page.</li>
<li>Made shift+1-8 purchase singular dimensions and shift+T purchase a singular tickspeed upgrade.</li>
<li>Reworked the display of the buy time theorem buttons.</li>
<li>The milestones page now has 2 columns.</li>
<li>Extended support for standard notation to e3e18, and letter/cancer notation (almost) infinitely.</li>
<li>Added support for standard, letter and logrithm notation in autobuyer inputs.</li>
<li>Added "in a challenge" to the description of "Zero Deaths".</li>
<li>Made most large numbers in achievements be listed in your chosen notation.</li>
<li>Nerfed "Gift From The Gods"'s achievement reward.</li>
<li>Made purchasing time theorems with EP require at least 1 time dimension.</li>
<li>First eternity now takes you to the time dimensions tab.</li>
<li>Time dimension prices now have 2 decimal places.</li>
<li>Reformatted the tick interval reduction text for very small numbers.</li>
<li>The game now keeps track of when you automatically do an infinity, and you can passively gain IP based off the
IP/min in that run if you go offline (but only if infinity isn't broken).</li>
<li>Made time study 171 apply retroactively. This was causing an issue with production being much lower than expected
when going into a long run on the same run as respeccing.</li>
<li>Fixed a bug where max all wasn't giving achievements when buying dimensions.</li>
<li>Fixed a bug where the game wouldn't show the default dimensions tab upon hard resetting.</li>
<li>Fixed a bug where time dimensions were called "X Dimension" rather than "X Time Dimension".</li>
<li>Fixed a bug where the replicanti galaxy button would show as locked if you had more than
the listed max replicanti galaxies and study 131.</li>
<li>Fixed a bug where the last ten eternities average said IP/X rather than EP/X.</li>
<li>Fixed a bug where the big crunch autobuyer said "X times since last crunch" instead of "X times last crunch".</li>
<li>Fixed a bug where the challenge records display wouldn't update upon import.</li>
<li>Fixed a bug where hotkeys wouldn't work sometimes.</li>
<li>Fixed a bug where secret theme names would display as "0" after refreshing.</li>
<li>Fixed a bug where time studies would move around when your window size was too small.</li>
<li>Fixed a bug where infinity dimensions would reset when clicking on a challenge and not entering while
challenge confirmations were on.</li>
<li>Fixed a bug where you always had the infinity challenge 1 reward.</li>
<li>Fixed a bug where eternity milestone classes weren't set correctly upon import.</li>
<li>Fixed a bug where the eternity autobuyer, sacrifice autobuyer, time dimension tab, and replicanti
wasn't hiding correctly upon import.</li>
<li>Fixed a bug where buy max dim boosts was able to buy 1 too many boosts.</li>
<li>Fixed a bug where the study tree would be off-centered if the game windows wasn't wide enough.</li>
<li>Fixed a bug where you could buy factions of dimension boosts with dimension boost bulk buy.</li>
<li>Fixed a bug where your autobuy max dimension boost interval would set itself to itself
if you eternitied while changing it.</li>
<li>Fixed a bug where secondary statistic tabs weren't hiding upon import.</li>
<li>Fixed a bug where replicanti galaxies wouldn't give a bonus if you had less than 3 galaxies.</li>
<li>Fixed a bug where the dimension boost autobuyer would ignore dimension boost costs until they costed 8th dimensions.
</li>
<li>Fixed a bug where the future shop multipliers were displayed before the x rather than after.</li>
<li>Fixed a bug where the challenge confirmation button's off and on were lowercase.</li>
<li>Fixed a bug where the static infinity point display would disappear after eternity.</li>
</ul>`
  },
  {
    date: [2017, 12, 1],
    name: "\"Eternity\" update",
    info: `
<ul>
<li>Time studies tree with free respec</li>
<li>Eternity Milestones with tons of automation</li>
<li>Eternity upgrades</li>
<li>TIME DIMENSIONS</li>
<li>REPLICANTIS</li>
<li>More themes made by Omsi</li>
<li>Disable hotkeys option</li>
<li>Current IP/min post-break</li>
<li>Infinity Challenge times</li>
<li>Past 10 eternities</li>
<li>Lowered IP multiplier cost by 1 Order of magnitude.</li>
<li>3 more rows of achievements</li>
<li>Infinity challenge reward nerfs (1st: 1.5x ➜ 1.3x; 3rd: lowered; 4th: mult^1.1 ➜ mult^1.05)</li>
<li>More news ticker entries</li>
<li>Immensely improved performance thanks to break_infinity.js made by Patashu, it replaces decimal.js</li>
<li>Added LZString for cloud saving purposes.</li>
<li>Achievement refractoring to reduce save string size made by StrangeTim.</li>
<li>Commas between exponents option for numbers higher than e100000</li>
<li>Added logarithm notation</li>
<li>Made letter and cancer notation last longer.
</ul>
`
  },
  {
    date: [2017, 10, 10],
    info: `
<ul>
<li>Complete refactoring for all upgrade UI.</li>
<li>Minor Upgrade Changes. (Capping some upgrades)</li>
<li>Kred shop- 3 paid Upgrades- More upgrades (and upgrade improvements) coming in the future.</li>
<li>8 new Achievements- Achievement Rewards have also been added.</li>
<li>Infinity Challenges- additional challenges to do going from Inf Dim 2 to current end game and beyond.</li>
<li>Main Screen UI updates- IP points are now visible everywhere.</li>
<li>Hotkeys- C for Big Crunch, M for Max All, S for Dimensional Sacrifice, D for Dimension Shift/Boost,
G for Antimatter Galaxy, Numbers 1-8 for Buy 10 (D1-8), A for Toggle Autobuyers.</li>
<li>Bug Fixes- At least 2, including a percentage buff.</li>
</ul>`
  },
  {
    date: [2017, 9, 25],
    info: `
<ul>
<li>NEW DIMENSIONS?</li>
<li>Super Secret Post-Infinity Dimensions added. Get more antimatter to find out!</li>
<li>Post-break double galaxy upgrade nerfed. It now gives 50% more.</li>
<li>Four new post-break upgrades added.</li>
<li>Scaling of the dimension cost multiplier increased.</li>
<li>Eight new achievements added.</li>
<li>Cloud saving maybe added.</li>
<li>Refunded Dimension cost increase multiplier and changed the cost.</li>
</ul>`
  },
  {
    date: [2017, 9, 19],
    name: "Breaking Infinity",
    info: `
<ul>
<li>Post infinity content added (Breaking infinity), requires big crunch speed to be maxed.</li>
<li>New upgrade tree pre-breaking, included one upgrade that be taken multiple times to
increase infinity point gains.</li>
<li>Eight late game post-breaking upgrades.</li>
<li>Eight new achievements.</li>
<li>Reworked autobuyer prices and times, full refund for all points spent on them.</li>
<li>Autobuyers now can be upgraded beyond 0.1 seconds, and they also now 'wait' after their interval has passed,
instantly buying once they are able to.</li>
<li>Automatic DimBoosts, Galaxies, and Big Crunches now have an input box.</li>
<li>Unique achievement rewards for multiple achievements.</li>
<li>Zero galaxies now gives 11% tickspeed.</li>
<li>Galaxies past two give diminishing returns, Faster than a Potato made easier to compensate.</li>
<li>Game now updates 20 times a second with increased performance, max autobuyer speed is not impacted.</li>
<li>Autobuyer settings are now saved in between sessions.</li>
<li>Monitor scaling issues mainly fixed.</li>
<li>Priority should be working properly.</li>
<li>Big crunch button is now less obtrusive.</li>
<li>Your screen no longer defaults to the dimensions tab when you reach infinity
(if you have broken infinity or if your fastest time to reach infinity is less than one minute).</li>
<li>More statistics have been added such as record challenge times and last ten infinities.</li>
<li>Times below one minute are now kept at two decimal points of precision.</li>
<li>Percentage increase per second for dimensions 1-8 are now kept to two decimal points of precision.</li>
<li>The reset button works better now.</li>
</ul>`
  },
  {
    date: [2017, 9, 7],
    name: "Challenges",
    info: `
<ul>
<li>Added 12 challenges.</li>
<li>Added 8 new achievements.</li>
<li>Added autobuyers.</li>
</ul>`
  },
  {
    // These were originally spread throughout 28/8 to 30/8.
    // But they would otherwise hold too little content on their own
    date: [2017, 8, 30],
    info: `
<ul>
<li>Added news on top of the page.</li>
<li>Added a multiplier for completing a row of achievements.</li>
<li>New letter notation option.</li>
<li>Nerfed galaxies from +3% to +2%.</li>
<li>Added 8 new achievements.</li>
<li>Added Dimensional Sacrifice, appears at 5th dimension shift/boost.</li>
<li>More notations!</li>
<li>Bar until infinity at the bottom.</li>
<li>Some UI changes.</li>
</ul>`
  },
  {
    date: [2017, 8, 24],
    name: "Infinity",
    info: `
<ul>
<li>Now when you get to 1.7e308 antimatter, you reach infinity, and you can reset again at infinity,
gaining infinity points.</li>
<li>You can use infinity points for upgrades.</li>
<li>The game also now runs 6 hours while it is closed.</li>
<li>In addition there are some graphic updates.</li>
</ul>`
  },
  // These were originally spread throughout 3/5 to 7/5.
  // But they would otherwise hold too little content on their own
  {
    date: [2017, 5, 7],
    info: `
<ul>
<li>Added this changelog, fixed money displaying problem. Added a title to the HTML.</li>
<li>The game now works offtab.</li>
<li>Fixed the bug with costs showing for example 1000 SxTg.</li>
<li>Visual update! And statistics.</li>
<li>Added export and import options.</li>
<li>Added save button although game saves every 10 seconds.</li>
<li>Slightly smaller text and added a max all button.</li>
<li>Saves should now FINALLY work properly.</li>
</ul>`
  }
  */
];


for (let i = 0; i < changelog.length; i++) {
  changelog[i].id = i;
}
