---
title: Fungsi logInfo ke Sentry untuk Production
tags:
  - php
emoji: ⚡️
---

Jadi, *most commonly* kita tidak *elok* atau tidak etis untuk *debugging* ketika sudah **production**. Dan, *certain case* kita perlu *logging* untuk perbaikan ***issue*** di **production**. Untuk itulah, ***logInfo*** ke Sentry ini lahir. Heuheu.

```php
use Sentry\Severity;
use function Sentry\captureMessage;

if (! function_exists('logInfo')) {
    function logInfo(String $message): void
    {
        captureMessage($message, Severity::info());
        Log::info($message);
    }
}
```
