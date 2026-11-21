# IDENTITY V (IDV) KNOWLEDGE SYSTEM

## Project handoff document --- Version 1.0

**Created:** 21 November 2026\
**Purpose:** Reusable knowledge base and reasoning framework for a
future Identity V assistant/bot.

------------------------------------------------------------------------

## 1. Project objective

Build a continuously verifiable, version-aware knowledge system for
**both Survivors and Hunters**, covering **all game modes**, from
ordinary play and Rank to high-level competitive play.

The long-term goal is to use this knowledge as the foundation for a
future IDV bot. The bot should not merely repeat character descriptions.
It should interpret a match state, reason about map geometry, character
abilities, timing, team composition, opponent behavior and likely
outcomes, then recommend an action with an explanation and confidence
level.

## 2. Important operating principles

1.  **Current-version first.** Every changeable mechanic must be
    associated with a game version/season, server/region if relevant,
    and date checked.
2.  **Verify before asserting.** Prefer official patch notes and in-game
    evidence. Cross-check Wiki entries, tournament data, community
    guides and videos.
3.  **Separate fact from inference.** Label information as:
    -   Verified fact
    -   Strongly supported interpretation
    -   Strategic hypothesis
    -   Unknown / needs testing
4.  **Do not mix environments.** Rank, Quick Match, tournament rules,
    Duo Hunters, Tarot, Blackjack, Copycat and event modes may have
    different objectives, rules or optimal strategies.
5.  **Do not overgeneralize the meta.** Pick rate, ban rate and win rate
    are not interchangeable. Meta can differ by region, rank, map pool,
    team composition and patch.
6.  **Record provenance.** Store source URL, source type,
    publication/update date, access date, version, and what the source
    actually supports.
7.  **Resolve conflicts explicitly.** If sources disagree, preserve both
    claims, explain the likely reason and mark the mechanic unresolved
    until tested.
8.  **Avoid false precision.** Never invent cooldowns, ranges, spawn
    coordinates, map locations, percentages or tournament results.
9.  **Treat old guides as historical.** A video or guide can teach a
    technique but cannot prove that the current patch has the same
    values.
10. **Update selectively.** On a new patch, identify affected
    characters, maps, modes and strategies; do not assume every stored
    fact changed.

## 3. Research source hierarchy

### Tier S --- primary evidence

-   Official Identity V / NetEase announcements and patch notes.
-   In-game descriptions, training mode and controlled tests.
-   Official tournament rulebooks and official match
    broadcasts/statistics.

### Tier A --- structured reference

-   Identity V Wiki / Fandom, provided the page has relevant citations
    and is checked against current patch information.
-   Liquipedia and established tournament databases.
-   Match-log/statistics sites, after checking their definitions and
    sample sizes.

### Tier B --- practical competitive evidence

-   Professional match VODs, player POVs, team analysis and high-level
    guides.
-   Experienced community creators and regional competitive communities.

### Tier C --- leads and hypotheses

-   Reddit, forums, Discord discussions and unsourced tier lists.
-   Use these to discover questions and techniques, not as sole proof of
    exact mechanics.

Useful starting points (re-check availability and current content): -
Official English site: https://www.identityvgame.com/en/ - Official
announcements: https://www.identityvgame.com/en/news/announcement/ -
Identity V Wiki: https://identityv.fandom.com/wiki/Identity_V_Wiki -
Maps index: https://identityv.fandom.com/wiki/Maps - Liquipedia:
https://liquipedia.net/identityv/ - Community subreddit:
https://www.reddit.com/r/IdentityV/ - IdentityV Match Log:
https://idvlog.com/

## 4. Knowledge architecture

Maintain the following linked modules.

### A. Game rules and mechanics

-   Core match flow and victory conditions.
-   Cipher decoding, rocket chairs, elimination, gates and Dungeon.
-   Damage states, recovery, healing, incapacitation and interaction
    rules.
-   Movement, vaulting, pallets, collision, terrain, elevation and line
    of sight.
-   Traits, persona/talent systems, items and temporary effects.
-   Mode-specific rule differences.
-   Exact values only when verified for the relevant patch.

### B. Character database --- Survivors

