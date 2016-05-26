function getMessage(a:*, b:*=):string {
  if (typeof a === 'boolean') {
    if (a == true) {
    console.log('Переданное GIF-изображение анимировано и содержит' + ' ' + b + ' ' + 'кадров');
    }
    else {
    console.log('Переданное GIF-изображение не анимировано');
    }
  }
  if (typeof a === 'number') {
    console.log('Переданное SVG-изображение содержит' + ' ' + a + ' ' + 'объектов и' + ' ' + (b * 4) + ' ' + 'атрибутов');
  }
  if (Array.isArray(a)) {
    var sum = 0;
    for var i = 0; i < a.length; i++ {
      sum += array[i];
    }
    console.log('Количество красных точек во всех строчках изображения:' + ' ' + sum);
  }
  if ((Array.isArray(a) && Array.isArray(b)) {
    var square = 0;
    for var i = 0; i < a.length; i++ {
      square += a[i] * b[i];
    }
  console.log('Общая площадь артефактов сжатия:' + ' ' + square + ' ' + 'пикселей');
  }
} 


