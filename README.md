Задача: Тест https://github.com/ksholla20/mxgraph-vsdx

Шаги: Клонируем проект bpmbpm/mxgraph-vsdx-test на комп

node index.js

По тексту index.js коментариями показана проблема с import (первая команда скрипта)

Для возврата к исходному коду ksholla20/mxgraph-vsdx нужно из mxgraph-vsdx-test\node_modules\mxgraph-vsdx\package.json 

удалить строку: "type": "module"
