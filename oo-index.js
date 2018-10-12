class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  attack() {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(this.name + "'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }

  restart() {
    while (eventArea.hasChildNodes()) {
      eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

}
const unicorns = [new Unicorn('Trung', 'Alchemist'), new Unicorn('Nick', 'Jedi')]
const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const restartButton = document.getElementById('restart').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].restart())
const attackButton = document.getElementById('attack').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].attack())
const defendButton = document.getElementById('defend').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].defend())
const healButton = document.getElementById('heal').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].breakdance())
const eatButton = document.getElementById('eat').addEventListener("click", () => unicorns[document.getElementById("unicorn-id").value].eatCronut())