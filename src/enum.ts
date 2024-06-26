enum StarbuksGrade {
  WELCOME,
  GREEN,
  GOLD
}

function getDiscount(v: StarbuksGrade): number {
  switch (v) {
    case StarbuksGrade.WELCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbuksGrade.GREEN)); // 5
console.log(StarbuksGrade.GREEN); // 1