const realizarOperacion = (num1, num2, op) =>
{
    if (op == "sumar")
    {
        return (num1 + num2);
    } else if (op == "restar")
    {
        return (num1 - num2);
    } else if (op == "multiplicar")
    {
        return (num1 * num2);
    } else if (op == "dividir")
    {
        if (num2 == 0)
        {
            return "No se puede dividir entre cero";
        }
        return (num1 / num2);
    } else
    {
        return "Operación no reconocida";
    }
};

let num1, num2, op;
let pregunta;

while (op != "salir")
{
    num1 = prompt("\nPor favor, introduzca el primer número: \n");
    num2 = prompt("Por favor, introduzca el segundo número: \n");

    op = prompt("¿Qué operación desea realizar? (sumar, restar, multiplicar, dividir): \n");

    console.log("El resultado de la operación es:");
    console.log(realizarOperacion(+num1, +num2, op));

    pregunta = prompt("\n¿Desea realizar otra operación? (sí o no): \n");

    if (pregunta == "sí" || pregunta == "si")
    {
        continue;
    } else
    {
        console.log("Gracias por usar la calculadora. ¡Hasta pronto!\n");
        break;
    }
}
