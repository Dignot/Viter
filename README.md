# projectFront
git flow

Master - основная ветка 
dev  - рабочая ветка 
release- ветка релиза
bug - ветка багов
feature-ветка для новых задач 
hotfix - ветка для критичных ошибок

разработка в dev:
- создать ветку feature/task(task:название задания) от dev
- выполнить задание
- сделать PR в ветку dev 

запуск релиза 
- создать ветку release 1.0 (версия релиза) от dev
- если нет багов то запустить PR в master

Исправление багов найденых в релизе
- создать ветку bug/task-1-dev от dev
- создать ветку bug/task-1-release от release
- после исправлнеие бага сделать PR:
    - task-1-release в release
    - task-1-dev в dev

Исправление багов найденых в master
 - создать ветку release 1.0.1 от ветки последнего релиза release 1.0
    если есть баги то:
 - создать ветку bug/task-1-dev от dev
 - создать ветку bug/task-1-release от release 1.0.1
 - если нет багов сделать PR ветки release 1.0.1 в master и bug/task-1-dev в dev

Исправление багов в dev
 - создать ветку bug/task-1-dev от dev
 - после исправлнеие бага сделать PR:
 - bug/task-1-dev в dev

Исправление критичных багов 
 - создать ветку release 1.0.1 от ветки последнего релиза release 1.0
 - создать ветку hotfix/task-1-dev от dev
 - создать ветку hotfix/task-1-release от release 1.0.1
 - после исправлнеие бага сделать PR:
    - hotfix/task-1-release в release 1.0.1
 После тестирования пр release 1.0.1 в master и hotfix/task-1-dev в dev

Комметарии 
 - Каждая ветка содержит по одному коммиту
 - Коммиты должны отображать суть внесенных изменений или поставленной задачи 
 - Комиты ПР соответсвуют коммиту сливаемой ветки 
 - При пр в мастер комитом или тэгом  указать версию релиза или патча.