For every Survivor, record: 1. Name, role/archetype and current
availability. 2. Current ability text and passive effects. 3. Exact
numerical values with units and conditions. 4. Cooldowns, charges,
duration, range, resource limits and reset rules. 5. Interaction with
terrain, objects, other characters and Hunter abilities. 6. Strengths,
weaknesses, counters and favorable matchups. 7. Map suitability and team
synergies. 8. Persona/talent recommendations and alternatives. 9. Rank
use versus tournament use. 10. Common errors, advanced techniques and
evidence. 11. Patch history and confidence status.

### C. Character database --- Hunters

Use the same structured fields, adding: - Chase tools and chase
patterns. - Camp/rocket-chair control. - Map pressure, rotation and
target switching. - Cipher control and endgame control. - Ability
resource management and attack recovery. - Survivor matchup and
team-composition matchup.

### D. Map atlas

For every map and variant, record: - Official map name, variant, mode
compatibility and current status. - Map layout and named areas. - Spawn
points and spawn logic. - Cipher spawn pools, cipher clusters and
distances. - Dungeon possible locations and appearance conditions. -
Basement possible locations and relevant rules. - Rocket chairs,
pallets, windows, breakable walls and interactable objects. - Exit
gates, transitions, chokepoints, dead zones and strong kiting loops. -
Hunter patrol routes and Survivor rotation routes. - Map-specific
character advantages and strategic plans. - Evidence: current
screenshots, diagrams, tests or official map changes.

**Map location rule:** Do not claim an exact location from memory alone.
Record whether it is a fixed location, a possible spawn, a randomized
spawn, or a location altered by a patch.

### E. Strategy library --- Survivors

-   Kiting, tight kiting, transitional kiting and route planning.
-   Resource conservation and pallet/window decisions.
-   Rescue timing, rebound rescue, body-blocking and support.
-   Cipher allocation, decoding efficiency and cipher priming.
-   Rotation, regrouping, healing and risk management.
-   Gate split, Dungeon decisions and endgame.
-   Solo queue versus coordinated team play.
-   Mode-specific plans.

### F. Strategy library --- Hunters

-   Early-game target selection and spawn reading.
-   Chase routing, mind games and ability timing.
-   Chair placement, camping and rescue interception.
-   Balloon control and chair pressure.
-   Cipher pressure, patrol, rotation and target switching.
-   Multi-survivor pressure and resource management.
-   Gate control, Dungeon control and endgame.
-   Mode-specific plans.

### G. Competitive intelligence

For each league, tournament, region and season: - Format, scoring, map
pool and ban/pick rules. - Team and player roster with date validity. -
Character pick/ban/win statistics and sample size. - Map-specific picks
and matchup data. - Draft patterns and team compositions. - Match VOD
references and timestamps. - Strategic decisions, adaptations and
turning points. - Separate observed facts from analyst interpretation.

### H. Match reasoning engine

Inputs: - Mode, patch, map and variant. - Current time / phase and
objective progress. - Both teams' characters, roles and known talents. -
Spawn information and current positions. - Cipher progress, chair
states, damage states, cooldowns and resources. - Known opponent
tendencies and uncertainty.

Reasoning sequence: 1. Validate the rules for this mode and patch. 2.
Reconstruct the current match state; mark missing information. 3.
Identify immediate threats and time-sensitive objectives. 4. Generate
multiple candidate actions. 5. Estimate each action's benefit, risk,
time cost and downstream effect. 6. Consider opponent responses and
fallback plans. 7. Recommend the best action, explain why, state
assumptions and confidence. 8. Update the match state after new
evidence.

Do not pretend to know hidden information. Use conditional advice when
positions, cooldowns or cipher progress are unknown.

## 5. Standard record templates

### Character record

-   Character:
-   Faction:
-   Role:
-   Game version / season:
-   Server / region:
-   Last verified:
-   Ability description:
-   Numerical values and units:
-   Activation conditions:
-   Cooldown / duration / range:
-   Interactions:
-   Strengths:
-   Weaknesses:
-   Counters:
-   Synergies:
-   Map suitability:
-   Persona / talents:
-   Rank strategy:
-   Tournament strategy:
-   Common mistakes:
-   Advanced techniques:
-   Evidence URLs:
-   Confidence: Verified / Strong / Tentative / Unknown

### Map record

