# my saga.

**A private diary that lives only on your device.**

my saga. is a free, open-source journal app. There is no account, no server, no tracking, and no analytics. Your entries are saved inside your own browser or app on your own device and never get sent anywhere. Nothing to sell, because nothing is collected.

It runs on iPhone, Android, Windows, Mac, and Linux, works fully offline, and installs like a normal app.

**Open it here:** [https://YOUR-USERNAME.github.io/my-saga/](https://meganvalo.github.io/my-saga-diary-app/)

---

## Features

- Rich-text writing: bold, italic, underline, strikethrough, headings, quotes, lists, links, and dividers
- Pin favorite entries to the top
- Search across the full text of every entry
- Calendar view to jump to any day
- Writing stats
- Light and dark themes
- Optional passcode lock (4 or 6 digits) with auto-lock
- Works offline after the first load
- Export all your entries as a JSON backup
- No ads, no cloud, no sign-up

---

## Install on iPhone / iPad (iOS)

1. Open the app link above in **Safari**.
2. Tap the **Share** button (the square with an arrow).
3. Scroll down and tap **Add to Home Screen**, then tap **Add**.
4. Open my saga. from your Home Screen. Open it once while online so it can save itself for offline use.

> **Important:** the Home Screen app and Safari keep **separate** storage. Install it to your Home Screen *before* you start writing, and always open it from the icon afterward. Entries written in a Safari tab will not appear in the Home Screen app.

## Install on Android

1. Open the app link in **Chrome** (Samsung Internet and Edge work too).
2. Tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
3. Confirm. my saga. now appears in your app drawer and opens full-screen.

## Install on Windows, Mac, or Linux

**Easiest:** open the link in Chrome or Edge, click the **Install** icon at the right end of the address bar (or menu, then **Install my saga.**). It gets its own window and a Start menu / Dock entry.

On a Mac, Safari 17+ can do this too: **File, then Add to Dock**.

**Windows .exe (optional):** this repo includes a desktop wrapper. See [Build the desktop app](#build-the-windows-desktop-app) below.

---

## Your privacy, in plain English

- **Your entries never leave your device.** They are stored in your browser's built-in database (IndexedDB). The app contains no code that uploads them anywhere.
- **No accounts, cookies, analytics, or tracking.**
- **Hosting note:** if you use the GitHub Pages link, GitHub serves the app files to you, so, like any website, GitHub may see ordinary request data such as your IP address when the app loads. Your diary content is never part of that. For zero outside contact, host your own copy or use the desktop app.
- **Offline:** after the first visit, the app is saved on your device and works without a connection.

### About the passcode

The passcode is **optional** and you set it yourself (Settings, then Security). You can turn it on, change it, or turn it off at any time. It is stored only as a salted, hashed value (PBKDF2), never as the digits you typed, and the app re-locks after a minute away.

Please know what it is and isn't:

- It is a **lock screen** that keeps people out of the app on your device.
- It is **not encryption.** Entries are stored unscrambled in your browser's storage, so it will not stop someone with technical access to your device or browser profile.
- **It cannot be recovered.** If you forget it, "Forgot?" erases all entries on that device and starts fresh. Export backups regularly.

---

## Your data and backups

- Entries live in the browser or app where you wrote them. **Each device, browser, and installed copy has its own separate diary.** There is no syncing.
- **Back up:** Settings, then **Export all entries as JSON**, and keep the file somewhere safe.
- Clearing your browser's site data or uninstalling the app will delete your entries. Export first.
- **Not available yet:** importing a backup, syncing between devices, and encrypting entries at rest.

---

## Run your own copy (GitHub Pages)

1. **Fork** this repository (or download it and upload the files to a new public repo).
2. In your repo, go to **Settings, then Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute or two your app is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

There is no build step. The app is plain HTML, CSS, and JavaScript.

### Updating

After you change `index.html`, edit the cache name at the top of `sw.js` (for example `my-saga-v4` to `my-saga-v5`) so installed copies pick up the new version. Users may need to open the app twice for an update to appear.

### Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` by double-clicking works for the app itself, but the offline cache and passcode need `http://localhost` or `https`.)

---

## Build the Windows desktop app

The `desktop/` folder wraps the app with [Electron](https://www.electronjs.org/).

**No setup needed:** in your GitHub repo, open **Actions**, choose **Build Windows exe**, and click **Run workflow**. When it finishes, download the installer and portable `.exe` from the run's **Artifacts**.

**Locally** (requires [Node.js](https://nodejs.org/)):

```bash
cd desktop
npm install
npm run dist
```

The files appear in `desktop/dist/`. Windows SmartScreen may warn about an unknown publisher because the app isn't code-signed. Choose **More info, then Run anyway**.

---

## Project structure

```
index.html              the entire app (HTML, CSS, JS)
manifest.webmanifest    install info (name, icons, colors)
sw.js                   service worker for offline use
icons/                  app and home-screen icons
desktop/                Electron wrapper for the Windows app
.github/workflows/      GitHub Action that builds the .exe
```

**Built with:** vanilla JavaScript, IndexedDB, a service worker, and the Web Crypto API. No frameworks, no dependencies, no network requests at runtime.

---

## Browser support

| Platform | Install from | Notes |
|---|---|---|
| iOS / iPadOS 16.4+ | Safari | Use "Add to Home Screen" |
| Android | Chrome, Edge, Samsung Internet | "Install app" |
| Windows / Linux / ChromeOS | Chrome, Edge | "Install" in the address bar |
| macOS | Chrome, Edge, Safari 17+ | Safari uses "Add to Dock" |

Passcode and offline features require a secure context (`https://` or `localhost`), which GitHub Pages provides.

---

## Contributing

Issues and pull requests are welcome. Because the app is a single file, small focused changes are easiest to review. Please keep the project's core promise: **nothing leaves the device.** Changes that add tracking, analytics, or network calls with user data won't be accepted.

## License
