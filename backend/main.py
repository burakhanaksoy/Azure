from fastapi import FastAPI
from mongo.db import DB

app = FastAPI()

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
