// calculate.ts features the algorithm to calculate the input expressions
const operandsRequired: Record<string, number> = {
  "/": 2,
  "*": 2,
  "-": 2,
  "+": 2,
  "^": 2,
  "√": 1,
};

const operators = ["+", "-", "*", "/", "^", "(", ")", "√"];

function prec(c: string): number {
  if (c == "^" || c == "√") return 3;
  else if (c == "/" || c == "*") return 2;
  else if (c == "+" || c == "-") return 1;
  else return -1;
}

//refer to this for more information https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/
function infixToPostfix(s: string): (string | number)[] {
  let op: string[] = [];

  // Extract operators from the expression
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (operators.includes(e)) {
      op.push(e);
    }
  }

  let ptr = 0;
  let curr_num = "";
  const infix: string[] = [];

  // Generate infix expression
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e == op[ptr] && ptr < op.length) {
      if (curr_num != "") infix.push(curr_num);
      curr_num = "";
      infix.push(e);
      ptr++;
    } else {
      curr_num += e;
    }
  }
  if (curr_num != "") infix.push(curr_num);

  // Creating an operator stack
  const st: string[] = [];
  const postfix: (string | number)[] = [];

  infix.forEach((e) => {
    if (!isNaN(Number(e))) {
      postfix.push(parseFloat(e));
    } else if (e == "(") {
      st.push(e);
    } else if (e == ")") {
      while (st[st.length - 1] != "(") {
        postfix.push(st[st.length - 1]);
        st.pop();
      }
      st.pop();
    } else {
      if (operandsRequired[e] == 2) {
        while (st.length != 0 && prec(e) <= prec(st[st.length - 1])) {
          postfix.push(st[st.length - 1]);
          st.pop();
        }
        st.push(e);
      } else {
        st.push(e);
      }
    }
  });

  while (st.length != 0) {
    postfix.push(st[st.length - 1]);
    st.pop();
  }

  return postfix;
}

//for more info https://www.geeksforgeeks.org/stack-set-4-evaluation-postfix-expression/
function evaluatePostfix(postfix: (string | number)[]): number {
  const st: number[] = [];

  postfix.forEach((e) => {
    if (typeof e === "number") {
      st.push(e);
    } else {
      let val1: number | null = null,
        val2: number | null = null;

      if (operandsRequired[e] == 2) {
        val1 = st.pop()!;
        val2 = st.pop()!;
      } else {
        val1 = st.pop()!;
      }

      switch (e) {
        case "+":
          st.push(val2! + val1);
          break;
        case "-":
          st.push(val2! - val1);
          break;
        case "/":
          st.push(val2! / val1);
          break;
        case "*":
          st.push(val2! * val1);
          break;
        case "^":
          st.push(val2! ** val1);
          break;
        case "√":
          st.push(Math.sqrt(val1));
          break;
      }
    }
  });

  return st.pop()!;
}

export function scientific(exp: string): number {
  const postFix = infixToPostfix(exp);
  return evaluatePostfix(postFix);
}
