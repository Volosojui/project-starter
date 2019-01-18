const SRC = './app';
const BUILD = './build';
const DIST = './dist';

const DEV_CSS_BUNDLE_NAME = 'bundle.css';
const DEV_JS_BUNDLE_NAME = 'bundle.js';
const PROD_CSS_BUNDLE_NAME = 'bundle.min.css';
const PROD_JS_BUNDLE_NAME = 'bundle.min.js';

module.exports = {
  clean: {
    dest: [BUILD, DIST]
  },
  browserSync: {
    port: 9000,
    open: false,
    server: {
      baseDir: [BUILD, SRC]
    },
    files: [BUILD + '/**']
  },
  githubPages: {
    local: {
      src: BUILD + '/**/*',
      options: {
        message: 'gh-pages'
      }
    },
    production: {
      src: DIST + '/**/*',
      options: {
        message: 'gh-pages'
      }
    }
  },
  copy: {
    local: {
      favicons: {
        src: SRC + '/favicons/*',
        dest: BUILD
      },
      images: {
        src: [],
        dest: BUILD + '/assets'
      },
      fonts: {
        src: SRC + '/fonts/**/*',
        dest: BUILD + '/fonts'
      }
    },
    production: {
      favicons: {
        src: SRC + '/favicons/*',
        dest: DIST
      },
      images: {
        src: [],
        dest: DIST + '/assets'
      },
      fonts: {
        src: SRC + '/fonts/**/*',
        dest: DIST + '/fonts'
      }
    }
  },
  iconfont: {
    local: {
      icons: {
        src: SRC + '/iconfont/icons/*.svg',
        options: {
          cssFontPath: '../fonts/',
          fontName: 'iconfont',
          normalize: true,
          formats: ['woff2', 'woff', 'ttf']
        },
        dest: BUILD + '/fonts'
      },
      templates: {
        styles: {
          src: SRC + '/iconfont/templates/icons.scss',
          className: 'Icon',
          dest: SRC + '/stylesheets/iconfont/'
        }
      },
    },
    production: {
      icons: {
        src: SRC + '/iconfont/icons/*.svg',
        options: {
          cssFontPath: '../fonts/',
          fontName: 'iconfont',
          normalize: true,
          formats: ['woff2', 'woff', 'ttf']
        },
        dest: DIST + '/fonts'
      },
      templates: {
        styles: {
          src: SRC + '/iconfont/templates/icons.scss',
          className: 'Icon',
          dest: SRC + '/stylesheets/iconfont/'
        }
      },
    }
  },
  styles: {
    local: {
      sass: {
        src: SRC + '/stylesheets/local.scss',
        dest: BUILD + '/css',
        outputName: DEV_CSS_BUNDLE_NAME
      }
    },
    production: {
      sass: {
        src: SRC + '/stylesheets/production.scss',
        dest: DIST + '/css',
        outputName: PROD_CSS_BUNDLE_NAME
      }
    }
  },
  assets: {
    local: {
      src: SRC + '/assets/**/*',
      dest: BUILD + '/assets',
    },
    production: {
      src: SRC + '/assets/**/*',
      dest: DIST + '/assets'
    }
  },
  pug: {
    local: {
      src: [
        SRC + '/templates/**/*.pug',
        '!' + SRC + '/templates/mixins',
        '!' + SRC + '/templates/mixins/**',
        '!' + SRC + '/templates/layout',
        '!' + SRC + '/templates/layout/**',
        '!' + SRC + '/templates/partials',
        '!' + SRC + '/templates/partials/**',
        '!' + SRC + '/templates/variables',
        '!' + SRC + '/templates/variables/**'
      ],
      svgicons: {
        src: SRC + '/svgicons/**/*.svg',
        options: {
          base: SRC + '/svgicons',
          // read: false
        }
      },
      data: {
        css: 'css/' + DEV_CSS_BUNDLE_NAME,
        js: 'js/' + DEV_JS_BUNDLE_NAME
      },
      dest: BUILD
    },
    production: {
      src: [
        SRC + '/templates/**/*.pug',
        '!' + SRC + '/templates/mixins',
        '!' + SRC + '/templates/mixins/**',
        '!' + SRC + '/templates/layout',
        '!' + SRC + '/templates/layout/**',
        '!' + SRC + '/templates/partials',
        '!' + SRC + '/templates/partials/**',
        '!' + SRC + '/templates/variables',
        '!' + SRC + '/templates/variables/**'
      ],
      svgicons: {
        src: SRC + '/svgicons/**/*.svg',
        options: {
          base: SRC + '/svgicons'
        }
      },
      data: {
        css: 'css/' + PROD_CSS_BUNDLE_NAME,
        js: 'js/' + PROD_JS_BUNDLE_NAME
      },
      minifyCss: {
        src: DIST + '/css/**/*',
        dest: DIST + '/css'
      },
      dest: DIST
    }
  }
}