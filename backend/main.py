from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def hello():
    return {"Hello, World!"}


@app.get("/goodbye")
def goodbye():
    return {"goodbye, world"}