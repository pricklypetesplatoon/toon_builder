![toon-builder](https://user-images.githubusercontent.com/95978686/145688471-18262ef1-62dd-4698-8a27-555617e5ceb1.png)

[Prickly Petes Platoon](https://pricklypetesplatoon.army/) | Twitter: [@Pricklyplatoons](https://twitter.com/Pricklyplatoons) |  Discord: [Prickly Petes Platoon](https://discord.gg/EpCFPE6e)

# Toon Builder

A tool that helps you create PFPs, any generative art, by selecting different traits.

# Steps to build, run...

The repo is divided into three folders,
 - backend
 - frontend
 - common

## backend
This hosts the API that renders the image. 

Inspired from the amazing [hashlips library](https://github.com/HashLips/hashlips_art_engine), big shout out to Daniel [twiiter](https://twitter.com/de_botha) 

### build
```
cd backend
yarn install
```
### run
```
yarn start
```
## frontend
The beautiful portal that allows you choose traits of your liking, and create magic!

### build
```
cd frontend
yarn install
```
### run
```
yarn start
```
## common
This keeps the assets at a central place, so that the frontend and backend are always in sync.
You would want to change the contents of this folder to be able to customize it for your project.

The current assets are taken from [here](https://github.com/HashLips/generative-art-opensource/tree/v4/input)

# Development Plan

- [x] Create repo, open source it
- [ ] Docker Compose
