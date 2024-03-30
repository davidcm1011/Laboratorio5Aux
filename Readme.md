# SOLID

SOLID es un acrónimo que representa cinco principios de diseño de software orientado a objetos que se utilizan para crear sistemas que sean fáciles de mantener y extender con el tiempo. Estos principios fueron introducidos por Robert C. Martin a principios de la década de 2000 como una guía para escribir código limpio y de alta calidad.

## Principios SOLID:

1. **S - Principio de Responsabilidad Única (Single Responsibility Principle):** Una clase debe tener solo una razón para cambiar. Esto significa que cada clase debe tener una sola responsabilidad o función en el sistema. Por ejemplo, una clase `User` debe encargarse únicamente de gestionar la información de un usuario y no debería estar relacionada con la autenticación o la generación de informes.

2. **O - Principio de Abierto/Cerrado (Open/Closed Principle):** Las entidades de software deben estar abiertas para la extensión pero cerradas para la modificación. Esto significa que el comportamiento de una entidad se puede extender sin cambiar su código fuente. Por ejemplo, si tenemos una clase `Shape` que tiene un método `calculateArea()`, podemos crear nuevas formas como `Circle` y `Rectangle` que implementen este método sin necesidad de modificar la clase `Shape` original.

3. **L - Principio de Substitución de Liskov (Liskov Substitution Principle):** Los objetos de una clase derivada deben ser capaces de reemplazar objetos de la clase base sin interrumpir el funcionamiento del programa. Por ejemplo, si tenemos una clase `Bird` y una clase `Duck` que hereda de `Bird`, podemos reemplazar una instancia de `Bird` con una instancia de `Duck` en cualquier lugar donde se espere un objeto `Bird`.

4. **I - Principio de Segregación de la Interfaz (Interface Segregation Principle):** Los clientes no deben verse obligados a depender de interfaces que no utilizan. Este principio establece que es mejor tener muchas interfaces específicas que una interfaz general. Por ejemplo, si tenemos una interfaz `Printer` que tiene métodos para imprimir, escanear y enviar fax, deberíamos dividirla en interfaces más pequeñas como `Printable`, `Scannable` y `Faxable`.

5. **D - Principio de Inversión de Dependencias (Dependency Inversion Principle):** Las clases de alto nivel no deben depender de clases de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones. Por ejemplo, en lugar de que una clase `UserService` dependa directamente de una clase `DatabaseService`, debería depender de una interfaz `DatabaseService` que pueda ser implementada por diferentes clases, como `MySQLService` o `PostgresService`.

Estos principios proporcionan pautas útiles para escribir código que sea modular, flexible, fácil de entender y de mantener.
