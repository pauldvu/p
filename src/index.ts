import { Elysia } from "elysia";

const app = new Elysia();

app.listen(process.env.PORT as string, () =>
	console.log(`🦊 Server started at ${app.server?.url.origin}`),
);
