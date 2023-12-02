function findMultiples(x, n) {
    const multiples = [];
  
    for (let i = 1; i <= n; i++) {
      multiples.push(x * i);
    }
  
    return multiples;
  }
  
  // Пример использования:
  const x = 1; // Исходное число
  const n = 20; // Количество кратных чисел, которые нужно найти
  const result = findMultiples(x, n);
  
  console.log(result)