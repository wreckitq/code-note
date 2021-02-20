---
title: Setup Package Lokal untuk Proyek Laravel
tags:
  - php
  - laravel
  - composer
emoji: 💻
---

# Buat project laravel

```sh
laravel new sandbox
# atau
composer create-project --prefer-dist laravel/laravel sandbox
```

# Ubah tambahkan repositories ke composer.json di sandbox

```json
    "repositories": [
        {
            "type": "path",
            "url": "../packages/tall",
            "options": {
                "symlink": true
            }
        }
    ],
    "require": {
        ...
    },
```

# Install package seperti biasa

```sh
composer require laravel-frontend-presets/tall
```

> #### Hal yang perlu di perhatikan
> Pastikan ketika instalasi dia *symlinking* ke path yang kita berikan (value **"url"** diatas), dalam case diatas berarti dia memuat ke **"../packages/tall"**
> Versioning pada instalasi package juga tidak akan sesuai dengan latest di packagist, akan ada prefix **dev-** diikuti dengan nama branch (**main** atau **master**)