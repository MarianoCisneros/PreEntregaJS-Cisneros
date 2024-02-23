
alert("Bienvenido/a al Sombrero Seleccionador de Hogwarts.")

const NOMBRE = prompt("Por favor, ingresa tu nombre:")

alert("Hola, " + NOMBRE + ". A continuación se te va a hacer diferentes preguntas para determinar cual es tu Casa en Hogwarts.")

let pregunta_g1
let pregunta_g2
let pregunta_s1
let pregunta_s2
let pregunta_s3
let pregunta_r1
let pregunta_r2
let pregunta_r3
let pregunta_h1
let pregunta_h2
let pregunta_h3

while (true) {
    while (true) {
        while (true) {
            pregunta_g1 = Number(prompt("¿Qué preferís? \n 1- Tomar un desafío emocionante \n 2- Evitar Problemas"))

            if (!isNaN(pregunta_g1) && (pregunta_g1 == 1) || (pregunta_g1 == 2)) {
                break
            } else {
                alert("Seleccione una opción válida")
            }
        }

        if (pregunta_g1 == 1) {
            while (true) {
                pregunta_g2 = Number(prompt("¿En qué te sentís mas representado? \n 1- Lealtad \n 2- Valentía \n 3- Inteligencia \n 4- Astucia"))
                if (!isNaN(pregunta_g2) && (pregunta_g2 == 1) || (pregunta_g2 == 2) || (pregunta_g2 == 3) || (pregunta_g2 == 4)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }

        } else if (pregunta_g1 == 2) {
            while (true) {
                pregunta_r1 = prompt("¿Sos una persona curiosa con ganas de aprender? \n 1- Si \n 2- No tanto")
                if (!isNaN(pregunta_r1) && (pregunta_r1 == 1) || (pregunta_r1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }

        if (pregunta_g2 == 2 || pregunta_g2 == 4) {
            while (true) {
                pregunta_s1 = Number(prompt("¿Sos ambicioso? \n 1- Considero que si. \n 2- No, no lo creo."))
                if (!isNaN(pregunta_s1) && (pregunta_s1 == 1) || (pregunta_s1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        } else if (pregunta_g2 == 1) {
            while (true) {
                pregunta_h1 = Number(prompt("¿Te sentís una persona leal con tus amigos y seres queridos? \n 1- Considero que si. \n 2- Depende."))
                if (!isNaN(pregunta_h1) && (pregunta_h1 == 1) || (pregunta_h1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        } else if (pregunta_g2 == 3) {
            while (true) {
                pregunta_r1 = prompt("¿Sos una persona curiosa con ganas de aprender? \n 1- Si \n 2- No tanto")
                if (!isNaN(pregunta_r1) && (pregunta_r1 == 1) || (pregunta_r1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }

        if (pregunta_r1 == 1) {
            while (true) {
                pregunta_r2 = Number(prompt("¿Qué opinas sobre la sabiduría y conocimiento? \n 1- Me motiva muchisimo. \n 2- Prefiero trabajar a estudiar."))
                if (!isNaN(pregunta_r2) && (pregunta_r2 == 1) || (pregunta_r2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        } else if (pregunta_r1 == 2) {
            while (true) {
                pregunta_h1 = Number(prompt("¿Te sentís una persona leal con tus amigos y seres queridos? \n 1- Considero que si. \n 2- Depende."))
                if (!isNaN(pregunta_h1) && (pregunta_h1 == 1) || (pregunta_h1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }

        if (pregunta_s1 == 2) {
            alert("¡Felicitaciones! Estoy seguro de que vas a ser un gran mago en tu nueva Casa de Gryffindor!")
            break
        } else if (pregunta_s1 == 1) {
            while (true) {
                pregunta_s2 = Number(prompt("¿Estás dispuesto a hacer lo que sea necesario para conseguir tus metas? \n 1- Si, obvio. \n 2- No, tampoco tanto"))
                if (!isNaN(pregunta_s2) && (pregunta_s2 == 1) || (pregunta_s2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }

        if (pregunta_s2 == 2) {
            alert("¡Felicitaciones! Estoy seguro de que vas a ser un gran mago en tu nueva Casa de Gryffindor!")
            break
        } else if (pregunta_s2 == 1) {
            while (true) {
                pregunta_s3 = Number(prompt("¿Preferís liderar o seguir a otros? \n 1- Liderar, siempre. \n 2- Ser seguidor no está mal"))
                if (!isNaN(pregunta_s3) && (pregunta_s3 == 1) || (pregunta_s3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }
        
        if (pregunta_s3 == 1) {
            alert("Sos bravo, cuidado. ¡Bienvenido a la Casa de Slytherin!")
            break
        } else if (pregunta_s3 == 2) {
            alert("Mmmm... Tenes ambición, podrías encajar tanto Gryffindor como también en Slytherin. Resta tu selección para definir. ¡Buena suerte!")
            break
        }
        
        if (pregunta_r1 == 1) {
            while (true) {
                pregunta_r2 = Number(prompt("¿Qué opinas sobre la sabiduría y conocimiento? \n 1- Me motiva muchisimo. \n 2- Prefiero trabajar a estudiar."))
                if (!isNaN(pregunta_r2) && (pregunta_r2 == 1) || (pregunta_r2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }

        } else if (pregunta_r1 == 2) {
            while (true) {
                pregunta_h1 = Number(prompt("¿Te sentís una persona leal con tus amigos y seres queridos? \n 1- Considero que si. \n 2- Depende."))
                if (!isNaN(pregunta_h1) && (pregunta_h1 == 1) || (pregunta_h1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }

        if (pregunta_r2 == 1) {
            while (true) {
                pregunta_r3 = Number(prompt("¿Te sentís atraído por adivinanzas o desafíos intelectuales? \n 1- Definitivamente si. \n 2- Meh, prefiero pasar tiempo con amigos."))
                if (!isNaN(pregunta_r3) && (pregunta_r3 == 1) || (pregunta_r3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        } else if (pregunta_r2 == 2) {
            while (true) {
                pregunta_h1 = Number(prompt("¿Te sentís una persona leal con tus amigos y seres queridos? \n 1- Considero que si. \n 2- Depende."))
                if (!isNaN(pregunta_h1) && (pregunta_h1 == 1) || (pregunta_h1 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")
                }
            }
        }
        
        if (pregunta_h1 == 1) {
            while (true) {
                pregunta_h2 = Number(prompt("¿Preferís trabajar con amigos o no querés distracciones? \n 1- Con amigos es todo mejor! \n 2- Sin distracciones se aprende mas."))
                if (!isNaN(pregunta_h2) && (pregunta_h2 == 1) || (pregunta_h2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        } else if (pregunta_h1 == 2) {
            while (true) {
                pregunta_r2 = Number(prompt("¿Qué opinas sobre la sabiduría y conocimiento? \n 1- Me motiva muchisimo. \n 2- Prefiero trabajar a estudiar."))
                if (!isNaN(pregunta_r2) && (pregunta_r2 == 1) || (pregunta_r2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        }

        if (pregunta_h2 == 1) {
            while (true) {
                pregunta_h3 = Number(prompt("¿Qué importancia le das a la honestidad y amistad? \n 1- Mucha, obvio. \n 2- Depende la circustancia."))
                if (!isNaN(pregunta_h3) && (pregunta_h3 == 1) || (pregunta_h3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        } else if (pregunta_h2 == 2) {
            while (true) {
                pregunta_r2 = Number(prompt("¿Qué opinas sobre la sabiduría y conocimiento? \n 1- Me motiva muchisimo. \n 2- Prefiero trabajar a estudiar."))
                if (!isNaN(pregunta_r2) && (pregunta_r2 == 1) || (pregunta_r2 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        }

        if (pregunta_r2 == 2) {
            while (true) {
                pregunta_h3 = Number(prompt("¿Qué importancia le das a la honestidad y amistad? \n 1- Mucha, obvio. \n 2- Depende la circustancia."))
                if (!isNaN(pregunta_h3) && (pregunta_h3 == 1) || (pregunta_h3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        } else if (pregunta_r2 == 1) {
            while (true) {
                pregunta_r3 = Number(prompt("¿Te sentís atraído por adivinanzas o desafíos intelectuales? \n 1- Definitivamente si. \n 2- Meh, prefiero pasar tiempo con amigos."))
                if (!isNaN(pregunta_r3) && (pregunta_r3 == 1) || (pregunta_r3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        }

        if (pregunta_r3 == 1) {
            alert("¡Wow! Definitivamente te vas directo a la Casa Revenclaw")
            break
        } else if (pregunta_r3 == 2) {
            while (true) {
                pregunta_h3 = Number(prompt("¿Qué importancia le das a la honestidad y amistad? \n 1- Mucha, obvio. \n 2- Depende la circustancia."))
                if (!isNaN(pregunta_h3) && (pregunta_h3 == 1) || (pregunta_h3 == 2)) {
                    break
                } else {
                    alert("Seleccione una opción válida")                    
                }
            }
        }

        if (pregunta_h3 == 1) {
            alert("Entonces claramente te merece la Casa Hufflepuff. ¡Felicitaciones!")
            break
        } else if (pregunta_h3 == 2) {
            alert("Tu futuro curioso es para desarrollarlo en ¡La Casa Revenclaw!")
        }

        
    }
    
    if (confirm("¿Querés salir del Seleccionador?")) {
        alert("Nos vemos a la vuelta!")
        break
    }

}