#!/bin/bash

# Script to run server

# Function to run the server in development mode
run_dev() {
    echo "Running in development mode..."

    # Navigate to the frontend directory and build the React app
    cd ../frontend/
    npm run build
    
    # Run the Django server
    cd ../backend/
    python3 manage.py runserver
}

# Function to run the server in production mode
run_prod() {
    echo "Running in production mode..."

    export DJANGO_ENV=prod

    # Navigate to the frontend directory and build the React app
    cd ../frontend/
    npm run build

    # Navigate to the backend directory and collect static files
    cd ../backend/
    python3 manage.py collectstatic --noinput

    # Run the Django server
    python3 manage.py runserver
}

# Check the first argument to determine which environment to run
if [ "$1" == "dev" ]; then
    run_dev
elif [ "$1" == "prod" ]; then
    run_prod
else
    echo "Usage: $0 {dev|prod}"
    exit 1
fi
