# shadcn-demo
Minimal [shadcn](https://ui.shadcn.com/) starter/demo with buttons and a dark mode toggle.

- Uses react v19, tailwind v4, and pnpm.
- Started with [manual](https://ui.shadcn.com/docs/installation/manual) install, because shadcn does not play nice (see [#4746](https://github.com/shadcn-ui/ui/issues/4746)) when the root tsconfig uses references to other tsconfigs, as in `create vite...`.
- Copied root tsconfig, and a few other things from [cloudflare/agents-starter](https://github.com/cloudflare/agents-starter).

### Vercel
Deployed to Vercel https://shadcn-demo-flame.vercel.app/

Unless you configure [corepack](https://vercel.com/docs/builds/configure-a-build#corepack) Vercel usees the lockfile to detect the package manager. This is not enabled by default, and the packageManager key in package.json is not respected when there is no lockfile.

## TODO

#### UI
- [ ] Fix the colors (red and black are not nice).
- [ ] Use a proper menu component.
- [ ] Replace darkmode dropdown with a simple toggle.
- [ ] Show something when js is disabled.

#### Cloudflare todos
- [ ] Add wrangler config and deploy to Cloudflare.

#### Test todos
- [ ] add vitest and basic tests.
- [ ] add a pattern for e2e tests.
