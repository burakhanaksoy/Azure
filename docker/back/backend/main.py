from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mongo.db import DB

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "https://burakhanaksoy.azurewebsites.net",
    "http://burakhanaksoy.azurewebsites.net"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_instance = DB()
db = db_instance.get_db('my-db')


@app.get("/skills")
async def get_skills():
    pipeline = []
    pipeline.append({'$project': {'_id': 0}})
    collection = db.get_collection('skills')

    skills = []
    async for record in collection.aggregate(pipeline):
        skills.append(record)

    return skills


@app.get("/articles")
async def get_articles():
    pipeline = []
    pipeline.append({'$project': {'_id': 0}})
    collection = db.get_collection('articles')

    articles = []
    async for record in collection.aggregate(pipeline):
        articles.append(record)
        print(articles)

    return articles


@app.get('/demo')
async def demo():
    return 'hi'
