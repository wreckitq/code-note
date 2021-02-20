---
title: 5 Langkah Mengubah Branch master ke main
tags:
  - vcs
  - git
emoji: 🌳
---

# Buat branch main di lokal dari branch master

```sh
git branch -m master main
```

# Push branch main ke origin

```sh
git push -u origin main
```

# Ganti *current HEAD* ke branch main

```sh
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
```

# Ganti default branch di repository

- [Mengganti default branch di GitHub](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch)

# Hapus branch master di remote

```sh
git push origin --delete master
```

# Validasi

```sh
git branch -a
```
