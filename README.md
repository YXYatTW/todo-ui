This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

if its already in use, you can kill the process by running:

```bash
lsof -i :3000
kill -9 <PID>
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Docker
To run the application using Docker, follow these steps:
1. Build the Docker image:
   ```bash
   docker build -t todo-ui .
   ```

2. Run the Docker container:
   ```bash
    docker run -p 3000:3000 todo-ui
    ```
   