-   Map and variant:
-   Version / mode:
-   Last verified:
-   Spawn logic:
-   Cipher locations / pools:
-   Dungeon possible locations:
-   Basement possible locations:
-   Pallets / windows / walls:
-   Gates / chairs / interactables:
-   Strong and weak zones:
-   Rotation routes:
-   Character-specific advantages:
-   Patch changes:
-   Evidence:
-   Confidence:

### Strategy record

-   Strategy name:
-   Faction / character:
-   Mode / map:
-   Preconditions:
-   Execution steps:
-   Timing cues:
-   Opponent counterplay:
-   Risks and failure conditions:
-   Alternatives:
-   Evidence (match/VOD/timestamp/test):
-   Confidence:

### Patch-change record

-   Patch / publication date:
-   Server / region:
-   Characters / maps / modes affected:
-   Old behavior:
-   New behavior:
-   Strategic implications:
-   Sources:
-   Verification status:

## 6. Initial research notes from the conversation

The previous discussion established the intended scope and a preliminary
research outline: - Both factions: Survivors and Hunters. - All modes,
including Classic, Rank, tournament play and special modes. - Character
mechanics, numerical parameters, persona/talents, counters and
synergies. - Maps, cipher machines, Dungeon, Basement, pallets, windows,
gates, spawn and transition routes. - High-level strategy, professional
tournaments, player techniques and match analysis. - A future
decision-support system for a bot.

**Important quality warning:** Some Season 45 dates, newly named
characters, tournament statistics, percentages and specific map/mechanic
claims mentioned in the earlier chat have not been independently
revalidated in this handoff. Treat them as research leads only, not as
verified facts. Re-check official patch notes and source pages before
importing them into a production database. Do not copy earlier chart
values as ground truth without checking the underlying dataset,
definitions, date range and sample size.

## 7. Suggested data storage for the future bot

Keep source data separate from reasoning rules. Suggested structure:

``` text
idv-knowledge/
  README.md
  manifest/
    current_version.json
    source_registry.csv
    change_log.md
  rules/
    core_mechanics.md
    modes/
  characters/
    survivors/
    hunters/
  maps/
  strategies/
    survivor/
    hunter/
    team_play/
  competitive/
    leagues/
    teams/
    matches/
  tests/
    mechanic_tests/
    map_tests/
  bot/
    state_schema.json
    reasoning_policy.md
    evaluation_metrics.md
```

For a database, use entities such as: - `GameVersion` - `Source` -
`Character` - `Ability` - `Map` - `MapFeature` - `Mode` - `Strategy` -
`Match` - `Tournament` - `Observation` - `PatchChange`

Every fact should have a source link and a version range. Avoid storing
a single mutable value without its history.

## 8. How to reuse this in a new ChatGPT conversation

1.  Keep this file in a safe place or upload it to ChatGPT Library.
2.  Start a new chat and attach this file.
3.  Paste the following instruction:

> Use the attached **IDV Knowledge System** document as the project
> specification and knowledge architecture. Continue the Identity V
> research for both Survivors and Hunters, all modes, high-level and
> competitive play. Do not restart from scratch. First inspect the
> document, preserve its structure, identify what is verified versus
> provisional, then research the newest official patch information and
> update only affected records. Cite sources, record dates and game
> versions, and never invent exact stats or map locations. Build
> reusable structured knowledge for a future bot. When producing an
> update, provide a concise change log and an updated downloadable
> knowledge file.

4.  If the project later has multiple files, attach the latest
    `README.md`, `current_version.json`, change log and the relevant
    character/map records.
5.  In every new chat, state the game version or ask the assistant to
    verify the current version before using patch-sensitive information.

## 9. First priorities for the next research cycle

1.  Verify the live game version and latest official patch notes.
2.  Build a complete current Survivor and Hunter roster.
3.  Audit exact character ability values and patch history.
4.  Build map atlases, beginning with the most commonly used competitive
    maps.
5.  Verify core mechanics such as cipher, chair, Dungeon, Basement and
    gate rules.
6.  Collect current tournament formats and structured match statistics.
7.  Analyze selected professional VODs with timestamps.
8.  Convert verified knowledge into structured records suitable for a
    future bot.

------------------------------------------------------------------------

**Project status:** Knowledge architecture established; detailed
current-version fact collection remains an ongoing research task.\
**Core rule:** Accuracy and traceability are more important than the
apparent size of the knowledge base.
