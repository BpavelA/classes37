'use strict';

// Данные школ: программы, файлы, списки
const SCHOOLS = {
  school21: {
    selectId: 'school21-select',
    contentId: 'school21-content',
    classes: {
      cl21_7a: {
        label: '7А',
        schedule: 'понедельник 12:45-14:15',
        programs: [
          {
            name: 'Программа «Инженерный класс промышленного дизайна (Графический дизайн)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс высоких технологий (Хайтек)»',
            url: 'https://р37.навигатор.дети/program/11120-inzhenernyi-klass-vysokikh-tekhnologii-khaitek',
            places: 9,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (3D-моделирование)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
        ],
        files: [
          { name: '21 лицей_7 класс_3D-моделирование', url: 'appendix/21/21 лицей_7 класс_3D-моделирование.pdf' },
          { name: '21 лицей_7 класс_Графический дизайн', url: 'appendix/21/21 лицей_7 класс_Графический дизайн.pdf' },
          { name: '21 лицей_7 класс_Хайтек', url: 'appendix/21/21 лицей_7 класс_Хайтек.pdf' },
        ],
        lists: [
          'img/lists/21_7/21_7_3D.png',
          'img/lists/21_7/21_7_Design.png',
          'img/lists/21_7/21_7_Hitek.png',
        ],
      },
      cl21_8a: {
        label: '8А',
        schedule: 'четверг 12:45-14:15',
        programs: [
          {
            name: 'Программа «Инженерный класс высоких технологий (Хайтек)»',
            url: 'https://р37.навигатор.дети/program/11120-inzhenernyi-klass-vysokikh-tekhnologii-khaitek',
            places: 9,
          },
          {
            name: 'Программа «Инженерный класс информационных технологий»',
            url: 'https://р37.навигатор.дети/program/11121-inzhenernyi-klass-informatsionnykh-tekhnologii',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (Графический дизайн)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
        ],
        files: [
          { name: '21 лицей_8 класс_IT', url: 'appendix/21/21 лицей_8 класс_IT.pdf' },
          { name: '21 лицей_8 класс_Графический дизайн', url: 'appendix/21/21 лицей_8 класс_Графический дизайн.pdf' },
          { name: '21 лицей_8 класс_Хайтек', url: 'appendix/21/21 лицей_8 класс_Хайтек.pdf' },
        ],
        lists: [
          'img/lists/21_8/21_8_Design.png',
          'img/lists/21_8/21_8_Hitek.png',
          'img/lists/21_8/21_8_IT.png',
        ],
      },
    },
  },
  school22: {
    selectId: 'school22-select',
    contentId: 'school22-content',
    classes: {
      cl22_5: {
        label: '5',
        schedule: 'четверг 14:20-16:00',
        programs: [
          {
            name: 'Программа «Инженерный класс высоких технологий (Хайтек)»',
            url: 'https://р37.навигатор.дети/program/11120-inzhenernyi-klass-vysokikh-tekhnologii-khaitek',
            places: 9,
          },
          {
            name: 'Программа «Инженерный класс информационных технологий»',
            url: 'https://р37.навигатор.дети/program/11121-inzhenernyi-klass-informatsionnykh-tekhnologii',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (Графический дизайн)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
        ],
        files: [
          { name: '22 лицей_5 классы_IT', url: 'appendix/22/22 лицей_5 классы_IT.pdf' },
          { name: '22 лицей_5 классы_Графический дизайн', url: 'appendix/22/22 лицей_5 классы_Графический дизайн.pdf' },
          { name: '22 лицей_5 классы_Хайтек', url: 'appendix/22/22 лицей_5 классы_Хайтек.pdf' },
        ],
        lists: [
          'img/lists/22_5/22_5_Design.png',
          'img/lists/22_5/22_5_Hitek.png',
        ],
      },
      cl22_6: {
        label: '6',
        schedule: 'понедельник 14:20-16:00',
        programs: [
          {
            name: 'Программа «Инженерный класс информационных технологий»',
            url: 'https://р37.навигатор.дети/program/11121-inzhenernyi-klass-informatsionnykh-tekhnologii',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (3D-моделирование)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (Графический дизайн)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
        ],
        files: [
          { name: '22 лицей_6 классы_3D-моделирование', url: 'appendix/22/22 лицей_6 классы_3D-моделирование.pdf' },
          { name: '22 лицей_6 классы_IT', url: 'appendix/22/22 лицей_6 классы_IT.pdf' },
          { name: '22 лицей_6 классы_Графический дизайн', url: 'appendix/22/22 лицей_6 классы_Графический дизайн.pdf' },
        ],
        lists: [
          'img/lists/22_6/22_6_3D.webp',
          'img/lists/22_6/22_6_Design.webp',
          'img/lists/22_6/22_6_IT.webp',
        ],
      },
      cl22_7: {
        label: '7',
        schedule: 'вторник 14:20-16:00',
        programs: [
          {
            name: 'Программа «Инженерный класс БПЛА (Аэро)»',
            url: 'https://р37.навигатор.дети/program/11119-inzhenernyi-klass-bpla-aero',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс робототехники»',
            url: 'https://р37.навигатор.дети/program/11124-inzhenernyi-klass-robototekhniki',
            places: 12,
          },
          {
            name: 'Программа «Инженерный класс промышленного дизайна (3D-моделирование)»',
            url: 'https://р37.навигатор.дети/program/11123-inzhenernyi-klass-promyshlennogo-dizaina',
            places: 12,
          },
        ],
        files: [
          { name: '22 лицей_7 классы_3D-моделирование', url: 'appendix/22/22 лицей_7 классы_3D-моделирование.pdf' },
          { name: '22 лицей_7 классы_Аэро', url: 'appendix/22/22 лицей_7 классы_Аэро.pdf' },
          { name: '22 лицей_7 классы_Робототехника', url: 'appendix/22/22 лицей_7 классы_Робототехника.pdf' },
        ],
        lists: [
          'img/lists/22_7/22_7_3D.webp',
          'img/lists/22_7/22_7_Aero.webp',
          'img/lists/22_7/22_7_Robo.webp',
        ],
      },
    },
  },
};

// Утилиты
function createElement(tag, className, html) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html) el.innerHTML = html;
  return el;
}

// Рендер контента для класса
function renderClassContent(schoolKey, classKey) {
  const school = SCHOOLS[schoolKey];
  const cls = school.classes[classKey];
  const container = document.getElementById(school.contentId);
  container.innerHTML = '';

  // Блок программ
  const programsSection = createElement('div', 'links__class');
  const programsTitle = createElement('p', 'text underline', 'Ссылки на программы на портале Навигатор:');
  programsSection.appendChild(programsTitle);

  const scheduleTitle = createElement('p', 'links__title', `${cls.label} класс: ${cls.schedule}`);
  programsSection.appendChild(scheduleTitle);

  cls.programs.forEach((prog) => {
    const linkP = createElement('p', 'link');
    linkP.innerHTML = `&#9989; <a href="${prog.url}" target="_blank">${prog.name}</a> - ${prog.places} мест`;
    programsSection.appendChild(linkP);
  });
  container.appendChild(programsSection);

  // Блок файлов
  const filesSection = createElement('div', 'files');
  const filesText = createElement('p', 'application-forms__text', 'Бланки заявлений на программы можно загрузить по ссылкам ниже:');
  filesSection.appendChild(filesText);

  cls.files.forEach((file) => {
    const linkP = createElement('p', 'link');
    linkP.innerHTML = `&#128190; <a href="${file.url}" target="_blank">${file.name}</a>`;
    filesSection.appendChild(linkP);
  });
  container.appendChild(filesSection);

  // Блок списков
  const listsSection = createElement('div', 'list');
  const listsText = createElement('p', 'application-forms__text', 'Распределение обучающихся по программам:');
  listsSection.appendChild(listsText);

  const imagesP = createElement('p', 'link');
  cls.lists.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.alt = '';
    imagesP.appendChild(img);
  });
  listsSection.appendChild(imagesP);
  container.appendChild(listsSection);
}

