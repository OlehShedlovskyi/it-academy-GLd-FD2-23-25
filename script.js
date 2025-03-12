const makePurchaseStat = (purchases) => {
    // Обработка массовых покупок
    return purchases.reduce((acc, purchase) => {
        // 1. Общая сумма всех товаров
        acc.total += purchase.amount;

        // 2. по каждой категории
        acc.categories[purchase.category] = (acc.categories[purchase.category] || 0) + purchase.amount;

        // 3. по месяцам
        acc.months[purchase.date] = (acc.months[purchase.date] || 0) + purchase.amount;

        return acc; // Аккумулятор
    }, { total: 0, categories: {}, months: {} }); // Инициализируем аккумулятор
};

// Пример использования
const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];

console.log(makePurchaseStat(purchases));
