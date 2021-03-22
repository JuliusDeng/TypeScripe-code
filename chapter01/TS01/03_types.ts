let a: 10;
a = 10;

let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string
c = false;
c = "hello"
// c = 1;

// let d: any;
let d ;
d = true;
d = 123;
d = "hello";

let e: unknown;
e = false;
e = 123;

let s: string;
s = d;

e = "hello"

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if(typeof e === "string") {
  s = e;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
s = e as string;
s = <string>e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function  fn():void {

}

// never 表示永远不会返回结果
function fn2():never {
  throw new Error('报错了')
}























