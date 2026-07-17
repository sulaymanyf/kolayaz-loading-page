# Dokploy Static Deployment

Use Dokploy's Docker deployment for this static Next.js export.

## Settings

- Dockerfile path: `Dockerfile`
- Container port: `80`
- Node version in Docker: `22`

If you use Docker Compose in Dokploy:

- Compose file: `docker-compose.yml`
- Service: `kolayaz-landing-page`
- Container port: `80`

## Notes

This project is configured with Next.js static export. The Docker build runs `pnpm build`, copies the generated `out` directory into Nginx, and serves it from port `80`.

After deployment, open `/__deploy_check`. It should return:

```txt
kolayaz-static-nginx
```

If it does not, Dokploy is not running the image built from this repository's Dockerfile.
