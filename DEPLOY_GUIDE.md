# TokTube AI - Guía de Despliegue en Producción

## Opción 1: Despliegue en Vercel (Recomendado)
1. Sube tu proyecto a un repositorio de GitHub / GitLab.
2. Inicia sesión en [Vercel](https://vercel.com) y haz clic en **"Add New Project"**.
3. Importa el repositorio.
4. En **Framework Preset**, selecciona **Vite**.
5. En **Environment Variables**, añade:
   - `GEMINI_API_KEY`: Tu clave de Google Gemini API.
   - `STRIPE_SECRET_KEY` (Opcional): Tu clave secreta de Stripe para cobros reales.
   - `STRIPE_PUBLISHABLE_KEY` (Opcional): Clave pública de Stripe.
6. Haz clic en **Deploy**. ¡Listo en 60 segundos!

## Opción 2: Despliegue en Netlify
1. Conecta tu repositorio en [Netlify](https://netlify.com).
2. Configuración de compilación:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Agrega las variables de entorno en **Site Settings > Environment Variables**.
4. Haz clic en **Deploy Site**.

## Opción 3: Despliegue en Cloud Run / VPS con Docker
```bash
# 1. Construir la imagen
docker build -t toktube-ai .

# 2. Ejecutar el contenedor en el puerto 3000
docker run -p 3000:3000 -e GEMINI_API_KEY="tu_clave" toktube-ai
```
