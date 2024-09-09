from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr, Field, validator
#from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
from dotenv import load_dotenv
import os
import logging

logging.basicConfig(level=logging.INFO)

load_dotenv()

MONGO_DETAILS = os.getenv("MONGO_DETAILS")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_method=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_DETAILS)
db = client.MKGL
users_collection = db.get_collection("form")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8, description="password must be at least 8 characters long")
    full_name: str = Field(..., min_length=2, max_length=50, description="users full name") 

    @validator("password")
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError("password must be at least 8 characters long")
        return v 
    
def get_password_hash(password):
    return pwd_context.verify(plain_password, hashed_password)


@app.options("/signup")
async def options_signup():
    return {"messsage": "options request handle"}


@app.post("/signup", status_code=status.HTTP_201_CREATED)
async def sign_up (user: User):
    try:
        existing_user = await users_collection.find_one({"email": user.email})
        if existing_user:
            raise HTTPException(status_code=400, detail="email already registered")
    
        hashed_password=get_password_hash(user.password)

        user_data={
            "email": user.email, 
            "password": hashed_password,
            "full_name": user.full_name,
        }

        result=  await users_collection.insert_one(user_data)
        
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="user creation table")

        return {"message": "user created successfully"}
    
    except HTTPException as http_err:
        print(f"HTTP error: {http_err.detail}")
        raise http_err
    
    except Exception as e:
        print(f"an error occured during user registration: {str(e)}")
        raise HTTPException(status_code=500, detail="an internal server error occured. please try again later")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0", port=8000)