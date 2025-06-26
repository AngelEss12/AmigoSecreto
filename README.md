# 🎁 Amigo Secreto - Sorteador de Nombres

Este es un proyecto desarrollado con **React + TypeScript + Vite**, que permite gestionar una lista de nombres y realizar un sorteo aleatorio para elegir un "amigo secreto". La aplicación guarda los nombres en el navegador usando `localStorage`, lo que permite conservar la lista entre recargas.

---

## ✨ Características

- ✅ Agregar nombres únicos a una lista.
- ✅ Mostrar la lista de participantes en pantalla.
- ✅ Sorteo aleatorio de un nombre.
- ✅ Persistencia con `localStorage`.
- ✅ Reinicio del estado y limpieza del almacenamiento.
- ✅ Accesibilidad: puedes presionar `Enter` para agregar nombres fácilmente.
- ✅ Estilo moderno y responsivo con Tailwind CSS.
- ✅ Separación de lógica en componentes y hooks personalizados.

---

## 📁 Estructura del proyecto
public/
├── src/
│ ├── components/
│ │ ├── InputNombre.tsx # Componente input controlado
│ │ ├── ListaNombres.tsx # Lista de nombres añadidos
│ │ └── Sorteado.tsx # Visualización del nombre sorteado
│ ├── hooks/
│ │ └── useSorteoAmigo.ts # Hook personalizado que maneja toda la lógica
│ ├── App.tsx # Composición general de la app
│ └── main.tsx # Punto de entrada principal

## 🚀 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/AngelEss12/AmigoSecreto
cd AmigoSecreto
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 🧠 Tecnologías utilizadas
- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint (con soporte para TypeScript y React Hooks)
- localStorage API para persistencia de datos

·
## 📝 Posibles mejoras
- ✅ Exportar el resultado del sorteo.
- ✅ Eliminar nombres individualmente.
- ✅ Soporte para múltiples sorteos sin repetir.
- ✅ Animaciones al sortear o mostrar resultados.
- ✅ Añadir pruebas unitarias con Vitest o React Testing Library.

¡Gracias por visitar este proyecto! 💖 Siéntete libre de contribuir o compartir.