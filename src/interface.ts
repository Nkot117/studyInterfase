interface Nameable {
  name: string;
}

// 継承可能
interface Human extends Nameable {
  age: number;
  // オプショナルプロパティ
  nickName?: string;
}

// 拡張（マージ）
interface Human extends Nameable {
  greeting(message: string): string;
}
