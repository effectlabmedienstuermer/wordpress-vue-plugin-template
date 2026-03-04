# WordPress Vue Plugin Template

Minimal WordPress plugin template using Vue 3 + Vite. Deploys automatically to a Plesk server via FTP on every push to `main`.

## Stack

- **Vue 3** (IIFE build, no bundler required on the server)
- **Vite** for building
- **GitHub Actions** for CI/CD → FTP deploy

---

## Getting Started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repo from this template.

### 2. Rename the plugin

Replace all occurrences of `wordpress-vue-plugin-template` and `vue_plugin` with your plugin name:

| File | What to change |
|---|---|
| `vite.config.js` | `fileName`, `outDir`, `assetFileNames` |
| `src/main.css` | CSS selector `#vue-plugin-app` |
| `src/main.js` | `getElementById('vue-plugin-app')` |
| `wordpress-vue-plugin-template/wordpress-vue-plugin-template.php` | Plugin name, class name, shortcode, handle, IDs |
| `.github/workflows/deploy.yml` | `local-dir`, `server-dir`, `paths` filter |

Rename the plugin folder (`wordpress-vue-plugin-template/`) to match your plugin slug.

### 3. Install & build locally

```bash
npm install
npm run build
```

### 4. Develop

Edit `src/main.js` and `src/main.css`. Run `npm run build` to compile into `wordpress-vue-plugin-template/assets/`.

---

## Deployment via FTP

The GitHub Actions workflow builds and uploads the plugin folder to your Plesk server on every push to `main`.

### Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** in your repo and add:

| Secret | Description |
|---|---|
| `FTP_HOST` | FTP server hostname (e.g. `ftp.yourdomain.com`) |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `FTP_PORT` | FTP port (usually `21`) |

### Server directory

The workflow deploys to:
```
/httpdocs/wp-content/plugins/wordpress-vue-plugin-template/
```

Update `server-dir` in `.github/workflows/deploy.yml` to match your plugin slug and server path.

### Manual deploy

You can also trigger a deploy manually via **Actions → Deploy Plugin via FTP → Run workflow**.

---

## WordPress Setup

1. Upload the plugin folder to `wp-content/plugins/` (done automatically by the pipeline)
2. Activate the plugin in **WordPress → Plugins**
3. Add the shortcode to any page or widget:

```
[vue_plugin]
```
