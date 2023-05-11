import loader from "./components/loader.js"
import mostrar_regis from "./components/user_register.js"
import cerrar_regis from "./components/cerrar_registro.js"
import sesion_crear_cuenta from "./components/crear_cuenta.js"
import mostrar_cart_nav from "./components/cart_nav/mostrar_cart.js"
import cerrar_cart from "./components/cart_nav/cerrar_cart.js"
import theme from "./components/theme.js"

import visible_card_footer from "./components/about_footer/mostrar_card.js"


import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"

import cart from "./components/cart.js"

import printModal  from "./components/modal.js"
/* ------ UI Elements ------- */
/*Ocultar Loader*/
loader()
theme()
//Manipulación Usuario Ventana
mostrar_regis()
cerrar_regis()
mostrar_cart_nav()
cerrar_cart()
sesion_crear_cuenta()
visible_card_footer()

// ------END UI Elements --------

//------Products --------


const {bd, printProducts} = products(await getProducts())

/* Carrito */

cart(bd, printProducts)
printModal(bd, printProducts)


