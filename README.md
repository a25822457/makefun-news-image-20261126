# Thursday 26 November 2026 — the world's news in one image

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/a25822457/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/a25822457/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

[make.fun competition — news-image-20261126](https://make.fun/c/news-image-20261126)

A dense one-page broadsheet of **Thursday 26 November 2026**: 35 stories from
that single day — a masthead, a ticker, six big numbers, three main stories
with maps, eight secondary stories, a world map with numbered pins, and an
index of the other 24 stories. The entries that lead this competition pack the
whole day's news into one page, so this entry covers the full day instead of a
handful of headlines, and every story is dated to 26 November.

**Date caveat:** every story here happened or was first reported on Thursday
26 November 2026, as the named outlets reported it. Eight items are 26 November
reports of developments from 25 November or earlier, and are marked (R) in the
table: the Trump–Rutte statement, Kim's nuclear-material inspection, the second
birthright-citizenship ruling, the revised 76-hostage figure from Cartagena,
the 1Password disclosure, the Daewoong IND announcement, the Sarawak teacher's
sentence, and the Blue Dragon Awards ceremony. The image's DATE CHECK footer
names the 25 November stories that were left out — including the US tariff
proposal on 14 partners, which led the previous day's page and does not belong
on a 26 November page.

## The 35 stories in the image

| # | Story | What happened | Verified against |
| --- | --- | --- | --- |
| 1 | **Missiles downed over Riyadh** | Saudi defences destroy two ballistic missiles fired toward Riyadh, plus a cruise missile and a drone near Jeddah. | Gulf News (AFP) · Al Jazeera |
| 2 | **Israel hits senior Hamas figure** | The IDF and Shin Bet strike a senior Hamas figure in Gaza, days after killing two internal-security leaders. | Jerusalem Post · Times of Israel |
| 3 | **Ebola passes 12,000 cases** | Confirmed Ebola cases in Congo pass 12,000, with 5,904 dead; the second-largest outbreak on record. | Reuters |
| 4 | **EU fights over €1.6tn budget** | EU leaders clash over the 2028–2034 budget, with up to €100bn for Ukraine. | Reuters |
| 5 | **Korea rate up to 3.25%** | The Bank of Korea lifts its rate 25bp to 3.25%, a high since November 2024. | Reuters |
| 6 | **Nvidia halts shipments** | Nvidia tells partners to halt server shipments to four Southeast Asian states. | Reuters · FT |
| 7 | **13 dead, 13 trapped** | Search resumes for 13 trapped in an illegal West Java gold mine; 13 are dead. | Reuters |
| 8 | **76 hostages freed** (R) | 76 people were held in a 17-hour Cartagena siege, twice the first count; all freed. | Arab News (AFP) |
| 9 | **'Hope' wins Best Film** (R) | 'Hope' takes Best Film at the Blue Dragon Awards; 'Possible Love' wins four prizes. | Yonhap |
| 10 | **Floods displace 600** | Floods submerge six villages in Kenya's Tana Delta; 600 households displaced. | People Daily |
| 11 | **'South Park' x GTA VI** | Zombie Kenny turns up inside a GTA VI game as the town blames AI data centres. | Hollywood Reporter |

| 12 | Florida | Trump, Rutte urge Russia not to widen war. (R) | Reuters |
| 13 | London | UK to put EU deal bill before Parliament. | News Central TV · AFP |
| 14 | Dili | Timor-Leste, Vanuatu pledge closer climate ties. | TATOLI |
| 15 | Washington | Second judge blocks birthright order. (R) | Arab News (Reuters) |
| 16 | Pyongyang | Kim urges wider tactical nuclear use. (R) | Yonhap |
| 17 | Sydney | Capex +12.2%, best since 2011. | Reuters · ABS |
| 18 | Singapore | Factory output +6.1% on AI demand. | Business Times · Straits Times |
| 19 | Tokyo | Asian rally: Nikkei +1.6%, Kospi +1.9%. | Reuters |
| 20 | Mumbai | Shares gain on record $15.16bn inflows. | Reuters |
| 21 | Global | Bitcoin reclaims $61,000; cap $2.147tn. | KuCoin · BlockBeats |
| 22 | San Jose | Kioxia-Nvidia demo petabyte GPU memory. | BusinessWire |
| 23 | Toronto | 1Password breach takes names and emails. (R) | The Hacker News |
| 24 | Seoul | Daewoong wins Phase 1 IND for cancer drug. (R) | PRNewswire |
| 25 | Mumbai | Wipro to take over 3,000 BP finance staff. | Reuters |
| 26 | Mumbai | Siemens Energy India profit jumps 81.5%. | Reuters |
| 27 | Moscow | Wife of detained Japanese journalist pleads. | Reuters |
| 28 | Seoul | South Korea vows talks after US tariff plan. | Reuters |
| 29 | New Delhi | Uber names Ranjan to lead South Asia. | Reuters |
| 30 | Portland | Blazers stun Spurs 116-111; Wembanyama 44. | DYMA Data |
| 31 | Washington | Tatum 41 as Celtics beat Wizards. | AFP |
| 32 | Dubai | Capitals beat Vipers by 45 runs, first win. | TOB News |
| 33 | Sri Aman | Teacher jailed 260 years over 8 girls. (R) | Malay Mail |
| 34 | Singapore | Man jailed over naked lift punishment. | Straits Times |
| 35 | USA | U2 play Dolly Parton tribute at halftime. | Rolling Stone |

(R) = first reported on 26 November; the underlying event was 25 November or earlier.

## How the image was made

`entry.png` is 1024×1024. It was drawn programmatically with Pillow at 1600×1600
and downscaled with Lanczos: masthead, ticker, six big numbers, three maps
(Saudi Arabia, Gaza, DR Congo — simplified polygons, original vector art),
eight secondary cells with small icons, a world map with 11 numbered pins, the
24-item index, and a DATE CHECK footer. No photos, no copied artwork. The
render has no randomness and no timestamps — two runs produce the identical
file (sha256 `8c2c5beefe4925d3531c14aa554ca305f501353bf4aa74bb6a9c9574e8940d93`).

## How to run it

```bash
node main.ts
# or: MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`) unchanged.
Requires Node 22+ and the standard library only.
