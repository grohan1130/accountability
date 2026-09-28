# Local Development

## Postgres + pgAdmin (Docker)

**Prerequisite:** Docker Desktop is running.

From the repo root (`streaks/`):

1. `cp .env.example .env` — defaults work as-is; edit if needed (e.g. a port is taken).
2. `docker compose config --quiet` — validates the config (no output means OK).
3. `docker compose up -d` — starts Postgres and pgAdmin in the background.

### Connecting

| From | Host | Port |
|---|---|---|
| Your machine (FastAPI, psql, desktop clients) | `localhost` | `POSTGRES_DB_PORT` (default `5432`) |
| Inside Docker (pgAdmin) | `db` | `5432` |

**pgAdmin:** open `http://localhost:5050`, log in with `PGADMIN_DEFAULT_EMAIL` / `PGADMIN_DEFAULT_PASSWORD`, then **Register → Server** using host `db`, port `5432`, and the `POSTGRES_*` credentials.

### Common commands

| Command | Effect |
|---|---|
| `docker compose ps` | Show status |
| `docker compose logs -f db` | Follow Postgres logs |
| `docker compose down` | Stop and remove containers; **data is kept** |
| `docker compose down -v` | Also delete volumes; **wipes all local data** |

> `POSTGRES_*` and `PGADMIN_DEFAULT_*` only apply on first startup. To change them later, run `docker compose down -v` and start again.