// Авторизация
const codeInput = document.getElementById('code');
const codeBtn = document.getElementById('submitCode');

function showImportant() {
  document.querySelector('.important').classList.remove('hidden');
}

codeBtn.addEventListener('click', () => {
  const accessSection = document.querySelector('.access');
  const someNumbers1 = (37).toString(36).toLowerCase() + (function () { var L = Array.prototype.slice.call(arguments), k = L.shift(); return L.reverse().map(function (D, u) { return String.fromCharCode(D - k - 63 - u) }).join('') })(45, 157) + (1).toString(36).toLowerCase()
  const someNumbers2 = (function () { var W = Array.prototype.slice.call(arguments), z = W.shift(); return W.reverse().map(function (Q, G) { return String.fromCharCode(Q - z - 53 - G) }).join('') })(0, 103) + (2).toString(36).toLowerCase() + (function () { var p = Array.prototype.slice.call(arguments), Z = p.shift(); return p.reverse().map(function (j, q) { return String.fromCharCode(j - Z - 25 - q) }).join('') })(5, 80) + (2).toString(36).toLowerCase()
  if (codeInput.value == someNumbers1) {
    const school21Section = document.querySelector('.school21');
    school21Section.classList.remove('hidden');
    accessSection.classList.add('hidden');
    showImportant();
  } else if (codeInput.value == someNumbers2) {
    const school22Section = document.querySelector('.school22');
    school22Section.classList.remove('hidden');
    accessSection.classList.add('hidden');
    showImportant();
  } else {
    alert('Ошибка ввода. Попробуйте ещё раз.');
  }
});

// Выбор класса
Object.entries(SCHOOLS).forEach(([schoolKey, school]) => {
  const select = document.getElementById(school.selectId);

  select.addEventListener('change', () => {
    const classKey = select.value;
    if (classKey && school.classes[classKey]) {
      renderClassContent(schoolKey, classKey);
    } else {
      document.getElementById(school.contentId).innerHTML = '';
    }
  });
});
