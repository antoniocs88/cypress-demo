# Use a verified Cypress base image with Node.js
FROM cypress/base:20.12.2

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
# We use 'npm ci' for a clean, reproducible install from package-lock.json
# Note: Since I'm creating files, I'll use 'npm install' as there's no lock file yet.
RUN npm install

# Copy project files
COPY . .

# Default command to run tests
CMD ["npm", "test"]
