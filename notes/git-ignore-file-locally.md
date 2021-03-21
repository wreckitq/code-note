---
title: Mengabaikan Beberapa File Local di Git
tags:
  - git
emoji: ⚡️
---

```sh
# ignore some files
git update-index --skip-worktree <file-list>

# reverse some files
git update-index --no-skip-worktree <file-list>
```
