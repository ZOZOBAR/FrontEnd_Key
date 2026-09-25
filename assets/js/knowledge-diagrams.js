(() => {
  const messages = {
    true: { zh: "age 是 18，18 >= 18 为 true，所以执行 if，输出 Adult。", en: "age is 18; 18 >= 18 is true, so if runs and outputs Adult." },
    false: { zh: "如果 age 是 16，16 >= 18 为 false，所以执行 else，输出 Minor。", en: "If age is 16, 16 >= 18 is false, so else runs and outputs Minor." },
    add: { zh: "git add：改动从 Working Directory 被选入 Staging Area；还没有 commit，也没有上传。", en: "git add: a change moves from Working Directory to Staging Area; there is no commit and no upload yet." },
    commit: { zh: "git commit：Staging Area 的内容记录为 Local Repository 的本地版本；GitHub 还没有变化。", en: "git commit: staged content becomes a local version in the Local Repository; GitHub has not changed yet." },
    push: { zh: "git push：已有的 Local Repository commit 同步到 Remote / GitHub；它不会替你创建 commit。", en: "git push: an existing Local Repository commit synchronizes to Remote / GitHub; it does not create a commit." },
    margin: { zh: "margin 是盒子与其他盒子之间的外部距离。它不在 border 内部。", en: "margin is the outside space between this box and other boxes. It is not inside the border." },
    border: { zh: "border 围住 content 和 padding。它的常见组成是 width、style、color。", en: "border encloses content and padding. Its common parts are width, style, and color." },
    padding: { zh: "padding 是 content 与 border 之间的内部空间。它会增加默认盒子的总尺寸。", en: "padding is the inner space between content and border. It increases a default box’s total size." },
    content: { zh: "content 是文字、图片等实际内容所在的区域。", en: "content is the area occupied by the actual text, image, or other material." },
    main: { zh: "主轴是项目排列的方向。row 时通常横向；justify-content 决定项目如何沿主轴分布。", en: "The main axis is the direction in which items are arranged. In row, it is usually horizontal; justify-content distributes items along it." },
    cross: { zh: "交叉轴垂直于主轴。align-items 决定项目如何沿交叉轴对齐。", en: "The cross axis is perpendicular to the main axis. align-items decides how items align along it." },
    init: { zh: "初始化令 i 从 0 开始。这一步只运行一次，之后才进入条件检查。", en: "Initialization starts i at 0. It runs once only, before the condition is checked." },
    condition: { zh: "条件在每一轮前检查。i 小于 3 时继续；i 变成 3 时条件为 false，循环停止。", en: "The condition is checked before each round. Continue while i is less than 3; when i becomes 3, it is false and the loop stops." },
    body: { zh: "条件为 true 时，循环体执行：本例输出当前的 i。", en: "When the condition is true, the loop body runs: this example outputs the current i." },
    update: { zh: "更新在循环体后运行。i++ 等于 i = i + 1，然后程序回到条件检查。", en: "The update runs after the body. i++ means i = i + 1, then execution returns to the condition check." }
  };

  const language = () => document.documentElement.lang.startsWith("en") ? "en" : "zh";

  function selectCondition(root, path, persistent = true) {
    root.dataset.selected = path;
    if (persistent) root.dataset.committed = path;
    root.querySelectorAll("[data-path]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.path === path)));
    root.querySelectorAll("[data-code]").forEach((line) => line.classList.toggle("is-active", line.dataset.code === path));
    [root.querySelector(".diagram-result"), root.querySelector(".diagram-explain")].forEach((target) => {
      target.textContent = messages[path][language()];
    });
  }

  function selectGit(root, command, persistent = true) {
    root.dataset.selected = command;
    if (persistent) root.dataset.committed = command;
    root.querySelectorAll("[data-command]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.command === command)));
    const states = { add: ["working", "staging"], commit: ["staging", "local"], push: ["local", "remote"] }[command];
    root.querySelectorAll("[data-state]").forEach((node) => node.classList.toggle("is-active", states.includes(node.dataset.state)));
    root.querySelector(".diagram-explain").textContent = messages[command][language()];
  }

  document.querySelectorAll('[data-diagram="condition"]').forEach((root) => {
    root.querySelectorAll("[data-path]").forEach((button) => {
      button.addEventListener("click", () => selectCondition(root, button.dataset.path));
      button.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") selectCondition(root, button.dataset.path, false);
      });
    });
    root.querySelector(".diagram-choices").addEventListener("pointerleave", () => selectCondition(root, root.dataset.committed || "true", false));
    selectCondition(root, root.dataset.committed || "true");
  });

  document.querySelectorAll('[data-diagram="git"]').forEach((root) => {
    root.querySelectorAll("[data-command]").forEach((button) => {
      button.addEventListener("click", () => selectGit(root, button.dataset.command));
      button.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") selectGit(root, button.dataset.command, false);
      });
    });
    root.querySelector(".git-stages").addEventListener("pointerleave", () => selectGit(root, root.dataset.committed || "add", false));
    selectGit(root, root.dataset.committed || "add");
  });

  function selectFocus(root, attribute, value, persistent = true) {
    root.dataset.selected = value;
    if (persistent) root.dataset.committed = value;
    root.querySelectorAll(`[${attribute}]`).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset[attribute.replace("data-", "")] === value));
    });
    root.querySelector("[data-diagram-result]").textContent = messages[value][language()];
  }

  [["box", "data-layer", "content"], ["flex", "data-flex", "main"], ["loop", "data-loop", "init"]].forEach(([diagram, attribute, initial]) => {
    document.querySelectorAll(`[data-diagram="${diagram}"]`).forEach((root) => {
      root.querySelectorAll(`[${attribute}]`).forEach((button) => {
        button.addEventListener("click", () => selectFocus(root, attribute, button.dataset[attribute.replace("data-", "")]));
        button.addEventListener("pointerenter", (event) => {
          if (event.pointerType === "mouse") selectFocus(root, attribute, button.dataset[attribute.replace("data-", "")], false);
        });
      });
      root.addEventListener("pointerleave", () => selectFocus(root, attribute, root.dataset.committed || initial, false));
      selectFocus(root, attribute, root.dataset.committed || initial);
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => window.setTimeout(() => {
      document.querySelectorAll('[data-diagram="condition"]').forEach((root) => selectCondition(root, root.dataset.committed || "true", false));
      document.querySelectorAll('[data-diagram="git"]').forEach((root) => selectGit(root, root.dataset.committed || "add", false));
      [["box", "data-layer", "content"], ["flex", "data-flex", "main"], ["loop", "data-loop", "init"]].forEach(([diagram, attribute, initial]) => {
        document.querySelectorAll(`[data-diagram="${diagram}"]`).forEach((root) => selectFocus(root, attribute, root.dataset.committed || initial, false));
      });
    }, 0));
  });

  // Phase 5.4B/C: bounded instruments use known examples, not a JS runtime.
  const copy = {
    box: {
      margin: { zh: ["margin", "margin 是 border 外的空间：它把整个盒子与周围内容拉开。"], en: ["margin", "margin is outside the border: it separates the whole box from surrounding content."] },
      border: { zh: ["border-width", "border 是 content 与 padding 的边界；改变它会改变边线厚度。"], en: ["border-width", "border is the boundary around content and padding; changing it changes the line thickness."] },
      padding: { zh: ["padding", "padding 是 border 内的空间：它把内容从边线推开。"], en: ["padding", "padding is space inside the border: it pushes content away from the line."] },
      content: { zh: ["content", "content 是文字、图片等实际内容所在的盒子。"], en: ["content", "content is the box containing the actual text, image, or other material."] }
    },
    structure: {
      html: { zh: ["<html>", "html 是整个 HTML 文档的根元素；head 与 body 都包含在其中。"], en: ["<html>", "html is the root element of the whole HTML document; head and body are both contained within it."] },
      head: { zh: ["<head>", "head 放给浏览器与搜索引擎的声明，如 title、meta、link 和 script；它不是页面可见内容。"], en: ["<head>", "head holds declarations for browsers and search engines, such as title, meta, link, and script; it is not visible page content."] },
      body: { zh: ["<body>", "body 放访问者在页面中看到的内容。"], en: ["<body>", "body holds the content a visitor sees on the page."] }
    }
  };

  const setPressed = (root, selector, active, key) => root.querySelectorAll(selector).forEach((button) => button.setAttribute("aria-pressed", String(button.dataset[key] === active)));

  document.querySelectorAll('[data-instrument="box"]').forEach((root) => {
    const state = { layer: "content", margin: 0, padding: 16, border: 2 };
    const render = () => {
      root.dataset.selected = state.layer;
      root.dataset.boxMargin = state.margin;
      root.dataset.boxPadding = state.padding;
      root.dataset.boxBorder = state.border;
      root.querySelector(".box-live-margin").style.margin = `${state.margin}px`;
      root.querySelector(".box-live-margin").style.setProperty("--margin-size", `${state.margin}px`);
      root.querySelector(".box-live-padding").style.padding = `${state.padding}px`;
      root.querySelector(".box-live-border").style.borderWidth = `${state.border}px`;
      Object.entries(state).filter(([key]) => key !== "layer").forEach(([key, value]) => root.querySelector(`[data-box-value="${key}"]`).textContent = value);
      setPressed(root, "[data-box-layer]", state.layer, "boxLayer");
      root.querySelectorAll("[data-box-control]").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.value) === state[button.dataset.boxControl])));
      const [property, explanation] = copy.box[state.layer][language()];
      root.querySelector("[data-box-property]").textContent = `.box {\n  margin: ${state.margin}px;\n  border-width: ${state.border}px;\n  padding: ${state.padding}px;\n}`;
      root.querySelector("[data-box-explain]").textContent = explanation;
    };
    const focus = (layer) => { state.layer = layer; render(); };
    root.querySelectorAll("[data-box-layer]").forEach((button) => button.addEventListener("click", () => focus(button.dataset.boxLayer)));
    root.querySelectorAll("[data-box-region]").forEach((region) => {
      const activate = () => focus(region.dataset.boxRegion);
      region.addEventListener("click", activate);
      region.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
    });
    root.querySelectorAll("[data-box-control]").forEach((button) => button.addEventListener("click", () => { state[button.dataset.boxControl] = Number(button.dataset.value); focus(button.dataset.boxControl === "border" ? "border" : button.dataset.boxControl); }));
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.setTimeout(render, 0)));
    render();
  });

  document.querySelectorAll('[data-instrument="flex"]').forEach((root) => {
    const state = { direction: "row", justify: "flex-start", align: "flex-start" };
    const render = () => {
      const live = root.querySelector(".flex-live");
      live.style.flexDirection = state.direction;
      live.style.justifyContent = state.justify;
      live.style.alignItems = state.align;
      root.querySelectorAll("[data-flex-control]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.value === state[button.dataset.flexControl])));
      root.querySelector("[data-flex-main]").textContent = language() === "zh" ? `主轴 ${state.direction === "row" ? "→" : "↓"}` : `main axis ${state.direction === "row" ? "→" : "↓"}`;
      root.querySelector("[data-flex-cross]").textContent = language() === "zh" ? `交叉轴 ${state.direction === "row" ? "↓" : "→"}` : `cross axis ${state.direction === "row" ? "↓" : "→"}`;
      const property = state.direction !== "row" ? `flex-direction: ${state.direction};` : state.justify !== "flex-start" ? `justify-content: ${state.justify};` : `align-items: ${state.align};`;
      root.querySelector("[data-flex-specimen]").textContent = property;
      root.querySelector("[data-flex-explain]").textContent = language() === "zh" ? `${property} 项目已经按真实 Flexbox 规则重新排列；justify-content 沿主轴，align-items 沿交叉轴。` : `${property} The items have been repositioned by real Flexbox; justify-content follows the main axis and align-items the cross axis.`;
    };
    root.querySelectorAll("[data-flex-control]").forEach((button) => button.addEventListener("click", () => {
      const items = [...root.querySelectorAll(".flex-live i")];
      const before = items.map((item) => item.getBoundingClientRect());
      state[button.dataset.flexControl] = button.dataset.value;
      render();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        items.forEach((item, index) => {
          const after = item.getBoundingClientRect();
          item.style.transform = `translate(${before[index].left - after.left}px, ${before[index].top - after.top}px)`;
        });
        window.requestAnimationFrame(() => items.forEach((item) => { item.style.transform = ""; }));
      }
    }));
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.setTimeout(render, 0)));
    render();
  });

  document.querySelectorAll('[data-instrument="display"]').forEach((root) => {
    const explanations = { block: ["block 从新行开始；这里的 width 与 height 生效。", "block begins on a new line; width and height apply here."], inline: ["inline 留在文字流中；width 与 height 不会按盒子尺寸展开。", "inline remains in text flow; width and height do not expand it as a box."], "inline-block": ["inline-block 和邻居同行，同时保留 width 与 height。", "inline-block stays in line with neighbours while keeping width and height."] };
    const render = (value) => {
      root.dataset.display = value;
      root.querySelector("[data-display-target]").style.display = value;
      setPressed(root, "[data-display]", value, "display");
      root.querySelector("[data-display-specimen]").textContent = `display: ${value}; width: 12rem; height: 3rem;`;
      root.querySelector("[data-display-explain]").textContent = explanations[value][language() === "zh" ? 0 : 1];
    };
    root.querySelectorAll("[data-display]").forEach((button) => button.addEventListener("click", () => render(button.dataset.display)));
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.setTimeout(() => render(root.dataset.display || "block"), 0)));
    render("block");
  });

  document.querySelectorAll('[data-instrument="structure"]').forEach((root) => {
    const render = (node) => {
      root.dataset.selected = node;
      setPressed(root, "[data-structure]", node, "structure");
      root.querySelectorAll("[data-structure-code]").forEach((line) => line.classList.toggle("is-active", line.dataset.structureCode === node));
      root.querySelectorAll("[data-structure-preview]").forEach((part) => part.classList.toggle("is-active", node === "html" || part.dataset.structurePreview === node));
      const [label, explanation] = copy.structure[node][language()];
      root.querySelector("[data-structure-label]").textContent = label;
      root.querySelector("[data-structure-explain]").textContent = explanation;
    };
    root.querySelectorAll("[data-structure]").forEach((button) => button.addEventListener("click", () => render(button.dataset.structure)));
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.setTimeout(() => render(root.dataset.selected || "html"), 0)));
    render("html");
  });

  const traceSteps = [
    { line: "total", i: "—", total: 0, condition: "—", output: "—", zh: ["初始化", "total 从 0 开始；下一步才建立循环变量 i。"], en: ["initialization", "total starts at 0; the next step establishes loop variable i."] },
    { line: "loop", i: 1, total: 0, condition: "—", output: "—", zh: ["for：初始化", "i 从 1 开始；现在必须先检查 i <= 3。"], en: ["for: initialization", "i starts at 1; now i <= 3 must be checked first."] },
    { line: "loop", i: 1, total: 0, condition: "true", output: "—", zh: ["条件为 true", "1 <= 3 为 true，所以循环体可以执行。"], en: ["condition is true", "1 <= 3 is true, so the loop body can run."] },
    { line: "add", i: 1, total: 1, condition: "true", output: "—", zh: ["累加", "total += i：0 + 1 成为 1；下一步更新 i。"], en: ["accumulate", "total += i: 0 + 1 becomes 1; next, i updates."] },
    { line: "loop", i: 2, total: 1, condition: "—", output: "—", zh: ["更新", "i++ 后 i 为 2，因此回到同一条 for 条件。"], en: ["update", "after i++, i is 2, so execution returns to the for condition."] },
    { line: "loop", i: 2, total: 1, condition: "true", output: "—", zh: ["条件为 true", "2 <= 3 为 true，所以循环体再次执行。"], en: ["condition is true", "2 <= 3 is true, so the loop body runs again."] },
    { line: "add", i: 2, total: 3, condition: "true", output: "—", zh: ["累加", "1 + 2 成为 3；下一步更新 i。"], en: ["accumulate", "1 + 2 becomes 3; next, i updates."] },
    { line: "loop", i: 3, total: 3, condition: "—", output: "—", zh: ["更新", "i++ 后 i 为 3，仍需再次检查条件。"], en: ["update", "after i++, i is 3; the condition must be checked again."] },
    { line: "loop", i: 3, total: 3, condition: "true", output: "—", zh: ["条件为 true", "3 <= 3 为 true，所以最后一轮循环体执行。"], en: ["condition is true", "3 <= 3 is true, so the final loop body runs."] },
    { line: "add", i: 3, total: 6, condition: "true", output: "—", zh: ["累加", "3 + 3 成为 6；下一步让 i 变成 4。"], en: ["accumulate", "3 + 3 becomes 6; next, i becomes 4."] },
    { line: "loop", i: 4, total: 6, condition: "false", output: "—", zh: ["条件为 false", "4 <= 3 为 false，因此循环体不会再运行；程序继续到输出。"], en: ["condition is false", "4 <= 3 is false, so the body does not run again; execution continues to output."] },
    { line: "output", i: 4, total: 6, condition: "false", output: 6, zh: ["输出", "console.log(total) 现在执行，所以输出 6。"], en: ["output", "console.log(total) now executes, so it outputs 6."] }
  ];
  document.querySelectorAll('[data-execution-trace="accumulator"]').forEach((root) => {
    let index = -1, timer = null;
    const render = () => {
      const state = index < 0 ? null : traceSteps[index];
      root.querySelectorAll("[data-trace-line]").forEach((line) => line.classList.toggle("is-current", !!state && line.dataset.traceLine === state.line));
      const output = state || { i: "—", total: "—", condition: "—", output: "—", zh: ["准备开始", "尚未执行。按“下一步”从 total 的初始化开始。"], en: ["ready to start", "Nothing has executed. Use Step to begin with total’s initialization."] };
      const lang = language();
      root.querySelector("[data-trace-current]").textContent = output[lang][0];
      root.querySelector("[data-trace-i]").textContent = output.i;
      root.querySelector("[data-trace-total]").textContent = output.total;
      root.querySelector("[data-trace-condition]").textContent = output.condition;
      root.querySelector("[data-trace-output]").textContent = output.output;
      root.querySelector("[data-trace-reason]").textContent = output[lang][1];
      root.querySelector("[data-trace-back]").disabled = index < 0;
      root.querySelector("[data-trace-next]").disabled = index >= traceSteps.length - 1;
      if (index >= traceSteps.length - 1) stopAuto();
    };
    const stopAuto = () => { if (timer) window.clearInterval(timer); timer = null; root.querySelector("[data-trace-auto]")?.setAttribute("aria-pressed", "false"); };
    const step = () => { if (index < traceSteps.length - 1) { index += 1; render(); } };
    root.querySelector("[data-trace-next]").addEventListener("click", step);
    root.querySelector("[data-trace-back]").addEventListener("click", () => { stopAuto(); index = Math.max(-1, index - 1); render(); });
    root.querySelector("[data-trace-reset]").addEventListener("click", () => { stopAuto(); index = -1; render(); });
    root.querySelector("[data-trace-auto]")?.addEventListener("click", () => { if (timer) return stopAuto(); timer = window.setInterval(step, 700); root.querySelector("[data-trace-auto]").setAttribute("aria-pressed", "true"); step(); });
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.setTimeout(render, 0)));
    render();
  });
})();
