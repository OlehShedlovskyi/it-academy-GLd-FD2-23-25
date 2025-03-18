function Participant(имя, почта) {
    this.имя = имя;
    this.почта = почта;
}

function Event(название, дата) {
    this.название = название;
    this.дата = дата;
    this.участники = [];

    this.добавитьУчастника = function(человек) {
        if (человек instanceof Participant) {
            this.участники.push(человек);
            console.log('Добавили ' + человек.имя);
        } else {
            console.log('Ошибка! Это не участник!');
        }
    };

    this.показатьУчастников = function() {
        console.log('--- Список для "' + this.название + '" ---');
        for (var i = 0; i < this.участники.length; i++) {
            var номер = i + 1; // нумеруем с 1
            var участник = this.участники[i];
            console.log(номер + '. ' + участник.имя + ' (' + участник.почта + ')');
        }
    };

    this.найтиПочту = function(почта) {
        var искомаяПочта = почта.toLowerCase().trim();

        // Ищем в массиве
        for (var i = 0; i < this.участники.length; i++) {
            var текущаяПочта = this.участники[i].почта.toLowerCase().trim();
            if (текущаяПочта === искомаяПочта) {
                return this.участники[i]; // нашли!
            }
        }
        return null;
    };
}

var вечеринка = new Event(
    "День рождения",
    "2024-12-31"
);

var участник1 = new Participant(
    "Маша",
    "masha@mail.ru"
);

var участник2 = new Participant(
    "Петя",
    "petya@yandex.ru"
);

var неУчастник = {
    имя: "Хакер",
    почта: "hack@bad.com"
};

вечеринка.добавитьУчастника(участник1);
вечеринка.добавитьУчастника(участник2);
вечеринка.добавитьУчастника(неУчастник);

вечеринка.показатьУчастников();

var найденный = вечеринка.найтиПочту(" PETYA@YANDEX.RU ");
console.log('Нашли:', найденный.имя); // Петя