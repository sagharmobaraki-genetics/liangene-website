# راهنمای دیپلوی روی Netlify

## ۱. آماده‌سازی پروژه برای Netlify

فایل `vite.config.ts` را باز کنید و بخش `nitro` را اضافه کنید:

```ts
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "netlify",
  },
});
```

## ۲. اتصال به Netlify از طریق GitHub (توصیه‌شده)

1. پروژه را روی **GitHub** پوش (Push) کنید.
2. وارد [netlify.com](https://netlify.com) شوید.
3. روی **Add new site → Import an existing project** کلیک کنید.
4. گیت‌هاب خود را متصل و ریپازیتوری این پروژه را انتخاب کنید.
5. تنظیمات Build:
   - **Build command:** `bun run build`  (یا `npm run build` / `yarn build`)
   - **Publish directory:** `dist/client`
6. روی **Deploy site** بزنید.

## ۳. اتصال دامنه سفارشی

1. در داشبورد Netlify، به **Domain management** بروید.
2. روی **Add custom domain** کلیک کنید.
3. نام دامنه‌ای که خریداری کرده‌اید را وارد کنید.
4. Netlify DNS رکوردهای لازم را به شما نشان می‌دهد. آن‌ها را در پنل دامنه‌تان (جایی که خریده‌اید) وارد کنید.
5. منتظر propagation (حداکثر ۲۴ ساعت) بمانید.

## نکته مهم
این پروژه از **TanStack Start** با SSR استفاده می‌کند. برای دیپلوی کامل (با Server Functions)، حتماً از **Git-based deployment** استفاده کنید، نه Drag & Drop استاتیک.
