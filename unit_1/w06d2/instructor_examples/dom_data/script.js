console.log("script js file ", $);

// 1
let data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];

// 2
const populateData = () => {
  // come back and refactor to use Array.forEach()
  for (let i = 0; i < data.length; i += 1) {
    // discuss BEM if time permits
    const $infoContainer = $("<div>").addClass("info-container");
    const $nameDiv = $("<div>")
      .addClass("name")
      .text(data[i].name);

    function sayName(name) {
      console.log(data[i].name);
    }

    // $nameDiv.on('click', () => {
    //     console.log("name has been clicked", data[i].name)
    // })

    $nameDiv.on("click", () => {
      sayName(data[i].name);
    });

    // $nameDiv.on('click', sayName)

    // DONT DO THIS
    // $nameDiv.on("click", () => sayName(data[i].name));
  

  

    const $addressDiv = $("<div>")
      .addClass("address")
      .text(data[i].address);
    $infoContainer.append($nameDiv, $addressDiv);
    // $infoContainer.apppend($nameDiv).append($addressDiv)
    // $infoContainer.apppend($nameDiv)
    // $infoContainer.apppend($addressDiv)
    $("body").append($infoContainer);
  }
};

const addData = (name, address) => {
  data.push({ name: name, address: address });
  $("body").empty();
  populateData();
};

const removeData = name => {
  //   let index = data.indexOf(name);
  //   console.log(index);
  //   data.splice(index, 1);
  const filteredArr = data.filter(d => d.name != name);
  data = filteredArr;
};

removeData("Megatron");

// 3
$(() => {
  populateData();
  addData("Karolin", "NY");
});

// how do you remove something from array
// shift (begining of array) - too generic
// pop (end of array) - too generic
// Array.splice() + Array.indexOf()
// Array.filter()
//  - filter filters elements from a an array that meet a condition
//  - filter returns a new array of those matching elements
// const filteredArr = data.filter( d => {
//     // {name: 'joe'}
//     if(name !== d.name) return d
// })
//   data.splice(0, 1);
