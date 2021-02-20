---
title: Fungsi convertToMethodName
tags:
  - php
emoji: ⚡️
---

Di fungsi ini, kita akan mengubah parameter:

## Dari
- `string` yang ***belum*** `method-able`

## Menjadi
- sebuah `string` yang `method-able` dengan format **camelCase**.

```php
public function convertToMethodName($str): string
{
    $str = strtolower($str);
    $method = ucwords(
        preg_replace('/[^a-zA-Z0-9]/', ' ', $str)
    );

    return lcfirst(str_replace(' ', '', $method));
}
```
