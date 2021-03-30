# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.0](https://github.com/joe-bell/next-google-fonts/compare/v2.1.0...v2.2.0) (2020-03-30)

### Features

- Add keys to `<Head>` tags to prevent duplicates ([e0caed5](https://github.com/joe-bell/next-google-fonts/commit/e0caed540c45655dd38f42665a00094ec58e086e))
- Add `data-next-google-fonts-*` attributes for debugging ([dd7cc13](https://github.com/joe-bell/next-google-fonts/commit/dd7cc13b2501cf739c9bc24e1b1b7ddd05099e31))

## [2.1.0](https://github.com/joe-bell/next-google-fonts/compare/v2.0.0...v2.1.0) (2020-03-15)

### Features

- add "no-js" fallback ([4f45eb2](https://github.com/joe-bell/next-google-fonts/commit/4f45eb2974f8829c56b9d7cd2a72f2989693bd42))
  > In the unlikely event that a visitor has intentionally disabled JavaScript, fall back to the original method. The good news is that, although this is a render-blocking request, it can still make use of the preconnect which makes it marginally faster than the default.
  >
  > [Harry Roberts](https://csswizardry.com/2020/05/the-fastest-google-fonts/#google-fonts-async-snippet)

## [2.0.0](https://github.com/joe-bell/next-google-fonts/compare/v1.3.0...v2.0.0) (2020-02-26)

### Refactor

- switches to named `GoogleFonts` export ([8fdb19d](https://github.com/joe-bell/next-google-fonts/commit/8fdb19d78b58b3eceba8a2c5973b30bb4583ddd4))

### Features

- upgrade peerDeps to latest `next` and `react` versions ([8fdb19d](https://github.com/joe-bell/next-google-fonts/commit/8fdb19d78b58b3eceba8a2c5973b30bb4583ddd4))

## [1.3.0](https://github.com/joe-bell/next-google-fonts/compare/v1.2.1...v1.3.0) (2020-02-25)

### Features

- add named export of `GoogleFonts` ([f9e17b5](https://github.com/joe-bell/next-google-fonts/commit/f9e17b52d2cfd66ee3be5a1a1f77810b0d1fd77e))

## [1.2.1](https://github.com/joe-bell/next-google-fonts/compare/v1.2.0...v1.2.1) (2020-07-08)

### Reverts

- remove react-google-fonts until tested ([f9096dd](https://github.com/joe-bell/next-google-fonts/commit/f9096dd68d11aa10a473e007ae244b766d0f6c63))

## [1.2.0](https://github.com/joe-bell/next-google-fonts/compare/v1.1.0...v1.2.0) (2020-07-08)

### Features

- introduce react-google-fonts ([aea5b19](https://github.com/joe-bell/next-google-fonts/commit/aea5b198e1073a2be062515b964cc5850e853614))
