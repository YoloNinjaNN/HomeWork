/* 
Програма повинна
1. Вивести для користувача 3 питання з масиву questions 
   (використовувати функцію prompt())
2. За відповідями користувача підрахувати та зберегти 
   кількість правильних та неправильних відповідей
   Підказка: Результати зберігати в масивах 
   rightAnswers, wrongAnswers
3. Вивести результати в div з id="result" так, 
   як показано на відео  task_3.mkv
   Підказка: Тобто треба в циклі по черзі обійти масиви
	rightAnswers, wrongAnswers та сформувати строку з 
    результатами. Цю строку  за допомогою innerHTML
    вивести в div з id="result"
 */
var questions = [
  ["2 + 2", 4], // 2 + 2 -> это вопрос, 4 -> правильный ответ
  ["9 / 3", 3],
  ["5 * 5", 25],
];