$(() => {
    for (let i = 1; i <= 8; i++) {
      const divRow = $("<div>", {
        class: "row",
      });
      for (let j = 1; j <= 8; j++) {
        const div = $("<div>", {
          class: "square"
        });
        if (i % 2 == j % 2) {
          $(div).addClass("red");
        } else {
          $(div).addClass("black");
        }
        divRow.append(div);
      }
      $("#board").append(divRow);
    }
  });