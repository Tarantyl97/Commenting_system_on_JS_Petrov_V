# Commenting_system_on_JS_Petrov_V

ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ

В реализованном проекте можно:

добавлять комментарии. Так как проект не подразумевает создание серверной части, данные можно сохранять в браузере, а для тестирования использовать mock-данные (искусственные данные, имитирующие реальные).
отвечать на уже существующие комментарии.
задавать максимальную длину комментария (1000 символов). При превышении этого лимита пользователю запрещается публиковать комментарий (кнопка отправки комментария должна стать неактивной).
изменять рейтинг комментария — увеличивать или уменьшать его на единицу. Каждый пользователь может менять рейтинг строго на единицу (не более). Данные о рейтинге и его изменении можно также хранить в браузере. Прописать это можно в localStorage, чтобы и после обновления страницы было видно, что пользователь уже поменял рейтинг комментария.
добавлять комментарий в избранное. После добавления комментария в избранное должны изменяться иконка и текст (макет). При повторном нажатии все изменения отменяются и комментарий перестаёт быть избранным.
сортировать все комментарии по различным параметрам — избранные, по дате размещения, количеству оценок, количеству ответов. По умолчанию используйте сортировку по дате размещения.

FUNCTIONAL REQUIREMENTS

In the implemented project, you can:

Add comments. Since the project does not imply the creation of the server part, the data can be saved in a browser, and to use MOCK-data for testing (artificial data that simulate real).
Respond to existing comments.
set the maximum comment length (1000 characters). If this limit is exceeded, the user is prohibited from publishing a comment (the commentary sending button should become inactive).
Change the comment rating - increase or decrease it by one. Each user can change the rating strictly per unit (no more). Data on the rating and its change can also be stored in the browser. This can be prescribed in Localstorage so that after updating the page it was clear that the user has already changed the comment rating.
Add a comment to favorites. After adding a commentary to the favorites, the icon and text (layout) should change. With repeated pressing, all changes are canceled and the comment ceases to be elected.
Sort all comments on various parameters - selected, on the date of placement, the number of assessments, the number of answers. By default, use the sorting by the date of placement.
