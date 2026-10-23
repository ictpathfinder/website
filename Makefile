.PHONY: install lint reformat test-local build dev

install:
	pnpm install --frozen-lockfile

lint:
	pnpm run check
	pnpm exec prettier --check .

reformat:
	pnpm run format

test-local:
	pnpm run test

build:
	pnpm run build

dev:
	pnpm run dev
