# fitBitClockFace
Light FitBit clock face built on SDK for Versa 3 watches.

## This ClockFace displays :
- Live BPM
- hours minutes and seconds(hh-mm-ss)
- day and month (dd/mm)
- day ('Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.')
- PNG background picture

## How to build

- Create your project using the following instructions

[FitBit Command Line Interface Guide](https://dev.fitbit.com/build/guides/command-line-interface/)

- Clone the project

```bash
  git clone https://github.com/FlyR9/fitBitClockFace
```

- Replace app and ressources directories of your project.

> [!IMPORTANT]  
> Add to the ```package.json``` the following permission ```"access_heart_rate"``` or the app will not be able to get datas from the heart beat sensor.

- Build and install your app according to the CLI interface :
  
```bash
npx fitbit //Start npx
```

```bash
bi //Build & install
```
