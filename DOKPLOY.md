# Dokploy Static Deployment

Use Dokploy's static site deployment for this project.

## Settings

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Publish directory: `out`
- Node version: `20` or newer

## Notes

This project is configured with Next.js static export, so `pnpm build` generates a fully static site in the `out` directory.

If Dokploy cannot find `pnpm`, enable Corepack in the install/build step or use:

```sh
corepack enable && pnpm install --frozen-lockfile
```
