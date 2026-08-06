# Jia Gu's academic website

This repository contains the Jekyll source for <https://jia-gu.github.io>.

## Editing content

- Homepage: `_pages/about.md`
- Research index: `_pages/publications.md`
- Publication records and PDFs: `_publications/`
- Teaching index, records, and notes: `_pages/teaching.html` and `_teaching/`
- Navigation and profile details: `_data/navigation.yml` and `_config.yml`
- Current CV: `files/CV-20251004.pdf`

## Local preview

Install Ruby 3.0 or newer and the Bundler gem. Then install the site dependencies and run:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open <http://localhost:4000>. Changes to `_config.yml` require restarting Jekyll.

## Publishing

Develop on a feature branch and preview locally. Publish the branch with GitHub Desktop, open a pull request into `master`, and merge only after review. GitHub Pages publishes the merged `master` branch at the site URL above.
