---
title: Debug Query Laravel
tags:
  - laravel
  - php
emoji: ⚡️
---

```php
DB::enableQueryLog(); // Enable query log

// kode eloquent atau query builder atau semacamnya

dd(DB::getQueryLog()); // Show results of log
```
