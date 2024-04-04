<p align="center">
  <a href="https://mrfeod.github.io/cysigns/">
    <img src="https://github.com/mrfeod/cysigns/blob/master/icon/android-chrome-192x192.png?raw=true" alt="Cyprus Road Signs Logo" />
  </a>
  <br>Click ⬆️
</p>

This repo contains a road signs test based on [«Road signs in Cyprus» Wikipedia article](https://en.wikipedia.org/wiki/Road_signs_in_Cyprus).

- [ℹ️About the test](#about-the-test)
  - [🍏iOS app](#ios-app)
  - [🪧Additional information for Cyprus driving license applicants](#additional-information-for-cyprus-driving-license-applicants)
  - [🚦Thirdparty alternatives](#thirdparty-alternatives)
- [🛠️Technical details](#technical-details)
  - [📚The Data](#the-data)
  - [🏗️Thirdparty dependencies](#thirdparty-dependencies)

## About the test
The test has two modes: ***Learning*** and ***Self-test***.

***Learning*** mode suggests choosing from 4 answers and counting passed and failed questions.

The ***Self-test*** mode could be activated in the bottom right corner and allow you to check yourself to knowledge road signs.

Also, for my lovely wife, I created a feature to switch language on a fly between English and Russian.

**[⚠️Try the test here. 🍀Good luck!](https://mrfeod.github.io/cysigns/)**

### iOS app
- ⚙️ [Source code](https://github.com/R1ckNash/cysigns-mobile)
- 📱 [App Store](https://apps.apple.com/cy/app/cysigns/id6480476597)

#### Additional information for Cyprus driving license applicants
- [Cyprus Driving](https://www.cyprusdriving.net/) - great source for people who are looking to get a driving license in Cyprus.
- [Alex Driving School Traffic Signs](https://alexdrivingschoolnicosia.com/traffic-signs.html) - several pdfs with traffic signs and highway code.

#### Thirdparty alternatives
- [Cyprus Road Signs](https://cysigns.online/) - site with several Cyprus road signs tests.
- [Road Signs Cy Bot](https://t.me/roadsignscybot) - Telegram bot.

## Technical details

### The Data
Data scrapping utility provided here: [utils/parse_data.py](utils/parse_data.py)

The script artifacts are `data.json` and `images` directory with road signs images.

You can see road signs in the [images](images) directory and the content of `data.json` in [signs.js](signs.js).

**The data has minor inaccuracies and I hope you provide a PR to fix them.**

### Thirdparty dependencies
Look and feel based on [Spectre.css](https://github.com/picturepan2/spectre/tree/v0.5.9). Purple colors changed to grayshades.

