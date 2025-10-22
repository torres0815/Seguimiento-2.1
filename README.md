# Seguimiento-2.1
# Estructuras de Datos en Python

**Autor:** Samuel Torres Atehortua

Este repositorio contiene una guía completa sobre estructuras de datos fundamentales en Python, con ejemplos prácticos y explicaciones detalladas de cada concepto.

---

## Tabla de Contenidos

1. [Conjuntos (Sets)](#conjuntos-sets)
2. [Diccionarios](#diccionarios)
3. [Pilas (Stacks)](#pilas-stacks)
4. [Colas (Queues)](#colas-queues)
5. [Comprensiones de Listas](#comprensiones-de-listas)

---

## Conjuntos (Sets)

### ¿Qué son los conjuntos?

Los **conjuntos** son colecciones de elementos **únicos** sin un orden específico. Son ideales cuando necesitas almacenar valores sin duplicados y realizar operaciones de búsqueda rápida.

### Características principales

- **Sin duplicados:** Automáticamente eliminan elementos repetidos
- **Sin orden:** Los elementos no tienen una posición fija
- **Búsqueda rápida:** La verificación de pertenencia es O(1)
- **Operaciones matemáticas:** Soportan unión, intersección y diferencia

### Ejemplo 1: Crear un conjunto

```python
# Crear un conjunto con frutas (duplicados se eliminan automáticamente)
frutas = {'manzana', 'naranja', 'manzana', 'pera', 'naranja', 'plátano'}
print(frutas)  # {'naranja', 'plátano', 'pera', 'manzana'}
```

**Explicación:** Aunque especificamos 'manzana' y 'naranja' dos veces, el conjunto solo guarda una copia de cada elemento.

### Ejemplo 2: Verificar pertenencia

```python
# Verificar pertenencia (muy rápido)
print('naranja' in frutas)  # True
print('uva' in frutas)      # False
```

**Explicación:** La operación `in` es muy eficiente en conjuntos, con complejidad O(1).

### Ejemplo 3: Crear conjunto desde una cadena

```python
# Crear conjunto desde una cadena
letras_unicas = set('abracadabra')
print(letras_unicas)  # {'a', 'r', 'b', 'c', 'd'}
```

**Explicación:** La función `set()` convierte cada carácter en un elemento, eliminando automáticamente los duplicados.

---

## Diccionarios

### ¿Qué son los diccionarios?

Los **diccionarios** son estructuras de datos que almacenan pares **clave-valor**. Permiten acceder a valores de forma rápida usando una clave única, similar a un diccionario real donde buscas una palabra para encontrar su definición.

### Características principales

- **Pares clave-valor:** Cada elemento tiene una clave única y un valor asociado
- **Claves únicas:** No puede haber dos claves iguales
- **Acceso rápido:** Buscar un valor por su clave es O(1)
- **Flexible:** Los valores pueden ser de cualquier tipo (números, cadenas, listas, otros diccionarios, etc.)

### Ejemplo 1: Crear un diccionario con estudiantes

```python
# Diccionario de ejemplo
estudiante = [
    {'nombre': 'Ana',
    'edad': 20,
    'carrera': 'Ingeniería',
    'notas': [85, 90, 78]},

    {'nombre': 'Mateo',
    'edad': 18,
    'carrera': 'Ingeniería',
    'notas': [4, 5, 4]}
]
print(estudiante)
```

**Salida:**
```
[{'nombre': 'Ana', 'edad': 20, 'carrera': 'Ingeniería', 'notas': [85, 90, 78]},
 {'nombre': 'Mateo', 'edad': 18, 'carrera': 'Ingeniería', 'notas': [4, 5, 4]}]
```

**Explicación:** Creamos una lista de diccionarios, donde cada diccionario representa a un estudiante con sus atributos.

### Ejemplo 2: Modificar valores

```python
# Modificar valor
estudiante[1]['edad'] = 21
print(estudiante[1]["edad"])  # 21
print(estudiante)
```

**Salida:**
```
21
[{'nombre': 'Ana', 'edad': 20, 'carrera': 'Ingeniería', 'notas': [85, 90, 78]},
 {'nombre': 'Mateo', 'edad': 21, 'carrera': 'Ingeniería', 'notas': [4, 5, 4]}]
```

**Explicación:** Accedemos al segundo estudiante (índice 1) y cambiamos su edad de 18 a 21.

### Ejemplo 3: Verificar si existe una clave

```python
# Verificar si existe clave
print('nombre' in estudiante)  # False (porque estudiante es una lista)
print('carrera' in estudiante)  # False
```

**Nota:** En este caso, `estudiante` es una lista, no un diccionario, por eso la búsqueda de claves retorna False.

---

## Pilas (Stacks)

### ¿Qué son las pilas?

Una **pila** es una estructura de datos que funciona bajo el principio **LIFO** (Last In, First Out - Último en entrar, primero en salir). Imagina una pila de platos: el último plato que colocas es el primero que quitas.

### Características principales

- **LIFO:** Último en entrar, primero en salir
- **Operaciones O(1):** Agregar y quitar elementos es muy rápido
- **Acceso limitado:** Solo puedes acceder al elemento del tope
- **Casos de uso:** Historial de navegación, deshacer/rehacer, evaluación de expresiones

### Operaciones principales

| Operación | Descripción | Complejidad |
|-----------|-------------|-------------|
| `apilar(elemento)` | Agrega un elemento al tope | O(1) |
| `desapilar()` | Elimina y retorna el tope | O(1) |
| `ver_tope()` | Ve el tope sin eliminarlo | O(1) |
| `esta_vacia()` | Verifica si está vacía | O(1) |
| `tamano()` | Retorna el número de elementos | O(1) |

### Implementación de la clase Pila

```python
class Pila:
    """
    Implementación de una estructura de datos Pila (Stack).
    Funciona bajo el principio LIFO (Last In, First Out) usando una lista.
    Las operaciones clave (apilar/desapilar) tienen complejidad O(1).
    """
    def __init__(self):
        """Inicializa una pila vacía."""
        self.items = []
 
    def apilar(self, elemento):
        """Agrega un elemento al tope de la pila (O(1))."""
        self.items.append(elemento)
 
    def desapilar(self):
        """
        Elimina y retorna el elemento del tope de la pila (O(1)).
        Retorna: El elemento del tope, o None si la pila está vacía.
        """
        if self.esta_vacia():
            return None
        return self.items.pop()
 
    def ver_tope(self):
        """
        Retorna el elemento del tope sin eliminarlo (O(1)).
        Retorna: El elemento del tope, o None si la pila está vacía.
        """
        if self.esta_vacia():
            return None
        # Acceder al último elemento de la lista
        return self.items[-1]
 
    def esta_vacia(self):
        """Verifica si la pila está vacía."""
        return not self.items # Es True si la lista está vacía (len == 0)
 
    def tamano(self):
        """Retorna el número de elementos en la pila."""
        return len(self.items)

    # --- Métodos Especiales de Python ---
    def __len__(self):
        """Permite usar len(pila) para obtener el tamaño."""
        return len(self.items)
 
    def __str__(self):
        """Representación legible para el usuario (p.ej., print(pila))."""
        # Muestra los elementos de la pila de forma intuitiva
        return f"Pila(Tope <- {self.items})"
 
    def __repr__(self):
        """Representación para desarrolladores (cómo se crearía el objeto)."""
        return f"Pila(items={self.items})"
```

### Ejemplo: Demostración de uso

```python
# Crear una pila
mi_pila = Pila()
print(f"Pila recién creada: {mi_pila} | ¿Vacía? {mi_pila.esta_vacia()}")

# Apilar elementos
print("\nApilando (10, 20, 30, 40)...")
mi_pila.apilar(10)
mi_pila.apilar(20)
mi_pila.apilar(30)
mi_pila.apilar(40)
print(f"Estado actual: {mi_pila}")
print(f"Tope (peek): {mi_pila.ver_tope()}")
print(f"Tamaño: {len(mi_pila)}")

# Desapilar elementos (LIFO)
print("\nDesapilando dos elementos (LIFO)...")
elemento_1 = mi_pila.desapilar()  # Sale 40
elemento_2 = mi_pila.desapilar()  # Sale 30
print(f"Desapilado primero: {elemento_1}")
print(f"Desapilado segundo: {elemento_2}")
print(f"Estado actual: {mi_pila}")
print(f"Nuevo tope: {mi_pila.ver_tope()}")
```

### Caso de uso práctico: Invertir una palabra

```python
# Ejemplo práctico: Invertir la palabra 'DATA' con la Pila
palabra = "DATA"
pila_letras = Pila()

# Llenar la pila
for letra in palabra:
    pila_letras.apilar(letra)

# Vaciar la pila para obtener la palabra invertida
palabra_invertida = ""
while not pila_letras.esta_vacia():
    palabra_invertida += pila_letras.desapilar()

print(f"Palabra original: {palabra}")
print(f"Palabra invertida: {palabra_invertida}")  # ATAD
```

**Explicación:** Al apilar cada letra y luego desapilarlas, obtenemos la palabra invertida porque la última letra apilada es la primera en salir.

---

## Colas (Queues)

### ¿Qué son las colas?

Una **cola** es una estructura de datos que funciona bajo el principio **FIFO** (First In, First Out - Primero en entrar, primero en salir). Imagina una fila de espera en un banco: el primero que llega es el primero que se atiende.

### Características principales

- **FIFO:** Primero en entrar, primero en salir
- **Operaciones O(1):** Agregar y quitar elementos es muy rápido
- **Acceso limitado:** Solo puedes acceder al inicio y final
- **Casos de uso:** Procesamiento de tareas, impresoras, sistemas de atención al cliente

### Ejemplo: Sistema de gestión de pedidos

```python
# Ejemplo real: Sistema de gestión de pedidos de restaurante
from collections import deque
import time

class SistemaPedidos:
    def __init__(self):
        self.pendientes = deque()  # Cola de pedidos pendientes
        self.completados = []      # Lista de pedidos completados
        self.numero_pedido = 1

    def agregar_pedido(self, cliente, items):
        """Agrega un nuevo pedido a la cola"""
        pedido = {
            'numero': self.numero_pedido,
            'cliente': cliente,
            'items': items,
            'hora': time.strftime("%H:%M:%S"),
            'estado': 'pendiente'
        }
        self.pendientes.append(pedido)
        self.numero_pedido += 1
        print(f"📝 Pedido #{pedido['numero']} agregado para {cliente}")
        return pedido['numero']

    def procesar_siguiente_pedido(self):
        """Procesa el siguiente pedido en la cola"""
        if not self.pendientes:
            print("⚠️ No hay pedidos pendientes")
            return None

        pedido = self.pendientes.popleft()
        pedido['estado'] = 'completado'
        pedido['hora_completado'] = time.strftime("%H:%M:%S")
        self.completados.append(pedido)

        print(f"✅ Pedido #{pedido['numero']} completado para {pedido['cliente']}")
        return pedido

    def mostrar_estado(self):
        """Muestra el estado actual del sistema"""
        print(f"\n📊 ESTADO DEL SISTEMA")
        print(f"🔄 Pedidos pendientes: {len(self.pendientes)}")
        print(f"✅ Pedidos completados: {len(self.completados)}")

        if self.pendientes:
            print("\n📋 Próximos pedidos:")
            for i, pedido in enumerate(self.pendientes):
                print(f"   {i+1}. #{pedido['numero']} - {pedido['cliente']} ({len(pedido['items'])} items)")

# Simulación del sistema
sistema = SistemaPedidos()

# Agregar varios pedidos
sistema.agregar_pedido("Ana", ["Hamburguesa", "Papas fritas", "Refresco"])
sistema.agregar_pedido("Carlos", ["Pizza familiar", "Ensalada"])
sistema.agregar_pedido("María", ["Sushi", "Sopa miso"])
sistema.agregar_pedido("Juan", ["Tacos", "Agua de horchata"])

# Mostrar estado inicial
sistema.mostrar_estado()

# Procesar algunos pedidos
print("\n🍳 Procesando pedidos...")
sistema.procesar_siguiente_pedido()
sistema.procesar_siguiente_pedido()

# Mostrar estado final
sistema.mostrar_estado()
```

**Salida esperada:**
```
📝 Pedido #1 agregado para Ana
📝 Pedido #2 agregado para Carlos
📝 Pedido #3 agregado para María
📝 Pedido #4 agregado para Juan

📊 ESTADO DEL SISTEMA
🔄 Pedidos pendientes: 4
✅ Pedidos completados: 0

📋 Próximos pedidos:
   1. #1 - Ana (3 items)
   2. #2 - Carlos (2 items)
   3. #3 - María (2 items)
   4. #4 - Juan (2 items)

🍳 Procesando pedidos...
✅ Pedido #1 completado para Ana
✅ Pedido #2 completado para Carlos

📊 ESTADO DEL SISTEMA
🔄 Pedidos pendientes: 2
✅ Pedidos completados: 2

📋 Próximos pedidos:
   1. #3 - María (2 items)
   2. #4 - Juan (2 items)
```

**Explicación:** Este ejemplo demuestra cómo las colas son perfectas para procesar tareas en el orden que llegan, como en un sistema real de pedidos.

---

## Comprensiones de Listas

### ¿Qué son las comprensiones de listas?

Las **comprensiones de listas** son una forma concisa y elegante de crear listas en Python. Permiten combinar operaciones de mapeo (transformación) y filtrado en una sola línea de código.

### Características principales

- **Sintaxis concisa:** Menos código, más legible
- **Combinan mapeo y filtrado:** En una sola expresión
- **Más eficientes:** Que bucles tradicionales
- **Pueden ser anidadas:** Para operaciones complejas

### Sintaxis básica

```python
# Forma general:
[expresion for elemento in iterable if condicion]

# Desglose:
# - expresion: Lo que quieres hacer con cada elemento
# - elemento: Variable que representa cada item
# - iterable: La colección sobre la que iteras
# - condicion: Filtro opcional (solo incluye si es True)
```

### Ejemplo 1: Convertir Celsius a Fahrenheit

```python
celsius = [25, 30, 15, 35, 10, 20]

# Tarea: Solo queremos las temperaturas mayores a 20°C, y las queremos en Fahrenheit.
# Fórmula de mapeo (expresión): (C * 9/5) + 32
# Condición de filtrado: C > 20

fahrenheit = [(c * 9/5) + 32 for c in celsius if c > 20]

print(fahrenheit)  # [77.0, 86.0, 95.0]
```

**Explicación:**
- **Expresión:** `(c * 9/5) + 32` - Convierte Celsius a Fahrenheit
- **Iterable:** `celsius` - La lista de temperaturas
- **Condición:** `if c > 20` - Solo temperaturas mayores a 20°C

### Ejemplo 2: Transposición de matrices

```python
# Matriz original
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

print("Matriz original:")
for row in matrix:
    print(row)

# Transposición usando listas por comprensión
transposed = [[row[i] for row in matrix] for i in range(4)]

print("\nMatriz transpuesta (listas por comprensión):")
for row in transposed:
    print(row)

# Transposición usando la función zip
transposed_zip = list(zip(*matrix))

print("\nMatriz transpuesta (función zip):")
for row in transposed_zip:
    print(row)
```

**Salida:**
```
Matriz original:
[1, 2, 3, 4]
[5, 6, 7, 8]
[9, 10, 11, 12]

Matriz transpuesta (listas por comprensión):
[1, 5, 9]
[2, 6, 10]
[3, 7, 11]
[4, 8, 12]

Matriz transpuesta (función zip):
(1, 5, 9)
(2, 6, 10)
(3, 7, 11)
(4, 8, 12)
```

**Explicación:** 
- La comprensión anidada `[[row[i] for row in matrix] for i in range(4)]` transpone la matriz
- Para cada columna (i), creamos una lista con todos los elementos de esa columna

---

## Comparación de Estructuras de Datos

| Estructura | Tipo | Acceso | Búsqueda | Inserción | Eliminación | Caso de Uso |
|-----------|------|--------|----------|-----------|-------------|------------|
| **Set** | Colección | - | O(1) | O(1) | O(1) | Elementos únicos, búsqueda rápida |
| **Diccionario** | Mapeo | O(1) | O(1) | O(1) | O(1) | Pares clave-valor |
| **Pila** | LIFO | O(1) | O(n) | O(1) | O(1) | Historial, deshacer/rehacer |
| **Cola** | FIFO | O(1) | O(n) | O(1) | O(1) | Procesamiento de tareas |
| **Lista** | Secuencia | O(1) | O(n) | O(n) | O(n) | Almacenamiento ordenado |

---

## Conclusión

Las estructuras de datos son fundamentales en programación. Cada una tiene sus propias características y casos de uso:

- **Conjuntos:** Cuando necesitas elementos únicos sin duplicados
- **Diccionarios:** Cuando necesitas asociar claves con valores
- **Pilas:** Cuando necesitas LIFO (último en entrar, primero en salir)
- **Colas:** Cuando necesitas FIFO (primero en entrar, primero en salir)
- **Comprensiones de listas:** Cuando necesitas crear listas de forma concisa y eficiente

Dominar estas estructuras te permitirá escribir código más eficiente y elegante.

---

## Autor

**Samuel Torres Atehortua**

Este repositorio fue creado como una guía educativa sobre estructuras de datos fundamentales en Python.

**Última actualización:** Octubre 2025
