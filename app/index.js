/*JUEGOS Y SUS DESCRIPCIONES Y CATEGORIAS*/
const producto = [
  {
    id: "cyber",
    title: "Cyberpunk 2077",
    imageUrl: "./imagenes/CYBER.jpeg",
    content:
      "Cyberpunk 2077 is an open-world adventure and action RPG set in the dark future of Night City, a dangerous megacity obsessed with power, glamour, and relentless body modifications.",
    price: "70$",
    categoria: {
      nombre: "RPG",
      id: "rpg",
    },
  },
  {
    id: "fc24",
    title: "EA SPORTS FC™ 24",
    imageUrl: "./imagenes/FC24.jpg",
    content:
      "EA SPORTS FC™ 24 welcomes you to The World's Game: the most authentic football experience to date with HyperMotionV, PlayStyles optimized by Opta, and the enhanced Frostbite™ engine.",
    price: "30$",
    categoria: {
      nombre: "Sports",
      id: "sports",
    },
  },
  {
    id: "gow",
    title: "God of War: Ragnarök",
    imageUrl: "./imagenes/GOW2.jpg",
    content:
      "Kratos has left behind his vengeance against the gods of Olympus and now lives as a man in the domains of the Norse gods and monsters. In this cruel and relentless world, he must fight to survive... and teach his son to do the same.",
    price: "60$",
    categoria: {
      nombre: "RPG",
      id: "rpg",
    },
  },
  {
    id: "spiderman",
    title: "Spiderman 2",
    imageUrl: "./imagenes/spiderman2.jpg",
    content:
      "In Marvel's Spider-Man 2, Peter Parker's life collides with that of Spider-Man in an original action-packed story. Step into the shoes of a seasoned Peter Parker who has honed his skills in fighting crime and villains in Marvel's New York.",
    price: "50$",
    categoria: {
      nombre: "Action",
      id: "action",
    },
  },
  {
    id: "thefinals",
    title: "The Finals",
    imageUrl: "./imagenes/thefinals.jpg",
    content:
      "Join THE FINALS, the world-famous free combat game show! Fight side by side with your teammates in virtual arenas that you can modify, leverage, and even destroy.",
    price: "10$",
    categoria: {
      nombre: "Action",
      id: "action",
    },
  },
  {
    id: "wz",
    title: "Call of Duty:Warzone",
    imageUrl: "./imagenes/Warzone2.jpeg",
    content:
      "We welcome you to Call of Duty®: Warzone™, a massive free combat arena that now includes Urzikistan, Rebirth Island, and Fortune's Keep.",
    price: "10$",
    categoria: {
      nombre: "Action",
      id: "action",
    },
  },
  {
    id: "dg",
    title: "Days Gone",
    imageUrl: "./imagenes/daysgone.jpg",
    content:
      "Days Gone is set in post-apocalyptic Oregon two years after the start of a pandemic that turned a portion of humanity into vicious zombie-like creatures.",
    price: "30$",
    categoria: {
      nombre: "Action",
      id: "action",
    },
  },
  {
    id: "2k24",
    title: "2K24",
    imageUrl: "./imagenes/2K24.jpg",
    content:
      "Experience basketball culture in NBA 2K24. Enjoy action-packed gameplay and limitless customization options for your MyPLAYER in MyCAREER.",
    price: "40$",
    categoria: {
      nombre: "Sports",
      id: "sports",
    },
  },
  {
    id: "ds",
    title: "Demon Souls",
    imageUrl: "./imagenes/DemonsSouls.jpg",
    content:
      "Demon's Souls is set in Boletaria, a kingdom consumed by a dark being called the Old One, following its release through the use of forbidden Soul Arts.",
    price: "30$",
    categoria: {
      nombre: "RPG",
      id: "rpg",
    },
  },
  {
    id: "ffxvi",
    title: "Final Fantasy XVI",
    imageUrl: "./imagenes/FF16.jpeg",
    content:
      "Final Fantasy XVI is set in the twin continents of Valisthea, currently divided between six nations who hold power through access to magical Crystals and Dominants, humans who act as hosts for each nation's Eikon.",
    price: "70$",
    categoria: {
      nombre: "RPG",
      id: "rpg",
    },
  },
  {
    id: "returnal",
    title: "Returnal",
    imageUrl: "./imagenes/returnal.jpg",
    content:
      "Returnal is a third-person shooter featuring roguelike elements and falling under the psychological horror genre.",
    price: "30$",
    categoria: {
      nombre: "Action",
      id: "action",
    },
  },
  {
    id: "ghost",
    title: "Ghost of Tsushima",
    imageUrl: "./imagenes/ghost.jpg",
    content:
      "Ghost of Tsushima is an action-adventure where the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
    price: "30$",
    categoria: {
      nombre: "RPG",
      id: "rpg",
    },
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src="${producto.imageUrl}" alt="${producto.title}" class="gameimg">
        
            <h3 class="game">${producto.title}</h3>
             <a class="p-article">${producto.content}</a>
             <p class="producto-precio">${producto.price}</p>
            <button class="juego-agregar" id="${producto.id}">Agregar</button>
       
        `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(producto);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = producto.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = producto.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "All Games";
      cargarProductos(producto);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".juego-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = producto.find((producto) => producto.id === idBoton);

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}

document.addEventListener("DOMContentLoaded", function () {
  const botonesMenu = document.querySelectorAll(".boton-menu");

  botonesMenu.forEach((boton) => {
    boton.addEventListener("click", function () {
      botonesMenu.forEach((b) => b.classList.remove("boton-activo"));
      this.classList.add("boton-activo");
    });
  });
});
