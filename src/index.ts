class human implements Human {
  constructor(public name: string, public age: number) {}
  public greeting(message: string): string {
    return "Hello!";
  }
}
