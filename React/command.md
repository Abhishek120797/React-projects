#Crete react app using CRAC

### 1. Create react app command

```
npx create-react-app appname
```

### 2. Install Tailwind CSS

Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

```
npm install -D tailwindcss
```

```
npx tailwindcss init
```

### 3. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Add the Tailwind directives to your CSS

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start your build process

Run your build process with npm run start

```
npm run start
```

# Crete react app using vite

### 1. Create react app command

```
npm create vite@latest
```

### 2. Install Tailwind CSS in vite project

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

### 3. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start your build process

Run your build process with npm run dev.

```
npm run dev
```
