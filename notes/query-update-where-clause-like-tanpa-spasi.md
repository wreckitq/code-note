---
title: Query MySQL untuk Update Data Wilayah Indonesia Terbaru
tags:
  - sql
  - laravolt
  - indonesia
emoji: 💽
---

*Query* dibawah ini untuk menyelesaikan *case* pembaharuan data [laravolt/indonesia](laravolt/indonesia). Yang mana data terbaru belum ada *prefix*-nya (**KOTA/KABUPATEN**), sementara data lama sudah ada. Jadi, *pseudocode*-nya:

- Cari data *name* di **old_indonesia** dari database **new_indonesia**
- Dalam pencarian data tersebut *ignore* spasi (contohnya di data baru ada **GUNUNG KIDUL** sementara di data lama bernama **KABUPATEN GUNUNGKIDUL**)
- Gunakan *where clause* `LIKE %{$nama_dari_database_baru}%` untuk mencari data di database yang **lama**.

```sql
UPDATE
    new_indonesia.cities new_data
SET
    new_data.name = (
        SELECT
            old_data.name
        FROM
            old_indonesia.cities old_data
        WHERE
            REPLACE(old_data.name, ' ', '') LIKE
            REPLACE(CONCAT('%', new_data.name ,'%'), ' ', '')
        LIMIT 1
    )
WHERE
    EXISTS (
        SELECT
            1
        FROM
            old_indonesia.cities old_data
        WHERE
            REPLACE(old_data.name, ' ', '') LIKE
            REPLACE(CONCAT('%', new_data.name ,'%'), ' ', '')
    );
```
