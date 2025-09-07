# Pierre CAILLET's Recovery: "04–Spé Front & Creative Dev"

A Vite + Three.js + GSAP project built as a recovery assignment for the course *Spé Front & Creative Dev*. This project showcases an interactive 3D model with a smooth wireframe effect and scroll-triggered animations.

---

## 🚀 Features

- **3D Model Rendering**: Displays Wall-E in both solid and wireframe modes using Three.js.
- **Interactive Clip Effect**: Wireframe model is revealed interactively based on mouse movement, or automatically animates when idle.
- **Smooth Animations**: GSAP-powered fade-in, blur, and scroll-triggered animations.
- **Vite-powered**: Fast development server and optimized production build.

---

## 🛠️ Technologies Used

- **[Three.js](https://threejs.org/)** – 3D rendering engine for WebGL.
- **[GSAP](https://greensock.com/gsap/)** – High-performance animations.
- **[Vite](https://vite.dev/)** – Development server and build tool.

---

## 📦 Installation

### 1. Clone the repository:  
   ```bash
   git clone https://github.com/Pierrooooo/m2-rattrapages-caillet-pierre
   cd 04–Spé-Front-&-Creative-Dev creative-dev
   ```

### 2. Install dependencies:
    npm install

    pnpm install
    

### 3. Start the development server:
    
    npm run dev

    pnpm run dev
    

Open your browser at http://localhost:5173 (or as indicated in the terminal).

 ---

## 🖥️ Usage
Mouse Interaction: Move the mouse horizontally to reveal the wireframe model.

Idle Animation: Wireframe will slowly animate left and right if the mouse is idle.

Scroll Animations: Scroll down to see the canvas fade-in with blur effects.

 ---

## 🏗️ Project Structure
```
creative-dev/
├─ index.html          # Main HTML file
├─ src/
│  ├─ main.js          # JS entry point, Three.js and GSAP logic
│  ├─ three.js         # Three.js model logic
│  └─ style.css        # Project styling
├─ assets/
│  └─ wall_e.glb       # 3D model
├─ package.json
└─ vite.config.js      # Vite configuration
```

 ---

## 📄 License
This project is public and built for academic purposes.

 ---
  
## 💬 Author
Pierre CAILLET – Creative Front-end Developer