# PPI Calculator

ppicalculator calculates pixels per inch for a certain screen

## Description

PPI is a bit more correct, but DPI is the more common term. If you are interested, you can read more in this [Wikipedia Article](https://en.wikipedia.org/wiki/Pixel_density).

## Install

```
npm install ppicalculator
```

## Usage

ppi(hRes, vRes, diagSize)

hRes: Horizontal resolution in Pixels

vRes: Vertical resolution in Pixels

diagSize: Diagonal size in inches

```
import ppi from 'ppicalculator'

ppi(1980, 1080, 13.3) // 166

```

## Credits

[Fabio Cortés](https://twitter.com/fabiojcortes)

##License

[MIT](https://opensource.org/licenses/MIT)
