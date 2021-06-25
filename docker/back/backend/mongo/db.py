import motor.motor_asyncio
from patterns.design_patterns import Singleton


class DB(metaclass=Singleton):
    _database = None
    local = "mongodb://admin:password@localhost:27017"  # Use for development
    dockerUrl = "mongodb://admin:password@mongodb"  # Use for production
    MONGO_DETAILS = dockerUrl

    def __init__(self):
        self.client = motor.motor_asyncio.AsyncIOMotorClient(
            self.MONGO_DETAILS)

    def get_db(self, name):
        self._database = self.client[name]
        return self._database

    def add_collection(self, name):
        try:
            self._database.create_collection(name)
        except Exception as e:
            print(e)

    def get_collection(self, name):
        try:
            return self._database[name]
        except Exception as e:
            print(e)
